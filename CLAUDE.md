# The Digital Observatory

> 天地人 — A personal observatory of Earth, Sky, and Human knowledge.
> Design vision and creative direction live in `DESIGN_BRIEF.md` — read it when doing UI/design work.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, RSC by default) |
| UI | React 19 + TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Icons | lucide-react |
| Animation | framer-motion |
| Fonts | Geist Sans + Geist Mono (via next/font/google) |
| Package | npm |

**Ask before adding heavy libraries.**

---

## Development

```bash
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Image Workflow

- **I suggest** → "This section would benefit from a public-domain image of the Crab Nebula"
- **You source** → Download from NASA, ESA, Wikipedia Commons, Unsplash, or your own photos
- **You place** → Save to `public/images/`
- **I wire up** → Next.js `<Image>` with proper optimization, sizing, and layout

---

## Current Status

*Updated per session — keep to 3–5 bullets each.*

### Done
- **Homepage redesign — NASA-style magazine layout** (2025-07-03): compact hero → featured story card → asymmetric article grid with staggered framer-motion animations
- **Image system wired up** (2025-07-03): all homepage cards use Next.js `<Image>` with `fill`, responsive `sizes`, and `priority` preloading
- **Orion constellation page built** (`/sky/orion`) (2025-07-03): first fully-built content page, cross-cultural article with Greek + Chinese (参宿) perspectives
- **Spectroscopy page built** (`/earth/spectroscopy`) (earlier): 530-line page with SpectroscopyHero + SpectrumDiagram
- **All 6 Earth pages built** (2026-07-29): Time-Domain, Spectroscopy, Multi-Messenger, Computational, Astrobiology, Astrophotography — each with animated hero + scroll-driven diagram + discovery-first narrative. 12 new components in `components/earth/`.

### Still Stubs
- **Sky**: Azure Dragon (青龙), White Tiger (白虎), Big Dipper (北斗七星)
- **Human**: 3 reading notes (Hawking, Tyson, Popper) + 8 video scripts

### Up Next
1. Fill remaining Sky stubs
2. Fill Human stubs — reading notes + video scripts
3. Richer navigation design
4. Page transition animations
