import type { Member } from "@/config/content";
import { Img } from "@/components/ui/Img";

const memberAnimations = ["slide-right", "slide-up", "slide-left"];

export function MemberCard({ member, index }: { member: Member; index: number }) {
  const animClass = memberAnimations[index % memberAnimations.length];

  return (
    <article className={`w-full overflow-hidden rounded-2xl text-center  ${animClass}`}>
      {/* Header: jabatan */}
      {member.role ? (
        <h3 className="bg-my-primary px-3 py-1.5 font-roboto text-xs font-semibold text-white sm:text-sm">
          {member.role}
        </h3>
      ) : null}

      {/* Foto tanpa padding, menyatu dengan header dan footer */}
      <Img className="block h-auto w-full object-contain" src={member.image} alt={member.name} />

      {/* Footer: nama anggota */}
      <h2 className="bg-my-primary px-3 py-1.5 text-sm font-bold leading-tight text-white sm:text-base">
        {member.name}
      </h2>
    </article>
  );
}

export function CoordinatorCard({
  member,
  className = "slide-up",
}: {
  member: Member;
  className?: string;
}) {
  return (
    <article className={`${className} w-full overflow-hidden rounded-2xl text-center`}>
      {/* Header: jabatan */}
      {member.role ? (
        <h3 className="bg-my-primary px-3 py-2 font-roboto text-sm font-semibold text-white sm:text-base">
          {member.role}
        </h3>
      ) : null}

      {/* Foto tanpa padding, menyatu dengan header dan footer */}
      <Img className="block h-auto w-full object-contain" src={member.image} alt={member.name} />

      {/* Footer: nama anggota */}
      <h2 className="bg-my-primary px-3 py-2 text-base font-bold leading-tight text-white sm:text-lg">
        {member.name}
      </h2>
    </article>
  );
}
