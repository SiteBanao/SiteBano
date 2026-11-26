"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { easeOut } from "./Reveal";

/**
 * One layer of the hero device composition.
 * - `depth`: how far (px) the layer drifts upward over the first ~900px of
 *   scroll. Different depths per device create a subtle parallax.
 * - `fade`: also fade the layer in on load (keep false for the main/LCP device).
 * Disabled entirely for visitors who prefer reduced motion.
 */
export function HeroLayer({
  children,
  className,
  depth = 40,
  delay = 0,
  fade = true,
}: {
  children: ReactNode;
  className?: string;
  depth?: number;
  delay?: number;
  fade?: boolean;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, reduce ? 0 : -depth], { clamp: true });

  return (
    <m.div className={className} style={{ y }}>
      <m.div
        data-motion=""
        // Same initial state on server and client (no hydration mismatch);
        // MotionConfig reducedMotion="user" strips the movement for those users.
        initial={{ opacity: fade ? 0 : 1, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOut, delay }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
