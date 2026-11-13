import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts, one entry per language. `translationKey` links an ES post to its
 * EN counterpart so the post routes can emit reciprocal hreflang. The `slug`
 * field is the URL segment used under /blog/ and /en/blog/.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['es', 'en']),
    slug: z.string(),
    translationKey: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
