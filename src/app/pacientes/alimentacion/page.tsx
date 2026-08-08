import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import StepsList from "@/components/sections/StepsList";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { alimentacionContent } from "@/lib/content/pacientes";

export const metadata: Metadata = {
  title: "Alimentación del bebé",
  description: alimentacionContent.header.subtitle,
};

export default function AlimentacionPage() {
  const { header, intro, tips } = alimentacionContent;

  return (
    <>
      <PageHeader {...header} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>
        <StepsList steps={tips} numbered={false} />
      </section>
    </>
  );
}
