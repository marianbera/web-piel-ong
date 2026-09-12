import Image from "next/image";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { AdminStory } from "@/lib/admin/types";

/** Historias reales cargadas desde el panel. */
export default function HistoriasGrid({ stories }: { stories: AdminStory[] }) {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story, index) => (
        <li key={story.id} className="flex">
          <Reveal delay={(index % 3) * 80} className="flex w-full">
            <Card radius="brand" className="flex h-full w-full flex-col" padding="sm">
              {story.photo && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={story.photo}
                    alt={`Historia de ${story.name}`}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              )}
              <h2 className="mt-4 text-lg font-semibold text-piel-navy">{story.name}</h2>
              <p className="mt-2 text-sm text-piel-text/75">{story.text}</p>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
