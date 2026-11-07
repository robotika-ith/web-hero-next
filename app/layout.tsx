import type { Metadata, Viewport } from "next";
import { Bevan, Roboto } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/content";
import "./globals.css";

const bevan = Bevan({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bevan-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.fullName,
    template: "%s",
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.fullName,
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.logo,
        width: 1280,
        height: 1280,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${bevan.variable} ${roboto.variable}`}>
      <body className="flex min-h-dvh flex-col bg-zinc-950 text-white">
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        <Header />
        <div id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
