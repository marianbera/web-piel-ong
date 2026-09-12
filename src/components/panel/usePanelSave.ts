"use client";

import { useCallback, useState } from "react";
import type { CollectionName } from "@/lib/admin/types";

export type SaveState = "idle" | "saving" | "saved" | "error";

/** Guardado de una colección contra /api/panel/save, con estado para el botón. */
export function usePanelSave(collection: CollectionName) {
  const [state, setState] = useState<SaveState>("idle");
  const [error, setError] = useState<string | null>(null);

  const save = useCallback(
    async (data: unknown[]) => {
      setState("saving");
      setError(null);
      try {
        const response = await fetch("/api/panel/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ collection, data }),
        });
        const json = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(json.error ?? "No se pudo guardar.");
        setState("saved");
        window.setTimeout(() => setState("idle"), 2500);
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : "No se pudo guardar.");
        setState("error");
      }
    },
    [collection]
  );

  return { save, state, error };
}
