import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import { accesoContent } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: accesoContent.header.title,
  description: accesoContent.header.subtitle,
};

export default function AccesoPage() {
  return (
    <>
      <PageHeader {...accesoContent.header} />
      <ComoAccederSection content={accesoContent} />
    </>
  );
}
