import type { NavLink, NavSection } from "@/types/navigation";

// Rutas estables por SEO: solo cambian los labels visibles y los H1 para
// coincidir con el diagrama del cliente (Centro Médico, Tratamiento Integral, etc.).
export const mainNav: NavSection[] = [
  {
    label: "Centro Médico",
    href: "/quienes-somos",
    links: [
      { label: "Nosotros", href: "/quienes-somos/nosotros", description: "Visión, misión y valores" },
      { label: "Historia", href: "/quienes-somos/historia", description: "Más de 38 años de trayectoria" },
      { label: "Premios", href: "/quienes-somos/premios", description: "Premios y reconocimientos" },
      { label: "Equipo", href: "/quienes-somos/equipo", description: "Fundador, dirección médica y equipo" },
      { label: "Prensa", href: "/quienes-somos/prensa", description: "Notas y medios" },
    ],
  },
  {
    label: "Tratamiento Integral",
    href: "/tratamiento",
    links: [
      { label: "Nuestro enfoque", href: "/tratamiento/enfoque", description: "Modo de trabajo y diferencial" },
      // TODO(PIEL): confirmar cantidad de especialidades (diagrama menciona 14, el doc lista 11).
      { label: "Especialidades", href: "/tratamiento/especialidades", description: "Equipo interdisciplinario" },
      { label: "Otras áreas", href: "/tratamiento/otras-areas", description: "Cirugía plástica infantil" },
      { label: "Investigación y academia", href: "/tratamiento/investigacion", description: "Cátedra UBA y publicaciones" },
    ],
  },
  {
    label: "Información para pacientes y familias",
    href: "/pacientes",
    links: [
      { label: "Preguntas frecuentes", href: "/pacientes/faq", description: "Las consultas más habituales" },
      { label: "Labio leporino", href: "/labio-leporino", description: "Qué es, causas y tratamiento" },
      { label: "Cuidados y alimentación", href: "/pacientes/cuidados-y-alimentacion" },
      { label: "Acompañamiento", href: "/pacientes/acompanamiento" },
      { label: "Desarrollo", href: "/pacientes/desarrollo" },
    ],

  },
  {
    label: "Cómo acceder",
    href: "/como-acceder",
    links: [
      { label: "Obras sociales y cobertura", href: "/como-acceder/obras-sociales" },
      { label: "Consultas y turnos", href: "/como-acceder/consultas" },
      { label: "Acceso al tratamiento (becas)", href: "/como-acceder/acceso" },
      { label: "Pacientes de Argentina", href: "/como-acceder/argentina" },
      { label: "Pacientes internacionales", href: "/como-acceder/internacional" },
      { label: "Info para médicos", href: "/como-acceder/medicos" },
    ],

  },
  {
    label: "Sé parte",
    href: "/se-parte",
    links: [
      { label: "Donar", href: "/se-parte/donar", description: "Realizar una donación individual" },
      { label: "Apadrinar", href: "/se-parte/apadrinar", description: "Apadrinar un tratamiento" },
      { label: "Empresas (RSE)", href: "/se-parte/empresas", description: "Donar como empresa" },
    ],
  },
];

export const footerNav: NavLink[] = [
  { label: "Centro Médico", href: "/quienes-somos" },
  { label: "Tratamiento Integral", href: "/tratamiento" },
  { label: "Información para pacientes y familias", href: "/pacientes" },
  { label: "Cómo acceder", href: "/como-acceder" },
  { label: "Sé parte", href: "/se-parte" },
  { label: "Contacto", href: "/contacto" },
];
