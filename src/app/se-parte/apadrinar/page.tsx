import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import { apadrinarContent } from "@/lib/content/apadrinar";

export const metadata: Metadata = {
  title: apadrinarContent.header.title,
  description: apadrinarContent.header.subtitle,
};

export default function ApadrinarPage() {
  return (
    <>
      <PageHeader {...apadrinarContent.header} />
      <ComoAccederSection content={apadrinarContent} />
    </>
  );
}
