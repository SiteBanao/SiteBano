import {
  Briefcase,
  Building2,
  GraduationCap,
  Rocket,
  Scissors,
  Stethoscope,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { PortfolioCategory } from "./portfolio";

export interface Industry {
  name: string;
  description: string;
  icon: LucideIcon;
  category: PortfolioCategory;
  /** Accent colour for the card visual. */
  color: string;
  soft: string;
  features: string[];
  /** Demo whose photography represents this industry. */
  demo: string;
}

export const industries: Industry[] = [
  {
    name: "Restaurants & Cafes",
    demo: "chai-and-crumbs-cafe",
    description: "Menus, timings, photos and table enquiries that make people hungry to visit.",
    icon: UtensilsCrossed,
    category: "restaurant",
    color: "#C2410C",
    soft: "#FFF7ED",
    features: ["Menu", "Gallery", "Reserve"],
  },
  {
    name: "Clinics & Doctors",
    demo: "carewell-family-clinic",
    description: "Calm, credible websites with services, doctor profiles and appointment requests.",
    icon: Stethoscope,
    category: "healthcare",
    color: "#0369A1",
    soft: "#F0F9FF",
    features: ["Doctors", "OPD hours", "Book"],
  },
  {
    name: "Real Estate",
    demo: "nestora-realty",
    description: "Showcase listings and projects, and capture site-visit leads around the clock.",
    icon: Building2,
    category: "real-estate",
    color: "#047857",
    soft: "#ECFDF5",
    features: ["Listings", "Projects", "Visit"],
  },
  {
    name: "Salons & Spas",
    demo: "glow-and-grace-salon",
    description: "Elegant service menus, price lists and quick WhatsApp booking buttons.",
    icon: Scissors,
    category: "business",
    color: "#BE185D",
    soft: "#FDF2F8",
    features: ["Services", "Prices", "Book"],
  },
  {
    name: "Coaching Institutes",
    demo: "brightpath-academy",
    description: "Courses, batches and faculty, plus admission enquiries straight to your phone.",
    icon: GraduationCap,
    category: "education",
    color: "#1D4ED8",
    soft: "#EFF6FF",
    features: ["Courses", "Batches", "Enquire"],
  },
  {
    name: "Freelancers & Portfolios",
    demo: "pixel-and-pine-studio",
    description: "A personal site that presents your work professionally and wins more clients.",
    icon: Briefcase,
    category: "portfolio",
    color: "#6D28D9",
    soft: "#F5F3FF",
    features: ["Work", "Skills", "Hire me"],
  },
  {
    name: "Small Businesses",
    demo: "freshbasket-grocers",
    description: "Local shops and service providers, finally discoverable on Google and WhatsApp.",
    icon: Store,
    category: "business",
    color: "#15803D",
    soft: "#F0FDF4",
    features: ["About", "Products", "Order"],
  },
  {
    name: "Startups & Companies",
    demo: "launchly-saas",
    description: "Modern, credible websites that explain your product and generate demo requests.",
    icon: Rocket,
    category: "business",
    color: "#4338CA",
    soft: "#EEF2FF",
    features: ["Product", "Pricing", "Demo"],
  },
];
