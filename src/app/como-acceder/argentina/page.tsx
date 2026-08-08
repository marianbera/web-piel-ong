import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import { argentinaContent } from "@/lib/content/como-acceder";

export const metadata: Metadata = {
  title: argentinaContent.header.title,
  description: argentinaContent.header.subtitle,
};

export default function ArgentinaPage() {
  return (
    <>
      <PageHeader {...argentinaContent.header} />
      <ComoAccederSection content={argentinaContent} />
    </>
  );
}
