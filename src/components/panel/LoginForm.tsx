"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-piel-navy/20 px-3.5 py-2.5 text-sm text-piel-navy outline-none transition focus:border-piel-navy focus:ring-2 focus:ring-piel-navy/20";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError(null);

    const response = await fetch("/api/panel/login", {
      method: "POST",
      body: new FormData(event.currentTarget),
    });

    if (response.ok) {
      router.replace("/panel");
      router.refresh();
      return;
    }

    const json = await response.json().catch(() => ({}));
    setError(json.error ?? "No se pudo ingresar.");
    setSending(false);
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <label className="block">
        <span className="text-sm font-medium text-piel-navy">Usuario</span>
        <input name="user" autoComplete="username" required className={inputClass} />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-piel-navy">Contraseña</span>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={inputClass}
        />
      </label>

      {error && (
        <p role="alert" className="text-sm font-medium text-piel-burgundy">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-2 rounded-full bg-piel-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-piel-navy/90 disabled:opacity-50"
      >
        {sending ? "Ingresando…" : "Ingresar"}
      </button>
    </form>
  );
}
