import Link from "next/link";
import { SCHEMAS } from "@/lib/admin/schemas";

const SECTIONS = [
  {
    href: "/panel/equipo",
    title: "Equipo médico",
    description: "Agregar, editar o dar de baja profesionales y sus fotos.",
  },
  ...Object.entries(SCHEMAS).map(([key, schema]) => ({
    href: `/panel/${key}`,
    title: schema.title,
    description: schema.description,
  })),
];

export default function PanelHome() {
  return (
    <>
      <h1 className="text-3xl font-bold text-piel-navy">Panel de contenido</h1>
      <p className="mt-3 max-w-2xl text-piel-text/75">
        Desde acá se edita el contenido del sitio que cambia con el tiempo. Los cambios se
        publican apenas se guardan — no hace falta avisarle a nadie.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {SECTIONS.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="block h-full rounded-2xl border border-piel-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-piel-navy">{section.title}</h2>
              <p className="mt-2 text-sm text-piel-text/70">{section.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-piel-navy">
                Editar →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-piel-navy/10 bg-white p-6">
        <h2 className="text-base font-semibold text-piel-navy">¿Y el resto del sitio?</h2>
        <p className="mt-2 text-sm text-piel-text/70">
          Los textos institucionales (qué es PIEL, el enfoque, las páginas de información para
          familias) no se editan desde acá a propósito: son textos largos, con formato y
          revisados médicamente. Para cambiarlos, escribile al equipo de desarrollo.
        </p>
      </div>
    </>
  );
}
