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

- **Prensa** (`/quienes-somos/prensa`): el doc 2.5 solo dice "agregar todas las notas en medios". Página con EmptyState hasta recibir las notas.
- **Investigación y academia** (`/tratamiento/investigacion`): el diagrama pide Cátedra UBA · publicaciones · congresos, pero no hay texto. EmptyState.
- **Info para médicos** (`/como-acceder/medicos`): el diagrama pide derivar un paciente · materiales · protocolos. EmptyState.
- **Perfiles de cirujanos principales** (`/quienes-somos/equipo`): pendientes de PIEL (EmptyState en el bloque de dirección médica).
- **Pacientes internacionales** (`/como-acceder/internacional`): el doc 5.2 corta en "Atención para familias del exterior…". Completar.
- **Premios**: completar con reconocimientos nuevos posteriores a 2018, si los hubiera.

## 4. Fotos e imágenes reales

**Ya cargadas ✅**
- Hero del Home, slide 1 y 2 → `public/brand/hero/`.
- Bloque humano "Cada tratamiento es una historia" → `public/brand/historias/`.

**Todavía con BrandPanel (placeholder de marca), a la espera de fotos:**
- Nosotros · Enfoque · Consultas · Especialidades (una por especialidad) · foto del fundador (Equipo).

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
