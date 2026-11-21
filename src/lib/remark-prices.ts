import { fileURLToPath } from 'node:url';
import type { Lang } from '../i18n/paths';
import { applyPrices } from './price-text';

/**
 * Sätteri visitor. Blog markdown keeps tokens such as {canvas-12x18};
 * this fills them from src/data/prices.ts while the post is rendered.
 */
export const priceTokenPlugin = {
  name: 'price-tokens',
  text(node: { value: string }, ctx: { fileURL?: URL }) {
    if (!ctx.fileURL) return;
    const source = fileURLToPath(ctx.fileURL);
    if (!source.includes('content') || !source.includes('blog')) return;
    const lang: Lang = /[/\\]en[/\\]/.test(source) ? 'en' : 'es';
    const value = applyPrices(node.value, lang);
    if (value === node.value) return;
    return { type: 'text' as const, value };
  },
};
