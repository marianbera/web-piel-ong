import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import { obrasSocialesContent } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: obrasSocialesContent.header.title,
  description: obrasSocialesContent.header.subtitle,
};

export default function ObrasSocialesPage() {
  return (
    <>
      <PageHeader {...obrasSocialesContent.header} />
      <ComoAccederSection content={obrasSocialesContent} />
    </>
  );
}
