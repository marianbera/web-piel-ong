import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import FaqAccordion from "@/components/sections/FaqAccordion";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { faqContent } from "@/lib/content/pacientes";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: faqContent.header.subtitle,
};

export default function FaqPage() {
  const { header, intro, faqs } = faqContent;

  return (
    <>
      <PageHeader {...header} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>
        <FaqAccordion faqs={faqs} />
      </section>
    </>
  );
}
