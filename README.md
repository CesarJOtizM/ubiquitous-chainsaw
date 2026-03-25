# Sac_Artx — Portfolio Website

Portfolio web one-page para **SAC_ART** (`@sac_artx`), artista colombiana especializada en retratos de mascotas en acrílico, paisajes y fundas de celular por encargo.

## Stack

- **[Astro 6](https://astro.build/)** — framework web con output SSR
- **[Tailwind CSS 4](https://tailwindcss.com/)** — via `@tailwindcss/vite`, sin config file
- **[Vercel](https://vercel.com/)** — adapter para deploy y serverless functions
- **[Resend](https://resend.com/)** — envío de emails desde el formulario de contacto
- **Bun** — package manager y runtime

## Características

- Bilingüe **ES / EN** con i18n nativo de Astro (español por defecto en `/`, inglés en `/en/`)
- Secciones: Hero, Servicios, Proceso, Galería, Testimonios, FAQ, Contacto
- Formulario de contacto con API Route (`/api/contact`) + Resend
- WhatsApp FAB flotante
- SSR via Vercel adapter

## Estructura

```
src/
├── components/       # Secciones de la página (Hero, Services, Gallery, etc.)
├── i18n/
│   ├── ui.ts         # Traducciones ES/EN
│   └── utils.ts      # Helpers de i18n
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro       # Ruta ES (default)
│   ├── en/index.astro    # Ruta EN
│   └── api/contact.ts    # API endpoint — formulario de contacto
└── styles/
    └── global.css        # Tokens Tailwind 4 en @theme {}
```

## Comandos

| Comando          | Acción                                      |
| :--------------- | :------------------------------------------ |
| `bun install`    | Instala dependencias                        |
| `bun run dev`    | Dev server en `localhost:4321`              |
| `bun run build`  | Build de producción en `./dist/`            |
| `bun run preview`| Preview del build local                     |

## Variables de entorno

Crear un `.env` en la raíz con:

```env
RESEND_API_KEY=re_...
```

## Deploy

El proyecto usa el adapter de Vercel (`@astrojs/vercel`) con output `server`. Se despliega automáticamente desde `main` via Vercel.
