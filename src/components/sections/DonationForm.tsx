"use client";

import { useState, type FormEvent } from "react";
import AmountSelector from "@/components/sections/AmountSelector";
import type { AmountOption, DonationFrequency, DonationType } from "@/types/donation";

type Status = "idle" | "loading" | "error";

interface DonationFormProps {
  amountOptions: AmountOption[];
  type: DonationType;
  submitLabel: string;
}

export default function DonationForm({ amountOptions, type, submitLabel }: DonationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(amountOptions[0]?.value ?? null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<DonationFrequency>("mensual");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSelectPreset(value: number) {
    setSelectedAmount(value);
    setCustomAmount("");
  }

  function handleCustomAmountChange(value: string) {
    setCustomAmount(value);
    setSelectedAmount(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const amount = customAmount ? Number(customAmount) : selectedAmount;
    if (!amount || amount <= 0) {
      setErrorMessage("Elegí o ingresá un monto válido.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/donations/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount,
          frequency,
          type,
          origin: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) {
        throw new Error(data.error ?? "No se pudo procesar la donación.");
      }

      // A partir de acá el pago sigue en Mercado Pago. El estado final lo
      // confirma el webhook, no este redirect.
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Ocurrió un error. Intentá de nuevo."
      );
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-xl flex-col gap-6">
      <AmountSelector
        options={amountOptions}
        selected={selectedAmount}
        customAmount={customAmount}
        onSelect={handleSelectPreset}
        onCustomAmountChange={handleCustomAmountChange}
        frequency={frequency}
        onFrequencyChange={setFrequency}
      />

      <div>
        <label htmlFor="donor-name" className="block text-sm font-semibold text-piel-text">
          Nombre completo
        </label>
        <input
          id="donor-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-full border border-piel-navy/20 px-4 py-2 text-sm text-piel-text focus:outline-none focus:ring-2 focus:ring-piel-navy"
        />
      </div>

      <div>
        <label htmlFor="donor-email" className="block text-sm font-semibold text-piel-text">
          Email
        </label>
        <input
          id="donor-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-full border border-piel-navy/20 px-4 py-2 text-sm text-piel-text focus:outline-none focus:ring-2 focus:ring-piel-navy"
        />
      </div>

      {status === "error" && <p className="text-sm font-medium text-red-700">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Procesando..." : submitLabel}
      </button>
    </form>
  );
}
