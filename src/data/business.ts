/**
 * Canonical business facts. Single source for schema, generated .md pages and
 * llms.txt so phone, handles and coverage never drift between files.
 */
import type { Lang } from '../i18n/paths';

export const business = {
  name: 'Sac_Artx',
  site: 'https://sacartx.art',
  phone: '+573016584401',
  phoneDisplay: '+57 301 658 4401',
  founder: 'Sara Amaya Caldas',
  handle: '@sac_artx',
  instagram: 'https://www.instagram.com/sac_artx',
  tiktok: 'https://www.tiktok.com/@sac_artx',
  facebook: 'https://www.facebook.com/profile.php?id=61561180858722',
  cities: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'],
} as const;

/** Stable @id shared by LocalBusiness.founder, the about page and blog authors. */
export const founderId = `${business.site}/#founder`;

export const paymentMethods: Record<Lang, string> = {
  es: 'Nequi, Daviplata, transferencia bancaria y efectivo',
  en: 'Nequi, Daviplata, bank transfer and cash',
};

/** Human-readable shipping coverage, e.g. "Bogotá, Medellín, Cali, Barranquilla y el resto de Colombia". */
export function coverageText(lang: Lang): string {
  const tail = lang === 'en' ? 'and the rest of Colombia' : 'y el resto de Colombia';
  return `${business.cities.join(', ')} ${tail}`;
}
