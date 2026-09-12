"use client";

import type { SaveState } from "@/components/panel/usePanelSave";

/** Barra fija de guardado, compartida por todos los editores del panel. */
export default function SaveBar({
  state,
  error,
  onSave,
  count,
  noun,
}: {
  state: SaveState;
  error: string | null;
  onSave: () => void;
  count: number;
  noun: string;
}) {
  return (
    <div className="sticky bottom-0 z-10 -mx-4 mt-8 border-t border-piel-navy/10 bg-white/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-piel-text/70">
          {count} {count === 1 ? noun : `${noun}s`}
          {state === "saved" && (
            <span className="ml-3 font-semibold text-green-700">Cambios guardados ✓</span>
          )}
          {state === "error" && error && (
            <span className="ml-3 font-semibold text-piel-burgundy">{error}</span>
          )}
        </p>
        <button
          type="button"
          onClick={onSave}
          disabled={state === "saving"}
          className="rounded-full bg-piel-navy px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-piel-navy/90 disabled:opacity-50"
        >
          {state === "saving" ? "Guardando…" : "Guardar cambios"}
        </button>
      </div>
    </div>
  );
}
