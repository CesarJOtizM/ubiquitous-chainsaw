/**
 * Rebuilds the full markdown for an intent page, matching the original
 * public/info/*.md structure. The unique prose comes from data/intent-pages.ts;
 * the Prices / Turnaround / Where sections come from lib/price-text.ts, so no
 * month/year date and no hand-copied numbers remain.
 */
import {
  priceLead,
  priceBullets,
  catalogLine,
  priceSummaryColombia,
  priceSummaryHow,
  leadTimeText,
  whereText,
  sectionLabels,
} from './price-text';
import { business } from '../data/business';
import type { IntentEntry } from '../data/intent-pages';
import type { IntentTopic } from '../i18n/paths';

/** Portrait pages that name the studio profiles in the "what it is" section. */
export const profileTopics = new Set<IntentTopic>(['pets', 'dogs', 'cats', 'memorial']);

/** Markdown sentence with full profile URLs, for the generated /info pages. */
export function profileSentence(entry: IntentEntry): string {
  const ig = `[Instagram](${business.instagram})`;
  const tk = `[TikTok](${business.tiktok})`;
  const conj = entry.lang === 'en' ? 'and' : 'y';
  return `${ig} ${conj} ${tk}: ${business.handle}.`;
}

function includedBlock(entry: IntentEntry): string[] {
  const lines = entry.includedOrdered
    ? entry.included.map((item, i) => `${i + 1}. ${item}`)
    : entry.included.map((item) => `- ${item}`);
  if (entry.includedNote) lines.push('', entry.includedNote);
  return lines;
}

function priceBlock(entry: IntentEntry): string[] {
  const { lang, noun, priceVariant } = entry;
  switch (priceVariant) {
    case 'summaryColombia':
      return [priceSummaryColombia(lang)];
    case 'summaryHow':
      return [priceSummaryHow(lang)];
    case 'bullets':
    case 'bulletsSuggested': {
      const bullets = priceBullets(lang, noun, { suggested: priceVariant === 'bulletsSuggested' });
      return [priceLead(lang), '', ...bullets.map((b) => `- ${b}`), '', catalogLine(lang)];
    }
  }
}

/** Full markdown document for an intent entry (ends with a trailing newline). */
export function intentMarkdown(entry: IntentEntry): string {
  const labels = sectionLabels[entry.lang];
  const parts: string[] = [
    `# ${entry.h1}`,
    '',
    entry.lead,
    '',
    `## ${labels.whatItIs}`,
    '',
    profileTopics.has(entry.topic) ? `${entry.whatItIs} ${profileSentence(entry)}` : entry.whatItIs,
    '',
    `## ${labels.whoFor}`,
    '',
    entry.whoFor,
    '',
    `## ${labels.included}`,
    '',
    ...includedBlock(entry),
    '',
    `## ${labels.prices}`,
    '',
    ...priceBlock(entry),
    '',
    `## ${labels.turnaround}`,
    '',
    leadTimeText(entry.lang),
    '',
    `## ${labels.where}`,
    '',
    whereText(entry.lang, entry.whereVariant),
  ];
  return parts.join('\n') + '\n';
}
