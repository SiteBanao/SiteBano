import type { Metadata } from "next";
import Image from "next/image";
import { BadgeIndianRupee, Eye, Gem, HeartHandshake, KeyRound, ReceiptText, ScrollText, Target } from "lucide-react";
import { FinalCta } from "@/components/shared/FinalCta";
import { PageHeader } from "@/components/shared/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { founderAlt, founders, teamPhoto } from "@/data/team";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SiteBanao is a startup founded by six co-founders with a shared vision: making professional websites accessible to every business, starting at ₹999.",
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
            <SectionHeading
              id="story-title"
              align="left"
              eyebrow="Our story"
              title="Six founders. One shared vision."
            />
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                SiteBanao was founded by six individuals who kept seeing the same problem: talented local businesses
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
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-white to-accent-50 blur-2xl"
            />
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-line">
              <div className="relative aspect-[3/2] bg-[#e9ecf1]">
                <Image
                  src={teamPhoto.src}
                  alt={teamPhoto.alt}
                  fill
                  sizes="(min-width: 1024px) 580px, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center gap-4 p-5 pb-12 sm:p-6 sm:pb-14">
                <ul className="flex shrink-0 -space-x-2.5" aria-label="The six co-founders">
                  {founders.map((f, i) => (
                    <li
                      key={f.id}
                      className="relative size-9 overflow-hidden rounded-full bg-[#e9ecf1] ring-2 ring-white sm:size-10"
                    >
                      <Image
                        src={f.photo}
                        alt={founderAlt(f, i)}
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </li>
                  ))}
                </ul>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-bold text-ink">Six founders who care</span>
                  <span className="block text-sm text-muted">
                    A small, focused team that personally works on every project.
                  </span>
                </span>
              </figcaption>
            </figure>
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

      <Section tone="surface" id="founders" labelledBy="founders-title">
        <SectionHeading
          id="founders-title"
          eyebrow="Meet the founders"
          title="The people behind SiteBanao"
          description="Six co-founders who personally plan, design and build every website, and who you'll actually talk to."
        />
        <StaggerList className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {founders.map((f, i) => (
            <StaggerItem key={f.id}>
              <figure className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-line transition-shadow duration-300 hover:shadow-lift">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e9ecf1]">
                  <Image
                    src={f.photo}
                    alt={founderAlt(f, i)}
                    fill
                    sizes="(min-width: 1024px) 320px, 45vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <figcaption className="flex items-center justify-between gap-2 p-4 sm:p-5">
                  <span className="min-w-0">
                    <span className="block truncate font-display text-base font-bold text-ink sm:text-lg">
                      {f.name ?? f.role}
                    </span>
                    <span className="block truncate text-sm text-muted">{f.name ? f.role : "SiteBanao"}</span>
                  </span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700 ring-1 ring-brand-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerList>
      </Section>

      <Section labelledBy="values-title">
        <SectionHeading
          id="values-title"
          eyebrow="What we stand for"
          title="The values behind every website"
          description="These principles guide every project, every quote and every conversation."
        />
        <StaggerList className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <StaggerItem
              key={title}
              className="rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-card"
            >
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
