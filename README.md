# SiteBanao: Your Website. Just ₹999.

Production-ready marketing website for **SiteBanao**, a startup that builds affordable, professional websites for small businesses, startups and personal brands. Development starts at ₹999.

> _Premium websites. Affordable pricing. No unnecessary complications._

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide icons**. No paid APIs, UI kits or services.

---

## Features

| Area | What's included |
| --- | --- |
| **Pages** | Home, Services, Pricing, Portfolio (filterable), 9 live demo sites, How It Works, About, Contact, Privacy Policy, Terms & Conditions, custom 404 |
| **Homepage** | Hero with device mockups, industries, why-choose, 5-step timeline, featured portfolio, pricing cards, FAQ, final CTA |
| **Pricing** | 3 reusable pricing cards (Business recommended), comparison table, inclusions/exclusions, add-on prices, FAQ |
| **Cost calculator** | Package + extra pages + custom features + editable domain/hosting estimates + maintenance; live total; sends a pre-filled WhatsApp quote request |
| **WhatsApp** | Floating button and WhatsApp CTAs everywhere, with pre-filled messages per package / demo / service / calculator result; configurable number |
| **Enquiry form** | Validation, accessible errors, pre-fill from URL (`?package=`, `?service=`, `?design=`), honeypot spam trap, real delivery via a configurable endpoint, or an honest **demo mode** |
| **Portfolio** | Clearly labelled _demonstration_ designs for fictional businesses, with "View Live Demo" and "Get This Website" on each |
| **SEO** | Per-page metadata, Open Graph image, JSON-LD (ProfessionalService + FAQPage), `sitemap.xml`, `robots.txt`, semantic HTML, canonical URLs |
| **Accessibility** | Skip link, keyboard-friendly nav, native `<details>` FAQ, labelled form controls, `aria-live` totals, reduced-motion support |
| **Performance** | Statically prerendered pages, zero raster images (mockups are pure HTML/CSS/SVG), self-hosted fonts via `next/font` |

### Honesty built in

The site follows the business rules in the brief:

- ₹999 is always presented as a **starting, one-time development price**. Domain, hosting, renewals, maintenance and custom work are **quoted separately**, and this is stated near every price.
- No fabricated clients, testimonials, ratings, customer counts or founder details. Portfolio items are labelled **"Demo design · Fictional business"**.
- No fake contact details. Missing details show a "coming soon" placeholder until you configure them.
- The enquiry form **never fakes a successful submission**. Without a configured endpoint it says so plainly and offers WhatsApp, email or copy-to-clipboard instead.
- "Terms & Conditions Apply" links to `/terms` from pricing, the calculator and the footer.

---

## Getting started

Requirements: **Node.js 20.9+** (tested with Node 26) and npm.

```bash
npm install
cp .env.example .env.local     # then fill in your details
npm run dev                    # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (type-checks and prerenders every page) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

---

## Configuration (`.env.local`)

Everything business-specific is set through environment variables, so no real-world details are hard-coded. See [`.env.example`](.env.example).

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Country code + number, digits only, e.g. `91XXXXXXXXXX`. **Until set, WhatsApp buttons link to `/contact`.** |
| `NEXT_PUBLIC_CONTACT_PHONE` / `_EMAIL` / `NEXT_PUBLIC_BUSINESS_ADDRESS` / `_HOURS` | Footer + Contact page (placeholders when empty) |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `_FACEBOOK_URL`, `_LINKEDIN_URL`, `_YOUTUBE_URL`, `_X_URL` | Footer social icons (greyed-out when empty) |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Enquiry form delivery endpoint (see below) |
| `NEXT_PUBLIC_FORM_ACCESS_KEY` | Optional access key (e.g. Web3Forms) |

> `NEXT_PUBLIC_*` values are embedded at **build time**. After changing them, restart `npm run dev` or redeploy.

### Connecting the enquiry form

The form sends a JSON `POST` and only shows "sent" when the endpoint returns a 2xx status. Any of these free-tier services work (check each provider's current limits and terms):

1. **Formspree**: create a form and set `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<id>`.
2. **Web3Forms**: set `NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit` and `NEXT_PUBLIC_FORM_ACCESS_KEY=<key>`.
3. **Google Sheets via Apps Script**: deploy a web app that accepts JSON and returns `200`, and use its URL.

Submitted fields: `name`, `business_name`, `email`, `phone`, `business_category`, `package`, `preferred_contact`, `message`, `subject`.

---

## Editing content

All content lives in typed data files, so most edits never touch a component:

| File | Contents |
| --- | --- |
| `src/config/site.ts` | Brand name, taglines, nav links, env-driven contact config |
| `src/data/packages.ts` | Package prices, features, timelines, comparison table, inclusions/exclusions |
| `src/data/addons.ts` | Add-on prices and calculator defaults (domain/hosting estimates, maintenance rate, custom-feature estimates) |
| `src/data/portfolio.ts` | Demo projects (fictional) and portfolio filter categories |
| `src/data/industries.ts` | Industry cards on the homepage |
| `src/data/services.ts` | Services page and "Why choose" items |
| `src/data/process.ts` | 5-step process |
| `src/data/faqs.ts` | FAQ questions and answers |

**Before launch, please review:** typical timelines (`packages.ts`), add-on prices and calculator estimates (`addons.ts`), and the Terms / Privacy pages (starter templates that should be reviewed by a legal professional and updated with your registered business details).

### Logo

The logo mark (browser window, `</>`, swoosh and cursor) is redrawn as an SVG in `src/components/brand/Logo.tsx` and `src/app/icon.svg`, so it stays crisp and loads instantly. To use your original artwork instead, add it to `public/` and swap the `<LogoMark />` contents for a `next/image`.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root: fonts, global metadata, viewport
│   ├── (site)/                 # Marketing pages (header, footer, WhatsApp float)
│   │   ├── page.tsx            # Home
│   │   ├── services/  pricing/  portfolio/  how-it-works/
│   │   ├── about/  contact/  terms/  privacy-policy/
│   │   └── layout.tsx          # Header + Footer + JSON-LD
│   ├── (demo)/portfolio/[slug] # Full-page live demos (own layout, no site chrome)
│   ├── sitemap.ts  robots.ts  opengraph-image.tsx  icon.svg  not-found.tsx
│   └── globals.css             # Tailwind v4 theme tokens (colours, shadows, animations)
├── components/
│   ├── ui/          # Button / ButtonLink, Section, SectionHeading, Container
│   ├── brand/       # Logo, WhatsApp + social icons
│   ├── layout/      # Header, Footer, WhatsAppFloat
│   ├── home/        # Hero, Industries, WhyChoose, FeaturedPortfolio
│   ├── pricing/     # PricingCards, ComparisonTable, CostCalculator
│   ├── portfolio/   # PortfolioCard, PortfolioGallery, DemoSite
│   ├── contact/     # EnquiryForm
│   ├── mockups/     # Device frames + MiniSite (scalable website previews)
│   └── shared/      # PageHeader, FAQ, ProcessTimeline, FinalCta, LegalPage
├── config/site.ts
├── data/            # All editable content (see above)
└── lib/             # utils (cn, formatINR), whatsapp link helpers
```

### Design system

Tokens are defined once in `src/app/globals.css` (`@theme`) and used as Tailwind utilities:

- Colours: `brand-*` (primary `#635BFF`, logo purple `#4F2BD8`), `accent-*` (`#12B76A`), `ink`, `muted`, `line`, `surface`
- Typography: **Plus Jakarta Sans** (headings) + **Inter** (body)
- Shadows: `shadow-soft`, `shadow-card`, `shadow-lift`, `shadow-brand`

Button variants: `primary`, `secondary`, `ghost`, `dark`, `white`, `whatsapp`, `onDark`. `className` on buttons is appended, not merged, so pick a variant rather than overriding colours or `display`.

---

## Deployment

The site is a standard Next.js app. Every page is prerendered at build time.

### Netlify (free tier)

1. Push the project to GitHub/GitLab.
2. In Netlify, **Add new site → Import an existing project** and pick the repo. Netlify detects Next.js automatically (build command `npm run build`).
3. Add your environment variables under **Site configuration → Environment variables**.
4. Deploy, then add your custom domain under **Domain management**.

### Vercel

Import the repository at vercel.com, add the environment variables, and deploy. **Note:** Vercel's free _Hobby_ plan is intended for personal, non-commercial use. A business website like this generally needs a paid plan there. Check Vercel's current fair-use terms.

### Any Node.js host / VPS

```bash
npm ci
npm run build
npm run start      # serves on port 3000 (set PORT to change)
```

Put it behind a reverse proxy (e.g. Nginx or Caddy) with HTTPS.

> Free tiers change over time. Always confirm the provider's current limits and commercial-use conditions before launch.

### Go-live checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set to the final domain
- [ ] WhatsApp number, phone, email and address configured
- [ ] Form endpoint configured and a test enquiry received
- [ ] Prices, timelines and add-ons reviewed
- [ ] Terms & Privacy reviewed by a legal professional
- [ ] Social links added (or left as "coming soon")
- [ ] Site submitted to Google Search Console (`/sitemap.xml`)

---

## Testing performed

- `npm run build` (type-check + static prerender of all 25 routes) and `npm run lint`: passing
- Manually verified in the browser: navigation and active states, mobile menu, hero/device mockups, portfolio filters (incl. `?category=` deep links from the homepage), all 9 live demos, calculator totals and upsell tip, form validation, pre-fill, demo mode, error state and success state (against a temporary mock endpoint), WhatsApp link generation with a configured number, and layouts at 375 px and 1440 px widths.
