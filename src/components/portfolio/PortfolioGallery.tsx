"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, LazyMotion, m } from "motion/react";
import { type ReactNode } from "react";
import { easeOut } from "@/components/motion/Reveal";
import { demoProjects, portfolioFilters, type PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FilterId = "all" | PortfolioCategory;

const loadLayoutFeatures = () => import("@/components/motion/dom-max").then((mod) => mod.default);

const isFilter = (v: string | null): v is FilterId => portfolioFilters.some((f) => f.id === v);

/**
 * Filter bar + grid. The active filter lives in the URL (?category=...) so filtered views
 * are shareable and work with the "View Designs" links on the homepage.
 * Cards are rendered on the server and passed in, keyed by slug.
 */
export function PortfolioGallery({ cards }: { cards: Record<string, ReactNode> }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const param = searchParams.get("category");
  const active: FilterId = isFilter(param) ? param : "all";

  const visible = demoProjects.filter((d) => active === "all" || d.category === active);

  // Native history API: Next.js keeps useSearchParams in sync without a server round trip.
  const select = (id: FilterId) => {
    const query = id === "all" ? "" : `?category=${id}`;
    window.history.replaceState(null, "", `${pathname}${query}`);
  };

  return (
    <LazyMotion features={loadLayoutFeatures}>
      <div>
        <div
          role="toolbar"
          aria-label="Filter designs by category"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {portfolioFilters.map((f) => {
            const count = f.id === "all" ? demoProjects.length : demoProjects.filter((d) => d.category === f.id).length;
            const selected = f.id === active;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={selected}
                onClick={() => select(f.id)}
                className={cn(
                  "relative inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors",
                  selected
                    ? "text-white"
                    : "bg-white text-ink-soft ring-1 ring-line hover:text-ink hover:ring-brand-200",
                )}
              >
                {selected ? (
                  <m.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 rounded-full bg-ink shadow-soft"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{f.label}</span>
                <span
                  className={cn(
                    "relative rounded-full px-1.5 py-0.5 text-[11px] leading-none",
                    selected ? "bg-white/15 text-white" : "bg-surface text-muted",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} design{visible.length === 1 ? "" : "s"}
        </p>

        <ul className="relative mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((d) => (
              <m.li
                key={d.slug}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: easeOut }}
              >
                {cards[d.slug]}
              </m.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </LazyMotion>
  );
}

/** Server-rendered fallback (all designs) used while the URL-aware gallery hydrates. */
export function PortfolioGridFallback({ cards }: { cards: Record<string, ReactNode> }) {
  return (
    <div>
      <div className="flex h-12 flex-wrap justify-center gap-2">
        {portfolioFilters.map((f) => (
          <span
            key={f.id}
            className="inline-flex h-10 items-center rounded-full bg-white px-4 text-sm font-semibold text-ink-soft ring-1 ring-line"
          >
            {f.label}
          </span>
        ))}
      </div>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((d) => (
          <li key={d.slug}>{cards[d.slug]}</li>
        ))}
      </ul>
    </div>
  );
}
