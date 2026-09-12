"use client";

import type { ReactNode } from "react";

/** Fila de la lista del editor: título, controles de orden y borrado. */
export default function RowShell({
  title,
  index,
  total,
  onMove,
  onRemove,
  children,
}: {
  title: string;
  index: number;
  total: number;
  onMove: (from: number, to: number) => void;
  onRemove: (index: number) => void;
  children: ReactNode;
}) {
  const button =
    "rounded-lg border border-piel-navy/15 px-2 py-1 text-xs font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-piel-navy";

  return (
    <li className="rounded-2xl border border-piel-navy/10 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-piel-navy/10 pb-3">
        <p className="font-semibold text-piel-navy">{title || <em className="text-piel-text/40">Sin título</em>}</p>
        <div className="flex items-center gap-1.5">
          <button type="button" className={button} onClick={() => onMove(index, index - 1)} disabled={index === 0} aria-label="Subir">
            ↑
          </button>
          <button type="button" className={button} onClick={() => onMove(index, index + 1)} disabled={index === total - 1} aria-label="Bajar">
            ↓
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm(`¿Eliminar "${title}"? No se puede deshacer.`)) onRemove(index);
            }}
            className="rounded-lg border border-piel-burgundy/30 px-2.5 py-1 text-xs font-semibold text-piel-burgundy transition hover:bg-piel-burgundy hover:text-white"
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="mt-4 grid gap-4">{children}</div>
    </li>
  );
}
