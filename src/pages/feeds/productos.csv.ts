import type { APIRoute } from 'astro';
import { buildOpenAiProductFeed, FEED_KIND } from '../../lib/openai-product-feed';

export const prerender = true;

/** Full catalog. Use the per-type feeds when the Hub accepts more than one file. */
export const GET: APIRoute = () =>
  new Response(buildOpenAiProductFeed(FEED_KIND.ALL), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
