import { ArrowRight, BadgeIndianRupee, Globe, ReceiptText, Smartphone, Sparkles, Zap } from "lucide-react";
import { Laptop, Phone, Tablet } from "@/components/mockups/Devices";
import { HeroLayer } from "@/components/motion/HeroLayer";
import { MiniSite } from "@/components/mockups/MiniSite";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { getDemo } from "@/data/portfolio";

const trust = [
  { icon: BadgeIndianRupee, label: "Affordable Website Development" },
  { icon: Smartphone, label: "Mobile-Friendly Designs" },
  { icon: ReceiptText, label: "Transparent Pricing" },
  { icon: Globe, label: "Domain & Hosting Separately Quoted" },
];

export function Hero() {
  const laptopDemo = getDemo("nestora-realty")!;
  const tabletDemo = getDemo("carewell-family-clinic")!;
  const phoneDemo = getDemo("chai-and-crumbs-cafe")!;

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0" />
        <div className="absolute -top-48 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/70 via-brand-100/50 to-transparent blur-3xl" />
        <div className="absolute top-40 -right-40 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 py-1 pr-3 pl-1 text-[13px] font-medium text-ink-soft shadow-soft backdrop-blur">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-2 py-0.5 text-xs font-semibold text-white">
              <Sparkles className="size-3" /> From ₹999
            </span>
            Premium websites. Affordable pricing.
          </p>

          <h1
            id="hero-title"
            className="animate-fade-up mt-6 font-display text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-ink [animation-delay:80ms] sm:text-6xl lg:text-7xl"
          >
            Your Business Deserves to Be Online.
          </h1>
          <p className="animate-fade-up mt-5 font-display text-2xl leading-tight font-bold [animation-delay:140ms] sm:text-3xl lg:text-4xl">
            <span className="text-gradient">Professional Websites Starting at Just ₹999.</span>
          </p>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted [animation-delay:200ms] sm:text-lg">
            We build beautiful, mobile-friendly and professional websites that help businesses establish their
            online presence without expensive development costs.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-stretch justify-center gap-3 [animation-delay:260ms] sm:flex-row sm:items-center">
            <ButtonLink href="/contact" size="lg">
              Get Your Website
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary" size="lg">
              Explore Our Designs
            </ButtonLink>
          </div>

          <ul className="animate-fade-up mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-3 text-left [animation-delay:320ms] sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-[13px] font-medium text-ink-soft sm:text-sm">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent-50 text-accent-600 ring-1 ring-accent-100">
                  <Icon className="size-3.5" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Device composition */}
        <div className="relative mx-auto mt-16 max-w-5xl pb-16 sm:mt-20 sm:pb-24" role="img" aria-label="Example SiteBanao website designs shown on a laptop, tablet and mobile phone">
          {/* Each device is a parallax layer: deeper layers drift further while scrolling */}
          <HeroLayer depth={20} fade={false} delay={0.1}>
            <Laptop className="mx-auto w-[90%] sm:w-[78%]">
              <MiniSite demo={laptopDemo} variant="desktop" priority />
            </Laptop>
          </HeroLayer>

          {/* Positioning lives on wrappers so it never fights the device's own classes */}
          <div className="absolute right-0 bottom-8 hidden w-[21%] rotate-[3deg] sm:block lg:-right-6">
            <HeroLayer depth={90} delay={0.35}>
              <Tablet>
                <MiniSite demo={tabletDemo} variant="tablet" />
              </Tablet>
            </HeroLayer>
          </div>

          <div className="absolute bottom-3 left-0 w-[20%] -rotate-[2deg] sm:bottom-5 sm:w-[15%] lg:-left-4">
            <HeroLayer depth={60} delay={0.5}>
              <div className="animate-float">
                <Phone>
                  <MiniSite demo={phoneDemo} variant="mobile" />
                </Phone>
              </div>
            </HeroLayer>
          </div>

          {/* floating chips */}
          <div className="absolute top-[8%] -left-1 hidden items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-card ring-1 ring-line backdrop-blur md:flex lg:-left-10">
            <span className="grid size-8 place-items-center rounded-xl bg-accent-50 text-accent-600">
              <Smartphone className="size-4" />
            </span>
            <span className="text-left">
              <span className="block text-xs text-muted">Looks great on</span>
              <span className="block text-sm font-semibold text-ink">Every device</span>
            </span>
          </div>
          <div className="absolute top-[2%] -right-1 hidden items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-card ring-1 ring-line backdrop-blur md:flex lg:-right-8">
            <span className="grid size-8 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Zap className="size-4" />
            </span>
            <span className="text-left">
              <span className="block text-xs text-muted">Development from</span>
              <span className="block text-sm font-semibold text-ink">₹999 one-time</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
