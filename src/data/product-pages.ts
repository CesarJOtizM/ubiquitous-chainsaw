/**
 * Single source for the bilingual product pages (T1). One record per
 * `${product}-${lang}` drives the thin route files and the shared
 * ProductPage.astro renderer.
 *
 * Only UNIQUE prose lives here (meta, lead, what's included, FAQ). Prices,
 * turnaround and shipping copy are pulled from src/data/prices.ts and
 * src/lib/price-text.ts at render time, so no number or date is baked in.
 *
 * `priceSource` selects which canonical price table drives the price block and
 * the Product/AggregateOffer schema; `lineIds` selects which catalog image
 * folders feed the gallery.
 */
import { productSlugs, type Lang, type ProductKey } from '../i18n/paths';
import type { CatalogLineId } from './catalog';
import type { IntentTopic } from '../i18n/paths';

/** Which canonical price table in prices.ts drives this product. */
export type PriceSource = 'canvas' | 'base' | 'case';

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductEntry {
  product: ProductKey;
  lang: Lang;
  /** Route slug in this language. */
  slug: string;
  /** Route slug in the other language (reciprocal hreflang). */
  altSlug: string;
  priceSource: PriceSource;
  /** Catalog line ids feeding the gallery. */
  lineIds: CatalogLineId[];
  /** Other product pages to cross-link. */
  relatedProducts: ProductKey[];
  /** Relevant intent (guide) pages to cross-link. */
  relatedIntents: IntentTopic[];
  /** Short label used by nav/footer and related links. */
  linkLabel: string;
  /** Product category for schema.org. */
  category: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  whatIncluded: string[];
  faq: ProductFaq[];
}

type Content = Pick<
  ProductEntry,
  'linkLabel' | 'category' | 'h1' | 'metaTitle' | 'metaDescription' | 'lead' | 'whatIncluded' | 'faq'
>;

interface ProductConfig {
  priceSource: PriceSource;
  lineIds: CatalogLineId[];
  relatedProducts: ProductKey[];
  relatedIntents: IntentTopic[];
  content: Record<Lang, Content>;
}

const productConfig: Record<ProductKey, ProductConfig> = {
  paintings: {
    priceSource: 'canvas',
    lineIds: ['cuadros-mascotas', 'cuadros-personalizados'],
    relatedProducts: ['bases', 'cases'],
    relatedIntents: ['pets', 'dogs', 'cats'],
    content: {
      es: {
        linkLabel: 'Cuadros en acrílico',
        category: 'Cuadros en acrílico',
        h1: 'Cuadros en acrílico personalizados, pintados a mano en Colombia',
        metaTitle: 'Cuadros en acrílico personalizados | Sac_Artx',
        metaDescription:
          'Cuadros en acrílico pintados a mano desde tu foto: retratos de mascotas y paisajes. Encargo por WhatsApp, boceto previo y envío a toda Colombia.',
        lead: 'Sac_Artx pinta a mano cuadros en acrílico sobre lienzo por encargo: retratos de mascotas y paisajes personalizados desde tu foto, con boceto previo y envío a toda Colombia.',
        whatIncluded: [
          'Cuadro pintado a mano en acrílico sobre lienzo.',
          'Boceto digital previo con revisiones sin costo.',
          'Foto de aprobación final antes del envío.',
          'Embalaje seguro y número de seguimiento dentro de Colombia.',
        ],
        faq: [
          {
            q: '¿El precio incluye el envío?',
            a: 'No. Los precios corresponden al encargo en pesos colombianos; el envío se cobra aparte según el destino dentro de Colombia.',
          },
          {
            q: '¿Cómo hago el encargo?',
            a: 'Escríbenos por WhatsApp con tu foto y el tamaño que prefieres. Antes de pintar te enviamos un boceto digital y hacemos las revisiones que necesites sin costo.',
          },
          {
            q: '¿Pintan mascotas que ya no están?',
            a: 'Sí. Creamos retratos en memoria a partir de las fotos que tengas, con todo el cuidado que merece el recuerdo.',
          },
        ],
      },
      en: {
        linkLabel: 'Acrylic paintings',
        category: 'Acrylic paintings',
        h1: 'Custom acrylic paintings, hand-painted in Colombia',
        metaTitle: 'Custom acrylic paintings from photo | Sac_Artx',
        metaDescription:
          'Hand-painted acrylic paintings from your photo: custom pet portraits and landscapes. Commission on WhatsApp, free sketch, shipping across Colombia.',
        lead: 'Sac_Artx hand-paints custom acrylic paintings on canvas to order: pet portraits and landscapes from your photo, with a sketch beforehand and shipping across Colombia.',
        whatIncluded: [
          'Hand-painted acrylic painting on canvas.',
          'Digital sketch beforehand with free revisions.',
          'Final approval photo before shipping.',
          'Protective packaging and a tracking number within Colombia.',
        ],
        faq: [
          {
            q: 'Does the price include shipping?',
            a: 'No. Prices are for the commission in Colombian pesos; shipping is charged separately based on the destination within Colombia.',
          },
          {
            q: 'How do I place an order?',
            a: 'Message us on WhatsApp with your photo and the size you want. Before painting we send a digital sketch and make any revisions you need at no extra charge.',
          },
          {
            q: 'Do you paint pets that have passed away?',
            a: 'Yes. We create memorial portraits from the photos you have, with all the care the memory deserves.',
          },
        ],
      },
    },
  },
  bases: {
    priceSource: 'base',
    lineIds: ['bases-acrilicas'],
    relatedProducts: ['paintings', 'cases'],
    relatedIntents: ['pets'],
    content: {
      es: {
        linkLabel: 'Bases acrílicas',
        category: 'Bases acrílicas',
        h1: 'Bases acrílicas personalizadas con tu retrato en Colombia',
        metaTitle: 'Bases acrílicas personalizadas | Sac_Artx',
        metaDescription:
          'Bases acrílicas con tu retrato sobre metacrilato y capa de resina. Incluyen llavero corazón con nombre. Encargo por WhatsApp y envío a toda Colombia.',
        lead: 'Las bases acrílicas de Sac_Artx son retratos pintados a mano sobre metacrilato con capa de resina, e incluyen un llavero corazón con el nombre. Se hacen por encargo desde tu foto.',
        whatIncluded: [
          'Retrato pintado a mano sobre base de metacrilato.',
          'Capa de resina protectora.',
          'Llavero acrílico corazón con el nombre.',
          'Embalaje seguro y número de seguimiento dentro de Colombia.',
        ],
        faq: [
          {
            q: '¿Qué incluye la base acrílica?',
            a: 'El retrato sobre metacrilato con capa de resina y un llavero corazón con el nombre. El envío se cobra aparte según el destino dentro de Colombia.',
          },
          {
            q: '¿Cómo hago el encargo?',
            a: 'Escríbenos por WhatsApp con tu foto y el tamaño que prefieres. Antes de pintar te enviamos un boceto digital y hacemos las revisiones que necesites sin costo.',
          },
        ],
      },
      en: {
        linkLabel: 'Acrylic bases',
        category: 'Acrylic bases',
        h1: 'Custom acrylic bases with your portrait in Colombia',
        metaTitle: 'Custom acrylic bases | Sac_Artx',
        metaDescription:
          'Custom acrylic bases: your portrait on methacrylate with a resin coat and a heart keychain with the name. Commission on WhatsApp, shipping in Colombia.',
        lead: 'Sac_Artx acrylic bases are portraits hand-painted on methacrylate with a resin coat, and they include a heart keychain with the name. Each one is made to order from your photo.',
        whatIncluded: [
          'Portrait hand-painted on a methacrylate base.',
          'Protective resin coat.',
          'Heart-shaped acrylic keychain with the name.',
          'Protective packaging and a tracking number within Colombia.',
        ],
        faq: [
          {
            q: 'What does the acrylic base include?',
            a: 'The portrait on methacrylate with a resin coat and a heart keychain with the name. Shipping is charged separately based on the destination within Colombia.',
          },
          {
            q: 'How do I place an order?',
            a: 'Message us on WhatsApp with your photo and the size you want. Before painting we send a digital sketch and make any revisions you need at no extra charge.',
          },
        ],
      },
    },
  },
  cases: {
    priceSource: 'case',
    lineIds: ['case-mascotas', 'case-flores', 'case-anime', 'case-personalizados'],
    relatedProducts: ['paintings', 'bases'],
    relatedIntents: ['pets'],
    content: {
      es: {
        linkLabel: 'Fundas personalizadas',
        category: 'Fundas de celular',
        h1: 'Fundas personalizadas para celular, pintadas a mano en Colombia',
        metaTitle: 'Fundas personalizadas para celular | Sac_Artx',
        metaDescription:
          'Fundas personalizadas para celular: con tu mascota, flores prensadas, anime o tu diseño. Protegidas con resina. Encargo por WhatsApp y envío en Colombia.',
        lead: 'Sac_Artx crea fundas personalizadas para celular por encargo: con tu mascota pintada a mano, flores prensadas, anime o tu propio diseño, protegidas con una capa de resina.',
        whatIncluded: [
          'Funda personalizada con tu mascota, flores, anime o diseño a pedido.',
          'Capa de resina protectora.',
          'Boceto o referencia previa según el diseño.',
          'Embalaje seguro y número de seguimiento dentro de Colombia.',
        ],
        faq: [
          {
            q: '¿Qué diseños puedo pedir en la funda?',
            a: 'Tu mascota pintada a mano, flores prensadas, personajes de anime o tu propio diseño. Pregúntanos por los colores de flores disponibles.',
          },
          {
            q: '¿El precio incluye el envío?',
            a: 'No. Los precios corresponden al encargo en pesos colombianos; el envío se cobra aparte según el destino dentro de Colombia.',
          },
          {
            q: '¿Cómo hago el encargo?',
            a: 'Escríbenos por WhatsApp con el modelo de tu celular y el diseño que quieres. Te confirmamos la disponibilidad antes de empezar.',
          },
        ],
      },
      en: {
        linkLabel: 'Custom phone cases',
        category: 'Phone cases',
        h1: 'Custom phone cases, hand-painted in Colombia',
        metaTitle: 'Custom phone cases | Sac_Artx',
        metaDescription:
          'Custom phone cases: your pet hand-painted, pressed flowers, anime or your own design, sealed with resin. Commission on WhatsApp, shipping in Colombia.',
        lead: 'Sac_Artx makes custom phone cases to order: your pet hand-painted, pressed flowers, anime art or your own design, each sealed with a protective resin coat.',
        whatIncluded: [
          'Custom case with your pet, flowers, anime or a made-to-order design.',
          'Protective resin coat.',
          'Sketch or reference beforehand depending on the design.',
          'Protective packaging and a tracking number within Colombia.',
        ],
        faq: [
          {
            q: 'What designs can I order on the case?',
            a: 'Your pet hand-painted, pressed flowers, anime characters or your own design. Ask us which flower colors are available.',
          },
          {
            q: 'Does the price include shipping?',
            a: 'No. Prices are for the commission in Colombian pesos; shipping is charged separately based on the destination within Colombia.',
          },
          {
            q: 'How do I place an order?',
            a: 'Message us on WhatsApp with your phone model and the design you want. We confirm availability before we start.',
          },
        ],
      },
    },
  },
};

/** Resolve a single product entry for a language. */
export function productEntry(product: ProductKey, lang: Lang): ProductEntry {
  const config = productConfig[product];
  const content = config.content[lang];
  const otherLang: Lang = lang === 'en' ? 'es' : 'en';
  return {
    product,
    lang,
    slug: productSlugs[product][lang],
    altSlug: productSlugs[product][otherLang],
    priceSource: config.priceSource,
    lineIds: config.lineIds,
    relatedProducts: config.relatedProducts,
    relatedIntents: config.relatedIntents,
    ...content,
  };
}
