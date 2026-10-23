# The Digital Observatory

> **天地人** — Earth, Sky, and Human. A personal observatory of astronomy, constellation lore, and the philosophy of science.

An immersive, dark-themed web experience that bridges Chinese and Western astronomical traditions. Think: Dunhuang star charts meet a modern planetarium.

**[Visit the observatory](https://digital-observatory.vercel.app/)**

---

## Three Domains

| Domain | Path | What's Inside |
|--------|------|---------------|
| **Earth** | `/earth` | Six scientific methods of astronomy — spectroscopy, time-domain, multi-messenger, computational astrophysics, astrobiology, astrophotography |
| **Sky** | `/sky` | Constellations across cultures — Orion (Greek) alongside Azure Dragon (青龙), White Tiger (白虎), and Big Dipper (北斗七星) from Chinese tradition |
| **Human** | `/human` | Knowledge and philosophy — reading notes on Hawking, Tyson, Popper; video scripts on the history and philosophy of astronomy |

Each content page is a **~1,000–1,500 word read** (~5–7 minutes) with custom visuals and scroll-driven storytelling.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, React Server Components) |
| UI | React 19 + TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Icons | lucide-react |
| Animation | framer-motion |
| Fonts | Geist Sans + Geist Mono (`next/font/google`) |
| Package manager | npm |

---

## Getting Started

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Project Structure

```
app/                         # Next.js App Router (pages, layouts, global styles)
├── layout.tsx               # Root layout — dark theme, StarField background, Nav + Footer
├── page.tsx                 # Homepage — magazine-style layout with domain cards
├── globals.css              # CSS custom properties, dark theme tokens
├── earth/                   # Scientific method pages (6 built)
│   ├── spectroscopy/
│   ├── time-domain/
│   ├── multi-messenger/
│   ├── computation/
│   ├── astrobiology/
│   └── astrophotography/
├── sky/                     # Constellation pages (4 built)
│   ├── orion/               # Greek + Chinese cross-cultural article
│   ├── azure-dragon/
│   ├── white-tiger/
│   └── big-dipper/
└── human/                   # Reading notes + video scripts (3 + 7 stubs)
    ├── reading-notes/
    │   ├── brief-history-of-time/
    │   ├── astrophysics-for-people-in-a-hurry/
    │   └── logic-of-scientific-discovery/
    └── video-scripts/       # 7 scripts to be filled

components/                  # React components, co-located by feature
├── home/                    # Homepage — domain cards, article data
├── orion/                   # Orion-specific — constellation SVG, comparison panel, parallax hero
├── white-tiger/             # White Tiger — mansion diagram SVG, hero
├── big-dipper/              # Big Dipper — clock visualization, cross-cultural diagram
├── earth/                   # Earth pages — method-specific heroes, scientific diagrams
├── layout/                  # Shared — Nav, Header, Footer, LayoutShell
├── navigation/              # BackList navigation
├── cards/                   # ArticleCard, CardThumbnail
├── sections/                # SectionHeader, SectionIntro, SectionBlock
├── StarField.tsx            # Animated deep-space background
└── ContentBackground.tsx    # Page-level texture/atmosphere wrapper

public/images/               # Static images — NASA, ESA, public-domain astronomy
content/                     # Markdown / structured content
```

---

## Design Philosophy

**Dark by default.** An observatory is best experienced in the dark — the site uses deep space indigos, nebula purples, and Chinese gold/cinnabar accents. Light mode is an option, not the default.

**Content-first, design-serves-the-story.** Pages are built around narrative arcs with custom visuals — animated SVGs, scroll-driven diagrams, parallax star fields. The design brief (`DESIGN_BRIEF.md`) has the full creative direction.

**Cross-cultural by nature.** Chinese constellation names (参宿, 青龙, 白虎) appear alongside their Western counterparts. The site treats both traditions as equally rich ways of mapping the sky.

---

## Image Workflow

Images live in `public/images/`. The workflow for adding them:

1. **I suggest** → "This section would benefit from a NASA image of the Crab Nebula"
2. **You source** → Download from NASA, ESA, Wikipedia Commons, Unsplash, or your own photos
3. **You place** → Save to `public/images/`
4. **I wire up** → Next.js `<Image>` with optimization, responsive sizing, and layout

---

## Current Status

### Done
- Homepage with NASA-style magazine layout, staggered animations
- All 6 Earth pages built with custom animated heroes and scientific diagrams
- All 4 Sky constellation pages: Orion, Azure Dragon, White Tiger, Big Dipper
- StarField background, layout shell, navigation components
- Image system wired throughout

### In Progress
- Filling Human stubs (3 reading notes + 7 video scripts)

### Up Next
- Richer navigation design
- Page transition animations
- Search / index of all content

---

## Design Brief

For creative direction when working on UI/design, see **[DESIGN_BRIEF.md](./DESIGN_BRIEF.md)**. The three-domain mission is sacred — everything visual and structural is open to reimagination.
