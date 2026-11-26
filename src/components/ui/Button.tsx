import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Note: `className` is appended, not merged. Don't use it to override colours or
 * `display`; add or pick a variant instead (CSS order would decide the winner).
 */
type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "dark" | "white" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-brand hover:bg-brand-700 hover:-translate-y-px active:translate-y-0 focus-visible:outline-brand-600",
  secondary:
    "bg-white text-ink ring-1 ring-inset ring-line shadow-soft hover:ring-brand-200 hover:bg-brand-25 hover:text-brand-700 hover:-translate-y-px active:translate-y-0",
  ghost: "text-ink-soft hover:text-brand-700 hover:bg-brand-50",
  whatsapp:
    "bg-whatsapp-dark text-white shadow-soft hover:bg-[#0b6535] hover:-translate-y-px active:translate-y-0 focus-visible:outline-whatsapp-dark",
  dark: "bg-ink text-white shadow-soft hover:bg-[#1d2939] hover:-translate-y-px active:translate-y-0",
  white:
    "bg-white text-brand-700 shadow-soft hover:bg-brand-50 hover:-translate-y-px active:translate-y-0 focus-visible:outline-white",
  /** Outlined button for dark or coloured backgrounds. */
  onDark:
    "text-white ring-1 ring-inset ring-white/25 hover:bg-white/10 hover:ring-white/40 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 sm:h-13 px-6 sm:px-7 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonLinkProps extends Omit<ComponentProps<"a">, "href"> {
  href: string;
  variant?: Variant;
  size?: Size;
  /** Opens in a new tab with safe rel attributes (used for WhatsApp / external links). */
  external?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant,
  size,
  external,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    const opensTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(opensTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant, size, className, type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...rest} />;
}
