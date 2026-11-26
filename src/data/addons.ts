/**
 * Additional services & cost-calculator defaults.
 * All figures are indicative starting prices. Third-party costs (domain, hosting)
 * are estimates only: the final price depends on the provider and the plan chosen.
 * Update these numbers to match your own pricing.
 */

export const addonServices = [
  {
    name: "Additional page",
    price: "₹499",
    unit: "per page",
    note: "Beyond the pages included in your package.",
  },
  {
    name: "Website maintenance",
    price: "From ₹499",
    unit: "per month",
    note: "Small content updates, backups and health checks.",
  },
  {
    name: "Extra revision round",
    price: "From ₹299",
    unit: "per round",
    note: "After the included revisions are used.",
  },
  {
    name: "Content writing",
    price: "From ₹299",
    unit: "per page",
    note: "Clear, SEO-friendly copy for your pages.",
  },
  {
    name: "Domain & hosting setup help",
    price: "From ₹499",
    unit: "one-time",
    note: "We guide you to buy both in your own name and connect them.",
  },
  {
    name: "Custom features",
    price: "Quoted",
    unit: "on request",
    note: "Bookings, payments, blogs, logins, e-commerce and more.",
  },
] as const;

export const calculatorDefaults = {
  /** Editable estimate. Typical .com / .in registration for year one. */
  domainEstimate: 899,
  /** Editable estimate. Typical entry-level shared hosting for one year. */
  hostingEstimate: 2499,
  /** Per month. */
  maintenancePerMonth: 499,
  /** Per extra page. */
  additionalPagePrice: 499,
  maxAdditionalPages: 20,
};

export const maintenanceOptions = [
  { months: 0, label: "No maintenance" },
  { months: 3, label: "3 months" },
  { months: 6, label: "6 months" },
  { months: 12, label: "12 months" },
] as const;

/** Rough, indicative estimates. Real quotes depend on the exact requirement. */
export const customFeatures = [
  { id: "booking", label: "Appointment / table booking", estimate: 1499 },
  { id: "payments", label: "Online payment integration", estimate: 1999 },
  { id: "blog", label: "Blog / news section", estimate: 999 },
  { id: "multilingual", label: "Multi-language (e.g. Hindi + English)", estimate: 1499 },
  { id: "catalogue", label: "Product catalogue (no checkout)", estimate: 1999 },
] as const;

export type CustomFeatureId = (typeof customFeatures)[number]["id"];
