import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ProseSections from "@/components/sections/ProseSections";
import GrowthTimeline from "@/components/sections/GrowthTimeline";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { desarrolloContent } from "@/lib/content/pacientes";

export const metadata: Metadata = {
  title: "Desarrollo y crecimiento",
  description: desarrolloContent.header.subtitle,
};

export default function DesarrolloPage() {
  const { header, intro, sections } = desarrolloContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {/* Línea de tiempo del crecimiento, del bebé a la edad escolar. */}
        <GrowthTimeline />

        <ProseSections sections={sections} />
      </PageBody>
    </>
  );
}
