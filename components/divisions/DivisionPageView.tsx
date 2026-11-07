import type { DivisionPage, MemberLayout, Structure } from "@/config/content";
import { Img } from "@/components/ui/Img";
import { CoordinatorCard, MemberCard } from "@/components/ui/PersonCard";
import { Segments } from "@/components/ui/Segments";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProkerGrid } from "@/components/sections/ProkerGrid";

function DivisionHero({ hero }: { hero: DivisionPage["hero"] }) {
  return (
    <section id="home" className="pt-32 pb-32">
      <div className="section-container flex flex-col items-center justify-between gap-10 lg:flex-row">
        <figure className="flex animate-[slideInLeft_0.5s_ease-in-out] justify-center lg:w-1/2">
          <Img
            className="slide-up w-full max-w-md rounded-3xl object-cover shadow-md"
            src={hero.image}
            alt=""
            loading="eager"
          />
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

function IntroSection({ title, body }: DivisionPage["intro"]) {
  return (
    <section id="tupoksi" className="pt-32">
      <div className="section-container">
        <h1 className="title mb-16 text-center">{title}</h1>

        <div className="slide-down text-container-primary relative mt-10 rounded-t-none border-t-4 border-t-my-primary p-7 lg:mx-20">
          <div className="absolute -top-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-my-primary" />
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-my-primary" />

          <div className="relative">
            <p className="slide-down whitespace-pre-line text-center leading-relaxed text-zinc-300">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StructureSection({
  structure,
  memberLayout = "grid",
}: {
  structure: Structure;
  memberLayout?: MemberLayout;
}) {
  return (
    <>
      {structure.title ? (
        <section id="struktur" className="pt-24">
          <div className="section-container">
            <h1 className="title mb-8 text-center">
              <Segments segments={structure.title} />
            </h1>
          </div>
        </section>
      ) : null}

      <section id={structure.title ? undefined : "struktur"} className="section-container pt-24 pb-16">
        
        {/* Bagian Koordinator */}
        {structure.coordinator ? (
          <div className="mb-16 flex flex-wrap justify-center gap-6">
            <div className="w-full max-w-[220px]">
              <CoordinatorCard member={structure.coordinator} />
            </div>
          </div>
        ) : null}

        {/* Bagian Anggota / Grup */}
        {structure.groups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-14 last:mb-0">
            {group.title ? (
              <h1 className="title mb-10 text-center">
                <Segments segments={group.title} />
              </h1>
            ) : null}

            {memberLayout === "masonry" ? (
              <div className="mx-auto max-w-5xl columns-2 gap-4 sm:gap-5 lg:columns-4">
                {group.members.map((member, index) => (
                  <div key={member.image} className="mb-4 break-inside-avoid sm:mb-5">
                    <MemberCard member={member} index={index} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
                {group.members.map((member, index) => (
                  <MemberCard key={member.image} member={member} index={index} />
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export function DivisionPageView({ page }: { page: DivisionPage }) {
  return (
    <main>
      <DivisionHero hero={page.hero} />
      <IntroSection title={page.intro.title} body={page.intro.body} />
      {page.structure ? (
        <StructureSection structure={page.structure} memberLayout={page.memberLayout} />
      ) : null}
      {/* {page.proker ? <ProkerGrid title={page.proker.title} items={page.proker.items} /> : null} */}
      <ContactSection />
    </main>
  );
}