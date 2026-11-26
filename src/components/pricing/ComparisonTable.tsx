import { Check, Minus } from "lucide-react";
import { comparisonRows, packages } from "@/data/packages";
import { cn, formatINR } from "@/lib/utils";

export function ComparisonTable() {
  return (
    <div className="relative overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
      <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
        <caption className="sr-only">Feature comparison of SiteBanao website packages</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="w-[34%] p-5 align-bottom text-sm font-semibold text-muted">
              Features
            </th>
            {packages.map((p) => (
              <th
                key={p.id}
                scope="col"
                className={cn("p-5 text-center align-bottom", p.recommended ? "bg-brand-25" : "")}
              >
                {p.recommended ? (
                  <span className="mb-2 inline-block rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    Recommended
                  </span>
                ) : null}
                <span className="block font-display text-base font-bold text-ink">{p.name}</span>
                <span className="block font-display text-2xl font-extrabold text-ink">{formatINR(p.price)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0">
              <th scope="row" className="p-4 pl-5 font-medium text-ink-soft">
                {row.label}
              </th>
              {packages.map((p) => {
                const v = row.values[p.id];
                return (
                  <td key={p.id} className={cn("p-4 text-center", p.recommended ? "bg-brand-25" : "")}>
                    {v === true ? (
                      <>
                        <Check className="mx-auto size-5 text-accent-600" strokeWidth={2.6} aria-hidden />
                        <span className="sr-only">Included</span>
                      </>
                    ) : v === false ? (
                      <>
                        <Minus className="mx-auto size-5 text-[#98a2b3]" aria-hidden />
                        <span className="sr-only">Not included</span>
                      </>
                    ) : (
                      <span className="text-ink">{v}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
