import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import EmptyState from "@/components/ui/EmptyState";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Info para médicos",
  description: "Derivaciones, materiales y protocolos para profesionales.",
};

export default function MedicosPage() {
  return (
    <>
      <PageHeader
        title="Info para médicos"
        subtitle="Derivaciones, materiales y protocolos para profesionales."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg text-piel-text/80">
            Estamos preparando esta sección para profesionales de la salud.
          </p>
        </Reveal>
        {/* TODO(PIEL): sección SIN DOC. El diagrama pide: derivar un paciente · materiales · protocolos. No inventar. */}
        <EmptyState message="Próximamente vamos a publicar información para derivar pacientes, materiales y protocolos." />
      </section>
    </>
  );
}
