import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * SiteBanao logo mark: a browser window with a code symbol, an orbiting swoosh
 * and a click cursor with sparks. Redrawn as SVG so it stays sharp at any size.
 *
 * `animated` replays the brand intro from the logo animation (swoosh draws →
 * window builds → code appears → cursor clicks → sparks), using CSS keyframes
 * defined in globals.css (`.sb-animated`). Reduced-motion users see the final logo.
 */
export function LogoMark({
  className,
  title,
  animated = false,
}: {
  className?: string;
  title?: string;
  animated?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const windowGrad = `sb-window-${uid}`;
  const swooshGrad = `sb-swoosh-${uid}`;

  return (
    <svg
      viewBox="0 0 60 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(animated && "sb-animated", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      overflow="visible"
    >
      <defs>
        <linearGradient id={windowGrad} x1="8" y1="4" x2="50" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C1785" />
          <stop offset="0.55" stopColor="#4F2BD8" />
          <stop offset="1" stopColor="#635BFF" />
        </linearGradient>
        <linearGradient id={swooshGrad} x1="4" y1="44" x2="56" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22B8F0" />
          <stop offset="0.45" stopColor="#635BFF" />
          <stop offset="1" stopColor="#4F2BD8" />
        </linearGradient>
      </defs>

      {/* swoosh */}
      <path
        className="sb-swoosh"
        pathLength={100}
        d="M10.5 27.5C1.5 37 9 45.5 26 44.5C39 43.7 51.5 38 55.6 29.6C58 24.6 56.6 20.2 52.6 18.4"
        stroke={`url(#${swooshGrad})`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* browser window */}
      <g className="sb-window">
        <rect x="8" y="4" width="42" height="36" rx="7" fill={`url(#${windowGrad})`} />
        <rect x="12" y="15" width="34" height="21" rx="3" fill="#fff" />
      </g>
      <circle className="sb-dot" cx="14.2" cy="10" r="1.9" fill="#FF5F57" />
      <circle className="sb-dot" cx="19.6" cy="10" r="1.9" fill="#FEBC2E" />
      <circle className="sb-dot" cx="25" cy="10" r="1.9" fill="#28C840" />

      {/* </> */}
      <path
        className="sb-code"
        pathLength={100}
        d="M23.4 21.2 19 25.5l4.4 4.3M34.6 21.2l4.4 4.3-4.4 4.3M31.2 20.2l-4.4 10.6"
        stroke="#4F2BD8"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* click sparks */}
      <g className="sb-sparks" stroke="#22B8F0" strokeWidth="1.5" strokeLinecap="round">
        <path d="M44.6 28.6 46.6 26.6" />
        <path d="M45.6 31.4 48.4 31.4" />
        <path d="M42.4 27.2 42.6 24.6" />
      </g>

      {/* cursor */}
      <path
        className="sb-cursor"
        d="M40.2 30.6 40.6 48l4.3-4.4 3.6 7.1 3.3-1.6-3.6-7 6.1-.5-14.1-11Z"
        fill="#4F2BD8"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  showTagline = false,
  size = "md",
  animated = false,
}: {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}) {
  const mark = { sm: "h-7 w-8", md: "h-8 w-9", lg: "h-11 w-12" }[size];
  const word = { sm: "text-lg", md: "text-[1.35rem]", lg: "text-3xl" }[size];

  return (
    <span className={cn("inline-flex items-center gap-2", animated && "sb-animated", className)}>
      <LogoMark className={cn("shrink-0", mark)} />
      <span className="flex flex-col leading-none">
        <span className={cn("sb-word font-display font-extrabold tracking-tight", word)}>
          <span className="text-ink">Site</span>
          <span className="text-gradient">Banao</span>
        </span>
        {showTagline ? (
          <span className="sb-tagline mt-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft">
            Your Website.
            <span className="rounded-md bg-brand-600 px-1.5 py-0.5 text-white">Just ₹999.</span>
          </span>
        ) : null}
      </span>
    </span>
  );
}
