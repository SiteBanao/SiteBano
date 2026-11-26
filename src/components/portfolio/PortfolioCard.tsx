import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { BrowserFrame } from "@/components/mockups/Devices";
import { MiniSite } from "@/components/mockups/MiniSite";
import { ButtonLink } from "@/components/ui/Button";
import { getPackage } from "@/data/packages";
import type { DemoProject } from "@/data/portfolio";
import { demoEnquiryMessage, whatsappLink } from "@/lib/whatsapp";
import { formatINR } from "@/lib/utils";

export function PortfolioCard({ demo }: { demo: DemoProject }) {
  const pkg = getPackage(demo.packageId)!;
  const get = whatsappLink(
    demoEnquiryMessage(demo.name, demo.industry, pkg.name),
    `?package=${pkg.id}&design=${demo.slug}`,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <Link
        href={`/portfolio/${demo.slug}`}
        className="relative block overflow-hidden p-4 pb-0 sm:p-5 sm:pb-0"
        style={{ background: `linear-gradient(180deg, ${demo.theme.soft} 0%, #ffffff 100%)` }}
        aria-label={`View live demo of ${demo.name}`}
      >
        <span className="absolute top-2.5 right-3 z-10 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur">
          DEMO DESIGN
        </span>
        <BrowserFrame
          url="yourbusiness.in"
          className="translate-y-2 rounded-b-none transition-transform duration-500 group-hover:translate-y-0"
        >
          <div className="aspect-[16/10]">
            <MiniSite demo={demo} variant="desktop" />
          </div>
        </BrowserFrame>
      </Link>

      <div className="flex flex-1 flex-col border-t border-line p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-1 text-xs font-semibold"
            style={{ background: demo.theme.soft, color: demo.theme.primary }}
          >
            {demo.industry}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-line">
            <Layers className="size-3" />
            {pkg.name} · {formatINR(pkg.price)}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold text-ink">{demo.name}</h3>
        <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-muted">{demo.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <ButtonLink href={`/portfolio/${demo.slug}`} variant="secondary" size="sm" className="h-10">
            View Live Demo
            <ArrowUpRight className="size-4" />
          </ButtonLink>
          <ButtonLink href={get.href} external={get.external} size="sm" className="h-10">
            Get This Website
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
