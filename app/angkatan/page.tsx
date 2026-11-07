import type { Metadata } from "next";

import { angkatanPage } from "@/config/content";
import { AngkatanPageView } from "@/components/angkatan/AngkatanPageView";

export const metadata: Metadata = {
  title: angkatanPage.seo.title,
  description: angkatanPage.seo.description,
  alternates: { canonical: "/angkatan" },
  openGraph: {
    title: angkatanPage.seo.title,
    description: angkatanPage.seo.description,
    url: "/angkatan",
    images: [{ url: angkatanPage.hero.images[0], alt: angkatanPage.navLabel }],
  },
};

export default function AngkatanPage() {
  return <AngkatanPageView page={angkatanPage} />;
}
