# Research Complementario: Portfolio para Artista de Retratos de Mascotas y Merchandise

> Este documento complementa `artist-portfolio-research.md`. Se enfoca específicamente en el perfil de **SAC_ARTX**: pintora de mascotas en acrílico, paisajes, y merchandise (fundas de celular). El target es un sitio de **Landing Page + Servicios + Galería**.

---

## Índice

1. [Por qué este perfil es diferente al portfolio de fine art](#por-qué-este-perfil-es-diferente)
2. [Paleta de Colores — El Error Crítico a Evitar](#paleta-de-colores)
3. [Estructura de Landing Page para Artistas de Comisiones](#estructura-de-landing-page)
4. [Sección de Servicios — Anatomía Completa](#sección-de-servicios)
5. [Flujo de Comisión — UX del Cliente](#flujo-de-comisión)
6. [Galería — Organización Específica para Mascotas](#galería-organización)
7. [Sección Merchandise / Fundas de Celular](#sección-merchandise)
8. [Patrones de Conversión Críticos](#patrones-de-conversión)
9. [Referencias Visuales Específicas](#referencias-visuales-específicas)
10. [Decisiones de Diseño Recomendadas para SAC_ARTX](#decisiones-finales)

---

## Por qué este perfil es diferente

El research anterior asume un portfolio de **fine art** (galería, exposiciones, coleccionistas). SAC_ARTX tiene un modelo completamente diferente:

| Aspecto | Fine Art Portfolio | SAC_ARTX (Comisiones + Merchandise) |
|---------|--------------------|------------------------------------|
| **Objetivo principal** | Mostrar obra, generar reputación | Convertir visita en comisión/venta |
| **Audiencia** | Coleccionistas, galeristas | Dueños de mascotas, regaladores |
| **Tono** | Elevado, distante, artístico | Cálido, cercano, emocional |
| **CTA** | "Ver más" / "Contactar" | "Encargar retrato" / "Ver precios" |
| **Paleta** | Oscura, sofisticada | Cálida, acogedora, friendly |
| **Estructura** | Galería primero | Servicios + Proceso + Galería |
| **Precio** | Generalmente oculto | SIEMPRE visible (reduce fricción) |

> **El error más común**: usar estética de galería oscura para un negocio de comisiones de mascotas. Comunica "caro e inaccesible" cuando necesita comunicar "accesible y con corazón".

---

## Paleta de Colores

### ❌ Qué NO usar para SAC_ARTX

El minimalismo oscuro (`#0A0A0A` + oro) del research anterior es INCORRECTO para este perfil.

```
#0A0A0A (negro profundo)     → Señal: "galería de lujo, no me contactes sin presupuesto"
Fondo oscuro + tipografía crema → Percepción: fino pero frío, intimidante para dueños de mascotas
```

### ✅ Paleta Recomendada — Cálida y Acogedora

**Opción A — Crema Artístico (Recomendada)**
```
Background principal:    #FAF8F3   (blanco hueso cálido)
Background secundario:   #F5EFE4   (lino suave)
Superficie cards:        #EDE8DF   (arena clara)
Texto principal:         #3D3530   (marrón oscuro cálido, no negro puro)
Texto secundario:        #7A6E65   (marrón gris)
Acento primario:         #C4714F   (terracota)
Acento secundario:       #8A9E8C   (sage verde apagado)
Acento hover:            #D4845F   (terracota claro)
Bordes:                  #DDD8CF   (beige grisáceo)
```

**Por qué funciona:**
- Los fondos crema contrastan perfectamente con los colores cálidos de pelaje (beige, marrón, naranja, blanco)
- El marrón oscuro como texto se siente "artístico" sin ser frío
- Terracota como acento complementa la paleta de acrílicos
- Conecta emocionalmente con el cliente (cálido, hogareño, confiable)

**Opción B — Pasteles Artísticos**
```
Background:              #FEFCF8   (blanco casi puro)
Acento primario:         #D4A5A5   (rosa palo / blush)
Acento secundario:       #B5C4B1   (sage)
Texto:                   #2C2826   (casi negro cálido)
Bordes:                  #EAE4DC   (beige muy suave)
```

**Regla absoluta:** No usar negro puro (`#000000`) ni blanco puro (`#FFFFFF`). Siempre versiones cálidas.

---

## Estructura de Landing Page

### Arquitectura Recomendada (One Page con Secciones)

```
/
├── [NAV]          Logo + Servicios | Galería | Proceso | Contacto
│
├── [HERO]         Una obra hero de mascota · Tagline · CTA "Encargá tu retrato"
│
├── [SERVICIOS]    3 tarjetas: Retratos de Mascotas | Paisajes | Fundas de Celular
│
├── [PROCESO]      4–5 pasos: Foto → Boceto → Confirmás → Se pinta → Te llega
│
├── [GALERÍA]      Grid masonry con filtros: Mascotas | Paisajes | Fundas
│
├── [TESTIMONIOS]  3–4 reviews con foto de la obra terminada + cliente satisfecho
│
├── [CTA FINAL]    "¿Querés inmortalizar a tu mascota?" + botón grande
│
└── [FOOTER]       Instagram | WhatsApp | Email | Copyright
```

### Hero — Diseño Específico

```
Layout recomendado: Split Screen
┌─────────────────────────┬──────────────────────────┐
│                         │                          │
│   [OBRA DE MASCOTA]     │  SAC_ARTX                 │
│   (acuarela/acrílico    │  Retratos · Paisajes      │
│    de perro o gato      │  Fundas Personalizadas    │
│    en formato portrait) │                          │
│                         │  "Cada mascota merece    │
│                         │   vivir para siempre"    │
│                         │                          │
│                         │  [Encargá tu retrato →]  │
│                         │  [Ver galería ↓]         │
└─────────────────────────┴──────────────────────────┘
```

**Alternativa mobile-first (más común):**
```
Imagen de obra a full width (16:9 o square)
Nombre del artista centrado (tipografía delicada)
Tagline breve
CTA prominente
Scroll indicator
```

**Tagline options para SAC_ARTX:**
- "Retratos de mascotas en acrílico · Únicos como ellas"
- "Arte que preserve los momentos que más querés"
- "Tu mascota, hecha arte"
- "Retratos, paisajes y más — hechos con amor"

---

## Sección de Servicios

Esta es la sección MÁS IMPORTANTE para un modelo de comisiones. Los artistas exitosos muestran TODO aquí.

### Estructura de Tarjeta de Servicio

```
┌─────────────────────────────┐
│   [Icono o foto del tipo]   │
│                             │
│   RETRATOS DE MASCOTAS      │
│                             │
│   Acrílico sobre lienzo     │
│   ─────────────────────     │
│   ✓ Perros, gatos, aves...  │
│   ✓ Fondo a elección        │
│   ✓ Foto de proceso         │
│   ✓ Entrega con certificado │
│                             │
│   Desde $XX               │
│   Entrega: 3–4 semanas      │
│                             │
│   [Encargar retrato →]      │
└─────────────────────────────┘
```

### Los 3 Servicios de SAC_ARTX

#### 1. Retratos de Mascotas
```
Información a mostrar:
├── Mediums: Acrílico sobre lienzo (su especialidad)
├── Qué incluye: 1 mascota base + precio por mascota adicional
├── Tamaños disponibles: 20x20 | 30x30 | 40x40 | personalizado
├── Fondo: color sólido / paisaje simple / transparente (PNG digital)
├── Extras: marco, certificado, caja presentación
├── Formato de entrega: físico (lienzo) o digital (archivo PNG/JPG)
├── Precio base visible: "Desde $XX"
├── Tiempo: "2–3 semanas"
└── Variantes: memorial portrait (mascota fallecida) — copy emocional especial
```

#### 2. Paisajes
```
Información a mostrar:
├── Estilo: impresionismo suave, paisajes locales o por encargo
├── Tamaños disponibles
├── Original vs impresión
├── Personalizado: "¿Tenés un lugar especial? Lo pintamos"
├── Precio base
└── Tiempo estimado
```

#### 3. Fundas de Celular
```
Información a mostrar:
├── Modelos compatibles (iPhone X-15, Samsung Galaxy, etc.)
├── Proceso: enviás foto → arte digital → funda impresa
├── Materiales: silicona blanda / rígida / con borde
├── Preview digital antes de imprimir
├── Precio fijo (no variable como pinturas)
└── Tiempo: más corto (1–2 semanas por ser digital)
```

### Tabla de Precios — Patrón Recomendado

Mostrar precios SIEMPRE. El 80% de artistas de comisiones exitosos los muestran abiertamente.

```markdown
| Servicio         | Tamaño    | 1 mascota | 2 mascotas | 3+ mascotas |
|-----------------|-----------|-----------|------------|-------------|
| Retrato acrílico | 20x20 cm  | $XX       | $XX        | Consultar   |
|                 | 30x30 cm  | $XX       | $XX        | Consultar   |
|                 | 40x40 cm  | $XX       | $XX        | Consultar   |
| Funda celular   | Estándar  | $XX       | —          | —           |
| Paisaje         | 30x40 cm  | $XX (desde) | —        | —           |
```

> **Por qué mostrar precios**: Reduce las consultas que no van a ningún lado. Los clientes calificados llegan más listos para comprar. Señala profesionalismo.

---

## Flujo de Comisión — UX del Cliente

### El "Cómo Funciona" — Patrón de 5 Pasos

Este strip debe estar SIEMPRE visible, idealmente con íconos ilustrativos:

```
[📷]          [✏️]           [✅]            [🎨]           [📦]
Enviás       Boceto         Aprobás        Se pinta       Recibís
tu foto   →  en 48hs    →  el diseño   →  con amor    →  con cariño
```

**Copy sugerido por paso:**
1. **Enviás tu foto** → "Mandanos la mejor foto de tu mascota por WhatsApp o Instagram"
2. **Boceto digital** → "En 48 horas recibís un adelanto de cómo va a quedar"
3. **Aprobás el diseño** → "Hacemos los ajustes que necesités hasta que sea perfecto"
4. **Se pinta** → "Empezamos el trabajo. Te mandamos fotos del proceso"
5. **Recibís tu obra** → "Enviamos a todo el país con embalaje seguro"

### Formulario de Contacto / Comisión

El formulario debe ser breve pero recoger lo esencial:

```
Campos necesarios:
├── Nombre completo
├── Email o WhatsApp (preferir WhatsApp para Argentina)
├── Tipo de servicio: [Retrato mascota | Paisaje | Funda celular]
├── Tamaño / modelo (según servicio)
├── Cantidad de mascotas (si aplica)
├── Adjuntar foto(s) — hasta 5 archivos
├── Fecha necesaria (¿es un regalo?)
└── Mensaje / notas adicionales
```

**Nota importante:** En Argentina, WhatsApp > Email para este tipo de negocio. Destacar el link de WhatsApp tan prominentemente como el formulario.

---

## Galería — Organización Específica para Mascotas

### Arquitectura de Filtros Recomendada

```
GALERÍA
├── [TODOS]
├── [MASCOTAS]     → sub: Perros | Gatos | Otros
├── [PAISAJES]
└── [FUNDAS]
```

### Consideraciones Específicas para Retratos de Mascotas

1. **Mostrar referencia → resultado**: Si es posible, alternar entre "foto original" y "obra terminada" en el hover o lightbox — ALTA conversión.

2. **Incluir el nombre de la mascota**: En el hover state, mostrar nombre de la mascota + raza. Humaniza la obra.

3. **Mostrar distintos estilos de fondo**: Fondos planos de color, fondos degradados, fondos pintados — el cliente necesita ver opciones.

4. **Memorial portraits separados**: Si hay retratos de mascotas fallecidas, marcarlos sutilmente. Copy emocional diferente.

5. **Fundas**: Mostrar mockup en el celular, no solo el arte plano.

### Hover State para Tarjeta de Mascota

```
Estado default:
┌─────────────────────────┐
│                         │
│   [RETRATO DE MASCOTA]  │
│                         │
└─────────────────────────┘

Estado hover (overlay suave, NO oscuro total):
┌─────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░  │  ← overlay suave crema 60%
│                         │
│   "Max"                 │  ← nombre de la mascota
│   Golden Retriever      │
│   Acrílico 30×30 cm     │
│                         │
│   [Ver obra →]          │
└─────────────────────────┘
```

> Para fondas: overlay con "Ver en celular →" y mockup 3D en el lightbox.

---

## Sección Merchandise / Fundas de Celular

Es importante separar conceptualmente las fundas de los retratos, ya que tienen:
- Proceso diferente (digital → impresión)
- Precio diferente (más bajo, fijo)
- Tiempo de entrega diferente (más corto)
- Target diferente (más informal, regalo más frecuente)

### Presentación Recomendada

```
┌────────────────────────────────────────────┐
│  FUNDAS PERSONALIZADAS                     │
│                                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │          │ │          │ │          │   │
│  │ [mockup] │ │ [mockup] │ │ [mockup] │   │
│  │ celular  │ │ celular  │ │ celular  │   │
│  │ con arte │ │ con arte │ │ con arte │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│                                            │
│  Tu mascota en tu celular.                 │
│  Te mandamos diseño digital en 48hs.       │
│                                            │
│  Desde $XX — Compatibles con iPhone y     │
│  Samsung. Enviamos a todo el país.         │
│                                            │
│  [Pedir la mía →]                         │
└────────────────────────────────────────────┘
```

---

## Patrones de Conversión Críticos

Estos patrones AUMENTAN conversiones y están presentes en los mejores portfolios de este tipo.

### 1. Social Proof — Testimonios con Obra + Foto

```
No es suficiente texto solo. El patrón que convierte:
┌────────────────────────────────────┐
│  [Foto de la obra terminada]       │
│  ─────────────────────────────     │
│  ⭐⭐⭐⭐⭐                          │
│  "No puedo creer cómo quedó Toto!  │
│   Exactamente como en la foto..."  │
│                                    │
│  — María G. · Buenos Aires         │
└────────────────────────────────────┘
```

### 2. Señal de Demanda / Wait List

Mostrar "turnos disponibles para X mes" genera urgencia y credibilidad.

```
🗓️ TURNOS DISPONIBLES
Próximos turnos: Abril 2025
¡Solo quedan 3 lugares este mes!
[Reservar turno →]
```

### 3. Guía de Fotos (Photo Guide)

Página o sección con "cómo sacarle la mejor foto a tu mascota". Beneficios:
- Educa al cliente antes de la consulta
- Reduce fotos inutilizables
- Genera confianza (señal de profesionalismo)
- Funciona como contenido SEO

**Contenido mínimo:**
- Luz natural, evitar flash
- Fondo simple (pared blanca o pasto)
- Altura de la mascota, no desde arriba
- Ojos bien visibles y enfocados
- Varias opciones de pose
- Resolución mínima recomendada

### 4. FAQ — Las 7 Preguntas que Siempre Hacen

```
1. ¿Qué pasa si mi mascota ya no está?
   → Copy delicado sobre memorial portraits

2. ¿Puedo pedir cambios si no me gusta el boceto?
   → Sí, hacemos los ajustes necesarios antes de pintar

3. ¿Cuánto tarda?
   → Depende del servicio (dar tiempos específicos)

4. ¿Cómo me llega el cuadro?
   → Embalaje seguro, envíos a todo el país

5. ¿Qué fotos necesito?
   → Link a photo guide

6. ¿Puedo pedir más de una mascota en el mismo cuadro?
   → Sí (precio extra)

7. ¿Hacen envíos internacionales?
   → (Si aplica)
```

### 5. Memorial Portrait — Sección / Copy Especial

Si SAC_ARTX hace retratos de mascotas fallecidas (muy común en este nicho):

```
Nota visual diferenciada — con borde delicado, copy emocional:

"¿Perdiste a tu compañero de vida?
 Los retratos memorial son una forma hermosa
 de tener siempre presente a quien tanto amaste."

[Contactanos →]
```

Nota: Este producto específico tiene mayor valor emocional y, por ende, mayor disposición a pagar. Debería tener un lugar propio, no mezclado con el catálogo general.

---

## Referencias Visuales Específicas

### Artistas para Estudiar

| Artista | URL | Por qué estudiarla |
|---------|-----|--------------------|
| **Sema Martin** | semamartin.com | Estructura de precios internacionales, waiting list |
| **Naomi Jenkin Art** | naomijenkinart.com | Separación clara por tipo de animal, galería por categorías |
| **Sophie Ella Fine Art** | sophieellafineart.com | Mini portraits como tier de entrada, reviews dedicados |
| **Tia Alysse Art** | tiaalysseart.com | Comisiones con múltiples mediums, proceso claro |
| **Jodi Tellier** | joditellier.com | Memorial portraits, múltiples revenue streams |
| **Purely Pet Portraits** | purelypetportraits.co.uk | La mejor página de /commission-process |
| **West & Willow** | westandwillow.com | Modelo digital-first, entonces→now, memorial portrait |
| **Crown & Paw** | crownandpaw.com | Merchandise (phone cases) + retratos bajo el mismo paraguas |
| **Pop Your Pup** | popyourpup.com | Landing específica para fundas de celular |

### Patrones de Color Encontrados en el Nicho

Los portfolios de pet portrait artists usan consistentemente:

```
Warmth signals: #FAF8F3, #F5EFE4, #EDE8DF (fondos)
Pet-tone accents: #C4714F terracota, #8A9E8C sage, #D4B896 arena
Never: negro puro, blanco frío, azules fríos
```

---

## Decisiones de Diseño Recomendadas para SAC_ARTX

| Aspecto | Recomendación | Razón |
|---------|--------------|-------|
| **Paleta** | Crema cálido + terracota + sage | Conecta con el arte de mascotas, cálido y accesible |
| **Tono visual** | Cálido, artesanal, con corazón | NO galería de lujo fría |
| **Tipografía** | Cormorant (headings) + DM Sans (body) | Serif elegante + sans legible warm |
| **Estructura** | Landing one-page: Hero → Servicios → Proceso → Galería → Contacto | Máximo flujo de conversión |
| **Precios** | VISIBLES, tabla clara | El 80% de artistas exitosos los muestran |
| **CTA primario** | "Encargá tu retrato" / "Contactanos por WhatsApp" | WhatsApp > email para Argentina |
| **Galería** | Masonry con filtros: Mascotas / Paisajes / Fundas | Organización por tipo de producto |
| **Galería hover** | Nombre mascota + técnica + "Ver obra" | Humaniza cada pieza |
| **Proceso** | Strip de 5 pasos con íconos | Reduce fricción del primer contacto |
| **Social proof** | Fotos de obra + testimonio + nombre | Más efectivo que solo texto |
| **FAQ** | Sección dedicada (mínimo 5 preguntas) | Reduce preguntas repetidas |
| **WhatsApp CTA** | Botón flotante siempre visible | La mayoría de consultas van a ir por ahí |
| **Fundas** | Mockups en celular, sección separada | Producto diferente = presentación diferente |
| **Memorial portraits** | Copy y visual diferenciado, si los hace | Alto valor emocional = mayor conversión |

---

## Diferencia Clave vs Research Anterior

El research anterior (`artist-portfolio-research.md`) es excelente para:
- Arquitectura técnica (GSAP, Lenis, animaciones)
- Tipografía y escala
- Grid y layout de galería
- Stack tecnológico (Next.js + Sanity)

Este complemento aporta lo que faltaba:
- **Paleta correcta** para este tipo de artista
- **Sección de servicios** con estructura real de comisiones
- **Flujo de conversión** específico para encargos
- **UX de WhatsApp** (crítico para Argentina)
- **Organización de galería** para mascotas + merchandise
- **Patrones de conversión** del nicho (FAQ, memorial, photo guide)

Usá los dos documentos juntos para tomar decisiones de diseño.

---

*Research adicional realizado — Marzo 2026*
*Fuentes: semamartin.com, naomijenkinart.com, tiaalysseart.com, joditellier.com, sophieellafineart.com, pet-portraitartist.com, purelypetportraits.co.uk, crownandpaw.com, popyourpup.com, purrandmutt.com, westandwillow.com, empoweredartists.co, sniffdesign.com*
