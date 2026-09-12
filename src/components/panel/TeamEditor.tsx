"use client";

import { useState } from "react";
import ImageField from "@/components/panel/ImageField";
import SaveBar from "@/components/panel/SaveBar";
import { usePanelSave } from "@/components/panel/usePanelSave";
import type { AdminTeamGroup } from "@/lib/admin/types";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-piel-navy/20 px-3.5 py-2.5 text-sm text-piel-navy outline-none transition focus:border-piel-navy focus:ring-2 focus:ring-piel-navy/20";
const smallButton =
  "rounded-lg border border-piel-navy/15 px-2 py-1 text-xs font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white disabled:opacity-30";

/**
 * Editor del Equipo médico: las áreas y, dentro de cada una, los profesionales.
 * Es el contenido que más va a cambiar con el tiempo — entra y sale gente — así
 * que es el que más cómodo tiene que estar.
 */
export default function TeamEditor({ initial }: { initial: AdminTeamGroup[] }) {
  const [groups, setGroups] = useState<AdminTeamGroup[]>(initial);
  const { save, state, error } = usePanelSave("equipo");

  const patchGroup = (gi: number, patch: Partial<AdminTeamGroup>) =>
    setGroups((current) => current.map((g, i) => (i === gi ? { ...g, ...patch } : g)));

  const moveMember = (gi: number, from: number, to: number) =>
    setGroups((current) =>
      current.map((group, i) => {
        if (i !== gi || to < 0 || to >= group.members.length) return group;
        const members = [...group.members];
        const [moved] = members.splice(from, 1);
        members.splice(to, 0, moved);
        return { ...group, members };
      })
    );

  const totalMembers = groups.reduce((sum, group) => sum + group.members.length, 0);

  return (
    <div>
      <div className="grid gap-6">
        {groups.map((group, gi) => (
          <section
            key={group.id}
            className="rounded-2xl border border-piel-navy/10 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="grid flex-1 gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-piel-navy">Nombre del área</span>
                  <input
                    className={inputClass}
                    value={group.title}
                    onChange={(event) => patchGroup(gi, { title: event.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-piel-navy">Descripción</span>
                  <input
                    className={inputClass}
                    value={group.description}
                    onChange={(event) => patchGroup(gi, { description: event.target.value })}
                  />
                </label>
              </div>
              <button
                type="button"
                onClick={() => {
                  const ok = window.confirm(
                    `¿Eliminar el área ${group.title} y sus ${group.members.length} profesionales?`
                  );
                  if (ok) setGroups((current) => current.filter((_, i) => i !== gi));
                }}
                className="rounded-lg border border-piel-burgundy/30 px-2.5 py-1 text-xs font-semibold text-piel-burgundy transition hover:bg-piel-burgundy hover:text-white"
              >
                Eliminar área
              </button>
            </div>

            <ul className="mt-5 grid gap-3">
              {group.members.map((member, mi) => (
                <li
                  key={member.id}
                  className="grid gap-4 rounded-xl border border-piel-navy/10 bg-piel-offwhite p-4 sm:grid-cols-[auto_1fr_auto] sm:items-start"
                >
                  <ImageField
                    label="Foto"
                    help="Retrato vertical 4:5. Sin foto se muestran las iniciales."
                    value={member.photo}
                    onChange={(photo) =>
                      patchGroup(gi, {
                        members: group.members.map((m, i) => (i === mi ? { ...m, photo } : m)),
                      })
                    }
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-piel-navy">Nombre</span>
                      <input
                        className={inputClass}
                        value={member.name}
                        placeholder="Apellido Nombre"
                        onChange={(event) =>
                          patchGroup(gi, {
                            members: group.members.map((m, i) =>
                              i === mi ? { ...m, name: event.target.value } : m
                            ),
                          })
                        }
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-piel-navy">Especialidad</span>
                      <input
                        className={inputClass}
                        value={member.role}
                        placeholder="Pediatría, Fonoaudiología…"
                        onChange={(event) =>
                          patchGroup(gi, {
                            members: group.members.map((m, i) =>
                              i === mi ? { ...m, role: event.target.value } : m
                            ),
                          })
                        }
                      />
                    </label>
                  </div>

                  <div className="flex items-center gap-1.5 sm:flex-col">
                    <button
                      type="button"
                      className={smallButton}
                      onClick={() => moveMember(gi, mi, mi - 1)}
                      disabled={mi === 0}
                      aria-label="Subir"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className={smallButton}
                      onClick={() => moveMember(gi, mi, mi + 1)}
                      disabled={mi === group.members.length - 1}
                      aria-label="Bajar"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const who = member.name || "este profesional";
                        if (window.confirm(`¿Eliminar a ${who}?`))
                          patchGroup(gi, { members: group.members.filter((_, i) => i !== mi) });
                      }}
                      className="rounded-lg border border-piel-burgundy/30 px-2 py-1 text-xs font-semibold text-piel-burgundy transition hover:bg-piel-burgundy hover:text-white"
                      aria-label={`Eliminar a ${member.name}`}
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() =>
                patchGroup(gi, {
                  members: [...group.members, { id: crypto.randomUUID(), name: "", role: "" }],
                })
              }
              className="mt-4 rounded-full border-2 border-piel-navy px-5 py-2 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white"
            >
              + Agregar profesional
            </button>
          </section>
        ))}
      </div>

      <button
        type="button"
        onClick={() =>
          setGroups((current) => [
            ...current,
            { id: crypto.randomUUID(), title: "", description: "", members: [] },
          ])
        }
        className="mt-4 rounded-full bg-piel-offwhite px-6 py-2.5 text-sm font-semibold text-piel-navy ring-1 ring-piel-navy/15 transition hover:bg-piel-navy hover:text-white"
      >
        + Agregar un área nueva
      </button>

      <SaveBar
        state={state}
        error={error}
        count={totalMembers}
        noun="profesional"
        onSave={() => void save(groups)}
      />
    </div>
  );
}
