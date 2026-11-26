"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Site-wide Motion setup.
 * - LazyMotion + `m` components keep the bundle small (only the
 *   `domAnimation` feature set is loaded; `strict` prevents accidental use of
 *   the heavier `motion.*` components).
 * - reducedMotion="user" disables movement for visitors who ask their OS for
 *   reduced motion (fades still apply, transforms do not).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
