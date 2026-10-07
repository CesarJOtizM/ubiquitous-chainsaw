// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sacartx.art',
  devToolbar: { enabled: false },
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      customPages: [
        'https://sacartx.art/info/preguntas.md',
        'https://sacartx.art/llms.txt',
        'https://sacartx.art/info/retratos-de-mascotas.md',
        'https://sacartx.art/info/retratos-perros.md',
        'https://sacartx.art/info/retratos-gatos.md',
        'https://sacartx.art/info/como-funciona.md',
        'https://sacartx.art/info/retratos-mascotas-colombia.md',
        'https://sacartx.art/info/pet-portraits.md',
        'https://sacartx.art/info/dog-portraits.md',
        'https://sacartx.art/info/cat-portraits.md',
        'https://sacartx.art/info/how-it-works.md',
        'https://sacartx.art/info/pet-portraits-colombia.md',
      ],
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
