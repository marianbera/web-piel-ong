import type {
  EquipoPageContent,
  HistoriaPageContent,
  PremiosPageContent,
  PrensaPageContent,
  QuienesSomosHubContent,
} from "@/types/quienesSomos";

export const quienesSomosHub: QuienesSomosHubContent = {
  header: {
    title: "Quiénes somos",
    subtitle: "Un centro de referencia con más de 38 años de trayectoria.",
  },
  // Definición institucional oficial de PIEL (nov. 2026) + la cifra unificada de pacientes.
  intro:
    "**P.I.E.L.** (Plástica Infantil con Excelencia en el Logro) es un **centro de referencia en cirugía plástica infantil y craneofacial** especializado en el **tratamiento integral** de las fisuras labio-álveolo-palatinas. Desde su fundación en 1988, acompañó a **más de 6.000 pacientes**.",
  sections: [
    {
      title: "Nosotros",
      description: "Visión, misión y valores que guían nuestro trabajo.",
      href: "/quienes-somos/nosotros",
    },
    {
      title: "Historia",
      description: "Más de 38 años de trayectoria acompañando a familias.",
      href: "/quienes-somos/historia",
    },
    {
      title: "Premios",
      description: "Reconocimientos institucionales y premios científicos a lo largo de los años.",
      href: "/quienes-somos/premios",
    },
    {
      title: "Equipo",
      description: "El equipo interdisciplinario detrás de cada tratamiento.",
      href: "/quienes-somos/equipo",
    },
    {
      title: "Prensa",
      description: "Notas y menciones en medios de comunicación.",
      href: "/quienes-somos/prensa",
    },
  ],
};

export const historiaContent: HistoriaPageContent = {
  header: {
    title: "Historia",
    subtitle:
      "Asociación PIEL fue creada el 25 de octubre de 1988 con el objetivo de apoyar la investigación, prevención, docencia y asistencia en el ámbito de la cirugía plástica y craneofacial infantil.",
  },
  intro: [
    "En sus primeros años, el trabajo se desarrolló en colaboración con los servicios de cirugía plástica y quemados de los **hospitales de niños Ricardo Gutiérrez y Juan P. Garrahan**, donde comenzó a consolidarse el enfoque interdisciplinario que hoy define a la institución.",
    "El 31 de julio de 1989, PIEL obtuvo su **personería jurídica** (I.G.J. N° 581), y en 1994 concretó la adquisición de su **sede propia en Avellaneda**, Provincia de Buenos Aires. La adecuación del espacio fue posible gracias al compromiso de las familias y al trabajo voluntario de padres y colaboradores, que acompañaron activamente el desarrollo de la institución desde sus inicios.",
    "Durante los primeros años, los profesionales del equipo contribuyeron con su vocación y profesionalismo, para lograr el **crecimiento progresivo del Centro Médico** y la consolidación de un espacio propio de atención.",
    "Ese mismo espíritu dio origen a iniciativas como el **Fondo Cooperativo de Reserva**, creado para facilitar el acceso al tratamiento mediante préstamos adaptados a las posibilidades de cada familia.",
    "Hoy, PIEL cuenta con una sede donde se brinda **asistencia y rehabilitación interdisciplinaria** a través de consultorios externos, integrando especialidades como cirugía cráneo-maxilo-facial, pediatría, odontología, odontopediatría, ortodoncia, otorrinolaringología, fonoaudiología, kinesiología, psicología, nutrición y dermatología.",
  ],
};

export const premiosContent: PremiosPageContent = {
  header: {
    title: "Premios y reconocimientos",
    subtitle:
      "La trayectoria de PIEL ha sido reconocida a nivel nacional e internacional por su trabajo en el tratamiento de fisuras labio-alvéolo-palatinas y su modelo de atención interdisciplinario.",
  },
  // TODO(PIEL): completar con reconocimientos nuevos posteriores a 2018, si los hubiera.
  // Nombre del fundador: "Dr. Ricardo Bennun" (corregido por PIEL en las observaciones 2026).
  awards: [
    // Del comunicado de prensa de octubre de 2026 (DUA Comunicación) que PIEL envió
    // en la última ronda de observaciones.
    {
      year: "2026",
      text: "Placa de reconocimiento al Dr. Ricardo Bennun de la **Asociación Brasileña de Fisuras Labio Palatinas y Anomalías Craneofaciales (ABFLP)**, por su contribución y notable dedicación a la especialidad. Entregada en el XV Congreso Brasileño de Fisuras Labio Palatinas y Anomalías Craneofaciales (São Paulo).",
    },
    {
      year: "2018",
      text: "Premio **“Abanderados de la Argentina Solidaria 2018”**, otorgado al Dr. Ricardo Bennun por Canal 13, grupo Clarín.",
    },
    {
      year: "2017",
      text: "**“Concurso de Proyectos Sociales 2017”**, Fundación BAF, Área: Salud y Movimiento.",
    },
    {
      year: "2016",
      text: "**“XVII Premio Bienal”**, Fundación Navarro Viola, prácticas en primera infancia de la Argentina.",
    },
    {
      year: "2015",
      text: "Premio al Dr. Ricardo Bennun, **Fundación World of Children** (EE.UU.), en reconocimiento a quienes colaboran con la salud de los niños desamparados en el mundo.",
    },
    {
      year: "2011",
      text: "Entidad seleccionada por **FARMACITY S.A.** para su campaña solidaria a través de sus empleados.",
    },
    // Orden cronológico descendente por año de inicio (pedido de PIEL: el 2002
    // estaba fuera de lugar; el 2009 también).
    {
      year: "2009",
      text: "Nominación del **Honorable Senado de la Nación**, por una nueva técnica para el tratamiento de pacientes con fisuras.",
    },
    {
      // Período corregido por PIEL (nov. 2026): el subsidio terminó en 2024.
      year: "2008 – 2024",
      text: "Subsidio de la **Fundación Herrod** (Suiza) para la provisión de instrumental médico para la atención interdisciplinaria de niños con fisuras labio palatinas.",
    },
    {
      year: "2008 – 2010",
      text: "Entidad seleccionada por **Colgate-Palmolive** para su campaña anual “Todos por una Sonrisa”.",
    },
    {
      year: "2007",
      text: "Finalista del Premio al mejor Emprendimiento Solidario en el área Salud, **Fundación Schwab** (Suiza) y Diario Cronista Comercial.",
    },
    {
      year: "2007",
      text: "Finalista del **Premio Health Award**, Fundación World of Children (EE.UU.), con auspicio de UNICEF.",
    },
    {
      year: "2006",
      text: "Declarada de interés legislativo (**Cámara de Diputados de la Nación**, Orden del día N°1807, sesiones 2006).",
    },
    {
      year: "2006",
      text: "Declarada Miembro de Buena Voluntad por la **American Cleft Palate-Craniofacial Association**.",
    },
    {
      year: "2005",
      text: "Premio **“Pensar en el Futuro”**, seleccionada por COMUNIA para un plan de comunicación institucional.",
    },
    {
      year: "2003",
      text: "Premio **Mejor Emprendimiento Solidario en Salud**, categoría ONG, Foro Ecuménico Social.",
    },
    {
      year: "2002 – actualidad",
      text: "Subsidio de la **Fundación Smile Train** (EE.UU.), Miembro Asociado en Argentina, para el Programa en Conjunto de Cirugías Gratuitas para niños de escasos recursos con fisuras labio palatinas.",
    },
    {
      year: "1999",
      text: "Declarada **Organización de Acción Comunitaria** (Dir. Gral. de Relaciones con la Comunidad, GCBA).",
    },
    {
      year: "1998",
      text: "Declarada **Entidad de Bien Público** (Subsecretaría de Desarrollo Social de la Presidencia de la Nación).",
    },
    {
      year: "1997",
      text: "Declarada **Entidad de Bien Público** (Municipalidad de Avellaneda).",
    },
    {
      year: "1996",
      text: "**“Entidad Solidaria”**, Jornadas de Reconocimiento y Solidaridad del FREPASO.",
    },
  ],
  // Premios científicos que pasó PIEL en la ronda de cambios de contenido (nov. 2026).
  // Los títulos de publicaciones van entre comillas: el sitio no usa cursiva.
  scientific: {
    title: "Premios científicos",
    intro: "Trabajos premiados por sociedades científicas, universidades e instituciones médicas.",
    awards: [
      {
        year: "2001",
        text: "**Mejor Trabajo Seleccionado** para el Year Book of Plastic, Reconstructive and Aesthetic Surgery: “Nonsurgical Correction of Nasal Deformity: A 6-Year Follow-up”, pág. 16-18, Mosby Ed.",
      },
      {
        year: "1998",
        text: "**Premio Bienal Prof. Dr. Diego Zavaleta**, Facultad de Medicina U.B.A., mejor trabajo de Cirugía. Tema: “Nueva Estrategia para la corrección de la deformidad nasal en pacientes con Fisura labio-alvéolo-palatina”.",
      },
      {
        year: "1996",
        text: "**Premio Mejor Trabajo**, Hospital Nacional de Pediatría Prof. Dr. Juan P. Garrahan. Tema: “Tratamiento neonatal interdisciplinario del paciente con fisura labio-alvéolo-palatina”.",
      },
      {
        year: "1995",
        text: "**Premio Senior**, Sociedad Argentina de Cirugía Plástica. Tema: “Colgajo a pedículo occipital para la reconstrucción de defectos faciales”.",
      },
      {
        year: "1994",
        text: "**Premio Pedro Ovidio Bolo**, Asociación Médica Argentina, mejor trabajo de Cirugía. Tema: “Malformaciones Cráneo-maxilo-faciales”.",
      },
    ],
  },
};

export const equipoContent: EquipoPageContent = {
  header: {
    title: "Equipo",
    subtitle: "El equipo interdisciplinario detrás de cada tratamiento.",
  },
  intro:
    "En PIEL, el tratamiento es el resultado del trabajo de un **equipo interdisciplinario**. Cada paciente es acompañado por profesionales de distintas especialidades que trabajan de manera coordinada, lo que permite abordar el tratamiento **de forma integral y sostenida en el tiempo**.",
  founder: {
    // Nombre del fundador: "Dr. Ricardo Bennun" (corregido por PIEL en las observaciones 2026).
    name: "Dr. Ricardo Bennun",
    role: "Fundador y Director Médico",
    photo: {
      src: "/equipo/ricardo-bennun.jpg",
      alt: "Retrato del Dr. Ricardo Bennun, fundador y director médico de Asociación PIEL",
    },
    bio: "Es **una de las figuras más reconocidas** de la cirugía plástica infantil en Argentina. Exdirector del Servicio de Cirugía Plástica del **Hospital de Pediatría Juan P. Garrahan**, dedicó su carrera al tratamiento de fisuras labio alvéolo palatinas y al desarrollo de un modelo de atención integral que hoy define a PIEL.",
    // Lleva al bloque de trayectoria de esta misma página (abajo de la bio).
    cta: { label: "Ver trayectoria completa", href: "#trayectoria" },
    // Formación y cargos que pasó PIEL (ronda de cambios de contenido, nov. 2026).
    // Cada bloque va del más reciente al más antiguo. "1998/01" del original se
    // escribe como período completo (1998 – 2001).
    // TODO: confirmar con PIEL — la bio dice "Exdirector del Servicio de Cirugía Plástica
    // del Garrahan" y el cargo que pasaron ahí es "Médico Principal" (1988–1998).
    trajectory: [
      {
        title: "Estudios de posgrado",
        items: [
          {
            period: "1998 – 2001",
            text: "**Carrera Docente**, Facultad de Medicina, Universidad Nacional de Buenos Aires.",
          },
          {
            period: "1998 – 2000",
            text: "**Maestría en Epidemiología, Gestión y Políticas de Salud**, Departamento de Salud Comunitaria, Universidad Nacional de Lanús.",
          },
          {
            period: "1983 – 1984",
            text: "**Clinical Fellow en Cirugía Cráneo-maxilo-facial**, Children's Hospital Medical Center, Boston, Harvard University School of Medicine.",
          },
        ],
      },
      {
        title: "Doctorado",
        items: [{ period: "2005", text: "**Tesis Doctoral**, Facultad de Medicina, U.B.A." }],
      },
      {
        title: "Cargos",
        items: [
          {
            period: "01/03/2012 – actualidad",
            text: "**Director de la Carrera de Postgrado en Cirugía Plástica Infantil y Cráneo-maxilo-facial**, Sede Hospital de Clínicas, Facultad de Ciencias Médicas, U.B.A.",
          },
          {
            period: "01/03/1988 – 06/04/1998",
            text: "**Médico Principal** (por concurso abierto de oposición y antecedentes), Servicio de Cirugía Plástica y Quemados, Hospital Nacional de Pediatría “Prof. Dr. Juan P. Garrahan”.",
          },
        ],
      },
    ],
  },
  rosterTitle: "Equipo médico",
  rosterNote:
    "Estos son los profesionales que integran el equipo, agrupados por área. Cada paciente es acompañado por los que su tratamiento necesite, **en coordinación permanente entre especialidades**.",
  // Los profesionales son exactamente los de la tabla de PIEL (observaciones, última
  // ronda), agrupados por área. Administración no se muestra: esto es el equipo médico.
  // Las fotos son retratos circulares sobre fondo blanco (`public/equipo/`).
  // Ronda de cambios de contenido (nov. 2026): en "Cirugía y anestesia" se quitó a
  // Aliberti y entró ORL; en "Especialidades médicas" salió ORL y entró Nutrición.
  // TODO(PIEL): faltan las fotos de Yannibelli, Azurduy Wayar, Echagüe Vila, Langsam,
  // Romero, S. Carmona, Basualdo, Gantner y Spizzirri. Se suben desde
  // /panel → Equipo médico; mientras tanto la tarjeta muestra las iniciales.
  groups: [
    {
      title: "Cirugía y anestesia",
      description:
        "El equipo quirúrgico que realiza las intervenciones de labio, paladar y estructuras craneofaciales.",
      members: [
        {
          name: "Dr. Ricardo Bennun",
          role: "Cirugía cráneo-maxilo-facial",
          // Recorte de busto de su retrato: el de cuerpo entero no entra en el círculo.
          photo: "/equipo/ricardo-bennun-retrato.jpg",
        },
        {
          name: "Astrada Silvana",
          role: "Cirugía cráneo-maxilo-facial",
          photo: "/equipo/silvana-astrada.jpg",
        },
        {
          name: "Camacho Roy",
          role: "Cirugía cráneo-maxilo-facial",
          photo: "/equipo/roy-camacho.jpg",
        },
        {
          name: "Novoa Alejandro",
          role: "Cirugía traumatología",
          photo: "/equipo/alejandro-novoa.jpg",
        },
        { name: "Moggi Luis", role: "Anestesiología", photo: "/equipo/luis-moggi.jpg" },
        {
          name: "Ventorutti Tatiana",
          role: "Anestesiología",
          photo: "/equipo/tatiana-ventorutti.jpg",
        },
        {
          name: "Carrizo Ricardo",
          role: "Instrumentación quirúrgica",
          photo: "/equipo/ricardo-carrizo.jpg",
        },
        { name: "Azurduy Wayar Andres Alejandro", role: "Otorrinolaringología" },
      ],
    },
    {
      title: "Especialidades médicas",
      description:
        "El seguimiento clínico del paciente a lo largo del tratamiento, desde los primeros controles.",
      members: [
        { name: "Yannibelli Patricia", role: "Pediatría" },
        {
          name: "Henrichsen Julieta",
          role: "Pediatría",
          photo: "/equipo/julieta-henrichsen.jpg",
        },
        { name: "Carmona Noelia", role: "Nutrición", photo: "/equipo/noelia-carmona.jpg" },
        { name: "Echagüe Vila Agustina", role: "Dermatología" },
      ],
    },
    {
      title: "Salud bucal y ortodoncia",
      description:
        "El cuidado de la boca, los maxilares y las piezas dentarias en cada etapa del crecimiento.",
      members: [
        { name: "Giorgi Mariano", role: "Odontología", photo: "/equipo/mariano-giorgi.jpg" },
        { name: "Langsam Analía", role: "Odontopediatría" },
        {
          name: "Urban Rodríguez Carla",
          role: "Odontopediatría",
          photo: "/equipo/carla-urban-rodriguez.jpg",
        },
        {
          name: "Ávila Claudia Marcela",
          role: "Ortodoncia",
          photo: "/equipo/claudia-avila.jpg",
        },
        { name: "Romero Gilda", role: "Mecánica dental" },
      ],
    },
    {
      title: "Rehabilitación y acompañamiento",
      description:
        "El trabajo sobre el habla, la alimentación, el movimiento y la contención de la familia.",
      members: [
        { name: "Carmona Samanta", role: "Fonoaudiología" },
        { name: "Miloro María", role: "Fonoaudiología", photo: "/equipo/maria-miloro.jpg" },
        { name: "Spizzirri Alejandra", role: "Kinesiología" },
        { name: "Basualdo Vanesa", role: "Psicología" },
        { name: "Gantner Erica", role: "Psicología" },
      ],
    },
  ],
};

/**
 * Notas y videos migrados del sitio actual (asociacion-piel.org.ar/web/noticias y
 * los videos de su home), como pidió PIEL en las observaciones 2026.
 *
 * Las notas apuntan a la publicación original del medio, no a la copia del sitio
 * viejo, que va a dejar de existir. Las fechas son las de publicación original.
 * Quedó afuera "Puentes de esperanza": el video ya no está disponible en YouTube.
 *
 * Es la carga inicial: desde /panel → Prensa se pueden sumar, editar o quitar.
 */
export const prensaContent: PrensaPageContent = {
  header: {
    title: "Prensa",
    subtitle: "Notas y menciones en medios de comunicación.",
  },
  intro: "Reunimos acá las notas y menciones de PIEL en distintos medios de comunicación.",
  items: [
    {
      title: "Labio leporino",
      outlet: "Desde la Vida",
      date: "Octubre 2016",
      href: "https://www.youtube.com/watch?v=8U30GIVdmcs",
      kind: "video",
    },
    {
      title:
        "La Asociación PIEL, una entidad que da respuesta a las necesidades de chicos con distintas patologías",
      outlet: "La Ciudad Avellaneda",
      date: "Agosto 2016",
      href: "https://laciudadavellaneda.com.ar/la-asociacion-piel-una-entidad-que-da-respuesta-a-las-necesidades-de-chicos-con-distintas-patologias/",
      kind: "nota",
    },
    {
      title: "A Visit to Asociación Piel",
      outlet: "World of Children",
      date: "2016",
      href: "https://worldofchildren.org/a-visit-to-asociacion-piel/",
      kind: "nota",
    },
    {
      title: "Una fundación que asiste a bebes con malformaciones",
      outlet: "La Nación",
      date: "Noviembre 2015",
      href: "https://www.lanacion.com.ar/sociedad/una-fundacion-que-asiste-a-bebes-con-malformaciones-nid1849939/",
      kind: "nota",
    },
    {
      title: "Labio leporino: cirugías",
      outlet: "Telefe Noticias",
      date: "Julio 2014",
      href: "https://www.youtube.com/watch?v=iP9uLjv3IG0",
      kind: "video",
    },
    {
      title: "Paula Torres en Asociación PIEL",
      outlet: "Banda 3.0 · TV Pública",
      date: "Junio 2014",
      href: "https://www.youtube.com/watch?v=8XlGLBYRABw",
      kind: "video",
    },
    {
      title: "La historia de Laura y Mirko",
      outlet: "Smile Train",
      date: "Mayo 2014",
      href: "https://www.youtube.com/watch?v=9yX8HdSlCvA",
      kind: "video",
    },
    {
      title: "Entrevista al Dr. Ricardo Bennun",
      outlet: "Diagnóstico y Debate",
      date: "Octubre 2013",
      href: "https://www.youtube.com/watch?v=9JHMrctvRE8",
      kind: "video",
    },
    {
      title: "PIEL – Premio UNICEF",
      outlet: "Asociación PIEL",
      date: "Agosto 2010",
      href: "https://www.youtube.com/watch?v=z0oP-cOkMOY",
      kind: "video",
    },
  ],
};
