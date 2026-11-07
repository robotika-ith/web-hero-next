"use client";

import { useSyncExternalStore, useState, type CSSProperties } from "react";

import type { ProkerItem } from "@/config/content";
import { Icon } from "@/components/ui/Icon";
import { Img } from "@/components/ui/Img";

const DESKTOP_QUERY = "(min-width: 1024px)";

const subscribeToDesktop = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(DESKTOP_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
};

const getDesktopSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;
// During SSR/hydration assume the desktop layout (3 cards), matching the CSS.
const getDesktopServerSnapshot = () => true;

export function BeritaCarousel({ items }: { items: ProkerItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useSyncExternalStore(
    subscribeToDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot,
  );

  const perView = isDesktop ? 3 : 1;
  const maxIndex = Math.max(0, items.length - perView);
  // Clamp while rendering so viewport changes never leave the carousel stranded.
  const activeIndex = Math.min(currentIndex, maxIndex);

  const previous = () => setCurrentIndex(Math.max(0, activeIndex - 1));
  const next = () => setCurrentIndex(Math.min(maxIndex, activeIndex + 1));

  return (
    <div className="slide-down relative">
      {/* Navigation buttons */}
      <button
        type="button"
        onClick={previous}
        disabled={activeIndex === 0}
        aria-label="Berita sebelumnya"
        className="absolute top-1/2 -left-3 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-my-primary p-2 text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Icon name="arrowLeft" className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        disabled={activeIndex >= maxIndex}
        aria-label="Berita selanjutnya"
        className="absolute top-1/2 -right-3 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-my-primary p-2 text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Icon name="arrowRight" className="h-6 w-6" />
      </button>

      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="news-track flex transition-transform duration-300"
          style={{ "--slide-index": activeIndex } as CSSProperties}
        >
          {items.map((item) => (
            <div key={`${item.image}-${item.title}`} className="w-full flex-shrink-0 px-4 lg:w-1/3">
              <div className="h-full overflow-hidden rounded-lg bg-zinc-900 shadow-lg">
                <Img src={item.image} alt={item.title} className="h-32 w-full object-cover lg:h-48" />
                <div className="p-4 lg:p-6">
                  <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                  <p className="mb-5 line-clamp-2 text-sm text-zinc-300 lg:line-clamp-3 lg:text-base">
                    {item.description}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-button flex w-fit gap-2 px-3 py-1 lg:px-4 lg:py-2"
                    >
                      <span>Selengkapnya</span>
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
