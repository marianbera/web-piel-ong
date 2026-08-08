import type { AmountOption } from "@/types/donation";

interface AmountSelectorProps {
  options: AmountOption[];
  selected: number | null;
  customAmount: string;
  onSelect: (value: number) => void;
  onCustomAmountChange: (value: string) => void;
}

export default function AmountSelector({
  options,
  selected,
  customAmount,
  onSelect,
  onCustomAmountChange,
}: AmountSelectorProps) {
  return (
    <div>
      <span className="block text-sm font-semibold text-piel-text">Elegí un monto</span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {options.map((option) => {
          const isActive = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              aria-pressed={isActive}
              className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-piel-navy bg-piel-navy text-white"
                  : "border-piel-navy/25 text-piel-navy hover:border-piel-navy"
              }`}
            >
              {option.label}
            </button>
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
