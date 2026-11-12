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

/** About page path, e.g. '/sobre-mi/' or '/en/about/'. */
export function aboutPath(lang: Lang) {
  return lang === 'en' ? '/en/about/' : '/sobre-mi/';
}

/** Blog index path, e.g. '/blog/' or '/en/blog/'. */
export function blogPath(lang: Lang) {
  return lang === 'en' ? '/en/blog/' : '/blog/';
}

/** Blog post path for a given post slug, e.g. '/blog/<slug>/' or '/en/blog/<slug>/'. */
export function blogPostPath(slug: string, lang: Lang) {
  return lang === 'en' ? `/en/blog/${slug}/` : `/blog/${slug}/`;
}

/** Topic → per-language route slug for the intent (guide) pages. */
export const intentSlugs = {
  pets: { es: 'retratos-de-mascotas', en: 'pet-portraits' },
  dogs: { es: 'retratos-perros', en: 'dog-portraits' },
  cats: { es: 'retratos-gatos', en: 'cat-portraits' },
  colombia: { es: 'retratos-mascotas-colombia', en: 'pet-portraits-colombia' },
  how: { es: 'como-funciona', en: 'how-it-works' },
  memorial: { es: 'retrato-mascota-fallecida', en: 'memorial-pet-portrait' },
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

/** Product key → per-language route slug for the dedicated product pages. */
export const productSlugs = {
  paintings: { es: 'cuadros-en-acrilico', en: 'acrylic-paintings' },
  bases: { es: 'bases-acrilicas', en: 'acrylic-bases' },
  cases: { es: 'fundas-personalizadas', en: 'custom-phone-cases' },
  sizes: { es: 'cuadros-de-diferentes-tamanos', en: 'paintings-different-sizes' },
  magnets: { es: 'imanes-de-lienzo', en: 'canvas-magnets' },
} as const;

export type ProductKey = keyof typeof productSlugs;

export const productKeys = Object.keys(productSlugs) as ProductKey[];

/** Path for a product page, e.g. '/producto/bases-acrilicas/' or '/en/product/acrylic-bases/'. */
export function productPath(product: ProductKey, lang: Lang) {
  const slug = productSlugs[product][lang];
  return lang === 'en' ? `/en/product/${slug}/` : `/producto/${slug}/`;
}

/** Product key matching the given pathname, in either language, or null. */
export function matchProduct(pathname: string): ProductKey | null {
  const path = pathname
    .replace(/\/+$/, '')
    .replace(/^\/(en\/)?/, '')
    .replace(/^(producto|product)\//, '');
  for (const key of productKeys) {
    const slugs = productSlugs[key];
    if (path === slugs.es || path === slugs.en) return key;
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

export function isAboutPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path === '/sobre-mi' || path === '/en/about';
}

export function isBlogIndexPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return path === '/blog' || path === '/en/blog';
}

export function isBlogPostPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '');
  return /^\/(en\/)?blog\/.+/.test(path) && !isBlogIndexPath(pathname);
}

/** Language-switch target for the current pathname. */
export function alternatePath(pathname: string, otherLang: Lang) {
  if (isCatalogPath(pathname)) return catalogPath(otherLang);
  if (isPricesPath(pathname)) return pricesPath(otherLang);
  if (isPrivacyPath(pathname)) return privacyPath(otherLang);
  if (isAboutPath(pathname)) return aboutPath(otherLang);
  // Blog index pages are reciprocal. Blog posts resolve their own post-to-post
  // target via Navbar's langSwitchHref prop (needs the collection); the pathname
  // fallback here is the blog index in the other language.
  if (isBlogIndexPath(pathname) || isBlogPostPath(pathname)) return blogPath(otherLang);
  const product = matchProduct(pathname);
  if (product) return productPath(product, otherLang);
  const topic = matchIntentTopic(pathname);
  if (topic) return intentPath(topic, otherLang);
  return homePath(otherLang);
}
