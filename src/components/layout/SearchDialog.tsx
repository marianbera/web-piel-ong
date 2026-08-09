"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import BlobShape from "@/components/brand/BlobShape";
import { SearchIcon } from "@/components/ui/icons";
import { searchEntries } from "@/lib/search/match";
import type { SearchEntry } from "@/lib/search/searchIndex";

/** Atajos de arranque: los temas que más se buscan, para no partir de una pantalla vacía. */
const SUGGESTIONS = [
  "Alimentación",
  "Turnos",
  "Cirugía",
  "Qué es la fisura",
  "Obras sociales",
  "Donar",
];

interface SearchDialogProps {
  index: SearchEntry[];
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({ index, open, onClose }: SearchDialogProps) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => searchEntries(index, query), [index, query]);
  const hasQuery = query.trim().length >= 2;

  // Al abrir: foco en el input, estado limpio y scroll de fondo bloqueado.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
      return;
    }
    if (results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      go(results[active].href);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-20 sm:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button
            type="button"
            aria-label="Cerrar búsqueda"
            className="absolute inset-0 bg-piel-navy/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Buscar en el sitio"
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-piel-navy/10"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onKeyDown={onKeyDown}
          >
            <BlobShape
              variant="arc"
              color="blueSoft"
              opacity={0.16}
              rotate={90}
              className="absolute -right-10 -top-10 h-40 w-40"
            />

            <div className="relative flex items-center gap-3 border-b border-piel-navy/10 px-5 py-4">
              <SearchIcon className="h-5 w-5 shrink-0 text-piel-navy/50" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar en el sitio: alimentación, turnos, cirugía…"
                aria-label="Buscar en el sitio"
                aria-controls="search-results"
                className="w-full bg-transparent text-base text-piel-navy outline-none placeholder:text-piel-text/45"
              />
              <button
                type="button"
                onClick={onClose}
                className="hidden shrink-0 rounded-full border border-piel-navy/15 px-2.5 py-1 text-[0.7rem] font-semibold text-piel-text/60 transition hover:bg-piel-navy hover:text-white sm:block"
              >
                ESC
              </button>
            </div>

            <div id="search-results" className="relative max-h-[60vh] overflow-y-auto p-3">
              {!hasQuery && (
                <div className="px-2 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
                    Temas frecuentes
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => setQuery(suggestion)}
                        className="rounded-full border border-piel-navy/15 px-3.5 py-1.5 text-sm text-piel-navy transition hover:bg-piel-navy hover:text-white"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hasQuery && results.length === 0 && (
                <p className="px-2 py-8 text-center text-sm text-piel-text/70">
                  No encontramos resultados para <strong className="text-piel-navy">{query}</strong>.
                  <br />
                  Probá con otra palabra o{" "}
                  <button
                    type="button"
                    onClick={() => go("/contacto")}
                    className="font-semibold text-piel-navy underline underline-offset-2"
                  >
                    escribinos
                  </button>
                  .
                </p>
              )}

              {hasQuery && results.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {results.map((result, i) => (
                    <li key={result.href}>
                      <button
                        type="button"
                        onClick={() => go(result.href)}
                        onMouseEnter={() => setActive(i)}
                        aria-current={i === active ? "true" : undefined}
                        className={`flex w-full flex-col items-start gap-1 rounded-2xl px-4 py-3 text-left transition ${
                          i === active ? "bg-piel-blue-soft/25" : "hover:bg-piel-offwhite"
                        }`}
                      >
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-piel-navy">{result.title}</span>
                          <span className="rounded-full bg-piel-navy/10 px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-piel-navy/70">
                            {result.block}
                          </span>
                        </span>
                        {result.description && (
                          <span className="text-sm text-piel-text/70">{result.description}</span>
                        )}
                        {result.matchedKeyword && (
                          <span className="text-xs text-piel-text/55">
                            Incluye: {result.matchedKeyword}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
