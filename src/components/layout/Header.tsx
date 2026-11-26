"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, m, type Variants } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/config/site";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const menuList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } },
};
const menuItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

export function Header() {
  const pathname = usePathname();
  // The menu is "open" only for the path it was opened on, so any navigation closes it.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenedOn(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const wa = whatsappLink(generalEnquiryMessage);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300",
        scrolled || open
          ? "border-b border-line/80 bg-white/85 shadow-[0_1px_0_rgb(16_24_40/0.02),0_8px_24px_-12px_rgb(16_24_40/0.12)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-md",
      )}
    >
      <a
        href="#main"
        className="sr-only rounded-md bg-ink px-3 py-2 text-sm text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" aria-label="SiteBanao home" className="shrink-0 rounded-lg">
          <Logo animated />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-[14.5px] font-medium transition-colors",
                    isActive(item.href) ? "text-brand-700" : "text-ink-soft hover:bg-surface hover:text-ink",
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand-600" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapper controls visibility so it never conflicts with the button's own display class. */}
          <div className="hidden min-[360px]:block">
            <ButtonLink href="/contact" size="sm" className="h-9 px-3 sm:h-10 sm:px-4">
              Get Started
              <ArrowRight className="hidden size-4 transition-transform group-hover/btn:translate-x-0.5 sm:block" />
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpenedOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-xl text-ink ring-1 ring-line ring-inset transition hover:bg-surface lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <m.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <m.ul className="flex flex-col" variants={menuList} initial="hidden" animate="show">
                {mainNav.map((item) => (
                  <m.li key={item.href} variants={menuItem}>
                    <Link
                      href={item.href}
                      onClick={() => setOpenedOn(null)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-medium",
                        isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-surface",
                      )}
                    >
                      {item.label}
                      <ArrowRight className="size-4 opacity-40" />
                    </Link>
                  </m.li>
                ))}
              </m.ul>
              <div className="mt-6 grid gap-3 border-t border-line pt-6">
                <ButtonLink href="/contact" size="lg" onClick={() => setOpenedOn(null)}>
                  Get Started
                </ButtonLink>
                <ButtonLink href={wa.href} external={wa.external} variant="whatsapp" size="lg">
                  <WhatsAppIcon className="size-5" />
                  Chat on WhatsApp
                </ButtonLink>
                <p className="pt-2 text-center text-sm text-muted">
                  Websites from <span className="font-semibold text-ink">₹999</span> · Domain & hosting quoted
                  separately
                </p>
              </div>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
