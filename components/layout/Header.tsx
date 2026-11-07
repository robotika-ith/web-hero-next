"use client";

import Link from "next/link";
import { useState } from "react";

import { divisions, navigation, siteConfig } from "@/config/content";
import { Icon } from "@/components/ui/Icon";
import { Img } from "@/components/ui/Img";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header>
      <div className="fixed z-50 w-full border-b border-b-zinc-900 bg-zinc-950/80 backdrop-blur-lg">
        <div className="section-container flex items-center justify-between py-3">
          {/* Logo */}
          <Link className="flex items-center gap-2" href="/" onClick={closeMenu}>
            <Img className="h-10 w-10" src={siteConfig.logo} alt={`${siteConfig.name} logo`} loading="eager" />
            <span className="text-md font-bold">{siteConfig.name}</span>
          </Link>

          {/* Navbar */}
          <nav className="relative">
            {/* Hamburger menu */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Buka menu"
              className="cursor-pointer lg:hidden"
            >
              <Icon name="hamburger" width={40} height={40} />
            </button>

            <ul
              className={`absolute top-full right-0 w-52 flex-col gap-5 rounded-lg border border-zinc-700 bg-zinc-900 p-5 shadow-md transition-all duration-300 ease-in-out lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
                open ? "flex" : "hidden"
              }`}
            >
              <li>
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="menu flex cursor-pointer flex-row items-center gap-2 hover:text-red-500"
                  >
                    <span>Beranda</span>
                    <Icon name="chevronDown" className="size-4" />
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
                    {navigation.home.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>


              <li>
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="menu flex cursor-pointer flex-row items-center gap-2 hover:text-red-500"
                  >
                    <span>Divisi</span>
                    <Icon name="chevronDown" className="size-4" />
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
                    {divisions.map((division) => (
                      <li key={division.slug}>
                        <Link href={`/divisi/${division.slug}`} onClick={closeMenu}>
                          {division.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link className="menu hover:text-red-500" href={navigation.angkatan.href} onClick={closeMenu}>
                  {navigation.angkatan.label}
                </Link>
              </li>

              

              <li className="lg:hidden">
                <a className="menu" href={navigation.contact.href} onClick={closeMenu}>
                  {navigation.contact.label}
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact button */}
          <a href={navigation.contact.href} className="primary-button hidden lg:block">
            <span>{navigation.contact.label}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
