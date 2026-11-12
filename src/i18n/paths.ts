export type Lang = 'es' | 'en';

export function homePath(lang: Lang) {
  return lang === 'en' ? '/en/' : '/';
}

export function catalogPath(lang: Lang) {
  return lang === 'en' ? '/en/catalog/' : '/catalogo/';
}

export function pricesPath(lang: Lang) {
  return lang === 'en' ? '/en/prices/' : '/precios/';
}

export function privacyPath(lang: Lang) {
  return lang === 'en' ? '/en/privacy/' : '/privacidad/';
}

/** Topic → per-language route slug for the intent (guide) pages. */
export const intentSlugs = {
  pets: { es: 'retratos-de-mascotas', en: 'pet-portraits' },
  dogs: { es: 'retratos-perros', en: 'dog-portraits' },
  cats: { es: 'retratos-gatos', en: 'cat-portraits' },
  colombia: { es: 'retratos-mascotas-colombia', en: 'pet-portraits-colombia' },
  how: { es: 'como-funciona', en: 'how-it-works' },
} as const;

export type IntentTopic = keyof typeof intentSlugs;

export const intentTopics = Object.keys(intentSlugs) as IntentTopic[];

/** Path for an intent page, e.g. '/retratos-de-mascotas/' or '/en/pet-portraits/'. */
export function intentPath(topic: IntentTopic, lang: Lang) {
  const slug = intentSlugs[topic][lang];
  return lang === 'en' ? `/en/${slug}/` : `/${slug}/`;
}

/** Topic matching the given pathname, in either language, or null. */
export function matchIntentTopic(pathname: string): IntentTopic | null {
  const path = pathname.replace(/\/+$/, '').replace(/^\/(en\/)?/, '');
  for (const topic of intentTopics) {
    const slugs = intentSlugs[topic];
    if (path === slugs.es || path === slugs.en) return topic;
  }
  return null;
}

export function isCatalogPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path.endsWith('/catalog') || path.endsWith('/catalogo');
}

export function isPricesPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path.endsWith('/prices') || path.endsWith('/precios');
}

export function isPrivacyPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path.endsWith('/privacy') || path.endsWith('/privacidad');
}

/** Language-switch target for the current pathname. */
export function alternatePath(pathname: string, otherLang: Lang) {
  if (isCatalogPath(pathname)) return catalogPath(otherLang);
  if (isPricesPath(pathname)) return pricesPath(otherLang);
  if (isPrivacyPath(pathname)) return privacyPath(otherLang);
  const topic = matchIntentTopic(pathname);
  if (topic) return intentPath(topic, otherLang);
  return homePath(otherLang);
}
