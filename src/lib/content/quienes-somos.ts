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
    subtitle: "Un centro de referencia con más de 37 años de trayectoria.",
  },
  intro:
    "PIEL es un centro de cirugía plástica infantil especializado en el **tratamiento integral** de fisuras labio-álveolo-palatinas, con **más de 5.000 pacientes tratados** desde su fundación en 1988.",
  sections: [
    {
      title: "Nosotros",
      description: "Visión, misión y valores que guían nuestro trabajo.",
      href: "/quienes-somos/nosotros",
    },
    {
      title: "Historia",
      description: "Más de 37 años de trayectoria acompañando a familias.",
      href: "/quienes-somos/historia",
    },
    {
      title: "Premios",
      description: "Reconocimientos institucionales recibidos a lo largo de los años.",
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
    "Hoy, PIEL cuenta con una sede donde se brinda **asistencia y rehabilitación interdisciplinaria** a través de consultorios externos, integrando especialidades como cirugía plástica infantil y cráneo-maxilofacial, neonatología, pediatría, genética, odontopediatría, ortodoncia, fonoaudiología, otorrinolaringología, psicología y asistencia social.",
  ],
  milestonesTitle: "Hitos",
  // Solo hitos reales datados del doc fuente (2.2). El timeline anterior (Cátedra UBA, hitos genéricos) era inventado y se descartó.
  milestones: [
    {
      year: "25 de octubre de 1988",
      title: "Fundación de Asociación PIEL",
      description:
        "Se crea PIEL para apoyar la investigación, prevención, docencia y asistencia en el ámbito de la cirugía plástica y craneofacial infantil.",
    },
    {
      year: "31 de julio de 1989",
      title: "Personería jurídica",
      description: "PIEL obtiene su personería jurídica (I.G.J. N° 581).",
    },
    {
      year: "1994",
      title: "Sede propia en Avellaneda",
      description:
        "PIEL concreta la adquisición de su sede propia en Avellaneda, Provincia de Buenos Aires.",
    },
  ],
};

export const premiosContent: PremiosPageContent = {
  header: {
    title: "Premios y reconocimientos",
    subtitle:
      "La trayectoria de PIEL ha sido reconocida a nivel nacional e internacional por su trabajo en el tratamiento de fisuras labio-alvéolo-palatinas y su modelo de atención interdisciplinario.",
  },
  // TODO(PIEL): completar con reconocimientos nuevos posteriores a 2018, si los hubiera.
  // Nombre del fundador unificado a "Dr. Roberto Bennun" por decisión del cliente (el doc traía "Ricardo D. Bennun").
  awards: [
    {
      year: "2018",
      text: "Premio **“Abanderados de la Argentina Solidaria 2018”**, otorgado al Dr. Roberto Bennun por Canal 13, grupo Clarín.",
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
      text: "Premio al Dr. Roberto Bennun, **Fundación World of Children** (EE.UU.), en reconocimiento a quienes colaboran con la salud de los niños desamparados en el mundo.",
    },
    {
      year: "2011",
      text: "Entidad seleccionada por **FARMACITY S.A.** para su campaña solidaria a través de sus empleados.",
    },
    {
      year: "2002 – actualidad",
      text: "Subsidio de la **Fundación Smile Train** (EE.UU.), Miembro Asociado en Argentina, para el Programa en Conjunto de Cirugías Gratuitas para niños de escasos recursos con fisuras labio palatinas.",
    },
    {
      year: "2008 – actualidad",
      text: "Subsidio de la **Fundación Herrod** (Suiza) para la provisión de instrumental médico para la atención interdisciplinaria de niños con fisuras labio palatinas.",
    },
    {
      year: "2008 – 2010",
      text: "Entidad seleccionada por **Colgate-Palmolive** para su campaña anual “Todos por una Sonrisa”.",
    },
    {
      year: "2009",
      text: "Nominación del **Honorable Senado de la Nación**, por una nueva técnica para el tratamiento de pacientes con fisuras.",
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
};

export const equipoContent: EquipoPageContent = {
  header: {
    title: "Equipo",
    subtitle: "El equipo interdisciplinario detrás de cada tratamiento.",
  },
  intro:
    "En PIEL, el tratamiento es el resultado del trabajo de un **equipo interdisciplinario**. Cada paciente es acompañado por profesionales de distintas especialidades que trabajan de manera coordinada, lo que permite abordar el tratamiento **de forma integral y sostenida en el tiempo**.",
  founder: {
    // Nombre del fundador unificado a "Dr. Roberto Bennun" en todo el sitio (decisión del cliente).
    name: "Dr. Roberto Bennun",
    role: "Fundador y Director Médico",
    bio: "Es **una de las figuras más reconocidas** de la cirugía plástica infantil en Argentina. Exdirector del Servicio de Cirugía Plástica del **Hospital de Pediatría Juan P. Garrahan**, dedicó su carrera al tratamiento de fisuras labio alvéolo palatinas y al desarrollo de un modelo de atención integral que hoy define a PIEL.",
    // TODO(PIEL): falta el destino real de "Ver trayectoria completa" (página/bio del fundador).
    cta: { label: "Ver trayectoria completa", href: "#" },
  },
  directionTitle: "Dirección médica y cirujanos principales",
  // TODO(PIEL): los perfiles individuales de los cirujanos principales están pendientes de PIEL.
  directionNote:
    "El equipo de cirugía plástica da continuidad al modelo desarrollado por el Dr. Roberto Bennun, asegurando la **calidad técnica y la evolución del tratamiento**.",
  rosterTitle: "Equipo médico",
  rosterNote:
    "Estos son los profesionales que integran el equipo, agrupados por área. Cada paciente es acompañado por los que su tratamiento necesite, **en coordinación permanente entre especialidades**.",
  // Los profesionales son exactamente los del roster del doc fuente (2.4): lo único
  // que cambió es que los nombres que venían agrupados en una línea ("Langsam Analía
  // y Urban Rodríguez Carla") ahora son una card cada uno, y las especialidades se
  // ordenaron por área. No se agregó ni se quitó ninguna persona.
  // TODO(PIEL): faltan las fotos de los profesionales (`public/equipo/<archivo>.jpg`).
  groups: [
    {
      title: "Cirugía y anestesia",
      description:
        "El equipo quirúrgico que realiza las intervenciones de labio, paladar y estructuras craneofaciales.",
      members: [
        { name: "Dr. Roberto Bennun", role: "Cirugía cráneo-maxilo-facial" },
        { name: "Astrada Silvana", role: "Cirugía cráneo-maxilo-facial" },
        { name: "Camacho Roy", role: "Cirugía cráneo-maxilo-facial" },
        { name: "Novoa Alejandro", role: "Cirugía traumatología" },
        { name: "Moggi Luis", role: "Anestesiología" },
        { name: "Ventorrutti Tatiana", role: "Anestesiología" },
        { name: "Carrizo Ricardo", role: "Instrumentación quirúrgica" },
      ],
    },
    {
      title: "Especialidades médicas",
      description:
        "El seguimiento clínico del paciente a lo largo del tratamiento, desde los primeros controles.",
      members: [
        { name: "Yannibelli Patricia", role: "Pediatría" },
        { name: "Henrichsen Julieta", role: "Pediatría" },
        { name: "Rivelli Ramiro", role: "Otorrinolaringología" },
        { name: "Echague Vila Agustina", role: "Dermatología" },
      ],
    },
    {
      title: "Salud bucal y ortodoncia",
      description:
        "El cuidado de la boca, los maxilares y las piezas dentarias en cada etapa del crecimiento.",
      members: [
        { name: "Giorgi Mariano", role: "Odontología" },
        { name: "Langsam Analía", role: "Odontopediatría" },
        { name: "Urban Rodríguez Carla", role: "Odontopediatría" },
        { name: "Ávila Claudia", role: "Ortodoncia" },
        { name: "Romero Gilda", role: "Mecánica dental" },
      ],
    },
    {
      title: "Rehabilitación y acompañamiento",
      description:
        "El trabajo sobre el habla, la alimentación, el movimiento y la contención de la familia.",
      members: [
        { name: "Carmona Samanta", role: "Fonoaudiología" },
        { name: "Miloro María", role: "Fonoaudiología" },
        { name: "Basualdo Vanesa", role: "Psicología" },
        { name: "Gantner Erica", role: "Psicología" },
        { name: "Carmona Noelia", role: "Nutrición" },
        { name: "Spizzirri Alejandra", role: "Kinesiología" },
      ],
    },
  ],
};

// TODO(PIEL): sin notas entregadas — el doc 2.5 solo dice "agregar todas las notas en medios". Completar cuando PIEL las provea. No inventar.
export const prensaContent: PrensaPageContent = {
  header: {
    title: "Prensa",
    subtitle: "Notas y menciones en medios de comunicación.",
  },
  intro: "Reunimos acá las notas y menciones de PIEL en distintos medios de comunicación.",
  items: [],
};
