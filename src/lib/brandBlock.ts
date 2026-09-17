import type { BrandBlock } from "@/components/brand/tokens";

/**
 * A qué bloque de navegación pertenece una ruta. Los tres bloques grandes del
 * sitio tienen identidad visual propia (Tarea 2); el resto de las rutas
 * (Cómo acceder, Sé parte, Contacto, Home) no lleva decoración de bloque.
 */
const BLOCK_ROUTES: { prefix: string; block: BrandBlock }[] = [
  { prefix: "/quienes-somos", block: "centro" },
  { prefix: "/tratamiento", block: "tratamiento" },
  { prefix: "/pacientes", block: "pacientes" },
  // Viven en la raíz por SEO, pero pertenecen al mundo de pacientes y familias.
  { prefix: "/labio-leporino", block: "pacientes" },
  { prefix: "/cuidados-y-alimentacion", block: "pacientes" },
];

export function blockFromPathname(pathname: string): BrandBlock | null {
  const match = BLOCK_ROUTES.find(
    ({ prefix }) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
  return match?.block ?? null;
}
