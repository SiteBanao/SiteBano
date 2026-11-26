import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Section";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: ReactNode;
  sections: Array<{ heading: string; body: ReactNode }>;
}) {
  return (
    <article className="bg-white">
      <div className="border-b border-line bg-surface">
        <Container className="py-14 sm:py-16">
          <p className="text-sm font-semibold text-brand-700">Legal</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
          <div className="mt-4 max-w-3xl text-muted">{intro}</div>
        </Container>
      </div>
      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <Info className="mt-0.5 size-4 shrink-0" />
            This is a starter template written in plain language. Please have it reviewed by a qualified legal
            professional and update it with your registered business details before launch.
          </p>
          <ol className="space-y-10">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <h2 className="font-display text-xl font-bold text-ink">
                  {i + 1}. {s.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-relaxed text-ink-soft [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
                  {s.body}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </article>
  );
}
