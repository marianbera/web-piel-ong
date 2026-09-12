import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import { obrasSocialesContent } from "@/lib/content/como-acceder";
import { getCoverages } from "@/lib/admin/store";

export const metadata: Metadata = {
  title: obrasSocialesContent.header.title,
  description: obrasSocialesContent.header.subtitle,
};

// El listado de coberturas se edita desde /panel.
export const dynamic = "force-dynamic";

export default async function ObrasSocialesPage() {
  const coverages = await getCoverages();

  return (
    <>
      <PageHeader {...obrasSocialesContent.header} />
      <ComoAccederSection
        content={{ ...obrasSocialesContent, coverages: coverages.map((c) => c.name) }}
      />
    </>
  );
}
