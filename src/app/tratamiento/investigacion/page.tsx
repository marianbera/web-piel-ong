import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProseSections from "@/components/sections/ProseSections";
import EmptyState from "@/components/ui/EmptyState";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { investigacionContent } from "@/lib/content/tratamiento";

export const metadata: Metadata = {
  title: investigacionContent.header.title,
  description: investigacionContent.header.subtitle,
};

export default function InvestigacionPage() {
  const { header, intro, sections } = investigacionContent;

  return (
    <>
      <PageHeader {...header} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>
        {sections.length === 0 ? (
          <EmptyState message="Estamos preparando esta sección con la información académica y de investigación de PIEL." />
        ) : (
          <ProseSections sections={sections} />
        )}
      </section>
    </>
  );
}
