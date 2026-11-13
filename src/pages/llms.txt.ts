import type { APIRoute } from 'astro';
import { business, coverageText } from '../data/business';
import {
  priceLead,
  priceGroupMarkdown,
  leadTimeText,
} from '../lib/price-text';
import {
  catalogPath,
  homePath,
  intentPath,
  intentTopics,
  pricesPath,
  privacyPath,
  type Lang,
} from '../i18n/paths';
import { intentEntry } from '../data/intent-pages';

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

function intentLinks(lang: Lang): string[] {
  return intentTopics.map((topic) => {
    const entry = intentEntry(topic, lang);
    return `- [${entry.linkLabel}](${url(intentPath(topic, lang))})`;
  });
}

function pagesSection(lang: Lang): string[] {
  if (lang === 'en') {
    return [
      '### Pages',
      '',
      `- [Homepage](${url(homePath('en'))})`,
      `- [Prices](${url(pricesPath('en'))})`,
      `- [Catalog](${url(catalogPath('en'))})`,
      `- [Privacy](${url(privacyPath('en'))})`,
      ...intentLinks('en'),
      `- [Instagram](${business.instagram}): ${business.handle}`,
      `- [TikTok](${business.tiktok}): ${business.handle}`,
      `- [FAQ in text](${SITE}/info/preguntas.md)`,
    ];
  }
  return [
    '## Páginas',
    '',
    `- [Inicio](${url(homePath('es'))})`,
    `- [Precios](${url(pricesPath('es'))})`,
    `- [Catálogo](${url(catalogPath('es'))})`,
    `- [Privacidad](${url(privacyPath('es'))})`,
    ...intentLinks('es'),
    `- [Instagram](${business.instagram}): ${business.handle}`,
    `- [TikTok](${business.tiktok}): ${business.handle}`,
    `- [Preguntas frecuentes en texto](${SITE}/info/preguntas.md)`,
  ];
}

function buildLlmsTxt(): string {
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
    ...pagesSection('es'),
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
    ...pagesSection('en'),
  ];
  return lines.join('\n') + '\n';
}

export const GET: APIRoute = () =>
  new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
