import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import { consultasContent } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: consultasContent.header.title,
  description: consultasContent.header.subtitle,
};

export default function ConsultasPage() {
  return (
    <>
      <PageHeader {...consultasContent.header} />
      <ComoAccederSection content={consultasContent} />
    </>
  );
}
