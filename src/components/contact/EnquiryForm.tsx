"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useId, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Copy, Info, Loader2, Mail, Pencil, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { Button, ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getPackage, packages } from "@/data/packages";
import { getDemo } from "@/data/portfolio";
import { services } from "@/data/services";
import { isWhatsAppConfigured, whatsappLink } from "@/lib/whatsapp";
import { cn, formatINR } from "@/lib/utils";

export const businessCategories = [
  "Restaurant / Café",
  "Clinic / Healthcare",
  "Real Estate",
  "Salon / Spa",
  "Coaching / Education",
  "Freelancer / Portfolio",
  "Small Business / Local Shop",
  "Startup / Company",
  "Other",
] as const;

const contactMethods = ["WhatsApp", "Phone call", "Email"] as const;

interface Values {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  category: string;
  pkg: string;
  description: string;
  contactMethod: (typeof contactMethods)[number];
  consent: boolean;
}

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "submitting" | "sent" | "demo" | "error";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** false during SSR / before hydration, true once React is interactive. */
const noopSubscribe = () => () => {};
const useHydrated = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) e.phone = "Please enter a valid phone number (10 digits, with country code if outside India).";
  if (!v.category) e.category = "Please choose your business category.";
  if (!v.pkg) e.pkg = "Please choose a package (or 'Not sure').";
  if (v.description.trim().length < 20) e.description = "Please describe your project in at least 20 characters.";
  if (v.description.length > 2000) e.description = "Please keep the description under 2,000 characters.";
  if (!v.consent) e.consent = "Please agree so we can contact you about your enquiry.";
  return e;
}

function packageLabel(id: string) {
  const p = getPackage(id);
  return p ? `${p.name} (${formatINR(p.price)})` : "Not sure / Custom quote";
}

function summary(v: Values) {
  return [
    "New website enquiry: SiteBanao",
    `Name: ${v.name.trim()}`,
    v.businessName.trim() ? `Business: ${v.businessName.trim()}` : null,
    `Email: ${v.email.trim()}`,
    `Phone: ${v.phone.trim()}`,
    `Category: ${v.category}`,
    `Package: ${packageLabel(v.pkg)}`,
    `Preferred contact: ${v.contactMethod}`,
    `Project: ${v.description.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
}

/** Reads ?package=, ?service= and ?design= to pre-fill the form. */
export function EnquiryFormFromParams() {
  const params = useSearchParams();
  const pkg = params.get("package") ?? "";
  const service = params.get("service") ?? "";
  const design = params.get("design") ?? "";
  return <EnquiryForm key={`${pkg}|${service}|${design}`} prefill={{ pkg, service, design }} />;
}

export function EnquiryForm({ prefill }: { prefill?: { pkg?: string; service?: string; design?: string } }) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);

  const initialDescription = (() => {
    const demo = prefill?.design ? getDemo(prefill.design) : undefined;
    const service = prefill?.service ? services.find((s) => s.id === prefill.service) : undefined;
    if (demo) return `I'd like a website similar to the "${demo.name}" ${demo.industry.toLowerCase()} demo. `;
    if (service) return `I'm interested in your ${service.title} service. `;
    return "";
  })();

  const [values, setValues] = useState<Values>({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    category: "",
    pkg: getPackage(prefill?.pkg) ? prefill!.pkg!.toLowerCase() : "",
    description: initialDescription,
    contactMethod: "WhatsApp",
    consent: false,
  });
  // Errors are derived: hidden until the first submit attempt, then re-validated live.
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const errors: Errors = attempted ? validate(values) : {};
  // Prevents a native (non-JS) submit before hydration, which would put personal data in the URL.
  const hydrated = useHydrated();

  const endpoint = siteConfig.form.endpoint;

  const set = <K extends keyof Values>(key: K, value: Values[K]) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const found = validate(values);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (honeypot) return; // silently drop bots

    if (!endpoint) {
      setStatus("demo");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...(siteConfig.form.accessKey ? { access_key: siteConfig.form.accessKey } : {}),
          subject: `New website enquiry from ${values.name.trim()}`,
          name: values.name.trim(),
          business_name: values.businessName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          business_category: values.category,
          package: packageLabel(values.pkg),
          preferred_contact: values.contactMethod,
          message: values.description.trim(),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const wa = whatsappLink(summary(values));
  const mailto = siteConfig.contact.email
    ? `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
        `Website enquiry: ${values.name.trim() || "New enquiry"}`,
      )}&body=${encodeURIComponent(summary(values))}`
    : null;

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary(values));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  /* ---------- Result panels ---------- */

  if (status === "sent") {
    return (
      <ResultPanel
        tone="success"
        icon={<CheckCircle2 className="size-7" />}
        title="Thank you, your enquiry has been sent!"
        text={`We've received your details and will get back to you by ${
          { WhatsApp: "WhatsApp", "Phone call": "phone", Email: "email" }[values.contactMethod]
        } as soon as possible.`}
      >
        <ButtonLink href="/portfolio" variant="secondary">
          Browse designs meanwhile
        </ButtonLink>
      </ResultPanel>
    );
  }

  if (status === "demo") {
    return (
      <ResultPanel
        tone="info"
        icon={<Info className="size-7" />}
        title="Your enquiry is ready to send"
        text="Online form submission isn't connected yet, so nothing has been sent automatically. Please send your enquiry using one of the options below. Your details are already filled in."
      >
        <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          {isWhatsAppConfigured ? (
            <ButtonLink href={wa.href} external variant="whatsapp">
              <WhatsAppIcon className="size-5" /> Send via WhatsApp
            </ButtonLink>
          ) : null}
          {mailto ? (
            <ButtonLink href={mailto} external variant={isWhatsAppConfigured ? "secondary" : "primary"}>
              <Mail className="size-4" /> Send via email
            </ButtonLink>
          ) : null}
          <Button variant="secondary" onClick={copySummary}>
            <Copy className="size-4" /> {copied ? "Copied!" : "Copy details"}
          </Button>
          <Button variant="ghost" onClick={() => setStatus("idle")}>
            <Pencil className="size-4" /> Edit details
          </Button>
        </div>
        {!isWhatsAppConfigured && !mailto ? (
          <p className="mt-4 text-sm text-muted">
            Contact channels are being set up. Copy your details and send them to us once our contact information is
            published.
          </p>
        ) : null}
      </ResultPanel>
    );
  }

  /* ---------- Form ---------- */

  const field = (name: keyof Values) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-error` : undefined,
  });

  return (
    <form
      ref={formRef}
      method="post"
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-label="Website enquiry form"
    >
      {!endpoint ? (
        <p className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <span>
            <strong className="font-semibold">Demo mode:</strong> this form isn&apos;t connected to a server yet. When you
            submit, you&apos;ll be able to send your enquiry via WhatsApp or email.
          </span>
        </p>
      ) : null}

      {status === "error" ? (
        <p role="alert" className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>
            Sorry, we couldn&apos;t send your enquiry right now. Please try again
            {isWhatsAppConfigured ? (
              <>
                , or{" "}
                <a href={wa.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  send it on WhatsApp
                </a>
              </>
            ) : null}
            .
          </span>
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required error={errors.name} htmlFor={`${uid}-name`} errorId={`${uid}-name-error`}>
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputCls(errors.name)}
            placeholder="Full name"
          />
        </Field>
        <Field label="Business name" htmlFor={`${uid}-businessName`} hint="Optional">
          <input
            {...field("businessName")}
            type="text"
            autoComplete="organization"
            value={values.businessName}
            onChange={(e) => set("businessName", e.target.value)}
            className={inputCls()}
            placeholder="Your business or brand"
          />
        </Field>
        <Field label="Email" required error={errors.email} htmlFor={`${uid}-email`} errorId={`${uid}-email-error`}>
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputCls(errors.email)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone number" required error={errors.phone} htmlFor={`${uid}-phone`} errorId={`${uid}-phone-error`}>
          <input
            {...field("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputCls(errors.phone)}
            placeholder="10-digit mobile number"
          />
        </Field>
        <Field label="Business category" required error={errors.category} htmlFor={`${uid}-category`} errorId={`${uid}-category-error`}>
          <select
            {...field("category")}
            value={values.category}
            onChange={(e) => set("category", e.target.value)}
            className={inputCls(errors.category)}
          >
            <option value="" disabled>
              Select a category
            </option>
            {businessCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Required package" required error={errors.pkg} htmlFor={`${uid}-pkg`} errorId={`${uid}-pkg-error`}>
          <select
            {...field("pkg")}
            value={values.pkg}
            onChange={(e) => set("pkg", e.target.value)}
            className={inputCls(errors.pkg)}
          >
            <option value="" disabled>
              Select a package
            </option>
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}: {formatINR(p.price)}
              </option>
            ))}
            <option value="custom">Not sure / Custom quote</option>
          </select>
        </Field>
      </div>

      <Field
        label="Project description"
        required
        error={errors.description}
        htmlFor={`${uid}-description`}
        errorId={`${uid}-description-error`}
        hint={`${values.description.length}/2000`}
      >
        <textarea
          {...field("description")}
          rows={5}
          maxLength={2000}
          value={values.description}
          onChange={(e) => set("description", e.target.value)}
          className={cn(inputCls(errors.description), "h-auto py-3 leading-relaxed")}
          placeholder="Tell us about your business, the pages you need, and any websites you like."
        />
      </Field>

      <fieldset>
        <legend className="text-sm font-medium text-ink">
          Preferred contact method <span className="text-red-600">*</span>
        </legend>
        <div className="mt-2 grid grid-cols-3 gap-2.5">
          {contactMethods.map((m) => (
            <label
              key={m}
              className={cn(
                "flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-600",
                values.contactMethod === m
                  ? "border-brand-600 bg-brand-25 text-brand-700 ring-1 ring-brand-600"
                  : "border-line text-ink-soft hover:bg-surface",
              )}
            >
              <input
                type="radio"
                name="contactMethod"
                value={m}
                checked={values.contactMethod === m}
                onChange={() => set("contactMethod", m)}
                className="sr-only"
              />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Honeypot (hidden from humans) */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
          <input
            {...field("consent")}
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 size-4 shrink-0 accent-brand-600"
          />
          <span>
            I agree to be contacted about my enquiry and accept the{" "}
            <Link href="/privacy-policy" className="font-medium text-brand-700 underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id={`${uid}-consent-error`} className="mt-1.5 text-sm text-red-600">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={!hydrated || status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> {endpoint ? "Send enquiry" : "Continue"}
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted">
        Package prices are one-time development charges. Domain & hosting are quoted separately.
      </p>
    </form>
  );
}

function inputCls(error?: string) {
  return cn(
    "h-12 w-full rounded-xl border bg-white px-3.5 text-[15px] text-ink placeholder:text-[#98a2b3] transition-colors focus:outline-none focus:ring-4",
    error
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-line hover:border-[#d0d5dd] focus:border-brand-600 focus:ring-brand-100",
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  errorId,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
          {label} {required ? <span className="text-red-600">*</span> : null}
        </label>
        {hint ? <span className="text-xs text-muted">{hint}</span> : null}
      </div>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ResultPanel({
  tone,
  icon,
  title,
  text,
  children,
}: {
  tone: "success" | "info";
  icon: ReactNode;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <div role="status" className="py-4 text-center sm:py-8">
      <span
        className={cn(
          "mx-auto grid size-16 place-items-center rounded-2xl",
          tone === "success" ? "bg-accent-50 text-accent-600" : "bg-brand-50 text-brand-600",
        )}
      >
        {icon}
      </span>
      <h3 className="mt-6 font-display text-2xl font-bold text-ink">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-muted">{text}</p>
      <div className="mt-8 flex justify-center">{children}</div>
    </div>
  );
}
