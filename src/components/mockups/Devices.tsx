import type { CSSProperties, ReactNode } from "react";
import { Lock, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Realistic, purely-CSS device frames (MacBook Pro, iPad, iPhone, browser window).
 *
 * Every measurement is in `cqw` (percent of the device's own width), so the
 * proportions stay true at any size. `className` goes on an outer wrapper, so
 * callers can position/size the device freely (e.g. `absolute w-[20%]`).
 */

const aluminium =
  "linear-gradient(180deg, #f4f5f7 0%, #dcdfe3 30%, #c3c7cd 62%, #9a9fa8 100%)";
const titanium =
  "linear-gradient(150deg, #d4d6d9 0%, #8a8f96 22%, #b9bcc1 45%, #6c7178 70%, #c2c5c9 100%)";
const ipadEdge =
  "linear-gradient(145deg, #eceef1 0%, #b9bdc4 35%, #dfe1e5 60%, #9ea3ab 100%)";

/* ------------------------------------------------------------------ */
/* Small status-bar glyphs                                             */
/* ------------------------------------------------------------------ */

function Signal({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 18 12" fill="currentColor" style={style}>
      <rect x="0" y="8" width="3" height="4" rx="0.8" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
      <rect x="10" y="3" width="3" height="9" rx="0.8" />
      <rect x="15" y="0" width="3" height="12" rx="0.8" />
    </svg>
  );
}

function Wifi({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 16 12" fill="currentColor" style={style}>
      <path d="M8 2.2c2.4 0 4.6.9 6.3 2.5l1.2-1.3A10.6 10.6 0 0 0 8 .4 10.6 10.6 0 0 0 .5 3.4l1.2 1.3A8.8 8.8 0 0 1 8 2.2Zm0 3.6c1.4 0 2.7.5 3.7 1.4l1.2-1.3A7.2 7.2 0 0 0 8 4a7.2 7.2 0 0 0-4.9 1.9l1.2 1.3c1-.9 2.3-1.4 3.7-1.4Zm0 3.5c-.6 0-1.2.2-1.6.6L8 11.6l1.6-1.7A2.3 2.3 0 0 0 8 9.3Z" />
    </svg>
  );
}

function Battery({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 27 13" fill="none" style={style}>
      <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="currentColor" opacity="0.4" />
      <rect x="2" y="2" width="20" height="9" rx="2.2" fill="currentColor" />
      <path d="M25 4.5v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2Z" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* MacBook Pro                                                         */
/* ------------------------------------------------------------------ */

export function Laptop({
  children,
  className,
  url = "yourbusiness.in",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div aria-hidden className={cn("relative isolate @container", className)}>
      {/* Lid */}
      <div
        className="relative mx-auto w-[86cqw] rounded-t-[2.6cqw] bg-[#0d0d10] p-[1.05cqw] pb-[1.3cqw]"
        style={{
          boxShadow:
            "0 0 0 0.18cqw #2c2d31, 0 0 0 0.42cqw #b9bdc4, 0 0 0 0.5cqw #8d929a, 0 3cqw 6cqw -2cqw rgba(16,24,40,.35)",
        }}
      >
        {/* Notch with camera */}
        <div className="absolute top-[1cqw] left-1/2 z-30 flex h-[1.9cqw] w-[9.5cqw] -translate-x-1/2 items-center justify-center rounded-b-[0.9cqw] bg-[#0d0d10]">
          <span className="size-[0.55cqw] rounded-full bg-[#1c2333] ring-[0.12cqw] ring-[#2a3142]" />
        </div>

        <div className="relative flex aspect-[16/10.35] flex-col overflow-hidden rounded-t-[1.6cqw] rounded-b-[0.25cqw] bg-white">
          {/* macOS menu bar */}
          <div className="relative z-20 flex h-[1.95cqw] shrink-0 items-center justify-between bg-white/85 px-[1.4cqw] text-[0.92cqw] font-medium text-[#1d1d1f] backdrop-blur">
            <div className="flex items-center gap-[1.3cqw]">
              <span className="font-bold">Safari</span>
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>History</span>
              <span>Bookmarks</span>
            </div>
            <div className="flex items-center gap-[0.9cqw]">
              <Wifi style={{ width: "1.2cqw" }} />
              <Battery style={{ width: "1.9cqw" }} />
              <span>Mon 9:41</span>
            </div>
          </div>

          {/* Safari toolbar */}
          <div className="flex h-[3.1cqw] shrink-0 items-center gap-[1cqw] border-b border-black/[0.08] bg-[#f5f5f7] px-[1.3cqw]">
            <div className="flex gap-[0.55cqw]">
              <span className="size-[0.95cqw] rounded-full bg-[#ff5f57]" />
              <span className="size-[0.95cqw] rounded-full bg-[#febc2e]" />
              <span className="size-[0.95cqw] rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-[0.8cqw] flex gap-[0.9cqw] text-[1.3cqw] leading-none text-[#86868b]">
              <span>‹</span>
              <span className="opacity-50">›</span>
            </div>
            <div className="mx-auto flex h-[1.95cqw] w-[34cqw] items-center justify-center gap-[0.5cqw] rounded-[0.55cqw] bg-[#e8e8ed] text-[1cqw] text-[#3a3a3c]">
              <Lock style={{ width: "0.85cqw", height: "0.85cqw" }} strokeWidth={2.5} />
              {url}
              <RotateCw className="ml-auto mr-[0.7cqw] text-[#86868b]" style={{ width: "0.85cqw", height: "0.85cqw" }} />
            </div>
            <div className="flex gap-[0.9cqw]">
              <span className="block h-[1.2cqw] w-[1cqw] rounded-[0.2cqw] border-[0.12cqw] border-[#86868b]" />
              <span className="block size-[1.1cqw] rounded-[0.2cqw] border-[0.12cqw] border-[#86868b]" />
            </div>
          </div>

          {/* Page */}
          <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </div>

      {/* Hinge */}
      <div className="mx-auto h-[0.55cqw] w-[86cqw] bg-gradient-to-b from-[#1a1b1f] to-[#47494f]" />

      {/* Base */}
      <div
        className="relative h-[1.9cqw] w-full rounded-t-[0.35cqw] rounded-b-[2.2cqw]"
        style={{ background: aluminium, boxShadow: "inset 0 0.12cqw 0 rgba(255,255,255,.9)" }}
      >
        <div className="absolute top-0 left-1/2 h-[0.75cqw] w-[13cqw] -translate-x-1/2 rounded-b-[0.9cqw] bg-gradient-to-b from-[#a7abb3] to-[#cdd0d5]" />
      </div>

      {/* Ground shadow */}
      <div className="absolute right-[5cqw] -bottom-[1.8cqw] left-[5cqw] -z-10 h-[2.6cqw] rounded-[50%] bg-[#101828]/30 blur-[1.4cqw]" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* iPad (portrait)                                                     */
/* ------------------------------------------------------------------ */

export function Tablet({
  children,
  className,
  url = "yourbusiness.in",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div aria-hidden className={cn("relative @container", className)}>
      {/* Hardware buttons */}
      <span className="absolute -top-[0.55cqw] right-[14cqw] h-[0.8cqw] w-[11cqw] rounded-t-[0.5cqw]" style={{ background: ipadEdge }} />
      <span className="absolute top-[12cqw] -right-[0.55cqw] h-[9cqw] w-[0.8cqw] rounded-r-[0.5cqw]" style={{ background: ipadEdge }} />
      <span className="absolute top-[23cqw] -right-[0.55cqw] h-[9cqw] w-[0.8cqw] rounded-r-[0.5cqw]" style={{ background: ipadEdge }} />

      {/* Aluminium band */}
      <div
        className="rounded-[7.2cqw] p-[0.95cqw]"
        style={{ background: ipadEdge, boxShadow: "0 4cqw 9cqw -3cqw rgba(16,24,40,.45)" }}
      >
        {/* Bezel */}
        <div className="relative rounded-[6.3cqw] bg-[#0b0b0d] p-[4.2cqw]">
          <span className="absolute top-[1.65cqw] left-1/2 size-[1.05cqw] -translate-x-1/2 rounded-full bg-[#1c2333] ring-[0.2cqw] ring-[#262d3d]" />

          {/* Screen */}
          <div className="relative flex aspect-[1640/2360] flex-col overflow-hidden rounded-[2.8cqw] bg-white">
            {/* Status bar */}
            <div className="flex h-[5cqw] shrink-0 items-center justify-between px-[3.6cqw] text-[2.2cqw] font-semibold text-[#1d1d1f]">
              <span>
                9:41 <span className="font-medium">Mon 2 Dec</span>
              </span>
              <span className="flex items-center gap-[1cqw]">
                <Wifi style={{ width: "2.6cqw" }} />
                <span className="font-medium">100%</span>
                <Battery style={{ width: "4.4cqw" }} />
              </span>
            </div>
            {/* Safari compact tab bar */}
            <div className="flex h-[6.2cqw] shrink-0 items-center justify-center border-b border-black/[0.06] bg-[#f6f6f8] px-[3cqw]">
              <div className="flex h-[4.3cqw] w-[56cqw] items-center justify-center gap-[0.9cqw] rounded-[1.4cqw] bg-[#e9e9ee] text-[2.2cqw] text-[#3a3a3c]">
                <Lock style={{ width: "1.8cqw", height: "1.8cqw" }} strokeWidth={2.5} />
                {url}
              </div>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
            {/* Home indicator */}
            <span className="absolute bottom-[1.4cqw] left-1/2 z-20 h-[0.75cqw] w-[24cqw] -translate-x-1/2 rounded-full bg-black/85" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* iPhone (Pro, titanium)                                              */
/* ------------------------------------------------------------------ */

export function Phone({
  children,
  className,
  url = "yourbusiness.in",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div aria-hidden className={cn("relative @container", className)}>
      {/* Side buttons: action, volume up/down (left) and side button (right) */}
      <span className="absolute top-[38cqw] -left-[0.9cqw] h-[11cqw] w-[1.3cqw] rounded-l-[0.6cqw]" style={{ background: titanium }} />
      <span className="absolute top-[56cqw] -left-[0.9cqw] h-[21cqw] w-[1.3cqw] rounded-l-[0.6cqw]" style={{ background: titanium }} />
      <span className="absolute top-[81cqw] -left-[0.9cqw] h-[21cqw] w-[1.3cqw] rounded-l-[0.6cqw]" style={{ background: titanium }} />
      <span className="absolute top-[62cqw] -right-[0.9cqw] h-[33cqw] w-[1.3cqw] rounded-r-[0.6cqw]" style={{ background: titanium }} />

      {/* Titanium frame */}
      <div
        className="rounded-[17.5cqw] p-[1.35cqw]"
        style={{ background: titanium, boxShadow: "0 6cqw 14cqw -4cqw rgba(16,24,40,.5)" }}
      >
        {/* Black bezel */}
        <div className="rounded-[16.2cqw] bg-black p-[3.3cqw]">
          {/* Screen */}
          <div className="relative aspect-[1179/2556] overflow-hidden rounded-[13cqw] bg-white">
            {/* Dynamic Island */}
            <span className="absolute top-[2.6cqw] left-1/2 z-30 h-[8.6cqw] w-[29cqw] -translate-x-1/2 rounded-full bg-black" />
            {/* Status bar */}
            <div className="absolute inset-x-0 top-0 z-20 flex h-[13.5cqw] items-center justify-between px-[8.5cqw] pt-[0.6cqw] text-[3.9cqw] font-semibold text-[#1d1d1f]">
              <span>9:41</span>
              <span className="flex items-center gap-[1.2cqw]">
                <Signal style={{ width: "4.4cqw" }} />
                <Wifi style={{ width: "4.2cqw" }} />
                <Battery style={{ width: "6.6cqw" }} />
              </span>
            </div>

            <div className="absolute inset-0 overflow-hidden">{children}</div>

            {/* Safari bottom bar + home indicator */}
            <div className="absolute inset-x-0 bottom-0 z-20 border-t border-black/[0.06] bg-white/90 px-[4.5cqw] pt-[2.4cqw] pb-[2.2cqw] backdrop-blur">
              <div className="flex h-[9.5cqw] items-center justify-center gap-[1.4cqw] rounded-[3.2cqw] bg-[#ececf0] text-[3.6cqw] text-[#3a3a3c] shadow-[0_0.6cqw_1.8cqw_-0.6cqw_rgba(0,0,0,.18)]">
                <Lock style={{ width: "3cqw", height: "3cqw" }} strokeWidth={2.5} />
                {url}
              </div>
              <span className="mx-auto mt-[3.4cqw] block h-[1.3cqw] w-[34cqw] rounded-full bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop browser window (used on portfolio cards)                    */
/* ------------------------------------------------------------------ */

export function BrowserFrame({
  children,
  url = "yourbusiness.in",
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-black/[0.08]", className)}
    >
      <div className="flex items-center gap-3 border-b border-black/[0.08] bg-[#f5f5f7] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-5 w-1/2 max-w-56 items-center justify-center gap-1 rounded-md bg-[#e8e8ed] text-[10px] text-[#3a3a3c]">
          <Lock className="size-2.5" strokeWidth={2.5} />
          {url}
        </div>
        <span className="w-10" />
      </div>
      {children}
    </div>
  );
}
