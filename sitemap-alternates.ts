/**
 * Language pairs for the sitemap. @astrojs/sitemap only links locales when the
 * path is the same after the prefix, and almost every page on this site uses
 * a different slug in Spanish and English.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  aboutPath,
  blogPath,
  blogPostPath,
  catalogPath,
  homePath,
  intentPath,
  intentTopics,
  pricesPath,
  privacyPath,
  productKeys,
  productPath,
} from './src/i18n/paths.ts';

type Lang = 'es' | 'en';

export type SitemapLink = { lang: string; url: string };

const root = dirname(fileURLToPath(import.meta.url));

function field(frontmatter: string, key: string) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?\\s*$`, 'm'));
  return match?.[1]?.trim();
}

function blogPairs(): [string, string][] {
  const posts: { lang: Lang; slug: string; key: string }[] = [];
  for (const lang of ['es', 'en'] as const) {
    const dir = join(root, 'src/content/blog', lang);
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      const raw = readFileSync(join(dir, file), 'utf8');
      const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
      if (field(frontmatter, 'draft') === 'true') continue;
      const slug = field(frontmatter, 'slug');
      const key = field(frontmatter, 'translationKey');
      if (!slug || !key) continue;
      posts.push({ lang, slug, key });
    }
  }

  const pairs: [string, string][] = [];
  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.key)) continue;
    const es = posts.find((item) => item.key === post.key && item.lang === 'es');
    const en = posts.find((item) => item.key === post.key && item.lang === 'en');
    if (!es || !en) continue;
    seen.add(post.key);
    pairs.push([blogPostPath(es.slug, 'es'), blogPostPath(en.slug, 'en')]);
  }
  return pairs;
}

/** Absolute URL → hreflang links for that page and its translation. */
export function sitemapLinks(site: string) {
  const pairs: [string, string][] = [
    [homePath('es'), homePath('en')],
    [catalogPath('es'), catalogPath('en')],
    [pricesPath('es'), pricesPath('en')],
    [privacyPath('es'), privacyPath('en')],
    [aboutPath('es'), aboutPath('en')],
    [blogPath('es'), blogPath('en')],
    ...intentTopics.map((topic) => [intentPath(topic, 'es'), intentPath(topic, 'en')] as [string, string]),
    ...productKeys.map((key) => [productPath(key, 'es'), productPath(key, 'en')] as [string, string]),
    ...blogPairs(),
  ];

  const byUrl = new Map<string, SitemapLink[]>();
  for (const [esPath, enPath] of pairs) {
    const es = new URL(esPath, site).href;
    const en = new URL(enPath, site).href;
    const links: SitemapLink[] = [
      { lang: 'es-CO', url: es },
      { lang: 'en', url: en },
      { lang: 'x-default', url: es },
    ];
    byUrl.set(es, links);
    byUrl.set(en, links);
  }
  return byUrl;
}
