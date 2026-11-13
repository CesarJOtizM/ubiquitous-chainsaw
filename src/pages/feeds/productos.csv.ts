import type { APIRoute } from 'astro';
import { buildOpenAiProductFeed } from '../../lib/openai-product-feed';

export const prerender = true;

/** Hosted product feed for ChatGPT Business Hub. Paste this URL; it is the file, not a product page. */
export const GET: APIRoute = () =>
  new Response(buildOpenAiProductFeed(), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
