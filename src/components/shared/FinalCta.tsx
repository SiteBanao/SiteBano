import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function FinalCta({
  title = "Ready to Take Your Business Online?",
  description = "Your next customer could be searching for you online. Let's make sure they find you.",
}: {
  title?: string;
  description?: string;
}) {
  const wa = whatsappLink(generalEnquiryMessage);

  return (
    <section aria-labelledby="final-cta-title" className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal y={28} scale={0.97}>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2c1785] via-brand-700 to-brand-600 px-6 py-16 text-center shadow-[0_40px_80px_-30px_rgb(79_43_216/0.6)] sm:px-12 sm:py-20">
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="bg-grid absolute inset-0 opacity-25 [filter:invert(1)] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
              <div className="absolute -top-32 -left-24 size-96 rounded-full bg-brand-400/30 blur-3xl" />
              <div className="absolute -right-24 -bottom-32 size-96 rounded-full bg-accent-500/20 blur-3xl" />
            </div>

            <h2
              id="final-cta-title"
              className="mx-auto max-w-3xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="white" size="lg">
                Start Your Website{" "}
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="onDark">
                Contact Us
              </ButtonLink>
            </div>
            <a
              href={wa.href}
              {...(wa.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              <WhatsAppIcon className="size-4" /> Or chat with us on WhatsApp
            </a>
            <p className="mt-8 text-xs text-white/60">
              Websites from ₹999 (one-time development). Domain & hosting quoted separately. T&amp;C apply.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
