# Design Brief — The Digital Observatory

> Load this file when doing UI/design work. Not needed for routine bug fixes or build issues.

---

## The Mission (What Must Stay)

The site has three domains — these are sacred. Everything else is yours to reimagine:

- **Earth** (`/earth`) — Scientific methods of astronomy: time-domain, spectroscopy, radio astronomy, computational astrophysics, astrobiology, astrophotography
- **Sky** (`/sky`) — Constellations across cultures, bridging Chinese (白虎, 青龙, 北斗七星) and Western (Orion) traditions
- **Human** (`/human`) — Knowledge & philosophy: video scripts on the history and philosophy of astronomy, reading notes from Hawking, Tyson, Popper, and others

---

## Design Direction — Think Bigger

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

The current components and CSS tokens are a first pass. **You have full permission to:**
- Rewrite, delete, or replace any component
- Throw out the entire CSS system and start fresh
- Restructure the `app/` directory however makes sense
- Change the navigation model entirely
- Introduce new layout patterns, page transitions, anything

**The only thing that stays is the three-domain content mission.** Everything visual and structural is fair game.

---

## How to Work With Me on Design

### Give Me Direction Like This

- ❌ "Add a gradient to the header"
- ✅ "The header should feel like looking up at the night sky from an observatory dome"

- ❌ "Make the Orion page better"
- ✅ "The Orion page should tell the story of how this constellation appears in both Greek and Chinese astronomy — maybe with a constellation map that draws itself"

### I'll Push Creative Ideas

I'll suggest things you might not have thought of. If I go too far, just say "too much, tone it down." If I'm being too conservative, say "go bigger."
