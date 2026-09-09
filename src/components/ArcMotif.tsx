"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Motivo geométrico recorrente da marca.
// Dois arcos concêntricos que se desenham ao carregar a página.
export function SignatureArcs({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { 
    setMounted(true);
  }, []);

  return (
    <svg
      viewBox="0 0 500 500"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      {!mounted ? (
        <>
          <circle
            cx="250"
            cy="250"
            r="238"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.55"
          />

          <circle
            cx="250"
            cy="250"
            r="176"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
        </>
      ) : (
        <>
          <motion.circle
            cx="250"
            cy="250"
            r="238"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0.55 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{
              duration: reduceMotion ? 0 : 2.2,
              delay: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.circle
            cx="250"
            cy="250"
            r="176"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 2.2,
              delay: reduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </>
      )}
    </svg>
  );
}


// Arco estático.
export function StaticArc({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      <circle
        cx="100"
        cy="100"
        r="94"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
