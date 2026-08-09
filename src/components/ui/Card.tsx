import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardOwnProps<T extends ElementType> = {
  /** Elemento HTML a renderizar (div, li, a...). Usar "a" + href para cards clickeables. */
  as?: T;
  children: ReactNode;
  className?: string;
  /** Eleva y agranda la sombra al hover — usar SOLO si el card es clickeable. */
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg";
  /**
   * Radio de esquina. "default" (rounded-3xl) es el estándar del sistema.
   * "brand" usa el radio más generoso de las piezas gráficas — reservado para
   * cards grandes y destacadas (paneles hero, cards de carousel), no para grillas.
   */
  radius?: "default" | "brand";
  /** "offwhite" es la única variante de superficie destacada (paneles hero-like, p. ej. bio de una persona). Todo lo demás es blanco. */
  tone?: "white" | "offwhite";
};

type CardProps<T extends ElementType> = CardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps<T>>;

const PADDING = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
} as const;

const TONE = {
  white: "bg-white",
  offwhite: "bg-piel-offwhite",
} as const;

const RADIUS = {
  default: "rounded-3xl",
  brand: "rounded-[2rem] sm:rounded-[2.5rem]",
} as const;

/**
 * Card blanca estándar del sistema: rounded-3xl, ring sutil y sombra suave.
 * Es el único patrón de "tarjeta" del sitio — reemplaza los `rounded-2xl bg-accent`
 * y variantes sueltas que había en distintas páginas.
 */
export default function Card<T extends ElementType = "div">({
  as,
  children,
  className = "",
  hoverable = false,
  padding = "md",
  radius = "default",
  tone = "white",
  ...rest
}: CardProps<T>) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={`${RADIUS[radius]} shadow-sm ring-1 ring-piel-navy/5 ${TONE[tone]} ${PADDING[padding]} ${
        hoverable ? "transition duration-300 hover:-translate-y-1 hover:shadow-xl" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
