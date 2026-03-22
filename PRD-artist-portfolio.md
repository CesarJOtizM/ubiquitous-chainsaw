# PRD — Artist Portfolio Website

## Visión General

Sitio web de dos páginas para un artista pintor. El objetivo es presentar al artista, sus servicios y su obra de manera elegante, con una experiencia que evoque caminar por una galería de arte real.

---

## Alcance

| Página | Ruta | Propósito |
|--------|------|-----------|
| Landing | `/` | Presentación del artista y sus servicios |
| Galería | `/galeria` | Exhibición completa de obras |

---

## Stack Tecnológico

| Capa | Tecnología | Justificación |
|------|------------|---------------|
| Framework | **Next.js 15** (App Router) | Enrutamiento por páginas, optimización de imágenes nativa con `next/image` |
| Estilos | **Tailwind CSS v4** | Utilidades rápidas, configuración de design tokens centralizada |
| Animaciones | **GSAP + ScrollTrigger** | Animaciones de scroll, stagger, parallax |
| Smooth scroll | **Lenis** | Scroll fluido, integrado con GSAP |
| Galería lightbox | **PhotoSwipe 5** | Zoom nativo, touch, teclado, accesible |
| Tipografía | **Google Fonts** (Cormorant Garamond + Inter) | Elegancia serif + legibilidad sans-serif |
| Íconos | **Lucide React** | Librería minimalista, tree-shakeable |
| Deploy | **Vercel** | CI/CD automático desde GitHub |

---

## Design Tokens

### Colores

```js
colors: {
  background:   '#0A0A0A',   // negro profundo — base de toda la UI
  surface:      '#111111',   // superficies de cards y secciones alternas
  border:       '#1E1E1E',   // bordes y separadores
  textPrimary:  '#F5F0E8',   // blanco crema — texto principal
  textMuted:    '#7A7A7A',   // texto secundario, labels, metadata
  accent:       '#C9A96E',   // oro envejecido — CTA, hover, detalles
  accentHover:  '#D4B483',   // oro claro — estado hover del acento
  overlay:      'rgba(0,0,0,0.6)', // overlay del lightbox y hover cards
}
```

### Tipografía

```js
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],  // headings
  body:    ['Inter', 'system-ui', 'sans-serif'],         // UI y cuerpo
}

fontSize: {
  'display-xl': 'clamp(64px, 10vw, 140px)',  // nombre artista hero
  'display-lg': 'clamp(40px, 6vw, 80px)',    // títulos de sección
  'display-md': 'clamp(28px, 4vw, 48px)',    // subtítulos
  'body-lg':    '18px',
  'body':       '16px',
  'caption':    '13px',                       // metadata de obras
}
```

### Espaciado y Layout

```
Max-width contenedor:    1320px
Padding horizontal:      clamp(20px, 5vw, 100px)
Gap galería desktop:     20px
Gap galería tablet:      14px
Gap galería móvil:       10px
Border radius cards:     2px  (intencional — casi sin redondeo, estética sobria)
Duración transiciones:   200ms – 600ms
Easing estándar:         cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

---

## Página 1 — Landing `/`

### Estructura de Secciones

```
/
├── <Header>          Navegación global
├── <HeroSection>     Pantalla completa con obra destacada
├── <AboutSection>    Quién es el artista
├── <ServicesSection> Qué ofrece
├── <FeaturedWorks>   Preview de 3–4 obras (link a galería)
├── <ProcessSection>  Cómo trabaja
├── <ContactSection>  Formulario + datos de contacto
└── <Footer>          Links y redes
```

---

### Componente: `<Header>`

**Comportamiento:**
- Posición `fixed`, fondo `transparent` → al hacer scroll > 60px cambia a `background: rgba(10,10,10,0.9)` con `backdrop-filter: blur(12px)`, transición 300ms
- En móvil: hamburger icon → menú full-screen con overlay oscuro

**Contenido:**
```
[Logo / Nombre artista]               [Galería]  [Sobre mí]  [Servicios]  [Contacto]
```

**Animación de entrada:**
```js
gsap.from('.nav-item', {
  y: -20, opacity: 0,
  stagger: 0.08, duration: 0.7,
  ease: 'power2.out', delay: 1.8
})
```

---

### Componente: `<HeroSection>`

**Layout:** Fullscreen (`100svh`), imagen de obra como fondo con parallax sutil.

```
┌──────────────────────────────────────────────────┐
│  [imagen obra — fullscreen, parallax lento]      │
│  [overlay gradiente: transparent → #0A0A0A 90%]  │
│                                                  │
│                                                  │
│   NOMBRE DEL ARTISTA                             │  ← Cormorant, clamp 64–140px, weight 300
│   Pintura al óleo · Arte contemporáneo           │  ← Inter 14px, letter-spacing 0.2em, caps
│                                                  │
│   [Ver galería →]   [Conocer más ↓]              │  ← Botones ghost con borde acento
│                                                  │
│                              ↓ scroll            │  ← Indicador animado
└──────────────────────────────────────────────────┘
```

**Animación de entrada (secuencia GSAP):**
```js
const tl = gsap.timeline({ delay: 0.3 })
tl.from('.hero-image',   { scale: 1.06, duration: 2.0, ease: 'power2.out' })
  .from('.hero-name',    { y: 60, opacity: 0, duration: 1.2, ease: 'power4.out' }, '-=1.4')
  .from('.hero-sub',     { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.8')
  .from('.hero-ctas',    { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
  .from('.scroll-indicator', { opacity: 0, duration: 0.5 }, '-=0.2')
```

**Parallax del fondo:**
```js
gsap.to('.hero-image', {
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
  y: '18%', scale: 1.08, ease: 'none'
})
```

---

### Componente: `<AboutSection>`

**Layout:** Dos columnas 50/50 en desktop, stack en móvil.

```
┌─────────────────────┬──────────────────────────┐
│                     │  ─── Sobre mí             │
│  [Foto artista      │                           │
│   en estudio]       │  Párrafo 1 — quién soy   │
│                     │                           │
│  [detalle pequeño   │  Párrafo 2 — mi visión   │
│   de pincelada]     │                           │
│                     │  [Descargar CV →]         │
└─────────────────────┴──────────────────────────┘
```

**Animación ScrollTrigger:**
```js
gsap.from('.about-image', {
  scrollTrigger: { trigger: '.about', start: 'top 75%' },
  x: -50, opacity: 0, duration: 1.0, ease: 'power3.out'
})
gsap.from('.about-text p', {
  scrollTrigger: { trigger: '.about', start: 'top 70%' },
  y: 30, opacity: 0, stagger: 0.18, duration: 0.9, ease: 'power2.out'
})
```

---

### Componente: `<ServicesSection>`

**Layout:** Label de sección + grid de cards de servicio.

**Cards de servicio (ejemplos placeholder):**

| # | Servicio | Descripción |
|---|----------|-------------|
| 01 | Obras originales | Pinturas únicas al óleo y acrílico sobre tela o lino |
| 02 | Encargos / Commissions | Obra personalizada según especificaciones del cliente |
| 03 | Impresiones de edición limitada | Giclée fine-art prints numeradas y firmadas |
| 04 | Colaboraciones | Proyectos con espacios, marcas y coleccionistas |

**Diseño de card:**
```
┌──────────────────────────────────┐
│  01                              │  ← número en acento dorado, Cormorant 48px
│                                  │
│  Obras originales                │  ← Inter 18px, medium
│                                  │
│  Pinturas únicas al óleo...      │  ← Inter 14px, muted
│                                  │
│  ─────────────────────           │  ← línea inferior acento, crece en hover
└──────────────────────────────────┘
```

**Hover:** Borde inferior color acento aparece con `width: 0 → 100%`, 300ms.

**Animación ScrollTrigger:**
```js
gsap.from('.service-card', {
  scrollTrigger: { trigger: '.services', start: 'top 70%' },
  y: 50, opacity: 0,
  stagger: 0.12, duration: 0.8, ease: 'power3.out'
})
```

---

### Componente: `<FeaturedWorks>`

**Propósito:** Teaser de la galería — mostrar 3–4 obras seleccionadas.

**Layout:**
```
─── Obras seleccionadas                    [Ver galería completa →]

┌──────────┐  ┌───────────────────┐  ┌──────────┐
│          │  │                   │  │          │
│  obra 1  │  │      obra 2       │  │  obra 3  │
│ tall     │  │  wide / featured  │  │          │
│          │  │                   │  └──────────┘
└──────────┘  │                   │  ┌──────────┐
              └───────────────────┘  │  obra 4  │
                                     └──────────┘
```

**Hover de card:**
- Imagen escala `1 → 1.04`, 500ms ease
- Overlay oscuro `opacity: 0 → 1`, 300ms
- Título + técnica + año aparecen en overlay desde abajo

**Animación ScrollTrigger:**
```js
gsap.from('.featured-card', {
  scrollTrigger: { trigger: '.featured-works', start: 'top 75%' },
  y: 60, opacity: 0,
  stagger: { amount: 0.6, from: 'start' },
  duration: 1.0, ease: 'power3.out'
})
```

---

### Componente: `<ProcessSection>`

**Layout:** Timeline horizontal en desktop, vertical en móvil.

**Pasos del proceso:**
```
[Conversación inicial] → [Boceto y propuesta] → [Ejecución] → [Entrega]
         01                      02                  03            04
```

Cada paso: número en acento dorado, título, descripción breve de 2 líneas.

---

### Componente: `<ContactSection>`

**Layout:** Dos columnas — info izquierda, formulario derecha.

**Columna izquierda:**
```
─── Hablemos

Para encargos, colecciones
y colaboraciones.

✉  hola@artista.com
📍 Ciudad, País
𝕀  @artista.instagram
```

**Columna derecha — Formulario:**
```
Nombre ___________________________

Email ____________________________

Asunto [Obra original ▾]          ← select con opciones de servicio

Mensaje
_________________________________
_________________________________
_________________________________

[ Enviar mensaje → ]              ← botón con acento dorado
```

**Estilos del formulario:**
- Inputs: sin `border-radius`, solo `border-bottom: 1px solid #1E1E1E`
- Focus: `border-bottom-color: #C9A96E`
- Sin labels flotantes — labels estáticos en `caption` size, `letter-spacing: 0.1em`, uppercase

---

### Componente: `<Footer>`

```
[Nombre artista]                © 2024 · Todos los derechos reservados

[Instagram]  [Email]  [Galería]  [Privacidad]
```

Tipografía: Inter 12px, textMuted. Mínimo.

---

## Página 2 — Galería `/galeria`

### Estructura

```
/galeria
├── <Header>           (mismo componente global)
├── <GalleryHero>      Título de sección + statement breve
├── <GalleryFilters>   Filtros por categoría
├── <GalleryGrid>      Grid masonry de obras
└── <Footer>           (mismo componente global)
```

---

### Componente: `<GalleryHero>`

**Layout:** Altura `40vh`, centrado.

```
┌──────────────────────────────────────────┐
│                                          │
│           GALERÍA                        │  ← Cormorant 80px, weight 300
│                                          │
│   Una colección de obras originales      │  ← Inter 16px, muted, max-width 480px
│   realizadas entre 2018 y 2024           │
│                                          │
└──────────────────────────────────────────┘
```

Línea decorativa horizontal (`border-bottom: 1px solid #1E1E1E`) separa del grid.

---

### Componente: `<GalleryFilters>`

**Filtros placeholder:**
```
[Todas]  [Óleos]  [Acrílico]  [Acuarela]  [Mixta]  [Disponibles]
```

**Comportamiento:**
- Botón activo: `border-bottom: 1px solid #F5F0E8`
- Inactivo: sin underline, textMuted
- Al cambiar filtro → obras que no corresponden: `opacity 0, scale 0.95, 250ms` + se colapsan con CSS Grid / GSAP Flip
- Las obras visibles re-aparecen con stagger: `y: 20 → 0, opacity: 0 → 1, 350ms`

---

### Componente: `<GalleryGrid>`

**Tipo de grid:** Masonry con CSS columns (sin JS extra).

```css
.gallery-grid {
  columns: 3;          /* desktop */
  column-gap: 20px;
}
/* tablet: columns: 2 */
/* mobile: columns: 1 */

.gallery-item {
  break-inside: avoid;
  margin-bottom: 20px;
}
```

**Cada ítem de galería:**

```
Estado default:
┌─────────────────────┐
│                     │
│   [imagen obra]     │
│   aspect-ratio      │
│   preservado        │
│                     │
└─────────────────────┘

Estado hover (300ms):
┌─────────────────────┐
│ ░░░░░░░░░░░░░░░░░░ │ ← overlay rgba(0,0,0,0.55)
│                     │
│  Título obra        │ ← Inter 15px, textPrimary
│  Óleo · 2023        │ ← Inter 12px, textMuted
│  80 × 100 cm        │
│                     │
│  [🔍 Ver detalle]   │ ← ícono + label
└─────────────────────┘
```

**Animación de entrada inicial:**
```js
gsap.from('.gallery-item', {
  scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%' },
  y: 50, opacity: 0,
  stagger: { amount: 1.2, from: 'start' },
  duration: 0.9, ease: 'power3.out'
})
```

---

### Componente: `<Lightbox>` (PhotoSwipe 5)

**Trigger:** Click en cualquier ítem del grid.

**Layout del lightbox:**

```
┌────────────────────────────────────────────────────────────┐
│ ✕                                            1 / 12        │
│                                                            │
│   ┌──────────────────────────┐   ┌─────────────────────┐  │
│   │                          │   │                     │  │
│   │                          │   │  Título de la obra  │  │
│   │     IMAGEN OBRA          │   │                     │  │
│   │     (zoom con scroll     │   │  2023               │  │
│   │      o pinch)            │   │  Óleo sobre lino    │  │
│   │                          │   │  80 × 100 cm        │  │
│   │                          │   │                     │  │
│   └──────────────────────────┘   │  ─────────────────  │  │
│                                   │                     │  │
│   ←                          →   │  Disponible         │  │
│                                   │                     │  │
│                                   │  [Consultar obra →] │  │
│                                   └─────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Comportamiento:**
- Fondo: `rgba(10,10,10,0.96)`
- Apertura: zoom desde thumbnail (`zoom: origin`) + fade, 400ms
- Cierre: click en ✕, Escape, o click fuera de la imagen
- Navegación: flechas ← →, swipe en touch, teclas de teclado
- Zoom: doble click o scroll dentro de la imagen (hasta 4×)
- En móvil: layout stack (imagen arriba, info abajo)

---

## Animaciones Globales

### Preloader

```
Pantalla completa #0A0A0A
├── Nombre del artista — Cormorant 40px, aparece con clip-path reveal
├── Barra de progreso fina (línea horizontal, acento dorado)
└── Al completar → fade-out 600ms, inicia animación de hero
```

```js
// Preloader timeline
const preloader = gsap.timeline()
preloader
  .from('.preloader-name', {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.2, ease: 'power4.inOut'
  })
  .to('.preloader-bar', {
    scaleX: 1, transformOrigin: 'left',
    duration: 0.8, ease: 'power2.inOut'
  }, '-=0.4')
  .to('.preloader', {
    opacity: 0, duration: 0.5, delay: 0.3,
    onComplete: () => initPage()
  })
```

---

### Cursor Personalizado

Círculo de 10px que sigue al mouse con lag suave. En hover sobre obras → crece a 40px + texto "VER".

```js
gsap.to('.cursor', { x, y, duration: 0.35, ease: 'power2.out' })

// En obras
card.addEventListener('mouseenter', () =>
  gsap.to('.cursor', { scale: 4, duration: 0.4 })
)
```

Solo visible en desktop (`pointer: fine`).

---

### Transición entre páginas

Cortina negra que baja (`scaleY: 0 → 1`) al salir de página y sube (`scaleY: 1 → 0`) al entrar a la nueva. Duración total: 600ms por lado.

---

### Scroll suave global (Lenis)

```js
const lenis = new Lenis({ duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 4) })
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
```

---

## Estructura de Archivos (Next.js App Router)

```
/
├── app/
│   ├── layout.tsx          ← HTML global, fuentes, Preloader, Cursor, Lenis
│   ├── page.tsx            ← Landing /
│   └── galeria/
│       └── page.tsx        ← Galería /galeria
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedWorks.tsx
│   │   ├── ProcessSection.tsx
│   │   └── ContactSection.tsx
│   ├── gallery/
│   │   ├── GalleryHero.tsx
│   │   ├── GalleryFilters.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── GalleryItem.tsx
│   │   └── Lightbox.tsx
│   └── ui/
│       ├── Preloader.tsx
│       ├── CustomCursor.tsx
│       ├── PageTransition.tsx
│       └── SmoothScroll.tsx
│
├── lib/
│   ├── works.ts            ← datos de obras (array tipado, luego reemplazable por CMS)
│   └── gsap.ts             ← inicialización global de GSAP + plugins
│
├── public/
│   └── works/              ← imágenes de obras (placeholder inicialmente)
│
└── tailwind.config.ts      ← design tokens: colores, tipografía, spacing
```

---

## Datos de Obras (Placeholder)

```ts
// lib/works.ts
export interface Artwork {
  id: string
  title: string
  year: number
  medium: string         // 'Óleo' | 'Acrílico' | 'Acuarela' | 'Mixta'
  dimensions: string     // '80 × 100 cm'
  category: string[]     // ['Óleos', 'Disponibles']
  available: boolean
  price?: string         // opcional, puede estar oculto
  src: string            // ruta de imagen
  srcHigh: string        // imagen alta resolución para lightbox
  width: number          // px originales — necesario para PhotoSwipe
  height: number
  featured: boolean      // aparece en landing FeaturedWorks
}
```

---

## Responsividad

| Breakpoint | Grid galería | Layout about | Navegación |
|------------|-------------|--------------|------------|
| `< 640px` (móvil) | 1 columna | Stack | Hamburger full-screen |
| `640–1024px` (tablet) | 2 columnas | Stack | Hamburger |
| `> 1024px` (desktop) | 3 columnas | 2 columnas | Horizontal |

---

## Consideraciones de Rendimiento

- Todas las imágenes con `next/image` — WebP automático, lazy loading, blur placeholder
- GSAP cargado solo en cliente (`'use client'` + `useEffect`)
- PhotoSwipe importado dinámicamente (`dynamic import`)
- Fonts con `next/font/google` — sin FOUT, optimización automática
- Preloader oculta el contenido mientras cargan imágenes críticas

---

## Contenido Placeholder

Hasta tener contenido real del artista, el sitio usará:

- **Nombre:** Ana Ruiz
- **Tagline:** Pintura al óleo · Arte contemporáneo
- **Localización:** Madrid, España
- **Email:** hola@anaruiz.art
- **Instagram:** @anaruiz.art
- **Obras:** 12 imágenes placeholder (Unsplash — paintings/fine art)
- **Servicios:** Los 4 detallados en la sección de servicios

Todo el contenido está centralizado en `lib/works.ts` y constantes en `lib/content.ts` para reemplazo fácil.

---

## Criterios de Aceptación

- [ ] Preloader aparece y desaparece correctamente
- [ ] Hero con parallax funciona en scroll
- [ ] Todas las secciones de landing tienen animaciones de entrada con ScrollTrigger
- [ ] Navegación sticky con cambio de fondo al scrollear
- [ ] Filtros de galería cambian obras con animación suave
- [ ] Grid masonry preserva proporciones de las obras
- [ ] Lightbox abre, hace zoom, navega y cierra correctamente
- [ ] Cursor personalizado activo en desktop
- [ ] Transición de página al navegar entre `/` y `/galeria`
- [ ] Responsive funcional en móvil, tablet y desktop
- [ ] Smooth scroll activo globalmente

---

*PRD creado — Marzo 2026*
