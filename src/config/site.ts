/**
 * Central site configuration.
 *
 * Every real-world detail (phone, email, WhatsApp, socials, form endpoint)
 * comes from environment variables so nothing fabricated ships to production.
 * Copy `.env.example` to `.env.local` and fill in your actual details.
 * When a value is missing the UI shows a clearly labelled placeholder instead.
 */

const clean = (value: string | undefined) => {
  const v = value?.trim();
  return v ? v : null;
};

/** Digits only, including country code, e.g. 919876543210 */
const whatsappNumber = clean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)?.replace(/\D/g, "") || null;

export const siteConfig = {
  name: "SiteBanao",
  tagline: "Your Website. Just ₹999.",
  altTagline: "Your Business Deserves to Be Online.",
  philosophy: "Premium websites. Affordable pricing. No unnecessary complications.",
  description:
    "SiteBanao builds beautiful, mobile-friendly and professional websites for small businesses, startups and personal brands, with development starting at just ₹999. Transparent pricing, with domain and hosting quoted separately.",
  url: (clean(process.env.NEXT_PUBLIC_SITE_URL) ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_IN",

  contact: {
    whatsappNumber,
    phone: clean(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    address: clean(process.env.NEXT_PUBLIC_BUSINESS_ADDRESS),
    hours: clean(process.env.NEXT_PUBLIC_BUSINESS_HOURS),
  },

  social: [
    { name: "Instagram", key: "instagram", href: clean(process.env.NEXT_PUBLIC_INSTAGRAM_URL) },
    { name: "Facebook", key: "facebook", href: clean(process.env.NEXT_PUBLIC_FACEBOOK_URL) },
    { name: "LinkedIn", key: "linkedin", href: clean(process.env.NEXT_PUBLIC_LINKEDIN_URL) },
    { name: "YouTube", key: "youtube", href: clean(process.env.NEXT_PUBLIC_YOUTUBE_URL) },
    { name: "X", key: "x", href: clean(process.env.NEXT_PUBLIC_X_URL) },
  ] as const,

  /**
   * Enquiry form delivery. Any endpoint that accepts a JSON POST works, e.g.
   * Formspree (https://formspree.io/f/xxxx), Web3Forms (https://api.web3forms.com/submit
   * + access key) or a Google Apps Script web app that returns JSON.
   * Leave empty to run the form in "demo mode" (nothing is sent to a server).
   */
  form: {
    endpoint: clean(process.env.NEXT_PUBLIC_FORM_ENDPOINT),
    accessKey: clean(process.env.NEXT_PUBLIC_FORM_ACCESS_KEY),
  },
} as const;

export type SocialKey = (typeof siteConfig.social)[number]["key"];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
