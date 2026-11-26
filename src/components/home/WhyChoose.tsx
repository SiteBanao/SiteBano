import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { whyChoose } from "@/data/services";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

export function WhyChoose() {
  const [featured, ...rest] = whyChoose;
  const FeaturedIcon = featured.icon;

  return (
    <Section id="why-sitebanao" labelledBy="why-title">
      <SectionHeading
        id="why-title"
        eyebrow="Why SiteBanao"
        title={
          <>
            Premium quality, <span className="text-gradient">without the premium price tag</span>
          </>
        }
        description="We combine modern design, honest pricing and a simple process, so getting online is never complicated."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {/* Featured card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-[#7d6bff] p-8 text-white shadow-brand">
          <div aria-hidden className="absolute -top-16 -right-16 size-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden className="bg-grid absolute inset-0 opacity-20 [filter:invert(1)]" />
          <div className="relative flex h-full flex-col">
            <span className="grid size-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
              <FeaturedIcon className="size-6" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold">{featured.title}</h3>
            <p className="mt-3 leading-relaxed text-white/85">{featured.text}</p>

            <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur">
              <p className="text-sm text-white/80">Website development starting at</p>
              <p className="mt-1 font-display text-5xl font-extrabold tracking-tight">₹999</p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                {["One-time development charge", "Clearly defined scope", "No hidden costs"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="size-4 text-accent-100" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-auto pt-6 text-xs text-white/70">
              Domain, hosting & custom features are quoted separately. T&amp;C apply.
            </p>
          </div>
        </div>

        <StaggerList className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {rest.map(({ title, text, icon: Icon }) => (
            <StaggerItem key={title}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </Section>
  );
}
