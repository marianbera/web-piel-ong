import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import HubSection from "@/components/sections/HubSection";
import { quienesSomosHub } from "@/lib/content/quienes-somos";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: quienesSomosHub.header.subtitle,
};

export default function QuienesSomosPage() {
  return (
    <>
      <PageHeader {...quienesSomosHub.header} />
      <HubSection intro={quienesSomosHub.intro} sections={quienesSomosHub.sections} />
    </>
  );
}
