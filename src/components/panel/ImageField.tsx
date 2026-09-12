"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ImageFieldProps {
  value?: string;
  onChange: (src: string | undefined) => void;
  label: string;
  help?: string;
}

export default function ImageField({ value, onChange, label, help }: ImageFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("/api/panel/upload", { method: "POST", body });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error ?? "No se pudo subir la imagen.");
      onChange(json.src);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "No se pudo subir la imagen.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div>
      <span className="block text-sm font-medium text-piel-navy">{label}</span>
      <div className="mt-2 flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-piel-navy/15 bg-piel-offwhite">
          {value ? (
            <Image src={value} alt="" fill sizes="80px" className="object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-xs text-piel-text/40">
              Sin foto
            </span>
          )}
        </div>

        <div className="flex flex-col items-start gap-2">
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="text-sm text-piel-text/70 file:mr-3 file:cursor-pointer file:rounded-full file:border-0 file:bg-piel-navy file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void upload(file);
            }}
          />
          {value && (
            <button
              type="button"
              onClick={() => onChange(undefined)}
              className="text-xs font-semibold text-piel-burgundy hover:underline"
            >
              Quitar imagen
            </button>
          )}
        </div>
      </div>

      {uploading && <p className="mt-2 text-xs text-piel-text/60">Subiendo…</p>}
      {error && <p className="mt-2 text-xs font-medium text-piel-burgundy">{error}</p>}
      {help && !error && <p className="mt-2 text-xs text-piel-text/60">{help}</p>}
    </div>
  );
}
