"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay adicional en ms — se usa para escalonar grupos de elementos (cards en grilla, etc). */
  delay?: number;
  className?: string;
  /** Dirección del desplazamiento de entrada. */
  direction?: "up" | "down" | "none";
}

const OFFSET = { up: 20, down: -20, none: 0 } as const;

/**
 * Envoltorio genérico de "aparición al hacer scroll": fade + desplazamiento sutil
 * cuando el elemento entra en el viewport. Respeta prefers-reduced-motion (con
 * movimiento reducido solo hace fade, sin desplazamiento).
 * Para animar varias cards de una grilla, envolver cada una con delay={index * 80}.
 *
 * Siempre renderiza un <div>. Si el elemento va dentro de un <ul>/<ol>, dejar el
 * <li> por fuera y poner Reveal como su único hijo (es HTML válido igual).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const y = reduceMotion ? 0 : OFFSET[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
