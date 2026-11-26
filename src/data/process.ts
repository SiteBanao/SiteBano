import { Code2, Globe, ListChecks, MessageSquareText, PackageCheck, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  summary: string;
  icon: LucideIcon;
  details: string[];
  youProvide?: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Choose Your Package",
    summary: "Pick Starter, Business or Professional, or ask us to recommend one.",
    icon: PackageCheck,
    details: [
      "Compare packages on our pricing page or use the cost calculator.",
      "Not sure? Message us on WhatsApp and we'll suggest the right fit.",
      "Custom needs get a written quotation before anything starts.",
    ],
    youProvide: "Your business type and a rough idea of what you need.",
  },
  {
    title: "Share Your Requirements",
    summary: "Send your content, logo, photos and any reference websites you like.",
    icon: MessageSquareText,
    details: [
      "We share a simple checklist so you know exactly what to send.",
      "We confirm the scope, timeline and price in writing.",
      "Domain and hosting are purchased in your name, with our guidance.",
    ],
    youProvide: "Text content, logo, photos, contact details and preferences.",
  },
  {
    title: "We Develop Your Website",
    summary: "Our team designs and builds a fast, mobile-friendly website for you.",
    icon: Code2,
    details: [
      "Design and development on modern, lightweight technology.",
      "Optimised for mobile, tablet and desktop screens.",
      "Basic SEO, WhatsApp button and contact options set up.",
    ],
  },
  {
    title: "Review and Approve",
    summary: "Preview your website and request changes within your revision rounds.",
    icon: ListChecks,
    details: [
      "You receive a private preview link to review on any device.",
      "Share feedback in one consolidated list per revision round.",
      "Approve once you're happy with the result.",
    ],
    youProvide: "Clear, consolidated feedback for each revision round.",
  },
  {
    title: "Launch Your Website",
    summary: "We connect your domain, go live and hand over everything to you.",
    icon: Globe,
    details: [
      "Website deployed to your hosting and connected to your domain.",
      "Final checks on mobile, speed and contact buttons.",
      "Handover of access details. You own your domain and hosting.",
    ],
  },
];
