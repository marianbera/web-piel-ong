# PENDIENTES PIEL

Consolidado de todos los `TODO(PIEL)` del código. Son decisiones o entregas que dependen del cliente (PIEL) para poder publicar. Agrupados por tema.

> Generado a partir de la migración de contenido (fuente: `CONTENIDO-FUENTE-PIEL.md`).

---

## 1. Cifras (RESUELTO — observaciones 2026)

- **38 años de trayectoria** y **más de 6.000 pacientes tratados**, unificado en todo el sitio.
- **Dirección:** Av. Palaá 536, Avellaneda, Provincia de Buenos Aires.
- **Nombre del fundador:** Dr. **Ricardo** Bennun (antes figuraba "Roberto").

## 2. Especialidades (RESUELTO — última ronda)

- PIEL pasó el listado final: **15 especialidades** (`especialidades.ts`). Se sacaron
  Psicopedagogía, Genética y Asistencia social (hoy no están en PIEL) y Neonatología
  (no figura en el listado). La card del hub dice "Las 15 especialidades" y el texto de
  Historia nombra solo especialidades vigentes.
- **Descripciones a revisar por PIEL:** las de Anestesiología, Instrumentación
  quirúrgica, Cirugía traumatológica, Odontología, Kinesiología, Nutrición, Dermatología
  y Mecánica dental se escribieron cortas y genéricas porque no había texto entregado.

## 3. Contenido faltante (SIN DOC entregado — no inventar)

- ~~Prensa~~ → resuelto: se cargaron las 3 notas y 6 videos del sitio actual (noticias + videos del home), enlazando a la publicación original de cada medio. Quedó afuera "Puentes de esperanza": el video ya no existe en YouTube. Se editan desde `/panel` → Prensa.
- **Info para médicos** (`/como-acceder/medicos`): el diagrama pide derivar un paciente · materiales · protocolos. Misma solución: estructura publicada, texto pendiente (`medicosContent.sections` en `como-acceder.ts`).
- ~~Perfiles de cirujanos principales~~ → el bloque "Dirección médica" se eliminó a pedido de PIEL: el staff arranca directo después de la bio del Dr. Bennun, con los cirujanos primero.
- **Pacientes internacionales** (`/como-acceder/internacional`): el doc 5.2 corta en "Atención para familias del exterior…". **Todo lo demás del doc ya está migrado** — falta solo el final de ese párrafo.
- **Premios**: se sumó la placa de la ABFLP (São Paulo, septiembre 2026), tomada del
  comunicado de prensa que llegó en la última ronda. Faltan los reconocimientos
  2019–2025, si los hubiera. Los **premios científicos** (1994–2001) están en una
  sección aparte de la misma página (`premiosContent.scientific`); a diferencia de la
  lista institucional, **no se editan desde el panel**.
- **Investigación y academia**: las 3 cards tienen los textos corregidos por PIEL en la
  última ronda. El contenido fuente no tenía más bloques que esos tres.

> Para completar cualquiera de estas páginas: cargar los ítems en el array `sections`
> del content file correspondiente. En cuanto `sections.length > 0`, la página muestra
> el contenido real y deja de mostrar la estructura "en preparación". No hay que tocar
> el `page.tsx`.

## 4. Fotos e imágenes reales

**Ya cargadas ✅**
- Hero del Home, slide 1 y 2 → `public/brand/hero/`.
- Bloque humano "Cada tratamiento es una historia" → `public/brand/historias/`.
- **Equipo** → `public/equipo/`: Dr. Ricardo Bennun (card grande del fundador con
  `ricardo-bennun.jpg`; en el staff, el recorte de busto `ricardo-bennun-retrato.jpg`) y
  las **12 fotos de la última ronda**: Astrada, Camacho, Novoa, Moggi, Ventorutti,
  Carrizo, Henrichsen, Giorgi, Urban Rodríguez, Ávila, Miloro y N. Carmona. Son retratos
  circulares sobre blanco, recortados al círculo para que la cara llene la tarjeta.
- **Nosotros** (fachada de la sede) → `public/nosotros/sede.jpg`.
- **Nuestro enfoque** → la kinesióloga con un bebé (`especialidades/kinesiologia.jpg`).
  PIEL pidió sacar la foto de la nena; el link que mandaron para Enfoque es el mismo que
  el de Kinesiología, así que las dos secciones comparten la foto.
- **Especialidades** → `public/especialidades/`: Cirugía cráneo-maxilo-facial (Dr. Bennun
  con un bebé), Odontopediatría, Ortodoncia, Otorrinolaringología, Fonoaudiología,
  Kinesiología, Psicología y Pediatría (la misma foto del Home). Las de ORL, Fono y Kine
  son las que eligió PIEL (llegaron en HEIC; se convirtieron a JPG).
- **Acompañamiento** → `pacientes/acompanamiento/consultorio.jpg`: la escena de
  consultorio de Psicología, recortada en 21:9 (PIEL pidió algo que "dé más centro médico").
- **Cuidados** (estimulación temprana) → `public/pacientes/`. La otra foto de Cuidados
  (postura para alimentar) reusa la del Home, `slide-2-sumate.jpg`.
- **Sé parte** → `public/se-parte/`: el nene con el globo (header del hub y pie de Donar),
  la nena entre flores (Apadrinar) y la nena en la sala de juegos (Empresas).

Todas se exportaron sin metadatos: las fotos de iPhone traían la ubicación GPS.

**Pendientes de PIEL**
- **Header de Sé parte:** el link "HEADER" de la última ronda apuntaba a un comunicado de
  prensa (Word), no a una foto. Mientras tanto se usa la foto de Donar. Pedir la correcta.
- **Apadrinar:** la foto llegó chica (687 × 617 px). Se ve bien en la columna, pero
  conviene pedir el original.
- **Equipo — 9 fotos que faltan:** Yannibelli, Azurduy Wayar, Echagüe Vila,
  Langsam, Romero, S. Carmona, Basualdo, Gantner y Spizzirri. La tabla de PIEL marca
  varias como "SÍ" (ya sacadas), pero no estaban en la carpeta de Drive. Se suben desde
  `/panel` → Equipo médico. Detalle en **`public/equipo/LEEME.md`**.
- **Especialidades sin foto:** Instrumentación quirúrgica, Cirugía traumatológica,
  Odontología, Nutrición, Dermatología y Mecánica dental (muestran el panel de marca con
  su ícono). Anestesiología ya tiene la suya (`especialidades/anestesia.jpg`).
- `public/labio-leporino/` → las **4 ilustraciones** ya están cargadas y se muestran sin
  recuadro, a todo el ancho de la columna y con su proporción real. Son chicas (~770 px
  de ancho): si PIEL tiene versiones en mayor resolución, conviene reemplazarlas. Detalle
  en **`public/labio-leporino/LEEME.md`**.
- **Consentimiento:** las fotos de pacientes, familias y profesionales necesitan autorización
  de uso de imagen antes de publicarse.

**Imágenes generadas con IA:** en la tanda de prueba había 10 con la marca C2PA de OpenAI.
No se publicó ninguna (la de Neonatología se fue junto con la especialidad): mostrar
chicos generados por IA como pacientes reales puede engañar a las familias.

**Notas**
- Las imágenes viejas de `public/brand/*.jpeg` **no son usables como foto**: son placas promocionales de Instagram con texto incrustado y cifras equivocadas.
- **Peso de los originales:** `slide-1-que-es-piel.jpg` pesa ~12,5 MB (6000×4000) y `cada-tratamiento-es-una-historia.jpg` ~5 MB (3744×5616). Next.js las optimiza al servirlas, pero conviene reducirlas a ~2560 px de lado mayor para aligerar el repo y los builds.
- **Imágenes que el doc menciona pero no fueron entregadas:** `tratamiento-1.png`, `tratamiento-2.png`.

## 5. Logos

Todos los logos se muestran en **tarjetas blancas del mismo tamaño**, con el logo contenido
y a opacidad completa (antes, sueltos, unos se veían cortados y otros lavados). Si un logo
no tiene archivo, la tarjeta muestra el nombre.

- ~~Guías y materiales~~ → la sección se eliminó a pedido de PIEL. `/pacientes/guias` redirige a Preguntas frecuentes.
- **Colaboran con nosotros** (Nosotros): los 9 logos del sitio actual, en
  `public/colaboradores/`. Al del Journal of Craniofacial Surgery se le recortó la franja
  rosa. Son archivos chicos (~350 px): si PIEL consigue versiones mejores, conviene cambiarlos.
- **Empresas que nos acompañan** (Sé parte → Empresas): las **20 empresas** de la última
  ronda, en `public/empresas/`. PIEL no mandó archivos: se bajaron de Wikimedia Commons o
  del sitio oficial de cada una.
  - **Con el nombre en vez de logo (5):** Ribeiro (cerró su sitio), Sintyal (sin sitio),
    Raffo y Biosystems (sus sitios bloquean la descarga) y **Grupo G.F.A. S.A.**: gfa.com.ar
    es "Gonzalez Fischer & Asociados" y no se pudo confirmar que sea la misma empresa.
  - PerkinElmer hoy se llama Revvity; se usó el logo de PerkinElmer porque es con el que
    trabajó PIEL.
- **Obras sociales y cobertura** (Cómo acceder): tarjetas con logo. OSDE, Omint, Medifé,
  Jerárquicos Salud y Osmédica, en `public/obras-sociales/`. **Etica+ y OSCHOCA** van con el
  nombre: de OSCHOCA solo hay un banner de baja resolución, y no se pudo confirmar que
  Etica+ sea "Ética Salud". El panel tiene un campo de logo nuevo para cargarlos.
- **Ojo si el Blob Store ya existe:** logos, prensa, coberturas y equipo son el contenido
  inicial. Si alguien ya guardó esas secciones desde el panel, se sigue viendo lo guardado
  (sin las fotos, logos ni cambios nuevos) y hay que cargarlos a mano.

## 6. Contacto, pagos y links

- **WhatsApp institucional:** `site.ts` tiene el placeholder `+54 9 11 0000-0000`. **Todos los CTA "por WhatsApp" dependen de esto.** Confirmar el número.
- **Mercado Pago — integración escrita, falta la infraestructura.** Modelo pedido por PIEL
  (nov. 2026): **todo mensual, con montos fijos** ($3.000 / $6.000 / $12.000, sin "otro
  monto") y **duración** (6 meses, 12 meses o sin fecha de fin). Registro de todo en
  `/panel/donaciones`. Paso a paso en **`MERCADOPAGO-PIEL.md`**; la puesta en marcha en
  Azure, con las variables exactas, en **`HANDOFF.md`**. Falta:
  1. Conectar la base **Neon Postgres** (`DATABASE_URL`).
  2. Cargar el **Access Token** de producción (`MP_ACCESS_TOKEN`) en Azure.
  3. Configurar el **webhook** en MP con la **URL final de Azure** y los eventos **Pagos** y
     **Planes y suscripciones**, y cargar su clave secreta (`MP_WEBHOOK_SECRET`).
  4. Probar el recorrido completo (ver HANDOFF.md, sección 8).
  - **No se configura nada en Vercel:** el sitio se migra a Azure App Service.
  - **A confirmar con PIEL:** si quieren también la **donación por única vez** (escrita y
    apagada: `DONACION_UNICA_HABILITADA` en `lib/content/donar.ts`) y qué **duraciones**
    ofrecer.
  - **Planes PADRINAZGO:** PIEL tiene planes creados en MP que hoy no se usan. Si quieren
    que las suscripciones nuevas entren en esos planes, hacen falta sus links
    (TODO en `crearSuscripcion`, `lib/donaciones/mercadopago.ts`).
  - Mientras tanto la página de Donar no muestra el formulario: avisa que falta habilitarlo.
  - El aporte mensual pide que la persona **ingrese con su cuenta de Mercado Pago**
    (requisito de MP). El formulario lo avisa.
  - El botón **"Donar online"** de `sections/DonateBand` sigue detrás de `ONLINE_PAYMENTS_ENABLED`.
  - **A resolver con PIEL:** comisiones de MP (hay condiciones para ONGs), comprobantes
    fiscales de donación y política de privacidad (se guardan nombre y email de donantes).
- **Datos bancarios para transferencia (Donar):** faltan **CBU, alias, CUIT y banco**. Cargarlos en `datosBancarios`, en `lib/content/donar.ts`. Mientras estén vacíos, el bloque de transferencia no se muestra.
- **Baja del aporte mensual:** hoy el formulario dice que se da de baja desde la cuenta de
  Mercado Pago (es cierto y funciona sin nada más). Falta definir si además se ofrece un
  correo: cargarlo en `bajaAporteMensualEmail` (mismo archivo) y el aviso lo suma.
- ~~Historias externas~~ → el CTA del Home ahora apunta a `/historias`, una página propia del sitio nuevo. Se carga desde `/panel` → Historias reales.
- ~~"Ver trayectoria completa"~~ → resuelto: lleva al bloque "Trayectoria" de la misma
  página de Equipo (posgrado, doctorado y cargos que pasó PIEL).
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
- ~~Investigación y academia~~ → resuelto: las 3 cards tienen los textos corregidos por PIEL.
- **Alimentación y acompañamiento** en `/labio-leporino`: falta el contenido real de
  Nutrición y Fonoaudiología para ampliar ese bloque.
- ~~Fotos de especialidades~~ → PIEL asignó Fonoaudiología, Kinesiología y ORL en la
  última ronda. Las que siguen sin foto están en la sección 4.

### Bloques escritos pero SIN PUBLICAR (esperan aprobación)
Los dos están en `lib/content/como-acceder.ts` y no se renderizan hasta que se aprueben:
- **Proceso de admisión para pacientes del exterior** (4 pasos) → poner
  `PROCESO_INTERNACIONAL_CONFIRMADO = true`.
- **Protocolo junto a la Universidad de Oulu (Finlandia)** → a confirmar con el Dr. Bennun.
  El texto está guardado en `BULLET_OULU_PENDIENTE`; para publicarlo, sumarlo al array
  `bullets` de `internacionalContent`.

### Fotos del equipo
Llegaron 12 en la última ronda y ya están publicadas. Faltan 9 (lista en la sección 4).
**No hace falta tocar código**: se suben desde `/panel` → Equipo médico. Ver `PANEL-PIEL.md`.
Formato: cuadradas, con la persona centrada; la tarjeta las muestra en círculo.

### ⚙️ Panel — pasos pendientes de infraestructura (Azure)
El sitio se migra a **Azure App Service** (ver `HANDOFF.md`). Falta:
1. **Decidir dónde guarda el panel su contenido.** Hoy es Vercel Blob
   (`BLOB_READ_WRITE_TOKEN`): o se crea un Blob Store en Vercel solo como almacenamiento,
   o se pasa a Azure Blob Storage. Detalle en `HANDOFF.md`, sección 6.
2. **Definir credenciales**: `ADMIN_USER`, `ADMIN_PASSWORD` y `ADMIN_SESSION_SECRET`
   en las variables de la app en Azure.
3. **Reiniciar / redesplegar** el App Service.

Hasta que eso esté, el sitio se ve perfecto pero el panel no puede guardar: avisa con un
mensaje explicando qué falta.

---

## 10. Ronda de cambios de contenido (noviembre 2026)

**Aplicado**
- **Definición institucional** oficial ("P.I.E.L. (Plástica Infantil con Excelencia en el
  Logro) es un centro de referencia…") en el hero y el bloque "Quiénes somos" del Home,
  la intro del hub de Quiénes somos y la bajada de Nosotros.
- **Visión y Misión** nuevas en Nosotros.
- **Colaboran con nosotros:** salió la Fundación Gantz; entraron AFLAPyCRA, Colgate,
  Red Abanderados y Herrod Foundation (2008–2024). Colgate usa el logo de
  Colgate-Palmolive que ya estaba en `public/empresas/`. En Premios, el subsidio de la
  Fundación Herrod pasó de "2008 – actualidad" a **2008 – 2024**.
- **Premios científicos** (2001, 1998, 1996, 1995, 1994) en una sección nueva de Premios.
- **Dr. Bennun:** bloque "Trayectoria" en Equipo con estudios de posgrado, doctorado y cargos.
- **Equipo:** en "Cirugía y anestesia" salió Aliberti y entró ORL (Azurduy Wayar); en
  "Especialidades médicas" salió ORL y entró Nutrición (N. Carmona, que estaba en
  Rehabilitación).

**Pendiente de PIEL**
- **Logos** de AFLAPyCRA, Red Abanderados y Herrod Foundation: mientras tanto la tarjeta
  muestra el nombre. Se cargan desde `/panel` → Logos.
- **Herrod en Colaboran:** confirmar que va ahí además de en Premios (se interpretó así
  porque el pedido indicaba su período dentro de "Colaboran").
- **Bio del Dr. Bennun:** dice "Exdirector del Servicio de Cirugía Plástica del Garrahan",
  pero el cargo que pasaron en ese servicio es "Médico Principal" (1988–1998). Confirmar.
- **Secciones nuevas** (`TODO: contenido PIEL` en el código):
  - **Club de la Familia** → sección de Acompañamiento (`acompanamientoContent` en
    `pacientes.ts`), ya con foto (`pacientes/acompanamiento/club-de-la-familia.jpg`).
    Falta el contenido ampliado y confirmar el nombre ("Club de la Familia" vs. "Club de
    Familias").
  - **Anestesia** → tarjeta de Anestesiología en Especialidades, ya con foto
    (`especialidades/anestesia.jpg`). El texto sigue siendo provisorio.
  - **Libros** → tarjetas con tapa en Investigación y academia
    (`investigacionContent.books` en `tratamiento.ts`, tapas en `public/investigacion/`).
    El de inglés es el atlas de Wiley-Blackwell (2015), confirmado: sus datos salen de la
    misma constante que usa la card "Publicaciones". La tarjeta lista a los cuatro
    editores de la tapa (Bennun, Harfin, Sándor y Genecov). El **Manual de Fisuras
    Labiopalatinas** (Editorial Brujas) figura "En preparación" porque la tapa es una
    maqueta preliminar: falta el año de publicación.
  - PIEL puede enviar la **lista de capítulos publicados en libros** y las
    **publicaciones nacionales y extranjeras** para completar "Publicaciones".
- **Ortografía:** todo el sitio dice "alvéolo" / "labio-alvéolo-palatina". Quedan sin
  tocar los nombres propios: "Labio Alveolo Palatinas" en el nombre de AFLAPyCRA y el
  título del libro "Manual de Fisuras Labiopalatinas".
- **Consentimiento:** las fotos de Anestesia y del Club de la Familia muestran
  pacientes y familias reconocibles (ver sección 4).
- **Ojo con el Blob Store:** Equipo, Premios y Logos se editan desde el panel. Si alguna
  de esas secciones ya se guardó alguna vez, se sigue viendo lo guardado y estos cambios
  (Aliberti/ORL/Nutrición, período de Herrod, Gantz y los logos nuevos) hay que hacerlos
  a mano desde `/panel`.

### Decisiones de implementación a revisar con PIEL
- **Textos justificados:** se aplican al cuerpo de texto desde 640 px de ancho. En
  celulares se dejan alineados a la izquierda a propósito: en columnas angostas el
  justificado abre "ríos" de espacio y se lee peor.
- **`/historias`:** la página existe y el CTA del Home ya apunta ahí, pero está vacía
  hasta que se carguen historias desde el panel.
- **Línea de tiempo del desarrollo:** se hizo una versión con íconos propios (chupete →
  juego → habla → libro). Queda para revisar con Juani, como pedía el documento.
- **URL de Cuidados y alimentación:** pasó a `/cuidados-y-alimentacion`, en la raíz como
  `/labio-leporino`, tal como pide el documento. Va **sin tilde** (con tilde la URL se
  codifica y queda ilegible al compartirla). Las rutas viejas y la variante con tilde
  redirigen con 308. El meta title es exactamente el del documento ("… | PIEL").
- **Premios:** además del 2002, el 2009 también estaba fuera de orden; quedó antes de
  los de 2008. Todas las cajas miden lo mismo en toda la grilla, no solo por fila.
