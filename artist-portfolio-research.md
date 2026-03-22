# Investigación: Diseño de Websites para Artistas Pintores

> Referencia visual y guía de diseño basada en las tendencias más actuales (2024–2026) para portfolios de artistas plásticos y pintores.

---

## Tabla de Contenidos

1. [Filosofía de Diseño](#filosofia-de-diseño)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Layout y Estructura](#layout-y-estructura)
5. [Secciones Principales](#secciones-principales)
6. [Sección de Galería](#sección-de-galería)
7. [Animaciones e Interacciones](#animaciones-e-interacciones)
8. [Stack Tecnológico](#stack-tecnológico)
9. [Referencias Visuales](#referencias-visuales)

---

## Filosofía de Diseño

El principio rector de un portfolio de artista pintor es simple: **el sitio debe desaparecer, el arte debe hablar**.

Los mejores portfolios de pintores operan bajo esta lógica:

- El diseño **no compite** con la obra — sirve de marco invisible.
- Menos elementos = más atención sobre cada pieza.
- El espacio negativo (whitespace) es tan importante como el contenido.
- La experiencia debe evocar caminar por una galería de arte real.

### Dos Grandes Escuelas de Estilo

| Estilo | Descripción | Cuándo usarlo |
|--------|-------------|----------------|
| **Minimalismo Puro** | Fondo blanco/negro, tipografía discreta, sin adornos | Obras de mucho detalle, hiperrealismo, abstracto |
| **Expresivo / Editorial** | Tipografía audaz, layouts asimétricos, color intencional | Arte conceptual, ilustración, expresionismo |

---

## Paleta de Colores

### Opción 1 — Dark & Sophisticated (Recomendado para pintores)

```
Background principal:   #0A0A0A  (negro profundo)
Background secundario:  #111111  (carbón)
Superficie cards:       #1A1A1A  (gris oscuro)
Texto principal:        #F5F0E8  (blanco crema)
Texto secundario:       #8A8A8A  (gris medio)
Acento primario:        #C9A96E  (oro envejecido)
Acento hover:           #D4B483  (oro claro)
Bordes:                 #2A2A2A  (gris muy oscuro)
```

**Por qué funciona:** El fondo oscuro actúa como un lienzo neutro que hace que los colores de las pinturas destaquen con intensidad máxima, similar a la iluminación de museo.

---

### Opción 2 — Light & Airy

```
Background principal:   #FAFAF8  (blanco hueso)
Background secundario:  #F2EFE9  (lino)
Texto principal:        #1A1A1A  (casi negro)
Texto secundario:       #6B6B6B  (gris cálido)
Acento primario:        #8B4A2E  (terracota)
Acento hover:           #A35A3A  (terracota claro)
Bordes:                 #E0DBD3  (beige grisáceo)
```

---

### Opción 3 — Neutral Editorial

```
Background:             #F8F6F1  (marfil)
Texto:                  #2C2C2C
Acento:                 #4A4A4A  (grafito)
Detalle:                #B8A99A  (gris cálido)
```

> **Regla:** Usar máximo 2–3 colores neutros + 1 acento. El color real viene de las obras.

---

## Tipografía

### Sistema Tipográfico Recomendado

#### Headings — Serif Elegante
```
Font: "Cormorant Garamond" o "Playfair Display"
Uso: Nombre del artista, títulos de sección
Weight: 300 (Light) o 400 (Regular)
Letter-spacing: 0.05em a 0.15em
```

*Alternativas:* `EB Garamond`, `Libre Baskerville`, `Lora`

#### Body / UI — Sans-Serif Limpio
```
Font: "Inter" o "DM Sans"
Uso: Navegación, descripciones, formularios
Weight: 300–400
Letter-spacing: 0.02em
Line-height: 1.7
```

*Alternativas:* `Outfit`, `Plus Jakarta Sans`, `Satoshi`

#### Acento Caligráfico (Opcional)
```
Font: "Italiana" o "Bodoni Moda"
Uso: Citas del artista, taglines
Efecto: Contraste entre serif delicado y sans-serif moderno
```

### Escala Tipográfica

| Elemento | Tamaño | Peso | Fuente |
|----------|--------|------|--------|
| Nombre artista (hero) | 72–120px | 300 | Cormorant |
| Títulos de sección | 48–64px | 300 | Cormorant |
| Subtítulos | 24–32px | 400 | Inter |
| Cuerpo de texto | 16–18px | 300 | Inter |
| Labels / metadata | 12–13px | 400 | Inter, all-caps |
| Precios | 14px | 500 | Inter |

---

## Layout y Estructura

### Principios de Grid

```
Max-width contenedor:   1440px
Padding horizontal:     clamp(24px, 5vw, 120px)
Grid galería desktop:   3–4 columnas
Grid galería tablet:    2 columnas
Grid galería móvil:     1 columna
Gap entre obras:        16px – 32px
```

### Tipos de Layout para Galería

#### 1. Grid Masonry (Más popular)
```
┌────────┐ ┌────────────┐
│ obra 1 │ │            │
│ tall   │ │  obra 2    │
│        │ │  wide      │
├────────┤ └────────────┘
│ obra 3 │ ┌──────┐ ┌──┐
│        │ │obra4 │ │o5│
└────────┘ └──────┘ └──┘
```
Ideal para pinturas de distintos formatos y proporciones.

#### 2. Grid Uniforme (Galería de museo)
```
┌──────┐ ┌──────┐ ┌──────┐
│      │ │      │ │      │
│  o1  │ │  o2  │ │  o3  │
│      │ │      │ │      │
└──────┘ └──────┘ └──────┘
┌──────┐ ┌──────┐ ┌──────┐
│  o4  │ │  o5  │ │  o6  │
└──────┘ └──────┘ └──────┘
```
Orden y claridad máximos.

#### 3. Scroll Horizontal
```
← ──[obra1]────[obra2]────[obra3]────[obra4]── →
```
Elegante y cinematográfico, ideal para series o colecciones.

#### 4. Featured + Grid (Híbrido)
```
┌─────────────────┐ ┌──────┐
│                 │ │  o2  │
│   OBRA HERO     │ ├──────┤
│   (featured)    │ │  o3  │
│                 │ └──────┘
└─────────────────┘
     [grid 3col abajo]
```

---

## Secciones Principales

### 1. Hero / Landing

```
Fullscreen (100vh)
├── Nombre del artista — tipografía grande, centrada o izquierda
├── Tagline o disciplina — "Oil Paintings · Abstract Expressionism"
├── Obra de fondo — imagen o video loop (parallax)
├── CTA suave — "Ver Galería ↓" o scroll indicator
└── Overlay sutil — gradiente para legibilidad del texto
```

**Variantes:**
- **Split Screen:** Mitad texto / mitad pintura icónica
- **Typewriter Hero:** Nombre aparece letra por letra
- **Obra como fondo total:** Sin texto superpuesto, solo scroll down indicator

---

### 2. Sobre el Artista (About)

```
Estructura recomendada:
├── Foto del artista (en estudio, trabajando)
├── Texto en primera persona — voz auténtica, no CV corporativo
├── Declaración artística (Artist Statement)
├── Técnicas y materiales usados
├── Exposiciones / reconocimientos (lista limpia)
└── Link a CV completo (PDF descargable)
```

**Diseño:** Layout de dos columnas con imagen y texto. En móvil, imagen arriba, texto abajo.

---

### 3. Galería *(Ver sección detallada abajo)*

---

### 4. Proceso / Studio

```
Elementos visuales:
├── Fotos del estudio de trabajo
├── Imágenes del proceso (bocetos → obra terminada)
├── Video time-lapse de creación
└── Materiales y técnicas explicadas
```

Esta sección humaniza al artista y genera conexión emocional con el coleccionista.

---

### 5. Tienda / Obras Disponibles

```
Cada obra incluye:
├── Imagen de alta calidad (zoom activado)
├── Título, año, técnica
├── Dimensiones (cm / pulgadas)
├── Estado: Disponible / Vendida / En exposición
├── Precio (visible u opcional)
└── Botón de contacto / compra
```

---

### 6. Exposiciones y Prensa

```
Timeline o lista de:
├── Exposiciones individuales y colectivas
├── Cobertura en medios
├── Premios y residencias artísticas
└── Publicaciones
```

---

### 7. Contacto

```
Elementos:
├── Formulario minimalista (nombre, email, mensaje)
├── Email directo
├── Redes sociales (Instagram es clave para artistas)
├── Ubicación del estudio (ciudad/país)
└── Para galerías: nota específica de colaboración
```

---

## Sección de Galería

Esta es la sección más crítica del portfolio. Debe diseñarse con extremo cuidado.

### Arquitectura de la Galería

```
GALERÍA
├── Filtros por serie/colección
│   ├── "Todas las obras"
│   ├── "Abstracto"
│   ├── "Retratos"
│   ├── "Paisajes"
│   └── "Disponibles"
│
├── Grid de obras
│   ├── Thumbnail con aspect-ratio preservado
│   ├── Hover state con info básica
│   └── Click → Lightbox / Vista detalle
│
└── Vista de obra individual
    ├── Imagen en alta resolución
    ├── Zoom interactivo (2x–4x)
    ├── Ficha técnica completa
    ├── Obras relacionadas
    └── Navegación anterior / siguiente
```

### Componente de Tarjeta de Obra

```
Estado default:
┌─────────────────────┐
│                     │
│    [IMAGEN OBRA]    │
│                     │
│                     │
└─────────────────────┘

Estado hover (fade-in suave, 300ms):
┌─────────────────────┐
│  ░░░░░░░░░░░░░░░░░  │  ← overlay sutil oscuro
│    Título obra      │
│    Año · Técnica    │
│    120 × 90 cm      │
└─────────────────────┘
```

### Lightbox / Vista Expandida

```
┌─────────────────────────────────────────────────┐
│  ✕                                              │
│                                                 │
│  ┌───────────────────────┐  ┌────────────────┐  │
│  │                       │  │ Título obra    │  │
│  │                       │  │                │  │
│  │    IMAGEN OBRA        │  │ 2024           │  │
│  │    (clickable zoom)   │  │ Óleo sobre     │  │
│  │                       │  │ lino           │  │
│  │                       │  │                │  │
│  └───────────────────────┘  │ 80 × 100 cm    │  │
│  ←  [1/12]  →              │                │  │
│                             │ [Consultar]    │  │
│                             └────────────────┘  │
└─────────────────────────────────────────────────┘
```

### Filtros de Galería

```css
/* Estilos recomendados para filtros */
.filter-btn {
  font: 13px Inter, sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: border-color 200ms ease;
}
.filter-btn.active {
  border-bottom-color: currentColor;
}
```

Interacción al filtrar:
- Las obras que no corresponden → `opacity: 0; scale: 0.95;`
- Las obras visibles → `opacity: 1; scale: 1;`
- Animación con GSAP o CSS transitions (250–400ms)
- Layout recalculado con GSAP Flip o CSS Grid auto-placement

---

## Animaciones e Interacciones

### Principios de Animación

1. **Propósito:** Cada animación debe tener una razón funcional.
2. **Sutileza:** Las animaciones refuerzan sin distraer.
3. **Velocidad:** Transiciones entre 200ms–600ms. Nada más lento.
4. **Easing:** Usar curvas ease-out para entradas, ease-in para salidas.

---

### Animaciones de Entrada (Page Load)

#### Hero Reveal
```javascript
// Secuencia de entrada al cargar
gsap.timeline()
  .from('.hero-image', {
    scale: 1.05,
    duration: 1.8,
    ease: 'power2.out'
  })
  .from('.artist-name', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, '-=1.2')
  .from('.hero-tagline', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
```

#### Nombre del Artista — Split Text
```javascript
// Revelar nombre letra por letra
gsap.from(nameChars, {
  y: '100%',
  opacity: 0,
  duration: 0.8,
  stagger: 0.04,
  ease: 'power4.out',
  delay: 0.5
})
```

---

### Scroll Animations (ScrollTrigger)

#### Galería — Staggered Reveal
```javascript
gsap.from('.artwork-card', {
  scrollTrigger: {
    trigger: '.gallery-grid',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  },
  y: 60,
  opacity: 0,
  duration: 0.9,
  stagger: {
    amount: 0.8,
    grid: 'auto',
    from: 'start'
  },
  ease: 'power3.out'
})
```

#### Parallax en Imágenes
```javascript
gsap.to('.hero-img', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1.5
  },
  y: '20%',
  scale: 1.1,
  ease: 'none'
})
```

#### Sección "About" — Texto revelado
```javascript
gsap.from('.about-text p', {
  scrollTrigger: { trigger: '.about', start: 'top 70%' },
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out'
})
```

---

### Hover Effects

#### Tarjeta de Obra — Overlay Info
```css
.artwork-card {
  overflow: hidden;
  cursor: pointer;
}

.artwork-card img {
  transform: scale(1);
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.artwork-card:hover img {
  transform: scale(1.03);
}

.artwork-info-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  transition: opacity 300ms ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
}

.artwork-card:hover .artwork-info-overlay {
  opacity: 1;
}
```

#### Navegación — Línea de subrayado animada
```css
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nav-link:hover::after {
  width: 100%;
}
```

#### Cursor Personalizado
```javascript
// Cursor circular que sigue al mouse
const cursor = document.querySelector('.custom-cursor')

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: 'power2.out'
  })
})

// En hover sobre obras → cursor se expande
document.querySelectorAll('.artwork-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 3, duration: 0.4 })
  })
  card.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, duration: 0.4 })
  })
})
```

---

### Transiciones de Página

```javascript
// Barba.js + GSAP — Transición tipo "cortina"
barba.init({
  transitions: [{
    async leave(data) {
      await gsap.to('.page-transition-curtain', {
        scaleY: 1,
        duration: 0.6,
        transformOrigin: 'bottom',
        ease: 'power4.inOut'
      })
    },
    async enter(data) {
      gsap.from('.page-transition-curtain', {
        scaleY: 0,
        duration: 0.6,
        transformOrigin: 'top',
        ease: 'power4.inOut',
        delay: 0.1
      })
    }
  }]
})
```

---

### Smooth Scroll

```javascript
// Lenis — Scroll suave y elegante
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false,
})

// Sincronizar con GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
```

---

### Loader de Entrada

```javascript
// Preloader con progreso de imágenes
const tl = gsap.timeline()

tl.to('.preloader-counter', {
  innerText: 100,
  duration: 1.8,
  snap: { innerText: 1 },
  ease: 'power1.inOut'
})
.to('.preloader', {
  opacity: 0,
  duration: 0.6,
  ease: 'power2.inOut',
  onComplete: () => initPage()
})
```

---

## Stack Tecnológico

### Opción A — Framework Moderno (Recomendado)

```
Frontend:     Next.js 15 o Astro 5
Estilos:      Tailwind CSS + CSS custom properties
Animaciones:  GSAP + ScrollTrigger + SplitText
Scroll:       Lenis (smooth scroll)
Transiciones: Barba.js (opcional)
CMS:          Sanity.io o Contentful (para actualizar obras fácil)
Imágenes:     Cloudinary o Next/Image (optimización automática)
Deploy:       Vercel
```

### Opción B — Sitio Simple / Estático

```
Frontend:     HTML + CSS + Vanilla JS
Animaciones:  GSAP CDN
Galería:      GLightbox o PhotoSwipe
CMS:          No necesario (edición manual)
Deploy:       Netlify o GitHub Pages
```

### Herramientas de Galería

| Herramienta | Uso | Ventajas |
|-------------|-----|----------|
| **PhotoSwipe 5** | Lightbox | Zoom nativo, touch perfecto |
| **GLightbox** | Lightbox simple | Fácil integración, ligero |
| **Swiper.js** | Carrusel horizontal | Touch, loops, autoplay |
| **Isotope.js** | Filtros + grid | Animaciones de reordenamiento |
| **GSAP Flip** | Transiciones de grid | El más suave y controlable |

---

## Referencias Visuales

### Artistas con Portfolio Destacado

| Artista | Estilo web | Destacado |
|---------|------------|-----------|
| **Redd Walitzki** | Split hero, oscuro | Hero dividido obras/categorías |
| **Kim Song Ri** | Minimalismo extremo | Solo lo esencial, todo es arte |
| **Caroline Denervaud** | Minimalista puro | No compite con la obra |
| **Ashley Tarr** | Horizontal scroll | Exploración por categorías hover |
| **Sarah Letovsky** | Horizontal, oscuro | Galerías por fecha, cinematográfico |
| **Elise Wagner** | Abstracto + blog | Integra statement y escritura |
| **Gabriela Cobar** | Una obra a la vez | Máxima atención por pieza |
| **Adam Halls** | Funcional completo | Zoom, navegación, tienda |

---

### Plataformas de Referencia e Inspiración

- [Awwwards — GSAP Websites](https://www.awwwards.com/websites/gsap/) — Portafolios con animaciones de nivel mundial
- [Format — Painter Portfolios](https://www.format.com/magazine/art-portfolio-website-examples-painters) — 18 ejemplos específicos de pintores
- [Pixpa — Artist Portfolios](https://www.pixpa.com/blog/artist-portfolio-websites) — 40+ referencias visuales
- [Minimalio — Minimalist Painters](https://minimalio.org/painter-portfolio-websites-minimalist-examples/) — Enfoque minimalista
- [Codrops — WebGL Gallery Tutorial](https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/) — Técnicas avanzadas
- [GSAP Vault](https://gsapvault.com/effects) — Efectos de animación listos para usar
- [Made with GSAP](https://madewithgsap.com/) — Showcase de sitios con GSAP

---

### Patrones Visuales Clave a Replicar

```
1. PANTALLA DE CARGA (Preloader)
   → Contador numérico 0–100%
   → Nombre del artista revelándose
   → Cortina que se abre (clip-path o scaleY)

2. NAVEGACIÓN
   → Letras del menú — stagger de entrada
   → Logo: nombre completo del artista (no ícono)
   → Mobile: hamburger con menú full-screen

3. HERO
   → Una sola obra dominante a pantalla completa
   → Nombre en tipografía grande, delgada
   → Scroll indicator animado (flecha o línea)

4. GALERÍA
   → Hover: escala sutil + overlay con datos
   → Click: lightbox con zoom y navegación
   → Filtros: transición suave al cambiar categoría

5. FOOTER
   → Mínimo: email + Instagram + copyright
   → Tipografía pequeña, mucho espacio
   → Opcionalmente: mapa del estudio
```

---

## Resumen Ejecutivo

| Aspecto | Decisión |
|---------|----------|
| **Estilo** | Minimalismo oscuro — fondo negro, tipografía crema |
| **Tipografía** | Cormorant Garamond (headings) + Inter (body) |
| **Color acento** | Oro envejecido `#C9A96E` |
| **Galería** | Grid masonry + lightbox con zoom |
| **Animaciones** | GSAP ScrollTrigger + Lenis smooth scroll |
| **Interacciones** | Hover overlay, cursor personalizado, split text |
| **Transiciones** | Cortina de página (clip-path), 600ms |
| **CMS** | Sanity.io para gestionar obras fácilmente |
| **Deploy** | Vercel + Next.js |

---

*Investigación realizada — Marzo 2026*
*Fuentes: Format, Pixpa, Hostinger, Awwwards, Codrops, GSAP Vault, Colorlib, Minimalio*
