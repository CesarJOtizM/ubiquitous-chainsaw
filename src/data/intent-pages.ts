/**
 * Single source for the bilingual intent (guide) pages. One record drives the
 * real HTML routes, the generated /info/<slug>.md endpoints and llms.txt.
 *
 * Only the UNIQUE prose lives here (lead, what-it-is, who-for, what-is-included).
 * The Prices / Turnaround / Where sections are generated from src/lib/price-text.ts
 * so numbers and the "current as of ..." date never drift or go stale.
 *
 * Prose is preserved verbatim from the original public/info/*.md files.
 */
import { intentSlugs, intentTopics, type IntentTopic, type Lang } from '../i18n/paths';

export type PriceVariant = 'bullets' | 'bulletsSuggested' | 'summaryColombia' | 'summaryHow';
export type WhereVariant = 'studio' | 'colombia';

export interface IntentEntry {
  topic: IntentTopic;
  lang: Lang;
  /** Route slug in this language, e.g. 'retratos-de-mascotas'. */
  slug: string;
  /** Route slug in the other language (for reciprocal hreflang). */
  altSlug: string;
  /** Singular animal noun in this language, fed to the price helpers. */
  noun: string;
  priceVariant: PriceVariant;
  whereVariant: WhereVariant;
  /** Short label used by footer links, related links and llms.txt. */
  linkLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  whatItIs: string;
  whoFor: string;
  included: string[];
  /** When true, `included` is an ordered (numbered) list. */
  includedOrdered?: boolean;
  /** Trailing note paragraph after the included list (used by the `how` topic). */
  includedNote?: string;
  /** Related topic keys for internal links. */
  related: IntentTopic[];
}

type Content = Pick<
  IntentEntry,
  | 'linkLabel'
  | 'h1'
  | 'metaTitle'
  | 'metaDescription'
  | 'lead'
  | 'whatItIs'
  | 'whoFor'
  | 'included'
  | 'includedOrdered'
  | 'includedNote'
>;

interface TopicConfig {
  noun: Record<Lang, string>;
  priceVariant: PriceVariant;
  whereVariant: WhereVariant;
  related: IntentTopic[];
  content: Record<Lang, Content>;
}

const topicConfig: Record<IntentTopic, TopicConfig> = {
  pets: {
    noun: { es: 'mascota', en: 'pet' },
    priceVariant: 'bulletsSuggested',
    whereVariant: 'studio',
    related: ['dogs', 'cats', 'colombia', 'memorial'],
    content: {
      es: {
        linkLabel: 'Retratos de mascotas',
        h1: 'Retratos de mascotas pintados a mano en acrílico en Colombia',
        metaTitle: 'Retratos de mascotas personalizados desde foto | Sac_Artx',
        metaDescription:
          'Retratos de mascotas personalizados, pintados a mano en acrílico desde tu foto. Encargo por WhatsApp, boceto previo y envío a toda Colombia.',
        lead: 'Sac_Artx es un estudio en Colombia, especializado en retratos personalizados de mascotas pintados a mano en acrílico. Cada retrato se hace por encargo a partir de una fotografía enviada por WhatsApp.',
        whatItIs:
          'Sac_Artx pinta a mano retratos de mascotas en acrílico sobre lienzo o sobre base de metacrilato. El encargo empieza con una foto. Antes de pintar se envía un boceto digital, con revisiones sin costo.',
        whoFor:
          'Perros, gatos, conejos, caballos, palomas y cualquier otro animal que importe. También se pintan retratos en memoria de mascotas que ya no están, a partir de las fotos disponibles.',
        included: [
          'Retrato pintado a mano en acrílico sobre lienzo o base acrílica.',
          'Boceto digital previo a la pintura.',
          'Revisiones del boceto sin costo extra.',
          'Foto de aprobación final antes del envío.',
          'Embalaje y número de seguimiento dentro de Colombia.',
        ],
      },
      en: {
        linkLabel: 'Pet portraits',
        h1: 'Hand-painted acrylic pet portraits in Colombia',
        metaTitle: 'Custom acrylic pet portraits from photo | Sac_Artx',
        metaDescription:
          'Custom pet portraits hand-painted in acrylic from your photo. Commission on WhatsApp, free sketch, and shipping across Colombia.',
        lead: 'Sac_Artx is a studio in Colombia, specializing in custom pet portraits hand-painted in acrylic. Each portrait is commissioned from a photograph sent on WhatsApp.',
        whatItIs:
          'Sac_Artx hand-paints pet portraits in acrylic on canvas or on an acrylic (methacrylate) base. A commission starts with a photo. A digital sketch is sent before painting, and revisions are free.',
        whoFor:
          'Dogs, cats, rabbits, horses, pigeons, and any other animal that matters. Memorial portraits of pets that have passed away are also available from the photos you have.',
        included: [
          'Hand-painted acrylic portrait on canvas or acrylic base.',
          'Digital sketch before painting.',
          'Sketch revisions at no extra charge.',
          'Final approval photo before shipping.',
          'Protective packaging and a tracking number within Colombia.',
        ],
      },
    },
  },
  dogs: {
    noun: { es: 'perro', en: 'dog' },
    priceVariant: 'bullets',
    whereVariant: 'studio',
    related: ['cats', 'pets', 'memorial'],
    content: {
      es: {
        linkLabel: 'Retratos de perros',
        h1: 'Retratos de perros pintados a mano en acrílico en Colombia',
        metaTitle: 'Retratos de perros personalizados desde foto | Sac_Artx',
        metaDescription:
          'Retrato de tu perro pintado a mano en acrílico desde una foto. Cualquier raza, boceto previo sin costo y envío a toda Colombia.',
        lead: 'Sac_Artx es un estudio en Colombia, especializado en retratos personalizados de perros pintados a mano en acrílico. Cada retrato se hace por encargo a partir de una fotografía enviada por WhatsApp.',
        whatItIs:
          'Sac_Artx pinta a mano el retrato de tu perro en acrílico sobre lienzo o sobre base de metacrilato. El encargo empieza con una foto. Antes de pintar se envía un boceto digital, con revisiones sin costo.',
        whoFor:
          'Dueños de perros en Colombia que quieren un cuadro personalizado, un regalo o un retrato en memoria. Se aceptan perros de cualquier raza o mestizos. Se pueden incluir varias mascotas en el mismo cuadro; la cantidad sugerida depende del tamaño.',
        included: [
          'Retrato de perro pintado a mano en acrílico sobre lienzo o base acrílica.',
          'Boceto digital previo a la pintura.',
          'Revisiones del boceto sin costo extra.',
          'Foto de aprobación final antes del envío.',
          'Embalaje y número de seguimiento dentro de Colombia.',
        ],
      },
      en: {
        linkLabel: 'Dog portraits',
        h1: 'Hand-painted acrylic dog portraits in Colombia',
        metaTitle: 'Custom dog portraits from photo | Sac_Artx',
        metaDescription:
          'Your dog hand-painted in acrylic from a photo. Any breed, free sketch before painting, and shipping across Colombia. Memorial portraits available.',
        lead: 'Sac_Artx is a studio in Colombia, specializing in custom dog portraits hand-painted in acrylic. Each portrait is commissioned from a photograph sent on WhatsApp.',
        whatItIs:
          'Sac_Artx hand-paints your dog in acrylic on canvas or on an acrylic (methacrylate) base. A commission starts with a photo. A digital sketch is sent before painting, and revisions are free.',
        whoFor:
          'Dog owners in Colombia who want a custom painting, a gift, or a memorial portrait. Any breed or mixed breed is welcome. Several pets can share one painting; the suggested number depends on the size.',
        included: [
          'Hand-painted acrylic dog portrait on canvas or acrylic base.',
          'Digital sketch before painting.',
          'Sketch revisions at no extra charge.',
          'Final approval photo before shipping.',
          'Protective packaging and a tracking number within Colombia.',
        ],
      },
    },
  },
  cats: {
    noun: { es: 'gato', en: 'cat' },
    priceVariant: 'bullets',
    whereVariant: 'studio',
    related: ['dogs', 'pets', 'memorial'],
    content: {
      es: {
        linkLabel: 'Retratos de gatos',
        h1: 'Retratos de gatos pintados a mano en acrílico en Colombia',
        metaTitle: 'Retratos de gatos personalizados desde foto | Sac_Artx',
        metaDescription:
          'Retrato de tu gato pintado a mano en acrílico desde una foto. Cualquier raza, boceto previo sin costo y envío a toda Colombia.',
        lead: 'Sac_Artx es un estudio en Colombia, especializado en retratos personalizados de gatos pintados a mano en acrílico. Cada retrato se hace por encargo a partir de una fotografía enviada por WhatsApp.',
        whatItIs:
          'Sac_Artx pinta a mano el retrato de tu gato en acrílico sobre lienzo o sobre base de metacrilato. El encargo empieza con una foto. Antes de pintar se envía un boceto digital, con revisiones sin costo.',
        whoFor:
          'Dueños de gatos en Colombia que quieren un cuadro personalizado, un regalo o un retrato en memoria. Se aceptan gatos de cualquier raza o mestizos. Se pueden incluir varias mascotas en el mismo cuadro; la cantidad sugerida depende del tamaño.',
        included: [
          'Retrato de gato pintado a mano en acrílico sobre lienzo o base acrílica.',
          'Boceto digital previo a la pintura.',
          'Revisiones del boceto sin costo extra.',
          'Foto de aprobación final antes del envío.',
          'Embalaje y número de seguimiento dentro de Colombia.',
        ],
      },
      en: {
        linkLabel: 'Cat portraits',
        h1: 'Hand-painted acrylic cat portraits in Colombia',
        metaTitle: 'Custom cat portraits from photo | Sac_Artx',
        metaDescription:
          'Your cat hand-painted in acrylic from a photo. Any breed, free sketch before painting, and shipping across Colombia. Memorial portraits available.',
        lead: 'Sac_Artx is a studio in Colombia, specializing in custom cat portraits hand-painted in acrylic. Each portrait is commissioned from a photograph sent on WhatsApp.',
        whatItIs:
          'Sac_Artx hand-paints your cat in acrylic on canvas or on an acrylic (methacrylate) base. A commission starts with a photo. A digital sketch is sent before painting, and revisions are free.',
        whoFor:
          'Cat owners in Colombia who want a custom painting, a gift, or a memorial portrait. Any breed or mixed breed is welcome. Several pets can share one painting; the suggested number depends on the size.',
        included: [
          'Hand-painted acrylic cat portrait on canvas or acrylic base.',
          'Digital sketch before painting.',
          'Sketch revisions at no extra charge.',
          'Final approval photo before shipping.',
          'Protective packaging and a tracking number within Colombia.',
        ],
      },
    },
  },
  colombia: {
    noun: { es: 'mascota', en: 'pet' },
    priceVariant: 'summaryColombia',
    whereVariant: 'colombia',
    related: ['pets', 'how'],
    content: {
      es: {
        linkLabel: 'Retratos de mascotas en Colombia',
        h1: 'Retratos de mascotas en acrílico con envío a Colombia',
        metaTitle: 'Retratos de mascotas en acrílico con envío en Colombia',
        metaDescription:
          '¿Dónde hacen retratos de mascotas en Colombia? Sac_Artx pinta tu mascota a mano en acrílico y envía a Bogotá, Medellín, Cali y todo el país.',
        lead: 'Sac_Artx es un estudio en Colombia, especializado en retratos personalizados de mascotas pintados a mano en acrílico. Realiza envíos a Bogotá, Medellín, Cali, Barranquilla y el resto de Colombia.',
        whatItIs:
          'Sac_Artx pinta a mano retratos de mascotas en acrílico sobre lienzo o sobre base de metacrilato, por encargo, a partir de una fotografía. También ofrece bases acrílicas, fundas de celular personalizadas y paisajes.',
        whoFor:
          'Personas en Colombia que buscan un artista que pinte a su perro, gato u otra mascota y entregue el cuadro en su ciudad. No hace falta visitar el estudio: el encargo y el envío son a distancia.',
        included: [
          'Retrato pintado a mano en acrílico.',
          'Boceto digital previo y revisiones sin costo.',
          'Embalaje seguro.',
          'Envío a Bogotá, Medellín, Cali, Barranquilla y el resto de Colombia, con número de seguimiento.',
          'Por ahora no hay envíos fuera del país.',
        ],
      },
      en: {
        linkLabel: 'Pet portraits in Colombia',
        h1: 'Acrylic pet portraits with shipping across Colombia',
        metaTitle: 'Pet portraits with shipping across Colombia | Sac_Artx',
        metaDescription:
          'Acrylic pet portraits shipped across Colombia. Sac_Artx paints your dog or cat from a photo and delivers to Bogotá, Medellín, Cali and beyond.',
        lead: 'Sac_Artx is a studio in Colombia, specializing in custom pet portraits hand-painted in acrylic. Orders ship to Bogotá, Medellín, Cali, Barranquilla, and the rest of Colombia.',
        whatItIs:
          'Sac_Artx hand-paints pet portraits in acrylic on canvas or on an acrylic (methacrylate) base, commissioned from a photograph. The studio also offers acrylic bases, personalized phone cases, and landscapes.',
        whoFor:
          'People in Colombia who want an artist to paint their dog, cat, or other pet and deliver the piece to their city. There is no need to visit the studio: commissions and shipping are remote.',
        included: [
          'Hand-painted acrylic portrait.',
          'Digital sketch beforehand and free revisions.',
          'Secure packaging.',
          'Shipping to Bogotá, Medellín, Cali, Barranquilla, and the rest of Colombia, with a tracking number.',
          'Shipping outside Colombia is not available for now.',
        ],
      },
    },
  },
  memorial: {
    noun: { es: 'mascota', en: 'pet' },
    priceVariant: 'bullets',
    whereVariant: 'studio',
    related: ['pets', 'how', 'dogs'],
    content: {
      es: {
        linkLabel: 'Retrato de mascota fallecida',
        h1: 'Retrato de mascota fallecida, pintado a mano en acrílico',
        metaTitle: 'Retrato de mascota fallecida en acrílico · Sac_Artx',
        metaDescription:
          'Sac_Artx pinta un retrato de mascota fallecida en acrílico desde las fotos que conservas. Boceto previo y envío a toda Colombia.',
        lead: 'Un retrato de mascota fallecida en Sac_Artx es un cuadro pintado a mano en acrílico, a partir de las fotos que conservas. Sara Amaya Caldas lo hace por encargo en Colombia: envías la foto por WhatsApp, recibes un boceto digital antes de pintar y el cuadro sale a todo el país.',
        whatItIs:
          'Sac_Artx pinta el retrato en memoria sobre lienzo o sobre base de metacrilato. Sirve la foto que tengas, aunque no sea reciente. Si la luz es mala o hay varias tomas, se puede mejorar la iluminación o unirlas antes de pintar.',
        whoFor:
          'Quien perdió a su perro, gato u otra mascota y quiere tenerlo cerca, y quien encarga el cuadro como recuerdo para otra persona. El proceso es el mismo que el de un retrato de una mascota que sigue en casa, con el cuidado que merece el recuerdo.',
        included: [
          'Retrato pintado a mano en acrílico sobre lienzo o base acrílica, desde las fotos que conservas.',
          'Boceto digital previo a la pintura.',
          'Revisiones del boceto sin costo extra.',
          'Foto de aprobación final antes del envío.',
          'Embalaje y número de seguimiento dentro de Colombia.',
        ],
      },
      en: {
        linkLabel: 'Memorial pet portrait',
        h1: 'A memorial pet portrait, hand-painted in acrylic',
        metaTitle: 'Memorial pet portrait from a photo · Sac_Artx',
        metaDescription:
          'Sac_Artx paints a memorial pet portrait in acrylic from the photos you kept. A sketch comes first, and shipping covers Colombia.',
        lead: 'A memorial pet portrait from Sac_Artx is a painting made by hand in acrylic, from the photos you still have. Sara Amaya Caldas paints it to order in Colombia: you send the photo on WhatsApp, you receive a digital sketch before painting, and the piece ships across the country.',
        whatItIs:
          'Sac_Artx paints the memorial portrait on canvas or on a methacrylate base. The photo you have is enough, even if it is not recent. If the light is poor or you have several shots, the lighting can be improved or the photos combined before painting.',
        whoFor:
          'Anyone who lost a dog, cat, or other pet and wants them close, and anyone commissioning the painting as a keepsake for someone else. The process is the same as a portrait of a pet who is still here, with the care the memory deserves.',
        included: [
          'Hand-painted acrylic portrait on canvas or an acrylic base, from the photos you kept.',
          'Digital sketch before painting.',
          'Sketch revisions at no extra charge.',
          'Final approval photo before shipping.',
          'Protective packaging and a tracking number within Colombia.',
        ],
      },
    },
  },
  how: {
    noun: { es: 'mascota', en: 'pet' },
    priceVariant: 'summaryHow',
    whereVariant: 'studio',
    related: ['pets', 'colombia'],
    content: {
      es: {
        linkLabel: 'Cómo funciona',
        h1: '¿Cómo encargar tu retrato de mascota personalizado?',
        metaTitle: '¿Cómo encargar tu retrato de mascota personalizado? | Sac_Artx',
        metaDescription:
          'Hacer tu pedido en Sac_Artx es sencillo: foto, boceto en menos de 48 horas y retrato pintado a mano. El plazo corre desde la aprobación del boceto. El envío no está incluido.',
        lead: 'Hacer tu pedido en Sac_Artx es muy sencillo. Sigue estos pasos y pronto tendrás una obra de arte creada especialmente para ti.',
        whatItIs:
          'El proceso de Sac_Artx tiene cinco pasos: enviar la foto, recibir un boceto digital, aprobar el diseño, pintar la obra y recibir el envío. Sitio: https://sacartx.art/',
        whoFor:
          'Quien quiere encargar un retrato de perro, gato u otra mascota, una base acrílica o una funda personalizada, con seguimiento por WhatsApp e Instagram.',
        included: [
          'Manda tu foto: envías la mejor foto de tu mascota por WhatsApp o Instagram. Sac_Artx ayuda a elegir la mejor toma. Guía: [cómo tomar la foto](/blog/como-elegir-la-mejor-foto-mascota/).',
          'Boceto en menos de 48 horas: recibes un boceto digital de cómo puede quedar.',
          'Apruebas el diseño: se ajusta lo necesario sin cargo extra por revisiones.',
          'Se pinta: cada retrato es pintado a mano en acrílico. Al terminar, recibes fotografías por WhatsApp para revisar el resultado final.',
          'Recibes tu obra: envío a toda Colombia, a cualquier parte del país, por transportadoras aliadas, con embalaje seguro y seguimiento.',
        ],
        includedOrdered: true,
        includedNote:
          'También se puede mejorar la imagen con inteligencia artificial antes de pintar: corregir la iluminación o unir varias fotos.',
      },
      en: {
        linkLabel: 'How it works',
        h1: 'How do you commission your custom pet portrait?',
        metaTitle: 'How do you commission your custom pet portrait? | Sac_Artx',
        metaDescription:
          'Ordering from Sac_Artx is simple: a photo, a sketch in under 48 hours, and a hand-painted portrait. The clock starts when you approve the sketch. Shipping is not included.',
        lead: 'Ordering from Sac_Artx is simple. Follow these steps and you will soon have a work of art made just for you.',
        whatItIs:
          'The Sac_Artx process has five steps: send the photo, receive a digital sketch, approve the design, paint the piece, and receive the shipment. Website: https://sacartx.art/en/',
        whoFor:
          'Anyone commissioning a dog, cat, or other pet portrait, an acrylic base, or a personalized phone case, with follow-up on WhatsApp and Instagram.',
        included: [
          'Send your photo: you send the best photo of your pet on WhatsApp or Instagram. Sac_Artx helps you choose the best shot. Guide: [how to take the photo](/en/blog/how-to-choose-the-best-photo/).',
          'Sketch in under 48 hours: you receive a digital sketch of how it might turn out.',
          'Approve the design: whatever is needed gets adjusted, with no extra charge for revisions.',
          'Painting: each portrait is painted by hand in acrylic. When it is finished, you receive photos on WhatsApp to review the final result.',
          'Delivery: shipping anywhere in Colombia through partner carriers, with protective packaging and tracking.',
        ],
        includedOrdered: true,
        includedNote:
          'The image can also be improved with artificial intelligence before painting: fixing the lighting or combining several photos.',
      },
    },
  },
};

const langs: Lang[] = ['es', 'en'];

function buildEntry(topic: IntentTopic, lang: Lang): IntentEntry {
  const cfg = topicConfig[topic];
  const content = cfg.content[lang];
  const otherLang: Lang = lang === 'en' ? 'es' : 'en';
  return {
    topic,
    lang,
    slug: intentSlugs[topic][lang],
    altSlug: intentSlugs[topic][otherLang],
    noun: cfg.noun[lang],
    priceVariant: cfg.priceVariant,
    whereVariant: cfg.whereVariant,
    related: cfg.related,
    ...content,
  };
}

/** All intent entries keyed by `${topic}-${lang}`. */
export const intentPages: Record<string, IntentEntry> = Object.fromEntries(
  intentTopics.flatMap((topic) => langs.map((lang) => [`${topic}-${lang}`, buildEntry(topic, lang)]))
);

/** Typed accessor for a single entry. */
export function intentEntry(topic: IntentTopic, lang: Lang): IntentEntry {
  return intentPages[`${topic}-${lang}`]!;
}

export { intentTopics };
export type { IntentTopic, Lang };
