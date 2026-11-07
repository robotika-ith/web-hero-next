import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DivisionPageView } from "@/components/divisions/DivisionPageView";
import { getDivision, getDivisionSlugs } from "@/config/content";

type DivisionRouteParams = {
  slug: string;
};

export function generateStaticParams() {
  return getDivisionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<DivisionRouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDivision(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: { canonical: `/divisi/${slug}` },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: `/divisi/${slug}`,
      images: [{ url: page.hero.image, alt: page.navLabel }],
    },
  };
}

export default async function DivisionPage({ params }: { params: Promise<DivisionRouteParams> }) {
  const { slug } = await params;
  const page = getDivision(slug);

  if (!page) {
    notFound();
  }

  return <DivisionPageView page={page} />;
}
