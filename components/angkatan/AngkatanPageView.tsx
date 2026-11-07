import type { Angkatan, AngkatanPage, Member } from "@/config/content";
import { Img } from "@/components/ui/Img";
import { Segments } from "@/components/ui/Segments";
import { ContactSection } from "@/components/sections/ContactSection";

const memberAnimations = ["slide-right", "slide-up", "slide-left"];

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <div className={`w-full text-center ${memberAnimations[index % memberAnimations.length]}`}>
      <div className="mx-auto w-full">
        <Img className="h-auto w-full rounded-2xl" src={member.image} alt={member.name} />
      </div>
    </div>
  );
}

function AngkatanHero({ hero }: { hero: AngkatanPage["hero"] }) {
  const [topImage, leftImage, rightImage] = hero.images;

  return (
    <section id="home" className="pt-32 pb-32">
      <div className="section-container flex flex-col items-center justify-between gap-10 lg:flex-row">
        <figure className="flex animate-[slideInLeft_0.5s_ease-in-out] flex-col items-center justify-center lg:w-1/2">
          <Img
            className={`slide-up z-10 w-1/3 rounded-3xl object-cover shadow-md ${
              hero.imageOverlap ? "-mb-16" : ""
            }`}
            src={topImage}
            alt=""
            loading="eager"
          />
          <div className={`flex -translate-y-2 items-center justify-center ${hero.imageGap ?? "gap-3"}`}>
            <Img
              className="slide-left w-1/3 -rotate-2 rounded-3xl object-cover shadow-md"
              src={leftImage}
              alt=""
            />
            <Img
              className="slide-right w-1/3 rotate-3 rounded-3xl object-cover shadow-md"
              src={rightImage}
              alt=""
            />
          </div>
        </figure>

        <div>
          {hero.titleLines.map((line, index) => (
            <h1
              key={index}
              className="animate-[slideInRight_0.5s_ease-in-out] text-2xl md:text-5xl lg:text-6xl"
            >
              <Segments segments={line} />
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
}

function AngkatanIntro({ title, body }: AngkatanPage["intro"]) {
  return (
    <section id="tupoksi" className="pt-32">
      <div className="section-container">
        <h2 className="title mb-16 text-center">{title}</h2>

        <div className="slide-down text-container-primary relative mt-10 rounded-t-none border-t-4 border-t-my-primary p-7 lg:mx-20">
          <div className="absolute -top-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-my-primary" />
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-my-primary" />

          <div className="relative">
            {/* Tambahan whitespace-pre-line agar \n terbaca sebagai enter */}
            <p className="slide-down whitespace-pre-line text-center leading-relaxed text-zinc-300">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AngkatanSection({ angkatan }: { angkatan: Angkatan[] }) {
  if (angkatan.length === 0) return null;

  return (
    <section id="struktur" className="section-container pt-32 pb-20">
      {angkatan.map((batch) => (
        <div key={batch.id} id={batch.id} className="mb-20 scroll-mt-32 last:mb-0">
          <h2 className="title mb-3 text-center">
            <Segments segments={batch.label} />
          </h2>

          {batch.period ? (
            <p className="mb-3 text-center text-sm font-semibold tracking-widest text-my-primary uppercase">
              {batch.period}
            </p>
          ) : null}

          {batch.description ? (
            <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-zinc-300">
              {batch.description}
            </p>
          ) : (
            <div className="mb-10" />
          )}

          {/* Dikhususkan hanya untuk Masonry layout */}
          <div className="mx-auto max-w-5xl columns-2 gap-3 sm:gap-6 lg:columns-3">
            {batch.members.map((member, index) => (
              <div key={member.image} className="mb-3 break-inside-avoid sm:mb-6">
                <MemberCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function AngkatanPageView({ page }: { page: AngkatanPage }) {
  return (
    <main>
      <AngkatanHero hero={page.hero} />
      {/* <AngkatanIntro title={page.intro.title} body={page.intro.body} /> */}
      <AngkatanSection angkatan={page.angkatan} />
      <ContactSection />
    </main>
  );
}
