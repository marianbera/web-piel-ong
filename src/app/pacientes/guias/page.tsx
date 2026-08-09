import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { guiasContent } from "@/lib/content/pacientes";

export const metadata: Metadata = {
  title: "Guías y materiales",
  description: guiasContent.header.subtitle,
};

export default function GuiasPage() {
  const { header, intro, resources } = guiasContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const isAvailable = resource.href !== "#";
            return (
              <Reveal key={resource.title} delay={index * 80}>
                <Card className="flex flex-col">
                  <h3 className="text-lg font-semibold text-piel-navy">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-piel-text/75">
                    <RichText text={resource.description} />
                  </p>
                  {isAvailable ? (
                    <a
                      href={resource.href}
                      className="mt-4 text-sm font-semibold text-piel-navy hover:underline"
                    >
                      Descargar →
                    </a>
                  ) : (
                    <span className="mt-4 text-sm font-medium text-piel-text/70">
                      Disponible próximamente
                    </span>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
      </PageBody>
    </>
  );
}
