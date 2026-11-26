/**
 * Website development packages.
 * Prices are ONE-TIME development charges only. Domain, hosting, renewals,
 * premium assets, maintenance and custom functionality are quoted separately.
 */

export type PackageId = "starter" | "business" | "professional";

export interface WebsitePackage {
  id: PackageId;
  name: string;
  price: number;
  tagline: string;
  bestFor: string;
  pages: string;
  revisions: number;
  /** Indicative timeline once all content has been received. Edit to match your capacity. */
  timeline: string;
  features: string[];
  recommended?: boolean;
}

export const packages: WebsitePackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: 999,
    tagline: "A clean one-page website to get you online fast.",
    bestFor: "Local shops, freelancers & first-time owners",
    pages: "1 page",
    revisions: 1,
    timeline: "3–5 working days",
    features: [
      "One-page website",
      "Mobile-responsive design",
      "Business information",
      "Contact details",
      "WhatsApp button",
      "Basic SEO setup",
      "One revision",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: 2999,
    tagline: "A complete multi-page website for growing businesses.",
    bestFor: "Clinics, salons, restaurants & service businesses",
    pages: "Up to 5 pages",
    revisions: 2,
    timeline: "7–10 working days",
    recommended: true,
    features: [
      "Up to 5 pages",
      "Professional website design",
      "About Us page",
      "Services page",
      "Contact page",
      "WhatsApp integration",
      "Contact form",
      "Basic SEO setup",
      "Two revisions",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 5999,
    tagline: "A premium website experience that builds instant trust.",
    bestFor: "Real estate, institutes, startups & established brands",
    pages: "Up to 8 pages",
    revisions: 3,
    timeline: "10–15 working days",
    features: [
      "Up to 8 pages",
      "Premium UI/UX",
      "Advanced contact forms",
      "Gallery",
      "Testimonials section",
      "Google Maps integration",
      "SEO-friendly structure",
      "Three revisions",
    ],
  },
];

export const getPackage = (id: string | null | undefined) =>
  packages.find((p) => p.id === id?.toLowerCase());

/** Feature matrix used on the pricing page comparison table. */
export const comparisonRows: Array<{
  label: string;
  values: Record<PackageId, boolean | string>;
}> = [
  { label: "Number of pages", values: { starter: "1", business: "Up to 5", professional: "Up to 8" } },
  { label: "Mobile-responsive design", values: { starter: true, business: true, professional: true } },
  { label: "Design level", values: { starter: "Clean template", business: "Professional", professional: "Premium UI/UX" } },
  { label: "Business information & contact details", values: { starter: true, business: true, professional: true } },
  { label: "WhatsApp button / integration", values: { starter: true, business: true, professional: true } },
  { label: "About Us & Services pages", values: { starter: false, business: true, professional: true } },
  { label: "Contact form", values: { starter: false, business: "Standard", professional: "Advanced" } },
  { label: "Photo gallery", values: { starter: false, business: false, professional: true } },
  { label: "Testimonials section", values: { starter: false, business: false, professional: true } },
  { label: "Google Maps integration", values: { starter: false, business: false, professional: true } },
  { label: "SEO", values: { starter: "Basic setup", business: "Basic setup", professional: "SEO-friendly structure" } },
  { label: "Revisions included", values: { starter: "1", business: "2", professional: "3" } },
  { label: "Typical timeline*", values: { starter: "3–5 days", business: "7–10 days", professional: "10–15 days" } },
];

/** What every package price includes / excludes. */
export const inclusions = [
  "Design and development of the agreed pages",
  "Mobile, tablet and desktop responsive layouts",
  "Setup of the content you provide (text, logo, photos)",
  "WhatsApp click-to-chat button",
  "Basic on-page SEO (titles, descriptions, headings)",
  "Deployment to your hosting & connection to your domain",
  "The number of revisions stated in your package",
];

export const exclusions = [
  "Domain registration and yearly renewal",
  "Web hosting and yearly renewal",
  "Paid themes, plugins, fonts or stock images",
  "Ongoing maintenance and content updates",
  "Content writing, photography or logo design",
  "Custom functionality (bookings, payments, logins, e-commerce…)",
  "Revisions beyond those included in your package",
];
