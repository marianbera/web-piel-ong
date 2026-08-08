import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import EmptyState from "@/components/ui/EmptyState";
import SectionHeading from "@/components/ui/SectionHeading";
import { empresasContent } from "@/lib/content/se-parte";

export const metadata: Metadata = {
  title: empresasContent.header.title,
  description: empresasContent.header.subtitle,
};

export default function EmpresasPage() {
  return (
    <>
      <PageHeader {...empresasContent.header} />
      <ComoAccederSection content={empresasContent} />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading title="Empresas que nos acompañan" />
        {/* TODO(PIEL): espacio para logos de empresas que colaboran (pendiente de entrega). */}
        <EmptyState message="Próximamente: las empresas que acompañan a Asociación PIEL." />
      </section>
    </>
  );
}
