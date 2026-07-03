# The Digital Observatory

> 天地人 — A personal observatory of Earth, Sky, and Human knowledge.
> Exploring the universe through science, constellations across cultures, and philosophy.
> Built as a digital garden that feels like walking through an ancient Chinese observatory
> under the stars.

---

## The Mission (What Must Stay)

The site has three domains — these are sacred. Everything else is yours to reimagine:

- **Earth** (`/earth`) — Scientific methods of astronomy: time-domain, spectroscopy, radio astronomy, computational astrophysics, astrobiology, astrophotography
- **Sky** (`/sky`) — Constellations across cultures, bridging Chinese (白虎, 青龙, 北斗七星) and Western (Orion) traditions
- **Human** (`/human`) — Knowledge & philosophy: video scripts on the history and philosophy of astronomy, reading notes from Hawking, Tyson, Popper, and others

---

## Tech Stack (Current)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, RSC by default) |
| UI | React 19 + TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Icons | lucide-react |
| Fonts | Geist Sans + Geist Mono (via next/font/google) |
| Package | npm |

**You can add libraries** if they serve the vision — animation libraries (framer-motion), Chinese font loading, canvas-based star fields, whatever the design calls for. Just ask before adding anything heavy.

---

## Design Direction — Think Bigger

The current site (written by Gemini) is a decent scaffold but **too plain** — white background, black text, minimal ornament. It feels like a Notion page, not an observatory. We're building something much richer.

### The Vibe We Want

Imagine: **Dunhuang star charts meet a modern planetarium.** Ancient Chinese astronomy mapped the heavens with exquisite precision and artistry. The site should feel like that tradition — scholarly but wondrous, precise but beautiful.

### Visual Ambition

- **Deep, rich colors** — not just ink blacks and paper whites. Deep space indigos, nebula purples, warm brass/gold for Chinese elements, cinnabar red accents. The night sky is never just black.
- **Texture and atmosphere** — subtle star fields, constellation line drawings, ink-wash gradients, the feeling of depth and vastness
- **Chinese design elements** — traditional constellation diagrams (星图), the 28 Mansions (二十八宿), four symbols (四象: Azure Dragon, White Tiger, Vermilion Bird, Black Tortoise), ink-brush aesthetic where appropriate
- **Typography with character** — Geist is fine for body text but headings could use something with more presence. Chinese text alongside English where it adds cultural depth
- **Motion with purpose** — slow parallax on star backgrounds, constellation lines that draw themselves as you scroll, gentle fades. Not flashy — meditative
- **Dark by default** — an observatory is best experienced in the dark. The site should default to a deep space background, with light mode as an option, not the other way around

### Reference Aesthetics
- Dunhuang star maps (敦煌星图) — the oldest known pictorial star chart
- Song dynasty astronomical texts
- Modern planetarium projection design
- The stylized constellation art in old celestial atlases (uranometria)
- Japanese/Chinese ink wash painting (水墨画) — the way gradients fade into emptiness

### Existing Code is a Sketch, Not a Constraint

The current components (`SectionBlock`, `SectionIntro`, etc.) and CSS tokens are Gemini's first pass. **You have full permission to:**
- Rewrite, delete, or replace any component
- Throw out the entire CSS system and start fresh
- Restructure the `app/` directory however makes sense
- Change the navigation model entirely
- Introduce new layout patterns, page transitions, anything

**The only thing that stays is the three-domain content mission.** Everything visual and structural is fair game.

---

## How to Work With Me on This Project

### I Am Your Creative Collaborator

Don't just give me specs — tell me about the *feeling* you want. "Make it feel like an ancient star chart" is a better prompt than "add a dark background." I'll propose visual directions, you react, we iterate.

### Give Me Direction Like This

- ❌ "Add a gradient to the header"
- ✅ "The header should feel like looking up at the night sky from an observatory dome"

- ❌ "Make the Orion page better"
- ✅ "The Orion page should tell the story of how this constellation appears in both Greek and Chinese astronomy — maybe with a constellation map that draws itself"

### I'll Push Creative Ideas

I'll suggest things you might not have thought of. If I go too far, just say "too much, tone it down." If I'm being too conservative, say "go bigger."

### Learn As We Build

You're an incoming CMU freshman. Every time I write code, ask me to explain *why* I did it that way. I'll break down the thinking — design rationale, engineering trade-offs, CSS tricks, React patterns. This isn't just about getting a website; it's about becoming a better developer.

---

## Development

```bash
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Image Workflow

I can't browse the web and download images. Here's the pattern:
- **I suggest** → "This section would benefit from a public-domain image of the Crab Nebula"
- **You source** → Download from NASA, ESA, Wikipedia Commons, Unsplash, or your own photos
- **You place** → Save to `public/images/`
- **I wire up** → Next.js `<Image>` with proper optimization, sizing, and layout

For things I CAN generate: SVG star maps, constellation diagrams, decorative Chinese patterns, ink-wash style gradients — all of these are code, and I can write them directly.

---

## Current Status

*Updated per session — 3–5 bullets on what's done and what's next.*

### Done (2025-07-03)
- **Homepage redesign — NASA-style magazine layout**: compact hero → featured story card → asymmetric 12-col article grid (6 cards) → 3 horizontal domain banner cards with accent borders
- New components: `ArticleCard` (hero/standard/topic variants), `CardThumbnail` (SVG/CSS thumbnails — starfield, constellation, nebula, dot-grid), `SectionHeader`
- Card hover: image-zoom-only interaction (scale 1.05, no lift/shadows) — pure NASA pattern
- Staggered framer-motion entrance animations (sections → grid → individual cards)
- 7 video script stubs filled in with `SectionIntro` (were 0-byte empty files breaking build)
- Layout widened to `max-w-6xl` for magazine feel
- **Image system wired up**: all 7 homepage cards now use real photos from `public/images/`
  - Upgraded `<img>` → Next.js `<Image>` with `fill`, responsive `sizes`, and `priority` preloading on the hero card
  - All images follow kebab-case naming convention
  - Image mapping: hero (observatory dome), Dawn of Reason (stones at solstice), Brief History of Time (Hubble Deep Field), Orion (Orion Nebula), Astrophysics (spiral galaxy), East Meets West (Carina Nebula), Logic of Sci Discovery (telescopes at dawn)
  - Grid reordered: "Logic of Scientific Discovery" promoted to `featured: true`, sitting alongside "Dawn of Reason" as twin anchor cards on the top row
- Card thumbnail fallback: when `image` is set, it renders a real photo; when absent, falls back to generated SVG/CSS thumbnail (still available for future use)

### Still Stubs (needs content)
- **Earth**: time-domain, spectroscopy, multi-messenger, computation, astrobiology, astrophotography
- **Sky**: Azure Dragon (青龙), White Tiger (白虎), Big Dipper (北斗七星), Orion
- **Human**: 3 reading notes (Hawking, Tyson, Popper)
- Sky index page and Earth index page are minimal
