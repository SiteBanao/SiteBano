"use client";

/**
 * Image loader for next/image.
 * Unsplash photos are resized/compressed by Unsplash's CDN (imgix): we only
 * request the width the browser actually needs, in WebP/AVIF when supported.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    return url.toString();
  }
  // Local files: append width so each srcset entry stays unique.
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}
