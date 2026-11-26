import { ArrowRight, Info } from "lucide-react";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { featuredDemos } from "@/data/portfolio";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

export function FeaturedPortfolio() {
  return (
    <Section id="portfolio" tone="surface" labelledBy="portfolio-title">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          id="portfolio-title"
          align="left"
          eyebrow="Featured designs"
          title="Designs your customers will love"
          description="Explore sample website designs for different industries. Pick one you like and we'll tailor it to your brand, content and colours."
        />
        <ButtonLink href="/portfolio" variant="secondary" className="shrink-0">
          View all designs <ArrowRight className="size-4" />
        </ButtonLink>
      </div>

      <p className="mt-6 inline-flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-sm text-muted ring-1 ring-line">
        <Info className="mt-0.5 size-4 shrink-0 text-brand-600" />
        These are demonstration projects created by SiteBanao to showcase design styles. The businesses shown are
        fictional.
      </p>

      <StaggerList className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredDemos.map((demo) => (
          <StaggerItem key={demo.slug}>
            <PortfolioCard demo={demo} />
          </StaggerItem>
        ))}
      </StaggerList>
    </Section>
  );
}
