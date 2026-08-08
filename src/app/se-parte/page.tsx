import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import HubSection from "@/components/sections/HubSection";
import { sePartHub } from "@/lib/content/se-parte";

export const metadata: Metadata = {
  title: sePartHub.header.title,
  description: sePartHub.header.subtitle,
};

export default function SePartePage() {
  return (
    <>
      <PageHeader {...sePartHub.header} />
      <HubSection intro={sePartHub.intro} sections={sePartHub.sections} />
    </>
  );
}
