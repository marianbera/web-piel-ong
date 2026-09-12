# PENDIENTES PIEL

Consolidado de todos los `TODO(PIEL)` del código. Son decisiones o entregas que dependen del cliente (PIEL) para poder publicar. Agrupados por tema.

> Generado a partir de la migración de contenido (fuente: `CONTENIDO-FUENTE-PIEL.md`).

---

## 1. Cifras (RESUELTO — observaciones 2026)

- **38 años de trayectoria** y **más de 6.000 pacientes tratados**, unificado en todo el sitio.
- **Dirección:** Av. Palaá 536, Avellaneda, Provincia de Buenos Aires.
- **Nombre del fundador:** Dr. **Ricardo** Bennun (antes figuraba "Roberto").

## 2. Especialidades (14 vs 11)

- El diagrama del cliente menciona **"las 14 especialidades"**, pero el doc 3.2 lista **11**. El roster del Equipo (2.4) suma otras (anestesiología, nutrición, kinesiología, dermatología, mecánica dental, instrumentación). **Confirmar el set final.**
  - `especialidades.ts` · `navigation.ts`.

## 3. Contenido faltante (SIN DOC entregado — no inventar)

- **Prensa** (`/quienes-somos/prensa`): el doc 2.5 solo dice "agregar todas las notas en medios". Página con EmptyState + CTA de contacto de prensa hasta recibir las notas.
- **Investigación y academia** (`/tratamiento/investigacion`): el diagrama pide Cátedra UBA · publicaciones · congresos, pero no hay texto. La página ya publica **la estructura** de los tres bloques con `sections/PendingSections`; falta el texto de cada uno (`investigacionContent.sections` en `tratamiento.ts`).
- **Info para médicos** (`/como-acceder/medicos`): el diagrama pide derivar un paciente · materiales · protocolos. Misma solución: estructura publicada, texto pendiente (`medicosContent.sections` en `como-acceder.ts`).
- ~~Perfiles de cirujanos principales~~ → el bloque "Dirección médica" se eliminó a pedido de PIEL: el staff arranca directo después de la bio del Dr. Bennun, con los cirujanos primero.
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

## 5. Logos

- ~~Guías y materiales~~ → la sección se eliminó a pedido de PIEL. `/pacientes/guias` redirige a Preguntas frecuentes.
- **Logos "Colaboran con nosotros"** (Nosotros) y **"Empresas que nos acompañan"** (Empresas):
  se cargan desde **`/panel` → Logos**, con los mismos logos de la página actual. Hasta
  entonces cada sección muestra un EmptyState.

## 6. Contacto, pagos y links

- **WhatsApp institucional:** `site.ts` tiene el placeholder `+54 9 11 0000-0000`. **Todos los CTA "por WhatsApp" dependen de esto.** Confirmar el número.
- **Mercado Pago — integración escrita y probada, faltan las credenciales.** Checkout Pro
  (donación por única vez) + registro de cada donación en `/panel/donaciones`.
  Paso a paso completo en **`MERCADOPAGO-PIEL.md`**. Falta:
  1. Crear la base **Neon Postgres** (Vercel → Storage) — inyecta `DATABASE_URL` sola.
  2. Sacar el **Access Token** de la cuenta de MP de la asociación.
  3. Configurar el **webhook** en MP y copiar su clave secreta (`MP_WEBHOOK_SECRET`).
  4. Probar con credenciales de TEST antes de pasar a producción.
  - Mientras tanto la página de Donar no muestra el formulario: avisa que falta habilitarlo.
  - **Queda afuera la donación mensual recurrente** (usa Suscripciones de MP, otro producto).
    La columna `frecuencia` ya está en la base para cuando se sume.
  - El botón **"Donar online"** de `sections/DonateBand` sigue detrás de `ONLINE_PAYMENTS_ENABLED`.
  - **A resolver con PIEL:** comisiones de MP (hay condiciones para ONGs), comprobantes
    fiscales de donación y política de privacidad (se guardan nombre y email de donantes).
- **Datos bancarios para transferencia (Donar):** faltan **CBU, alias, CUIT y banco**. Cargarlos en `datosBancarios`, en `lib/content/donar.ts`. Mientras estén vacíos, el bloque de transferencia no se muestra.
- **Baja del aporte mensual:** falta definir a qué correo se escribe. Cargarlo en `bajaAporteMensualEmail` (mismo archivo) y el aviso aparece bajo los montos.
- ~~Historias externas~~ → el CTA del Home ahora apunta a `/historias`, una página propia del sitio nuevo. Se carga desde `/panel` → Historias reales.
- **"Ver trayectoria completa"** del fundador (Equipo): falta el destino real (página/bio). Hoy apunta a `#`.
- ~~Ubicación~~ → resuelto: Av. Palaá 536, Avellaneda, Provincia de Buenos Aires, con mapa embebido en Pacientes de Argentina e Internacionales.

## 7. Nombre del fundador (RESUELTO)

- **Dr. Ricardo Bennun** en todo el sitio (corregido en las observaciones 2026; antes figuraba "Roberto").

## 8. Marca y diseño

- **Tipografía:** el brandbook pide **Pliant** (no está en Google Fonts y no tenemos el archivo). Mientras tanto: Playfair (títulos) + Inter (cuerpo). Pasar los `.woff2` de Pliant.
- **Paleta:** confirmar los hex exactos del brandbook (los actuales son la mejor lectura de los swatches).
- **Texturas:** incorporar las texturas raster del brandbook (papel claro + tela navy) cuando estén los archivos.
- **Íconos:** el brandbook pide Material Symbols + Health Icons; hoy usamos SVGs inline propios.
- **Tarjetas "Acceso / Ayudar"** (Home): el mockup usa verde/rosa; se mapearon a la paleta de marca (azul/burdeos). Confirmar si se quiere el verde/rosa exactos.
- **Nota "porqué del nombre PIEL"** (footer): el cliente quiere una nota que explique el porqué del nombre (logo retocado). Falta el texto.

---

## 9. Pendientes de las observaciones 2026

### Contenido que PIEL tiene que enviar
- **Respuestas de "Antes de tu primera consulta"** (Pacientes de Argentina): las cuatro
  que están publicadas son provisorias y remiten al equipo. Reemplazar en
  `primeraConsultaFaqs`, en `lib/content/como-acceder.ts`.
- **Investigación y academia:** completar las 3 cards (Cátedra UBA · publicaciones · congresos).
- **Alimentación y acompañamiento** en `/labio-leporino`: falta el contenido real de
  Nutrición y Fonoaudiología para ampliar ese bloque.
- **Fotos de especialidades:** hay una carpeta de Drive en el documento de observaciones.
  Antes de subirlas hay que consultar con PIEL cuál corresponde a cada sección.

### Bloques escritos pero SIN PUBLICAR (esperan aprobación)
Los dos están en `lib/content/como-acceder.ts` y no se renderizan hasta que se aprueben:
- **Proceso de admisión para pacientes del exterior** (4 pasos) → poner
  `PROCESO_INTERNACIONAL_CONFIRMADO = true`.
- **Protocolo junto a la Universidad de Oulu (Finlandia)** → a confirmar con el Dr. Bennun.
  El texto está guardado en `BULLET_OULU_PENDIENTE`; para publicarlo, sumarlo al array
  `bullets` de `internacionalContent`.

### Fotos del equipo
Están en retoque, se envían aparte. **Ya no hace falta tocar código**: se suben desde
`/panel` → Equipo médico. Ver `PANEL-PIEL.md`.

### ⚙️ Panel — pasos pendientes de infraestructura (Vercel)
1. **Crear el Blob Store**: proyecto web-piel → pestaña *Storage* → *Create Database* →
   *Blob* → conectar al proyecto. Vercel inyecta sola `BLOB_READ_WRITE_TOKEN`.
2. **Definir credenciales**: `ADMIN_USER`, `ADMIN_PASSWORD` y `ADMIN_SESSION_SECRET`
   en *Settings → Environment Variables* (Production).
3. **Redeploy**.

Hasta que eso esté, el sitio se ve perfecto pero el panel no puede guardar: avisa con un
mensaje explicando qué falta.

### Decisiones de implementación a revisar con PIEL
- **Textos justificados:** se aplican al cuerpo de texto desde 640 px de ancho. En
  celulares se dejan alineados a la izquierda a propósito: en columnas angostas el
  justificado abre "ríos" de espacio y se lee peor.
- **`/historias`:** la página existe y el CTA del Home ya apunta ahí, pero está vacía
  hasta que se carguen historias desde el panel.
- **Línea de tiempo del desarrollo:** se hizo una versión con íconos propios (chupete →
  juego → habla → libro). Queda para revisar con Juani, como pedía el documento.
