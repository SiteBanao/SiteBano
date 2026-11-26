import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { DemoSite } from "@/components/portfolio/DemoSite";
import { demoProjects, getDemo } from "@/data/portfolio";

export function generateStaticParams() {
  return demoProjects.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  return {
    title: `${demo.name}: ${demo.industry} Website Demo`,
    description: `Live demo of a ${demo.industry.toLowerCase()} website design by SiteBanao. ${demo.description} (Fictional business, for demonstration only.)`,
    alternates: { canonical: `/portfolio/${demo.slug}` },
  };
}

async function Demo({ params }: { params: PageProps<"/portfolio/[slug]">["params"] }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();
  return <DemoSite demo={demo} />;
}

/**
 * Params are read inside Suspense so navigation can render instantly.
 * Every demo is listed in generateStaticParams, so the full page is prerendered
 * and the fallback is only ever seen briefly on client navigation.
 */
export default function DemoPage({ params }: PageProps<"/portfolio/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-ink" aria-busy="true" />}>
      <Demo params={params} />
    </Suspense>
  );
}
