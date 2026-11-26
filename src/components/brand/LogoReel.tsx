"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * The SiteBanao logo intro (dark neon version), enhanced from the original GIF:
 * smooth 30 fps cross-dissolves, debanded gradients and a held final frame, as a
 * ~120 KB video instead of a 250 KB looping GIF.
 *
 * Shows the finished logo (poster) until scrolled into view, plays once, and can
 * be replayed on hover. Never plays for users who prefer reduced motion.
 */
export function LogoReel({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const replay = () => {
    const video = ref.current;
    if (!video || !video.ended) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="metadata"
      poster="/brand/sitebanao-logo-poster.webp"
      width={508}
      height={336}
      onMouseEnter={replay}
      aria-label="SiteBanao logo: Professional Websites, starting at ₹999"
      className={cn("block h-auto w-full", className)}
    >
      <source src="/brand/sitebanao-logo-intro.webm" type="video/webm" />
      <source src="/brand/sitebanao-logo-intro.mp4" type="video/mp4" />
    </video>
  );
}
