import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LogoReel } from "@/components/brand/LogoReel";
import { SocialIcon, WhatsAppIcon } from "@/components/brand/SocialIcons";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

const columns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 6).map((s) => ({ label: s.title, href: `/services#${s.id}` })),
  },
  {
    title: "Pricing",
    links: [
      { label: "Packages", href: "/pricing" },
      { label: "Compare Plans", href: "/pricing#compare" },
      { label: "Cost Calculator", href: "/pricing#calculator" },
      { label: "Additional Services", href: "/pricing#add-ons" },
      { label: "FAQs", href: "/pricing#faq" },
    ],
  },
];

export function ContactLine({
  icon: Icon,
  value,
  href,
  placeholder,
}: {
  icon: typeof Mail;
  value: string | null;
  href?: string;
  placeholder: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-brand-300" aria-hidden />
      {value ? (
        href ? (
          <a href={href} className="break-all transition-colors hover:text-white">
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )
      ) : (
        <span className="text-white/45 italic">{placeholder}</span>
      )}
    </li>
  );
}

export function Footer() {
  const { contact } = siteConfig;
  const wa = whatsappLink(generalEnquiryMessage);

  return (
    <footer className="relative overflow-hidden bg-[#0b0d1a] text-white/70">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-brand-700/25 blur-3xl"
      />
      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="SiteBanao home"
              className="block w-full max-w-[300px] overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgb(99_91_255/0.6)] ring-1 ring-white/10"
            >
              <LogoReel />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
              Professional, mobile-friendly websites for small businesses, startups and personal brands, with
              transparent pricing that starts at ₹999.
            </p>
            <p className="mt-4 text-sm font-medium text-white/90">{siteConfig.philosophy}</p>

            <ul className="mt-6 flex items-center gap-2" aria-label="Social media">
              {siteConfig.social.map((s) => (
                <li key={s.key}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`SiteBanao on ${s.name}`}
                      className="inline-flex size-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-brand-600 hover:text-white hover:ring-brand-500"
                    >
                      <SocialIcon name={s.key} className="size-4" />
                    </a>
                  ) : (
                    <span
                      title={`${s.name} link coming soon`}
                      aria-label={`${s.name} (coming soon)`}
                      role="img"
                      className="inline-flex size-10 cursor-default items-center justify-center rounded-xl bg-white/5 text-white/35 ring-1 ring-white/10"
                    >
                      <SocialIcon name={s.key} className="size-4" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="font-display text-sm font-semibold tracking-wide text-white">{col.title}</h2>
                <ul className="mt-4 space-y-3 text-[14.5px]">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">Get in touch</h2>
            <ul className="mt-4 space-y-3.5 text-[14.5px]">
              <ContactLine
                icon={Phone}
                value={contact.phone}
                href={contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : undefined}
                placeholder="Phone number coming soon"
              />
              <ContactLine
                icon={Mail}
                value={contact.email}
                href={contact.email ? `mailto:${contact.email}` : undefined}
                placeholder="Email address coming soon"
              />
              <ContactLine icon={MapPin} value={contact.address} placeholder="Business address coming soon" />
              <ContactLine icon={Clock} value={contact.hours} placeholder="Business hours coming soon" />
            </ul>
            <a
              href={wa.href}
              {...(wa.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-whatsapp-dark px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b6535]"
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> SiteBanao. All rights reserved.
          </p>
          <p className="text-white/50">
            Package prices are one-time development charges. Domain & hosting quoted separately. T&amp;C apply.
          </p>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
