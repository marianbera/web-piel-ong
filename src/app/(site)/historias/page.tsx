import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Reveal from "@/components/ui/Reveal";
import { historiasContent } from "@/lib/content/historias";
import HistoriasGrid from "@/components/sections/HistoriasGrid";
import { getStories } from "@/lib/admin/store";

export const metadata: Metadata = {
  title: historiasContent.header.title,
  description: historiasContent.header.subtitle,
};

// Las historias se cargan desde /panel.
export const dynamic = "force-dynamic";

export default async function HistoriasPage() {
  // Las historias se cargan desde el panel de administración.
  const stories = await getStories();

  return (
    <>
      <PageHeader {...historiasContent.header} />

      <PageBody padding="lg">
        <Reveal className="max-w-3xl">
          <p className="text-lg text-piel-text/80">{historiasContent.intro}</p>
        </Reveal>

        {stories.length === 0 ? (
          /* TODO(PIEL): cargar las historias reales desde /panel. */
          <EmptyState message="Estamos preparando esta sección con las historias de las familias que pasaron por PIEL." />
        ) : (
          <HistoriasGrid stories={stories} />
        )}
      </PageBody>
    </>
  );
}
