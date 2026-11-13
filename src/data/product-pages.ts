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
import { intentPath, productSlugs, type Lang, type ProductKey } from '../i18n/paths';
import type { CatalogLineId } from './catalog';
import type { IntentTopic } from '../i18n/paths';

/** Which canonical price table in prices.ts drives this product. */
export type PriceSource = 'canvas' | 'base' | 'case';

export interface ProductFaq {
  q: string;
  a: string;
  /** Related page that expands the answer. */
  link?: { href: string; label: string };
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
        h1: 'Cuadros en acrílico sobre lienzo, pintados a mano de tu mascota',
        metaTitle: 'Cuadros en acrílico sobre lienzo de tu mascota | Sac_Artx',
        metaDescription:
          'Pinto cuadros en acrílico sobre lienzo de tu mascota, desde la foto. Te mando un boceto antes de pintar y envío a toda Colombia. El envío va contra entrega con la transportadora.',
        lead: 'Me mandas la foto y la plasmo pelo a pelo sobre el lienzo. Antes de empezar te mando un boceto para que te hagas una idea de cómo puede quedar.',
        whatIncluded: [
          'Acrílico sobre lienzo, desde la foto de tu mascota.',
          'Incluye 1 mascota. Si quieres otra, el valor cambia según el tamaño.',
          'Boceto por WhatsApp antes de pintar. Los cambios del boceto no se cobran.',
          'Una foto del cuadro terminado, antes de enviarlo.',
        ],
        faq: [
          {
            q: '¿El precio incluye el envío?',
            a: 'No. El precio es del cuadro. El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.',
          },
          {
            q: '¿Cómo lo pido?',
            a: 'Me escribes por WhatsApp con la foto y el tamaño. Te mando el boceto y lo ajustamos si hace falta.',
          },
          {
            q: '¿Pintas mascotas que ya no están?',
            a: 'Sí. Las pinto con las fotos que todavía guardas. Lo cuento en la página de',
            link: {
              href: intentPath('memorial', 'es'),
              label: 'retrato de mascota fallecida',
            },
          },
        ],
      },
      en: {
        linkLabel: 'Acrylic paintings',
        category: 'Acrylic paintings',
        h1: 'Hand-painted acrylic on canvas of your pet',
        metaTitle: 'Hand-painted acrylic on canvas of your pet | Sac_Artx',
        metaDescription:
          'I paint acrylic on canvas of your pet from a photo. I send a sketch before I paint, and I ship across Colombia. Shipping is cash on delivery with the carrier.',
        lead: 'Send me the photo and I put it on the canvas, hair by hair. Before I start I send a sketch so you can picture how it might turn out.',
        whatIncluded: [
          'Acrylic on canvas, from a photo of your pet.',
          'Includes 1 pet. Another pet changes the price, depending on the size.',
          'A WhatsApp sketch before I paint. Sketch changes are free.',
          'A photo of the finished painting before I ship it.',
        ],
        faq: [
          {
            q: 'Does the price include shipping?',
            a: 'No. The price is for the painting. Shipping is cash on delivery with the carrier: you pay it when it arrives at your home.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me on WhatsApp with the photo and the size. I send the sketch, and we adjust it if it needs to.',
          },
          {
            q: 'Do you paint pets that have passed away?',
            a: 'Yes. I paint them from the photos you still have. I explain it on the',
            link: {
              href: intentPath('memorial', 'en'),
              label: 'memorial pet portrait page',
            },
          },
        ],
      },
    },
  },
  bases: {
    priceSource: 'base',
    lineIds: ['bases-acrilicas'],
    relatedProducts: ['paintings', 'cases'],
    relatedIntents: ['pets', 'memorial'],
    content: {
      es: {
        linkLabel: 'Bases acrílicas',
        category: 'Bases acrílicas',
        h1: 'Bases acrílicas con el retrato y el nombre de tu mascota',
        metaTitle: 'Bases acrílicas con el retrato de tu mascota | Sac_Artx',
        metaDescription:
          'Pinto el retrato de tu mascota a mano sobre base de acrílico, con capa de resina y llavero corazón de regalo. El precio es de 1 mascota. El envío va contra entrega con la transportadora.',
        lead: 'Pinto el retrato de tu mascota totalmente a mano sobre una base de acrílico (metacrilato) y encima lo cubro con una capa de resina que le da ese efecto vidrio y ese brillo extraordinario. Como regalo te hago un llavero en forma de corazón con el nombre que desees.',
        whatIncluded: [
          'Base en acrílico con capa de resina y base en madera, desde la foto de tu mascota.',
          'Incluye 1 mascota. Si quieres otra, tiene un costo adicional.',
          'Boceto por WhatsApp antes de pintar. Los cambios del boceto no se cobran.',
          'Una foto de la base terminada, antes de enviarla.',
          'Llavero en forma de corazón, de regalo, con el nombre que desees.',
        ],
        faq: [
          {
            q: '¿El precio incluye el envío?',
            a: 'No. El precio es de la base, con 1 mascota. El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.',
          },
          {
            q: '¿Cómo la pido?',
            a: 'Me escribes por WhatsApp con la foto, el tamaño y el nombre del llavero. Te mando el boceto y lo ajustamos si hace falta.',
          },
          {
            q: '¿Pintas mascotas que ya no están?',
            a: 'Sí. Las pinto con las fotos que todavía guardas. Lo cuento en la página de',
            link: {
              href: intentPath('memorial', 'es'),
              label: 'retrato de mascota fallecida',
            },
          },
        ],
      },
      en: {
        linkLabel: 'Acrylic bases',
        category: 'Acrylic bases',
        h1: 'Acrylic bases with the portrait and name of your pet',
        metaTitle: 'Acrylic bases with the portrait of your pet | Sac_Artx',
        metaDescription:
          'I hand-paint your pet on an acrylic base, with a resin coat and a heart keychain as a gift. The price is for 1 pet. Shipping is cash on delivery with the carrier.',
        lead: 'I paint your pet entirely by hand on an acrylic (methacrylate) base, then coat it with a layer of resin that gives it that glass look and that extraordinary shine. As a gift, I make you a heart-shaped keychain with the name you want.',
        whatIncluded: [
          'An acrylic base with a resin coat and a wooden base, from a photo of your pet.',
          'Includes 1 pet. Another pet has an extra cost.',
          'A WhatsApp sketch before I paint. Sketch changes are free.',
          'A photo of the finished base before I ship it.',
          'A heart-shaped keychain, as a gift, with the name you want.',
        ],
        faq: [
          {
            q: 'Does the price include shipping?',
            a: 'No. The price is for the base, with 1 pet. Shipping is cash on delivery with the carrier: you pay it when it arrives at your home.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me on WhatsApp with the photo, the size, and the name for the keychain. I send the sketch, and we adjust it if it needs to.',
          },
          {
            q: 'Do you paint pets that have passed away?',
            a: 'Yes. I paint them from the photos you still have. I explain it on the',
            link: {
              href: intentPath('memorial', 'en'),
              label: 'memorial pet portrait page',
            },
          },
        ],
      },
    },
  },
  cases: {
    priceSource: 'case',
    lineIds: ['case-mascotas', 'case-flores', 'case-anime', 'case-personalizados'],
    relatedProducts: ['paintings', 'bases'],
    relatedIntents: ['pets', 'memorial'],
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
            a: 'No. El precio es de la funda. El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.',
          },
          {
            q: '¿Cómo la pido?',
            a: 'Me escribes el modelo del celular y qué quieres pintar. Te digo si lo tengo antes de empezar.',
          },
          {
            q: '¿Pintas mascotas que ya no están?',
            a: 'Sí. Las pinto con las fotos que todavía guardas. Lo cuento en la página de',
            link: {
              href: intentPath('memorial', 'es'),
              label: 'retrato de mascota fallecida',
            },
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
            a: 'No. The price is for the case. Shipping is cash on delivery with the carrier: you pay it when it arrives at your home.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me the phone model and what you want painted. I tell you if I have that model before I start.',
          },
          {
            q: 'Do you paint pets that have passed away?',
            a: 'Yes. I paint them from the photos you still have. I explain it on the',
            link: {
              href: intentPath('memorial', 'en'),
              label: 'memorial pet portrait page',
            },
          },
        ],
      },
    },
  },
  sizes: {
    priceSource: 'canvas',
    lineIds: ['cuadros-personalizados'],
    relatedProducts: ['paintings', 'bases', 'cases'],
    relatedIntents: ['pets', 'memorial'],
    content: {
      es: {
        linkLabel: 'Cuadros personalizados',
        category: 'Cuadros en acrílico',
        h1: 'Cuadros personalizados, de tu imaginación al lienzo',
        metaTitle: 'Cuadros personalizados, de tu imaginación al lienzo | Sac_Artx',
        metaDescription:
          'Pinto paisajes, anime, ilustraciones y diseños especiales, a mano y desde tu idea. Cada diseño se cotiza según el detalle y el tamaño. El envío va contra entrega con la transportadora.',
        lead: 'Desde paisajes y personajes de anime hasta ilustraciones y diseños especiales. Cada cuadro es pintado a mano y creado a partir de tus ideas o imágenes favoritas.',
        whatIncluded: [
          'El lienzo, pintado a mano en el tamaño que elijas.',
          'Boceto digital por WhatsApp antes de pintar. Puedes solicitar ajustes sin costo adicional.',
          'Cada diseño se cotiza según su complejidad, nivel de detalle y tamaño.',
        ],
        faq: [
          {
            q: '¿Qué tamaños hay?',
            a: 'Pinto estos tamaños: 12×18 cm, 20×25 cm, 28×35 cm y 40×50 cm. También hay un corazón de 20×20 cm. Si quieres otro tamaño, escríbeme y lo vemos.',
          },
          {
            q: '¿Un paisaje cuesta lo mismo que el retrato de una mascota?',
            a: 'El retrato de una mascota parte de los precios de la tabla e incluye 1 mascota. Un paisaje, un personaje de anime o un diseño especial también parte de ahí: el valor final depende de la complejidad, el detalle y el tamaño.',
          },
          {
            q: '¿El precio incluye el envío?',
            a: 'No. El precio es de la obra. El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.',
          },
          {
            q: '¿Cómo lo pido?',
            a: 'Me escribes por WhatsApp con la foto y el tamaño. Te mando el boceto y lo ajustamos si hace falta.',
          },
          {
            q: '¿Pintas mascotas que ya no están?',
            a: 'Sí. Las pinto con las fotos que todavía guardas. Lo cuento en la página de',
            link: {
              href: intentPath('memorial', 'es'),
              label: 'retrato de mascota fallecida',
            },
          },
        ],
      },
      en: {
        linkLabel: 'Custom paintings',
        category: 'Acrylic paintings',
        h1: 'Custom paintings, from your imagination to the canvas',
        metaTitle: 'Custom paintings, from your imagination to the canvas | Sac_Artx',
        metaDescription:
          'I paint landscapes, anime, illustrations, and special designs by hand, from your idea. Each design is quoted by detail and size. Shipping is cash on delivery with the carrier.',
        lead: 'From landscapes and anime characters to illustrations and special designs. Each painting is done by hand, from your ideas or a favorite image.',
        whatIncluded: [
          'The canvas, hand-painted in the size you pick.',
          'A digital sketch on WhatsApp before I paint. You can ask for changes at no extra cost.',
          'Each design is quoted by its complexity, level of detail, and size.',
        ],
        faq: [
          {
            q: 'Which sizes are there?',
            a: 'I paint these sizes: 12×18 cm, 20×25 cm, 28×35 cm, and 40×50 cm. There is also a 20×20 cm heart. If you want another size, message me and we will look at it.',
          },
          {
            q: 'Does a landscape cost the same as a pet portrait?',
            a: 'A pet portrait starts at the prices below and includes 1 pet. A landscape, an anime character, or a special design also starts there: the final price depends on complexity, detail, and size.',
          },
          {
            q: 'Does the price include shipping?',
            a: 'No. The price is for the piece. Shipping is cash on delivery with the carrier: you pay it when it arrives at your home.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me on WhatsApp with the photo and the size. I send the sketch, and we adjust it if it needs to.',
          },
          {
            q: 'Do you paint pets that have passed away?',
            a: 'Yes. I paint them from the photos you still have. I explain it on the',
            link: {
              href: intentPath('memorial', 'en'),
              label: 'memorial pet portrait page',
            },
          },
        ],
      },
    },
  },
  magnets: {
    priceSource: null,
    lineIds: [],
    relatedProducts: ['paintings', 'cases'],
    relatedIntents: ['pets', 'memorial'],
    content: {
      es: {
        linkLabel: 'Minilienzo magnético',
        category: 'Minilienzo magnético',
        h1: 'Minilienzo magnético con el retrato de tu mascota',
        metaTitle: 'Minilienzo magnético con el retrato de tu mascota | Sac_Artx',
        metaDescription:
          'Pinto a tu mascota en un mini lienzo de 7,5 cm, redondo o cuadrado, con imán. El precio está por confirmar: es un producto nuevo. El envío va contra entrega con la transportadora.',
        lead: 'Pinto a tu mascota en un mini lienzo de 7,5 × 7,5 cm, disponible en forma redonda o cuadrada. Incluye un imán en la parte trasera para que puedas decorar tu nevera o cualquier superficie metálica con un retrato único de tu mascota.',
        priceNote:
          'El precio está por confirmar: es un producto nuevo. Te lo digo por WhatsApp antes de empezar. El envío va contra entrega: lo pagas a la transportadora cuando llega a tu casa.',
        whatIncluded: [
          'Mini lienzo de 7,5 × 7,5 cm, redondo o cuadrado, pintado a mano desde la foto de tu mascota.',
          'Imán en la parte de atrás, para la nevera o cualquier superficie metálica.',
          'Te llega pintado por mí.',
        ],
        faq: [
          {
            q: '¿De qué tamaño es?',
            a: 'Mide 7,5 × 7,5 cm. Lo puedes pedir redondo o cuadrado. Sirve para la nevera o cualquier superficie metálica.',
          },
          {
            q: '¿Puedo pedir cualquier mascota?',
            a: 'Sí. Perro, gato, loro, conejo, caballo, hámster, paloma o la que tengas.',
          },
          {
            q: '¿Me llega en blanco para pintarlo yo?',
            a: 'No. Te llega pintado por mí, desde tu foto.',
          },
          {
            q: '¿El precio incluye el envío?',
            a: 'No. El precio está por confirmar, porque es un producto nuevo. El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.',
          },
          {
            q: '¿Cómo lo pido?',
            a: 'Me escribes por WhatsApp con la foto. Te mando el boceto y lo ajustamos si hace falta.',
          },
          {
            q: '¿Pintas mascotas que ya no están?',
            a: 'Sí. Las pinto con las fotos que todavía guardas. Lo cuento en la página de',
            link: {
              href: intentPath('memorial', 'es'),
              label: 'retrato de mascota fallecida',
            },
          },
        ],
      },
      en: {
        linkLabel: 'Magnetic mini canvas',
        category: 'Magnetic mini canvas',
        h1: "Magnetic mini canvas with your pet's portrait",
        metaTitle: "Magnetic mini canvas with your pet's portrait | Sac_Artx",
        metaDescription:
          'I paint your pet on a 7.5 cm mini canvas, round or square, with a magnet. The price is still to be confirmed: it is a new product. Shipping is cash on delivery with the carrier.',
        lead: 'I paint your pet on a 7.5 × 7.5 cm mini canvas, available round or square. A magnet on the back lets you decorate your fridge, or any metal surface, with a unique portrait of your pet.',
        priceNote:
          'The price is still to be confirmed: this is a new product. I will tell you on WhatsApp before I start. Shipping is cash on delivery: you pay the carrier when it arrives at your home.',
        whatIncluded: [
          'A 7.5 × 7.5 cm mini canvas, round or square, hand-painted from a photo of your pet.',
          'A magnet on the back, for the fridge or any metal surface.',
          'It arrives painted by me.',
        ],
        faq: [
          {
            q: 'How big is it?',
            a: 'It measures 7.5 × 7.5 cm. You can order it round or square. It works on the fridge or any metal surface.',
          },
          {
            q: 'Can I ask for any pet?',
            a: 'Yes. Dog, cat, parrot, rabbit, horse, hamster, pigeon, or whichever you have.',
          },
          {
            q: 'Does it arrive blank for me to paint?',
            a: 'No. It arrives painted by me, from your photo.',
          },
          {
            q: 'Does the price include shipping?',
            a: 'No. The price is still to be confirmed, because this is a new product. Shipping is cash on delivery with the carrier: you pay it when it arrives at your home.',
          },
          {
            q: 'How do I order one?',
            a: 'Message me on WhatsApp with the photo. I send the sketch, and we adjust it if it needs to.',
          },
          {
            q: 'Do you paint pets that have passed away?',
            a: 'Yes. I paint them from the photos you still have. I explain it on the',
            link: {
              href: intentPath('memorial', 'en'),
              label: 'memorial pet portrait page',
            },
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
