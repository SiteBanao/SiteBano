import { siteConfig } from "@/config/site";
import { formatINR } from "./utils";
import type { WebsitePackage } from "@/data/packages";

export const isWhatsAppConfigured = Boolean(siteConfig.contact.whatsappNumber);

export interface ContactLink {
  href: string;
  external: boolean;
}

/**
 * Returns a WhatsApp click-to-chat link with a pre-filled message.
 * If no number is configured yet, falls back to the contact page so visitors
 * never land on a broken link.
 */
export function whatsappLink(message: string, fallbackQuery = ""): ContactLink {
  if (!siteConfig.contact.whatsappNumber) {
    return { href: `/contact${fallbackQuery}`, external: false };
  }
  return {
    href: `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`,
    external: true,
  };
}

export const generalEnquiryMessage =
  "Hi SiteBanao! I'd like to know more about getting a website for my business.";

export function packageEnquiryMessage(pkg: Pick<WebsitePackage, "name" | "price">) {
  return `Hi SiteBanao! I'm interested in the ${pkg.name} package (${formatINR(
    pkg.price,
  )} development). Please share the next steps.`;
}

export function demoEnquiryMessage(demoName: string, industry: string, packageName: string) {
  return `Hi SiteBanao! I'd like a website similar to your "${demoName}" ${industry} demo (${packageName} package). Please share the details.`;
}
