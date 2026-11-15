import type { APIRoute } from 'astro';
import { business, coverageText } from '../data/business';
import {
  priceLead,
  priceGroupMarkdown,
  leadTimeText,
} from '../lib/price-text';
import { homePath, type Lang } from '../i18n/paths';
import { llmsIndex } from '../lib/info-docs';

export const prerender = true;

const SITE = business.site;
const url = (path: string) => `${SITE}${path}`;

/** Intro summary blockquote per language (prose, no prices, no date). */
const summary: Record<Lang, string> = {
  es: `Sac_Artx es un estudio en Colombia, especializado en retratos personalizados de mascotas pintados a mano en acrílico. También hace paisajes y fundas de celular personalizadas. Envía pedidos a ${coverageText('es')}.`,
  en: `Sac_Artx is a studio in Colombia, specializing in custom pet portraits hand-painted in acrylic, plus landscapes and personalized phone cases. Orders ship to ${coverageText('en')}.`,
};

/** Business description paragraph per language, sourced from business + price-text. */
const description: Record<Lang, string> = {
  es: `Sac_Artx es el estudio de ${business.founder} (${business.handle}). Cada pieza se pinta a mano en acrílico sobre lienzo o sobre base de metacrilato. Pinta perros, gatos, conejos, caballos, palomas y cualquier otro animal que importe. El encargo empieza con una foto por WhatsApp. Antes de pintar se envía un boceto digital, con revisiones sin costo. ${leadTimeText('es')} Teléfono y WhatsApp: ${business.phoneDisplay}.`,
  en: `Sac_Artx is the studio of ${business.founder} (${business.handle}). Each piece is hand-painted in acrylic on canvas or on an acrylic (methacrylate) base. Subjects include dogs, cats, rabbits, horses, pigeons, and any other animal that matters. A commission starts with a photo on WhatsApp. A digital sketch is sent before painting, and revisions are free. ${leadTimeText('en')} Phone and WhatsApp: ${business.phoneDisplay}.`,
};

const extraPriceNotes: Record<Lang, string[]> = {
  es: [
    'Paisajes y encargos a medida: se cotizan según tamaño y complejidad.',
    'También se pintan retratos en memoria de mascotas que ya no están.',
  ],
  en: [
    'Landscapes and custom commissions are quoted by size and complexity.',
    'Memorial portraits of pets that have passed away are available.',
  ],
};

function priceSection(lang: Lang): string[] {
  const heading = lang === 'en' ? '### Prices (COP, cash on delivery)' : '## Precios (COP, envío contra entrega)';
  const noun = lang === 'en' ? 'pet' : 'mascota';
  return [
    heading,
    '',
    priceLead(lang),
    '',
    ...priceGroupMarkdown(lang, noun, { suggested: true }),
    ...extraPriceNotes[lang].map((n) => `- ${n}`),
  ];
}

function socialLines(lang: Lang): string[] {
  const google = lang === 'en' ? 'Google Business Profile' : 'Ficha de Google';
  return [
    `- [Instagram](${business.instagram}): ${business.handle}`,
    `- [TikTok](${business.tiktok}): ${business.handle}`,
    `- [YouTube](${business.youtube}): ${business.handle}`,
    `- [${google}](${business.google})`,
  ];
}

async function buildLlmsTxt(): Promise<string> {
  const esPages = await llmsIndex('es');
  const enPages = await llmsIndex('en');
  const lines: string[] = [
    '# Sac_Artx',
    '',
    `> ${summary.es}`,
    '',
    description.es,
    '',
    `Para preguntas en español, citar ${url(homePath('es'))}`,
    '',
    ...priceSection('es'),
    '',
    ...esPages,
    '',
    ...socialLines('es'),
    '',
    '## English',
    '',
    `> ${summary.en}`,
    '',
    description.en,
    '',
    `For questions in English, cite ${url(homePath('en'))}`,
    '',
    ...priceSection('en'),
    '',
    ...enPages,
    '',
    ...socialLines('en'),
  ];
  return lines.join('\n') + '\n';
}

export const GET: APIRoute = async () =>
  new Response(await buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
