import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/Section";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/60 via-brand-100/40 to-transparent blur-3xl" />
      </div>
      <Container className="py-16 text-center sm:py-20 lg:py-24">
        <Eyebrow className="animate-fade-up">{eyebrow}</Eyebrow>
        <h1 className="animate-fade-up mx-auto mt-5 max-w-4xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-ink [animation-delay:60ms] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted [animation-delay:120ms] sm:text-lg">
          {description}
        </p>
        {children ? <div className="animate-fade-up mt-8 [animation-delay:180ms]">{children}</div> : null}
      </Container>
    </section>
  );
}
