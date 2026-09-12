"use client";

import { useState } from "react";
import ImageField from "@/components/panel/ImageField";
import RowShell from "@/components/panel/RowShell";
import SaveBar from "@/components/panel/SaveBar";
import { usePanelSave } from "@/components/panel/usePanelSave";
import type { CollectionSchema } from "@/lib/admin/schemas";
import type { CollectionName } from "@/lib/admin/types";

type Row = Record<string, string | undefined> & { id: string };

const inputClass =
  "mt-1.5 w-full rounded-xl border border-piel-navy/20 px-3.5 py-2.5 text-sm text-piel-navy outline-none transition focus:border-piel-navy focus:ring-2 focus:ring-piel-navy/20";

/**
 * Editor genérico de una colección: alta, baja, edición y reordenamiento de una
 * lista de registros, con los campos que define el esquema. Lo usan todas las
 * secciones del panel salvo Equipo, que es anidada (grupos → profesionales).
 */
export default function CollectionEditor({
  collection,
  schema,
  initial,
  noun,
}: {
  collection: CollectionName;
  schema: CollectionSchema;
  initial: Row[];
  noun: string;
}) {
  const [rows, setRows] = useState<Row[]>(initial);
  const { save, state, error } = usePanelSave(collection);

  const update = (index: number, key: string, value: string | undefined) =>
    setRows((current) =>
      current.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );

  const move = (from: number, to: number) =>
    setRows((current) => {
      if (to < 0 || to >= current.length) return current;
      const next = [...current];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });

  const add = () =>
    setRows((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        // Los select arrancan con su primera opción para no guardar valores vacíos.
        ...Object.fromEntries(
          schema.fields.map((field) => [field.key, field.options?.[0]?.value ?? ""])
        ),
      } as Row,
    ]);

  return (
    <div>
      <ul className="grid gap-4">
        {rows.map((row, index) => (
          <RowShell
            key={row.id}
            title={row[schema.titleKey] ?? ""}
            index={index}
            total={rows.length}
            onMove={move}
            onRemove={(i) => setRows((current) => current.filter((_, j) => j !== i))}
          >
            {schema.fields.map((field) => {
              if (field.type === "image") {
                return (
                  <ImageField
                    key={field.key}
                    label={field.label}
                    help={field.help}
                    value={row[field.key]}
                    onChange={(src) => update(index, field.key, src)}
                  />
                );
              }

              return (
                <label key={field.key} className="block">
                  <span className="text-sm font-medium text-piel-navy">
                    {field.label}
                    {field.optional && (
                      <span className="ml-1 font-normal text-piel-text/50">(opcional)</span>
                    )}
                  </span>

                  {field.type === "textarea" ? (
                    <textarea
                      rows={3}
                      className={inputClass}
                      value={row[field.key] ?? ""}
                      placeholder={field.placeholder}
                      onChange={(event) => update(index, field.key, event.target.value)}
                    />
                  ) : field.type === "select" ? (
                    <select
                      className={inputClass}
                      value={row[field.key] ?? field.options?.[0]?.value}
                      onChange={(event) => update(index, field.key, event.target.value)}
                    >
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type === "url" ? "url" : "text"}
                      className={inputClass}
                      value={row[field.key] ?? ""}
                      placeholder={field.placeholder}
                      onChange={(event) => update(index, field.key, event.target.value)}
                    />
                  )}

                  {field.help && <span className="mt-1 block text-xs text-piel-text/60">{field.help}</span>}
                </label>
              );
            })}
          </RowShell>
        ))}
      </ul>

      {rows.length === 0 && (
        <p className="rounded-2xl border border-dashed border-piel-navy/20 bg-piel-offwhite px-6 py-10 text-center text-sm text-piel-text/60">
          Todavía no hay nada cargado. Agregá el primero con el botón de abajo.
        </p>
      )}

      <button
        type="button"
        onClick={add}
        className="mt-4 rounded-full border-2 border-piel-navy px-6 py-2.5 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white"
      >
        + {schema.addLabel}
      </button>

      <SaveBar state={state} error={error} count={rows.length} noun={noun} onSave={() => void save(rows)} />
    </div>
  );
}
