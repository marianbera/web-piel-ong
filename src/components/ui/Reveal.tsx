"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay adicional en ms — se usa para escalonar grupos de elementos (cards en grilla, etc). */
  delay?: number;
  className?: string;
  /** Dirección del desplazamiento de entrada. */
  direction?: "up" | "down" | "none";
}

/**
 * Envoltorio genérico de "aparición al hacer scroll": fade + desplazamiento sutil
 * cuando el elemento entra en el viewport. Respeta prefers-reduced-motion.
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
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translateClass =
    direction === "up" ? "translate-y-5" : direction === "down" ? "-translate-y-5" : "";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : `opacity-0 ${translateClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
