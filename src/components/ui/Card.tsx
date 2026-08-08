import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardOwnProps<T extends ElementType> = {
  /** Elemento HTML a renderizar (div, li, a...). Usar "a" + href para cards clickeables. */
  as?: T;
  children: ReactNode;
  className?: string;
  /** Eleva y agranda la sombra al hover — usar SOLO si el card es clickeable. */
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg";
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
  tone = "white",
  ...rest
}: CardProps<T>) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={`rounded-3xl shadow-sm ring-1 ring-piel-navy/5 ${TONE[tone]} ${PADDING[padding]} ${
        hoverable ? "transition duration-300 hover:-translate-y-1 hover:shadow-xl" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
