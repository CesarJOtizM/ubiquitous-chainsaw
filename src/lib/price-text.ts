/**
 * Price / turnaround / shipping copy generated from the canonical data in
 * data/prices.ts and data/business.ts. This is the single source behind the
 * generated .md intent pages and llms.txt, so numbers never drift and no
 * month/year date is baked into prose.
 */
import {
  canvasPrices,
  basePrices,
  extraPetPrices,
  PRICE_CASE_PET,
  PRICE_FROM_CANVAS,
  PRICE_FROM_BASE,
  LEAD_TIME_DAYS,
} from '../data/prices';
import { business, paymentMethods, coverageText } from '../data/business';
import { homePath, catalogPath, type Lang } from '../i18n/paths';

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Format a COP amount per language: "$120.000" (es) / "COP 120,000" (en). */
export function cop(n: number, lang: Lang): string {
  return lang === 'en' ? `COP ${n.toLocaleString('en-US')}` : `$${n.toLocaleString('de-DE')}`;
}

const canvasBySize = (lang: Lang) =>
  canvasPrices
    .filter((r) => !r.special)
    .map((r) => `${cop(r.price, lang)} (${r.size})`)
    .join(', ');

const heart = () => canvasPrices.find((r) => r.special)!;
const baseBySize = (lang: Lang) =>
  basePrices.map((r) => `${cop(r.price, lang)} (${r.size})`).join(', ');

/** Intro line of the Prices section (no month/year). */
export function priceLead(lang: Lang): string {
  return lang === 'en'
    ? 'Prices in Colombian pesos (COP). Shipping is extra.'
    : 'Precios en pesos colombianos (COP). El envío se cobra aparte.';
}

/**
 * Full price bullet list for a detailed topic (dogs, cats, pets).
 * `noun` is the singular animal word in the page language.
 */
export function priceBullets(lang: Lang, noun: string, opts: { suggested?: boolean } = {}): string[] {
  const h = heart();
  const bullets: string[] =
    lang === 'en'
      ? [
          `Acrylic ${noun} portrait on canvas, 1 ${noun}: ${canvasBySize('en')}. Special ${h.size} heart edition: ${cop(h.price, 'en')}.`,
          `Extra ${noun} on a canvas: ${cop(extraPetPrices.canvas.min, 'en')} to ${extraPetPrices.canvas.max.toLocaleString('en-US')} depending on size.`,
        ]
      : [
          `Retrato en acrílico sobre lienzo, 1 ${noun}: ${canvasBySize('es')}. Edición especial corazón ${h.size}: ${cop(h.price, 'es')}.`,
          `${cap(noun)} adicional en un cuadro: ${cop(extraPetPrices.canvas.min, 'es')} a ${cop(extraPetPrices.canvas.max, 'es')} según el tamaño.`,
        ];

  if (opts.suggested) {
    bullets.push(
      lang === 'en'
        ? 'Suggested pets per piece: 12×18 cm canvas, 1 to 5; 20×25 and 28×35 cm, 1 to 6; 40×50 cm, 1 to 10; heart edition, 1 pet; acrylic base 10×15 cm, 1 to 4, and 12×18 cm, 1 to 5; phone case, 1 to 3.'
        : 'Mascotas sugeridas por pieza: cuadro 12×18 cm, de 1 a 5; 20×25 y 28×35 cm, de 1 a 6; 40×50 cm, de 1 a 10; cuadro corazón, 1 mascota; base acrílica 10×15 cm, de 1 a 4, y 12×18 cm, de 1 a 5; funda, de 1 a 3.'
    );
  }

  bullets.push(
    lang === 'en'
      ? `Acrylic base, includes a heart keychain with the name: ${baseBySize('en')}. Extra ${noun}: ${cop(extraPetPrices.base.amount, 'en')}.`
      : `Base acrílica, incluye llavero corazón con nombre: ${baseBySize('es')}. ${cap(noun)} adicional: ${cop(extraPetPrices.base.amount, 'es')}.`
  );
  bullets.push(
    lang === 'en'
      ? `Phone case with a ${noun}: ${cop(PRICE_CASE_PET, 'en')}. Extra ${noun}: ${cop(extraPetPrices.case.amount, 'en')}.`
      : `Funda de celular con ${noun}: ${cop(PRICE_CASE_PET, 'es')}. ${cap(noun)} adicional: ${cop(extraPetPrices.case.amount, 'es')}.`
  );
  return bullets;
}

/** Catalog link line used after the price bullets. */
export function catalogLine(lang: Lang): string {
  const url = `${business.site}${catalogPath(lang)}`;
  return lang === 'en' ? `Catalog of finished pieces: ${url}` : `Catálogo de obras terminadas: ${url}`;
}

/** Short price summary for the Colombia (shipping) topic. */
export function priceSummaryColombia(lang: Lang): string {
  const prices = `${business.site}/info/${lang === 'en' ? 'prices' : 'precios'}.md`;
  return lang === 'en'
    ? `${priceLead('en')} Canvas portraits from ${cop(PRICE_FROM_CANVAS, 'en')} (12×18 cm, 1 pet). Acrylic bases from ${cop(PRICE_FROM_BASE, 'en')}. Pet phone case ${cop(PRICE_CASE_PET, 'en')}. Full list: ${prices}`
    : `${priceLead('es')} Retratos en lienzo desde ${cop(PRICE_FROM_CANVAS, 'es')} (12×18 cm, 1 mascota). Bases desde ${cop(PRICE_FROM_BASE, 'es')}. Funda de mascota ${cop(PRICE_CASE_PET, 'es')}. Detalle: ${prices}`;
}

/** Short price summary for the How-it-works topic. */
export function priceSummaryHow(lang: Lang): string {
  const prices = `${business.site}/info/${lang === 'en' ? 'prices' : 'precios'}.md`;
  const catalog = `${business.site}${catalogPath(lang)}`;
  return lang === 'en'
    ? `Acrylic portraits on canvas start at ${cop(PRICE_FROM_CANVAS, 'en')} (12×18 cm, 1 pet). Full prices: ${prices}. Catalog: ${catalog}`
    : `Los retratos en acrílico sobre lienzo empiezan desde ${cop(PRICE_FROM_CANVAS, 'es')} (12×18 cm, 1 mascota). Precios completos: ${prices}. Catálogo: ${catalog}`;
}

/** Turnaround and payment paragraph. */
export function leadTimeText(lang: Lang): string {
  const { min, max } = LEAD_TIME_DAYS;
  return lang === 'en'
    ? `Turnaround is ${min} to ${max} business days from the first 50% payment. The remaining 50% is paid when the work is finished. The piece ships once payment is complete. Payment methods: ${paymentMethods.en}.`
    : `El plazo es de ${min} a ${max} días hábiles desde el primer abono del 50%. El 50% restante se paga al terminar. El envío sale cuando el pago está completo. Medios de pago: ${paymentMethods.es}.`;
}

/** "Where / Dónde" paragraph. variant 'colombia' adds social handles. */
export function whereText(lang: Lang, variant: 'studio' | 'colombia' = 'studio'): string {
  const coverage = coverageText(lang);
  const home = `${business.site}${homePath(lang)}`;
  if (variant === 'colombia') {
    return lang === 'en'
      ? `Shipping coverage: ${coverage}. WhatsApp: ${business.phoneDisplay}. Instagram and TikTok: ${business.handle}. Homepage: ${home}`
      : `Cobertura de envío: ${coverage}. WhatsApp: ${business.phoneDisplay}. Instagram y TikTok: ${business.handle}. Página de inicio: ${home}`;
  }
  return lang === 'en'
    ? `Sac_Artx paints to order and ships to ${coverage}. WhatsApp: ${business.phoneDisplay}. Homepage: ${home}`
    : `Sac_Artx pinta por encargo y envía a ${coverage}. WhatsApp: ${business.phoneDisplay}. Página de inicio: ${home}`;
}

/** Localized section headings shared by HTML and generated markdown. */
export const sectionLabels: Record<Lang, Record<string, string>> = {
  es: {
    whatItIs: 'Qué es',
    whoFor: 'Para quién',
    included: 'Qué incluye',
    prices: 'Precios',
    turnaround: 'Plazo y pago',
    where: 'Dónde',
  },
  en: {
    whatItIs: 'What it is',
    whoFor: 'Who it is for',
    included: 'What is included',
    prices: 'Prices',
    turnaround: 'Turnaround and payment',
    where: 'Where',
  },
};
