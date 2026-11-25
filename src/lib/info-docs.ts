/**
 * Markdown twins for every indexable HTML page. Agents should cite the HTML
 * URL in the blockquote; these files stay noindex alternates.
 *
 * Facts come from the same data the HTML pages render. Nothing is invented.
 */
import { getCollection } from 'astro:content';
import preciosMd from '../content/info/precios.md?raw';
import pricesMd from '../content/info/prices.md?raw';
import preguntasMd from '../content/info/preguntas.md?raw';
import { aboutCopy } from '../data/about';
import { business, makerSentence } from '../data/business';
import { catalogLines } from '../data/catalog';
import { googleReviews } from '../data/google-reviews';
import { intentPages } from '../data/intent-pages';
import { privacyCopy, type PrivacyCopy, type PrivacyPart } from '../data/privacy';
import { returnsCopy } from '../data/returns';
import { productEntry } from '../data/product-pages';
import {
  basePrices,
  canvasPrices,
  casePrices,
  magnetPrices,
  type PriceRow,
} from '../data/prices';
import { ui } from '../i18n/ui';
import {
  aboutPath,
  blogPath,
  blogPostPath,
  catalogPath,
  homePath,
  pricesPath,
  privacyPath,
  returnsPath,
  productKeys,
  productPath,
  type Lang,
  type ProductKey,
} from '../i18n/paths';
import { intentMarkdown } from './intent-markdown';
import { applyPrices, cop, leadTimeText, priceLead, whereText } from './price-text';

export type InfoDoc = { slug: string; markdown: string };

const SITE = business.site;

function t(lang: Lang, key: string): string {
  const table = ui[lang] as Record<string, string>;
  const fallback = ui.es as Record<string, string>;
  return applyPrices(table[key] ?? fallback[key] ?? key, lang);
}

function cite(lang: Lang, htmlPath: string): string {
  const label = lang === 'en' ? 'Cite this page' : 'Citar esta página';
  return `> ${label}: ${SITE}${htmlPath}`;
}

function abs(href: string): string {
  if (/^https?:\/\//.test(href)) return href;
  return `${SITE}${href.startsWith('/') ? href : `/${href}`}`;
}

function priceLabel(row: PriceRow, lang: Lang): string {
  const name = row.nameKey ? t(lang, row.nameKey) : '';
  const sizeAlreadyInName = Boolean(row.size && name.includes(row.size));
  return [name || null, sizeAlreadyInName ? null : row.size].filter(Boolean).join(' · ');
}

const priceTables = {
  canvas: canvasPrices,
  base: basePrices,
  case: casePrices,
  magnet: magnetPrices,
} as const;

function productMarkdown(product: ProductKey, lang: Lang): string {
  const entry = productEntry(product, lang);
  const htmlPath = productPath(product, lang);
  const quoteOnly = product === 'sizes';
  const rows = entry.priceSource ? priceTables[entry.priceSource] : [];
  const priceLines = quoteOnly
    ? rows.map((row) => `- ${priceLabel(row, lang)}`)
    : rows.map((row) => {
        const from = row.from ? (lang === 'en' ? 'From ' : 'Desde ') : '';
        return `- ${priceLabel(row, lang)}: ${from}${cop(row.price, lang)}`;
      });
  const priceIntro = quoteOnly
    ? lang === 'en'
      ? 'Quoted by the design, the size, and the level of detail. If you need a larger size, ask on WhatsApp. Shipping is cash on delivery with the carrier: you pay it when it arrives at your home.'
      : 'Se cotiza según el diseño, el tamaño y el nivel de detalle. Si necesitas un tamaño más grande, escríbeme por WhatsApp. El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.'
    : entry.priceSource
      ? priceLead(lang)
      : entry.priceNote ?? '';

  const reviews = googleReviews[product] ?? [];
  const reviewBlock =
    reviews.length === 0
      ? []
      : [
          `## ${lang === 'en' ? 'What do Google reviews say?' : '¿Qué dicen las reseñas de Google?'}`,
          '',
          lang === 'en'
            ? `${reviews.length} review on this page, ${reviews[0]!.stars} out of 5. The text is the original review, in Spanish.`
            : `${reviews.length} reseña en esta página, ${reviews[0]!.stars} de 5.`,
          '',
          ...reviews.flatMap((review) => [
            `> ${review.quote}`,
            '',
            `— ${review.author}, Google`,
            '',
          ]),
        ];

  const lines = [
    `# ${entry.h1}`,
    '',
    cite(lang, htmlPath),
    '',
    entry.lead,
    '',
    makerSentence(lang),
    '',
    `## ${lang === 'en' ? 'What does the commission include?' : '¿Qué incluye el encargo?'}`,
    '',
    ...entry.whatIncluded.map((item) => `- ${item}`),
    '',
    `## ${lang === 'en' ? 'How much does it cost?' : '¿Cuánto cuesta?'}`,
    '',
    priceIntro,
    '',
    ...priceLines,
    '',
    `## ${lang === 'en' ? 'How long does it take and how do you pay?' : '¿Cuánto tarda y cómo se paga?'}`,
    '',
    leadTimeText(lang),
    '',
    `## ${lang === 'en' ? 'Which cities in Colombia does Sac_Artx ship to?' : '¿A qué ciudades de Colombia envía Sac_Artx?'}`,
    '',
    whereText(lang, 'studio'),
    '',
    ...reviewBlock,
    ...entry.faq.flatMap((item) => {
      const answer = item.link ? `${item.a} [${item.link.label}](${abs(item.link.href)}).` : item.a;
      return [`## ${item.q}`, '', answer, ''];
    }),
  ];
  return lines.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

function homeMarkdown(lang: Lang): string {
  const steps = [1, 2, 3, 4, 5].map(
    (n) => `${n}. **${t(lang, `process.step${n}.title`)}.** ${t(lang, `process.step${n}.desc`)}`,
  );
  const pets = [1, 2, 3, 4, 5, 6, 7].map((n) => `- ${t(lang, `pets.l${n}`)}`);
  const faqs: { q: string; a: string; list?: string[]; after?: string }[] = [
    { q: t(lang, 'faq.q11'), a: t(lang, 'faq.a11') },
    { q: t(lang, 'faq.q12'), a: t(lang, 'faq.a12') },
    { q: t(lang, 'faq.q1'), a: t(lang, 'faq.a1') },
    { q: t(lang, 'faq.q2'), a: t(lang, 'faq.a2') },
    { q: t(lang, 'faq.q3'), a: t(lang, 'faq.a3') },
    { q: t(lang, 'faq.q4'), a: t(lang, 'faq.a4') },
    { q: t(lang, 'faq.q5'), a: t(lang, 'faq.a5') },
    { q: t(lang, 'faq.q6'), a: t(lang, 'faq.a6') },
    { q: t(lang, 'faq.q13'), a: t(lang, 'faq.a13') },
    { q: t(lang, 'faq.q7'), a: t(lang, 'faq.a7') },
    { q: t(lang, 'faq.q8'), a: t(lang, 'faq.a8') },
    { q: t(lang, 'faq.q9'), a: t(lang, 'faq.a9'), list: pets, after: t(lang, 'faq.a9After') },
    { q: t(lang, 'faq.q10'), a: t(lang, 'faq.a10') },
  ];
  const lines = [
    `# ${t(lang, 'hero.label')}`,
    '',
    cite(lang, homePath(lang)),
    '',
    t(lang, 'hero.tagline'),
    '',
    `${t(lang, 'hero.stat1Value')}: ${t(lang, 'hero.stat1Label')}. ${t(lang, 'hero.stat2Value')}: ${t(lang, 'hero.stat2Label')}. ${t(lang, 'hero.stat3Value')}: ${t(lang, 'hero.stat3Label')}.`,
    '',
    `## ${lang === 'en' ? 'How do you commission a piece?' : '¿Cómo se encarga una pieza?'}`,
    '',
    ...steps,
    '',
    ...faqs.flatMap((item) => [
      `## ${item.q}`,
      '',
      item.a,
      '',
      ...(item.list ?? []),
      ...(item.after ? ['', item.after] : []),
      '',
    ]),
  ];
  return lines.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

function catalogMarkdown(lang: Lang): string {
  const lines = [
    `# ${t(lang, 'catalog.h1')}`,
    '',
    cite(lang, catalogPath(lang)),
    '',
    t(lang, 'catalog.answer'),
    '',
    t(lang, 'catalog.subtitle'),
    '',
    ...catalogLines.flatMap((line) => [
      `## ${t(lang, line.name)}`,
      '',
      `${t(lang, line.desc)} ${t(lang, line.medium)}. ${t(lang, line.price)}.`,
      '',
    ]),
  ];
  return lines.join('\n');
}

function aboutMarkdown(lang: Lang): string {
  const copy = aboutCopy[lang];
  const lines = [
    `# ${lang === 'en' ? 'Who is Sara Amaya Caldas?' : '¿Quién es Sara Amaya Caldas?'}`,
    '',
    cite(lang, aboutPath(lang)),
    '',
    copy.lead,
    '',
    ...copy.chapters.flatMap((chapter) => [
      `## ${chapter.title}`,
      '',
      ...chapter.paragraphs,
      '',
      ...chapter.images.flatMap((image) => [image.caption ? `**${image.caption}.** ${image.alt}` : image.alt, '']),
    ]),
  ];
  return lines.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

function privacyParts(parts: PrivacyPart[]): string {
  return parts
    .map((part) => (part.href ? `[${part.text}](${part.href})` : part.text))
    .join('');
}

function policyMarkdown(lang: Lang, copy: PrivacyCopy, htmlPath: string): string {
  const lines = [
    `# ${copy.title}`,
    '',
    cite(lang, htmlPath),
    '',
    copy.updated,
    '',
    copy.intro,
    '',
    ...copy.sections.flatMap((section) => [
      `## ${section.title}`,
      '',
      ...section.blocks.flatMap((block) =>
        block.type === 'p'
          ? [privacyParts(block.parts), '']
          : [...block.items.map((item) => `- ${privacyParts(item)}`), ''],
      ),
    ]),
  ];
  return lines.join('\n');
}

function privacyMarkdown(lang: Lang): string {
  return policyMarkdown(lang, privacyCopy[lang], privacyPath(lang));
}

function returnsMarkdown(lang: Lang): string {
  return policyMarkdown(lang, returnsCopy[lang], returnsPath(lang));
}

function blogIndexMarkdown(
  lang: Lang,
  posts: { title: string; description: string; slug: string; pubDate: Date }[],
): string {
  const heading =
    lang === 'en'
      ? 'How do you commission a pet portrait from Sac_Artx?'
      : '¿Cómo encargar un retrato de tu mascota en Sac_Artx?';
  const intro =
    lang === 'en'
      ? 'Sara Amaya Caldas writes these guides from Sac_Artx, a studio in Colombia. Each post answers one question: which photo works, how she paints a dog, and how she paints a cat, with real catalog pieces, the sketch, the turnaround, and shipping.'
      : 'Sara Amaya Caldas escribe estas guías desde Sac_Artx, un estudio en Colombia. Cada entrada responde una pregunta: qué foto sirve, cómo pinta un perro y cómo pinta un gato, con piezas reales del catálogo, el boceto, el plazo y el envío.';
  const lines = [
    `# ${heading}`,
    '',
    cite(lang, blogPath(lang)),
    '',
    intro,
    '',
    ...posts.flatMap((post) => [
      `## ${post.title}`,
      '',
      post.description,
      '',
      `[${lang === 'en' ? 'Read' : 'Leer'}](${abs(blogPostPath(post.slug, lang))})`,
      '',
    ]),
  ];
  return lines.join('\n');
}

function blogPostMarkdown(post: {
  data: { title: string; description: string; slug: string; lang: Lang; pubDate: Date };
  body?: string;
}): string {
  const { data } = post;
  const lang = data.lang;
  const published = data.pubDate.toISOString().slice(0, 10);
  const author =
    lang === 'en'
      ? `Author: ${business.founder}, ${business.name}. Published: ${published}.`
      : `Autora: ${business.founder}, ${business.name}. Publicado: ${published}.`;
  const body = applyPrices(post.body ?? '', lang)
    .replace(/\]\(\//g, `](${SITE}/`)
    .replace(/src="\//g, `src="${SITE}/`);
  return [`# ${data.title}`, '', cite(lang, blogPostPath(data.slug, lang)), '', author, '', data.description, '', body.trim(), ''].join(
    '\n',
  );
}

type BlogEntry = {
  data: { title: string; description: string; slug: string; lang: Lang; pubDate: Date; draft?: boolean };
  body?: string;
};

/** Prices and FAQ markdown. Tokens are filled from src/data/prices.ts. */
const infoTemplates = {
  precios: { lang: 'es' as const, source: preciosMd },
  prices: { lang: 'en' as const, source: pricesMd },
  preguntas: { lang: 'es' as const, source: preguntasMd },
};

function infoTemplate(name: keyof typeof infoTemplates): string {
  const doc = infoTemplates[name];
  return `${applyPrices(doc.source, doc.lang).trimEnd()}\n`;
}

/** Every generated /info/<slug>.md document, including prices and the FAQ. */
export async function collectInfoDocs(): Promise<InfoDoc[]> {
  const posts = (await getCollection('blog')) as BlogEntry[];
  const live = posts.filter((post) => !post.data.draft);
  const docs: InfoDoc[] = [
    ...Object.values(intentPages).map((entry) => ({
      slug: entry.slug,
      markdown: intentMarkdown(entry),
    })),
    ...productKeys.flatMap((product) =>
      (['es', 'en'] as const).map((lang) => ({
        slug: productEntry(product, lang).slug,
        markdown: productMarkdown(product, lang),
      })),
    ),
    { slug: 'inicio', markdown: homeMarkdown('es') },
    { slug: 'home', markdown: homeMarkdown('en') },
    { slug: 'catalogo', markdown: catalogMarkdown('es') },
    { slug: 'catalog', markdown: catalogMarkdown('en') },
    { slug: 'sobre-mi', markdown: aboutMarkdown('es') },
    { slug: 'about', markdown: aboutMarkdown('en') },
    { slug: 'privacidad', markdown: privacyMarkdown('es') },
    { slug: 'privacy', markdown: privacyMarkdown('en') },
    { slug: 'devoluciones', markdown: returnsMarkdown('es') },
    { slug: 'returns', markdown: returnsMarkdown('en') },
    { slug: 'precios', markdown: infoTemplate('precios') },
    { slug: 'prices', markdown: infoTemplate('prices') },
    { slug: 'preguntas', markdown: infoTemplate('preguntas') },
  ];

  for (const lang of ['es', 'en'] as const) {
    const list = live
      .filter((post) => post.data.lang === lang)
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
    docs.push({
      slug: lang === 'en' ? 'blog-en' : 'blog',
      markdown: blogIndexMarkdown(
        lang,
        list.map((post) => post.data),
      ),
    });
    for (const post of list) {
      docs.push({ slug: post.data.slug, markdown: blogPostMarkdown(post) });
    }
  }

  const seen = new Set<string>();
  for (const doc of docs) {
    if (seen.has(doc.slug)) throw new Error(`Duplicate /info/${doc.slug}.md`);
    seen.add(doc.slug);
  }
  return docs;
}

type LinkLine = { label: string; md: string; blurb: string; html: string };

function linkLine(lang: Lang, item: LinkLine): string {
  const citeWord = lang === 'en' ? 'Cite' : 'Citar';
  return `- [${item.label}](${SITE}/info/${item.md}.md): ${item.blurb} ${citeWord} ${SITE}${item.html}`;
}

/** llms.txt index for one language. Points agents at the markdown twin and the HTML URL to cite. */
export async function llmsIndex(lang: Lang): Promise<string[]> {
  const posts = (await getCollection('blog')) as BlogEntry[];
  const list = posts
    .filter((post) => post.data.lang === lang && !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const prices =
    lang === 'en'
      ? {
          label: 'Prices',
          md: 'prices',
          html: pricesPath('en'),
          blurb: 'Canvas, acrylic bases and phone cases in COP. Shipping is cash on delivery.',
        }
      : {
          label: 'Precios',
          md: 'precios',
          html: pricesPath('es'),
          blurb: 'Cuadros, bases acrílicas y fundas en COP. El envío va contra entrega.',
        };
  const faq =
    lang === 'en'
      ? {
          label: 'FAQ in text',
          md: 'preguntas',
          html: '/info/preguntas.md',
          blurb: 'Prices, the photo Sac_Artx needs, animals, memorial portraits, turnaround and payment.',
        }
      : {
          label: 'Preguntas frecuentes en texto',
          md: 'preguntas',
          html: '/info/preguntas.md',
          blurb: 'Precios, la foto que pide Sac_Artx, animales, retratos en memoria, plazo y pago.',
        };

  const items: LinkLine[] = [
    {
      label: lang === 'en' ? 'Homepage' : 'Inicio',
      md: lang === 'en' ? 'home' : 'inicio',
      html: homePath(lang),
      blurb: t(lang, 'home.metaDescription'),
    },
    prices,
    {
      label: lang === 'en' ? 'Catalog' : 'Catálogo',
      md: lang === 'en' ? 'catalog' : 'catalogo',
      html: catalogPath(lang),
      blurb: t(lang, 'catalog.metaDescription'),
    },
    ...productKeys.map((product) => {
      const entry = productEntry(product, lang);
      return {
        label: entry.linkLabel,
        md: entry.slug,
        html: productPath(product, lang),
        blurb: entry.metaDescription,
      };
    }),
    ...Object.values(intentPages)
      .filter((entry) => entry.lang === lang)
      .map((entry) => ({
        label: entry.linkLabel,
        md: entry.slug,
        html: `/${lang === 'en' ? 'en/' : ''}${entry.slug}/`,
        blurb: entry.metaDescription,
      })),
    {
      label: 'Blog',
      md: lang === 'en' ? 'blog-en' : 'blog',
      html: blogPath(lang),
      blurb:
        lang === 'en'
          ? 'Guides by Sara Amaya Caldas: the photo, a dog portrait, and a cat portrait.'
          : 'Guías de Sara Amaya Caldas: la foto, el retrato de un perro y el retrato de un gato.',
    },
    ...list.map((post) => ({
      label: post.data.title,
      md: post.data.slug,
      html: blogPostPath(post.data.slug, lang),
      blurb: post.data.description,
    })),
    {
      label: lang === 'en' ? 'About Sara Amaya' : 'Sobre Sara Amaya',
      md: lang === 'en' ? 'about' : 'sobre-mi',
      html: aboutPath(lang),
      blurb: aboutCopy[lang].metaDescription,
    },
    {
      label: lang === 'en' ? 'Privacy' : 'Privacidad',
      md: lang === 'en' ? 'privacy' : 'privacidad',
      html: privacyPath(lang),
      blurb: privacyCopy[lang].metaDescription,
    },
    {
      label: lang === 'en' ? 'Returns' : 'Devoluciones',
      md: lang === 'en' ? 'returns' : 'devoluciones',
      html: returnsPath(lang),
      blurb: returnsCopy[lang].metaDescription,
    },
    faq,
  ];

  const heading = lang === 'en' ? '### Pages' : '## Páginas';
  return [heading, '', ...items.map((item) => linkLine(lang, item))];
}
