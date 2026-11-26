"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

/**
 * Springs its child into view after a short delay (used for the floating
 * WhatsApp button). Put positioning (e.g. `fixed`) on this wrapper, never on a
 * child: a transformed parent would otherwise trap a fixed child mid-animation.
 */
export function PopIn({ children, className, delay = 1 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <m.div
      data-motion=""
      className={className}
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 22, delay }}
    >
      {children}
    </m.div>
  );
}
