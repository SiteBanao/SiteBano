import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, Check, MapPin } from "lucide-react";
import type { DemoProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * A scaled-down but fully designed rendering of a demo website (real photos,
 * real copy). Everything is sized in `em` relative to a container-query font
 * size, so the preview scales perfectly to whatever screen it sits in.
 * Purely decorative: hidden from assistive technology.
 */
export function MiniSite({
  demo,
  variant = "desktop",
  className,
  priority = false,
}: {
  demo: DemoProject;
  variant?: "desktop" | "tablet" | "mobile";
  className?: string;
  priority?: boolean;
}) {
  return (
    <div aria-hidden className={cn("h-full w-full overflow-hidden bg-white @container", className)}>
      {variant === "desktop" ? <Desktop demo={demo} priority={priority} /> : null}
      {variant === "tablet" ? <Tablet demo={demo} priority={priority} /> : null}
      {variant === "mobile" ? <Mobile demo={demo} priority={priority} /> : null}
    </div>
  );
}

function themeStyle(demo: DemoProject, fontSize: string): CSSProperties {
  return {
    fontSize,
    ["--p" as string]: demo.theme.primary,
    ["--s" as string]: demo.theme.soft,
    ["--d" as string]: demo.theme.dark,
  };
}

function Brand({ demo, light = false }: { demo: DemoProject; light?: boolean }) {
  const Icon = demo.icon;
  return (
    <div className="flex min-w-0 items-center gap-[0.45em]">
      <span className="grid size-[1.9em] shrink-0 place-items-center rounded-[0.55em] bg-(--p) text-white">
        <Icon className="size-[1.1em]" strokeWidth={2.2} />
      </span>
      <span className={cn("truncate font-display text-[1.05em] font-bold", light ? "text-white" : "text-(--d)")}>
        {demo.name}
      </span>
    </div>
  );
}

function Photo({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={70}
      priority={priority}
      className={cn("bg-[#e9ecf1] object-cover", className)}
    />
  );
}

function ServiceCard({ demo, index, compact = false }: { demo: DemoProject; index: number; compact?: boolean }) {
  const s = demo.services[index];
  const photo = demo.photos.services[index];
  return (
    <div className="overflow-hidden rounded-[0.8em] bg-white shadow-[0_0.3em_1.2em_-0.4em_rgba(16,24,40,0.22)] ring-1 ring-black/[0.05]">
      <div className={cn("relative", compact ? "h-[4.6em]" : "h-[5.6em]")}>
        <Photo src={photo.src} alt={photo.alt} sizes="240px" />
      </div>
      <div className="p-[0.7em]">
        <p className="truncate text-[0.85em] font-bold text-(--d)">{s.title}</p>
        <p className="mt-[0.25em] line-clamp-2 text-[0.68em] leading-[1.35] text-[#667085]">{s.text}</p>
      </div>
    </div>
  );
}

/* ----------------------------- Desktop ----------------------------- */

function Desktop({ demo, priority }: { demo: DemoProject; priority?: boolean }) {
  return (
    <div className="flex h-full flex-col" style={themeStyle(demo, "1.42cqw")}>
      <div className="relative h-[24em] shrink-0">
        <Photo src={demo.photos.hero.src} alt={demo.photos.hero.alt} sizes="(min-width: 1024px) 760px, 90vw" priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/5" />

        <div className="relative flex items-center justify-between gap-[1em] px-[2.2em] py-[1.1em]">
          <Brand demo={demo} light />
          <div className="flex items-center gap-[1.5em] text-[0.82em] font-medium text-white/85">
            {["Home", "About", "Services", "Gallery", "Contact"].map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
          <span className="rounded-full bg-white px-[1em] py-[0.5em] text-[0.78em] font-semibold whitespace-nowrap text-(--d)">
            {demo.hero.cta}
          </span>
        </div>

        <div className="relative max-w-[58%] px-[2.2em] pt-[1.6em]">
          <span className="inline-flex items-center gap-[0.4em] rounded-full bg-white/15 px-[0.8em] py-[0.32em] text-[0.74em] font-semibold text-white ring-1 ring-white/25 backdrop-blur">
            <span className="size-[0.5em] rounded-full bg-(--p) ring-2 ring-white/60" />
            {demo.hero.eyebrow}
          </span>
          <p className="mt-[0.7em] font-display text-[2.05em] leading-[1.08] font-extrabold tracking-tight text-white">
            {demo.hero.title}
          </p>
          <p className="mt-[0.7em] text-[0.9em] leading-[1.45] text-white/80">{demo.hero.subtitle}</p>
          <div className="mt-[1.2em] flex gap-[0.6em]">
            <span className="inline-flex items-center gap-[0.4em] rounded-[0.6em] bg-(--p) px-[1.1em] py-[0.65em] text-[0.8em] font-semibold text-white">
              {demo.hero.cta} <ArrowRight className="size-[1em]" />
            </span>
            <span className="rounded-[0.6em] bg-white/15 px-[1.1em] py-[0.65em] text-[0.8em] font-semibold text-white ring-1 ring-white/30">
              Explore services
            </span>
          </div>
        </div>

        <div className="absolute right-[2.2em] bottom-[1.4em] flex items-center gap-[0.6em] rounded-[0.8em] bg-white/95 px-[0.9em] py-[0.6em] shadow-xl">
          <span className="grid size-[2em] place-items-center rounded-[0.5em] bg-(--s) text-(--p)">
            <Check className="size-[1.1em]" strokeWidth={3} />
          </span>
          <span>
            <span className="block text-[0.65em] text-[#667085]">Why choose us</span>
            <span className="block text-[0.8em] font-bold text-(--d)">{demo.highlights[0]}</span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[2.2em] border-b border-black/[0.06] bg-(--s) py-[0.8em] text-[0.74em] font-semibold text-(--d)">
        {demo.highlights.map((h) => (
          <span key={h} className="flex items-center gap-[0.4em]">
            <Check className="size-[1.1em] text-(--p)" strokeWidth={3} /> {h}
          </span>
        ))}
      </div>

      <div className="px-[2.2em] pt-[1.4em]">
        <div className="flex items-end justify-between">
          <p className="font-display text-[1.25em] font-bold text-(--d)">What we offer</p>
          <span className="text-[0.75em] font-semibold text-(--p)">View all →</span>
        </div>
        <div className="mt-[0.9em] grid grid-cols-4 gap-[0.9em]">
          {[0, 1, 2, 3].map((i) => (
            <ServiceCard key={i} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Tablet ------------------------------ */

function Tablet({ demo, priority }: { demo: DemoProject; priority?: boolean }) {
  return (
    <div className="flex h-full flex-col" style={themeStyle(demo, "2.55cqw")}>
      <div className="flex items-center justify-between px-[1.4em] py-[0.9em]">
        <Brand demo={demo} />
        <span className="rounded-full bg-(--p) px-[0.9em] py-[0.45em] text-[0.72em] font-semibold text-white">
          {demo.hero.cta}
        </span>
      </div>

      <div className="relative mx-[1.4em] h-[17em] shrink-0 overflow-hidden rounded-[1em]">
        <Photo src={demo.photos.hero.src} alt={demo.photos.hero.alt} sizes="400px" priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-[1.2em]">
          <span className="rounded-full bg-white/20 px-[0.7em] py-[0.25em] text-[0.68em] font-semibold text-white backdrop-blur">
            {demo.hero.eyebrow}
          </span>
          <p className="mt-[0.5em] font-display text-[1.45em] leading-[1.12] font-extrabold text-white">
            {demo.hero.title}
          </p>
          <span className="mt-[0.8em] inline-flex items-center gap-[0.4em] rounded-[0.55em] bg-white px-[0.9em] py-[0.55em] text-[0.75em] font-semibold text-(--d)">
            {demo.hero.cta} <ArrowRight className="size-[1em]" />
          </span>
        </div>
      </div>

      <div className="px-[1.4em] pt-[1.2em]">
        <div className="flex items-center justify-between">
          <p className="font-display text-[1.1em] font-bold text-(--d)">What we offer</p>
          <span className="text-[0.72em] font-semibold text-(--p)">View all →</span>
        </div>
        <div className="mt-[0.8em] grid grid-cols-2 gap-[0.8em]">
          {[0, 1, 2, 3].map((i) => (
            <ServiceCard key={i} demo={demo} index={i} compact />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Mobile ------------------------------ */

function Mobile({ demo, priority }: { demo: DemoProject; priority?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-white" style={themeStyle(demo, "4.5cqw")}>
      <div className="flex items-center justify-between px-[1.1em] pt-[3.4em] pb-[0.8em]">
        <Brand demo={demo} />
        <span className="flex flex-col gap-[0.22em]">
          <span className="block h-[0.16em] w-[1.15em] rounded bg-(--d)" />
          <span className="block h-[0.16em] w-[1.15em] rounded bg-(--d)" />
          <span className="block h-[0.16em] w-[0.8em] rounded bg-(--d)" />
        </span>
      </div>

      <div className="relative mx-[1.1em] h-[14.5em] shrink-0 overflow-hidden rounded-[1.1em]">
        <Photo src={demo.photos.hero.src} alt={demo.photos.hero.alt} sizes="240px" priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-[1em]">
          <p className="font-display text-[1.3em] leading-[1.12] font-extrabold text-white">{demo.hero.title}</p>
          <span className="mt-[0.7em] flex items-center justify-center gap-[0.4em] rounded-[0.6em] bg-(--p) py-[0.65em] text-[0.8em] font-semibold text-white">
            {demo.hero.cta} <ArrowRight className="size-[1em]" />
          </span>
        </div>
      </div>

      <div className="flex gap-[0.5em] overflow-hidden px-[1.1em] pt-[0.9em]">
        {demo.highlights.slice(0, 2).map((h) => (
          <span key={h} className="shrink-0 rounded-full bg-(--s) px-[0.7em] py-[0.3em] text-[0.66em] font-semibold text-(--d)">
            {h}
          </span>
        ))}
      </div>

      <div className="space-y-[0.6em] px-[1.1em] pt-[0.9em]">
        <p className="font-display text-[1em] font-bold text-(--d)">What we offer</p>
        {[0, 1].map((i) => {
          const s = demo.services[i];
          const photo = demo.photos.services[i];
          return (
            <div key={s.title} className="flex items-center gap-[0.7em] rounded-[0.8em] p-[0.45em] ring-1 ring-black/[0.06]">
              <div className="relative size-[3.4em] shrink-0 overflow-hidden rounded-[0.6em]">
                <Photo src={photo.src} alt={photo.alt} sizes="80px" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[0.8em] font-bold text-(--d)">{s.title}</p>
                <p className="line-clamp-2 text-[0.64em] leading-[1.35] text-[#667085]">{s.text}</p>
              </div>
            </div>
          );
        })}
        <p className="flex items-center gap-[0.3em] pt-[0.2em] text-[0.66em] text-[#667085]">
          <MapPin className="size-[1.1em] text-(--p)" /> Open today · Directions
        </p>
      </div>
    </div>
  );
}
