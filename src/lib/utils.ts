/** Tiny className joiner (avoids an extra dependency). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Formats a number as Indian Rupees, e.g. 2999 → "₹2,999" */
export function formatINR(amount: number) {
  return inr.format(Math.max(0, Math.round(amount)));
}
