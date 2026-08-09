# SISTEMA DE DISEÑO — WEB PIEL

> Estándar visual único para todas las páginas internas del sitio (todo excepto la Home,
> que ya tiene su propio diseño aprobado). Referencia de **layout y estructura**:
> [gantz.cl](https://gantz.cl/) (Fundación Gantz, misma temática). **Los colores y la
> tipografía son los de la marca PIEL, no los de gantz.**

---

## 1. Filosofía

Sitio de un centro médico: limpio, blanco, aireado, formal y moderno. El color de marca
es **acento**, no relleno. Mucho espacio en blanco, jerarquía clara, un solo lenguaje de
cards / botones / encabezados en todo el sitio — sin importar qué página sea.

## 2. Superficies

- **Fondo por defecto: blanco.**
- Para separar bloques dentro de una página larga, alternar con **`bg-piel-offwhite`**
  (nunca gris).
- **Prohibido `bg-piel-cream` (beige) o el alias `bg-accent` como relleno de cards o
  secciones.** El crema queda reservado para usos puntuales de marca ya existentes
  fuera de este sistema (si aparece, migrar a blanco + `Card`).
- Tinte fuerte (navy sólido / `bg-piel-gradient-navy` / `bg-piel-halo`) solo en piezas
  puntuales de foco (ya usado en Home / `PageHeader`), no en secciones de contenido
  general.

## 3. Cards — `ui/Card.tsx`

**Un solo patrón de card en todo el sitio.** Usar el primitivo, no repetir clases a mano.

```
rounded-3xl · bg-white · shadow-sm · ring-1 ring-piel-navy/5
hover (solo si es clickeable): -translate-y-1 · shadow-xl · transition duration-300
padding: sm (p-5) / md (p-6, default) / lg (p-8)
```

- `Card` es polimórfico vía prop `as` (`div`, `li`, `a`...) y tipado con genéricos —
  acepta cualquier prop del elemento que reciba (`href`, `target`, `onClick`, etc.), sin
  `any`. Dos formas de hacer un card clickeable:
  1. Card grande = el link entero → `<Card as="a" href="..." hoverable className="block">`
     (usado en Prensa).
  2. Solo el CTA interno es el link, pero se quiere que todo el card reaccione → patrón
     "stretched link" ya usado en `AccessHelp`: `before:absolute before:inset-0` en el
     CTA, `relative` en el Card contenedor.
- **Tono:** por defecto `tone="white"`. `tone="offwhite"` es la única variante de
  superficie permitida, reservada para paneles "destacados" tipo hero dentro de una
  página (p. ej. el bloque del fundador en Equipo) — no usarla para grillas de cards
  comunes.
- Radio único: **`rounded-3xl`**. Ya se corrigió `StepsList` y `NumberedCards`, que
  usaban `rounded-2xl` mientras `SectionLinkCard` usaba `rounded-3xl`.
- Sombra hover única: **`hover:shadow-xl`** (antes había `hover:shadow-md` en algunos
  lugares).

**Reemplaza:** los `<div className="rounded-2xl bg-accent p-6">` sueltos en Premios,
Prensa, Guías, FAQ, Contacto (sidebar), Nosotros (Visión/Misión).

## 4. Encabezados de sección — `ui/SectionHeading.tsx`

Patrón estándar para todo `<h2>` de sección dentro de una página interna:

```
eyebrow?  → text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy
h2        → text-3xl font-bold text-piel-navy sm:text-4xl
accent?   → barra accent-bar-h de 4rem debajo (opcional, para secciones destacadas)
align     → left (default) | center
```

- Título de sección **siempre `text-piel-navy`**. Nunca `text-piel-blue` para títulos
  (encontramos `Timeline` con `text-primary`/azul — ya corregido).
- **Escala de tamaños de título del cuerpo** (subida un escalón completo respecto a la
  versión anterior de este documento, a pedido del cliente):
  - **Nivel 1** — encabezado principal de un bloque grande (`SectionHeading`, nombre del
    fundador en Equipo, `TextImageSplit` con `title`): `text-3xl sm:text-4xl`. Ahora
    coincide con el tamaño de los `h2` de Home — la jerarquía entre Home e internas ya
    no se distingue por tamaño de fuente, sino porque el H1 de Home es más grande y el
    hero de cada interna es propio.
  - **Nivel 2** — subtítulo repetido dentro de prosa (`ProseSections`), o título
    "gemelo" en un par de cards (Visión/Misión, filas de Especialidades):
    `text-2xl sm:text-3xl`.
  - **Nivel 3** — título de card en una grilla (`SectionLinkCard`, `NumberedCards`,
    `StepsList`, cards de Guías/Prensa/Nosotros-valores, bloques destacados de Enfoque,
    hitos de `Timeline`, cards de `ComoAccederSection`): `text-lg` o `text-xl` según el
    tamaño de la card (antes muchos estaban en `text-base`).
  - **Nivel 4** — etiqueta chica dentro de un panel angosto (sidebar de Contacto):
    `text-lg` (antes `text-base`).

## 5. Color de texto — dónde va cada uno

| Uso | Color |
|---|---|
| `h1` (PageHeader) | `text-piel-navy`, fuente serif (Playfair) |
| `h2`/`h3` de sección | `text-piel-navy`, fuente sans (Inter) |
| Cuerpo de texto | `text-piel-text/75` – `/80` |
| Eyebrow (label chico sobre un título) | `text-piel-burgundy`, uppercase, tracking amplio |
| `h1`/breadcrumb/subtítulo de `PageHeader` (fondo oscuro, ver §9) | blanco/gris claro: `text-white`, `text-white/70`, `text-gray-300` — **no** `text-piel-navy`/`text-piel-blue`, que no contrastan sobre foto oscura |
| Íconos decorativos sueltos | `text-piel-blue` o `text-piel-blue-soft` según contraste |

## 6. Botones y links — máximo 3 variantes

1. **Primario (navegar/confirmar):** `bg-piel-navy text-white rounded-full`, hover
   `bg-piel-navy/90`.
2. **Secundario/outline:** `border-2 border-piel-navy text-piel-navy rounded-full`,
   hover `bg-piel-navy text-white`.
3. **Conversión (donar/apadrinar/enviar formulario):** `bg-secondary` (burdeos)
   `text-white rounded-full`. Reservado para la acción de "dar algo" (plata, datos de
   contacto) — así se distingue de navegar.
4. **Link con flecha** (patrón dominante de gantz, úsalo por defecto para "ver más"):
   `text-piel-navy font-semibold` + `→` que se desplaza al hover
   (`group-hover:translate-x-1`).

**Prohibido:** `bg-primary` / `border-primary` / `text-primary` sueltos en botones o
links de navegación — ese alias (azul) quedaba mezclado con navy en distintos lugares
del sitio y era la causa principal de la inconsistencia. Ya corregido en `Navbar`,
`AmountSelector`, `ContactForm`, `DonationForm`.

## 7. Formularios

- Inputs: `rounded-full` (o `rounded-2xl` para `textarea`), `border border-piel-navy/20`,
  focus `ring-2 ring-piel-navy`.
- Selector de montos (pills): mismo lenguaje — activo `bg-piel-navy border-piel-navy
  text-white`; inactivo `border-piel-navy/25 text-piel-navy`.
- Estado de éxito: `Card` (blanco, no `bg-piel-cream`).
- Botón de envío: variante conversión (burdeos) — ya correcto en `ContactForm` /
  `DonationForm` / `NewsletterForm`, no tocar.

## 8. Badges de ícono

- Círculo con tinte suave: `bg-piel-blue-soft/30` (o `/40`), ícono `text-piel-navy`.
- Círculo destacado (diferenciales, hitos importantes): `bg-piel-gradient-navy`, ícono
  blanco.
- Un solo set de íconos: los SVG inline de `ui/icons.tsx`. No agregar librerías nuevas.

## 9. Imágenes

- Foto real → `rounded-3xl`, `object-cover`, `shadow-lg`/`shadow-xl`.
- Sin foto real → `ui/BrandPanel` (degradado de marca + formas). **Nunca imágenes
  inventadas ni placeholders de terceros.**
- **Hero de página (`ui/PageHeader`):** ya NO es el split 50/50 original. Ahora es una
  foto **full-bleed** (o `BrandPanel` en modo `fill` si no hay foto todavía) con un
  filtro oscuro (`bg-piel-navy/70`) encima para que el `h1` blanco siempre contraste.
  Breadcrumb + h1 + subtítulo van alineados a la izquierda, superpuestos a la imagen.
  Cada página puede pasar su propia foto vía `header.image = { src, alt, position? }`.

## 10. Ritmo y layout

- Contenedor: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Padding vertical de sección: `py-16 lg:py-24` (secciones grandes) o `py-16` simple
  para bloques de contenido dentro de una página ya encabezada por `PageHeader`.
- Grillas de cards: `gap-6`, `sm:grid-cols-2 lg:grid-cols-3` (o `lg:grid-cols-4` para
  ítems chicos tipo stats/diferenciales).
- **Patrón gantz a replicar en contenido narrativo:** bloques texto + imagen 50/50
  alternados (`sections/TextImageSplit`, ya existe) en vez de páginas de solo texto
  corrido, donde el contenido lo permita.
- **Ancho del texto de cuerpo: sangría a sangría, no full-bleed.** Los párrafos de
  intro, prosa (`ProseSections`), notas y textos de card **NO llevan `max-w-3xl` /
  `max-w-xl` / `max-w-2xl`** — ocupan el mismo ancho que el resto del contenido de la
  sección (`max-w-7xl` del contenedor padre, con el padding estándar). Esto es
  distinto de "full-bleed" (borde a borde de la pantalla): el texto sigue respetando
  el margen lateral del layout, solo deja de angostarse artificialmente más adentro.
  **Excepciones que SÍ mantienen un ancho angosto** (por una razón funcional, no por
  descuido): el `h1`/subtítulo del `PageHeader` (es un blurb de hero, no cuerpo de
  página — mirar la referencia de gantz), y los formularios (`ContactForm`,
  `DonationForm` — inputs muy anchos son difíciles de escanear).

## 11. Componentes ya consolidados (Fase 0)

| Componente | Estado |
|---|---|
| `ui/PageHeader` | 🔧 rediseñado a hero full-bleed: foto de fondo (o `BrandPanel`) + filtro oscuro + breadcrumb/h1/subtítulo en blanco, alineados a la izquierda (ver §9) |
| `ui/SectionLinkCard` | ✅ ya era `rounded-3xl bg-white` — sin cambios |
| `ui/EmptyState` | ✅ ya consolidado (card offwhite punteada + ícono) |
| `ui/BrandPanel` | ✅ sin cambios |
| `ui/RichText` | ✅ sin cambios |
| `ui/Card` **(nuevo)** | Primitivo genérico de card blanca |
| `ui/SectionHeading` **(nuevo)** | Primitivo de encabezado de sección |
| `sections/StepsList` | 🔧 unificado a `rounded-3xl` + `hover:shadow-xl` |
| `sections/NumberedCards` | 🔧 unificado a `rounded-3xl` + `hover:shadow-xl` |
| `sections/Timeline` | 🔧 título de hito: azul → navy |
| `sections/ComoAccederSection` | ✅ ya consolidado — sin cambios |
| `sections/ProseSections` | ✅ ya consolidado (acento lateral + navy) — sin cambios |
| `sections/HubSection` **(nuevo, Fase 1)** | Cuerpo estándar de los 5 hubs de sección (intro + grilla de 3 columnas) |
| `sections/FaqAccordion` **(nuevo, Fase 4)** | Acordeón de preguntas frecuentes sobre `Card as="details"` |
| `layout/Navbar` | 🔧 CTA, links y estados: azul → navy; hover de dropdown: beige → azul suave |
| `layout/Footer` | ✅ auditado, sin divergencias |
| `sections/ContactForm` | 🔧 inputs azul → navy; card de éxito: beige → `Card` |
| `sections/DonationForm` | 🔧 inputs azul → navy |
| `sections/AmountSelector` | 🔧 pills e input: azul → navy |

## 12. Loop de unificación — estado: completo ✅

Todas las fases del loop (0 a 7) se aplicaron. Barrido final sobre `src/` confirmado:
cero `bg-accent`, cero `bg-piel-cream`/`bg-piel-periwinkle` como relleno de card, cero
`bg-primary`/`border-primary`/`text-primary`/`ring-primary` sueltos. `npm run build`
pasa limpio (41 rutas, sin errores de tipos).

- ~~Nosotros, Premios, Prensa, Equipo~~ → migrados en Fase 2.
- ~~Enfoque~~ → migrado en Fase 3.
- ~~FAQ, Guías~~ → migrados en Fase 4.
- ~~ComoAccederSection (Argentina, Internacional, Obras sociales, Acceso, Consultas)~~
  → migrado en Fase 5.
- ~~Empresas~~ → migrado en Fase 6.
- ~~Contacto~~ → migrado en Fase 7 (sidebar `bg-accent`/`bg-piel-periwinkle` → `Card`).

**Componentes nuevos creados durante el loop:** `ui/Card` (polimórfico, con variante
`tone="offwhite"`), `ui/SectionHeading`, `sections/HubSection`, `sections/FaqAccordion`.

---

## 13. Recursos visuales de marca — `components/brand/`

Capa de decoración inspirada en las piezas gráficas de PIEL (folletos e Instagram),
para que los espacios en blanco tengan ritmo sin perder legibilidad.

**Regla de oro:** todo recurso es una capa `absolute` + `aria-hidden` +
`pointer-events-none` **detrás** del contenido, que viaja en un contenedor `relative`
por encima. Nada tapa texto. Opacidades: ≤ 0.12 (líneas) y ≤ 0.18 (grilla) donde hay
texto; hasta 0.6 solo en franjas separadoras sin lectura.

| Componente | Recurso | Props clave |
|---|---|---|
| `brand/GradientBackground` | Degradés `navy`, `burgundy`, `sky`, `warm`, `whisper` | `variant`, `angle`, `opacity`, `fade` |
| `brand/WarpGrid` | Malla de marca (SVG, onda senoidal determinista). `amplitude` alta = ondulada; `amplitude={0}` = grilla ortogonal | `cols`, `rows`, `amplitude`, `fade` |
| `brand/BlobShape` | `cross`, `ovals`, `star`, `blob`, `pill`, `arc` | `variant`, `color`, `rotate`, `float` |
| `brand/BlockLayers` | Las capas de identidad de cada bloque | `block`, `variant`, `intensity` |
| `brand/BlockDecor` | Igual, pero deduciendo el bloque de la ruta (cliente) | `variant`, `intensity` |
| `brand/BrandSection` | Sección con decoración de bloque + contenedor | `block`, `tone`, `intensity`, `padding` |
| `brand/BrandDivider` | Franja separadora entre secciones | `block`, `size` |

Los colores salen de `brand/tokens.ts`, que apunta a las variables de `globals.css`.
**No se define ningún hex nuevo.**

### Identidad por bloque de navegación

| Bloque | Recurso dominante | Carácter |
|---|---|---|
| Centro Médico (`/quienes-somos/*`) | Grilla **ortogonal** (`WarpGrid amplitude={0}`) + píldora orgánica; fondo casi neutro | Plano técnico, institucional |
| Tratamiento Integral (`/tratamiento/*`) | Degradé `sky` con disolución radial + arco orgánico | Cromático |
| Pacientes y familias (`/pacientes/*`, `/labio-leporino`) | Degradé `warm`, grilla **ondulada** y cruz orgánica burdeos | Cálido, redondeado |

> El patrón de líneas verticales ("código de barras") que tuvo Centro Médico en la
> primera versión **se eliminó de todo el sitio**: no funcionaba visualmente. El
> componente `LinePattern` ya no existe. La distinción entre los dos bloques con
> grilla la hace la amplitud (ortogonal vs. ondulada), el color y la ubicación.

La asignación es automática: `lib/brandBlock.ts` la deriva de la ruta. Las rutas fuera
de esos tres prefijos (Home, Cómo acceder, Sé parte, Contacto) no llevan decoración de bloque.

### Animación

**Framer Motion** es el único sistema de animación del sitio (`ui/Reveal` lo usa).
El flotado de las formas es CSS (`animate-piel-float`). Todo respeta
`prefers-reduced-motion`.

## 14. Primitivos agregados en el rediseño

| Componente | Para qué |
|---|---|
| `ui/PageBody` | Cuerpo estándar de una página interna: contenedor `max-w-7xl` + decoración del bloque. **Reemplaza** el `<section className="mx-auto max-w-7xl px-4 py-16 ...">` repetido a mano. Props: `tone`, `intensity`, `padding`, `decor` |
| `ui/ImageSlot` | Hueco de imagen de contenido: `next/image` si hay archivo, placeholder de marca si no |
| `sections/TeamCarousel` | Carousel de profesionales con auto-scroll, pausa al hover y botón de pausa (WCAG 2.2.2) |
| `sections/PendingSections` | Estructura anunciada de una página sin contenido todavía — mejor que un `EmptyState` genérico |
| `sections/ArticleChapter` | Capítulo de una página de recorrido largo (`/labio-leporino`): encabezado + secciones con párrafos, sub-ítems e imágenes |
| `sections/DonateBand` | Banda de donación (fuente 1.4) + lugar reservado para el pago online |
| `layout/SearchDialog` | Buscador del sitio (índice en `lib/search/`) |

### Ancho de lectura en páginas de artículo

§10 pide texto "sangría a sangría". `/labio-leporino` es la excepción declarada: al ser
un artículo de recorrido largo, el cuerpo va en una columna medida (`max-w-3xl`, ~70
caracteres) y las imágenes se van más anchas. El contraste entre esos dos anchos es lo
que le da ritmo al scroll. **Es una excepción funcional, como los formularios — no
extenderla a páginas de contenido normales.**

`ui/Card` sumó `radius="brand"` (2.5 rem, el radio de las piezas gráficas), **opt-in y
reservado a cards grandes y destacadas** — las grillas siguen en `rounded-3xl`.

---

**Regla de oro para lo que sigue:** antes de escribir una card, un botón o un
encabezado de sección a mano, revisar si `Card`, `SectionHeading`, `SectionLinkCard`,
`StepsList`, `NumberedCards`, `EmptyState`, `PageBody`, `ImageSlot` o
`ComoAccederSection` ya resuelven el caso.
