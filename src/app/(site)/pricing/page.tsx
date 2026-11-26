import type { Metadata } from "next";
import { CircleCheck, CircleX, Plus } from "lucide-react";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { CostCalculator } from "@/components/pricing/CostCalculator";
import { PricingCards } from "@/components/pricing/PricingCards";
import { FaqJsonLd, FaqList } from "@/components/shared/FaqList";
import { FinalCta } from "@/components/shared/FinalCta";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { addonServices } from "@/data/addons";
import { faqs } from "@/data/faqs";
import { exclusions, inclusions } from "@/data/packages";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Pricing: Websites from ₹999",
  description:
    "Transparent website development pricing: Starter ₹999, Business ₹2,999 and Professional ₹5,999. Compare packages, see what's included and estimate your total cost.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = faqs.filter((f) =>
  [
    "Is the website really available for ₹999?",
    "What is included in ₹999?",
    "Is domain registration included?",
    "Is hosting included?",
    "Can I request changes?",
    "Do you provide maintenance?",
  ].includes(f.question),
);

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Honest pricing. <span className="text-gradient">No surprises.</span>
          </>
        }
        description="Every package has a clearly defined scope and a one-time development price. Domain, hosting and extras are always quoted separately and upfront."
      />

      <Section labelledBy="packages-title" className="pt-16 sm:pt-20 lg:pt-24">
        <h2 id="packages-title" className="sr-only">
          Website packages
        </h2>
        <PricingCards />
      </Section>

      <Section id="compare" tone="surface" labelledBy="compare-title">
        <SectionHeading
          id="compare-title"
          eyebrow="Compare"
          title="Detailed package comparison"
          description="See exactly what you get with each package, side by side."
        />
        <div className="mt-12">
          <ComparisonTable />
          <p className="mt-4 text-sm text-muted">
            *Typical working-day timelines, starting once all content is received. Complex requirements may take longer.
          </p>
        </div>
      </Section>

      <Section id="included" labelledBy="included-title">
        <SectionHeading
          id="included-title"
          eyebrow="Inclusions & exclusions"
          title="What's included, and what's not"
          description="We believe in complete transparency, so here's exactly what your package price covers."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-accent-100 bg-accent-50/50 p-7 sm:p-9">
            <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
              <CircleCheck className="size-6 text-accent-600" /> Included in every package
            </h3>
            <ul className="mt-6 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-soft">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
            <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
              <CircleX className="size-6 text-[#98a2b3]" /> Quoted separately
            </h3>
            <ul className="mt-6 space-y-3">
              {exclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-soft">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#98a2b3]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-white p-4 text-sm text-muted ring-1 ring-line">
              Your domain and hosting are registered in <strong className="text-ink">your name</strong>, so you
              always retain full ownership and control.
            </p>
          </div>
        </div>
      </Section>

      <Section id="add-ons" tone="surface" labelledBy="addons-title">
        <SectionHeading
          id="addons-title"
          eyebrow="Additional services"
          title="Add-ons when you need them"
          description="Indicative starting prices. Your final quote depends on the exact requirement."
        />
        <StaggerList className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addonServices.map((a) => (
            <StaggerItem key={a.name} className="flex flex-col rounded-2xl border border-line bg-white p-6">
              <span className="grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Plus className="size-4" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{a.name}</h3>
              <p className="mt-1 flex-1 text-sm text-muted">{a.note}</p>
              <p className="mt-4 font-display text-xl font-extrabold text-ink">
                {a.price} <span className="font-sans text-sm font-medium text-muted">{a.unit}</span>
              </p>
            </StaggerItem>
          ))}
        </StaggerList>
      </Section>

      <Section id="calculator" labelledBy="calculator-title">
        <SectionHeading
          id="calculator-title"
          eyebrow="Cost calculator"
          title="Estimate your total cost"
          description="Pick a package, add what you need and see an instant estimate, including typical domain and hosting costs."
        />
        <div className="mt-12">
          <CostCalculator />
        </div>
      </Section>

      <Section id="faq" tone="surface" labelledBy="pricing-faq-title">
        <SectionHeading id="pricing-faq-title" eyebrow="FAQ" title="Pricing questions, answered" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={pricingFaqs} />
        </div>
        <FaqJsonLd items={pricingFaqs} />
      </Section>

      <FinalCta />
    </>
  );
}
