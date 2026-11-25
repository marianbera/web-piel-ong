import type { AmountOption, DonationFrequency, DurationOption } from "@/types/donation";

interface AmountSelectorProps {
  /** Montos fijos: no hay campo para escribir otro (pedido de PIEL). */
  options: AmountOption[];
  selected: number | null;
  onSelect: (value: number) => void;
  durations: DurationOption[];
  /** Duración elegida en meses; `null` = sin fecha de fin. */
  selectedMonths: number | null;
  onMonthsChange: (value: number | null) => void;
  frequency: DonationFrequency;
  onFrequencyChange: (value: DonationFrequency) => void;
  /** Muestra el selector "Por única vez / Todos los meses". Ver DONACION_UNICA_HABILITADA. */
  allowOneTime: boolean;
  /** Correo para dar de baja el aporte mensual. Vacío = solo se menciona Mercado Pago. */
  bajaMensualEmail?: string;
}

const FREQUENCIES: { value: DonationFrequency; label: string; suffix: string }[] = [
  { value: "unica", label: "Por única vez", suffix: "aporte único" },
  { value: "mensual", label: "Todos los meses", suffix: "por mes" },
];

const pesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

/** Botón de opción con el mismo estilo para modalidad, monto y duración. */
function optionClass(isActive: boolean) {
  return `w-full rounded-full border-2 px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? "border-piel-navy bg-piel-navy text-white"
      : "border-piel-navy/25 text-piel-navy hover:border-piel-navy"
  }`;
}

export default function AmountSelector({
  options,
  selected,
  onSelect,
  durations,
  selectedMonths,
  onMonthsChange,
  frequency,
  onFrequencyChange,
  allowOneTime,
  bajaMensualEmail,
}: AmountSelectorProps) {
  const suffix = FREQUENCIES.find((item) => item.value === frequency)!.suffix;
  const isMonthly = frequency === "mensual";

  return (
    <div>
      {allowOneTime && (
        <>
          <span className="mb-3 block text-sm font-semibold text-piel-text">Elegí la modalidad</span>
          <div className="mb-6 flex flex-wrap gap-3">
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
        </>
      )}

      <span className="block text-sm font-semibold text-piel-text">
        {isMonthly ? "Elegí tu aporte mensual" : "Elegí un monto"}
      </span>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {options.map((option) => {
          const isActive = selected === option.value;
          return (
            <div key={option.value} className="flex flex-col items-center gap-1">
              <button
                type="button"
                onClick={() => onSelect(option.value)}
                aria-pressed={isActive}
                aria-label={`${option.label} — ${suffix}`}
                className={optionClass(isActive)}
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

      {isMonthly && (
        <>
          <span className="mt-6 block text-sm font-semibold text-piel-text">
            ¿Durante cuánto tiempo?
          </span>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {durations.map((duration) => {
              const isActive = selectedMonths === duration.months;
              return (
                <button
                  key={duration.label}
                  type="button"
                  onClick={() => onMonthsChange(duration.months)}
                  aria-pressed={isActive}
                  className={optionClass(isActive)}
                >
                  {duration.label}
                </button>
              );
            })}
          </div>

          {/* Resumen de lo que se va a cobrar: es un cobro automático, tiene que quedar claro. */}
          {selected !== null && (
            <p aria-live="polite" className="mt-4 text-sm text-piel-text/80">
              Vas a aportar <strong>{pesos.format(selected)} por mes</strong>
              {selectedMonths !== null ? (
                <>
                  {" "}durante <strong>{selectedMonths} meses</strong> (
                  {pesos.format(selected * selectedMonths)} en total). Mercado Pago lo cobra
                  automáticamente cada mes y la suscripción termina sola.
                </>
              ) : (
                <>. Mercado Pago lo cobra automáticamente cada mes, hasta que lo des de baja.</>
              )}
            </p>
          )}

          {/* El aporte mensual es una suscripción de Mercado Pago: se autoriza y se
              cancela desde la cuenta de MP de quien dona. */}
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
        </>
      )}
    </div>
  );
}
