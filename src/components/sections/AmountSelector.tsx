import type { AmountOption, DonationFrequency } from "@/types/donation";

interface AmountSelectorProps {
  options: AmountOption[];
  selected: number | null;
  customAmount: string;
  onSelect: (value: number) => void;
  onCustomAmountChange: (value: string) => void;
  frequency: DonationFrequency;
  onFrequencyChange: (value: DonationFrequency) => void;
  /** Correo para dar de baja el aporte mensual. Vacío = solo se menciona Mercado Pago. */
  bajaMensualEmail?: string;
}

const FREQUENCIES: { value: DonationFrequency; label: string; suffix: string }[] = [
  { value: "unica", label: "Por única vez", suffix: "aporte único" },
  { value: "mensual", label: "Todos los meses", suffix: "por mes" },
];

export default function AmountSelector({
  options,
  selected,
  customAmount,
  onSelect,
  onCustomAmountChange,
  frequency,
  onFrequencyChange,
  bajaMensualEmail,
}: AmountSelectorProps) {
  const suffix = FREQUENCIES.find((item) => item.value === frequency)!.suffix;

  return (
    <div>
      <span className="block text-sm font-semibold text-piel-text">Elegí la modalidad</span>
      <div className="mt-3 flex flex-wrap gap-3">
        {FREQUENCIES.map((item) => {
          const isActive = frequency === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onFrequencyChange(item.value)}
              aria-pressed={isActive}
              className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-piel-navy bg-piel-navy text-white"
                  : "border-piel-navy/25 text-piel-navy hover:border-piel-navy"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* El aporte mensual es una suscripción de Mercado Pago: se autoriza y se
          cancela desde la cuenta de MP de quien dona. */}
      {frequency === "mensual" && (
        <p className="no-justify mt-3 max-w-xl text-xs leading-relaxed text-piel-text/65">
          Para el aporte mensual vas a ingresar con tu cuenta de Mercado Pago. Podés darlo de
          baja cuando quieras desde esa cuenta
          {bajaMensualEmail ? (
            <>
              {" "}o escribiendo a{" "}
              <a
                href={`mailto:${bajaMensualEmail}`}
                className="font-semibold text-piel-navy underline underline-offset-2"
              >
                {bajaMensualEmail}
              </a>
            </>
          ) : null}
          .
        </p>
      )}

      <span className="mt-6 block text-sm font-semibold text-piel-text">Elegí un monto</span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {options.map((option) => {
          const isActive = selected === option.value;
          return (
            <div key={option.value} className="flex flex-col items-center gap-1">
              <button
                type="button"
                onClick={() => onSelect(option.value)}
                aria-pressed={isActive}
                aria-label={`${option.label} — ${suffix}`}
                className={`w-full rounded-full border-2 px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-piel-navy bg-piel-navy text-white"
                    : "border-piel-navy/25 text-piel-navy hover:border-piel-navy"
                }`}
              >
                {option.label}
              </button>
              {/* PIEL pidió que debajo de cada monto se aclare la modalidad. */}
              <span aria-hidden className="text-xs text-piel-text/60">
                {suffix}
              </span>
            </div>
          );
        })}
      </div>

      <label htmlFor="custom-amount" className="mt-4 block text-sm text-piel-text/80">
        Otro monto (en pesos)
      </label>
      <input
        id="custom-amount"
        type="number"
        min="1"
        inputMode="numeric"
        placeholder="Ingresá un monto"
        value={customAmount}
        onChange={(e) => onCustomAmountChange(e.target.value)}
        className="mt-2 w-full rounded-full border border-piel-navy/20 px-4 py-2 text-sm text-piel-text focus:outline-none focus:ring-2 focus:ring-piel-navy sm:w-64"
      />
    </div>
  );
}
