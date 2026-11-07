import type { ProkerItem } from "@/config/content";
import { Img } from "@/components/ui/Img";

type ProkerGridProps = {
  title: string;
  items: ProkerItem[];
};

export function ProkerGrid({ title, items }: ProkerGridProps) {
  return (
    <section id="proker" className="pt-32">
      <div className="section-container">
        <h1 className="title mb-10 text-center">{title}</h1>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div key={`${item.image}-${item.title}`} className="slide-down w-full flex-shrink-0 lg:w-1/4">
              <div className="h-full overflow-hidden rounded-lg bg-zinc-900 shadow-lg">
                <Img src={item.image} alt={item.title} className="h-32 w-full object-cover lg:h-48" />
                <div className="p-4 lg:p-6">
                  <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                  <p className="mb-5 text-sm text-zinc-300 lg:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
