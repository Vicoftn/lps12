"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type SplitType = "words" | "chars";

interface RandomizedTextProps {
  children: string;
  className?: string;
  split?: SplitType;
  delay?: number;
  inView?: boolean;
  once?: boolean;
}

export function RandomizedText({
  children,
  className = "",
  split = "words",
  delay = 0.2,
  inView = false,
  once = true,
}: RandomizedTextProps) {

  const expoOut = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  const elements = useMemo(() => {
    if (split === "chars") {
      return children.split("").map((char, i) => ({
        content: char === " " ? "\u00A0" : char,
        key: `char-${i}`,
      }));
    }
    return children.split(" ").map((word, i) => ({
      content: word,
      key: `word-${i}`,
    }));
  }, [children, split]);

  // Jitter com "cara" de aleatório, mas determinístico (função pura de i)
  // — Math.random() direto no corpo do componente viola a regra de pureza
  // do React e pode gerar valores diferentes a cada nova renderização.
  const randomizedDelays = useMemo(() => {
    const pseudoRandom = (seed: number) => {
      const x = Math.sin(seed * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };
    return elements.map((_, i) =>
      delay + pseudoRandom(i) * 0.2 + pseudoRandom(i + 0.5) * 0.03
    );
  }, [elements, delay]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.span
      className={className}
      aria-label={children}
      style={{ display: "inline-block", wordBreak: "break-word" }}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={inView ? undefined : "visible"}
      viewport={{ once }}
    >
      {elements.map((element, i) => (
        <motion.span
          key={element.key}
          variants={variants}
          transition={{
            duration: 1.2,
            delay: randomizedDelays[i],
            ease: expoOut,
          }}
          style={{ display: split === "words" ? "inline-block" : "inline" }}
          className={split === "words" ? "mr-[0.25em]" : ""}
        >
          {element.content}
        </motion.span>
      ))}
    </motion.span>
  );
}