# PRD — SAC_ART Portfolio Website
### Product Requirements Document · v1.0 · Marzo 2026

---

> **Producto:** Sitio web one-page para SAC_ART
> **Artista:** @sac_artx (Instagram)
> **Tipo de negocio:** Comisiones de arte (mascotas, paisajes, fundas de celular)
> **Objetivo principal:** Convertir visitantes de Instagram en clientes que encarguen una obra

---

## Tabla de Contenidos

1. [Visión del Producto](#1-visión-del-producto)
2. [Usuarios Objetivo](#2-usuarios-objetivo)
3. [Objetivos y Métricas de Éxito](#3-objetivos-y-métricas-de-éxito)
4. [Arquitectura de Información](#4-arquitectura-de-información)
5. [Requerimientos Funcionales](#5-requerimientos-funcionales)
6. [Especificaciones por Sección](#6-especificaciones-por-sección)
7. [Requerimientos No Funcionales](#7-requerimientos-no-funcionales)
8. [Requerimientos de Contenido](#8-requerimientos-de-contenido)
9. [Sistema de Diseño](#9-sistema-de-diseño)
10. [Stack Técnico](#10-stack-técnico)
11. [Fuera de Scope (MVP)](#11-fuera-de-scope-mvp)
12. [Fases de Entrega](#12-fases-de-entrega)

---

## 1. Visión del Producto

### Problema

SAC_ART tiene presencia en Instagram pero no tiene un sitio web propio. El cliente potencial que llega desde Instagram necesita:
- Entender rápidamente qué servicios ofrece y cuánto cuestan
- Ver ejemplos de trabajo anteriores (galería)
- Saber cómo es el proceso de encargar una obra
- Contactar fácilmente (WhatsApp / formulario)

Sin un sitio, SAC_ART pierde clientes que buscan más información antes de escribirle, y no puede posicionarse en Google para búsquedas como "retratos de mascotas acrílico Colombia".

### Solución

Un sitio web one-page, mobile-first, con foco en conversión. No es un portfolio de galería — es una landing page de negocio artístico que guía al visitante desde "llegué" hasta "le escribí por WhatsApp para encargar".

### Principios de Diseño

| Principio | Descripción |
|-----------|-------------|
| **Calidez primero** | El sitio se siente como entrar al estudio de alguien que trabaja con amor, no a una galería fría |
| **Conversión sin fricción** | Cada sección tiene un CTA claro. WhatsApp siempre accesible |
| **El arte habla** | El diseño enmarca las obras, no compite con ellas |
| **Mobile-first** | 85%+ del tráfico viene desde Instagram → mobile |
| **Transparencia** | Precios visibles, proceso claro, sin misterio |

---

## 2. Usuarios Objetivo

### Persona Principal — "La Dueña de Mascota"

```
Nombre:     Valentina, 28–45 años
Ciudad:     Bogotá / Medellín / Cali / Barranquilla y todo Colombia
Canal:      Llegó desde Instagram (post o reel de SAC_ART)
Motivación: Quiere un cuadro de su perro/gato como regalo o para su casa
Dolor:      No sabe cuánto cuesta, no sabe si es "para ella",
            le da vergüenza preguntar sin saber los precios
Dispositivo: 90% mobile (iPhone o Android)
Comportamiento: Scrollea todo el sitio en 2 minutos, si no encuentra
                precios se va, si le gusta escribe por WhatsApp
```

### Persona Secundaria — "El Regalador"

```
Nombre:     Martín, 25–50 años
Motivación: Quiere regalar un retrato de la mascota de su pareja/mamá
Dolor:      Necesita saber tiempos de entrega, si llega antes de X fecha
            Quiere algo "especial" pero no sabe si el presupuesto alcanza
Comportamiento: Más racional, busca precios y tiempos. Lee la FAQ.
```

### Persona Terciaria — "La Fan del Arte"

```
Motivación: Le encanta el estilo de SAC_ART, quiere ver más trabajo
Comportamiento: Scrollea la galería, sigue en Instagram,
                eventualmente encarga o recomienda
```

---

## 3. Objetivos y Métricas de Éxito

### Objetivos de Negocio

1. Aumentar la cantidad de consultas de encargos recibidas por semana
2. Reducir el tiempo que SAC_ART pasa explicando precios y proceso (FAQ hace ese trabajo)
3. Generar presencia orgánica en Google (SEO básico)
4. Tener un lugar profesional para derivar a clientes potenciales ("mirá mi sitio")

### Métricas de Éxito (3 meses post-lanzamiento)

| Métrica | Baseline | Target |
|---------|----------|--------|
| Clics al WhatsApp desde el sitio | 0 | 30+/mes |
| Tiempo promedio en sitio | — | 2+ minutos |
| Bounce rate | — | < 60% |
| Consultas de encargo atribuidas al sitio | 0 | 10+/mes |
| Posición en Google "retratos mascotas acrílico [ciudad]" | Sin indexar | Top 10 en 90 días |

---

## 4. Arquitectura de Información

### Estructura One-Page

```
sacart.com (o dominio elegido)
│
├── #inicio       → Hero
├── #servicios    → Servicios (3 cards)
├── #proceso      → Cómo Funciona (5 pasos)
├── #galeria      → Galería con filtros
├── #testimonios  → Testimonios (3–4)
├── #faq          → Preguntas Frecuentes
└── #contacto     → Formulario + Footer
```

### Navegación

```
Navbar:
[SAC_ART]                    [Servicios] [Galería] [Proceso] [Contacto] [💬 Escribime]

Mobile (hamburger):
┌────────────────┐
│  SAC_ART    ✕  │
│                │
│  Servicios     │
│  Galería       │
│  Proceso       │
│  Contacto      │
│                │
│  [💬 WhatsApp] │
│  [📷 Instagram]│
└────────────────┘
```

---

## 5. Requerimientos Funcionales

### RF-01 — Navegación

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-01.1 | Navbar fija, transparent en hero, blanca con sombra al hacer scroll | Must Have |
| RF-01.2 | Links de nav hacen smooth scroll hacia la sección correspondiente | Must Have |
| RF-01.3 | Mobile: menú hamburger con drawer lateral | Must Have |
| RF-01.4 | Botón "Escribime" en navbar abre WhatsApp en nueva pestaña | Must Have |
| RF-01.5 | Logo (nombre SAC_ART) hace scroll al top | Must Have |
| RF-01.6 | Link activo se resalta según sección visible (IntersectionObserver) | Should Have |

---

### RF-02 — Hero

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-02.1 | Imagen hero de alta calidad (obra de mascota) como fondo o split screen | Must Have |
| RF-02.2 | Nombre del artista en tipografía grande (Cormorant Garamond) | Must Have |
| RF-02.3 | Tagline descriptivo corto | Must Have |
| RF-02.4 | CTA primario: botón "Encargá tu retrato" → abre WhatsApp | Must Have |
| RF-02.5 | CTA secundario: "Ver galería ↓" → scroll a #galeria | Must Have |
| RF-02.6 | Scroll indicator animado (flecha o línea) | Should Have |
| RF-02.7 | Imagen hero optimizada (WebP, lazy load desactivado para LCP) | Must Have |

---

### RF-03 — Sección Servicios

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-03.1 | Tres cards de servicio: Retratos de Mascotas · Paisajes · Fundas de Celular | Must Have |
| RF-03.2 | Cada card muestra: título, descripción, lista de qué incluye, precio base, tiempo estimado, CTA | Must Have |
| RF-03.3 | Card de Retratos muestra precio por cantidad de mascotas (1, 2, 3+) | Must Have |
| RF-03.4 | Card de Fundas muestra modelos compatibles (iPhone, Samsung) | Must Have |
| RF-03.5 | CTA en cada card abre WhatsApp con mensaje pre-cargado específico del servicio | Must Have |
| RF-03.6 | Hover en card: elevación sutil (box-shadow) | Should Have |
| RF-03.7 | Cards responsive: 3 col desktop, 1 col mobile | Must Have |

---

### RF-04 — Sección Cómo Funciona / Proceso

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-04.1 | Strip de 5 pasos numerados con ícono, título y descripción breve | Must Have |
| RF-04.2 | Pasos: (1) Enviás foto → (2) Boceto en 48hs → (3) Aprobás → (4) Se pinta → (5) Recibís | Must Have |
| RF-04.3 | Layout horizontal desktop, vertical (timeline) mobile | Must Have |
| RF-04.4 | Animación de entrada staggered al hacer scroll (fade + slide up) | Should Have |
| RF-04.5 | CTA al final: "¿Listo para empezar? → WhatsApp" | Must Have |

---

### RF-05 — Galería

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-05.1 | Grid masonry responsive con las obras | Must Have |
| RF-05.2 | Filtros de categoría: Todos · Mascotas · Paisajes · Fundas | Must Have |
| RF-05.3 | Animación al filtrar: fade out obras no correspondientes, fade in correspondientes | Should Have |
| RF-05.4 | Hover en card: overlay suave con nombre de mascota/obra y técnica | Must Have |
| RF-05.5 | Click en obra: lightbox con imagen en alta resolución | Must Have |
| RF-05.6 | Lightbox: navegación anterior/siguiente con teclado y swipe (mobile) | Must Have |
| RF-05.7 | Lightbox: muestra título, técnica, dimensiones y CTA "¿Te gustaría algo así?" → WhatsApp | Should Have |
| RF-05.8 | Lightbox: botón cerrar y click fuera del modal cierra | Must Have |
| RF-05.9 | Imágenes optimizadas: WebP, srcset, lazy load | Must Have |
| RF-05.10 | "Ver más" / load more si hay más de 12 obras (no pagination, infinite reveal) | Should Have |
| RF-05.11 | Obras de fundas se muestran como mockup en celular (no imagen plana) | Should Have |

---

### RF-06 — Testimonios

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-06.1 | Mínimo 3, ideal 4–5 testimonios | Must Have |
| RF-06.2 | Cada testimonio: foto de la obra entregada + texto + nombre del cliente + ciudad | Must Have |
| RF-06.3 | Rating de 5 estrellas (visual) | Should Have |
| RF-06.4 | Layout: cards en grid 3 col desktop, carousel/slider en mobile | Must Have |
| RF-06.5 | Si hay reseñas de Google/Instagram, enlazar o embeber | Nice to Have |

---

### RF-07 — FAQ

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-07.1 | Mínimo 7 preguntas con respuestas expandibles (accordion) | Must Have |
| RF-07.2 | Una sola pregunta abierta a la vez (cerrar anterior al abrir nueva) | Must Have |
| RF-07.3 | Animación suave al expandir/colapsar (max-height transition) | Must Have |
| RF-07.4 | Preguntas definidas (ver sección de contenido) | Must Have |
| RF-07.5 | CTA al final: "¿Tenés otra pregunta? → WhatsApp" | Must Have |

---

### RF-08 — Sección Contacto

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-08.1 | Formulario con campos: nombre, email o WhatsApp, tipo de servicio, adjuntar foto, mensaje | Must Have |
| RF-08.2 | Campo "tipo de servicio" es un select: Retrato mascota / Paisaje / Funda celular / Otro | Must Have |
| RF-08.3 | Campo adjuntar foto acepta hasta 5 archivos (JPG, PNG, HEIC) | Must Have |
| RF-08.4 | Validación de campos requeridos antes de enviar | Must Have |
| RF-08.5 | Submit envía email a SAC_ART (via Resend o Formspree) | Must Have |
| RF-08.6 | Mensaje de confirmación post-submit: "¡Gracias! Te respondo en 24–48 horas" | Must Have |
| RF-08.7 | Botón de WhatsApp como alternativa al formulario (más prominente) | Must Have |
| RF-08.8 | Links a Instagram y otras redes en la misma sección | Must Have |

---

### RF-09 — WhatsApp Flotante

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-09.1 | Botón flotante verde WhatsApp en esquina inferior derecha, siempre visible | Must Have |
| RF-09.2 | El botón abre wa.me/549XXXXXXXXXX con mensaje pre-cargado | Must Have |
| RF-09.3 | Tooltip al hacer hover: "Encargá por WhatsApp" | Should Have |
| RF-09.4 | Animación de entrada (pulse o bounce) para llamar la atención | Should Have |
| RF-09.5 | Se oculta cuando el usuario está en la sección #contacto (ya tienen el formulario) | Nice to Have |

---

### RF-10 — Footer

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-10.1 | Logo / nombre SAC_ART | Must Have |
| RF-10.2 | Links de navegación rápida | Should Have |
| RF-10.3 | Links a redes sociales (Instagram, WhatsApp, TikTok si tiene) | Must Have |
| RF-10.4 | Copyright "© 2026 SAC_ART. Todos los derechos reservados." | Must Have |
| RF-10.5 | Frase breve de tagline o descripción | Should Have |

---

### RF-11 — SEO Técnico (On-Page)

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-11.1 | Meta title optimizado: `Retratos de Mascotas en Acrílico por Encargo · SAC_ART` | Must Have |
| RF-11.2 | Meta description (150–160 chars) con keyword principal + CTA | Must Have |
| RF-11.3 | Open Graph tags completos (og:title, og:description, og:image 1200×630, og:url) | Must Have |
| RF-11.4 | Twitter Card tags | Should Have |
| RF-11.5 | Schema.org `LocalBusiness` + `ArtGallery` + `Service` markup en JSON-LD | Must Have |
| RF-11.6 | Un solo H1 por página con keyword principal | Must Have |
| RF-11.7 | Estructura de headings semántica (H1 → H2 → H3) sin saltear niveles | Must Have |
| RF-11.8 | Alt text descriptivos y con keywords en todas las imágenes de obras | Must Have |
| RF-11.9 | Sitemap XML generado automáticamente (Astro genera por defecto) | Must Have |
| RF-11.10 | robots.txt configurado correctamente | Must Have |
| RF-11.11 | Canonical URL definida | Must Have |
| RF-11.12 | URLs limpias y legibles (sin parámetros, en español) | Must Have |
| RF-11.13 | Fuentes cargadas con `display=swap` para evitar FOIT | Must Have |
| RF-11.14 | No broken links (validación antes de deploy) | Must Have |

---

### RF-11b — SEO Local

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-11b.1 | Nombre, dirección y teléfono (NAP) consistentes en toda la web y redes | Must Have |
| RF-11b.2 | Schema.org con `geo` coordinates y `areaServed` (Colombia) | Must Have |
| RF-11b.3 | Mención explícita de ciudad/región en el copy de la página | Must Have |
| RF-11b.4 | Google Business Profile creado y vinculado al sitio | Must Have |
| RF-11b.5 | Categoría GBP: "Artista" + "Servicio de arte personalizado" | Must Have |
| RF-11b.6 | Fotos de obras y del estudio subidas al GBP (mínimo 10) | Should Have |
| RF-11b.7 | Link al sitio web desde todas las redes (Instagram bio, TikTok, etc.) | Must Have |
| RF-11b.8 | Registro en directorios de artistas (Artelista, Mercado Arte, etc.) con link al sitio | Should Have |

---

### RF-11c — SEO de Contenido

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-11c.1 | Keyword principal en H1, primer párrafo y al menos 2 H2 | Must Have |
| RF-11c.2 | Copy de servicios redactado con keywords naturales (no stuffing) | Must Have |
| RF-11c.3 | Alt text de galería incluye keyword + descripción (ej: "retrato de golden retriever en acrílico 30x30") | Must Have |
| RF-11c.4 | FAQ responde preguntas reales que la gente busca en Google | Must Have |
| RF-11c.5 | FAQ estructurada con Schema.org `FAQPage` para rich snippets | Should Have |
| RF-11c.6 | Guía de fotos como página o sección indexable (imán de tráfico long-tail) | Should Have |
| RF-11c.7 | Blog con al menos 1 artículo al lanzamiento (Fase 2) | Nice to Have |

---

### RF-11d — SEO Técnico Avanzado

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-11d.1 | Core Web Vitals: LCP < 2.5s, INP < 100ms, CLS < 0.1 | Must Have |
| RF-11d.2 | Imágenes en WebP con srcset (responsive images) | Must Have |
| RF-11d.3 | Lazy loading en imágenes de galería (no en hero) | Must Have |
| RF-11d.4 | Preload del hero image y fuentes críticas | Must Have |
| RF-11d.5 | Minificación de CSS/JS (Astro lo hace en build) | Must Have |
| RF-11d.6 | Sin render-blocking resources | Must Have |
| RF-11d.7 | HTTPS (Vercel lo provee automáticamente) | Must Have |
| RF-11d.8 | 301 redirect de www → non-www (o viceversa, consistente) | Must Have |

---

### RF-12 — Analytics

| ID | Requerimiento | Prioridad |
|----|--------------|-----------|
| RF-12.1 | Google Analytics 4 o Plausible instalado | Must Have |
| RF-12.2 | Eventos trackeados: click WhatsApp flotante, click CTA servicios, filtro galería, submit formulario | Should Have |
| RF-12.3 | Google Search Console conectado | Should Have |

---

## 6. Especificaciones por Sección

### Sección 1 — Hero

```
Layout desktop (split screen):
┌──────────────────────┬──────────────────────┐
│                      │                      │
│   [IMAGEN OBRA]      │  SAC_ART             │
│   (retrato mascota,  │                      │
│    alta calidad,     │  Retratos · Paisajes  │
│    formato cuadrado  │  Fundas Personalizadas│
│    o portrait)       │                      │
│                      │  "Tu mascota,        │
│                      │   hecha arte."       │
│                      │                      │
│                      │  [Encargá tu retrato]│
│                      │  [Ver galería ↓]     │
│                      │                      │
└──────────────────────┴──────────────────────┘

Layout mobile:
┌──────────────────────┐
│  [IMAGEN OBRA]       │  (full width, 60vh)
│                      │
├──────────────────────┤
│  SAC_ART             │
│  Tu mascota, arte.   │
│                      │
│  [Encargá tu retrato]│
│  [Ver galería ↓]     │
└──────────────────────┘
```

**Copy:**
- H1: `SAC_ART`
- Tagline: `Retratos de mascotas en acrílico · Paisajes · Fundas personalizadas`
- Sub-tagline: `Tu mascota, hecha arte. Envianos su foto y la pintamos para vos.`
- CTA primario: `Encargá tu retrato →` (terracota, abre WhatsApp)
- CTA secundario: `Ver galería ↓` (outline, scroll a #galeria)

---

### Sección 2 — Servicios

```
Layout desktop (3 columnas):
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│  🐾            │ │  🌿            │ │  📱            │
│  RETRATOS DE   │ │  PAISAJES      │ │  FUNDAS DE     │
│  MASCOTAS      │ │                │ │  CELULAR       │
│                │ │  Acrílico      │ │                │
│  Acrílico sobre│ │  sobre lienzo. │ │  Tu mascota en │
│  lienzo.       │ │  Lugares que   │ │  tu celular,   │
│  Desde una foto│ │  importan,     │ │  siempre.      │
│  de tu mascota.│ │  por encargo.  │ │                │
│                │ │                │ │                │
│  ✓ Perros, gatos│ │  ✓ Por encargo │ │  ✓ iPhone      │
│  ✓ Fondo libre │ │  ✓ Del tamaño  │ │  ✓ Samsung     │
│  ✓ Foto proceso│ │    que querés  │ │  ✓ Diseño único│
│  ✓ Certificado │ │  ✓ Para regalo │ │  ✓ Preview     │
│                │ │                │ │    previo      │
│  Desde $XXXXX  │ │  Desde $XXXXX  │ │  $XXXXX        │
│  · 3–4 semanas │ │  · 4–5 semanas │ │  · 1–2 semanas │
│                │ │                │ │                │
│  [Encargar →]  │ │  [Encargar →]  │ │  [Encargar →]  │
└────────────────┘ └────────────────┘ └────────────────┘
```

**Tabla de precios para Retratos (sub-componente):**

| Tamaño | 1 mascota | 2 mascotas |
|--------|-----------|------------|
| 20×20 cm | $XXXXX | $XXXXX |
| 30×30 cm | $XXXXX | $XXXXX |
| 40×40 cm | $XXXXX | Consultar |

> Nota: SAC_ART define los precios reales. El sitio los muestra sin excusa.

**WhatsApp pre-cargado por servicio:**
- Retratos: `Hola! Me gustaría encargar un retrato de mi mascota. ¿Podés darme más info?`
- Paisajes: `Hola! Me gustaría encargar un paisaje. ¿Me contás cómo funciona?`
- Fundas: `Hola! Quiero una funda personalizada con la foto de mi mascota. ¿Cuánto sale?`

---

### Sección 3 — Cómo Funciona

```
Desktop (horizontal):
   [1]            [2]            [3]            [4]            [5]
    📷             ✏️              ✅             🎨             📦
Enviás tu      Boceto en      Aprobás el     Se pinta con   Recibís tu
  foto          48 horas        diseño           amor           obra
──────────────────────────────────────────────────────────────────────
Mandanos la   Te enviamos    Ajustamos lo   Fotos del      Embalaje
mejor foto    un adelanto    que necesites  proceso por    seguro, envío
de tu mascota de cómo va     antes de       WhatsApp       a todo el país
por WhatsApp   a quedar       pintar

Mobile (timeline vertical):

  ●──[1] Enviás tu foto
  │      Mandanos la mejor foto de tu mascota
  │
  ●──[2] Boceto en 48 horas
  │      Te enviamos un adelanto digital
  │
  ●──[3] Aprobás el diseño
  │      Ajustamos hasta que sea perfecto
  │
  ●──[4] Se pinta con amor
  │      Fotos del proceso por WhatsApp
  │
  ●──[5] Recibís tu obra
         Envíos a todo el país
```

---

### Sección 4 — Galería

```
Filtros (tabs):
[ TODOS ] [ MASCOTAS ] [ PAISAJES ] [ FUNDAS ]

Grid masonry desktop (3–4 columnas):
┌─────────┐ ┌──────────────┐ ┌─────────┐
│         │ │              │ │         │
│ obra 1  │ │   obra 2     │ │ obra 3  │
│ (tall)  │ │   (wide)     │ │         │
│         │ │              │ ├─────────┤
├─────────┤ └──────────────┘ │ obra 4  │
│ obra 5  │ ┌──────┐ ┌──────┐ │         │
│         │ │obra6 │ │obra7 │ └─────────┘
└─────────┘ └──────┘ └──────┘

Hover state:
┌─────────────────────┐
│  ░░░░░░░░░░░░░░░░░  │  ← overlay crema 60%
│                     │
│  "Toto"             │  ← nombre de la mascota
│  Golden Retriever   │
│  Acrílico 30×30 cm  │
│                     │
│  [Ver obra ↗]       │
└─────────────────────┘
```

**Lightbox:**

```
┌──────────────────────────────────────────────────────┐
│  ✕                                                   │
│                                                      │
│  ┌─────────────────────────┐  ┌───────────────────┐  │
│  │                         │  │  "Toto"           │  │
│  │                         │  │                   │  │
│  │     IMAGEN EN ALTA      │  │  Acrílico sobre   │  │
│  │     RESOLUCIÓN          │  │  lienzo           │  │
│  │                         │  │  30 × 30 cm       │  │
│  │                         │  │  2025             │  │
│  └─────────────────────────┘  │                   │  │
│   ◀  [3 / 12]  ▶             │  "¿Te gustaría    │  │
│                               │  algo así?"       │  │
│                               │  [💬 WhatsApp]    │  │
│                               └───────────────────┘  │
└──────────────────────────────────────────────────────┘
```

---

### Sección 5 — Testimonios

```
Desktop (3 columnas):
┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐
│  [FOTO DE LA OBRA] │ │  [FOTO DE LA OBRA] │ │  [FOTO DE LA OBRA] │
│                    │ │                    │ │                    │
│  ⭐⭐⭐⭐⭐           │ │  ⭐⭐⭐⭐⭐           │ │  ⭐⭐⭐⭐⭐           │
│                    │ │                    │ │                    │
│  "No puedo creer   │ │  "Le regalé el     │ │  "Exactamente lo   │
│   cómo quedó Toto  │ │   cuadro a mi mamá │ │   que quería. El   │
│   Genial."         │ │   y lloró de la    │ │   proceso fue muy  │
│                    │ │   emoción."        │ │   fácil."          │
│  — María G.        │ │  — Juan P.         │ │  — Sofía R.        │
│    Bogotá    │ │    Medellín         │ │    Cali         │
└────────────────────┘ └────────────────────┘ └────────────────────┘

Mobile: carousel con dots indicator
```

---

### Sección 6 — FAQ

**Preguntas requeridas:**

| # | Pregunta | Tipo |
|---|----------|------|
| 1 | ¿Qué necesito para encargar un retrato? | Proceso |
| 2 | ¿Cuánto tarda en estar listo? | Timing |
| 3 | ¿Puedo pedir cambios si no me gusta el boceto? | Garantía |
| 4 | ¿Cómo me llega el cuadro? | Logística |
| 5 | ¿Pintan mascotas que ya no están? | Memorial |
| 6 | ¿Qué pasa si la foto no es de buena calidad? | Técnico |
| 7 | ¿Hacen envíos fuera de Colombia? | Logística |
| 8 | ¿Puedo poner más de una mascota en el mismo cuadro? | Producto |
| 9 | ¿Cuáles son los medios de pago? | Comercial |

> La pregunta 5 (mascotas fallecidas) requiere copy especialmente empático. Ver sección de contenido.

---

### Sección 7 — Contacto + Footer

```
Layout (2 columnas desktop, 1 columna mobile):

┌─────────────────────────┬─────────────────────────┐
│  ESCRIBINOS             │  O COMPLETÁ EL FORM     │
│                         │                         │
│  La forma más rápida    │  Nombre *               │
│  de comunicarnos:       │  [________________]     │
│                         │                         │
│  [💬 WhatsApp]          │  Email o WhatsApp *     │
│  +57 3XX XXXXXXX        │  [________________]     │
│                         │                         │
│  [📷 Instagram]         │  Tipo de servicio *     │
│  @sac_artx              │  [▼ Elegí una opción]   │
│                         │                         │
│  Respondemos en         │  Adjuntar foto          │
│  24–48 horas            │  [📎 Subir archivos]    │
│                         │                         │
│                         │  Mensaje                │
│                         │  [________________]     │
│                         │  [________________]     │
│                         │                         │
│                         │  [Enviar consulta →]    │
└─────────────────────────┴─────────────────────────┘

Footer:
┌──────────────────────────────────────────────────────┐
│  SAC_ART                                             │
│  Pinturas acrílicas por encargo                      │
│                                                      │
│  [Instagram] [WhatsApp] [TikTok?]                    │
│                                                      │
│  Servicios   Galería   Proceso   Contacto            │
│                                                      │
│  © 2026 SAC_ART · Todos los derechos reservados      │
└──────────────────────────────────────────────────────┘
```

---

## 7. Requerimientos No Funcionales

### Performance

| Métrica | Target | Por qué |
|---------|--------|---------|
| LCP (Largest Contentful Paint) | < 2.5s | Google ranking + UX |
| FID / INP | < 100ms | Interactividad |
| CLS | < 0.1 | Sin layout shifts |
| Lighthouse Score | > 90 en mobile | Calidad general |
| Peso total de página | < 3MB | Mobile con datos limitados |
| Imágenes | WebP + srcset | Menor peso, misma calidad |

### Accesibilidad

| Requerimiento | Estándar |
|--------------|----------|
| Contraste mínimo | WCAG 2.1 AA (4.5:1 para texto normal) |
| Focus visible en todos los elementos interactivos | Sí |
| Alt text en todas las imágenes | Sí |
| Navegación por teclado funcional | Sí |
| ARIA labels en botones sin texto visible | Sí |
| Respeto por `prefers-reduced-motion` | Sí — todas las animaciones se desactivan |

### Compatibilidad

| Plataforma | Versiones |
|-----------|-----------|
| Chrome | Últimas 2 versiones |
| Safari iOS | iOS 15+ |
| Firefox | Últimas 2 versiones |
| Samsung Internet | Últimas 2 versiones |
| Resoluciones | 375px (iPhone SE) → 1920px (desktop) |

### Seguridad

- HTTPS obligatorio (via Vercel, automático)
- Sin datos sensibles en cliente
- Formulario con rate limiting (via Resend/Formspree)
- Sin dependencias de terceros que accedan a datos de usuario

---

## 8. Requerimientos de Contenido

### Imágenes Necesarias (checklist para SAC_ART)

**Hero:**
- [ ] 1 imagen de obra destacada (mínimo 1920×1080px, JPG/PNG de alta calidad)
- [ ] Opcionalmente: 2–3 imágenes para hero slideshow o video loop

**Galería:**
- [ ] Mínimo 12 obras para el lanzamiento (ideal 20–30)
- [ ] Categoría Mascotas: mínimo 6 obras
- [ ] Categoría Paisajes: mínimo 3 obras
- [ ] Categoría Fundas: mínimo 3 (con mockup en celular si es posible)
- [ ] Resolución mínima: 800×800px por obra
- [ ] Formato: JPG o PNG (sin marca de agua — el sitio es el portfolio)

**Perfil:**
- [ ] Foto de la artista (en estudio o trabajando, luz natural, fondo simple)
- [ ] Foto del estudio de trabajo (opcional pero recomendada)

**Proceso:**
- [ ] 1–2 fotos del proceso de pintado (pincel en mano, obra a medias)
- [ ] Foto de embalaje / envío (opcional)

**Testimonios:**
- [ ] 3–4 reviews con: foto de la obra entregada + nombre del cliente + ciudad + texto
- [ ] Permiso implícito del cliente para publicar (son sus fotos de obras ya entregadas)

### Textos Necesarios

**Tagline:**
Frase corta que defina el negocio. Opciones:
- `"Tu mascota, hecha arte."`
- `"Retratos de mascotas en acrílico. Únicos como ellas."`
- `"Arte que preserve los momentos que más querés."`

**Precios de servicios:**
- Retratos: precio base por tamaño y cantidad de mascotas
- Paisajes: precio base por tamaño
- Fundas: precio único o por modelo de celular

**FAQ — Respuestas:**
SAC_ART debe proveer respuestas a las 9 preguntas del FAQ.
Especialmente la respuesta a "¿Pintan mascotas fallecidas?" requiere tono empático.

**Número de WhatsApp:**
El número completo con código de país para el link `wa.me/549XXXXXXXXXX`.

---

## 9. Sistema de Diseño

### Colores

```css
:root {
  /* Fondos */
  --color-bg-primary:    #FAF8F3;  /* Crema — fondo principal */
  --color-bg-secondary:  #F5EFE4;  /* Lino — secciones alternadas */
  --color-bg-white:      #FFFFFF;  /* Blanco — cards y bloques */
  --color-bg-card:       #EDE8DF;  /* Arena — superficie de cards */

  /* Texto */
  --color-text-primary:  #2C2C2C;  /* Carbón — texto principal */
  --color-text-secondary:#7A6E65;  /* Marrón gris — texto secundario */
  --color-text-muted:    #A89F98;  /* Muted — labels, metadata */

  /* Acentos */
  --color-accent:        #C4714F;  /* Terracota — CTAs y acentos */
  --color-accent-hover:  #D4845F;  /* Terracota claro — hover */
  --color-accent-sage:   #8A9E8C;  /* Sage — acentos secundarios */

  /* Bordes */
  --color-border:        #DDD8CF;  /* Beige — divisores */

  /* Estado */
  --color-success:       #6B9E6A;  /* Confirmación */
  --color-memorial:      #9B8AA0;  /* Lavanda — retratos memorial */
  --color-whatsapp:      #25D366;  /* Verde WhatsApp */
}
```

### Tipografía

```css
/* Google Fonts — cargar estos dos */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;700&display=swap');

:root {
  --font-heading: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
}
```

**Escala:**

| Token | Font | Weight | Size | Uso |
|-------|------|--------|------|-----|
| `--text-hero` | Cormorant | 300 | 80px / 44px | Nombre artista en hero |
| `--text-h2` | Cormorant | 400 | 48px / 32px | Títulos de sección |
| `--text-h3` | Cormorant | 500 | 28px / 22px | Títulos de cards |
| `--text-body` | DM Sans | 400 | 16px | Párrafos |
| `--text-body-sm` | DM Sans | 400 | 14px | Descripciones cortas |
| `--text-label` | DM Sans | 500 | 12px | Labels UPPERCASE |
| `--text-price` | DM Sans | 700 | 20px | Precios |
| `--text-btn` | DM Sans | 500 | 15px | Botones |

### Espaciado

```css
:root {
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   40px;
  --space-2xl:  64px;
  --space-3xl:  96px;
  --space-section: clamp(64px, 10vw, 120px);
}
```

### Componentes

#### Botón Primario (Terracota)
```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  font: 500 15px var(--font-body);
  letter-spacing: 0.03em;
  padding: 14px 28px;
  border-radius: 4px;
  transition: background 200ms ease, transform 150ms ease;
}
.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-1px);
}
```

#### Botón Secundario (Outline)
```css
.btn-secondary {
  border: 1.5px solid var(--color-accent);
  color: var(--color-accent);
  background: transparent;
  /* resto igual que primario */
}
.btn-secondary:hover {
  background: var(--color-accent);
  color: white;
}
```

#### Botón WhatsApp
```css
.btn-whatsapp {
  background: var(--color-whatsapp);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  /* ícono WhatsApp SVG incluido */
}
```

### Animaciones

```css
/* Principio: prefers-reduced-motion primero */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

/* Entrada de secciones — usado con IntersectionObserver */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 600ms ease, transform 600ms ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger para listas de cards */
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
```

---

## 10. Stack Técnico

### Selección

| Capa | Tecnología | Razón |
|------|-----------|-------|
| **Framework** | Astro 5 | Genera HTML estático → performance perfecta. Sin JS innecesario. Ideal para este tipo de sitio. |
| **Estilos** | Tailwind CSS 4 | Utilidades, no reinventar la rueda. Configuración del design system en CSS variables. |
| **Animaciones** | CSS + IntersectionObserver | Sin GSAP para el MVP — CSS transitions son suficientes y más livianas. GSAP en Fase 2. |
| **Galería / Lightbox** | PhotoSwipe 5 | Open source, touch nativo, zoom real, sin dependencias. |
| **Formulario** | Resend (API) o Formspree | Envío de emails con adjuntos. Formspree para MVP (zero config), Resend para producción. |
| **CMS** | Contentful (free tier) | Gestión de obras sin tocar código. SAC_ART puede agregar fotos sola. |
| **Imágenes** | Astro Image + Cloudinary | Optimización automática a WebP, srcset, lazy load. |
| **Deploy** | Vercel | CDN global, HTTPS automático, deploys en segundos. |
| **Analytics** | Plausible (o GA4) | Plausible: privacidad, sin cookies, más simple. |

### Costo estimado

| Servicio | Plan | Costo |
|---------|------|-------|
| Vercel | Hobby (free) | $0/mes |
| Contentful | Free (25 entries) | $0/mes |
| Cloudinary | Free (25GB) | $0/mes |
| Formspree | Free (50 submissions/mes) | $0/mes |
| Plausible | — | $9/mes (opcional, puede usar GA4 gratis) |
| **Dominio** | sacart.com.co o sacart.art | ~$1.500–2.500/año |

**Total: $0/mes** salvo dominio (~$150–200/mes amortizado)

### Estructura de Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Process.astro
│   │   ├── Gallery.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   └── Contact.astro
│   └── ui/
│       ├── Button.astro
│       ├── ServiceCard.astro
│       ├── GalleryCard.astro
│       ├── TestimonialCard.astro
│       ├── FAQItem.astro
│       └── WhatsAppFAB.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   ├── global.css
│   └── tokens.css
└── content/
    ├── gallery/       ← obras (desde Contentful o archivos locales)
    ├── services/
    └── testimonials/
```

---

## 11. Fuera de Scope (MVP)

Estos features están identificados pero NO se hacen en la primera versión:

| Feature | Razón para postergar | Fase |
|---------|---------------------|------|
| Blog / contenido editorial | No agrega valor inmediato al negocio | Fase 2 |
| Sistema de pagos online (Nequi / Daviplata) | Complejidad alta, el proceso es manual por ahora | Fase 2 |
| Carrito de compras / tienda | No aplica al modelo de comisiones | Fase 2+ |
| Sistema de turnos / reservas online | Valioso pero complejo (requiere calendario, pagos) | Fase 2 |
| Login de cliente para ver estado del pedido | Demasiado complejo para MVP | Fase 3 |
| Múltiples idiomas (inglés) | Solo si quiere clientes internacionales | Fase 2 |
| Video hero / reel | Valioso pero requiere producción de contenido | Fase 2 |
| Animaciones WebGL / avanzadas (Three.js) | Overkill para este negocio | Nunca (innecesario) |
| Chat en vivo | WhatsApp reemplaza esto | Fase 2 si es necesario |
| Sección "Sobre mí" extendida | Se puede agregar al hero o contacto | Fase 2 |

---

## 12. Fases de Entrega

### Fase 1 — MVP (2–3 semanas)

Sitio funcional, listo para lanzar.

| # | Tarea | Prioridad |
|---|-------|-----------|
| 1 | Setup proyecto Astro + Tailwind + deploy en Vercel | Must Have |
| 2 | Design system: tokens de color, tipografía, componentes base | Must Have |
| 3 | Navbar responsive (desktop + hamburger mobile) | Must Have |
| 4 | Sección Hero | Must Have |
| 5 | Sección Servicios (3 cards con precios y CTA WhatsApp) | Must Have |
| 6 | Sección Cómo Funciona (5 pasos) | Must Have |
| 7 | Galería con filtros y lightbox (PhotoSwipe) | Must Have |
| 8 | Sección Testimonios | Must Have |
| 9 | FAQ accordion | Must Have |
| 10 | Formulario de contacto (Formspree) | Must Have |
| 11 | Footer + links redes sociales | Must Have |
| 12 | WhatsApp FAB flotante | Must Have |
| 13 | SEO básico (meta tags, OG, alt texts) | Must Have |
| 14 | Analytics (GA4 o Plausible) | Should Have |
| 15 | Optimización de imágenes + performance | Must Have |
| 16 | Testing responsive (375px → 1440px) | Must Have |
| 17 | Dominio + DNS configurado | Must Have |

### Fase 2 — Mejoras Post-Lanzamiento

| Feature | Valor | Complejidad |
|---------|-------|-------------|
| Animaciones con IntersectionObserver más sofisticadas | Alto | Medio |
| CMS con Contentful (para que SAC_ART actualice sola) | Alto | Medio |
| Sección "Sobre mí" con foto de la artista | Medio | Bajo |
| Guía de fotos (cómo sacarle la mejor foto a tu mascota) | Alto | Bajo |
| Blog con tutoriales / behind the scenes | Medio | Alto |
| Integración con Google Reviews | Medio | Medio |
| Memorial portraits con landing propia | Alto | Bajo |

---

*PRD preparado — Marzo 2026*
*Basado en: artist-portfolio-research.md + artist-portfolio-research-v2.md + sac-art-propuesta-diseno.md*
