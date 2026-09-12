import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import HubSection from "@/components/sections/HubSection";
import { tratamientoHub } from "@/lib/content/tratamiento";

export const metadata: Metadata = {
  title: "Tratamiento integral",
  description: tratamientoHub.header.subtitle,
};

export default function TratamientoPage() {
  return (
    <>
      <PageHeader {...tratamientoHub.header} />
      <HubSection intro={tratamientoHub.intro} sections={tratamientoHub.sections} />
    </>
  );
}
