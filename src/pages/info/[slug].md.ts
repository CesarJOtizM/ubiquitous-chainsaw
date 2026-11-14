import type { APIRoute, GetStaticPaths } from 'astro';
import { collectInfoDocs } from '../../lib/info-docs';

export const prerender = true;

export const getStaticPaths = (async () => {
  const docs = await collectInfoDocs();
  return docs.map((doc) => ({ params: { slug: doc.slug }, props: { markdown: doc.markdown } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response(props.markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      // The HTML page is the URL that should rank. This file is the
      // markdown alternate agents fetch.
      'X-Robots-Tag': 'noindex, follow',
    },
  });
