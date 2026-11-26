"use client";

import { useId, useMemo, useState } from "react";
import { Check, Info, Lightbulb, Minus, Plus } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { AnimatedINR } from "@/components/motion/AnimatedNumber";
import { ButtonLink } from "@/components/ui/Button";
import {
  calculatorDefaults,
  customFeatures,
  maintenanceOptions,
  type CustomFeatureId,
} from "@/data/addons";
import { getPackage, packages, type PackageId } from "@/data/packages";
import { whatsappLink } from "@/lib/whatsapp";
import { cn, formatINR } from "@/lib/utils";

const toAmount = (value: string) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : 0;
};

export function CostCalculator() {
  const uid = useId();
  const [packageId, setPackageId] = useState<PackageId>("starter");
  const [extraPages, setExtraPages] = useState(0);
  const [features, setFeatures] = useState<CustomFeatureId[]>([]);
  const [domainOn, setDomainOn] = useState(true);
  const [domainAmount, setDomainAmount] = useState(String(calculatorDefaults.domainEstimate));
  const [hostingOn, setHostingOn] = useState(true);
  const [hostingAmount, setHostingAmount] = useState(String(calculatorDefaults.hostingEstimate));
  const [maintenanceMonths, setMaintenanceMonths] = useState(0);

  const pkg = getPackage(packageId)!;

  const totals = useMemo(() => {
    const pagesCost = extraPages * calculatorDefaults.additionalPagePrice;
    const featuresCost = customFeatures
      .filter((f) => features.includes(f.id))
      .reduce((sum, f) => sum + f.estimate, 0);
    const development = pkg.price + pagesCost + featuresCost;
    const domain = domainOn ? toAmount(domainAmount) : 0;
    const hosting = hostingOn ? toAmount(hostingAmount) : 0;
    const maintenance = maintenanceMonths * calculatorDefaults.maintenancePerMonth;
    return {
      pagesCost,
      featuresCost,
      development,
      domain,
      hosting,
      thirdParty: domain + hosting,
      maintenance,
      total: development + domain + hosting + maintenance,
    };
  }, [pkg.price, extraPages, features, domainOn, domainAmount, hostingOn, hostingAmount, maintenanceMonths]);

  const selectedFeatureLabels = customFeatures.filter((f) => features.includes(f.id)).map((f) => f.label);

  const message = [
    "Hi SiteBanao! I used your website cost calculator:",
    `• Package: ${pkg.name} (${formatINR(pkg.price)})`,
    extraPages ? `• Additional pages: ${extraPages}` : null,
    selectedFeatureLabels.length ? `• Custom features: ${selectedFeatureLabels.join(", ")}` : null,
    `• Domain: ${domainOn ? `yes (est. ${formatINR(totals.domain)})` : "I have my own / not needed"}`,
    `• Hosting: ${hostingOn ? `yes (est. ${formatINR(totals.hosting)})` : "I have my own / not needed"}`,
    `• Maintenance: ${maintenanceMonths ? `${maintenanceMonths} months` : "not needed"}`,
    `• Estimated total: ${formatINR(totals.total)}`,
    "Please share an exact quotation.",
  ]
    .filter(Boolean)
    .join("\n");

  const wa = whatsappLink(message, `?package=${pkg.id}`);
  const toggleFeature = (id: CustomFeatureId) =>
    setFeatures((cur) => (cur.includes(id) ? cur.filter((f) => f !== id) : [...cur, id]));

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      {/* Controls */}
      <div className="min-w-0 space-y-6 lg:col-span-7">
        {/* Step 1 */}
        <fieldset className="rounded-2xl border border-line bg-white p-5 sm:p-7">
          <legend className="sr-only">Choose a package</legend>
          <StepTitle n={1} title="Choose your package" />
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {packages.map((p) => {
              const checked = p.id === packageId;
              return (
                <label
                  key={p.id}
                  className={cn(
                    "relative cursor-pointer rounded-xl border p-4 transition-all has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-600",
                    checked
                      ? "border-brand-600 bg-brand-25 ring-1 ring-brand-600"
                      : "border-line hover:border-brand-200 hover:bg-surface",
                  )}
                >
                  <input
                    type="radio"
                    name={`${uid}-package`}
                    value={p.id}
                    checked={checked}
                    onChange={() => setPackageId(p.id)}
                    className="sr-only"
                  />
                  <span className="flex items-center justify-between">
                    <span className="font-display font-bold text-ink">{p.name}</span>
                    <span
                      className={cn(
                        "grid size-5 place-items-center rounded-full border",
                        checked ? "border-brand-600 bg-brand-600 text-white" : "border-line bg-white",
                      )}
                    >
                      {checked ? <Check className="size-3" strokeWidth={3} /> : null}
                    </span>
                  </span>
                  <span className="mt-2 block font-display text-2xl font-extrabold text-ink">{formatINR(p.price)}</span>
                  <span className="mt-1 block text-xs text-muted">{p.pages}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Step 2 */}
        <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
          <StepTitle n={2} title="Add pages & features" />

          <div className="mt-5 flex flex-col gap-4 rounded-xl bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p id={`${uid}-pages`} className="font-medium text-ink">
                Additional pages
              </p>
              <p className="text-sm text-muted">
                {formatINR(calculatorDefaults.additionalPagePrice)} per page beyond your package
              </p>
            </div>
            <div className="flex items-center gap-2" role="group" aria-labelledby={`${uid}-pages`}>
              <StepperButton
                label="Remove a page"
                disabled={extraPages === 0}
                onClick={() => setExtraPages((n) => Math.max(0, n - 1))}
              >
                <Minus className="size-4" />
              </StepperButton>
              <output aria-live="polite" className="w-10 text-center font-display text-lg font-bold text-ink">
                {extraPages}
              </output>
              <StepperButton
                label="Add a page"
                disabled={extraPages >= calculatorDefaults.maxAdditionalPages}
                onClick={() => setExtraPages((n) => Math.min(calculatorDefaults.maxAdditionalPages, n + 1))}
              >
                <Plus className="size-4" />
              </StepperButton>
            </div>
          </div>

          {packageId === "starter" && extraPages >= 3 ? (
            <div className="mt-3 flex flex-col gap-3 rounded-xl border border-accent-100 bg-accent-50 p-4 text-sm text-accent-700 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2">
                <Lightbulb className="mt-0.5 size-4 shrink-0" />
                The Business package includes up to 5 pages plus a contact form for {formatINR(2999)}. It may be
                better value.
              </p>
              <button
                type="button"
                onClick={() => {
                  setPackageId("business");
                  setExtraPages(0);
                }}
                className="shrink-0 rounded-lg bg-white px-3 py-1.5 font-semibold text-accent-700 ring-1 ring-accent-100 hover:bg-accent-100"
              >
                Switch to Business
              </button>
            </div>
          ) : null}

          <fieldset className="mt-6">
            <legend className="font-medium text-ink">Custom features</legend>
            <p className="text-sm text-muted">Rough estimates only. Exact pricing depends on your requirement.</p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {customFeatures.map((f) => {
                const checked = features.includes(f.id);
                return (
                  <label
                    key={f.id}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-sm transition-colors",
                      checked ? "border-brand-600 bg-brand-25" : "border-line hover:bg-surface",
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleFeature(f.id)}
                      className="mt-0.5 size-4 shrink-0 accent-brand-600"
                    />
                    <span className="flex-1">
                      <span className="block font-medium text-ink">{f.label}</span>
                      <span className="text-muted">est. from {formatINR(f.estimate)}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Step 3 */}
        <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
          <StepTitle n={3} title="Domain, hosting & maintenance" />
          <p className="mt-2 text-sm text-muted">
            Domain and hosting are bought from a provider of your choice, in your name. Edit the estimates to match
            the plan you prefer.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <EstimateField
              id={`${uid}-domain`}
              label="Domain registration"
              hint="Per year · varies by extension & registrar"
              enabled={domainOn}
              onToggle={setDomainOn}
              value={domainAmount}
              onChange={setDomainAmount}
            />
            <EstimateField
              id={`${uid}-hosting`}
              label="Hosting"
              hint="Per year · varies by provider & plan"
              enabled={hostingOn}
              onToggle={setHostingOn}
              value={hostingAmount}
              onChange={setHostingAmount}
            />
          </div>

          <div className="mt-5">
            <label htmlFor={`${uid}-maintenance`} className="font-medium text-ink">
              Maintenance
            </label>
            <p className="text-sm text-muted">
              Optional · {formatINR(calculatorDefaults.maintenancePerMonth)} per month (indicative)
            </p>
            <select
              id={`${uid}-maintenance`}
              value={maintenanceMonths}
              onChange={(e) => setMaintenanceMonths(Number(e.target.value))}
              className="mt-2 h-11 w-full rounded-xl border border-line bg-white px-3 text-[15px] text-ink focus:border-brand-600 focus:ring-2 focus:ring-brand-100 focus:outline-none sm:w-64"
            >
              {maintenanceOptions.map((o) => (
                <option key={o.months} value={o.months}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Summary */}
      <aside className="min-w-0 lg:col-span-5" aria-label="Estimated cost summary">
        <div className="sticky top-24 overflow-hidden rounded-3xl bg-ink text-white shadow-lift">
          <div className="relative p-6 sm:p-8">
            <div aria-hidden className="absolute -top-20 -right-20 size-60 rounded-full bg-brand-600/40 blur-3xl" />
            <p className="relative text-sm font-medium text-white/60">Estimated total</p>
            <p className="relative mt-1 font-display text-5xl font-extrabold tracking-tight tabular-nums">
              <AnimatedINR value={totals.total} />
              <span className="sr-only" aria-live="polite">
                {formatINR(totals.total)}
              </span>
            </p>
            <p className="relative mt-2 text-xs text-white/55">
              Development + first-year domain & hosting + selected maintenance
            </p>

            <dl className="relative mt-7 space-y-3 text-sm">
              <Row label={`${pkg.name} package`} value={formatINR(pkg.price)} />
              {extraPages ? (
                <Row label={`${extraPages} additional page${extraPages > 1 ? "s" : ""}`} value={formatINR(totals.pagesCost)} />
              ) : null}
              {totals.featuresCost ? <Row label="Custom features (est.)" value={formatINR(totals.featuresCost)} /> : null}
              <Row label="Development (one-time)" value={formatINR(totals.development)} strong />
              <div className="border-t border-white/10 pt-3" />
              <Row label="Domain (est., paid to registrar)" value={domainOn ? formatINR(totals.domain) : "-"} />
              <Row label="Hosting (est., paid to provider)" value={hostingOn ? formatINR(totals.hosting) : "-"} />
              <Row
                label={`Maintenance${maintenanceMonths ? ` (${maintenanceMonths} mo)` : ""}`}
                value={maintenanceMonths ? formatINR(totals.maintenance) : "-"}
              />
            </dl>

            <div className="relative mt-8 grid gap-2.5">
              <ButtonLink href={wa.href} external={wa.external} variant="whatsapp" size="lg" className="w-full">
                <WhatsAppIcon className="size-5" /> Get exact quote on WhatsApp
              </ButtonLink>
              <ButtonLink
                href={`/contact?package=${pkg.id}`}
                variant="onDark"
                className="w-full"
              >
                Send an enquiry instead
              </ButtonLink>
            </div>
          </div>
          <p className="flex gap-2 border-t border-white/10 bg-white/[0.03] px-6 py-4 text-xs leading-relaxed text-white/60 sm:px-8">
            <Info className="mt-0.5 size-3.5 shrink-0" />
            This is an estimate, not a quotation. Domain and hosting prices depend on the provider and plan you
            select and renew yearly. Custom features are confirmed in a written quote. T&amp;C apply.
          </p>
        </div>
      </aside>
    </div>
  );
}

function StepTitle({ n, title }: { n: number; title: string }) {
  return (
    <p className="flex items-center gap-3 font-display text-lg font-bold text-ink">
      <span className="grid size-7 place-items-center rounded-full bg-brand-600 text-sm text-white">{n}</span>
      {title}
    </p>
  );
}

function StepperButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid size-10 place-items-center rounded-xl bg-white text-ink ring-1 ring-line transition hover:bg-brand-50 hover:text-brand-700 disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function EstimateField({
  id,
  label,
  hint,
  enabled,
  onToggle,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint: string;
  enabled: boolean;
  onToggle: (v: boolean) => void;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={cn("rounded-xl border p-4 transition-colors", enabled ? "border-brand-200 bg-brand-25" : "border-line")}>
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onToggle(e.target.checked)}
          className="size-4 accent-brand-600"
        />
        <span className="font-medium text-ink">{label}</span>
      </label>
      <p className="mt-1 pl-7 text-xs text-muted">{hint}</p>
      <div className="mt-3 pl-7">
        <label htmlFor={id} className="sr-only">
          {label} estimate in rupees
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted">₹</span>
          <input
            id={id}
            type="number"
            inputMode="numeric"
            min={0}
            step={100}
            disabled={!enabled}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-10 w-full rounded-lg border border-line bg-white pr-3 pl-7 text-[15px] text-ink focus:border-brand-600 focus:ring-2 focus:ring-brand-100 focus:outline-none disabled:bg-surface disabled:text-muted"
          />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className={strong ? "font-semibold text-white" : "text-white/65"}>{label}</dt>
      <dd className={cn("tabular-nums", strong ? "font-semibold text-white" : "text-white/90")}>{value}</dd>
    </div>
  );
}
