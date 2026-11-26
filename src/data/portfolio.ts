import {
  Building2,
  Code2,
  GraduationCap,
  Rocket,
  Scissors,
  ShoppingBasket,
  Smile,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { PackageId } from "./packages";
import { demoPhotos, type DemoPhotos } from "./photos";

/**
 * DEMONSTRATION PROJECTS ONLY.
 * Every business below is fictional and was created to showcase design styles.
 * None of them are real SiteBanao clients. Keep the "Demo" labelling visible.
 */

export type PortfolioCategory =
  | "business"
  | "restaurant"
  | "healthcare"
  | "portfolio"
  | "real-estate"
  | "education";

export const portfolioFilters: Array<{ id: "all" | PortfolioCategory; label: string }> = [
  { id: "all", label: "All" },
  { id: "business", label: "Business" },
  { id: "restaurant", label: "Restaurant" },
  { id: "healthcare", label: "Healthcare" },
  { id: "portfolio", label: "Portfolio" },
  { id: "real-estate", label: "Real Estate" },
  { id: "education", label: "Education" },
];

export interface DemoTheme {
  /** Main brand colour of the demo site (white text must be readable on it). */
  primary: string;
  /** Very light tint for backgrounds. */
  soft: string;
  /** Deep shade for dark sections / headings. */
  dark: string;
}

export interface DemoProject {
  slug: string;
  name: string;
  category: PortfolioCategory;
  industry: string;
  description: string;
  packageId: PackageId;
  icon: LucideIcon;
  theme: DemoTheme;
  pages: string[];
  hero: { eyebrow: string; title: string; subtitle: string; cta: string };
  services: Array<{ title: string; text: string }>;
  about: string;
  highlights: string[];
  featured?: boolean;
  /** Photography (see src/data/photos.ts). */
  photos: DemoPhotos;
}

const demoContent: Array<Omit<DemoProject, "photos">> = [
  {
    slug: "chai-and-crumbs-cafe",
    name: "Chai & Crumbs Café",
    category: "restaurant",
    industry: "Restaurant & Café",
    description: "A warm, appetising café website with menu highlights, timings and one-tap table enquiries.",
    packageId: "business",
    icon: UtensilsCrossed,
    theme: { primary: "#C2410C", soft: "#FFF7ED", dark: "#431407" },
    pages: ["Home", "Menu", "About", "Gallery", "Contact"],
    hero: {
      eyebrow: "Freshly brewed, every day",
      title: "Your neighbourhood café for chai, coffee & comfort food.",
      subtitle: "Cutting chai, filter coffee, fresh bakes and all-day snacks, made with love in our open kitchen.",
      cta: "Reserve a Table",
    },
    services: [
      { title: "Signature Chai", text: "Masala, ginger, elaichi and our house special kulhad chai." },
      { title: "Fresh Bakes", text: "Croissants, cookies and banana bread baked every morning." },
      { title: "All-day Snacks", text: "Sandwiches, maggi, vada pav and quick bites." },
      { title: "Party Orders", text: "Snack platters and chai counters for office and home events." },
    ],
    about: "A cosy corner café designed for long conversations, work-from-café days and evening adda with friends.",
    highlights: ["Dine-in & takeaway", "Free Wi-Fi", "Pet friendly", "Open 7 days"],
    featured: true,
  },
  {
    slug: "carewell-family-clinic",
    name: "CareWell Family Clinic",
    category: "healthcare",
    industry: "Clinic & Doctor",
    description: "A calm, trustworthy clinic website with doctor profiles, OPD timings and appointment enquiries.",
    packageId: "business",
    icon: Stethoscope,
    theme: { primary: "#0369A1", soft: "#F0F9FF", dark: "#0C2D48" },
    pages: ["Home", "Doctors", "Services", "About", "Contact"],
    hero: {
      eyebrow: "General physician & family care",
      title: "Caring, consistent healthcare for your whole family.",
      subtitle: "Consultations, routine check-ups, vaccinations and diagnostics, all under one roof.",
      cta: "Book an Appointment",
    },
    services: [
      { title: "General Consultation", text: "Diagnosis and treatment for everyday health concerns." },
      { title: "Preventive Check-ups", text: "Health packages for adults, seniors and children." },
      { title: "Vaccinations", text: "Child and adult vaccination schedules with reminders." },
      { title: "Lab Tests", text: "Sample collection with digital reports." },
    ],
    about: "A neighbourhood clinic focused on unhurried consultations, clear explanations and follow-up care.",
    highlights: ["Morning & evening OPD", "Online reports", "Wheelchair access", "Parking available"],
    featured: true,
  },
  {
    slug: "nestora-realty",
    name: "Nestora Realty",
    category: "real-estate",
    industry: "Real Estate",
    description: "A premium property website with featured listings, project highlights and site-visit enquiries.",
    packageId: "professional",
    icon: Building2,
    theme: { primary: "#047857", soft: "#ECFDF5", dark: "#022C22" },
    pages: ["Home", "Properties", "Projects", "About", "Gallery", "Testimonials", "Contact"],
    hero: {
      eyebrow: "Residential & commercial property",
      title: "Find a home that fits your life, and your budget.",
      subtitle: "Verified listings, honest advice and end-to-end support from site visit to registration.",
      cta: "Schedule a Site Visit",
    },
    services: [
      { title: "Buy a Home", text: "Apartments, villas and plots across prime locations." },
      { title: "Rent & Lease", text: "Residential and commercial rentals with clear terms." },
      { title: "Sell Your Property", text: "Valuation, listing and buyer matching." },
      { title: "Loan Assistance", text: "Help with home-loan paperwork and approvals." },
    ],
    about: "A property advisory focused on transparency, from fair pricing to clear documentation.",
    highlights: ["2 & 3 BHK homes", "Commercial spaces", "Loan support", "Site visits on request"],
    featured: true,
  },
  {
    slug: "glow-and-grace-salon",
    name: "Glow & Grace Salon",
    category: "business",
    industry: "Salon & Spa",
    description: "An elegant salon website with service menus, price lists and quick WhatsApp bookings.",
    packageId: "business",
    icon: Scissors,
    theme: { primary: "#BE185D", soft: "#FDF2F8", dark: "#500724" },
    pages: ["Home", "Services", "Pricing", "Gallery", "Contact"],
    hero: {
      eyebrow: "Hair · Skin · Nails · Spa",
      title: "Look good. Feel better. Leave glowing.",
      subtitle: "Expert stylists, hygienic tools and a relaxing space designed around you.",
      cta: "Book Your Slot",
    },
    services: [
      { title: "Hair Styling", text: "Cuts, colour, smoothening and spa treatments." },
      { title: "Skin Care", text: "Facials, clean-ups and de-tan rituals." },
      { title: "Bridal Packages", text: "Pre-bridal and bridal makeup with trials." },
      { title: "Nail Studio", text: "Manicure, pedicure and nail art." },
    ],
    about: "A modern unisex salon offering personalised treatments in a calm, hygienic environment.",
    highlights: ["Unisex salon", "Bridal specialists", "Hygienic tools", "Walk-ins welcome"],
    featured: true,
  },
  {
    slug: "brightpath-academy",
    name: "BrightPath Academy",
    category: "education",
    industry: "Coaching Institute",
    description: "A results-focused coaching website with courses, batch timings, faculty and admission enquiries.",
    packageId: "professional",
    icon: GraduationCap,
    theme: { primary: "#1D4ED8", soft: "#EFF6FF", dark: "#172554" },
    pages: ["Home", "Courses", "Faculty", "Batches", "Gallery", "Testimonials", "Admissions", "Contact"],
    hero: {
      eyebrow: "Classes 8–12 · Competitive exams",
      title: "Strong concepts today. Confident results tomorrow.",
      subtitle: "Small batches, experienced faculty and weekly tests that keep every student on track.",
      cta: "Enquire for Admission",
    },
    services: [
      { title: "School Coaching", text: "Maths and Science for classes 8 to 12." },
      { title: "Entrance Prep", text: "Structured preparation for competitive exams." },
      { title: "Weekly Tests", text: "Regular assessments with progress reports." },
      { title: "Doubt Sessions", text: "One-on-one help whenever students get stuck." },
    ],
    about: "An institute built on small batch sizes, personal attention and a disciplined learning routine.",
    highlights: ["Small batches", "Weekly tests", "Parent updates", "Offline & online"],
    featured: true,
  },
  {
    slug: "pixel-and-pine-studio",
    name: "Pixel & Pine Studio",
    category: "portfolio",
    industry: "Freelancer Portfolio",
    description: "A minimal personal portfolio that showcases work, skills and makes hiring effortless.",
    packageId: "starter",
    icon: Code2,
    theme: { primary: "#6D28D9", soft: "#F5F3FF", dark: "#2E1065" },
    pages: ["Home (single page)"],
    hero: {
      eyebrow: "Freelance designer & developer",
      title: "I design and build thoughtful digital experiences.",
      subtitle: "Brand identities, websites and UI design for founders and small teams.",
      cta: "Hire Me",
    },
    services: [
      { title: "Brand Identity", text: "Logos, colour systems and brand guidelines." },
      { title: "Website Design", text: "Clean, conversion-focused website designs." },
      { title: "UI Design", text: "App and dashboard interfaces that feel effortless." },
      { title: "Consulting", text: "Design reviews and product feedback sessions." },
    ],
    about: "An independent creative studio that partners with small businesses to turn ideas into polished products.",
    highlights: ["Available for projects", "Remote friendly", "Fast turnaround", "Clear pricing"],
    featured: true,
  },
  {
    slug: "smilecraft-dental",
    name: "SmileCraft Dental Care",
    category: "healthcare",
    industry: "Dental Clinic",
    description: "A friendly one-page dental website with treatments, timings and instant WhatsApp appointments.",
    packageId: "starter",
    icon: Smile,
    theme: { primary: "#0F766E", soft: "#F0FDFA", dark: "#134E4A" },
    pages: ["Home (single page)"],
    hero: {
      eyebrow: "Gentle dental care",
      title: "Healthy smiles, painless visits.",
      subtitle: "Check-ups, cleaning, fillings, braces and more, explained clearly and done gently.",
      cta: "Book a Check-up",
    },
    services: [
      { title: "Check-up & Cleaning", text: "Routine examination and professional cleaning." },
      { title: "Fillings & RCT", text: "Restorative treatments with modern equipment." },
      { title: "Braces & Aligners", text: "Orthodontic options for every age." },
      { title: "Teeth Whitening", text: "Safe, in-clinic whitening treatments." },
    ],
    about: "A modern dental practice where every treatment is explained before it begins.",
    highlights: ["Sterilised instruments", "Kids friendly", "Evening slots", "Digital X-rays"],
  },
  {
    slug: "freshbasket-grocers",
    name: "FreshBasket Grocers",
    category: "business",
    industry: "Local Shop",
    description: "A simple, practical website for a neighbourhood store with categories, timings and WhatsApp orders.",
    packageId: "starter",
    icon: ShoppingBasket,
    theme: { primary: "#15803D", soft: "#F0FDF4", dark: "#052E16" },
    pages: ["Home (single page)"],
    hero: {
      eyebrow: "Your neighbourhood store",
      title: "Fresh groceries, delivered to your doorstep.",
      subtitle: "Fruits, vegetables, dairy and daily essentials. Order on WhatsApp in seconds.",
      cta: "Order on WhatsApp",
    },
    services: [
      { title: "Fruits & Vegetables", text: "Fresh produce sourced every morning." },
      { title: "Dairy & Bakery", text: "Milk, paneer, bread and eggs." },
      { title: "Staples", text: "Atta, rice, dal, oil and spices." },
      { title: "Home Delivery", text: "Quick delivery within the neighbourhood." },
    ],
    about: "A family-run store serving the neighbourhood with fresh produce and honest prices.",
    highlights: ["WhatsApp orders", "Home delivery", "UPI accepted", "Open early"],
  },
  {
    slug: "launchly-saas",
    name: "Launchly",
    category: "business",
    industry: "Startup & SaaS",
    description: "A modern startup website with product features, pricing tiers and demo-request flows.",
    packageId: "professional",
    icon: Rocket,
    theme: { primary: "#4338CA", soft: "#EEF2FF", dark: "#1E1B4B" },
    pages: ["Home", "Product", "Features", "Pricing", "About", "Blog", "Careers", "Contact"],
    hero: {
      eyebrow: "Invoicing for small teams",
      title: "Send invoices in seconds. Get paid faster.",
      subtitle: "Simple invoicing, payment reminders and GST-ready reports for growing businesses.",
      cta: "Request a Demo",
    },
    services: [
      { title: "Smart Invoices", text: "Create branded invoices in under a minute." },
      { title: "Auto Reminders", text: "Polite follow-ups so you don't have to chase." },
      { title: "GST Reports", text: "Export-ready reports for your accountant." },
      { title: "Team Access", text: "Roles and permissions for your whole team." },
    ],
    about: "A product team building tools that make running a small business a little less complicated.",
    highlights: ["14-day trial", "No setup fee", "Secure by design", "Email support"],
  },
];

export const demoProjects: DemoProject[] = demoContent.map((d) => ({ ...d, photos: demoPhotos[d.slug] }));

export const getDemo = (slug: string) => demoProjects.find((d) => d.slug === slug);
export const featuredDemos = demoProjects.filter((d) => d.featured);
