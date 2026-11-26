import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SiteBanao | Professional Websites Starting at ₹999",
    template: "%s | SiteBanao",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "website for ₹999",
    "affordable website design India",
    "small business website",
    "website development India",
    "restaurant website",
    "clinic website",
    "salon website",
    "real estate website",
    "coaching institute website",
    "portfolio website",
    "SiteBanao",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "SiteBanao | Your Website. Just ₹999.",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteBanao | Your Website. Just ₹999.",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#635BFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-dvh bg-white font-sans text-ink">
        {/* If JavaScript is off, show scroll-revealed content immediately. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: "<style>[data-motion]{opacity:1!important;transform:none!important}</style>",
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
