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

export function isCatalogPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path.endsWith('/catalog') || path.endsWith('/catalogo');
}

export function isPricesPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path.endsWith('/prices') || path.endsWith('/precios');
}

/** Language-switch target for the current pathname. */
export function alternatePath(pathname: string, otherLang: Lang) {
  if (isCatalogPath(pathname)) return catalogPath(otherLang);
  if (isPricesPath(pathname)) return pricesPath(otherLang);
  return homePath(otherLang);
}
