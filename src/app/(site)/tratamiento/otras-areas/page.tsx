import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
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

      <PageBody>
        <NumberedCards items={areas} />
      </PageBody>
    </>
  );
}
