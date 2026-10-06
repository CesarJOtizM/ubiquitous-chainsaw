import type { TranslationKey } from '../i18n/utils';

export const catalogLineIds = [
  'cuadros-mascotas',
  'bases-acrilicas',
  'cuadros-personalizados',
  'case-mascotas',
  'case-flores',
  'case-anime',
  'case-personalizados',
] as const;

export type CatalogLineId = (typeof catalogLineIds)[number];

type LineCopy = {
  id: CatalogLineId;
  name: TranslationKey;
  desc: TranslationKey;
  price: TranslationKey;
  medium: TranslationKey;
  wa: TranslationKey;
  /** Shown on the homepage as an entrance to the catalog. */
  featured: boolean;
};

export const catalogLines: LineCopy[] = [
  {
    id: 'cuadros-mascotas',
    name: 'catalog.cat.pets.name',
    desc: 'catalog.cat.pets.desc',
    price: 'catalog.cat.pets.price',
    medium: 'catalog.cat.pets.medium',
    wa: 'catalog.cat.pets.wa',
    featured: true,
  },
  {
    id: 'bases-acrilicas',
    name: 'catalog.cat.bases.name',
    desc: 'catalog.cat.bases.desc',
    price: 'catalog.cat.bases.price',
    medium: 'catalog.cat.bases.medium',
    wa: 'catalog.cat.bases.wa',
    featured: true,
  },
  {
    id: 'cuadros-personalizados',
    name: 'catalog.cat.custom.name',
    desc: 'catalog.cat.custom.desc',
    price: 'catalog.cat.custom.price',
    medium: 'catalog.cat.custom.medium',
    wa: 'catalog.cat.custom.wa',
    featured: true,
  },
  {
    id: 'case-mascotas',
    name: 'catalog.cat.casePets.name',
    desc: 'catalog.cat.casePets.desc',
    price: 'catalog.cat.casePets.price',
    medium: 'catalog.cat.casePets.medium',
    wa: 'catalog.cat.casePets.wa',
    featured: true,
  },
  {
    id: 'case-flores',
    name: 'catalog.cat.caseFlowers.name',
    desc: 'catalog.cat.caseFlowers.desc',
    price: 'catalog.cat.caseFlowers.price',
    medium: 'catalog.cat.caseFlowers.medium',
    wa: 'catalog.cat.caseFlowers.wa',
    featured: false,
  },
  {
    id: 'case-anime',
    name: 'catalog.cat.caseAnime.name',
    desc: 'catalog.cat.caseAnime.desc',
    price: 'catalog.cat.caseAnime.price',
    medium: 'catalog.cat.caseAnime.medium',
    wa: 'catalog.cat.caseAnime.wa',
    featured: false,
  },
  {
    id: 'case-personalizados',
    name: 'catalog.cat.caseCustom.name',
    desc: 'catalog.cat.caseCustom.desc',
    price: 'catalog.cat.caseCustom.price',
    medium: 'catalog.cat.caseCustom.medium',
    wa: 'catalog.cat.caseCustom.wa',
    featured: false,
  },
];

export const catalogItems: { src: string; line: CatalogLineId }[] = [
  { src: '/images/bases-acrilicas/01.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/02.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/03.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/04.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/05.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/06.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/07.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/08.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/09.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/10.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/11.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/12.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/13.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/14.jpg', line: 'bases-acrilicas' },
  { src: '/images/bases-acrilicas/15.jpg', line: 'bases-acrilicas' },
  { src: '/images/cuadros-mascotas/01.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/02.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/03.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/04.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/05.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/06.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/07.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/08.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/09.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/10.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-mascotas/11.jpg', line: 'cuadros-mascotas' },
  { src: '/images/cuadros-personalizados/01.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/02.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/03.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/04.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/05.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/06.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/07.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/08.jpg', line: 'cuadros-personalizados' },
  { src: '/images/cuadros-personalizados/09.jpg', line: 'cuadros-personalizados' },
  { src: '/images/case-anime/01.jpg', line: 'case-anime' },
  { src: '/images/case-anime/02.jpg', line: 'case-anime' },
  { src: '/images/case-anime/03.jpg', line: 'case-anime' },
  { src: '/images/case-anime/04.jpg', line: 'case-anime' },
  { src: '/images/case-anime/05.jpg', line: 'case-anime' },
  { src: '/images/case-flores/01.jpg', line: 'case-flores' },
  { src: '/images/case-flores/02.jpg', line: 'case-flores' },
  { src: '/images/case-flores/03.jpg', line: 'case-flores' },
  { src: '/images/case-flores/04.jpg', line: 'case-flores' },
  { src: '/images/case-mascotas/01.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/02.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/03.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/04.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/05.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/06.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/07.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/08.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/09.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/10.jpg', line: 'case-mascotas' },
  { src: '/images/case-mascotas/11.jpg', line: 'case-mascotas' },
  { src: '/images/case-personalizados/01.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/02.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/03.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/04.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/05.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/06.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/07.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/08.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/09.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/10.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/11.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/12.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/13.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/14.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/15.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/16.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/17.jpg', line: 'case-personalizados' },
  { src: '/images/case-personalizados/18.jpg', line: 'case-personalizados' },
];

export function itemsForLine(id: CatalogLineId) {
  return catalogItems.filter((item) => item.line === id);
}
