/**
 * Return policy. Handmade commissions are painted after the customer
 * approves the sketch, so I do not take the piece back.
 * Facts come from prices.ts, the published process, and Law 1480 of 2011,
 * article 47. Nothing else is promised.
 */
import { business } from './business';
import { LEAD_TIME_DAYS } from './prices';
import { intentPath, pricesPath, type Lang } from '../i18n/paths';
import type { PrivacyCopy } from './privacy';

const LAW_1480 = 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306';
const WHATSAPP = `https://wa.me/${business.phone.replace('+', '')}`;
const { min, max } = LEAD_TIME_DAYS;

function howPath(lang: Lang) {
  return intentPath('how', lang);
}

export const returnsCopy: Record<Lang, PrivacyCopy> = {
  es: {
    label: 'Devoluciones',
    title: '¿Acepto devoluciones?',
    metaTitle: 'Política de devoluciones · Sac_Artx',
    metaDescription:
      'No acepto devoluciones ni reembolsos. Pinto cada pieza a mano desde tu foto, y tú apruebas el boceto antes de que empiece.',
    crumb: 'Devoluciones',
    updated: 'Actualizada el 20 de noviembre de 2026',
    intro: `No. No acepto devoluciones ni reembolsos de un cuadro, una base acrílica o una funda ya encargados. Pinto cada pieza a mano en ${business.name}, en Colombia, desde tu foto. Tú apruebas el boceto antes de que empiece.`,
    sections: [
      {
        id: 'por-que',
        title: '¿Por qué no hay devolución?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Cada pieza la hago para una sola persona. El retrato sale de tu foto y del boceto que apruebas por WhatsApp. Cuando lo apruebas, pinto esa pieza. No me queda otra igual para vender.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'La Ley 1480 de 2011, artículo 47, exceptúa del derecho de retracto los bienes hechos según lo que pide el consumidor, o claramente personalizados. ',
              },
              { text: 'El texto de la ley está en Función Pública.', href: LAW_1480, external: true },
              {
                text: ' Un retrato que pinto desde tu foto, con el boceto que aprobaste, entra en ese caso.',
              },
            ],
          },
        ],
      },
      {
        id: 'aprobacion',
        title: '¿Qué apruebas antes de que pinte?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: `Te mando un boceto digital por WhatsApp en menos de 48 horas. Los cambios de ese boceto no te los cobro. Empiezo a pintar cuando apruebas el boceto. Cuento los ${min} a ${max} días hábiles desde esa aprobación. El proceso está en `,
              },
              { text: 'cómo funciona', href: howPath('es') },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'dinero',
        title: '¿Me devuelves el dinero si ya aprobé el boceto?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'No. Después de esa aprobación, pinto la pieza para ti. Me pagas el 50% para empezar y el 50% al terminar. Ese pago es el valor del encargo. El envío lo pagas aparte, a la transportadora, cuando llega a tu casa. Los precios y el pago están en ',
              },
              { text: 'la página de precios', href: pricesPath('es') },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'productos',
        title: '¿Qué productos cubre esta política?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Los cuadros en acrílico, las bases acrílicas y las fundas de celular que pinto, y también los cuadros que cotizo según el diseño. Todos los hago desde tu foto o tu idea, después de que apruebas el boceto.',
              },
            ],
          },
        ],
      },
      {
        id: 'boceto',
        title: '¿Dónde digo si el boceto no cuadra?',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'En el boceto, antes de aprobarlo. Escríbeme por WhatsApp al ' },
              { text: business.phoneDisplay, href: WHATSAPP, external: true },
              {
                text: '. Ahí la ajusto, sin costo. Después de la aprobación, vale lo que dice esta página.',
              },
            ],
          },
        ],
      },
    ],
  },
  en: {
    label: 'Returns',
    title: 'Do I accept returns?',
    metaTitle: 'Return policy · Sac_Artx',
    metaDescription:
      'I do not accept returns or refunds. I paint each piece by hand from your photo, and you approve the sketch before I start.',
    crumb: 'Returns',
    updated: 'Updated November 20, 2026',
    intro: `No. I do not accept returns or refunds on a commissioned canvas, acrylic base, or phone case. I paint each piece by hand at ${business.name}, in Colombia, from your photo. You approve the sketch before I start.`,
    sections: [
      {
        id: 'why',
        title: 'Why is there no return?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'I make each piece for one person. The portrait comes from your photo and from the sketch you approve on WhatsApp. Once you approve it, I paint that piece for you. I have no matching piece left to sell.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Colombia’s Law 1480 of 2011, article 47, excludes from the right of withdrawal goods made to the consumer’s specifications, or clearly personalized. ',
              },
              { text: 'The statute is published by Función Pública.', href: LAW_1480, external: true },
              {
                text: ' A portrait I paint from your photo, with the sketch you approved, is that case.',
              },
            ],
          },
        ],
      },
      {
        id: 'approval',
        title: 'What do you approve before I paint?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: `I send you a digital sketch on WhatsApp in under 48 hours. I do not charge for changes to that sketch. I start painting when you approve it. I count the ${min} to ${max} business days from that approval. The steps are on `,
              },
              { text: 'how it works', href: howPath('en') },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'money',
        title: 'Do you refund the money after I approve the sketch?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'No. After that approval, I paint the piece for you. You pay me 50% to start and 50% when I finish. That payment is the price of the commission. You pay shipping separately, to the carrier, when it arrives at your home. Prices and payment are on ',
              },
              { text: 'the prices page', href: pricesPath('en') },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'products',
        title: 'Which products does this policy cover?',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'The acrylic paintings, acrylic bases, and phone cases I paint, and the paintings I quote by the design. I make each one from your photo or your idea, after you approve the sketch.',
              },
            ],
          },
        ],
      },
      {
        id: 'sketch',
        title: 'Where do I say the sketch is off?',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'On the sketch, before you approve it. Message me on WhatsApp at ' },
              { text: business.phoneDisplay, href: WHATSAPP, external: true },
              {
                text: '. I adjust it there, at no charge. After you approve it, this page applies.',
              },
            ],
          },
        ],
      },
    ],
  },
};
