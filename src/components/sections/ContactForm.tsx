"use client";

import { useState, type FormEvent } from "react";
import Card from "@/components/ui/Card";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Ocurrió un error. Intentá de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Card padding="lg" className="mt-10 max-w-xl">
        <h2 className="text-lg font-semibold text-piel-navy">¡Gracias por escribirnos!</h2>
        <p className="mt-2 text-piel-text/80">
          Recibimos tu mensaje y te vamos a responder a la brevedad.
        </p>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-xl flex-col gap-6">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-piel-text">
          Nombre completo
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-full border border-piel-navy/20 px-4 py-2 text-sm text-piel-text focus:outline-none focus:ring-2 focus:ring-piel-navy"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-piel-text">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-full border border-piel-navy/20 px-4 py-2 text-sm text-piel-text focus:outline-none focus:ring-2 focus:ring-piel-navy"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-piel-text">
          Teléfono (opcional)
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full rounded-full border border-piel-navy/20 px-4 py-2 text-sm text-piel-text focus:outline-none focus:ring-2 focus:ring-piel-navy"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-piel-text">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-piel-navy/20 px-4 py-3 text-sm text-piel-text focus:outline-none focus:ring-2 focus:ring-piel-navy"
        />
      </div>

      {status === "error" && <p className="text-sm font-medium text-red-700">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
