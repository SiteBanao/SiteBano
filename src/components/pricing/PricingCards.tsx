import Link from "next/link";
import { Check, Clock, Info, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { ButtonLink } from "@/components/ui/Button";
import { packages, type WebsitePackage } from "@/data/packages";
import { packageEnquiryMessage, whatsappLink } from "@/lib/whatsapp";
import { cn, formatINR } from "@/lib/utils";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";

export function PricingCard({ pkg }: { pkg: WebsitePackage }) {
  const featured = Boolean(pkg.recommended);
  const wa = whatsappLink(packageEnquiryMessage(pkg), `?package=${pkg.id}`);

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 sm:p-8",
        featured
          ? "bg-ink text-white shadow-[0_30px_60px_-20px_rgb(79_43_216/0.55)] ring-1 ring-brand-600 lg:-my-4 lg:py-11"
          : "border border-line bg-white shadow-soft hover:-translate-y-1 hover:shadow-card",
      )}
    >
      {featured ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
          >
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-brand-600/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-60 rounded-full bg-brand-700/30 blur-3xl" />
          </div>
          <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-700 to-brand-500 px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-brand">
            <Star className="size-3.5 fill-current" /> Recommended
          </span>
        </>
      ) : null}

      <div className="relative">
        <h3 className={cn("font-display text-lg font-bold", featured ? "text-white" : "text-ink")}>
          {pkg.name}
        </h3>
        <p className={cn("mt-1.5 text-sm", featured ? "text-white/70" : "text-muted")}>{pkg.tagline}</p>

        <div className="mt-6 flex items-end gap-2">
          <span
            className={cn(
              "font-display text-5xl font-extrabold tracking-tight",
              featured ? "text-white" : "text-ink",
            )}
          >
            {formatINR(pkg.price)}
          </span>
          <span className={cn("pb-1.5 text-sm", featured ? "text-white/60" : "text-muted")}>one-time</span>
        </div>
        <p className={cn("mt-2 inline-flex items-center gap-1.5 text-xs", featured ? "text-white/60" : "text-muted")}>
          <Clock className="size-3.5" /> Typically {pkg.timeline}*
        </p>

        <div className="mt-6 grid gap-2.5">
          <ButtonLink
            href={`/contact?package=${pkg.id}`}
            variant={featured ? "primary" : "dark"}
            className="w-full"
          >
            Choose {pkg.name}
          </ButtonLink>
          <ButtonLink
            href={wa.href}
            external={wa.external}
            variant={featured ? "onDark" : "ghost"}
            size="sm"
            className="w-full"
          >
            <WhatsAppIcon className="size-4" /> Enquire on WhatsApp
          </ButtonLink>
        </div>
      </div>

      <div className={cn("relative mt-6 border-t pt-6", featured ? "border-white/10" : "border-line")}>
        <p className={cn("text-xs font-semibold tracking-wider uppercase", featured ? "text-white/50" : "text-muted")}>
          Best for: <span className="normal-case">{pkg.bestFor}</span>
        </p>
        <ul className="mt-4 space-y-3">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[15px]">
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                  featured ? "bg-brand-600 text-white" : "bg-accent-50 text-accent-600 ring-1 ring-accent-100",
                )}
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className={featured ? "text-white/90" : "text-ink-soft"}>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PricingNotice({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl border border-brand-100 bg-brand-25 p-5 text-sm text-ink-soft sm:flex-row sm:items-start sm:p-6",
        className,
      )}
    >
      <Info className="size-5 shrink-0 text-brand-600" />
      <div className="space-y-1.5 leading-relaxed">
        <p>
          <strong className="font-semibold text-ink">All package prices are one-time website development charges only.</strong>{" "}
          Domain registration, hosting, renewals, premium assets, maintenance and additional custom functionality are
          quoted separately. You always own your domain and hosting accounts.
        </p>
        <p className="text-muted">
          *Timelines are estimates and begin once all content is received.{" "}
          <Link href="/terms" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800">
            Terms &amp; Conditions Apply
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export function PricingCards() {
  return (
    <div>
      <StaggerList className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-3 lg:gap-5">
        {packages.map((pkg) => (
          <StaggerItem key={pkg.id}>
            <PricingCard pkg={pkg} />
          </StaggerItem>
        ))}
      </StaggerList>
      <PricingNotice className="mt-12" />
    </div>
  );
}
