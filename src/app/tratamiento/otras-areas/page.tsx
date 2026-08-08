import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import NumberedCards from "@/components/sections/NumberedCards";
import { otrasAreasContent } from "@/lib/content/tratamiento";

export const metadata: Metadata = {
  title: "Otras áreas de cirugía plástica infantil",
  description: otrasAreasContent.header.subtitle,
};

export default function OtrasAreasPage() {
  const { header, areas } = otrasAreasContent;

  return (
    <>
      <PageHeader {...header} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <NumberedCards items={areas} />
      </section>
    </>
  );
}
