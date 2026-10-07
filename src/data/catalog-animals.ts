/**
 * Proposed animal tags for catalog images.
 * Sara should correct any wrong entries before ImageKit migration.
 *
 * Values:
 * - dog | cat | rabbit | horse | pigeon | bird | mixed | none
 * - "none" = flowers, anime, logos, landscapes, abstract, scripture, etc.
 */
export type CatalogAnimal =
  | 'dog'
  | 'cat'
  | 'rabbit'
  | 'horse'
  | 'pigeon'
  | 'bird'
  | 'mixed'
  | 'none';

export const animalAltEs: Record<CatalogAnimal, string> = {
  dog: 'Retrato de perro',
  cat: 'Retrato de gato',
  rabbit: 'Retrato de conejo',
  horse: 'Retrato de caballo',
  pigeon: 'Retrato de paloma',
  bird: 'Retrato de ave',
  mixed: 'Retrato de mascotas',
  none: 'Obra personalizada',
};

export const animalAltEn: Record<CatalogAnimal, string> = {
  dog: 'Dog portrait',
  cat: 'Cat portrait',
  rabbit: 'Rabbit portrait',
  horse: 'Horse portrait',
  pigeon: 'Pigeon portrait',
  bird: 'Bird portrait',
  mixed: 'Pet portraits',
  none: 'Custom artwork',
};

/** Path without leading slash, e.g. images/cuadros-mascotas/01.jpg */
export const catalogAnimals: Record<string, CatalogAnimal> = {
  // cuadros-mascotas — reviewed
  'images/cuadros-mascotas/01.jpg': 'dog',
  'images/cuadros-mascotas/02.jpg': 'dog',
  'images/cuadros-mascotas/03.jpg': 'dog',
  'images/cuadros-mascotas/04.jpg': 'cat',
  'images/cuadros-mascotas/05.jpg': 'dog',
  'images/cuadros-mascotas/06.jpg': 'cat',
  'images/cuadros-mascotas/07.jpg': 'cat',
  'images/cuadros-mascotas/08.jpg': 'cat',
  'images/cuadros-mascotas/09.jpg': 'dog',
  'images/cuadros-mascotas/10.jpg': 'dog',
  'images/cuadros-mascotas/11.jpg': 'mixed', // cat + dog

  // bases-acrilicas — sample reviewed; rest guessed as pet → needs Sara review
  'images/bases-acrilicas/01.jpg': 'dog',
  'images/bases-acrilicas/02.jpg': 'dog', // pending confirm
  'images/bases-acrilicas/03.jpg': 'dog', // pending confirm
  'images/bases-acrilicas/04.jpg': 'cat', // pending confirm
  'images/bases-acrilicas/05.jpg': 'cat',
  'images/bases-acrilicas/06.jpg': 'dog', // pending confirm
  'images/bases-acrilicas/07.jpg': 'cat', // pending confirm
  'images/bases-acrilicas/08.jpg': 'dog', // pending confirm
  'images/bases-acrilicas/09.jpg': 'cat', // pending confirm
  'images/bases-acrilicas/10.jpg': 'cat',
  'images/bases-acrilicas/11.jpg': 'dog', // pending confirm
  'images/bases-acrilicas/12.jpg': 'cat', // pending confirm
  'images/bases-acrilicas/13.jpg': 'dog', // pending confirm
  'images/bases-acrilicas/14.jpg': 'cat', // pending confirm
  'images/bases-acrilicas/15.jpg': 'dog', // pending confirm

  // case-mascotas
  'images/case-mascotas/01.jpg': 'cat',
  'images/case-mascotas/02.jpg': 'dog', // pending confirm
  'images/case-mascotas/03.jpg': 'cat', // pending confirm
  'images/case-mascotas/04.jpg': 'dog', // pending confirm
  'images/case-mascotas/05.jpg': 'dog',
  'images/case-mascotas/06.jpg': 'cat', // pending confirm
  'images/case-mascotas/07.jpg': 'dog', // pending confirm
  'images/case-mascotas/08.jpg': 'dog',
  'images/case-mascotas/09.jpg': 'dog', // pending confirm
  'images/case-mascotas/10.jpg': 'cat', // pending confirm
  'images/case-mascotas/11.jpg': 'dog', // pending confirm

  // case-flores — no animal
  'images/case-flores/01.jpg': 'none',
  'images/case-flores/02.jpg': 'none',
  'images/case-flores/03.jpg': 'none',
  'images/case-flores/04.jpg': 'none',

  // case-anime — characters, not pets
  'images/case-anime/01.jpg': 'none',
  'images/case-anime/02.jpg': 'none',
  'images/case-anime/03.jpg': 'none',
  'images/case-anime/04.jpg': 'none',
  'images/case-anime/05.jpg': 'none',

  // case-personalizados — mixed designs; default none until Sara tags pets
  'images/case-personalizados/01.jpg': 'none',
  'images/case-personalizados/02.jpg': 'none',
  'images/case-personalizados/03.jpg': 'none',
  'images/case-personalizados/04.jpg': 'none',
  'images/case-personalizados/05.jpg': 'none',
  'images/case-personalizados/06.jpg': 'none',
  'images/case-personalizados/07.jpg': 'none',
  'images/case-personalizados/08.jpg': 'none',
  'images/case-personalizados/09.jpg': 'none',
  'images/case-personalizados/10.jpg': 'none',
  'images/case-personalizados/11.jpg': 'none',
  'images/case-personalizados/12.jpg': 'none',
  'images/case-personalizados/13.jpg': 'none',
  'images/case-personalizados/14.jpg': 'none',
  'images/case-personalizados/15.jpg': 'none',
  'images/case-personalizados/16.jpg': 'none',
  'images/case-personalizados/17.jpg': 'none',
  'images/case-personalizados/18.jpg': 'none',

  // cuadros-personalizados
  'images/cuadros-personalizados/01.jpg': 'none', // verse
  'images/cuadros-personalizados/02.jpg': 'none', // Frida
  'images/cuadros-personalizados/03.jpg': 'none', // abstract
  'images/cuadros-personalizados/04.jpg': 'none', // sun abstract
  'images/cuadros-personalizados/05.jpg': 'bird', // birds silhouette
  'images/cuadros-personalizados/06.jpg': 'none', // urban landscape
  'images/cuadros-personalizados/07.jpg': 'none', // pending — check for horse/rabbit/pigeon
  'images/cuadros-personalizados/08.jpg': 'none', // pending
  'images/cuadros-personalizados/09.jpg': 'none', // pending

  'images/testimonials/01.jpg': 'none',
};

export function animalForSrc(src: string): CatalogAnimal {
  const key = src.replace(/^\//, '');
  return catalogAnimals[key] ?? 'none';
}
