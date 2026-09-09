"use client";

import { motion, useReducedMotion } from "framer-motion";

// Motivo geométrico recorrente da marca: o monograma ACN é construído
// inteiramente com arcos e retas (ver brandbook/MARCA). Estes componentes
// reaproveitam esse gesto como assinatura visual discreta — nunca como
// decoração genérica de "linha de tendência".

// Dois arcos concêntricos que se desenham ao carregar a página — usado
// atrás do texto do hero, em baixa opacidade.
export function SignatureArcs({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 500 500"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      <motion.circle
        cx="250"
        cy="250"
        r="238"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={reduceMotion ? { opacity: 0.55 } : { pathLength: 0, opacity: 0.55 }}
        animate={reduceMotion ? undefined : { pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx="250"
        cy="250"
        r="176"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={reduceMotion ? { opacity: 0.3 } : { pathLength: 0, opacity: 0.3 }}
        animate={reduceMotion ? undefined : { pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

// Arco estático — usado como acento de fundo em blocos escuros de
// fechamento e como resposta discreta ao hover em cards.
export function StaticArc({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
