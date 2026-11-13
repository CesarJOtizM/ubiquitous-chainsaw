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
  LEAD_TIME_DAYS,
} from '../data/prices';
import { business, paymentMethods, coverageText } from '../data/business';
import { catalogPath, type Lang } from '../i18n/paths';

/** Format a COP amount per language: "$120.000" (es) / "COP 120,000" (en). */
export function cop(n: number, lang: Lang): string {
  return lang === 'en' ? `COP ${n.toLocaleString('en-US')}` : `$${n.toLocaleString('de-DE')}`;
}

export type PriceLine = { label: string; value: string };
export type PriceGroup = { title: string; lines: PriceLine[]; note?: string };

/** Intro line of the Prices section (no month/year). */
export function priceLead(lang: Lang): string {
  return lang === 'en'
    ? 'Prices in Colombian pesos (COP). Shipping is cash on delivery with the carrier: you pay it when it arrives at your home.'
    : 'Precios en pesos colombianos (COP). El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.';
}

/** Shipping is paid to the carrier on delivery, not billed with the commission. */
export function shippingNote(lang: Lang): string {
  return lang === 'en'
    ? 'Shipping is cash on delivery with the carrier: you pay it when it arrives at your home, based on the city.'
    : 'El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa, según la ciudad.';
}

/**
 * Prices for a detailed topic (dogs, cats, pets), one size per line.
 * `noun` is the singular animal word in the page language.
 */
export function priceGroups(lang: Lang, noun: string, opts: { suggested?: boolean } = {}): PriceGroup[] {
  const en = lang === 'en';
  const canvasMin = cop(extraPetPrices.canvas.min, lang);
  const canvasMax = cop(extraPetPrices.canvas.max, lang);
  const baseExtra = cop(extraPetPrices.base.amount, lang);
  const caseExtra = cop(extraPetPrices.case.amount, lang);
  const extraNote = en
    ? `An extra pet costs ${canvasMin} to ${canvasMax}, depending on the size.`
    : `La mascota adicional tiene un costo de ${canvasMin} a ${canvasMax}, según el tamaño.`;

  const groups: PriceGroup[] = [
    {
      title: en ? `Canvas, 1 ${noun}` : `Lienzo, 1 ${noun}`,
      lines: canvasPrices.map((row) => ({
        label: row.special ? (en ? `Heart ${row.size}` : `Corazón ${row.size}`) : row.size!,
        value: cop(row.price, lang),
      })),
      note: extraNote,
    },
  ];

  if (opts.suggested) {
    groups.push({
      title: en ? 'How many pets fit' : 'Cuántas mascotas caben',
      lines: en
        ? [
            { label: '12×18 cm painting', value: '1 to 5' },
            { label: '20×25 or 28×35 cm painting', value: '1 to 6' },
            { label: '40×50 cm painting', value: '1 to 10' },
            { label: 'Heart painting', value: '1' },
            { label: '10×15 cm base', value: '1 to 4' },
            { label: '12×18 cm base', value: '1 to 5' },
            { label: 'Phone case', value: '1 to 3' },
          ]
        : [
            { label: 'Cuadro 12×18 cm', value: '1 a 5' },
            { label: 'Cuadro 20×25 o 28×35 cm', value: '1 a 6' },
            { label: 'Cuadro 40×50 cm', value: '1 a 10' },
            { label: 'Cuadro corazón', value: '1' },
            { label: 'Base 10×15 cm', value: '1 a 4' },
            { label: 'Base 12×18 cm', value: '1 a 5' },
            { label: 'Funda', value: '1 a 3' },
          ],
    });
  }

  groups.push(
    {
      title: en ? 'Acrylic base' : 'Base acrílica',
      lines: basePrices.map((row) => ({ label: row.size!, value: cop(row.price, lang) })),
      note: en
        ? `Includes a heart keychain with the name. An extra pet costs ${baseExtra}.`
        : `Incluye llavero corazón con el nombre. La mascota adicional tiene un costo de ${baseExtra}.`,
    },
    {
      title: en ? 'Phone case' : 'Funda de celular',
      lines: [{ label: `1 ${noun}`, value: cop(PRICE_CASE_PET, lang) }],
      note: en
        ? `An extra pet costs ${caseExtra}.`
        : `La mascota adicional tiene un costo de ${caseExtra}.`,
    },
  );

  return groups;
}

/** Markdown lines for the same groups: a title, then one size per bullet. */
export function priceGroupMarkdown(lang: Lang, noun: string, opts: { suggested?: boolean } = {}): string[] {
  const blocks: string[] = [];
  for (const group of priceGroups(lang, noun, opts)) {
    blocks.push(`**${group.title}**`, '');
    for (const line of group.lines) blocks.push(`- ${line.label}: ${line.value}`);
    if (group.note) blocks.push('', group.note);
    blocks.push('');
  }
  return blocks;
}

/** Catalog link line used after the price bullets. */
export function catalogLine(lang: Lang): string {
  const url = `${business.site}${catalogPath(lang)}`;
  return lang === 'en' ? `Catalog of finished pieces: ${url}` : `Catálogo de obras terminadas: ${url}`;
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
    ? `Turnaround is ${min} to ${max} business days. Timing can vary with the complexity of the design and the current schedule. You pay 50% to start and 50% when it is finished. The piece ships once payment is complete. You pay the shipping cost to the carrier when it arrives at your home. Payment methods: ${paymentMethods.en}.`
    : `El plazo es de ${min} a ${max} días hábiles. El tiempo puede variar según la complejidad del diseño y la agenda. Se abona el 50% para empezar y el 50% al terminar. El envío sale cuando el pago está completo. El costo del envío lo pagas a la transportadora cuando llega a tu casa. Medios de pago: ${paymentMethods.es}.`;
}

/** Greeting prefilled when someone opens WhatsApp from a page. */
export function whatsappGreeting(lang: Lang): string {
  return lang === 'en'
    ? "Hello! I'd like to commission a portrait"
    : '¡Hola! Me gustaría encargar un retrato';
}

/** wa.me link with the greeting already written in the chat. */
export function whatsappUrl(lang: Lang): string {
  const digits = business.phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(whatsappGreeting(lang))}`;
}

/** "Where / Dónde" paragraph for generated markdown. HTML pages render the links themselves. */
export function whereText(lang: Lang, variant: 'studio' | 'colombia' = 'studio'): string {
  const coverage = coverageText(lang);
  const wa = `[${business.phoneDisplay}](${whatsappUrl(lang)})`;
  const ig = `[Instagram](${business.instagram})`;
  const tk = `[TikTok](${business.tiktok})`;
  const note = shippingNote(lang);
  if (variant === 'colombia') {
    return lang === 'en'
      ? `Shipping coverage: ${coverage}. ${note} WhatsApp: ${wa}. ${ig} and ${tk}: ${business.handle}.`
      : `Cobertura de envío: ${coverage}. ${note} WhatsApp: ${wa}. ${ig} y ${tk}: ${business.handle}.`;
  }
  return lang === 'en'
    ? `I paint to order and ship to ${coverage}. ${note} WhatsApp: ${wa}.`
    : `Pinto por encargo y envío a ${coverage}. ${note} WhatsApp: ${wa}.`;
}

/** Localized section headings shared by HTML and generated markdown. */
export const sectionLabels: Record<Lang, Record<string, string>> = {
  es: {
    whatItIs: 'Qué es',
    whoFor: 'Para quién',
    included: 'Qué incluye',
    prices: 'Precios',
    turnaround: 'Plazo y pago',
    where: 'Envío a toda Colombia',
  },
  en: {
    whatItIs: 'What it is',
    whoFor: 'Who it is for',
    included: 'What is included',
    prices: 'Prices',
    turnaround: 'Turnaround and payment',
    where: 'Shipping across Colombia',
  },
};
