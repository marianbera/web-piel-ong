import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import { internacionalContent } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: internacionalContent.header.title,
  description: internacionalContent.header.subtitle,
};

export default function InternacionalPage() {
  return (
    <>
      <PageHeader {...internacionalContent.header} />
      <ComoAccederSection content={internacionalContent} />
    </>
  );
}
