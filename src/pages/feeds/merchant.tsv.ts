import type { APIRoute } from 'astro';
import { buildMerchantProductFeed } from '../../lib/merchant-product-feed';

export const prerender = true;

/** One Merchant Center file for the whole catalog. */
export const GET: APIRoute = () =>
  new Response(buildMerchantProductFeed(), {
    headers: {
      'Content-Type': 'text/tab-separated-values; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
