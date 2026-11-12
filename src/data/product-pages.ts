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
  /** Null when the price is not published yet. The page then shows priceNote and skips the offer schema. */
  priceSource: PriceSource | null;
  /** Shown instead of a price table when priceSource is null. */
  priceNote?: string;
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
  | 'linkLabel'
  | 'category'
  | 'h1'
  | 'metaTitle'
  | 'metaDescription'
  | 'lead'
  | 'whatIncluded'
  | 'faq'
  | 'priceNote'
>;

interface ProductConfig {
  priceSource: PriceSource | null;
  lineIds: CatalogLineId[];
  relatedProducts: ProductKey[];
  relatedIntents: IntentTopic[];
  content: Record<Lang, Content>;
}

const productConfig: Record<ProductKey, ProductConfig> = {
  paintings: {
    priceSource: 'canvas',
    lineIds: ['cuadros-mascotas'],
    relatedProducts: ['sizes', 'bases', 'cases', 'magnets'],
    relatedIntents: ['pets', 'dogs', 'cats', 'memorial'],
    content: {
      es: {
        linkLabel: 'Cuadros en acrílico',
        category: 'Cuadros en acrílico',
        h1: 'Cuadros en acrílico de tu mascota, pintados a mano',
        metaTitle: 'Cuadros en acrílico de tu mascota | Sac_Artx',
        metaDescription:
          'Pinto cuadros en acrílico de tu mascota desde la foto. Te mando un boceto antes de pintar y envío a toda Colombia.',
        lead: 'Me mandas la foto y la pinto pelo a pelo en acrílico sobre lienzo. Antes de empezar te mando un boceto para que me digas si se parece.',
        whatIncluded: [
          'Acrílico sobre lienzo, desde la foto de tu mascota.',
          'Incluye 1 mascota. Si quieres otra, el valor cambia según el tamaño.',
          'Boceto por WhatsApp antes de pintar. Los cambios del boceto no se cobran.',
          'Una foto del cuadro terminado, antes de enviarlo.',
        ],
        faq: [
          {
            q: '¿El precio incluye el envío?',
            a: 'No. El precio es del cuadro. El envío se cobra aparte, según la ciudad.',
          },
          {
            q: '¿Cómo lo pido?',
            a: 'Me escribes por WhatsApp con la foto y el tamaño. Te mando el boceto y lo ajustamos si hace falta.',
          },
          {
            q: '¿Pintas mascotas que ya no están?',
            a: 'Sí. Las pinto con las fotos que todavía guardas.',
          },
        ],
      },
      en: {
        linkLabel: 'Acrylic paintings',
        category: 'Acrylic paintings',
        h1: 'Acrylic paintings of your pet, from your photo',
        metaTitle: 'Acrylic pet paintings from your photo | Sac_Artx',
        metaDescription:
          'I paint acrylic canvases of your pet from a photo. I send a sketch before I paint, and I ship across Colombia.',
        lead: 'Send me the photo and I paint it, hair by hair, in acrylic on canvas. Before I start I send a sketch so you can tell me if it looks like them.',
        whatIncluded: [
          'Acrylic on canvas, from a photo of your pet.',
          'Includes 1 pet. Another pet changes the price, depending on the size.',
          'A WhatsApp sketch before I paint. Sketch changes are free.',
          'A photo of the finished painting before I ship it.',
        ],
        faq: [
          {
            q: 'Does the price include shipping?',
            a: 'No. The price is for the painting. Shipping is charged separately, based on the city.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me on WhatsApp with the photo and the size. I send the sketch, and we adjust it if it needs to.',
          },
          {
            q: 'Do you paint pets that have passed away?',
            a: 'Yes. I paint them from the photos you still have.',
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
        h1: 'Bases acrílicas con tu retrato y el nombre',
        metaTitle: 'Bases acrílicas con retrato y nombre | Sac_Artx',
        metaDescription:
          'Pinto tu retrato en una base acrílica, con resina y un llavero corazón con el nombre. Escríbeme por WhatsApp. Envío en Colombia.',
        lead: 'Pinto el retrato sobre metacrilato, lo cubro con resina y te hago un llavero corazón con el nombre.',
        whatIncluded: [
          'El retrato, pintado a mano desde tu foto.',
          'Resina por encima de la base.',
          'Llavero corazón con el nombre.',
          'Una foto de cómo quedó, antes de enviarla.',
        ],
        faq: [
          {
            q: '¿Qué trae la base?',
            a: 'El retrato, la resina y el llavero con el nombre. El envío se cobra aparte, según la ciudad.',
          },
          {
            q: '¿Cómo la pido?',
            a: 'Me escribes por WhatsApp con la foto, el tamaño y el nombre del llavero. Te mando un boceto antes de pintar.',
          },
        ],
      },
      en: {
        linkLabel: 'Acrylic bases',
        category: 'Acrylic bases',
        h1: 'Acrylic bases with your portrait and the name',
        metaTitle: 'Acrylic bases with portrait and name | Sac_Artx',
        metaDescription:
          'I paint your portrait on an acrylic base, with resin and a heart keychain with the name. Message me on WhatsApp. Shipping in Colombia.',
        lead: 'I paint the portrait on methacrylate, coat it with resin, and make you a heart keychain with the name.',
        whatIncluded: [
          'The portrait, hand-painted from your photo.',
          'Resin over the base.',
          'A heart keychain with the name.',
          'A photo of the finished piece before I ship it.',
        ],
        faq: [
          {
            q: 'What comes with the base?',
            a: 'The portrait, the resin, and the keychain with the name. Shipping is charged separately, based on the city.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me on WhatsApp with the photo, the size, and the name for the keychain. I send a sketch before I paint.',
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
        h1: 'Fundas personalizadas para tu celular',
        metaTitle: 'Fundas personalizadas para celular | Sac_Artx',
        metaDescription:
          'Pinto fundas para celular: tu mascota, flores prensadas, anime o tu diseño, selladas con resina. Escríbeme por WhatsApp.',
        lead: 'Pinto la funda de tu celular y la sello con resina. Puede ir tu mascota, flores prensadas, un anime o un diseño que me pases.',
        whatIncluded: [
          'La funda con el diseño que elijas.',
          'Resina por encima, para proteger la pintura.',
          'Te confirmo el modelo del celular antes de empezar.',
        ],
        faq: [
          {
            q: '¿Qué puedo pedir?',
            a: 'Tu mascota, flores prensadas, un personaje de anime o un diseño tuyo. Si quieres flores, pregúntame qué colores tengo.',
          },
          {
            q: '¿El precio incluye el envío?',
            a: 'No. El precio es de la funda. El envío se cobra aparte, según la ciudad.',
          },
          {
            q: '¿Cómo la pido?',
            a: 'Me escribes el modelo del celular y qué quieres pintar. Te digo si lo tengo antes de empezar.',
          },
        ],
      },
      en: {
        linkLabel: 'Custom phone cases',
        category: 'Phone cases',
        h1: 'Custom cases for your phone',
        metaTitle: 'Custom phone cases | Sac_Artx',
        metaDescription:
          'I paint phone cases: your pet, pressed flowers, anime, or your design, sealed with resin. Message me on WhatsApp.',
        lead: 'I paint your phone case and seal it with resin. It can be your pet, pressed flowers, an anime character, or a design you send me.',
        whatIncluded: [
          'The case with the design you pick.',
          'Resin on top, to protect the paint.',
          'I confirm your phone model before I start.',
        ],
        faq: [
          {
            q: 'What can I ask for?',
            a: 'Your pet, pressed flowers, an anime character, or a design of yours. If you want flowers, ask me which colors I have.',
          },
          {
            q: 'Does the price include shipping?',
            a: 'No. The price is for the case. Shipping is charged separately, based on the city.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me the phone model and what you want painted. I tell you if I have that model before I start.',
          },
        ],
      },
    },
  },
  sizes: {
    priceSource: 'canvas',
    lineIds: ['cuadros-personalizados'],
    relatedProducts: ['paintings', 'bases', 'cases'],
    relatedIntents: ['pets'],
    content: {
      es: {
        linkLabel: 'Cuadros de diferentes tamaños',
        category: 'Cuadros en acrílico',
        h1: 'Cuadros de diferentes tamaños, del más chiquito al más grande',
        metaTitle: 'Cuadros de diferentes tamaños | Sac_Artx',
        metaDescription:
          'Pinto lienzos de 12×18 cm a 40×50 cm: paisajes y encargos a medida. El precio de cada tamaño está en la página. Envío en Colombia.',
        lead: 'Hay lienzos de 12×18 cm, 20×25 cm, 28×35 cm y 40×50 cm, y un corazón de 20×20 cm. Las fotos de esta página son paisajes y encargos a medida.',
        whatIncluded: [
          'El lienzo, pintado a mano en el tamaño que elijas.',
          'Boceto por WhatsApp antes de pintar. Los cambios del boceto no se cobran.',
          'Si es un paisaje o un encargo con más detalle, te digo el precio antes de empezar.',
        ],
        faq: [
          {
            q: '¿Qué tamaños hay?',
            a: '12×18 cm, 20×25 cm, 28×35 cm y 40×50 cm. El corazón mide 20×20 cm. Si necesitas otro, escríbeme y lo vemos.',
          },
          {
            q: '¿Un paisaje cuesta lo mismo que un retrato?',
            a: 'El retrato de mascota va con la tabla de abajo. Un paisaje o un encargo con más detalle lo cotizo según el tamaño.',
          },
          {
            q: '¿El precio incluye el envío?',
            a: 'No. El precio es del cuadro. El envío se cobra aparte, según la ciudad.',
          },
        ],
      },
      en: {
        linkLabel: 'Paintings in different sizes',
        category: 'Acrylic paintings',
        h1: 'Paintings in different sizes, from the smallest to the largest',
        metaTitle: 'Paintings in different sizes | Sac_Artx',
        metaDescription:
          'I paint canvases from 12×18 cm to 40×50 cm: landscapes and made-to-order pieces. Each size is priced on the page. Shipping in Colombia.',
        lead: 'Canvases come in 12×18 cm, 20×25 cm, 28×35 cm, and 40×50 cm, plus a 20×20 cm heart. The photos on this page are landscapes and made-to-order pieces.',
        whatIncluded: [
          'The canvas, hand-painted in the size you pick.',
          'A WhatsApp sketch before I paint. Sketch changes are free.',
          'For a landscape or a piece with more detail, I tell you the price before I start.',
        ],
        faq: [
          {
            q: 'Which sizes are there?',
            a: '12×18 cm, 20×25 cm, 28×35 cm, and 40×50 cm. The heart is 20×20 cm. If you need another size, message me and we will look at it.',
          },
          {
            q: 'Does a landscape cost the same as a portrait?',
            a: 'A pet portrait follows the price list below. I quote a landscape, or a piece with more detail, by size.',
          },
          {
            q: 'Does the price include shipping?',
            a: 'No. The price is for the painting. Shipping is charged separately, based on the city.',
          },
        ],
      },
    },
  },
  magnets: {
    priceSource: null,
    lineIds: [],
    relatedProducts: ['paintings', 'cases'],
    relatedIntents: ['pets'],
    content: {
      es: {
        linkLabel: 'Imanes de lienzo',
        category: 'Imanes de lienzo',
        h1: 'Imanes de lienzo con tu mascota',
        metaTitle: 'Imanes de lienzo pintados a mano | Sac_Artx',
        metaDescription:
          'Pinto tu mascota en un mini lienzo de 7,6 cm con imán. Lo pegas en la nevera. Escríbeme por WhatsApp.',
        lead: 'Pinto tu mascota en un mini lienzo de 7,6 × 7,6 cm. Atrás lleva un imán y lo pegas en la nevera.',
        priceNote:
          'El precio de este imán te lo digo por WhatsApp, antes de empezar. El envío se cobra aparte.',
        whatIncluded: [
          'Mini lienzo de algodón de 7,6 × 7,6 cm, pintado a mano en acrílico.',
          'Imán atrás, listo para pegar.',
          'Te llega pintado por mí, desde tu foto.',
        ],
        faq: [
          {
            q: '¿De qué tamaño es?',
            a: 'Mide 7,6 × 7,6 cm, que son 3 × 3 pulgadas. Cabe en la nevera.',
          },
          {
            q: '¿Puedo pedir cualquier mascota?',
            a: 'Sí. Perro, gato, loro, conejo, caballo, hámster, paloma o la que tengas.',
          },
          {
            q: '¿Me llega en blanco para pintarlo yo?',
            a: 'No. Te llega pintado por mí, desde tu foto.',
          },
        ],
      },
      en: {
        linkLabel: 'Canvas magnets',
        category: 'Canvas magnets',
        h1: 'Canvas magnets with your pet',
        metaTitle: 'Hand-painted canvas magnets | Sac_Artx',
        metaDescription:
          'I paint your pet on a 7.6 cm mini canvas with a magnet. It sticks on the fridge. Message me on WhatsApp.',
        lead: 'I paint your pet on a 7.6 × 7.6 cm mini canvas. A magnet on the back holds it on the fridge.',
        priceNote:
          'I will tell you the price of this magnet on WhatsApp, before I start. Shipping is charged separately.',
        whatIncluded: [
          'A 7.6 × 7.6 cm cotton mini canvas, hand-painted in acrylic.',
          'A magnet on the back, ready to stick.',
          'It arrives painted by me, from your photo.',
        ],
        faq: [
          {
            q: 'How big is it?',
            a: 'It is 7.6 × 7.6 cm, which is 3 × 3 inches. It fits on the fridge.',
          },
          {
            q: 'Can I ask for any pet?',
            a: 'Yes. Dog, cat, parrot, rabbit, horse, hamster, pigeon, or whichever you have.',
          },
          {
            q: 'Does it arrive blank for me to paint?',
            a: 'No. It arrives painted by me, from your photo.',
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
