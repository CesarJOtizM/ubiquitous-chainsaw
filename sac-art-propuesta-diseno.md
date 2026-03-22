# Propuesta de Diseño Web — SAC_ART
### Retratos de mascotas · Paisajes · Fundas personalizadas

---

> **Documento preparado para:** SAC_ART (@sac_artx)
> **Tipo:** Propuesta de Diseño — Landing Page One-Page
> **Fecha:** Marzo 2026
> **Versión:** 1.0

---

## Tabla de Contenidos

1. [Concepto Visual](#1-concepto-visual)
2. [Paleta de Colores y Tipografía](#2-paleta-de-colores-y-tipografía)
3. [Estructura del Sitio](#3-estructura-del-sitio-one-page)
4. [Wireframe Textual por Sección](#4-wireframe-textual-por-sección)
5. [Interacciones Clave](#5-interacciones-clave)
6. [Stack Técnico Recomendado](#6-stack-técnico-recomendado)
7. [Fases de Desarrollo](#7-fases-de-desarrollo)

---

## 1. Concepto Visual

### Filosofía de Diseño

SAC_ART no es una galería de arte. Es un estudio de comisiones personalizadas donde el producto final tiene carga emocional enorme — la mascota de alguien, el paisaje que les recuerda algo, el celular que llevan en el bolsillo todos los días.

El sitio tiene que transmitir **calidez, confianza y profesionalismo artístico** — no frialdad ni distancia. Las galerías de arte contemporáneo usan fondos negros y tipografías minimalistas para crear misterio. SAC_ART necesita lo opuesto: que la persona que llega sintiéndose un poco nerviosa de "encargar algo" se sienta cómoda de arrancar.

> La persona que llega al sitio tiene una foto de su perro en el celular y ganas de regalarle algo especial a alguien (o a sí misma). El sitio tiene que decirle: *"acá estás en buenas manos"*.

**Pilares del concepto:**

| Pilar | Lo que comunica | Cómo se traduce en diseño |
|-------|-----------------|--------------------------|
| **Calidez** | "Esto es hecho con amor" | Fondos crema, bordes suaves, fotos con luz natural |
| **Artesanal** | "Esto lo hace una persona real" | Texturas sutiles, detalles a mano, proceso visible |
| **Confianza** | "Sé lo que hago" | Precios visibles, proceso claro, testimonios reales |
| **Accesible** | "Podés escribirme ahora" | WhatsApp prominente, copy cercano, sin frialdad |

---

### Moodboard — Descripción en Palabras

**Sensación general:** Una tarde en un estudio con luz natural. Plantas en la ventana. El olor a pintura acrílica. Una taza de té sobre la mesa de trabajo. Las fotos de los clientes pegadas en la pared. Todo ordenado pero vivo, no estéril.

**Referencias visuales:**
- La textura del lienzo sin imprimar (granulado suave)
- Los colores de una paleta de artista: terracota, ocre, verde salvia, crema
- Fotografías de mascotas con luz cálida, no estudio frío
- Fondas de celular apoyadas sobre madera o tela, no sobre fondo blanco
- Las manos de la artista pintando — proceso real, no resultado perfecto

**Lo que NO queremos:**
- Fondos negros o muy oscuros
- Tipografías sans-serif genéricas sin personalidad
- Grid perfecto tipo e-commerce de tecnología
- Blanco clínico estilo galería de arte contemporáneo

---

### Opciones de Dirección de Diseño

Se proponen tres direcciones. Recomendamos la **Opción A** para el MVP, con elementos de la Opción B para la sección galería.

---

#### Opción A — "Estudio Cálido" *(Recomendada)*

**Descripción:** Fondo crema dominante, acentos en terracota y sage. Tipografía serif elegante para títulos (Cormorant Garamond) combinada con sans-serif legible (DM Sans) para el cuerpo. Sección a sección alterna entre fondos crema y blanco roto. El hero tiene una gran fotografía del trabajo de SAC_ART.

**Sensación:** Cálido, profesional, artístico sin ser pretencioso. Como entrar al estudio de alguien que sabe lo que hace.

**Pros:**
- Transmite la identidad correcta del negocio
- Muy buena legibilidad en mobile
- La paleta terracota + crema funciona perfectamente con fotos de mascotas (tonos análogos)
- Diferenciación inmediata respecto a competidores que usan blanco genérico

**Contras:**
- Requiere buenas fotos del trabajo (se puede resolver con sesión rápida)
- El fondo crema puede verse "sucio" en pantallas con calibración pobre si no se ejecuta bien

---

#### Opción B — "Galería Editorial"

**Descripción:** Más blanca, más espaciosa. Predomina el blanco con toques de color vía las obras. Tipografía serif grande y audaz para títulos. Más moderna, más "publicación de arte".

**Sensación:** Elegante, editorial, como una revista de lifestyle con enfoque en mascotas.

**Pros:**
- Las obras se ven muy bien sobre blanco
- Transmite alto valor percibido
- Funciona muy bien si SAC_ART quiere posicionarse en el segmento premium

**Contras:**
- Menos cálida — puede generar más fricción al primer contacto
- El proceso de encargar se siente más formal y distante
- Más difícil de ejecutar bien sin diseñador experimentado

---

#### Opción C — "Scrapbook Artístico"

**Descripción:** Texturas de papel, elementos dibujados a mano, frames irregulares para las fotos. Muy handmade, muy personal.

**Sensación:** Íntimo, artesanal, original. Como un cuaderno de bocetos hecho sitio web.

**Pros:**
- Altísima diferenciación visual
- Comunica perfectamente el aspecto artesanal
- Muy memorable

**Contras:**
- Mucho más costoso en tiempo de ejecución
- Puede sentirse "demasiado informal" para generar confianza en la compra
- Difícil de mantener — cada actualización requiere diseño manual
- Performance más pesada (muchos assets gráficos)

---

## 2. Paleta de Colores y Tipografía

### Sistema de Color

#### Paleta Principal

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   CREMA FONDO          TERRACOTA               SAGE             │
│   ████████████         ████████████            ████████████     │
│   #FAF8F3              #C4714F                 #8A9E8C          │
│                                                                 │
│   Warm White           Burnt Sienna            Sage Green       │
│   Fondo principal      Acento y CTAs           Detalle y hover  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Paleta Secundaria (neutros y texto)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   CARBÓN TEXTO         GRIS SUAVE              BLANCO ROTO      │
│   ████████████         ████████████            ████████████     │
│   #2C2C2C              #E8E4DC                 #FFFFFF          │
│                                                                 │
│   Text principal       Divisores y fondos      Cards y bloques  │
│   No negro puro        Alt. a crema            Contraste limpio │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Paleta de Estado

```css
/* Colores funcionales */
--color-success:    #6B9E6A;   /* Verde confirmación */
--color-highlight:  #E8A87C;   /* Terracota claro — highlight suave */
--color-memorial:   #9B8AA0;   /* Lavanda suave — retratos memorial */
```

#### Cómo se sienten juntos

La combinación **Crema + Terracota + Sage** es armónica porque los tres colores comparten temperatura cálida con baja saturación. Es la paleta de un taller con buena luz: neutral suficiente para que las obras de arte dominen visualmente, pero con suficiente personalidad para no ser genérica.

> El terracota (#C4714F) solo se usa para CTAs primarios, precio destacado y acentos en hover. Si se sobre-usa, pierde impacto. Máximo 10% de la superficie visual.

---

### Sistema Tipográfico

#### Tipografías Seleccionadas

Ambas disponibles en **Google Fonts** — sin costo, carga rápida, sin licencia.

---

**HEADINGS — Cormorant Garamond**
```
Google Fonts: https://fonts.google.com/specimen/Cormorant+Garamond
Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
```

> *Cormorant es un serif con proporciones elegantes y algo orgánicas — ideal para arte. No es el serif rígido de un banco, tiene movimiento y expresión. Los títulos grandes en Cormorant 300 o 400 dan una sensación aspiracional sin frialdad.*

Uso en el sitio:
- `H1` Hero: Cormorant Garamond 300, 72px desktop / 40px mobile
- `H2` Sección titles: Cormorant Garamond 400, 48px desktop / 32px mobile
- `H3` Card titles: Cormorant Garamond 500, 28px desktop / 22px mobile
- `Taglines` / citas: Cormorant Garamond 300 italic

---

**BODY — DM Sans**
```
Google Fonts: https://fonts.google.com/specimen/DM+Sans
Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
```

> *DM Sans es una sans-serif moderna con excelente legibilidad en pantalla, especialmente en mobile. Es amigable sin ser infantil. Combina bien con Cormorant porque la sans-serif "ordena" y "airea" el texto denso del serif.*

Uso en el sitio:
- Párrafos: DM Sans 400, 16px, line-height 1.6
- Labels / badges: DM Sans 500, 13px, uppercase con letter-spacing
- Botones: DM Sans 500, 15px
- Precios: DM Sans 700, tamaño variable según contexto

---

#### Escala Tipográfica Visual

```
Cormorant Garamond 300 — 72px
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cada retrato, una historia

Cormorant Garamond 400 — 48px
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Servicios

Cormorant Garamond 500 — 28px
━━━━━━━━━━━━━━━━━━━━━━━
Retratos de Mascotas

DM Sans 400 — 16px
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pinturas en acrílico sobre tela,
hechas con amor desde una foto.

DM Sans 500 — 13px / UPPERCASE
━━━━━━━━━━━━━━━━━━━━
DESDE $15.000

DM Sans 700 — 20px
━━━━━━━━━━━━━━━
$18.000 - $35.000
```

---

## 3. Estructura del Sitio (One-Page)

### Justificación del One-Page

Una sola página (con scroll y anclas de navegación) es la elección correcta para SAC_ART por tres razones:

1. **Conversión**: El visitante ideal llega desde Instagram → ve el trabajo → quiere encargar. Cada clic extra que lo aleje del WhatsApp es fricción innecesaria.
2. **Mantenimiento**: Una sola página es más fácil de actualizar, especialmente la galería.
3. **Mobile-first**: El 85%+ del tráfico va a venir de Instagram → mobile. Los one-pages se navegan mejor en mobile (scroll natural) que los multi-page.

---

### Navegación

```
┌──────────────────────────────────────────────────────────────────┐
│  SAC_ART                                    Servicios  Galería  │
│                                             Proceso   Contacto  │
│                                             [Escribime ►]       │
└──────────────────────────────────────────────────────────────────┘
```

**Comportamiento:**
- Desktop: navbar fija arriba, transparent sobre el hero, blanca con sombra suave al scrollear
- Mobile: hamburger menu que despliega un drawer lateral
- El botón "Escribime" en la navbar es verde WhatsApp — siempre visible
- Scroll suave (smooth scroll) hacia las anclas al hacer click en los links

**Anclas de navegación:**
| Link | Ancla |
|------|-------|
| Servicios | `#servicios` |
| Galería | `#galeria` |
| Proceso | `#proceso` |
| Contacto | `#contacto` |

---

### Mapa de Secciones

```
┌──────────────────────────────────┐
│         NAVBAR                   │  sticky, transparent → blanca
├──────────────────────────────────┤
│  1. HERO                         │  Foto principal + CTA WhatsApp
├──────────────────────────────────┤
│  2. SERVICIOS                    │  3 cards: Mascotas / Paisajes / Fundas
├──────────────────────────────────┤
│  3. PROCESO                      │  5 pasos numerados
├──────────────────────────────────┤
│  4. GALERÍA                      │  Grid con filtros (Mascotas/Paisajes/Fundas)
├──────────────────────────────────┤
│  5. TESTIMONIOS                  │  3–4 testimonios reales
├──────────────────────────────────┤
│  6. FAQ                          │  Accordion, 5–7 preguntas
├──────────────────────────────────┤
│  7. CONTACTO / FOOTER            │  WhatsApp + Instagram + datos
└──────────────────────────────────┘
         [WhatsApp Flotante]        ← siempre visible, esquina inf. derecha
```

### Consideraciones Mobile

- Breakpoints principales: `375px` (iPhone SE), `390px` (iPhone 14), `768px` (tablet), `1280px` (desktop)
- Todas las secciones diseñadas **mobile-first** — se expanden para desktop
- El grid de Servicios (3 columnas desktop) colapsa a **1 columna en mobile** con scroll vertical
- La galería usa **2 columnas en mobile**, 3 en tablet, 4 en desktop
- Los pasos del Proceso en mobile son **verticales con línea conectora lateral** (no horizontal)
- El botón WhatsApp flotante: `56px × 56px` con shadow suave, siempre visible
- Nunca usar hover como único mecanismo de interacción (mobile no tiene hover real)

---

## 4. Wireframe Textual por Sección

---

### Sección 1 — HERO

**Layout:** Full viewport height. Split horizontal: 60% foto / 40% texto en desktop. Full stack (foto de fondo con overlay) en mobile.

```
┌─────────────────────────────────────────────────────────────────┐
│ NAVBAR: SAC_ART        Servicios  Galería  Proceso  Contacto    │
│                                                    [Escribime►] │
├────────────────────────────────┬────────────────────────────────┤
│                                │                                │
│                                │  Cormorant Garamond 300        │
│   [FOTO PRINCIPAL:             │  *Cada retrato,*               │
│    retrato de mascota          │  *una historia.*               │
│    reciente, bien              │                                │
│    iluminado, ocupa            │  DM Sans 16px                  │
│    el 60% del ancho            │  Pinturas en acrílico sobre    │
│    a la izquierda]             │  tela hechas desde tu foto     │
│                                │  favorita. Mascotas, paisajes  │
│                                │  y fundas personalizadas.      │
│                                │                                │
│                                │  [● Encargá el tuyo por WA]   │
│                                │  (botón terracota, grande)     │
│                                │                                │
│                                │  ─────────────────────         │
│                                │  ↓ Ver trabajos                │
│                                │  (link ancla a galería)        │
└────────────────────────────────┴────────────────────────────────┘
```

**Elementos clave:**
- La foto tiene que ser la mejor obra disponible — idealmente un retrato de mascota con fondo neutro o natural que muestre la calidad del trazo
- El heading principal en Cormorant Garamond 300 italic — impacto suave, poético
- Subheading en DM Sans 16px, máximo 2 líneas, sin tecnicismos
- Un único CTA principal: botón terracota grande que abre WhatsApp con mensaje pre-cargado
- Flecha / chevron abajo que invite al scroll (desaparece al scrollear)

**Copy sugerido:**

> **Heading:** *Cada retrato, una historia.*
>
> **Subheading:** Pinturas en acrílico sobre tela hechas desde tu foto favorita. Mascotas, paisajes y fundas con diseño único.
>
> **CTA:** Encargá el tuyo por WhatsApp

**Mobile:** La foto ocupa el 100% del ancho, el texto y CTA se apilan debajo sobre fondo crema.

---

### Sección 2 — SERVICIOS

**Layout:** Heading centrado + 3 cards en fila (desktop) / columna (mobile). Fondo blanco roto (#FFFFFF).

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              [ Cormorant 48px — "¿Qué hacemos?" ]               │
│       [ DM Sans — "Tres formas de llevar el arte a tu vida" ]   │
│                                                                 │
├───────────────────┬───────────────────┬─────────────────────────┤
│                   │                   │                         │
│  [foto retrato    │  [foto paisaje    │  [mockup funda          │
│   mascota]        │   acuarelado]     │   celular]              │
│                   │                   │                         │
│  Retratos de      │  Paisajes         │  Fundas                 │
│  Mascotas         │                   │  Personalizadas         │
│                   │  Desde una foto   │                         │
│  Acrílico sobre   │  o de memoria,    │  Tu mascota siempre     │
│  tela. Tu perro,  │  paisajes en      │  con vos. Diseño        │
│  gato o cualquier │  acrílico que     │  único, impresión       │
│  mascota pintada  │  capturan la luz  │  de calidad.            │
│  con amor.        │  y la atmósfera.  │                         │
│                   │                   │                         │
│  Desde $18.000    │  Desde $22.000    │  Desde $12.000          │
│  [Ver más ↓]      │  [Ver más ↓]      │  [Ver más ↓]            │
│                   │                   │                         │
│  [Consultá ►]     │  [Consultá ►]     │  [Consultá ►]           │
└───────────────────┴───────────────────┴─────────────────────────┘
```

**Elementos clave:**
- Cada card tiene foto, título (Cormorant H3), descripción (DM Sans 15px), precio visible en DM Sans 700, y dos CTAs: "Ver más" (ancla a galería filtrada) y "Consultá" (WhatsApp)
- El precio SIEMPRE visible — reduce fricción y filtra consultas sin intención real
- Cards con borde suave (border-radius 12px), shadow muy leve, hover eleva la card (transform translateY)
- Badge especial en la card de Mascotas: `✦ MÁS PEDIDO` en terracota

**Copy sugerido por card:**

| Card | Título | Descripción | Precio |
|------|--------|-------------|--------|
| Mascotas | Retratos de Mascotas | Acrílico sobre tela. Tu perro, gato o cualquier mascota pintada con amor desde tu foto favorita. | Desde $18.000 |
| Paisajes | Paisajes | Paisajes en acrílico que capturan la luz y la atmósfera de un lugar que te importa. | Desde $22.000 |
| Fundas | Fundas Personalizadas | Tu mascota siempre con vos. Diseño único basado en tu foto, impresión de alta calidad. | Desde $12.000 |

> **Nota de producto especial:** Al pie de las cards, agregar un bloque sutilmente diferenciado (fondo lavanda muy claro) para el retrato memorial:
>
> *"Para los que ya no están pero viven en nuestro corazón — retratos memorial con un cuidado especial."*
> [Consultame ►]

---

### Sección 3 — CÓMO FUNCIONA / PROCESO

**Layout:** Fondo crema (#FAF8F3). Heading centrado. 5 pasos en fila horizontal con iconos y línea conectora (desktop) / vertical con línea lateral (mobile).

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│           [ "¿Cómo es el proceso?" — Cormorant 48px ]           │
│   [ "Simple, claro, y con vos en el centro." — DM Sans 16px ]   │
│                                                                 │
│                                                                 │
│  ①──────────②──────────③──────────④──────────⑤               │
│  │          │          │          │          │                 │
│ [icon]    [icon]     [icon]     [icon]     [icon]              │
│                                                                 │
│  Hablamos   Elegís      Pintamos   Te enviamos  ¡A disfrutar!   │
│  por WA    el tamaño   con amor   el avance    Envío a todo     │
│            y formato             del trabajo   el país         │
│                                                                 │
│  Contame    Definimos   Cada obra   Una foto     Envío por      │
│  de tu      juntos el   lleva entre intermedia   correo o       │
│  mascota    tamaño,     5 y 20 días  para que     retiro en     │
│  y qué      soporte y   según la    puedas pedir persona        │
│  querés.    precio.     complejidad. cambios.    (CABA/GBA).    │
│                                                                 │
│                    [Empezá ahora por WA ►]                      │
│                    (botón terracota centrado)                   │
└─────────────────────────────────────────────────────────────────┘
```

**Los 5 pasos con copy final:**

| # | Ícono | Título | Descripción |
|---|-------|--------|-------------|
| 1 | 💬 | Hablamos por WhatsApp | Contame de tu mascota, qué querés representar, y te asesoro sin compromiso. |
| 2 | 📐 | Elegís tamaño y soporte | Definimos juntos el tamaño, el soporte (tela, cartón entelado) y el precio. |
| 3 | 🎨 | Pintamos con amor | Cada obra lleva entre 5 y 20 días según complejidad. Trabajo artesanal, sin apuros. |
| 4 | 📸 | Te mostramos el avance | Antes de terminar, te envío una foto para que puedas pedir ajustes. |
| 5 | 📦 | ¡A disfrutarlo! | Envío a todo el país. Retiro en persona disponible en CABA / GBA. |

**CTA al pie:** Botón terracota grande y centrado — "Empezá tu encargo ahora"

---

### Sección 4 — GALERÍA

**Layout:** Fondo blanco. Heading centrado. Barra de filtros. Grid masonry o uniform grid.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│               [ "Trabajos" — Cormorant 48px ]                   │
│                                                                 │
│    [ Todos ]  [ Mascotas ]  [ Paisajes ]  [ Fundas ]            │
│    ━━━━━━━━━━━━━━━━━━━                                          │
│    (filtro activo: underline terracota)                         │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │          │  │          │  │          │  │          │       │
│  │ Obra 1   │  │ Obra 2   │  │ Obra 3   │  │ Obra 4   │       │
│  │          │  │          │  │          │  │          │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │          │  │          │  │          │  │          │       │
│  │ Obra 5   │  │ Obra 6   │  │ Obra 7   │  │ Obra 8   │       │
│  │          │  │          │  │          │  │          │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                 │
│                     [ Ver más trabajos ]                        │
│                     (load more, no nueva página)               │
└─────────────────────────────────────────────────────────────────┘
```

**Elementos clave:**
- Filtros: **Todos / Mascotas / Paisajes / Fundas** — el filtro activo tiene underline terracota y peso mayor
- Grid: 4 columnas desktop, 3 tablet, 2 mobile
- Cada foto al hacer hover muestra overlay oscuro suave con el título de la obra y categoría
- Al hacer click abre **lightbox** con la obra grande y botón "Encargá uno igual →" (WhatsApp)
- Feature especial: algunas cards pueden tener el modo **"antes/después"** — foto de referencia → pintura terminada (toggle o slider horizontal)
- "Ver más" carga 8 fotos más sin recargar página (lazy load / infinite scroll o botón)
- Las fundas de celular se muestran como **mockup** (foto de la funda puesta en un celular real, no solo el diseño plano)

**Categorías de filtro y contenido mínimo recomendado para el lanzamiento:**

| Categoría | Cantidad mínima sugerida |
|-----------|--------------------------|
| Mascotas | 8–12 obras |
| Paisajes | 4–6 obras |
| Fundas | 6–8 diseños |

---

### Sección 5 — TESTIMONIOS

**Layout:** Fondo terracota muy suave (#FDF0E8 — derivado desaturado). 3 tarjetas de testimonio en fila o carrusel en mobile.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         [ "Lo que dicen los que ya tienen el suyo" ]            │
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐  │
│  │                  │  │                  │  │              │  │
│  │ [foto obra]      │  │ [foto obra]      │  │ [foto obra]  │  │
│  │                  │  │                  │  │              │  │
│  │ "Quedé sin       │  │ "Lo recibí y no  │  │ "Mi mamá     │  │
│  │  palabras. Es    │  │  lo podía creer  │  │  lloró de    │  │
│  │  exactamente     │  │  — la calidad    │  │  emoción     │  │
│  │  como es mi      │  │  es increíble."  │  │  cuando lo   │  │
│  │  Simba."         │  │                  │  │  vio."       │  │
│  │                  │  │                  │  │              │  │
│  │  ★★★★★           │  │  ★★★★★           │  │  ★★★★★       │  │
│  │  — Laura P.      │  │  — Marcos S.     │  │  — Carla M.  │  │
│  │  Retrato 30×40   │  │  Funda iPhone    │  │  Memorial    │  │
│  │                  │  │                  │  │  40×50       │  │
│  └──────────────────┘  └──────────────────┘  └──────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Elementos clave:**
- Cada testimonio incluye: foto de la obra (no del cliente, salvo que dé permiso), quote, nombre (puede ser solo nombre + inicial), stars (★★★★★), y tipo de producto
- El testimonio del retrato memorial va al final y con tratamiento visual especial (fondo ligeramente diferente, copy más emocional)
- En mobile: carrusel con swipe, dots de paginación

**Copy sugerido para generar testimonios** (para pedirle a clientes existentes):
> *"¿Me podrías contar en 2 líneas qué te pareció la obra? ¿Cómo te sentiste cuando la recibiste?"*

---

### Sección 6 — FAQ

**Layout:** Fondo crema (#FAF8F3). Dos columnas desktop (heading izquierda, accordion derecha) / una columna mobile.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [ Preguntas     │  ┌────────────────────────────────────────┐ │
│    frecuentes ]  │  │ ¿Cuánto tiempo lleva una pintura?   ▼ │ │
│                  │  └────────────────────────────────────────┘ │
│  [ Cormorant     │  ┌────────────────────────────────────────┐ │
│    40px ]        │  │ Depende del tamaño y la              ▲ │ │
│                  │  │ complejidad, pero generalmente        │ │
│  "Cualquier      │  │ entre 5 y 20 días. Te informo         │ │
│  duda, estoy     │  │ el plazo exacto al confirmar          │ │
│  en WhatsApp."   │  │ el encargo.                           │ │
│                  │  └────────────────────────────────────────┘ │
│  [Escribime ►]   │  ┌────────────────────────────────────────┐ │
│  (botón WA)      │  │ ¿Cómo mando la foto?                ▼ │ │
│                  │  └────────────────────────────────────────┘ │
│                  │  ┌────────────────────────────────────────┐ │
│                  │  │ ¿Hacés envíos al interior?          ▼ │ │
│                  │  └────────────────────────────────────────┘ │
│                  │  ┌────────────────────────────────────────┐ │
│                  │  │ ¿Puedo pedir cambios?               ▼ │ │
│                  │  └────────────────────────────────────────┘ │
│                  │  ┌────────────────────────────────────────┐ │
│                  │  │ ¿Cómo es el pago?                   ▼ │ │
│                  │  └────────────────────────────────────────┘ │
│                  │  ┌────────────────────────────────────────┐ │
│                  │  │ ¿Hacés retratos de personas?        ▼ │ │
│                  │  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Preguntas y respuestas sugeridas:**

| Pregunta | Respuesta |
|----------|-----------|
| ¿Cuánto tiempo lleva? | Depende del tamaño y complejidad. Generalmente entre 5 y 20 días. Te informo el plazo exacto al confirmar el encargo. |
| ¿Cómo mando la foto? | Por WhatsApp. Idealmente una foto con buena luz y el animal mirando de frente o de perfil. No importa si es del celular — te ayudo a encontrar la mejor foto. |
| ¿Hacés envíos al interior? | Sí, a todo el país. Las obras viajan bien embaladas. El costo de envío depende del destino y se calcula al confirmar. |
| ¿Puedo pedir cambios? | Sí. Antes de terminar te mando una foto del avance para que puedas pedir ajustes. |
| ¿Cómo es el pago? | Se abona el 50% al confirmar y el 50% restante al finalizar, antes del envío. Transferencia bancaria o MercadoPago. |
| ¿Hacés retratos de personas también? | Por el momento me especializo en mascotas y paisajes. Para retratos de personas, consultame — evalúo caso por caso. |
| ¿Qué pasa si mi mascota falleció? | Hago retratos memorial con un cuidado especial. Entiendo lo que significa y trabajo con toda la dedicación que merece. Escribime cuando estés lista/o. |

---

### Sección 7 — CONTACTO / FOOTER

**Layout:** Fondo carbón (#2C2C2C) — único fondo oscuro del sitio, contrasta para cerrar visualmente. Dos bloques: contacto (izquierda) + links y créditos (derecha).

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  SAC_ART                        │  Navegación                  │
│  [logo o wordmark en crema]     │  Servicios / Galería /       │
│                                 │  Proceso / FAQ               │
│  "¿Tenés una idea en mente?     │                              │
│   Hablemos."                    │  Redes                       │
│                                 │  [@sac_artx en Instagram]    │
│  [Botón WhatsApp — verde]       │                              │
│  Escribime por WhatsApp →       │  Legal                       │
│                                 │  © 2026 SAC_ART              │
│  [Botón Instagram — outline]    │  Todos los derechos          │
│  @sac_artx →                    │  reservados                  │
│                                 │                              │
│  Tiempo de respuesta:           │                              │
│  generalmente menos de 24hs     │                              │
│  (lunes a sábado)               │                              │
│                                 │                              │
└─────────────────────────────────────────────────────────────────┘
```

**Elementos clave:**
- El footer oscuro es el único elemento oscuro del sitio — sirve como "cierre visual" que delimita el final
- El botón WhatsApp es el CTA más prominente del footer
- "Tiempo de respuesta" reduce ansiedad en el usuario antes de escribir
- No incluir formulario de contacto — aumenta la fricción. WhatsApp + Instagram son suficientes para el negocio actual
- En mobile: todo en una columna, botones a ancho completo

---

### Elemento Siempre Visible — WhatsApp Flotante

```
┌─────────────────────────────────────────────────────────────────┐
│                                                    ┌──────────┐ │
│   [resto del sitio]                                │   [WA]   │ │
│                                                    │   icon   │ │
│                                                    └──────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

- Posición: `fixed`, `bottom: 24px`, `right: 24px`
- Tamaño: `56px × 56px`, circular, verde WhatsApp (#25D366)
- Shadow: `0 4px 16px rgba(37, 211, 102, 0.35)` — glow verde sutil
- Al hover: escala a 1.1 + tooltip "Escribime por WhatsApp"
- En mobile: tamaño `52px × 52px`
- Mensaje pre-cargado sugerido: `"Hola! Vi tu sitio y me gustaría encargar [tipo de obra]. Mi mascota es [...]"`

---

## 5. Interacciones Clave

### 5.1 Galería — Hover sobre card

```
Estado normal:
┌──────────┐
│          │
│  [foto]  │
│          │
└──────────┘

Estado hover:
┌──────────┐
│[dim 40%] │
│  Retrato │  ← título en blanco, Cormorant italic
│ Mascotas │  ← categoría en DM Sans 12px uppercase
│[Encargá] │  ← botón ghost blanco aparece
└──────────┘
```

- Transición: `opacity 0.3s ease`, `transform: scale(1.02) 0.3s ease`
- El overlay usa `background: rgba(44, 44, 44, 0.45)` — no negro total
- El texto del overlay entra con `translateY(8px) → translateY(0)` con delay 50ms

### 5.2 Galería — Lightbox

Al hacer click en una imagen:
1. Background overlay `rgba(0,0,0,0.85)` fade-in 200ms
2. La imagen escala al 90% del viewport (máximo 1200px de ancho)
3. Controles: `←` `→` para navegar, `✕` para cerrar (también `Escape`)
4. Al pie de la imagen en lightbox: Título de la obra + categoría + botón "Encargá uno así →" (WhatsApp, terracota)
5. Para cards con antes/después: toggle button en el lightbox que hace flip de la imagen (referencia ↔ pintura)

### 5.3 Filtros de Galería

```
Click en filtro "Mascotas":
- Botón activo: underline terracota + DM Sans Medium
- Cards de otras categorías: fade-out (opacity 0, scale 0.95) + colapso suave
- Cards de Mascotas: permanecen + redistribuyen en el grid con animación
- Transición total: 300ms con `cubic-bezier(0.4, 0, 0.2, 1)`
```

### 5.4 Animaciones de Scroll (Sutiles)

> **Regla de oro:** las animaciones no deben distraer. Son para dar ritmo al scroll, no para impresionar.

| Elemento | Animación | Duración |
|----------|-----------|----------|
| Sección headings | `fadeInUp` (translateY 20px → 0, opacity 0 → 1) | 500ms |
| Cards de servicio | `fadeInUp` con stagger de 100ms por card | 400ms |
| Pasos del proceso | Aparecen de izquierda a derecha con 80ms de stagger | 350ms |
| Items de galería | `fadeIn` (sin translate — evita layout shift) | 300ms |
| Testimonios | `fadeInUp` con stagger 150ms | 400ms |

- Implementar con `IntersectionObserver` API nativa — sin librerías pesadas
- `prefers-reduced-motion`: si el usuario tiene activada esta preferencia, **cero animaciones** — accesibilidad primero
- Ninguna animación tarda más de 600ms

### 5.5 Navbar — Comportamiento de Scroll

```
0px de scroll:
  → navbar transparente, logo y links en color crema (sobre foto)

> 80px de scroll:
  → navbar fija, fondo blanco, shadow suave (box-shadow: 0 2px 16px rgba(0,0,0,0.08))
  → logo y links cambian a carbón (#2C2C2C)
  → transición: background 200ms ease, box-shadow 200ms ease
```

### 5.6 Cards de Servicio — Hover

```
Estado normal: card en fondo blanco, shadow sutil
Estado hover:  card sube 4px (translateY(-4px)), shadow más pronunciada
              borde izquierdo aparece en terracota (4px solid #C4714F)
Transición: transform + box-shadow + border 200ms ease
```

---

## 6. Stack Técnico Recomendado

### Decisión central: simplicidad > sofisticación

SAC_ART necesita un sitio que:
1. Se pueda actualizar fácilmente (agregar fotos a la galería sin tocar código)
2. Cargue rápido en mobile con 4G argentino (puede ser inestable)
3. Tenga costo de hosting mínimo o cero
4. No requiera mantenimiento técnico constante

Con esas prioridades, la elección es:

---

### Frontend — Astro

```
Framework: Astro 5.x
https://astro.build
```

**Por qué Astro:**
- Genera HTML estático puro — máxima velocidad, cero JavaScript innecesario en el cliente
- Puede usar componentes de React/Svelte/Vue si se necesita algo interactivo (filtros de galería, lightbox)
- Excelente soporte para imágenes (optimización automática, WebP, lazy loading)
- Deploy trivial a cualquier CDN

**Alternativa evaluada:** Next.js
- Pros: más conocido, más opciones
- Contras: overkill para un one-page, mayor bundle size, SSR innecesario para contenido estático

---

### CMS — Contentful (plan free) o Decap CMS

Para que SAC_ART pueda subir fotos nuevas a la galería sin tocar código:

#### Opción A — Contentful (Recomendada para escalar)

```
CMS: Contentful
https://www.contentful.com
Plan: Free (hasta 5 usuarios, suficiente para este caso)
```

- Interface visual drag & drop para subir fotos
- SAC_ART puede agregar obras desde el celular
- API REST / GraphQL que Astro consume al hacer el build
- Tipos de contenido sugeridos: `Obra` (foto, título, categoría, descripción, destacada: boolean)

#### Opción B — Decap CMS (antes Netlify CMS)

```
CMS: Decap CMS
https://decapcms.org
Costo: Gratuito, open source
```

- Se instala directamente en el repo
- Interface similar a WordPress pero más liviana
- Archivos Markdown + imágenes guardadas en el repo Git
- No requiere cuenta externa

**Recomendación:** Contentful para el MVP si el presupuesto lo permite (es free). Decap si se quiere todo en un solo lugar.

---

### Deploy — Vercel o Netlify

```
Hosting: Vercel (recomendado) o Netlify
Costo: Plan gratuito — suficiente para este proyecto
CDN: Global, incluido en el plan free
SSL: Automático (HTTPS)
Dominio: Conectar dominio propio (sacart.com.ar o similar)
```

**Por qué Vercel:**
- Deploy automático al pushear a GitHub (CI/CD zero-config)
- Optimización de imágenes incluida
- Analytics básicos gratuitos
- Preview deployments para ver cambios antes de publicar

---

### Galería e Imágenes — Cloudinary

```
Servicio: Cloudinary
https://cloudinary.com
Plan: Free (hasta 25GB de almacenamiento)
```

- Optimización automática de imágenes (WebP, AVIF según navegador)
- Transformaciones on-the-fly (resize, crop, quality)
- Las URLs de Contentful se pueden pasar por Cloudinary para optimizar
- Alternativa: usar Astro Image component nativo (suficiente para MVP)

---

### Resumen del Stack

| Capa | Herramienta | Costo | Por qué |
|------|-------------|-------|---------|
| Framework | Astro 5 | Gratis | Static, rápido, simple |
| CMS | Contentful free | Gratis | SAC_ART puede actualizar sin código |
| Hosting | Vercel | Gratis | CI/CD automático, CDN global |
| Imágenes | Astro Image / Cloudinary | Gratis | Optimización automática |
| Dominio | NIC Argentina (.com.ar) | ~$1.500/año | Presencia local, confianza |
| Formulario/CTA | WhatsApp Business API | Gratis | Canal natural del negocio |
| Analytics | Vercel Analytics | Gratis (básico) | Ver de dónde viene el tráfico |

**Costo total mensual del sitio: $0** (salvo el dominio ~$125/mes amortizado)

---

## 7. Fases de Desarrollo

### Fase 1 — MVP (Lanzamiento)

**Objetivo:** Sitio funcional y publicado en 2–3 semanas. Cubre el 90% de las necesidades del negocio hoy.

| Feature | Descripción | Prioridad |
|---------|-------------|-----------|
| Navbar sticky | Logo + links + CTA WhatsApp | Must have |
| Hero | Foto + heading + CTA | Must have |
| Sección Servicios | 3 cards con precio visible | Must have |
| Proceso (5 pasos) | Strip horizontal/vertical | Must have |
| Galería con filtros | Grid 4 col + filtros básicos | Must have |
| Lightbox | Click en foto → modal grande | Must have |
| Testimonios | 3 cards estáticas | Must have |
| FAQ | Accordion 6–7 preguntas | Must have |
| Footer + Contacto | WhatsApp + Instagram | Must have |
| WhatsApp flotante | Botón fixed, siempre visible | Must have |
| Mobile responsive | Breakpoints principales | Must have |
| Retrato memorial | Bloque especial en servicios | Must have |
| Optimización imágenes | WebP + lazy loading | Must have |
| Animaciones de scroll | Fade-in suave | Should have |

**Tiempo estimado de desarrollo: 2–3 semanas** (un desarrollador frontend)

---

### Fase 2 — Nice to Have (Post-lanzamiento)

**Objetivo:** Mejoras de conversión y experiencia. Implementar a medida que el negocio crezca.

| Feature | Descripción | Valor | Complejidad |
|---------|-------------|-------|-------------|
| Antes/Después en galería | Toggle foto referencia ↔ pintura | Alto | Media |
| CMS conectado | SAC_ART sube fotos desde panel | Alto | Media |
| Instagram feed automático | Últimas fotos de @sac_artx en vivo | Medio | Baja |
| Calculadora de precios | Seleccionar tamaño → ver precio | Alto | Alta |
| WhatsApp Business API | Mensaje pre-cargado con datos del servicio | Medio | Baja |
| Blog / Process Journal | Posts cortos mostrando el proceso | Bajo | Media |
| SEO avanzado | Schema.org, Open Graph, meta tags | Medio | Baja |
| Google Analytics 4 | Métricas detalladas de comportamiento | Medio | Baja |
| Pop-up de bienvenida | Descuento en primer encargo | Medio | Media |
| Formulario de encargo | Formulario estructurado pre-WA | Bajo | Media |

---

### Hoja de Ruta Visual

```
SEMANA 1–2        SEMANA 3          SEMANA 4+         FUTURO
━━━━━━━━━━━━━     ━━━━━━━━━━━━━     ━━━━━━━━━━━━━     ━━━━━━━━━━━━━
Setup + Base      Contenido +       QA + Deploy       Iteración
━━━━━━━━━━━━━     ━━━━━━━━━━━━━     ━━━━━━━━━━━━━     ━━━━━━━━━━━━━
• Astro setup     • Galería con     • Mobile QA       • CMS live
• Diseño tokens     fotos reales    • Performance     • Antes/después
• Navbar          • Testimonios       test            • Analytics
• Hero              reales          • Dominio         • SEO avanzado
• Servicios       • FAQ             • Deploy a
• Proceso           definitivo        Vercel
• Footer          • WhatsApp        • Smoke test
                    pre-cargado
```

---

## Apéndice — Checklist de Assets Necesarios

Antes de arrancar el desarrollo, SAC_ART necesita preparar estos materiales:

### Imágenes (mínimo para lanzar)

- [ ] **Hero:** 1 foto horizontal de la mejor obra (min. 1600×900px, bien iluminada)
- [ ] **Galería Mascotas:** 8–12 fotos de retratos terminados (min. 800×800px c/u)
- [ ] **Galería Paisajes:** 4–6 fotos de paisajes terminados
- [ ] **Galería Fundas:** 6–8 mockups de fundas (foto en celular real, buena luz)
- [ ] **Proceso:** 2–3 fotos "en proceso" (pincel, paleta, obra a medias) — da autenticidad
- [ ] **Memorial:** 1 foto especial que transmita emoción (una obra memorial terminada)

### Texto y Datos

- [ ] Precios actualizados por categoría y tamaño
- [ ] Número de WhatsApp Business activo
- [ ] 3–4 testimonios reales (nombre + quote + permiso de uso)
- [ ] Respuestas al FAQ (basarse en el texto de este documento, ajustar según realidad)
- [ ] Logo o wordmark (tipografía del nombre de la marca)

### Técnico

- [ ] Dominio elegido y comprado (sacart.com.ar / sac-art.com.ar / sacart.ar)
- [ ] Cuenta en Vercel o Netlify
- [ ] Cuenta en Contentful (si se usa CMS)
- [ ] Cuenta de GitHub para el repositorio

---

*Propuesta preparada con base en research de referentes del nicho de arte de mascotas por comisión en Argentina y Latinoamérica. Incluye análisis de sitios como semamartin.com, naomijenkinart.com, crownandpaw.com y popyourpup.com.*

---

**¿Preguntas? ¿Querés ajustar alguna sección?**
Este documento es el punto de partida — puede y debe evolucionar con el feedback de SAC_ART.
