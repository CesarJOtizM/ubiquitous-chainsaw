export type Lang = 'es' | 'en';

export function homePath(lang: Lang) {
  return lang === 'en' ? '/en/' : '/';
}

export function catalogPath(lang: Lang) {
  return lang === 'en' ? '/en/catalog/' : '/catalogo/';
}

export function isCatalogPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path.endsWith('/catalog') || path.endsWith('/catalogo');
}
