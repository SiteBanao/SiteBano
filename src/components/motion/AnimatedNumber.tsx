"use client";

import { animate, m, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect } from "react";
import { formatINR } from "@/lib/utils";
import { easeOut } from "./Reveal";

/**
 * Rupee amount that counts smoothly to each new value.
 * Purely visual: pair it with a screen-reader-only live region holding the
 * final value, so assistive tech hears one update instead of every frame.
 */
export function AnimatedINR({ value, className }: { value: number; className?: string }) {
  const reduce = useReducedMotion();
  const amount = useMotionValue(value);
  const text = useTransform(amount, (v) => formatINR(v));

  useEffect(() => {
    const controls = animate(amount, value, { duration: reduce ? 0 : 0.55, ease: easeOut });
    return () => controls.stop();
  }, [amount, value, reduce]);

  return (
    <m.span aria-hidden className={className}>
      {text}
    </m.span>
  );
}
