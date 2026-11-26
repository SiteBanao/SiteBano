import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { industries, type Industry } from "@/data/industries";
import { demoPhotos } from "@/data/photos";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

function IndustryVisual({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  const photo = demoPhotos[industry.demo].hero;
  return (
    <div aria-hidden className="relative h-44 overflow-hidden rounded-xl">
      <Image
        src={photo.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
        quality={70}
        className="bg-[#e9ecf1] object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span
        className="absolute top-3 left-3 grid size-11 place-items-center rounded-xl text-white shadow-lg ring-2 ring-white/70"
        style={{ background: industry.color }}
      >
        <Icon className="size-5" strokeWidth={2} />
      </span>
      <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
        {industry.features.map((f) => (
          <span key={f} className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <Section id="industries" tone="surface" labelledBy="industries-title">
      <SectionHeading
        id="industries-title"
        eyebrow="Industries"
        title="Websites for Every Kind of Business"
        description="Whether you run a café, a clinic or a coaching centre, we design websites that fit how your customers search, decide and get in touch."
      />

      <StaggerList className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <StaggerItem key={industry.name}>
            <Link
              href={`/portfolio?category=${industry.category}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <IndustryVisual industry={industry} />
              <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                <h3 className="font-display text-lg font-bold text-ink">{industry.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{industry.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  View Designs
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerList>
    </Section>
  );
}
