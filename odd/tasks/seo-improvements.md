# Feature: SEO improvements — sacartx.art

Bilingual (ES/EN) Astro SSR portfolio for a Colombian pet-portrait artist. The site
already has rich schema, reciprocal hreflang, OG, robots with AI-bot control, llms.txt.
This feature closes gaps and strengthens GEO/citability. Read-only audit done; user
approved full scope (A1–A11). Artist decides A1 = convert .md intent pages to real HTML routes.

## Specs

- S1 (A1) — The 12 intent pages (`retratos-perros`, `dog-portraits`, `retratos-gatos`,
  `cat-portraits`, `retratos-de-mascotas`, `pet-portraits`, `retratos-mascotas-colombia`,
  `pet-portraits-colombia`, `como-funciona`, `how-it-works`, plus price/FAQ md) must be
  reachable by HTML `<a>` links (today 0 internal anchors; only sitemap + llms.txt). Decision:
  render them as real HTML Astro routes with own `<title>`, canonical, hreflang, linked from nav/footer.
- S2 (A2) — Home ES (`/`) and EN (`/en/`) currently use the generic default `meta.title`/
  `meta.description`. Give each a page-specific optimized title (≤60 chars) and description
  (≤155 chars) with keyword + locality, per Google title/snippet guidance. 3 variants each for review.
- S3 (A3) — `robots` meta is hardcoded `index, follow` in BaseLayout; 404 is indexable.
  Make `robots` overridable per page and set `/404` to `noindex`.
- S4 (A4) — Add `Review`/`AggregateRating` (from real testimonials) and `Product` schema for
  catalog pieces; add `BreadcrumbList` on catalog/prices. Keep existing `FAQPage` as-is
  (Google retired FAQ rich results May 2026) — kept for AI citation only, not expanded.
- S5 (A5) — Rewrite intent `.md` pages (and key home sections) in extraction/citable format:
  direct answer first, headings as real queries, definitive phrasing, high entity density.
- S6 (A6) — Centralize hardcoded prices/date (llms.txt "vigentes a octubre de 2026") and
  business data (phone, schema) into `src/data/` so llms.txt is generated and does not drift.
- S7 (A7) — Testimonials images share one fixed alt string; give descriptive per-piece alt.
- S8 (A8) — Hero `<Image>` lacks explicit width/height (CLS inferred-only); set dimensions.
- S9 (A9) — Add `BreadcrumbList` schema to catalog/prices (UI already shows crumbs).
- S10 (A10) — Add `twitter:site`/`creator`; add `lang`/`scope`/maskable icon to webmanifest.
- S11 (A11) — Generate a search map (real Google autocomplete queries grouped by intent)
  to ground S2/S5 with data, not intuition.

## Tasks

- T1 (S11) — DONE. Search map: 429 real Google autocomplete queries, 0 failures. Top intents: price, from-photo, custom, memorial, medium, reviews, Colombia. Artifact: odd/seo-improvements/mapa/mapa.json.
- T2 (S2) — DONE. Home meta ES/EN overridable via home.metaTitle/home.metaDescription (ui.ts), wired in index.astro + en/index.astro. commit: this slice.
- T3 (S3) — DONE. BaseLayout `robots` prop (default index,follow); 404 set noindex,follow. commit: this slice.
- T4 (S1,S5) — DONE. 5 topics × 2 langs as real prerendered HTML routes (IntentPage.astro) from src/data/intent-pages.ts; prose preserved verbatim; new meta from mapa.json; footer "Guías/Guides" group + per-page related/prices/catalog links. commit: this slice.
- T5 (S4,S9) — Review/AggregateRating + Product + BreadcrumbList schema. route: inline. commit: feat(seo)
- T6 (S6) — DONE. business.ts + price-text.ts single source; /info/<slug>.md and /llms.txt now generated endpoints; static public/info 10 topic .md + public/llms.txt deleted; no month/year date remains. commit: this slice. Note: astro.config customPages kept (sitemap only auto-includes page routes, not endpoints).
- T5note — BreadcrumbList already added on intent pages via IntentPage.astro; remaining T5 = catalog/prices breadcrumb + Review/Product.
- T7 (S7,S8,S10) — Polish: testimonial alts, hero dimensions, twitter/manifest. route: inline. commit: fix(seo)

## Log

- L1 — User original request (verbatim): "tenmeos unas skills de SEO C:\Users\csar-\Downloads\seo-schema.skill C:\Users\csar-\Downloads\seo-super-agent.skill C:\Users\csar-\Downloads\sitemap.skill C:\Users\csar-\Downloads\contenido-citable.skill \"C:\Users\csar-\Downloads\lista de user-agents.pdf\" C:\Users\csar-\Downloads\mapa-de-busquedas.skill C:\Users\csar-\Downloads\meta-titulos-descripciones.skill C:\Users\csar-\Downloads\seo-interlinking.skill vamos a ejecutar para mejorar el seo de la aplicacion harmemos un plan para esto y ver toodas las modificaciones sugeridas"
- L2 — User selected full scope A1–A11; for A1 chose "decidilo vos y proponé lo mejor" → convert intent .md pages to real HTML routes.
- L4 — Writer launch blocked twice (missing surfaces heading, then no-backstop); after context backstop fired at ~155k tokens, T4+T6 delegated to gentle-ai-worker and verified (build, sitemap, .md fidelity). Parent fixed one ES price-format regression ($50.000 lost its $).
- L3 — Keyword evidence (Google autocomplete, Nov 2026): EN "pet portrait price list" x10, "pet portrait prices" x7, "from photo", "custom ... for nursery/bathroom", "on canvas/bag/purse/ornament", "with collar", "memorial", "reviews". ES: "retrato mascota fallecida", "personalizado", "acuarela/oleo/acrilico", "cuanto cuesta ... en colombia".
