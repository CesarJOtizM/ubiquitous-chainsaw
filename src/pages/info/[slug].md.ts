import type { APIRoute, GetStaticPaths } from 'astro';
import { intentPages } from '../../data/intent-pages';
import { intentMarkdown } from '../../lib/intent-markdown';

export const prerender = true;

const entries = Object.values(intentPages);

export const getStaticPaths = (() =>
  entries.map((entry) => ({ params: { slug: entry.slug } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const entry = entries.find((e) => e.slug === params.slug);
  if (!entry) {
    return new Response('Not found', { status: 404 });
  }
  return new Response(intentMarkdown(entry), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
