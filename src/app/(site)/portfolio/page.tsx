import type { Metadata } from "next";
import { Suspense } from "react";
import { Info, Paintbrush } from "lucide-react";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { PortfolioGallery, PortfolioGridFallback } from "@/components/portfolio/PortfolioGallery";
import { FinalCta } from "@/components/shared/FinalCta";
import { PageHeader } from "@/components/shared/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { demoProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio: Website Design Examples",
  description:
    "Browse SiteBanao demo website designs for restaurants, clinics, real estate, salons, coaching institutes, freelancers, startups and local businesses.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const cards = Object.fromEntries(demoProjects.map((d) => [d.slug, <PortfolioCard key={d.slug} demo={d} />]));

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Website designs for <span className="text-gradient">every industry</span>
          </>
        }
        description="Explore our demonstration designs, open a live demo, and get a similar website tailored to your brand."
      >
        <p className="mx-auto inline-flex max-w-xl items-start gap-2 rounded-xl bg-white/80 px-4 py-3 text-left text-sm text-muted ring-1 ring-line backdrop-blur">
          <Info className="mt-0.5 size-4 shrink-0 text-brand-600" />
          All projects shown are demonstration designs created by SiteBanao. The businesses are fictional and are not
          real clients.
        </p>
      </PageHeader>

      <Section id="gallery" labelledBy="gallery-title" className="pt-14 sm:pt-16 lg:pt-20">
        <h2 id="gallery-title" className="sr-only">
          Demo designs
        </h2>
        <Suspense fallback={<PortfolioGridFallback cards={cards} />}>
          <PortfolioGallery cards={cards} />
        </Suspense>

        <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-dashed border-brand-200 bg-brand-25 p-8 text-center sm:p-12">
          <span className="grid size-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-brand">
            <Paintbrush className="size-6" />
          </span>
          <div>
            <h3 className="font-display text-2xl font-bold text-ink">Don&apos;t see your industry?</h3>
            <p className="mx-auto mt-2 max-w-xl text-muted">
              Every design is customised. Share your business details and a few websites you like, and we&apos;ll
              create something that fits you perfectly.
            </p>
          </div>
          <ButtonLink href="/contact">Request a custom design</ButtonLink>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
