import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl" />
      <Link href="/" aria-label="SiteBanao home">
        <Logo size="lg" animated />
      </Link>
      <p className="mt-12 font-display text-7xl font-extrabold text-gradient sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">This page isn&apos;t online (yet).</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">
          <ArrowLeft className="size-4" /> Back to home
        </ButtonLink>
        <ButtonLink href="/pricing" variant="secondary">
          View pricing
        </ButtonLink>
      </div>
    </div>
  );
}
