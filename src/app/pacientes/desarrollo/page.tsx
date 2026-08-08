import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProseSections from "@/components/sections/ProseSections";
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>
        <ProseSections sections={sections} />
      </section>
    </>
  );
}
