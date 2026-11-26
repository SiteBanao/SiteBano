import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { PopIn } from "@/components/motion/PopIn";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

/** Floating WhatsApp button, visible on every marketing page. */
export function WhatsAppFloat() {
  const wa = whatsappLink(generalEnquiryMessage);

  return (
    <PopIn className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6" delay={1.2}>
      <a
        href={wa.href}
        {...(wa.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label="Chat with SiteBanao on WhatsApp"
        className="group relative flex items-center gap-2 rounded-full bg-whatsapp-dark p-3.5 text-white shadow-[0_10px_30px_-6px_rgb(18_140_75/0.6)] ring-4 ring-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b6535] sm:pr-5"
      >
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.6s]"
          aria-hidden
        />
        <WhatsAppIcon className="size-6" />
        <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
      </a>
    </PopIn>
  );
}
