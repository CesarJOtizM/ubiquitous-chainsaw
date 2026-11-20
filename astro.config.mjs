// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { sitemapLinks } from './sitemap-alternates.ts';

const site = 'https://sacartx.art';
const alternates = sitemapLinks(site);

// https://astro.build/config
export default defineConfig({
  site,
  build: {
    // Component CSS over 4 KB was a second request that blocked the first paint.
    inlineStylesheets: 'always',
  },
  // Self-hosted with metric-matched fallbacks: no Google connections, no shift on swap.
  fonts: [
    {
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      provider: fontProviders.google(),
      weights: ['300 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      provider: fontProviders.google(),
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  redirects: {
    '/retratos-mascotas-colombia': '/retratos-de-mascotas/',
    '/en/pet-portraits-colombia': '/en/pet-portraits/',
    '/info/retratos-mascotas-colombia.md': '/info/retratos-de-mascotas.md',
    '/info/pet-portraits-colombia.md': '/info/pet-portraits.md',
  },
  devToolbar: { enabled: false },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    sitemap({
      filter(page) {
        // Product files for ChatGPT and Merchant Center, not pages to rank.
        return !page.includes('/feeds/');
      },
      customPages: [
        // FAQ text has no HTML twin. llms.txt and the RSS feeds stay out:
        // they are not pages to rank. Guide .md files duplicate an HTML route
        // and stay out too; they are noindex markdown alternates.
        `${site}/info/preguntas.md`,
      ],
      serialize(item) {
        const links = alternates.get(item.url);
        return links ? { ...item, links } : item;
      },
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO',
          en: 'en',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        // Local /img/* → ImageKit (mirrors vercel.json rewrite)
        '/img': {
          target: 'https://ik.imagekit.io/ebovtw5ud/sacartx/images',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/img/, ''),
        },
      },
    },
  },
});
