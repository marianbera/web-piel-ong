import type { NavLink, NavSection } from "@/types/navigation";

// Rutas estables por SEO: solo cambian los labels visibles y los H1 para
// coincidir con el diagrama del cliente (Centro Médico, Tratamiento Integral, etc.).
export const mainNav: NavSection[] = [
  {
    label: "Centro Médico",
    href: "/quienes-somos",
    links: [
      { label: "Nosotros", href: "/quienes-somos/nosotros", description: "Visión, misión y valores" },
      // TODO(PIEL): actualizar años de trayectoria a 2026 (los docs dicen "más de 35 años").
      { label: "Historia", href: "/quienes-somos/historia", description: "Más de 35 años de trayectoria" },
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
      { label: "Qué es la fisura", href: "/pacientes/que-es-fisura" },
      { label: "Cuidados", href: "/pacientes/cuidados" },
      { label: "Alimentación", href: "/pacientes/alimentacion" },
      { label: "Acompañamiento", href: "/pacientes/acompanamiento" },
      { label: "Desarrollo", href: "/pacientes/desarrollo" },
      { label: "Preguntas frecuentes", href: "/pacientes/faq" },
      { label: "Guías y materiales", href: "/pacientes/guias" },
    ],
  },
  {
    label: "Cómo acceder",
    href: "/como-acceder",
    links: [
      { label: "Pacientes de Argentina", href: "/como-acceder/argentina" },
      { label: "Pacientes internacionales", href: "/como-acceder/internacional" },
      { label: "Obras sociales y cobertura", href: "/como-acceder/obras-sociales" },
      // TODO(PIEL): página pendiente de creación (Fase 5) — la ruta aún no tiene page.tsx.
      { label: "Acceso al tratamiento (becas)", href: "/como-acceder/acceso" },
      { label: "Consultas y turnos", href: "/como-acceder/consultas" },
      // TODO(PIEL): página pendiente de creación (Fase 5) — la ruta aún no tiene page.tsx.
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
