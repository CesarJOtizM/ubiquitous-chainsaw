/**
 * Google Business reviews quoted on the product page the studio assigns.
 * Visible text only. They are not copied into Product review or aggregateRating
 * schema: Google asks sites to collect those ratings themselves.
 */
import type { ProductKey } from '../i18n/paths';
import { business } from './business';

export interface GoogleReview {
  author: string;
  /** Stars the customer gave on Google. */
  stars: 1 | 2 | 3 | 4 | 5;
  /** Original review text. Kept in Spanish on both language versions. */
  quote: string;
}

/** Public Google listing, where the full review and its date live. */
export const googleReviewUrl = business.google;

export const googleReviews: Partial<Record<ProductKey, readonly GoogleReview[]>> = {
  paintings: [
    {
      author: 'Natalia Falla',
      stars: 5,
      quote:
        'Tiene un talento increíble!!! Y es un ser humano hermoso, a cualquiera que quiera dar un regalito con mucho valor ella es la mejor en esto, la recomiendo 100% y tiene mucha empatia con lo que quieres transmitir y con lo que significa ese retrato para ti ❤️❤️❤️',
    },
  ],
  bases: [
    {
      author: 'Vanessa Amaya',
      stars: 5,
      quote:
        'He comprado varios cuadros en acrílico, la atención es personalizada, Sara presta atención a cada detalle para que sea único y especial, me encanta como logra transmitir el amor en cada trazo, lo super recomiendo ❤️💖 si están pensando en dar un detalle que quede en el corazón no duden en sus cuadritos',
    },
  ],
  cases: [
    {
      author: 'Deisy Lorena Jaimes Heredia',
      stars: 5,
      quote:
        'Realmente muy recomendado, me encantó mi case, me gustó mucho ver a mi gata plasmada, no sólo es una fotografía porque cada pincelazo fue el resultado de un gran esfuerzo y finalmente mi gatita linda. Me encantó',
    },
  ],
};
