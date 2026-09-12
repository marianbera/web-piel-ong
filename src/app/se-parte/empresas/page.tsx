import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import EmptyState from "@/components/ui/EmptyState";
import SectionHeading from "@/components/ui/SectionHeading";
import { empresasContent } from "@/lib/content/se-parte";
import { getLogos } from "@/lib/admin/store";

export const metadata: Metadata = {
  title: empresasContent.header.title,
  description: empresasContent.header.subtitle,
};

// Los logos de empresas se cargan desde /panel.
export const dynamic = "force-dynamic";

export default async function EmpresasPage() {
  const logos = (await getLogos()).filter((logo) => logo.scope === "empresas");

  return (
    <>
      <PageHeader {...empresasContent.header} />
      <ComoAccederSection content={empresasContent} />

      <PageBody padding="none" decor={false} className="pb-20 pt-4">
        <SectionHeading title="Empresas que nos acompañan" />
        {logos.length === 0 ? (
          /* TODO(PIEL): cargar los logos desde /panel → Logos. */
          <EmptyState message="Próximamente: las empresas que acompañan a Asociación PIEL." />
        ) : (
          <LogoCarousel logos={logos} />
        )}
      </PageBody>
    </>
  );
}
