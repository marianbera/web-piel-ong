import type { Metadata } from "next";
import type { ReactNode } from "react";
import PanelNav from "@/components/panel/PanelNav";

export const metadata: Metadata = {
  title: "Panel · Asociación PIEL",
  // El panel nunca se indexa ni se enlaza desde el sitio.
  robots: { index: false, follow: false },
};

export default function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-piel-offwhite">
      <PanelNav />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">{children}</main>
    </div>
  );
}
