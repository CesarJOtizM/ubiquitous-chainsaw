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
  return homePath(otherLang);
}
