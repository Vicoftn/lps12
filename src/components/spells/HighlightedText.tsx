"use client";

import { motion } from "framer-motion";
import type { JSX } from "react";
import { cn } from "@/lib/utils";

type From = "left" | "right" | "top" | "bottom";
type Tone = "ink" | "magenta";

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  from?: From;
  delay?: number;
  inView?: boolean;
  once?: boolean;
  tone?: Tone;
  as?: keyof JSX.IntrinsicElements;
}

const fromVariants = {
  left: {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
  },
  right: {
    hidden: { x: "100%" },
    visible: { x: "0%" },
  },
  top: {
    hidden: { y: "-100%" },
    visible: { y: "0%" },
  },
  bottom: {
    hidden: { y: "100%" },
    visible: { y: "0%" },
  },
};

export function HighlightedText({
  children,
  className,
  from = "bottom",
  delay = 0,
  inView = false,
  once = true,
  tone = "ink",
  as = "span",
}: HighlightedTextProps) {
  const variants = fromVariants[from];
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.span;
  const isMagenta = tone === "magenta";

  return (
    <MotionTag
      className={cn("relative inline-flex overflow-hidden align-baseline", className)}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={inView ? undefined : "visible"}
      viewport={{ once }}
    >
      <motion.span
        className={cn(
          "absolute inset-0 -left-[0.15em] -right-[0.18em] z-0",
          isMagenta ? "bg-magenta" : "bg-black dark:bg-white",
        )}
        variants={variants}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          delay,
        }}
      />
      <span
        className={cn(
          "relative z-10 pl-[0.15em] pr-[0.18em]",
          isMagenta ? "text-cream" : "mix-blend-difference text-white",
        )}
      >
        {children}
      </span>
    </MotionTag>
  );
}

export default HighlightedText;
