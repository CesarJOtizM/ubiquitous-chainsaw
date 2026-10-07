/**
 * Upload public/images/** to ImageKit and write src/data/catalog-images.json
 *
 * Requires in .env (see .env.example):
 *   IMAGEKIT_PUBLIC_KEY
 *   IMAGEKIT_PRIVATE_KEY
 *   IMAGEKIT_URL_ENDPOINT
 *
 * Usage: bun run images:upload
 *
 * Does NOT delete local public/images.
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

async function loadEnv() {
  try {
    const raw = await readFile(join(root, '.env'), 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
      process.env[key] = val;
    }
  } catch (err) {
    console.error('Could not read .env:', err.message);
  }
}

await loadEnv();

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const urlEndpoint = (process.env.IMAGEKIT_URL_ENDPOINT || '').replace(/\/$/, '');
const folder = process.env.IMAGEKIT_FOLDER || 'sacartx';

if (!privateKey || !urlEndpoint) {
  console.error(`
Missing ImageKit credentials. Add to .env (see .env.example):

  IMAGEKIT_PUBLIC_KEY=public_...
  IMAGEKIT_PRIVATE_KEY=private_...
  IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id

Do not paste keys in chat.
`);
  process.exit(1);
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function authHeader() {
  return `Basic ${Buffer.from(`${privateKey}:`).toString('base64')}`;
}

async function uploadFile(absPath) {
  const rel = relative(join(root, 'public'), absPath).replace(/\\/g, '/');
  const fileName = rel.split('/').pop();
  const filePath = `${folder}/${dirname(rel).replace(/\\/g, '/')}`;
  const bytes = await readFile(absPath);
  const form = new FormData();
  form.append('file', new Blob([bytes]), fileName);
  form.append('fileName', fileName);
  form.append('useUniqueFileName', 'false');
  form.append('folder', `/${filePath}`);
  form.append('overwriteFile', 'true');

  const res = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST',
    headers: { Authorization: authHeader() },
    body: form,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upload failed for ${rel}: ${res.status} ${text}`);
  }
  const json = await res.json();
  return {
    path: rel,
    fileId: json.fileId,
    url: json.url,
    width: json.width,
    height: json.height,
    size: json.size,
  };
}

const imagesDir = join(root, 'public', 'images');
const files = await walk(imagesDir);
console.log(`Uploading ${files.length} files to ImageKit folder /${folder} ...`);

const manifest = {};
for (const file of files) {
  const info = await stat(file);
  const rel = relative(join(root, 'public'), file).replace(/\\/g, '/');
  process.stdout.write(`  ${rel} (${Math.round(info.size / 1024)} KB)... `);
  const result = await uploadFile(file);
  manifest[rel] = result;
  console.log('ok');
}

const outPath = join(root, 'src', 'data', 'catalog-images.json');
await writeFile(outPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\nWrote ${outPath}`);
console.log(`
Next:
1. Set PUBLIC_IMAGEKIT_ENABLED=true in .env and Vercel
2. Put IMAGEKIT_URL_ENDPOINT in Vercel and set the rewrite in vercel.json
3. Verify /catalogo/ loads via /img/...
4. Only then remove public/images from the repo
`);
