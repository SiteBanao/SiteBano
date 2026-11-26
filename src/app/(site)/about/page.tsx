import type { Metadata } from "next";
import Image from "next/image";
import { BadgeIndianRupee, Eye, Gem, HeartHandshake, KeyRound, ReceiptText, ScrollText, Target, UserRound } from "lucide-react";
import { FinalCta } from "@/components/shared/FinalCta";
import { PageHeader } from "@/components/shared/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { aboutPhoto } from "@/data/photos";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SiteBanao is a startup founded by three individuals with a shared vision: making professional websites accessible to every business, starting at ₹999.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: BadgeIndianRupee,
    title: "Affordability",
    text: "A professional website shouldn't be a luxury. Our packages start at ₹999 so every business can afford to be online.",
  },
  {
    icon: Gem,
    title: "Quality",
    text: "Affordable never means careless. Every website is designed with modern standards, clean layouts and mobile-first thinking.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Clear scopes, upfront quotes and honest answers. Domain, hosting and extras are always explained before you pay.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    text: "We listen first, keep you updated throughout and don't consider a project done until you're happy to launch it.",
  },
];

const promises = [
  { icon: ReceiptText, text: "No hidden charges. Every extra is quoted before work begins." },
  { icon: KeyRound, text: "Your domain and hosting stay in your name. You own them." },
  { icon: ScrollText, text: "Every package has a clearly defined, written scope." },
  { icon: Target, text: "No fake reviews, inflated numbers or misleading claims. Ever." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Making professional websites <span className="text-gradient">accessible to everyone</span>
          </>
        }
        description="SiteBanao is a young startup built on a simple belief: every business, big or small, deserves a beautiful online presence."
      />

      <Section labelledBy="story-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="story-title" align="left" eyebrow="Our story" title="Three founders. One shared vision." />
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                SiteBanao was founded by three individuals who kept seeing the same problem: talented local businesses
                (cafés, clinics, salons, tutors, shops) that customers simply couldn&apos;t find online.
              </p>
              <p>
                Too often, the reason was cost and complexity. Websites were either expensive agency projects or
                confusing do-it-yourself tools. We started SiteBanao to offer a third option: professionally designed
                websites at honest, affordable prices, with a process anyone can follow.
              </p>
              <p className="font-medium text-ink">
                Our philosophy is simple: premium websites, affordable pricing, no unnecessary complications.
              </p>
            </div>
            <ButtonLink href="/contact" className="mt-8">
              Work with us
            </ButtonLink>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-white to-accent-50 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                fill
                sizes="(min-width: 1024px) 580px, 90vw"
                quality={75}
                className="bg-[#e9ecf1] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 pb-14 sm:p-8 sm:pb-16">
                <ul className="flex -space-x-3" aria-label="Three co-founders">
                  {["from-brand-700 to-brand-500", "from-[#7d6bff] to-brand-600", "from-accent-600 to-accent-500"].map(
                    (g, i) => (
                      <li
                        key={g}
                        className={`grid size-11 place-items-center rounded-full bg-gradient-to-br ${g} text-white ring-2 ring-white`}
                      >
                        <UserRound className="size-5" aria-hidden />
                        <span className="sr-only">Co-founder {i + 1}</span>
                      </li>
                    ),
                  )}
                </ul>
                <p className="mt-4 font-display text-2xl font-bold text-white">Built by founders who care</p>
                <p className="mt-1 max-w-sm text-sm text-white/80">
                  A small, focused team that personally works on every project, from the first conversation to launch
                  day.
                </p>
              </div>
            </div>
            <div className="relative -mt-8 mx-4 grid grid-cols-3 gap-3 rounded-2xl bg-white p-3 text-center shadow-card ring-1 ring-line sm:mx-8">
              {[
                ["₹999", "Starting price"],
                ["3", "Clear packages"],
                ["100%", "Your ownership"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-surface p-3">
                  <p className="font-display text-xl font-extrabold text-brand-700 sm:text-2xl">{v}</p>
                  <p className="mt-1 text-xs text-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="values-title">
        <SectionHeading
          id="values-title"
          eyebrow="What we stand for"
          title="The values behind every website"
          description="These principles guide every project, every quote and every conversation."
        />
        <StaggerList className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title} className="rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-card">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </Section>

      <Section labelledBy="promise-title">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-ink p-8 text-white sm:p-12">
          <h2 id="promise-title" className="font-display text-3xl font-bold sm:text-4xl">
            Our promise to you
          </h2>
          <p className="mt-3 text-white/70">What you can always expect when you work with SiteBanao.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {promises.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <Icon className="mt-0.5 size-5 shrink-0 text-brand-300" />
                <span className="text-white/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
