import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { FinalCta } from "@/components/shared/FinalCta";
import { PageHeader } from "@/components/shared/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { inclusions } from "@/data/packages";
import { servicePhotos } from "@/data/photos";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Website development, landing pages, business websites, portfolio websites, redesigns, maintenance and custom development, starting at ₹999.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="text-gradient">get your business online</span>
          </>
        }
        description="From a simple one-page website to a fully custom build, every service comes with a clear scope and transparent pricing."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Get a free quote <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href="/pricing" variant="secondary" size="lg">
            View pricing
          </ButtonLink>
        </div>
      </PageHeader>

      <Section labelledBy="services-list-title">
        <h2 id="services-list-title" className="sr-only">
          Our services
        </h2>
        <StaggerList className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            const wa = whatsappLink(
              `Hi SiteBanao! I'm interested in your ${service.title} service. Please share the details.`,
              `?service=${service.id}`,
            );
            const photo = servicePhotos[service.id];
            const featured = i === 0;
            return (
              <StaggerItem
                key={service.id}
                id={service.id}
                className={cn(
                  "group overflow-hidden rounded-3xl border bg-white transition-shadow hover:shadow-lift",
                  featured ? "border-brand-200 shadow-card md:col-span-2 md:grid md:grid-cols-2" : "border-line shadow-soft",
                )}
              >
                <div className={cn("relative overflow-hidden", featured ? "aspect-[16/10] md:aspect-auto md:min-h-[380px]" : "aspect-[16/9]")}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={featured ? "(min-width: 768px) 600px, 90vw" : "(min-width: 768px) 600px, 90vw"}
                    quality={75}
                    className="bg-[#e9ecf1] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                  <span className="absolute top-4 left-4 grid size-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-brand ring-2 ring-white/60">
                    <Icon className="size-6" />
                  </span>
                  <span className="absolute right-4 bottom-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-accent-700 shadow-lg">
                    {service.startingAt}
                  </span>
                </div>
                <div className={cn("p-7 sm:p-9", featured ? "flex flex-col justify-center bg-gradient-to-br from-brand-25 to-white" : "")}>
                  {featured ? (
                    <span className="mb-3 w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                      Core service
                    </span>
                  ) : null}
                  <h3 className="font-display text-2xl font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{service.summary}</p>
                  <p className="mt-4 text-sm text-ink-soft">
                    <span className="font-semibold text-ink">Ideal for:</span> {service.idealFor}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-[15px] text-ink-soft">
                        <Check className="size-4 shrink-0 text-accent-600" strokeWidth={3} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    <ButtonLink href={`/contact?service=${service.id}`} size="sm" className="h-10">
                      Enquire now
                    </ButtonLink>
                    <ButtonLink href={wa.href} external={wa.external} variant="secondary" size="sm" className="h-10">
                      <WhatsAppIcon className="size-4 text-whatsapp-dark" /> WhatsApp
                    </ButtonLink>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerList>
      </Section>

      <Section tone="surface" labelledBy="included-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            id="included-title"
            align="left"
            eyebrow="Included as standard"
            title="What every SiteBanao website includes"
            description="Whichever package you choose, these essentials are always part of the build. Anything outside the agreed scope is quoted before work begins."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-[15px] text-ink-soft">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta
        title="Not sure which service you need?"
        description="Tell us about your business and goals, and we'll recommend the simplest, most affordable way to get you online."
      />
    </>
  );
}
