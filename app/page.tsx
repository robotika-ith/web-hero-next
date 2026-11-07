import type { Metadata } from "next";

import { BeritaCarousel } from "@/components/sections/BeritaCarousel";
import { ContactSection } from "@/components/sections/ContactSection";
import { Icon } from "@/components/ui/Icon";
import { Img } from "@/components/ui/Img";
import { CoordinatorCard } from "@/components/ui/PersonCard";
import { Segments } from "@/components/ui/Segments";
import { homePage, siteConfig } from "@/config/content";

const heroLineDelays = ["", "anim-delay-75", "anim-delay-100", "anim-delay-150"];
const misiAnimations = ["slide-left", "slide-down", "slide-right"];
const filosofiAnimations = ["slide-left", "slide-right", "slide-left", "slide-right"];

export const metadata: Metadata = {
  title: homePage.seo.title,
  description: homePage.seo.description,
};

export default function Home() {
  const { hero, about, sambutan, visiMisi, filosofi, berita } = homePage;
  const [aboutTopImage, aboutLeftImage, aboutRightImage] = about.images;

  return (
    <main className="flex-1">
      {/* HERO */}
      <section id="home" className="pt-32">
        <div className="section-container flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <h1 className="text-center text-2xl leading-tight md:text-5xl lg:text-left lg:text-6xl">
            {hero.lines.map((line, index) => (
              <span
                key={line.map((segment) => segment.text).join("")}
                className={`block animate-[slideInLeft_0.5s_ease-in-out] ${heroLineDelays[index] ?? ""}`}
              >
                <Segments segments={line} />
              </span>
            ))}
          </h1>

          <figure className="w-48 shrink-0 animate-[slideInRight_0.5s_ease-in-out] md:w-64 lg:w-96">
            <Img
              className="h-auto w-full"
              src={hero.image}
              alt={`${siteConfig.name} logo`}
              width={1280}
              height={1280}
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="pt-24 lg:pt-32">
        <div className="section-container flex flex-col gap-16 lg:flex-row lg:gap-12">
          {/* Image */}
          <figure className="flex flex-col items-center justify-center lg:w-1/2">
            <Img
              className="slide-up z-10 w-1/3 rounded shadow-md"
              src={aboutTopImage}
              alt=""
              width={5712}
              height={4284}
            />
            <div className="flex -translate-y-2 items-center justify-center gap-3">
              <Img
                className="slide-left w-1/3 -rotate-2 rounded shadow-md"
                src={aboutLeftImage}
                alt=""
                width={5712}
                height={4284}
              />
              <Img
                className="slide-right w-1/3 rotate-3 rounded shadow-md"
                src={aboutRightImage}
                alt=""
                width={5712}
                height={4284}
              />
            </div>
          </figure>

          {/* Text */}
          <div className="slide-right min-w-0 border-t-4 border-dashed border-t-my-primary pt-5 lg:w-1/2">
            <h2 className="title mb-2">
              <Segments segments={about.title} />
            </h2>
            <p className="mb-8 text-zinc-300">{about.body}</p>
            <a href={about.cta.href} className="primary-button flex w-fit items-center gap-2">
              <span>{about.cta.label}</span>
              <Icon name="arrowDown" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Sambutan */}
      <section id="sambutan" className="pt-24 lg:pt-32">
        <div className="section-container">
          <h2 className="title mb-16 text-center">{sambutan.title}</h2>
          <div className="flex w-full justify-center gap-5">
            {sambutan.images.map((person, index) => (
              <div key={person.image} className="w-1/3 max-w-[220px]">
                <CoordinatorCard
                  member={person}
                  className={index === 0 ? "slide-left" : "slide-right"}
                />
              </div>
            ))}
          </div>

          <div className="slide-down text-container-primary relative mt-10 rounded-t-none border-t-4 border-t-my-primary p-7 lg:mx-20">
            {/* Decorative elements */}
            <div
              aria-hidden="true"
              className="absolute -top-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-my-primary"
            />
            <div
              aria-hidden="true"
              className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-my-primary"
            />

            <h3 className="slide-down mb-3 text-lg font-bold italic">{sambutan.greeting}</h3>

            <div className="relative">
              <p className="slide-down leading-relaxed text-zinc-300">{sambutan.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section id="visimisi" className="pt-24 lg:pt-32">
        <div className="section-container">
          <h2 className="title text-center">
            <Segments segments={visiMisi.title} />
          </h2>

          <div className="lg:px-20">
            {/* Visi */}
            <div className="mt-10">
              <h3 className="sub-title text-center text-my-primary">{visiMisi.visi.label}</h3>
              <div className="slide-left text-container-primary mt-3 border-l-4 border-l-my-primary">
                <p>{visiMisi.visi.body}</p>
              </div>
            </div>

            {/* Misi */}
            <div className="relative mt-10">
              <h3 className="sub-title text-center text-my-primary">{visiMisi.misi.label}</h3>
              <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visiMisi.misi.items.map((item, index) => (
                  <div
                    key={item.title}
                    className={`${misiAnimations[index % misiAnimations.length]} misi-point text-container-primary flex h-full w-full flex-col`}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-my-primary">
                        <Icon name={item.icon} className="h-4 w-4 text-my-primary" />
                      </div>
                      <h4 className="font-semibold text-my-primary">{item.title}</h4>
                    </div>
                    <p className="grow">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofi Logo */}
      <section id="filosofi" className="pt-24 lg:pt-32">
        <div className="section-container">
          <h2 className="title mb-10 text-center">
            <Segments segments={filosofi.title} />
          </h2>
          <figure className="slide-down mb-12">
            <Img
              className="m-auto w-52 -translate-x-3"
              src={filosofi.image}
              alt="Logo HERO"
              width={1280}
              height={1280}
            />
          </figure>

          <div className="flex flex-wrap justify-center gap-5 lg:px-20">
            {filosofi.items.map((item, index) => (
              <div
                key={item.title[0].text}
                className={`${filosofiAnimations[index % filosofiAnimations.length]} flex w-full max-w-sm flex-col items-center gap-5 lg:w-sm`}
              >
                <div className="text-container-primary w-full lg:min-h-[300px]">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.iconClassName}`}
                    >
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">
                      <Segments segments={item.title} />
                    </h3>
                  </div>

                  <ul className="flex flex-col gap-5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-my-primary">
                          •
                        </span>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita */}
      <section id="berita" className="pt-24 lg:pt-32">
        <div className="section-container">
          <h2 className="title mb-10 text-center">{berita.title}</h2>
          <BeritaCarousel items={berita.items} />
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
