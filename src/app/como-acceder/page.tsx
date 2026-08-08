import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import HubSection from "@/components/sections/HubSection";
import { comoAccederHub } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: "Cómo acceder al tratamiento",
  description: comoAccederHub.header.subtitle,
};

export default function ComoAccederPage() {
  return (
    <>
      <PageHeader {...comoAccederHub.header} />
      <HubSection intro={comoAccederHub.intro} sections={comoAccederHub.sections} />
    </>
  );
}
