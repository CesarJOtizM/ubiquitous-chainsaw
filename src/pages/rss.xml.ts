import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { business } from '../data/business';
import { blogPath, blogPostPath } from '../i18n/paths';

export const prerender = true;

const SITE = business.site;
const LANG = 'es' as const;

const CHANNEL = {
  title: 'Sac_Artx · Blog',
  description:
    'Guías y consejos sobre retratos de mascotas en acrílico: cómo elegir la foto, cuidar tu obra y encargar tu pieza.',
  language: 'es-CO',
};

/** Escape the five XML entities for safe interpolation into element text. */
function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** RFC-822 date string, required by RSS 2.0 pubDate. */
function rfc822(date: Date): string {
  return date.toUTCString();
}

export const GET: APIRoute = async () => {
  const feedUrl = `${SITE}/rss.xml`;
  const blogUrl = `${SITE}${blogPath(LANG)}`;

  const posts = (await getCollection('blog'))
    .filter((post: any) => post.data.lang === LANG && !post.data.draft)
    .sort((a: any, b: any) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const items = posts
    .map((post: any) => {
      const link = `${SITE}${blogPostPath(post.data.slug, LANG)}`;
      return [
        '    <item>',
        `      <title>${xmlEscape(post.data.title)}</title>`,
        `      <link>${xmlEscape(link)}</link>`,
        `      <guid isPermaLink="true">${xmlEscape(link)}</guid>`,
        `      <description>${xmlEscape(post.data.description)}</description>`,
        `      <pubDate>${rfc822(post.data.pubDate)}</pubDate>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${xmlEscape(CHANNEL.title)}</title>`,
    `    <link>${xmlEscape(blogUrl)}</link>`,
    `    <description>${xmlEscape(CHANNEL.description)}</description>`,
    `    <language>${CHANNEL.language}</language>`,
    `    <atom:link href="${xmlEscape(feedUrl)}" rel="self" type="application/rss+xml" />`,
    items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
