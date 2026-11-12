# Feature: SEO content expansion — product pages, blog, about

Follow-up to seo-improvements. Same Astro SSR bilingual site (sacartx.art). Builds on
the single-source foundation already in place: src/data/business.ts, src/lib/price-text.ts,
src/data/intent-pages.ts + IntentPage.astro, src/data/prices.ts, src/data/catalog.ts.
Branch: feat/seo-improvements (unmerged; shares the foundation). User approved full scope.

## Specs

- S1 — Dedicated product pages, grouped into 3 solid pages × 2 langs (not 7 thin ones):
  (a) Cuadros en acrílico / Acrylic paintings (catalog lines cuadros-mascotas + cuadros-personalizados + landscapes),
  (b) Bases acrílicas / Acrylic bases (bases-acrilicas),
  (c) Fundas personalizadas / Custom phone cases (case-mascotas + case-flores + case-anime + case-personalizados).
  Each page: one H1, citable lead, gallery (reuse catalog images), price from prices.ts,
  what's included, FAQ, internal links (related products + /precios + /catalogo + relevant intent pages),
  reciprocal hreflang, canonical, and Product schema (name, description, image, brand=Sac_Artx,
  offers with priceCurrency COP + price/priceRange from prices.ts, availability, areaServed). Link from nav/footer.
- S2 — Blog: bilingual (ES /blog, EN /en/blog). Astro content collection for posts
  (frontmatter: title, description, pubDate, updatedDate?, lang, slug, tags, cover?, draft?).
  Blog index per lang (list of posts), post route per lang with Article/BlogPosting schema,
  author = Person (Sara Amaya Caldas), BreadcrumbList, reciprocal hreflang where a translation exists.
  RSS feed per lang (/rss.xml, /en/rss.xml). Posts appear in sitemap. One example post in ES + EN
  grounded in a real informational query from the search map (e.g. choosing the best photo, or memorial portraits).
- S3 — About page: ES /sobre-mi, EN /about. Citable bio of the artist (Sara Amaya Caldas,
  Colombian artist, @sac_artx) for E-E-A-T. Use ONLY known facts; mark unknown facts with a
  clear TODO placeholder — never invent achievements, years, or credentials. Person schema linked
  to the LocalBusiness founder (@id), sameAs socials, BreadcrumbList. Link from nav/footer.
- S4 — All new pages keep artifacts in English (code), page content in page language; prices/
  business facts sourced from prices.ts/business.ts (no hardcoded numbers or dates).

## Tasks

- T1 (S1) — DONE. 3 grouped product pages × 2 langs (6 routes) via product-pages.ts + ProductPage.astro; gallery reuses catalog images; AggregateOffer (COP, from prices.ts) + BreadcrumbList; footer Productos/Products group. Navbar link skipped (no products index page). commit: this slice.
- T2 (S2) — DONE in the working tree, not committed. Content collection, ES/EN index, post route, RSS, sitemap custom pages, nav/footer. One example post (best photo) in ES + EN. Author Person @id is the founder.
- T3 (S3) — DONE in the working tree, not committed. ES /sobre-mi and EN /about via about.ts + AboutPage.astro. ProfilePage + Person @id https://sacartx.art/#founder (same as LocalBusiness.founder) + BreadcrumbList. Nav and footer links. Public copy uses only published facts; aboutGaps lists the unpublished ones (city, start year, training/exhibitions/awards).

## Log

- L1 — User request (verbatim): "entiendo que para seo tambien combiene tener pagian explicaita para cada prodcuto, un blog para entradas y post. y tambien agregaremos un sobre mi"
- L2 — Decisions: product pages grouped into 3 (agent-chosen grouping); blog bilingual ES+EN with infra + 1 example post; about page = skeleton from known facts with marked gaps, no invented E-E-A-T claims.
- L3 — About page does not print TODO text. Gaps stay in src/data/about.ts (`aboutGaps`) so the public page never invents a city, a start year, or credentials.
