import {
  BadgeIndianRupee,
  Briefcase,
  Code2,
  Gauge,
  Headphones,
  LayoutTemplate,
  MousePointerClick,
  Palette,
  PanelsTopLeft,
  ReceiptText,
  RefreshCw,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  points: string[];
  startingAt: string;
  idealFor: string;
}

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    summary:
      "Complete, professionally designed websites built on modern technology. Fast, secure and easy for customers to use.",
    icon: Code2,
    points: ["Mobile-first responsive layouts", "Fast-loading, lightweight pages", "Basic SEO built in"],
    startingAt: "From ₹999",
    idealFor: "Any business getting online for the first time",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    summary:
      "Focused single pages for a product launch, offer, event or ad campaign, designed to turn visitors into enquiries.",
    icon: MousePointerClick,
    points: ["Clear call-to-action", "WhatsApp & form enquiries", "Campaign-ready structure"],
    startingAt: "From ₹999",
    idealFor: "Offers, launches, events and ad campaigns",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    summary:
      "Multi-page websites with Home, About, Services and Contact pages that present your business with confidence.",
    icon: PanelsTopLeft,
    points: ["Up to 5 or 8 pages", "Contact forms & maps", "Gallery and testimonials"],
    startingAt: "From ₹2,999",
    idealFor: "Clinics, salons, restaurants, institutes and agencies",
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    summary:
      "Personal websites for freelancers, creators and professionals that showcase your work and make hiring you easy.",
    icon: Briefcase,
    points: ["Project showcase", "Skills & services", "Hire-me call-to-action"],
    startingAt: "From ₹999",
    idealFor: "Freelancers, consultants, creators and job-seekers",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    summary:
      "Outdated, slow or hard-to-use website? We redesign it with a modern look, better structure and mobile-friendliness.",
    icon: RefreshCw,
    points: ["Modern visual refresh", "Improved mobile experience", "Clearer enquiry paths"],
    startingAt: "Quoted on review",
    idealFor: "Businesses with an existing but dated website",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    summary:
      "Optional monthly support for small content updates, backups and health checks, so your site stays fresh.",
    icon: Wrench,
    points: ["Content & price updates", "Backups and checks", "Priority support"],
    startingAt: "From ₹499 / month",
    idealFor: "Owners who'd rather not touch the website themselves",
  },
  {
    id: "custom-development",
    title: "Custom Development",
    summary:
      "Need bookings, payments, catalogues, blogs or something unique? We scope it properly and quote it transparently.",
    icon: LayoutTemplate,
    points: ["Written scope & quotation", "Integrations & custom features", "Built to grow with you"],
    startingAt: "Custom quote",
    idealFor: "Businesses with specific functional requirements",
  },
];

export const whyChoose: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Affordable Pricing",
    text: "Professional websites from ₹999. Premium quality without agency-level costs.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Professional Designs",
    text: "Clean, modern layouts inspired by the world's best product websites.",
    icon: Palette,
  },
  {
    title: "Mobile Responsive",
    text: "Every website looks and works great on phones, tablets and desktops.",
    icon: Smartphone,
  },
  {
    title: "Fast Development",
    text: "Clear timelines and quick turnarounds once we have your content.",
    icon: Gauge,
  },
  {
    title: "Transparent Quotations",
    text: "Fixed package scopes. Domain, hosting and extras are always quoted upfront.",
    icon: ReceiptText,
  },
  {
    title: "Customer Support",
    text: "Real people on WhatsApp, email and phone, before and after launch.",
    icon: Headphones,
  },
  {
    title: "Easy Ordering Process",
    text: "Choose a package, share your content, approve and go live. That's it.",
    icon: MousePointerClick,
  },
];
