import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import WhereWeAre from "@/components/sections/WhereWeAre";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { argentinaContent, primeraConsultaFaqs } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: argentinaContent.header.title,
  description: argentinaContent.header.subtitle,
};

export default function ArgentinaPage() {
  return (
    <>
      <PageHeader {...argentinaContent.header} />
      <ComoAccederSection content={argentinaContent} />

      <PageBody tone="offwhite" intensity="subtle" padding="lg">
        <SectionHeading eyebrow="Antes de venir" title="Antes de tu primera consulta" />
        <FaqAccordion faqs={primeraConsultaFaqs} />

        <Reveal>
          <Link
            href="/como-acceder/consultas"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
          >
            Ver requisitos para la primera consulta
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>

        <WhereWeAre note="La atención es con turno previo." />
      </PageBody>
    </>
  );
}
