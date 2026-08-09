import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ProseSections from "@/components/sections/ProseSections";
import PendingSections from "@/components/sections/PendingSections";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { medicosContent } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: medicosContent.header.title,
  description: medicosContent.header.subtitle,
};

export default function MedicosPage() {
  const { header, intro, sections, pending, note } = medicosContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {sections.length > 0 ? (
          <ProseSections sections={sections} />
        ) : (
          // TODO(PIEL): falta el contenido de los tres bloques (derivar un paciente ·
          // materiales · protocolos). Se publica la estructura, no texto inventado.
          <PendingSections
            blocks={pending}
            note={note}
            cta={{ label: "Contactar al equipo", href: "/contacto" }}
          />
        )}
      </PageBody>
    </>
  );
}
