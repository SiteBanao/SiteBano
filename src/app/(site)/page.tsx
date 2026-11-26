import { ArrowRight, Calculator, MessageCircleQuestion } from "lucide-react";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PricingCards } from "@/components/pricing/PricingCards";
import { FaqJsonLd, FaqList } from "@/components/shared/FaqList";
import { FinalCta } from "@/components/shared/FinalCta";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Industries />
      <WhyChoose />

      <Section id="how-it-works" tone="surface" labelledBy="process-title">
        <SectionHeading
          id="process-title"
          eyebrow="How it works"
          title="From idea to live website in five simple steps"
          description="No jargon, no confusing contracts. Just a clear process with fixed scope at every step."
        />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact">
            Start your website <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href="/how-it-works" variant="secondary">
            See the full process
          </ButtonLink>
        </div>
      </Section>

      <FeaturedPortfolio />

      <Section id="pricing" labelledBy="pricing-title">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title={
            <>
              Simple, transparent pricing. <span className="text-gradient">Starting at ₹999.</span>
            </>
          }
          description="Choose a package with a clearly defined scope. No hidden charges. Everything extra is quoted upfront."
        />
        <div className="mt-16">
          <PricingCards />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/pricing#calculator" variant="secondary">
            <Calculator className="size-4" /> Estimate your total cost
          </ButtonLink>
          <ButtonLink href="/pricing#compare" variant="ghost">
            Compare all features <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Section>

      <Section id="faq" tone="surface" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="faq-title"
              align="left"
              eyebrow="FAQ"
              title="Questions? We've got answers."
              description="Everything you need to know about our pricing, process and what's included."
            />
            <div className="mt-8 rounded-2xl border border-line bg-white p-6">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <MessageCircleQuestion className="size-5" />
              </span>
              <p className="mt-4 font-display font-semibold text-ink">Still have a question?</p>
              <p className="mt-1 text-sm text-muted">Message us on WhatsApp or send a quick enquiry.</p>
              <ButtonLink href="/contact" variant="secondary" size="sm" className="mt-4">
                Ask us anything
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
        <FaqJsonLd items={faqs} />
      </Section>

      <FinalCta />
    </>
  );
}
