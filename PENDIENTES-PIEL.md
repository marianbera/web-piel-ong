# PENDIENTES PIEL

Consolidado de todos los `TODO(PIEL)` del código. Son decisiones o entregas que dependen del cliente (PIEL) para poder publicar. Agrupados por tema.

> Generado a partir de la migración de contenido (fuente: `CONTENIDO-FUENTE-PIEL.md`).

---

## 1. Cifras a confirmar / actualizar a 2026

- **Años de experiencia:** en todo el sitio dice "más de 35 años" (según los docs). Confirmar el número exacto para 2026.
  - `navigation.ts` (descripción de Historia) · `home.ts` (hero de stats + diferencial) · `nosotros.ts` (intro) · `tratamiento.ts` (enfoque) · `como-acceder.ts` (internacionales) · `donar.ts` · `Footer.tsx`.
- **Cantidad de pacientes tratados — INCONSISTENCIA:** el Home e Internacionales dicen **"5.000"**; Nosotros dice **"6.500"**. Definir la cifra oficial y unificar.
  - `home.ts` (stat +5.000) · `nosotros.ts` (intro, 6.500) · `como-acceder.ts` (internacionales, 5.000).

## 2. Especialidades (14 vs 11)

- El diagrama del cliente menciona **"las 14 especialidades"**, pero el doc 3.2 lista **11**. El roster del Equipo (2.4) suma otras (anestesiología, nutrición, kinesiología, dermatología, mecánica dental, instrumentación). **Confirmar el set final.**
  - `especialidades.ts` · `navigation.ts`.

## 3. Contenido faltante (SIN DOC entregado — no inventar)

- **Prensa** (`/quienes-somos/prensa`): el doc 2.5 solo dice "agregar todas las notas en medios". Página con EmptyState + CTA de contacto de prensa hasta recibir las notas.
- **Investigación y academia** (`/tratamiento/investigacion`): el diagrama pide Cátedra UBA · publicaciones · congresos, pero no hay texto. La página ya publica **la estructura** de los tres bloques con `sections/PendingSections`; falta el texto de cada uno (`investigacionContent.sections` en `tratamiento.ts`).
- **Info para médicos** (`/como-acceder/medicos`): el diagrama pide derivar un paciente · materiales · protocolos. Misma solución: estructura publicada, texto pendiente (`medicosContent.sections` en `como-acceder.ts`).
- **Perfiles de cirujanos principales** (`/quienes-somos/equipo`): pendientes de PIEL (EmptyState en el bloque de dirección médica).
- **Pacientes internacionales** (`/como-acceder/internacional`): el doc 5.2 corta en "Atención para familias del exterior…". **Todo lo demás del doc ya está migrado** — falta solo el final de ese párrafo.
- **Premios**: completar con reconocimientos nuevos posteriores a 2018, si los hubiera.

> Para completar cualquiera de estas páginas: cargar los ítems en el array `sections`
> del content file correspondiente. En cuanto `sections.length > 0`, la página muestra
> el contenido real y deja de mostrar la estructura "en preparación". No hay que tocar
> el `page.tsx`.

## 4. Fotos e imágenes reales

**Ya cargadas ✅**
- Hero del Home, slide 1 y 2 → `public/brand/hero/`.
- Bloque humano "Cada tratamiento es una historia" → `public/brand/historias/`.

**Todavía con BrandPanel (placeholder de marca), a la espera de fotos:**
- Nosotros · Enfoque · Consultas · Especialidades (una por especialidad) · foto del fundador (Equipo).

**Huecos de imagen nuevos, con brief escrito y placeholder elegante:**
- `public/pacientes/` → **7 imágenes** (2 ilustraciones médicas en Qué es la fisura, 2 de apoyo
  en Cuidados, 2 en Alimentación, 1 destacada panorámica en Acompañamiento).
  Lista completa y formato en **`public/pacientes/LEEME.md`**.
  Para activar una: dejar el archivo en la ruta y borrar `pending: true` en
  `src/lib/content/pacientesImagenes.ts`.
- `public/equipo/` → **22 retratos** de los profesionales del carousel de Equipo (4:5 vertical).
  Lista nombre → archivo en **`public/equipo/LEEME.md`**.
  Para activar uno: agregar `photo: "/equipo/<archivo>.jpg"` al profesional en `quienes-somos.ts`.
  Mientras tanto la card muestra las iniciales sobre el degradé de marca.
- `public/labio-leporino/` → **5 imágenes** de la página de recorrido largo. Cuatro ya están
  conectadas (`tipos-de-fisura.jpg`, `reparacion-unilateral.jpg`, `reparacion-bilateral.jpg`,
  `operacion-paladar.jpg`): **con dejar el archivo en la carpeta, aparecen** — hasta entonces
  esos cuatro marcos quedan rotos. La quinta (`alimentacion.jpg`) está en `pending` y muestra
  placeholder. Detalle en **`public/labio-leporino/LEEME.md`**.
- **Consentimiento:** las fotos de pacientes, familias y profesionales necesitan autorización
  de uso de imagen antes de publicarse.

**Notas**
- Las imágenes viejas de `public/brand/*.jpeg` **no son usables como foto**: son placas promocionales de Instagram con texto incrustado y cifras equivocadas.
- **Peso de los originales:** `slide-1-que-es-piel.jpg` pesa ~12,5 MB (6000×4000) y `cada-tratamiento-es-una-historia.jpg` ~5 MB (3744×5616). Next.js las optimiza al servirlas, pero conviene reducirlas a ~2560 px de lado mayor para aligerar el repo y los builds.
- **Imágenes que el doc menciona pero no fueron entregadas:** `tratamiento-1.png`, `tratamiento-2.png`.

## 5. Guías, PDFs y logos

- **Guías y materiales** (`/pacientes/guias`): los 4 PDFs quedan con `href="#"` ("Disponible próximamente") hasta recibir los archivos reales.
- **Logos "Colaboran con nosotros"** (Nosotros): EmptyState hasta recibir los logos.
- **Logos "Empresas que nos acompañan"** (Empresas): EmptyState hasta recibir los logos.

## 6. Contacto, pagos y links

- **WhatsApp institucional:** `site.ts` tiene el placeholder `+54 9 11 0000-0000`. **Todos los CTA "por WhatsApp" dependen de esto.** Confirmar el número.
- **Mercado Pago:** configurar los links de pago en variables de entorno (`MP_DONATION_LINK_INDIVIDUAL` / `_APADRINAMIENTO` / `_EMPRESA`).
  - El lugar del botón **"Donar online"** ya está reservado en `sections/DonateBand` (Home y Sé parte). Cuando la pasarela esté conectada, poner `ONLINE_PAYMENTS_ENABLED = true` en ese archivo y el botón aparece en su hueco, sin rediseñar nada. Se deja apagado a propósito: un botón de donación que no cobra es peor que no tenerlo.
- **Historias:** confirmar que la sección externa `asociacion-piel.org.ar/web/historias/` siga vigente (CTA del bloque humano del Home).
- **"Ver trayectoria completa"** del fundador (Equipo): falta el destino real (página/bio). Hoy apunta a `#`.
- **Ubicación:** el mockup del footer dice "Atención en CABA", pero la sede registrada es **Avellaneda**. Confirmar.

## 7. Nombre del fundador (RESUELTO)

- Unificado a **"Dr. Roberto Bennun"** en todo el sitio (decisión del cliente). El doc traía variantes: "Ricardo D. Bennun" (Premios), "Bennun Ricardo" (roster). Confirmar con PIEL si corresponde.

## 8. Marca y diseño

- **Tipografía:** el brandbook pide **Pliant** (no está en Google Fonts y no tenemos el archivo). Mientras tanto: Playfair (títulos) + Inter (cuerpo). Pasar los `.woff2` de Pliant.
- **Paleta:** confirmar los hex exactos del brandbook (los actuales son la mejor lectura de los swatches).
- **Texturas:** incorporar las texturas raster del brandbook (papel claro + tela navy) cuando estén los archivos.
- **Íconos:** el brandbook pide Material Symbols + Health Icons; hoy usamos SVGs inline propios.
- **Tarjetas "Acceso / Ayudar"** (Home): el mockup usa verde/rosa; se mapearon a la paleta de marca (azul/burdeos). Confirmar si se quiere el verde/rosa exactos.
- **Nota "porqué del nombre PIEL"** (footer): el cliente quiere una nota que explique el porqué del nombre (logo retocado). Falta el texto.
