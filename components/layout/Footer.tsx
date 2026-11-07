import Link from "next/link";

import { navigation, siteConfig, socials } from "@/config/content";
import { Icon } from "@/components/ui/Icon";
import { Img } from "@/components/ui/Img";

const socialCircleClasses: Record<string, string> = {
  instagram: "bg-gradient-to-br from-pink-500 to-purple-600",
  tiktok: "bg-black",
  youtube: "bg-red-600",
};

export function Footer() {
  return (
    <footer className="pt-32 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
      <div className="relative bg-black/70 py-32">
        <div className="absolute inset-0 z-0">
          <Img src={siteConfig.footerImage} alt="" className="h-full w-full object-cover opacity-20" />
        </div>

        <div className="section-container relative z-10 text-base">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-36">
            {/* HERO */}
            <div>
              <div className="flex items-center gap-2">
                <Img src={siteConfig.logo} alt={`${siteConfig.name} logo`} className="h-10 w-10" />
                <h1 className="text-xl font-bold">{siteConfig.name}</h1>
              </div>
            </div>

            {/* Beranda */}
            <div>
              <h3 className="mb-1 font-semibold">Beranda</h3>
              <ul className="flex flex-col gap-[2px] text-zinc-300">
                {navigation.footer.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:underline" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-1 font-semibold">Kontak</h3>
              <ul className="flex flex-col gap-2 text-zinc-300">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors hover:underline"
                    >
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full ${socialCircleClasses[social.id]}`}
                      >
                        <Icon name={social.id} className="h-3 w-3 text-white" />
                      </span>
                      <span>{social.handle.replace(/^@/, "")}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-xs text-gray-400">{siteConfig.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
