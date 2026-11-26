"use client";

import { m, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

/**
 * Scroll-reveal primitives. Content is still server-rendered (children are
 * passed through), so it stays in the HTML for SEO. Elements carry
 * `data-motion` so a <noscript> rule can show them if JavaScript is off.
 *
 * Keep transforms off the same element as CSS hover transforms: Motion writes
 * inline `transform`, so put hover lifts on an inner element.
 */

export const easeOut = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, amount: 0.2 } as const;

type Tag = "div" | "section" | "li" | "ul" | "ol" | "p";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  scale,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  as?: Tag;
} & Omit<ComponentProps<"div">, "children" | "className" | "ref" | "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd">) {
  const Component = m[as] as typeof m.div;
  return (
    <Component
      data-motion=""
      className={className}
      initial={{ opacity: 0, y, ...(scale ? { scale } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={viewport}
      transition={{ duration: 0.65, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

/** A list whose children (StaggerItem) cascade in when it scrolls into view. */
export function StaggerList({
  children,
  className,
  as = "ul",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
} & Omit<ComponentProps<"ul">, "children" | "className" | "ref" | "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd">) {
  const Component = m[as] as typeof m.ul;
  return (
    <Component
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "li",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "li" | "div";
} & Omit<ComponentProps<"li">, "children" | "className" | "ref" | "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd">) {
  const Component = m[as] as typeof m.li;
  return (
    <Component data-motion="" className={className} variants={itemVariants} {...rest}>
      {children}
    </Component>
  );
}

/** A line that draws itself (scaleX 0 → 1) when scrolled into view. */
export function DrawLine({ className }: { className?: string }) {
  return (
    <m.div
      aria-hidden
      data-motion=""
      className={className}
      style={{ originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.1, ease: easeOut, delay: 0.2 }}
    />
  );
}
