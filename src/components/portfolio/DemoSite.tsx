import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowLeft, ArrowRight, Check, Clock, Info, Mail, MapPin, Phone, Quote, Star } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { WhatsAppIcon } from "@/components/brand/SocialIcons";
import { ButtonLink } from "@/components/ui/Button";
import { getPackage } from "@/data/packages";
import type { DemoProject } from "@/data/portfolio";
import { demoEnquiryMessage, whatsappLink } from "@/lib/whatsapp";
import { cn, formatINR } from "@/lib/utils";

/**
 * Full-page live demo of a sample website. Clearly labelled as a demonstration:
 * the business is fictional, reviews are sample content and contact details are placeholders.
 */
export function DemoSite({ demo }: { demo: DemoProject }) {
  const pkg = getPackage(demo.packageId)!;
  const Icon = demo.icon;
  const { photos } = demo;
  const get = whatsappLink(
    demoEnquiryMessage(demo.name, demo.industry, pkg.name),
    `?package=${pkg.id}&design=${demo.slug}`,
  );
  const style = {
    ["--p" as string]: demo.theme.primary,
    ["--s" as string]: demo.theme.soft,
    ["--d" as string]: demo.theme.dark,
  } as CSSProperties;
  const isPremium = pkg.id === "professional";

  return (
    <div style={style} className="min-h-dvh bg-white">
      {/* SiteBanao demo banner */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/portfolio" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-white/80 hover:bg-white/10 hover:text-white">
              <ArrowLeft className="size-4" /> <span className="hidden sm:inline">Portfolio</span>
            </Link>
            <span className="hidden h-5 w-px bg-white/15 sm:block" />
            <Link href="/" className="flex items-center gap-2" aria-label="SiteBanao home">
              <LogoMark className="h-6 w-7" />
            </Link>
            <p className="truncate text-xs text-white/80 sm:text-sm">
              <span className="mr-2 rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wider">DEMO</span>
              <span className="hidden md:inline">Demonstration design by SiteBanao · Fictional business · </span>
              {pkg.name} package
            </p>
          </div>
          <ButtonLink href={get.href} external={get.external} size="sm" className="h-9">
            Get This Website · {formatINR(pkg.price)}
          </ButtonLink>
        </div>
      </div>

      {/* Hero (full-bleed photo) */}
      <header className="relative isolate overflow-hidden bg-(--d) text-white">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="(min-width: 1440px) 1440px, 100vw"
          quality={70}
          className="-z-10 bg-[#e9ecf1] object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <span className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl bg-(--p) text-white shadow-lg">
              <Icon className="size-5" />
            </span>
            <span className="font-display text-lg font-extrabold">{demo.name}</span>
          </span>
          <nav aria-label="Demo site" className="hidden items-center gap-7 text-sm font-medium text-white/85 md:flex">
            <a href="#demo-services" className="hover:text-white">Services</a>
            <a href="#demo-about" className="hover:text-white">About</a>
            <a href="#demo-gallery" className="hover:text-white">Gallery</a>
            <a href="#demo-contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#demo-contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-(--d) hover:bg-white/90">
            {demo.hero.cta}
          </a>
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6 lg:pt-24 lg:pb-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold ring-1 ring-white/25 backdrop-blur">
              <span className="size-2 rounded-full bg-(--p) ring-2 ring-white/60" />
              {demo.hero.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.06] font-extrabold tracking-tight sm:text-6xl">
              {demo.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{demo.hero.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#demo-contact" className="inline-flex items-center gap-2 rounded-xl bg-(--p) px-6 py-3.5 font-semibold text-white shadow-lg hover:brightness-110">
                {demo.hero.cta} <ArrowRight className="size-4" />
              </a>
              <a href="#demo-services" className="rounded-xl bg-white/15 px-6 py-3.5 font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/25">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Highlights */}
      <section aria-label="Highlights" className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 shadow-[0_20px_50px_-20px_rgba(16,24,40,.3)] ring-1 ring-black/5 sm:p-6 md:grid-cols-4">
          {demo.highlights.map((h) => (
            <li key={h} className="flex items-center gap-3 text-sm font-semibold text-(--d)">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-(--s) text-(--p)">
                <Check className="size-4" strokeWidth={3} />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section id="demo-services" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-24">
        <p className="text-center text-sm font-semibold tracking-wider text-(--p) uppercase">Our services</p>
        <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-(--d) sm:text-4xl">What we offer</h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {demo.services.map((s, i) => (
            <li key={s.title} className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-16px_rgba(16,24,40,.25)] ring-1 ring-black/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photos.services[i].src}
                  alt={photos.services[i].alt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                  quality={70}
                  className="bg-[#e9ecf1] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-(--d)">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-(--p)">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="demo-about" className="scroll-mt-28 bg-(--s)">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image src={photos.about.src} alt={photos.about.alt} fill sizes="(min-width: 1024px) 560px, 90vw" quality={75} className="bg-[#e9ecf1] object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:left-auto sm:-right-6">
              <span className="grid size-11 place-items-center rounded-xl bg-(--p) text-white">
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">Known for</span>
                <span className="block font-semibold text-(--d)">{demo.highlights[1]}</span>
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wider text-(--p) uppercase">About us</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-(--d) sm:text-4xl">Why people choose {demo.name}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{demo.about}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {demo.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-(--d) ring-1 ring-black/5">
                  <Check className="size-4 shrink-0 text-(--p)" strokeWidth={3} /> {h}
                </li>
              ))}
            </ul>
            <a href="#demo-contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-(--d) px-6 py-3.5 font-semibold text-white hover:opacity-90">
              {demo.hero.cta} <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="demo-gallery" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-24">
        <p className="text-center text-sm font-semibold tracking-wider text-(--p) uppercase">Gallery</p>
        <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-(--d) sm:text-4xl">Take a look around</h2>
        <ul className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {photos.gallery.map((photo, i) => (
            <li
              key={`${photo.src}-${i}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                // 4-col desktop: [0 0 1 2][0 0 3 3][4 4 5 5] · 2-col mobile: [0 0][0 0][1 2][3 4][5 5]
                i === 0 ? "col-span-2 row-span-2" : "",
                i === 3 || i === 4 ? "md:col-span-2" : "",
                i === 5 ? "col-span-2" : "",
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 ? "(min-width: 768px) 560px, 90vw" : "(min-width: 768px) 280px, 45vw"}
                quality={70}
                className="bg-[#e9ecf1] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-semibold text-white drop-shadow">{photo.caption}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Sample reviews (Professional package feature) */}
      {isPremium ? (
        <section aria-labelledby="demo-testimonials" className="bg-(--d) text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <h2 id="demo-testimonials" className="text-center font-display text-3xl font-extrabold sm:text-4xl">
              What our customers say
            </h2>
            <p className="mx-auto mt-3 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-white/70">
              <Info className="size-4 shrink-0" /> Demo content: sample reviews showing the layout. Your real customer
              reviews appear here.
            </p>
            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {sampleReviews(demo).map((r) => (
                <li key={r.name} className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                  <Quote className="size-7 text-white/40" aria-hidden />
                  <p className="mt-4 leading-relaxed text-white/90">{r.text}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-(--p) font-bold">{r.name[0]}</span>
                    <span>
                      <span className="block font-semibold">{r.name}</span>
                      <span className="flex gap-0.5 text-[#f5b301]" aria-label="Sample rating">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star key={s} className="size-3.5 fill-current" strokeWidth={0} />
                        ))}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Contact */}
      <section id="demo-contact" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_-24px_rgba(16,24,40,.3)] ring-1 ring-black/5 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-sm font-semibold tracking-wider text-(--p) uppercase">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-(--d)">Visit or get in touch</h2>
            <p className="mt-3 text-muted">In your website, this section shows your real contact details.</p>
            <ul className="mt-8 space-y-4 text-ink-soft">
              {[
                { icon: Phone, label: "Phone", value: "Your phone number" },
                { icon: Mail, label: "Email", value: "Your email address" },
                { icon: MapPin, label: "Address", value: "Your business address" },
                { icon: Clock, label: "Hours", value: "Your opening hours" },
              ].map(({ icon: I, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-(--s) text-(--p)">
                    <I className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="font-medium text-(--d)">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0f7a41] px-5 py-3 font-semibold text-white">
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </span>
          </div>
          <div className="relative min-h-72 bg-[#eef1f4]">
            <MapIllustration />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 text-sm shadow-lg">
              <p className="font-semibold text-(--d)">{isPremium ? "Google Maps embed" : "Location map"}</p>
              <p className="text-xs text-muted">Shows your real location in the final website.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-(--d) text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
          <p>{demo.name} · Fictional demo business</p>
          <p>
            Designed by{" "}
            <Link href="/" className="font-semibold text-white hover:underline">
              SiteBanao
            </Link>
          </p>
        </div>
      </footer>

      {/* Conversion bar */}
      <div className="bg-ink px-4 py-14 text-center text-white sm:px-6">
        <p className="font-display text-2xl font-bold sm:text-3xl">Like this design?</p>
        <p className="mx-auto mt-2 max-w-xl text-white/70">
          Get a website like {demo.name}, customised with your name, colours, photos and content, starting at{" "}
          {formatINR(pkg.price)} ({pkg.name} package). Domain & hosting quoted separately.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={get.href} external={get.external} size="lg">
            Get This Website
          </ButtonLink>
          <ButtonLink href="/portfolio" size="lg" variant="onDark">
            Browse more designs
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

/** Clearly-labelled sample review copy for the demo layout (fictional). */
function sampleReviews(demo: DemoProject) {
  const service = demo.services[0].title.toLowerCase();
  return [
    { name: "Ananya", text: `Clear communication from start to finish. The ${service} experience was smooth and well organised.` },
    { name: "Rahul", text: "Professional, punctual and transparent about everything. Exactly what we were looking for." },
    { name: "Meera", text: "Friendly team and a great experience overall. We'd happily recommend them to friends and family." },
  ];
}

/** Stylised map (decorative) used in the demo contact section. */
function MapIllustration() {
  return (
    <svg aria-hidden viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <rect width="400" height="300" fill="#eef1f4" />
      <path d="M0 210 C 80 190, 140 240, 220 215 S 360 170, 400 185 L400 300 L0 300Z" fill="#cfe3f5" />
      <rect x="250" y="30" width="110" height="70" rx="10" fill="#d8ecd9" />
      <rect x="30" y="40" width="70" height="55" rx="8" fill="#d8ecd9" />
      <g stroke="#ffffff" strokeLinecap="round">
        <path d="M0 120 H400" strokeWidth="14" />
        <path d="M170 0 V300" strokeWidth="14" />
        <path d="M0 40 L400 260" strokeWidth="8" />
        <path d="M60 0 V170" strokeWidth="7" />
        <path d="M300 110 V300" strokeWidth="7" />
        <path d="M170 60 H400" strokeWidth="6" />
      </g>
      <g stroke="#e3e7ec" strokeWidth="2">
        <path d="M0 120 H400" />
        <path d="M170 0 V300" />
      </g>
      <circle cx="210" cy="128" r="34" fill="var(--p)" opacity="0.15" />
      <path d="M210 92c-14 0-25 11-25 25 0 19 25 43 25 43s25-24 25-43c0-14-11-25-25-25Z" fill="var(--p)" />
      <circle cx="210" cy="117" r="9" fill="#fff" />
    </svg>
  );
}
