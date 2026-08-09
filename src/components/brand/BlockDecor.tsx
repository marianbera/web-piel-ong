"use client";

import { usePathname } from "next/navigation";
import BlockLayers, { type Intensity } from "@/components/brand/BlockLayers";
import { blockFromPathname } from "@/lib/brandBlock";

interface BlockDecorProps {
  variant?: "page" | "hero";
  intensity?: Intensity;
}

/**
 * Decoración de bloque deducida de la ruta actual. Evita tener que pasar el
 * bloque a mano en cada una de las páginas: `/quienes-somos/*` recibe líneas,
 * `/tratamiento/*` degradés y `/pacientes/*` formas orgánicas.
 *
 * Las rutas que no pertenecen a ninguno de los tres bloques (Home, Cómo acceder,
 * Sé parte, Contacto) no renderizan nada.
 */
export default function BlockDecor({ variant = "page", intensity = "medium" }: BlockDecorProps) {
  const block = blockFromPathname(usePathname());
  if (!block) return null;

  return <BlockLayers block={block} variant={variant} intensity={intensity} />;
}
