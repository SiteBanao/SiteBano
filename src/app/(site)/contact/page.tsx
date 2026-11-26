import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { EnquiryForm, EnquiryFormFromParams } from "@/components/contact/EnquiryForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { generalEnquiryMessage, isWhatsAppConfigured, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us: Get Your Website",
  description:
    "Tell us about your business and get a website from ₹999. Send an enquiry or chat with SiteBanao on WhatsApp.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "We review your requirements",
  "We recommend a package or send a custom quote",
  "You approve and share your content",
  "We start building your website",
];

export default function ContactPage() {
  const { contact } = siteConfig;
  const wa = whatsappLink(generalEnquiryMessage);

  const details = [
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : undefined,
    },
    { icon: Mail, label: "Email", value: contact.email, href: contact.email ? `mailto:${contact.email}` : undefined },
    { icon: MapPin, label: "Address", value: contact.address },
    { icon: Clock, label: "Business hours", value: contact.hours },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build your <span className="text-gradient">website</span>
          </>
        }
        description="Share a few details about your business and we'll recommend the right package, or send a transparent custom quotation."
      />

      <Section labelledBy="enquiry-title" className="pt-14 sm:pt-16 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-9 lg:col-span-7">
            <h2 id="enquiry-title" className="font-display text-2xl font-bold text-ink">
              Website enquiry
            </h2>
            <p className="mt-1.5 text-muted">Fields marked * are required. It only takes a minute.</p>
            <div className="relative mt-7">
              <Suspense fallback={<EnquiryForm />}>
                <EnquiryFormFromParams />
              </Suspense>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5" aria-label="Other ways to contact us">
            <div className="relative overflow-hidden rounded-3xl bg-[#0b3d24] p-7 text-white sm:p-8">
              <div aria-hidden className="absolute -top-16 -right-16 size-52 rounded-full bg-whatsapp/30 blur-3xl" />
              <span className="relative grid size-12 place-items-center rounded-2xl bg-whatsapp text-[#0b3d24]">
                <WhatsAppIcon className="size-6" />
              </span>
              <h2 className="relative mt-5 font-display text-2xl font-bold">Prefer WhatsApp?</h2>
              <p className="relative mt-2 text-white/75">
                Chat with us directly. Ask questions, share photos or references, and get a quick quote.
              </p>
              <ButtonLink href={wa.href} external={wa.external} variant="secondary" className="relative mt-6">
                <WhatsAppIcon className="size-5" /> Chat on WhatsApp
              </ButtonLink>
              {!isWhatsAppConfigured ? (
                <p className="relative mt-4 text-xs text-white/60">WhatsApp number coming soon. Please use the form for now.</p>
              ) : null}
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8">
              <h2 className="font-display text-lg font-bold text-ink">Contact details</h2>
              <ul className="mt-5 space-y-4">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted">{label}</span>
                      {value ? (
                        href ? (
                          <a href={href} className="font-medium break-words text-ink hover:text-brand-700">
                            {value}
                          </a>
                        ) : (
                          <span className="font-medium text-ink">{value}</span>
                        )
                      ) : (
                        <span className="font-medium text-[#98a2b3] italic">Coming soon</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-8">
              <h2 className="font-display text-lg font-bold text-ink">What happens next?</h2>
              <ol className="mt-5 space-y-3.5">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 text-[15px] text-ink-soft">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-sm font-bold text-brand-700 ring-1 ring-line">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
