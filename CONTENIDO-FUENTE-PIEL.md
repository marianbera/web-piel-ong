# CONTENIDO FUENTE — WEB PIEL (fuente de verdad)

> Texto extraído **textualmente** de los 6 Word que entregó el cliente + la estructura del diagrama.
> Regla de oro: **este archivo manda sobre cualquier texto que ya exista en el código.** Si el código dice algo distinto, se corrige el código.
> Las líneas marcadas con ⚠️ son notas del cliente / decisiones pendientes: **no inventar**, dejar `TODO` en el código y listarlas en el reporte final.

---

## MAPEO ESTRUCTURA → RUTAS

| # | Sección (label visible nuevo) | Ruta hub | Subpáginas → ruta |
|---|---|---|---|
| 1 | Home | `/` | Hero · Mini quiénes somos · Diferencial · Donar · Historias |
| 2 | **Centro Médico** | `/quienes-somos` | 2.1 Nosotros → `/nosotros` · 2.2 Historia → `/historia` · 2.3 Premios → `/premios` · 2.4 Equipo → `/equipo` · 2.5 Prensa → `/prensa` |
| 3 | **Tratamiento Integral** | `/tratamiento` | 3.1 Enfoque → `/enfoque` · 3.2 Especialidades → `/especialidades` · 3.3 Otras áreas → `/otras-areas` · 3.4 Investigación y academia → `/investigacion` |
| 4 | **Información para pacientes y familias** | `/pacientes` | 4.1 Qué es la fisura → `/que-es-fisura` · 4.2 Cuidados → `/cuidados` · 4.3 Alimentación → `/alimentacion` · 4.4 Acompañamiento → `/acompanamiento` · 4.5 Desarrollo → `/desarrollo` · 4.6 FAQ → `/faq` · 4.6 Guías → `/guias` |
| 5 | **Cómo acceder** | `/como-acceder` | 5.1 Argentina → `/argentina` · 5.2 Internacionales → `/internacional` · 5.3 Obras sociales → `/obras-sociales` · 5.4 Acceso al tratamiento (becas) → `/acceso` · 5.4 Consultas y turnos → `/consultas` · 5.5 Info para médicos → `/medicos` |
| 6 | **Sé parte** | `/se-parte` | 6.1 Donar como individuo → `/donar` · A. Apadrinar → `/apadrinar` · 6.2 Empresas → `/empresas` |

> **Decisión IA:** se conservan las URLs actuales (SEO). Solo cambian los **labels visibles** del nav y los H1 para coincidir con el diagrama del cliente ("Centro Médico", "Tratamiento Integral", etc.).

---

# 1 · HOME

**Imagen hero:** `1- HOME/ChatGPT Image 22 may 2026, 03_55_26 p.m..png` → mover a `public/brand/home-hero.png`.

### 1.1 Hero
- **Título:** Cirugía plástica infantil especializada en fisuras labio alvéolo palatinas
- **Bajada:** Más de 35 años acompañando a niños y sus familias con un tratamiento integral, en un solo lugar.
- **CTA principal:** Solicitar consulta

### 1.2 Mini quiénes somos
PIEL es un centro de cirugía plástica infantil de referencia en el tratamiento integral de fisuras labio alvéolo palatinas, comúnmente llamado labio leporino.
Con más de 5.000 pacientes tratados y un equipo interdisciplinario completo, acompañamos cada caso desde el diagnóstico prenatal hasta la finalización del tratamiento.
- **CTA:** Conocer más sobre PIEL

### 1.3 Diferencial
- **Título:** Un enfoque que cambia el resultado
- **Bloques (icono + título + texto):**
  1. **Todo el tratamiento en un solo lugar** — Coordinación entre todas las especialidades para un abordaje integral y eficiente.
  2. **Equipo interdisciplinario** — Profesionales especializados que trabajan en conjunto en cada etapa del proceso.
  3. **Más de 35 años de experiencia** — Un modelo desarrollado y perfeccionado a lo largo del tiempo.
  4. **Acompañamiento integral** — Desde el diagnóstico prenatal hasta la inserción social del paciente.

⚠️ Nota del cliente: **ACTUALIZAR NÚMEROS A 2026** (años de experiencia y cantidad de pacientes). Dejar TODO.

### 1.4 Donar
- **Título:** Hacemos posible muchas sonrisas
- **Texto:** Gracias al apoyo de quienes acompañan a PIEL, cada día más niños con fisuras labio alvéolo palatinas pueden acceder a su tratamiento. Tu ayuda puede cambiar el futuro de un niño y su familia.
- **CTA:** Sumate

### 1.5 Bloque humano / Historias
- **Título:** Cada tratamiento es una historia
- **Texto:** Detrás de cada diagnóstico hay una familia, un proceso y un futuro por construir. En PIEL acompañamos a cada paciente en todo el camino, con el mismo compromiso en cada caso.
- **CTA:** Conocé historias reales → **link externo** `https://www.asociacion-piel.org.ar/web/historias/`

⚠️ Footer: el cliente quiere una nota que "explique el porqué del nombre" (logo retocado). Dejar TODO.

---

# 2 · CENTRO MÉDICO (`/quienes-somos`)

### 2.1 Nosotros
Asociación PIEL es un centro de cirugía plástica infantil especializado en el tratamiento integral de fisuras labio alvéolo palatinas (comúnmente llamado labio leporino) y otras malformaciones craneofaciales.

Desde hace más de 35 años, desarrollamos un modelo de atención interdisciplinario que integra cirugía, rehabilitación y seguimiento en un solo lugar, acompañando a cada paciente desde el diagnóstico prenatal hasta la finalización del tratamiento.

Nuestra trayectoria, con más de 6.500 pacientes tratados, nos posiciona como uno de los centros más experimentados de la región en esta patología, siendo referencia para familias y profesionales de Argentina y países limítrofes.

Lo que diferencia a PIEL no es solo su experiencia, sino su forma de trabajar: un equipo completo de especialistas que evalúa y trata a cada paciente de manera coordinada, evitando la fragmentación habitual del sistema de salud y asegurando un abordaje integral en cada etapa.

Atendemos pacientes privados, con cobertura médica y también desarrollamos programas de acceso para quienes no pueden afrontar el tratamiento.

**VISIÓN:** Ser el centro de referencia en cirugía plástica infantil en Argentina y la región, reconocido por la calidad de sus resultados y su modelo de atención integral.

**MISIÓN:** Brindar un tratamiento integral, coordinado y de excelencia a niños con fisuras labio-alvéolo-palatinas y otras malformaciones craneofaciales, acompañando a cada paciente y su familia en todo el proceso.

**VALORES:**
- **Excelencia médica** — Trabajamos con los más altos estándares en cada etapa del tratamiento.
- **Trabajo interdisciplinario** — Creemos en el valor del equipo como base de mejores resultados.
- **Compromiso con el paciente** — Acompañamos cada caso de manera integral, más allá de la intervención quirúrgica.
- **Acceso al tratamiento** — Promovemos que todos los pacientes puedan acceder a una atención de calidad.

⚠️ Agregar bloque "Colaboran con nosotros:" (logos). Dejar TODO.

> ⚠️ **INCONSISTENCIA numérica:** el Home dice "5.000 pacientes" y Nosotros dice "6.500 pacientes". Usar el número de cada doc **tal cual** pero **marcar TODO** para que PIEL unifique la cifra oficial 2026.

### 2.2 Historia
Asociación PIEL fue creada el 25 de octubre de 1988 con el objetivo de apoyar la investigación, prevención, docencia y asistencia en el ámbito de la cirugía plástica y craneofacial infantil.

En sus primeros años, el trabajo se desarrolló en colaboración con los servicios de cirugía plástica y quemados de los hospitales de niños Ricardo Gutiérrez y Juan P. Garrahan, donde comenzó a consolidarse el enfoque interdisciplinario que hoy define a la institución.

El 31 de julio de 1989, PIEL obtuvo su personería jurídica (I.G.J. N° 581), y en 1994 concretó la adquisición de su sede propia en Avellaneda, Provincia de Buenos Aires. La adecuación del espacio fue posible gracias al compromiso de las familias y al trabajo voluntario de padres y colaboradores, que acompañaron activamente el desarrollo de la institución desde sus inicios.

Durante los primeros años, los profesionales del equipo contribuyeron con su vocación y profesionalismo, para lograr el crecimiento progresivo del Centro Médico y la consolidación de un espacio propio de atención.

Ese mismo espíritu dio origen a iniciativas como el Fondo Cooperativo de Reserva, creado para facilitar el acceso al tratamiento mediante préstamos adaptados a las posibilidades de cada familia.

Hoy, PIEL cuenta con una sede donde se brinda asistencia y rehabilitación interdisciplinaria a través de consultorios externos, integrando especialidades como cirugía plástica infantil y cráneo-maxilofacial, neonatología, pediatría, genética, odontopediatría, ortodoncia, fonoaudiología, otorrinolaringología, psicología y asistencia social.

> ⚠️ **El timeline inventado que existe hoy en `historiaContent` se descarta.** La historia real es **prosa** con hitos concretos (1988 fundación · 31/07/1989 personería I.G.J. N° 581 · 1994 sede en Avellaneda). Rehacer como prosa o timeline con SOLO estos hitos reales.

### 2.3 Premios y reconocimientos
**Intro:** La trayectoria de PIEL ha sido reconocida a nivel nacional e internacional por su trabajo en el tratamiento de fisuras labio-alvéolo-palatinas y su modelo de atención interdisciplinario.

Lista (año — título):
- **2018** — Premio "Abanderados de la Argentina Solidaria 2018", otorgado al Dr. Ricardo D. Bennun por Canal 13, grupo Clarín.
- **2017** — "Concurso de Proyectos Sociales 2017", Fundación BAF, Área: Salud y Movimiento.
- **2016** — "XVII Premio Bienal", Fundación Navarro Viola, prácticas en primera infancia de la Argentina.
- **2015** — Premio al Dr. Bennun, Fundación World of Children (EE.UU.), en reconocimiento a quienes colaboran con la salud de los niños desamparados en el mundo.
- **2011** — Entidad seleccionada por FARMACITY S.A. para su campaña solidaria a través de sus empleados.
- **2002 – actualidad** — Subsidio de la Fundación Smile Train (EE.UU.), Miembro Asociado en Argentina, para el Programa en Conjunto de Cirugías Gratuitas para niños de escasos recursos con fisuras labio palatinas.
- **2008 – actualidad** — Subsidio de la Fundación Herrod (Suiza) para la provisión de instrumental médico para la atención interdisciplinaria de niños con fisuras labio palatinas.
- **2008 – 2010** — Entidad seleccionada por Colgate-Palmolive para su campaña anual "Todos por una Sonrisa".
- **2009** — Nominación del Honorable Senado de la Nación, por una nueva técnica para el tratamiento de pacientes con fisuras.
- **2007** — Finalista del Premio al mejor Emprendimiento Solidario en el área Salud, Fundación Schwab (Suiza) y Diario Cronista Comercial.
- **2007** — Finalista del Premio Health Award, Fundación World of Children (EE.UU.), con auspicio de UNICEF.
- **2006** — Declarada de interés legislativo (Cámara de Diputados de la Nación, Orden del día N°1807, sesiones 2006).
- **2006** — Declarada Miembro de Buena Voluntad por la American Cleft Palate-Craniofacial Association.
- **2005** — Premio "Pensar en el Futuro", seleccionada por COMUNIA para un plan de comunicación institucional.
- **2003** — Premio Mejor Emprendimiento Solidario en Salud, categoría ONG, Foro Ecuménico Social.
- **1999** — Declarada Organización de Acción Comunitaria (Dir. Gral. de Relaciones con la Comunidad, GCBA).
- **1998** — Declarada Entidad de Bien Público (Subsecretaría de Desarrollo Social de la Presidencia de la Nación).
- **1997** — Declarada Entidad de Bien Público (Municipalidad de Avellaneda).
- **1996** — "Entidad Solidaria", Jornadas de Reconocimiento y Solidaridad del FREPASO.

⚠️ "Completar si hay alguno nuevo" (posteriores a 2018). Dejar TODO.

### 2.4 Equipo
**Intro:** En PIEL, el tratamiento es el resultado del trabajo de un equipo interdisciplinario. Cada paciente es acompañado por profesionales de distintas especialidades que trabajan de manera coordinada, lo que permite abordar el tratamiento de forma integral y sostenida en el tiempo.

**Fundador:** Dr. Roberto Bennun — Fundador y Director Médico.
Es una de las figuras más reconocidas de la cirugía plástica infantil en Argentina. Exdirector del Servicio de Cirugía Plástica del Hospital de Pediatría Juan P. Garrahan, dedicó su carrera al tratamiento de fisuras labio alvéolo palatinas y al desarrollo de un modelo de atención integral que hoy define a PIEL. — **CTA:** Ver trayectoria completa.

> ⚠️ **INCONSISTENCIA de nombre:** el doc de Equipo dice **"Dr. Roberto Bennun"**, el de Premios dice **"Dr. Ricardo D. Bennun"** y el listado dice **"BENNUN RICARDO"**. **Verificar con PIEL** el nombre correcto antes de publicar. Dejar TODO.

**Dirección médica / Cirujanos principales:** El equipo de cirugía plástica da continuidad al modelo desarrollado por el Dr. Bennun, asegurando la calidad técnica y la evolución del tratamiento. ⚠️ (Perfiles individuales: pendientes de PIEL — dejar TODO.)

**Equipo médico** (especialidad — profesional):
- Odontólogo — Giorgi Mariano
- Odontopediatra — Langsam Analía y Urban Rodríguez Carla
- Pediatra — Yannibelli Patricia y Henrichsen Julieta
- Cirugía cráneo-maxilo-facial — Bennun Ricardo, Astrada Silvana y Camacho Roy
- Anestesiología — Moggi Luis, Ventorrutti Tatiana
- Instrumentador quirúrgico — Carrizo Ricardo
- Cirugía traumatología — Novoa Alejandro
- Fonoaudiología — Carmona Samanta y Miloro María
- Psicología — Basualdo Vanesa y Gantner Erica
- Nutrición — Carmona Noelia
- Ortodoncista — Ávila Claudia
- Kinesiología — Spizzirri Alejandra
- Mecánica dental — Romero Gilda
- Otorrinolaringología — Rivelli Ramiro
- Dermatología — Echague Vila Agustina

### 2.5 Prensa
⚠️ **Sin contenido real.** El doc solo dice "Agregar todas las notas en medios". Mantener la página con `EmptyState` + TODO. No inventar notas.

---

# 3 · TRATAMIENTO INTEGRAL (`/tratamiento`)

**Imágenes:** `3- QUÉ HACEMOS/ChatGPT Image 27 may 2026, 13_52_14.png` y `..._15_28_07.png` → mover a `public/brand/tratamiento-1.png` y `tratamiento-2.png`.

### 3.1 Nuestro enfoque
El tratamiento de una fisura labio alvéolo palatina requiere mucho más que una intervención quirúrgica. Cada paciente necesita seguimiento, coordinación entre especialidades y un acompañamiento sostenido a lo largo del tiempo.

En PIEL trabajamos con un enfoque interdisciplinario que permite evaluar y acompañar cada caso de manera integral, adaptando el tratamiento a cada etapa del crecimiento del paciente.

El mismo día y en un mismo lugar, niños y familias pueden acceder a distintas especialidades, evitando la fragmentación habitual del sistema de salud y favoreciendo una mirada coordinada del tratamiento.

Creemos en la importancia de la contención. Por eso, cada consulta se desarrolla en un entorno cercano, humano y pensado para los niños y sus familias.

Más de 35 años de experiencia y miles de pacientes tratados nos permitieron consolidar un modelo de atención propio para el abordaje integral de fisuras labio alvéolo palatinas.

**Bloques destacados:**
- **Mismo día y mismo lugar** — Distintas especialidades coordinadas en un solo centro.
- **Trabajo interdisciplinario** — Profesionales de diferentes áreas trabajando en conjunto.
- **Contención y acompañamiento** — Apoyo médico, emocional y social durante todo el tratamiento.
- **Entorno pensado para los niños** — Espacios de juego y un ambiente cálido para las familias.

### 3.2 Especialidades
**Intro:** El tratamiento integral requiere la participación coordinada de distintas especialidades que intervienen según las necesidades de cada paciente y cada etapa del crecimiento.

Especialidades del equipo interdisciplinario:
1. **Cirugía plástica infantil y cráneo-maxilofacial** — Tratamiento quirúrgico de fisuras labio-alvéolo-palatinas y otras malformaciones craneofaciales.
2. **Neonatología** — Seguimiento y acompañamiento durante los primeros meses de vida.
3. **Pediatría** — Control clínico y seguimiento general del paciente.
4. **Genética** — Evaluación y orientación genética para pacientes y familias.
5. **Odontopediatría** — Prevención, cuidado y seguimiento odontológico infantil.
6. **Ortodoncia** — Desarrollo y alineación maxilar y dentaria.
7. **Fonoaudiología** — Evaluación y tratamiento del habla, lenguaje y alimentación.
8. **Otorrinolaringología** — Seguimiento auditivo y respiratorio asociado a la fisura.
9. **Psicología** — Contención emocional y acompañamiento familiar.
10. **Psicopedagogía** — Acompañamiento del aprendizaje e integración escolar.
11. **Asistencia social** — Orientación y acompañamiento social durante el tratamiento.

⚠️ El diagrama del cliente menciona "las 14 especialidades". El doc lista 11. **Controlar si faltan** (el listado del Equipo 2.4 tiene otras: anestesiología, nutrición, kinesiología, dermatología, mecánica dental, instrumentación). Dejar TODO para unificar con PIEL.

### 3.3 Otras áreas de la cirugía plástica infantil
**Intro:** Además del tratamiento de fisuras labio-alvéolo-palatinas, en PIEL abordamos otras patologías vinculadas a la cirugía plástica infantil y craneofacial.

- **Malformaciones craneofaciales** — Tratamiento de alteraciones congénitas del cráneo y la cara.
- **Secuelas de quemaduras** — Reconstrucción y seguimiento funcional y estético.
- **Secuelas de traumatismos y accidentes** — Abordaje reconstructivo de lesiones faciales y corporales.
- **Malformaciones congénitas** — Evaluación y tratamiento de patologías reconstructivas infantiles.

### 3.4 Investigación y academia
⚠️ **Sin doc.** El diagrama pide: Cátedra UBA · publicaciones · congresos. No hay texto entregado. Mantener página con `EmptyState`/borrador + TODO. No inventar.

> NOTA: el doc "3.4 Acceso al tratamiento" **NO va acá** → su contenido va a **5.4 Acceso al tratamiento (becas)** en la sección Cómo acceder.

---

# 4 · INFORMACIÓN PARA PACIENTES Y FAMILIAS (`/pacientes`)

### 4.1 Qué es la fisura labio alvéolo palatina
**Título:** Fisura labio alvéolo palatina. Labio leporino: ¿Qué es? Causas y tratamiento.

El nacimiento de un bebé con una malformación congénita como labio leporino impacta profundamente al grupo familiar. Muchos padres nunca antes habían visto a un niño con fisura labio-alvéolo-palatina. Cada niño requiere un cuidado acorde a sus necesidades particulares, aspectos que podrán consultar con cada integrante del grupo profesional de Asociación PIEL.

**¿Qué es una fisura de labio y/o paladar?** La fisura de labio, la de paladar o ambas son defectos congénitos, es decir, se presentan al momento de nacer. Las fisuras oro-faciales son relativamente frecuentes: ocurren en 1 de cada 800 nacimientos, variando según la raza y el sexo.

**¿Cuál es la causa?** La causa exacta aún se desconoce y muchos profesionales coinciden en que no puede atribuirse a un único factor. Es importante distinguir entre fisuras aisladas y fisuras asociadas a otros defectos congénitos o síndromes. La gran mayoría de las aisladas puede deberse a una combinación de genes (predisposición genética) que probablemente interactúa con factores ambientales.

**Genética:** Los genes son la sustancia básica de la cadena constitutiva del ADN. Cada persona posee ~100.000 genes agrupados en cromosomas: 46 cromosomas, la mitad (23 pares) de la madre y la otra mitad del padre. Por la gran cantidad de genes involucrados, ningún niño es idéntico a su padre o madre, lo que ayuda a explicar por qué puede aparecer una fisura en una familia sin antecedentes. Un desorden genético puede ocurrir al recibir un gen anormal o por una mutación al momento de la concepción.

Muy pocos agentes ambientales han sido definitivamente asociados. Existen escasas evidencias firmes de que medicamentos, traumatismos o enfermedades durante el embarazo jueguen un rol importante. Las malformaciones se producen en la etapa temprana del embarazo, generalmente antes de que la madre lo advierta. Los tejidos del labio se fusionan alrededor de la 5.ª–6.ª semana tras la concepción, y las estructuras del paladar entre la 7.ª y la 9.ª. Por lo tanto, las fisuras no pueden ser causadas por eventos de la etapa media o tardía del embarazo.

### 4.2 Cuidados a tener en cuenta (Estimulación temprana)
**Pautas para padres de niños de 0 a 6 meses:** En este primer período, mamá y papá son los mejores estimuladores y quienes más conocen a sus hijos.

**Alimentación (0–6 meses):**
- Postura: semisentado, sin flexión de la cabeza.
- Succión: necesaria; ejercita los músculos de la boca y mejora el crecimiento orofacial.
- Pecho: se adapta mejor a la forma de la boca; la leche materna tiene mayor valor nutricional.
- Mamadera: si el pecho resulta complicado, probar mamadera (leche materna o de fórmula). Los papás eligen la tetina; el líquido debe salir gota a gota.
- Placa obturatriz: la colocan los odontólogos; mejora la postura de la lengua y favorece la alineación de los segmentos maxilares. No es imprescindible para alimentar, pero conviene tenerla el mayor tiempo posible en la boca.
- Tiempo: alimentación ordenada; ~30 min, cada 2 a 2½ horas. Hacer pausas para el "provechito" (tragan mucho aire). Alternar el brazo derecho e izquierdo durante la toma.

**Estimulación inicial del niño:** La alimentación es estimulación (los puntos de apoyo para succionar preparan los del habla). Usar el chupete como estimulador del crecimiento maxilofacial. Enjuagar la boca con un fondo de agua mineral o hervida. Masajes en mejillas, labios y dentro de la boca (aprovechando la limpieza de la plaquita y el paladar con una gasa), como si el paladar fuese entero. Masajear suavemente brazos, pies, manos, espalda y pecho. Balanceos suaves (lejos de las comidas). Colocar boca abajo como juego para ejercitar la cabeza. Control con otorrinolaringólogo para prevenir alteraciones auditivas.
Lo más importante: abrazar al bebé todas las veces posibles, mirarlo a los ojos, sostenerlo con firmeza y acariciarlo.

**Pautas para padres de niños de 6 a 24 meses:**
- *Alimentación — semisólidos/sólidos:* desde los 6 meses el pediatra suele indicar papilla con cuchara plana.
- *Líquidos:* biberón de leche y otros líquidos (jugos) con vaso con pico, luego sorbete y luego vaso o taza común.
- *Consejos:* respetar los cambios que indica el médico; no prolongar la papilla; sentar al niño de frente y seguro; la masticación favorece el crecimiento de los maxilares y la dentición; evitar gaseosas azucaradas y golosinas; cepillar los dientes; usar la mamadera solo para la leche.

**Lenguaje y habla:** Vocalizaciones → primeras palabras → frases simples. Imitar y dialogar con el bebé. Anticipar acciones ("vamos al agua"). Las letras más difíciles: P, T, K y luego la R. Jugar con sonidos, masajear labios y paladar, mover labios y lengua. Desde los 8–10 meses colocarse de frente para que vea, toque y escuche cada sonido. Jugar con sonidos de transportes, animales, instrumentos; con el soplo (velas, papeles); con gárgaras; con la pelota (tirarla pronunciando una sílaba). *Consejos:* colocarse de frente, usar espejo, no corregir mientras habla, no preguntar todo el tiempo los nombres, hablar lento, trabajar/jugar un rato por día; hermanos, primos y abuelos también son buenos estimuladores.

**Motricidad:** gruesa y fina. Dejar al niño libre en el piso boca abajo y boca arriba. A los 4–5 meses rueda, a los 6 se sienta, a los 8 gatea, a los 12 camina. Fomentar la destreza física y el uso de las manos (masa, enroscar, encastrar). *Consejos:* fomentar independencia; preferir corralito antes que andador.

**Higiene:** dar agua tras leche/papillas para higienizar boca y nariz; mantener la nariz libre de mocos (vapor, perita o solución fisiológica); limpiar la plaquita según indique el cirujano; control de audición cada 6 meses; cumplir los controles de todos los especialistas.

### 4.3 Alimentación del bebé
**¿Cómo alimentar a un bebé con labio leporino?** La mejor forma es la succión: permite al bebé el placer de chupar, cubrir sus necesidades nutricionales, mejora el vínculo con los padres y ejercita los músculos labiales y de la cavidad oral.

**A pecho:** amamantar (con o sin fisura) requiere adaptación mutua. La fisura exige más paciencia, pero el seno tiene elasticidad para adaptarse y permitir buena succión. Al diagnosticar fisura de paladar se indica una placa palatina de acrílico para cerrar la comunicación boca-nariz, aunque no es imprescindible para alimentar.

**A biberón:** de no ser posible el amamantamiento, alimentar con leche de fórmula o maternizada, con biberón graduado; no es necesaria una tetina especial.

**¿Cómo saber si es adecuada?** El aumento de peso en los primeros meses es la prueba de que la alimentación es suficiente. Acompañar estimulando el desarrollo de todas sus capacidades.

**Alimentos sólidos:** se incorporan alrededor del 6.º mes en papillas de poca consistencia, con cuchara. El bebé se adapta a nuevo sabor, textura y forma de ingerir; luego se diversifica y aumenta la consistencia. Si pasan alimentos a la cavidad nasal, interrumpir y dar solo líquidos.

### 4.4 Acompañamiento emocional y social
Ante el impacto por el nacimiento de un niño con labio leporino, los padres viven una mezcla de sentimientos: culpa, enojo y sobre todo confusión, lo que puede dificultar el vínculo cercano con el bebé.

La consulta al psicólogo permite aclarar dudas y elaborar la angustia, ayudando al grupo familiar a comprender y aceptar mejor al nuevo integrante.

La sensación inicial más común es sentirse solos; a veces las explicaciones médicas no alcanzan y se necesita hablar con otras familias que atraviesan lo mismo. El **"Club de padres"** de Asociación PIEL ofrece ese espacio de intercambio con contención profesional.

**Apoyo psicológico para niños:** los niños también pueden recibir ayuda para ganar confianza y responder con seguridad a preguntas de amigos y compañeros sobre su condición.

### 4.5 Desarrollo y crecimiento
El tratamiento no se limita a las intervenciones médicas. En los primeros años, el crecimiento, el lenguaje, la motricidad y la interacción con el entorno forman parte de un proceso integral que requiere acompañamiento. Cada niño evoluciona diferente.

- **Estimulación temprana:** los primeros años son clave; alimentación, juego, movimiento y vínculo afectivo fortalecen capacidades físicas, cognitivas, emocionales y sociales.
- **Lenguaje y comunicación:** la comunicación empieza antes de las primeras palabras; hablar, cantar, jugar con sonidos favorecen el desarrollo del lenguaje.
- **Desarrollo motor y autonomía:** el movimiento y la exploración son parte del crecimiento saludable; el juego y las actividades cotidianas acompañan el proceso.
- **Escolaridad e integración social:** la incorporación temprana a espacios educativos y recreativos favorece socialización, autonomía y desarrollo emocional.
- **Crecer acompañado:** en PIEL acompañamos cada etapa, dando herramientas y orientación a las familias para el desarrollo integral, la autonomía y el bienestar.

### 4.6 Preguntas frecuentes (FAQ) — *Cirugía del labio leporino / fisura de paladar*
- **¿Cuándo se opera el labio?** La reconstrucción completa de labio y nariz se realiza alrededor de los 3 meses (hay un momento adecuado para cada paciente). El niño debe estar sano, creciendo normalmente y con estudios prequirúrgicos adecuados.
- **¿Cuándo se opera el paladar?** Cierre completo de paladar duro y blando a partir del 8.º mes y no más tarde de los 16 meses.
- **¿Cuántas intervenciones?** Dos cirugías reconstructivas (una de labio y nariz, otra para cerrar todo el paladar). Puede haber una revisión final a partir de los 4 años.
- **¿Cuándo se hace faringoplastia (colgajo faríngeo)?** Operación complementaria indicada cuando, tras el tratamiento foniátrico, persiste escape de aire por la nariz o nasalización del habla.
- **¿Cómo lucirá después de la operación del labio?** En el postoperatorio inmediato el labio estará algo inflamado y la herida puede sangrar. Toma 3 a 6 meses que la cicatriz luzca más natural; puede indicarse terapia láser.
- **¿Cómo cuidarlo después de la operación de labio?** El cariño y la dedicación son fundamentales. El bebé puede volver a casa el mismo día, tras ser revisado y alimentado. Mantener la cicatriz limpia y seca; en fisura palatina garantizar buena ingesta de líquidos por boca.
- **¿Cuándo se retiran los puntos?** Los del labio se desprenden solos desde el 7.º día. Los del paladar no necesitan extraerse.
- **¿En qué posición dormirá?** Boca abajo, sin apoyar la zona operada; reduce el riesgo de aspiración de vómitos o sangre.
- **¿Alimentación después de la cirugía?** *Queiloplastia (labio):* tras tolerar líquidos, suelen alimentarse normalmente a las 2–3 horas; herida limpia y seca. *Palatoplastia (paladar):* suspender lácteos 48 h; ofrecer agua, té azucarado, leche de soja, jugo de manzana, caldos, gelatina, helados de agua, en vaso o cuchara; sin chupete ni biberón.
- **¿Podrá hablar normalmente?** ~80% desarrolla el habla adecuadamente tras la cirugía de paladar; el 20% requiere gran colaboración de familia y especialistas, a veces por períodos prolongados.
- **¿Por qué hablan por la nariz?** Con el paladar abierto no se impide el escape de aire, produciendo nasalización. Los órganos para succionar, morder, tragar y respirar son los mismos que luego se usan para hablar.
- **¿Se eliminan los sonidos nasales tras la operación?** No de inmediato; el niño debe aprender a usar los músculos del paladar blando reacomodados.
- **¿Cuándo empieza el tratamiento fonoaudiológico?** A partir de los 2 años y cuando existan alteraciones en la emisión de fonemas.
- **Problemas de audición:** los niños con fisura de paladar (incluida la submucosa) son propensos a infecciones del oído medio, que pueden causar pérdidas auditivas temporarias o prolongadas, relacionadas con líquido en el oído medio y la trompa de Eustaquio.
- **¿Cómo detectar pérdida de audición?** Sensación de oído tapado, necesidad de que repitan, distracción en grupo. La audición es clave para el lenguaje. Controles de rutina desde los 15 días de vida (respuesta refleja al sonido).
- **¿Cómo prevenir infecciones del oído?** Alimentación adecuada que disminuya el reflujo; el especialista indica prevención y tratamiento. Ante infecciones persistentes con pérdida auditiva, primero tratamiento médico; si no alcanza, tubos de drenaje (cirugía con anestesia), a veces repetible.

### 4.6 Guías y materiales (links a PDFs)
**Intro:** Ponemos a disposición materiales y recursos para acompañar a pacientes y familias durante las distintas etapas del tratamiento.
- **Guía para familias** — Información general sobre fisuras labio-alvéolo-palatinas y el tratamiento integral.
- **Recomendaciones de alimentación** — Orientación para los primeros meses de vida y alimentación del bebé.
- **Materiales educativos** — Recursos informativos y de acompañamiento.
- **Libros y publicaciones** — Material desarrollado por profesionales especializados.
- **Cierre:** La información, el acompañamiento y el acceso a recursos adecuados también forman parte del tratamiento.

⚠️ Los PDFs reales no están entregados. Estructurar la lista con `href="#"` + TODO.

---

# 5 · CÓMO ACCEDER (`/como-acceder`)

### 5.1 Pacientes de Argentina
Atendemos pacientes de distintas provincias que buscan atención especializada en fisuras labio alvéolo palatinas y cirugía plástica infantil.

Nuestro modelo interdisciplinario permite acompañar a cada paciente desde el diagnóstico hasta las distintas etapas de tratamiento y seguimiento.

Entendemos que muchas familias deben trasladarse desde diferentes localidades. Por eso organizamos consultas y tratamientos de manera coordinada para optimizar cada instancia de atención. Cada caso es único y requiere una evaluación personalizada, realizada por profesionales integrados.

**Acompañamiento a las familias:** además del tratamiento médico, brindamos orientación durante todo el proceso. La participación activa de madres, padres y cuidadores es parte fundamental del tratamiento y del desarrollo de cada niño.
- **CTA:** 📱 Contactar por WhatsApp

### 5.2 Pacientes internacionales
PIEL recibe pacientes de distintos países que buscan atención especializada en fisuras labio alvéolo palatinas y cirugía plástica infantil.

Nuestra experiencia interdisciplinaria, desarrollada durante más de 35 años, nos ha permitido acompañar a miles de pacientes y consolidarnos como centro de referencia regional.

**Un abordaje integral en un único lugar:** las distintas especialidades trabajan de manera coordinada dentro de una misma institución (cirugía plástica infantil, odontología, ortodoncia, fonoaudiología, psicología, pediatría y otras), abordando cada caso de forma integral.

**Atención para familias del exterior:** viajar para recibir atención médica implica una planificación especial para las familias. [El doc corta acá.]

**¿Por qué elegir PIEL?**
- Más de 35 años de experiencia.
- Más de 5.000 pacientes tratados.
- Equipo interdisciplinario especializado.
- Centro referente en fisuras labio alvéolo palatinas.
- Atención integral centrada en el paciente y su familia.
- **CTA:** 📱 Contactar por WhatsApp

### 5.3 Obras sociales y cobertura
Actualmente atendemos pacientes con cobertura de: **OSDE, OMINT, Medifé, Jerárquicos Salud, Etica+, Osmédica, OSCHOCA.**
Por consultas sobre cobertura, autorizaciones o modalidades de atención, nuestro equipo podrá orientarlo según cada caso.
- **CTA:** 📱 Consultar cobertura por WhatsApp
- Nota: ¿No encuentra su cobertura? Contáctenos para recibir orientación sobre su caso.

### 5.4 Acceso al tratamiento (becas) — *(del doc "3.4 Acceso al tratamiento")*
Trabajamos para que más niños puedan acceder al tratamiento que necesitan, independientemente de su situación económica. A través de programas de becas y acompañamiento, buscamos facilitar el acceso a consultas, cirugías y tratamientos interdisciplinarios.

**Programas de acceso:**
- **Becas de tratamiento** — Apoyo para consultas, cirugías y seguimiento interdisciplinario.
- **Acompañamiento a familias** — Orientación durante las distintas etapas del tratamiento.

**Cierre:** Creemos que el acceso a un tratamiento de calidad también forma parte del cuidado integral de cada paciente.
- **CTA:** Hacé tu consulta

### 5.4 Consultas y turnos
Dar el primer paso suele venir acompañado de muchas preguntas. Si desea realizar una consulta, solicitar un turno o recibir orientación sobre un tratamiento, puede comunicarse directamente con nuestro equipo.

Cada paciente y familia atraviesa una situación diferente. Brindamos una atención personalizada orientada a comprender las necesidades de cada caso y acompañar desde el primer contacto. Nuestro compromiso es ofrecer información clara, orientación profesional y acompañamiento cercano durante todo el proceso.
- **CTA:** 📱 Solicitar turno por WhatsApp · ✉️ Enviar consulta por correo electrónico

### 5.5 Info para médicos
⚠️ **Sin doc.** El diagrama pide: derivar un paciente · materiales · protocolos. Mantener página con `EmptyState`/borrador + TODO. No inventar.

---

# 6 · SÉ PARTE (`/se-parte`)

### 6.1 Donar como individuo
**Podés ayudar a devolver una sonrisa.**
Cuando una familia recibe el diagnóstico de una fisura labio alvéolo palatina, comienza un camino lleno de preguntas, incertidumbre y desafíos. A lo largo de más de 35 años, en PIEL acompañamos a miles de niños y sus familias durante ese recorrido. Pero ninguna de esas historias se construyó en soledad.

Detrás de cada consulta, tratamiento, cirugía y sonrisa recuperada existe una red de personas comprometidas con una misma convicción: que todos los niños merecen la oportunidad de acceder al tratamiento que necesitan. Profesionales que ponen su conocimiento al servicio de otros. Empresas que deciden involucrarse. Personas que acompañan, colaboran y confían. Familias que transforman su experiencia en ayuda para quienes recién comienzan el camino.

Gracias a ese compromiso colectivo, miles de niños pudieron acceder a tratamientos especializados y miles de familias encontraron contención, orientación y esperanza. Creemos que la salud también se construye entre todos, y que cuando una comunidad se compromete, las oportunidades se multiplican. Hoy podés formar parte de esa historia.

**Más que una donación:** cada colaboración ayuda a abrir nuevas posibilidades. Permite acompañar a una familia en un momento importante, acercar tratamientos especializados a quienes los necesitan y que más niños puedan crecer, desarrollarse y mirar el futuro con mayores oportunidades. Porque detrás de cada historia acompañada hay muchas personas que la hicieron posible.

#### 6.1 B — Realizar una donación
También podés colaborar realizando una donación para acompañar los programas de atención, acompañamiento y asistencia que desarrolla PIEL. Podés elegir entre:
- Donación mensual
- Donación por única vez
- Transferencia bancaria
- **CTA:** Donar ahora

### A. Apadrinar un tratamiento
**Tu ayuda puede cambiar una historia.**
Al apadrinar un tratamiento, ayudás a que un niño pueda acceder a la atención especializada que necesita. Tu aporte contribuye a acompañar distintas etapas del proceso, brindando oportunidades reales para su desarrollo y bienestar.
- **CTA:** Contactate con nosotros (WhatsApp)

### 6.2 Donar como empresa
**Empresas que transforman oportunidades.**
Las empresas pueden convertirse en aliadas estratégicas para ampliar el alcance de nuestra misión y ayudar a que más niños y familias accedan a tratamientos especializados.

**Formas de participar:**
- **Apadrinamiento de tratamientos** — Acompañando a pacientes y familias que necesitan apoyo para acceder al tratamiento.
- **Programas de Responsabilidad Social Empresaria** — Acciones conjuntas orientadas a promover el acceso a la salud y el bienestar infantil.
- **Donaciones y aportes institucionales** — Colaborando con programas, iniciativas y proyectos desarrollados por PIEL.

**Un compromiso con impacto real:** cada empresa que se involucra contribuye a generar nuevas oportunidades para niños y familias que necesitan acompañamiento.

**Empresas que nos acompañan:** ⚠️ (Espacio para logos — dejar TODO.)
- **CTA:** Quiero que mi empresa colabore

---

# ⚠️ GAPS / DECISIONES PARA CONFIRMAR CON PIEL (reportar, no inventar)
1. **Número de pacientes:** Home "5.000" vs Nosotros/Internacionales "6.500". Unificar cifra oficial 2026.
2. **Años de experiencia:** los docs dicen "más de 35 años"; el código actual dice "37 años". Usar **35** (docs) y marcar TODO "actualizar a 2026".
3. **Nombre del fundador:** "Roberto Bennun" vs "Ricardo D. Bennun" vs "Bennun Ricardo". Confirmar.
4. **Cantidad de especialidades:** diagrama dice 14, doc lista 11. Confirmar el set final.
5. **WhatsApp institucional:** `site.ts` tiene placeholder `+54 9 11 0000-0000`. Todos los CTA "por WhatsApp" dependen de esto. Confirmar número.
6. **Contenido faltante:** Prensa, Investigación y academia (Cátedra UBA), Info para médicos, perfiles de cirujanos principales, PDFs de Guías, logos de colaboradores/empresas, nota "porqué del nombre". Todo con `EmptyState` + TODO.
7. **Links de pago Mercado Pago** (individual/apadrinamiento/empresa) y **link externo de Historias** (`/web/historias/`): pendientes en `.env`.

# IMÁGENES ENTREGADAS POR EL CLIENTE
- `home-hero.png` (de "1- HOME") → hero del Home.
- `tratamiento-1.png`, `tratamiento-2.png` (de "3- QUÉ HACEMOS") → sección Tratamiento.
- El resto de imágenes de la web siguen con placeholder (`imageSeed` → picsum) hasta que PIEL entregue fotos reales.
