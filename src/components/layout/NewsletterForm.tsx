"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-piel-blue-soft"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Suscribirme"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-2 text-xs font-medium text-white">¡Gracias por suscribirte!</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs font-medium text-red-200">Ocurrió un error. Intentá de nuevo.</p>
      )}
    </div>
  );
}
