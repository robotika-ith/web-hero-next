This is the Next.js port of the HERO static site from `../web-hero`.

# HERO — Habibie Engineering Robotic of Organization

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Project structure

```
app/
  layout.tsx              # fonts, metadata, header/footer
  page.tsx                # home page
  angkatan/page.tsx       # /angkatan
  divisi/[slug]/page.tsx  # /divisi/inti, riset, psdm, humas
  globals.css             # Tailwind v4 theme, keyframes, component classes
components/
  layout/                 # Header (mobile menu), Footer
  sections/               # Contact, Proker grid, Berita carousel
  divisions/              # shared division page view
  angkatan/               # /angkatan page view
  ui/                     # Icon, Img, Segments
config/
  content.ts              # ALL page copy, images, navigation and cards
public/assets/            # images copied from ../web-hero/src/assets
```

## Editing content

Everything shown on the pages comes from [`config/content.ts`](config/content.ts):

- `siteConfig` — name, description, logo, footer/background images, copyright.
- `socials` — Instagram/TikTok/YouTube links used in the contact section and footer.
- `navigation` — header dropdown, angkatan link and footer links.
- `homePage` — hero, about, sambutan, visi/misi, filosofi logo and berita cards.
- `divisions` — one entry per division page (hero, tupoksi, structure, program kerja).
  Member photos keep their natural height (no cropping); set `memberLayout: "masonry"`
  on a division page to render its member list as variable-height masonry columns.
- `angkatanPage` — the `/angkatan` page (hero, intro, and one entry per angkatan).

Text segments are arrays of `{ text, className }` so words can be highlighted with
Tailwind classes, e.g. `{ text: "H", className: "text-my-primary" }`.

## Notes on the conversion

- The original Alpine.js interactions were replaced with React:
  header mobile menu, daisyUI dropdowns (CSS) and the berita carousel.
- Scroll-reveal animations (`slide-left`, `slide-right`, `slide-up`, `slide-down`)
  are kept as CSS `view()` animations in `app/globals.css`.
- Styles were ported from `src/styles/input.css` to `app/globals.css`
  (Tailwind v4 + daisyUI).
- Asset paths changed from `/src/assets/...` to `/assets/...`.
