import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import HubSection from "@/components/sections/HubSection";
import { pacientesHub } from "@/lib/content/pacientes";

export const metadata: Metadata = {
  title: "Información para pacientes y familias",
  description: pacientesHub.header.subtitle,
};

export default function PacientesPage() {
  return (
    <>
      <PageHeader {...pacientesHub.header} />
      <HubSection intro={pacientesHub.intro} sections={pacientesHub.sections} />
    </>
  );
}
