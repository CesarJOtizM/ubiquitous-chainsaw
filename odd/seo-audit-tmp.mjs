const BASE = 'http://localhost:4321';
const paths = [
  '/', '/en/',
  '/catalogo/', '/en/catalog/',
  '/precios/', '/en/prices/',
  '/privacidad/', '/en/privacy/',
  '/sobre-mi/', '/en/about/',
  '/blog/', '/en/blog/',
  '/blog/como-elegir-la-mejor-foto-mascota/',
  '/en/blog/how-to-choose-the-best-photo/',
  '/retratos-de-mascotas/', '/en/pet-portraits/',
  '/retratos-perros/', '/en/dog-portraits/',
  '/retratos-gatos/', '/en/cat-portraits/',
  '/como-funciona/', '/en/how-it-works/',
  '/retrato-mascota-fallecida/', '/en/memorial-pet-portrait/',
  '/producto/cuadros-en-acrilico/', '/en/product/acrylic-paintings/',
  '/producto/bases-acrilicas/', '/en/product/acrylic-bases/',
  '/producto/fundas-personalizadas/', '/en/product/custom-phone-cases/',
  '/producto/cuadros-de-diferentes-tamanos/', '/en/product/paintings-different-sizes/',
  '/producto/imanes-de-lienzo/', '/en/product/canvas-magnets/',
  '/llms.txt', '/robots.txt', '/sitemap-index.xml', '/sitemap.xml',
  '/info/preguntas.md', '/info/retratos-de-mascotas.md', '/rss.xml', '/en/rss.xml',
  '/404', '/retratos-mascotas-colombia', '/en/pet-portraits-colombia',
];

function attr(tag, name) {
  const re = new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, 'i');
  return tag.match(re)?.[1] ?? '';
}

function words(text) {
  return text.replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
}

const rows = [];
for (const p of paths) {
  const url = BASE + p;
  let res;
  try {
    res = await fetch(url, { redirect: 'manual' });
  } catch (e) {
    rows.push({ path: p, error: String(e) });
    continue;
  }
  const loc = res.headers.get('location');
  const ctype = res.headers.get('content-type') || '';
  const xrobots = res.headers.get('x-robots-tag') || '';
  const html = await res.text();
  if (!ctype.includes('html')) {
    rows.push({
      path: p, status: res.status, ctype: ctype.split(';')[0], xrobots,
      location: loc, bytes: html.length, head: html.slice(0, 180).replace(/\s+/g, ' '),
    });
    continue;
  }
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? '';
  const desc = html.match(/<meta[^>]*name=["']description["'][^>]*>/i);
  const robots = html.match(/<meta[^>]*name=["']robots["'][^>]*>/i);
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
  const hreflangs = [...html.matchAll(/<link[^>]*rel=["']alternate["'][^>]*>/gi)].map((m) => {
    const tag = m[0];
    return { hreflang: attr(tag, 'hreflang'), href: attr(tag, 'href'), type: attr(tag, 'type') };
  });
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  );
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  );
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => {
    try {
      const j = JSON.parse(m[1]);
      const types = [];
      const walk = (o) => {
        if (!o || typeof o !== 'object') return;
        if (o['@type']) types.push(Array.isArray(o['@type']) ? o['@type'].join('+') : o['@type']);
        if (Array.isArray(o['@graph'])) o['@graph'].forEach(walk);
      };
      walk(j);
      return { ok: true, types };
    } catch (e) {
      return { ok: false, error: String(e.message) };
    }
  });
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => {
    const tag = m[0];
    return {
      alt: attr(tag, 'alt'),
      hasAlt: /\salt=/.test(tag) || tag.includes('alt='),
      w: attr(tag, 'width'),
      h: attr(tag, 'height'),
      loading: attr(tag, 'loading'),
      fetchpriority: attr(tag, 'fetchpriority'),
    };
  });
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  const text = main.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
  const w = words(text);
  const internals = [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
    .map((m) => m[1])
    .filter((h) => h.startsWith('/') && !h.startsWith('//'));
  rows.push({
    path: p,
    status: res.status,
    location: loc,
    xrobots,
    title,
    titleLen: [...title].length,
    description: desc ? attr(desc[0], 'content') : '',
    descLen: desc ? [...attr(desc[0], 'content')].length : 0,
    robots: robots ? attr(robots[0], 'content') : '',
    canonical: canonical ? attr(canonical[0], 'href') : '',
    hreflangs: hreflangs.filter((h) => h.hreflang),
    h1s,
    h2count: h2s.length,
    h2s: h2s.slice(0, 8),
    ld,
    imgCount: imgs.length,
    imgNoAlt: imgs.filter((i) => !i.hasAlt || (i.alt === undefined)).length,
    imgEmptyAlt: imgs.filter((i) => i.hasAlt && i.alt === '').length,
    imgNoDim: imgs.filter((i) => !i.w || !i.h).length,
    imgEager: imgs.filter((i) => i.fetchpriority === 'high' || i.loading === 'eager').length,
    words: w.length,
    sample: w.slice(0, 40).join(' '),
    internalCount: new Set(internals.map((h) => h.split('#')[0].split('?')[0])).size,
  });
}

console.log(JSON.stringify(rows, null, 2));
