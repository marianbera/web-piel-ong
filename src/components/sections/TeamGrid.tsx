import Image from "next/image";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { AdminTeamGroup } from "@/lib/admin/types";

/** Iniciales del profesional, para cuando todavía no hay foto. */
function initials(name: string) {
  return name
    .replace(/^(Dr\.?|Dra\.?|Lic\.?)\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

/**
 * Equipo médico en grilla. Reemplaza al carousel: PIEL pidió que los
 * profesionales se vean scrolleando para abajo, sin tener que mover una flecha.
 */
export default function TeamGroups({ groups, note }: { groups: AdminTeamGroup[]; note?: string }) {
  return (
    <div className="mt-8">
      {note && (
        <Reveal>
          <p className="max-w-3xl text-piel-text/75">
            <RichText text={note} />
          </p>
        </Reveal>
      )}

      {groups.map((group) => (
        <section key={group.id} className="mt-12">
          <Reveal>
            <h3 className="text-2xl font-bold text-piel-navy sm:text-3xl">{group.title}</h3>
            {group.description && (
              <p className="mt-2 max-w-2xl text-piel-text/75">{group.description}</p>
            )}
          </Reveal>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {group.members.map((member, index) => (
              <li key={member.id} className="flex">
                <Reveal delay={index * 60} className="flex w-full">
                  <Card radius="brand" padding="sm" className="flex w-full flex-col">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={`${member.name}, ${member.role} en Asociación PIEL`}
                          fill
                          sizes="(min-width: 1024px) 16rem, (min-width: 640px) 45vw, 90vw"
                          className="object-cover"
                        />
                      ) : (
                        /* TODO(PIEL): las fotos se cargan desde /panel → Equipo médico. */
                        <div
                          aria-hidden
                          className="bg-piel-gradient-navy flex h-full w-full items-center justify-center"
                        >
                          <span className="text-4xl font-semibold text-white/85">
                            {initials(member.name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-piel-burgundy">
                      {member.role}
                    </p>
                    <p className="mt-1 font-semibold leading-snug text-piel-navy">{member.name}</p>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
