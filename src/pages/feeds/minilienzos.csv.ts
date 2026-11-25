import type { APIRoute } from 'astro';
import { buildOpenAiProductFeed, FEED_KIND } from '../../lib/openai-product-feed';

export const prerender = true;

/** Magnetic mini canvases only. */
export const GET: APIRoute = () =>
  new Response(buildOpenAiProductFeed(FEED_KIND.MAGNETS), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
