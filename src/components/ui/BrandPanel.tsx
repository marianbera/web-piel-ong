import type { ComponentType, SVGProps } from "react";
import { SupportIcon } from "@/components/ui/icons";

interface BrandPanelProps {
  /** Ícono decorativo central. */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Clases del contenedor cuando NO es fill (típicamente el aspect ratio). */
  className?: string;
  /** Llena el contenedor padre (sin bordes redondeados ni aspect), para heros full-bleed. */
  fill?: boolean;
}

/**
 * Panel de marca reutilizable: placeholder elegante para los lugares donde todavía
 * no hay foto real (degradado navy→azul + formas suaves + ícono tenue).
 * TODO(PIEL): reemplazar por <Image> con la foto real cuando esté disponible.
 */
export default function BrandPanel({
  icon: Icon = SupportIcon,
  className = "aspect-[4/3]",
  fill = false,
}: BrandPanelProps) {
  return (
    <div
      className={
        fill
          ? "relative h-full w-full overflow-hidden"
          : `relative w-full overflow-hidden rounded-3xl shadow-xl ${className}`
      }
    >
      <div aria-hidden className="bg-piel-gradient-navy absolute inset-0" />
      <div aria-hidden className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10" />
      <div aria-hidden className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/5" />
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-20 w-20 text-white/25" />
      </div>
    </div>
  );
}
