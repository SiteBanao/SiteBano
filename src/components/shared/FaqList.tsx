import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";

/**
 * Accessible accordion built on native <details>/<summary>.
 * Works without JavaScript and is fully keyboard accessible.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {items.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left font-display text-base font-semibold text-ink transition-colors hover:bg-surface sm:px-7 sm:text-[17px]">
            {faq.question}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface text-muted ring-1 ring-line transition-all duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white group-open:ring-brand-600">
              <Plus className="size-4" />
            </span>
          </summary>
          <p className="px-5 pb-6 text-[15px] leading-relaxed text-muted sm:px-7">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqJsonLd({ items }: { items: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
