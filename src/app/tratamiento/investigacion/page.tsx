import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ProseSections from "@/components/sections/ProseSections";
import PendingSections from "@/components/sections/PendingSections";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { investigacionContent } from "@/lib/content/tratamiento";

export const metadata: Metadata = {
  title: investigacionContent.header.title,
  description: investigacionContent.header.subtitle,
};

export default function InvestigacionPage() {
  const { header, intro, sections, pending, note } = investigacionContent;

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
          // TODO(PIEL): falta el contenido de los tres bloques. Mientras tanto se
          // publica la estructura que pide el diagrama, no texto inventado.
          <PendingSections
            blocks={pending}
            note={note}
            cta={{ label: "Escribir al equipo", href: "/contacto" }}
          />
        )}
      </PageBody>
    </>
  );
}
