import type { Metadata } from "next";
import { ArrowRight, Check, ClipboardList, KeyRound, Timer, UserRound } from "lucide-react";
import { FaqList } from "@/components/shared/FaqList";
import { FinalCta } from "@/components/shared/FinalCta";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { packages } from "@/data/packages";
import { processSteps } from "@/data/process";
import { formatINR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How It Works: From Enquiry to Launch",
  description:
    "See exactly how SiteBanao takes your website from enquiry to launch in five simple steps: choose a package, share requirements, development, review and launch.",
  alternates: { canonical: "/how-it-works" },
};

const checklist = [
  "Business name and logo (if you have one)",
  "Short description of your business and services",
  "Contact details: phone, WhatsApp, email, address",
  "Photos of your work, products, team or premises",
  "Business hours, prices or menus (if relevant)",
  "Links to websites or designs you like (optional)",
  "Your domain name, or ideas for one",
  "Social media profile links (optional)",
];

const processFaqs = faqs.filter((f) =>
  ["How long does development take?", "Can I request changes?", "Can I use my own domain?", "Do you provide maintenance?"].includes(
    f.question,
  ),
);

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title={
          <>
            A simple process, <span className="text-gradient">from enquiry to launch</span>
          </>
        }
        description="We keep things clear and predictable. You always know what's happening, what we need from you and what comes next."
      />

      <Section labelledBy="overview-title">
        <h2 id="overview-title" className="sr-only">
          Process overview
        </h2>
        <ProcessTimeline />
      </Section>

      <Section tone="surface" labelledBy="journey-title">
        <SectionHeading
          id="journey-title"
          eyebrow="Step by step"
          title="Your complete customer journey"
          description="Here's what happens at each stage, and what you'll need to share."
        />
        <ol className="mx-auto mt-14 max-w-4xl space-y-5">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-brand">
                      <Icon className="size-6" />
                    </span>
                    <span className="font-display text-sm font-bold text-brand-600 sm:hidden">Step {i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="hidden font-display text-sm font-bold text-brand-600 sm:block">Step {i + 1}</p>
                    <h3 className="font-display text-xl font-bold text-ink sm:mt-1">{step.title}</h3>
                    <p className="mt-2 text-muted">{step.summary}</p>
                    <ul className="mt-5 space-y-2.5">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-[15px] text-ink-soft">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent-600" strokeWidth={3} />
                          {d}
                        </li>
                      ))}
                    </ul>
                    {step.youProvide ? (
                      <p className="mt-5 flex items-start gap-2 rounded-xl bg-surface px-4 py-3 text-sm text-ink-soft ring-1 ring-line">
                        <UserRound className="mt-0.5 size-4 shrink-0 text-brand-600" />
                        <span>
                          <strong className="font-semibold text-ink">You provide:</strong> {step.youProvide}
                        </span>
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section labelledBy="prepare-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="prepare-title"
              align="left"
              eyebrow="Get ready"
              title="What to keep ready"
              description="Having these ready helps us start immediately and finish faster. Don't worry if you're missing something. We'll help."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-line p-4 text-sm text-ink-soft">
                  <ClipboardList className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-8">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
                <Timer className="size-6 text-brand-600" /> Typical timelines
              </h3>
              <p className="mt-2 text-sm text-muted">Working days, counted from when we receive all your content.</p>
              <ul className="mt-6 divide-y divide-line">
                {packages.map((p) => (
                  <li key={p.id} className="flex items-center justify-between py-3.5">
                    <span>
                      <span className="font-semibold text-ink">{p.name}</span>{" "}
                      <span className="text-sm text-muted">· {formatINR(p.price)}</span>
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-ink ring-1 ring-line">
                      {p.timeline}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-ink p-7 text-white sm:p-8">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold">
                <KeyRound className="size-6 text-brand-300" /> You own everything
              </h3>
              <p className="mt-3 leading-relaxed text-white/75">
                Your domain and hosting are registered in your name. At launch we hand over all access details, so
                you&apos;re never locked in. Need help later? Optional maintenance plans are available.
              </p>
              <ButtonLink href="/contact" variant="white" className="mt-6">
                Start your website <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="process-faq-title">
        <SectionHeading id="process-faq-title" eyebrow="FAQ" title="Common process questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={processFaqs} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
