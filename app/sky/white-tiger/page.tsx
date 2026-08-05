import type { Metadata } from "next";
import { Compass, Building2 } from "lucide-react";
import AnimatedSection from "@/components/orion/AnimatedSection";
import SkyNextPage from "@/components/SkyNextPage";
import ChineseSeal from "@/components/orion/ChineseSeal";
import ComparisonPanel from "@/components/orion/ComparisonPanel";
import TigerHero from "@/components/white-tiger/TigerHero";
import TigerMansionsSVG from "@/components/white-tiger/TigerMansionsSVG";

export const metadata: Metadata = {
  title: "White Tiger — Guardian of the Western Sky | The Digital Observatory",
  description:
    "How the White Tiger of Chinese astronomy embodies autumn, metal, and the precision of endings — and why the Pleiades, a tiny star cluster at the Tiger's head, is one of the most universally observed objects in the sky.",
};

/**
 * White Tiger (白虎) constellation page.
 *
 * Structure: Tiger stripe hero → intro → Four Symbols context →
 * seven mansions walkthrough → Pleiades deep-dive → autumn/metal
 * cosmology → Shen bridge to Orion → cross-cultural Pleiades survey →
 * conclusion.
 *
 * Design direction: gold/white metallic palette, sharp angular
 * tiger-stripe visual language, autumn aesthetic. Distinct from
 * Orion's circular telescope view and the Dragon's jade-green curves.
 *
 * The White Tiger is about endings, precision, and judgment — the
 * metal blade that harvests the crop, the western sky where the
 * sun sets, the season of gathering and decline. The page reflects
 * this through sharper, more crystalline visuals.
 */
export default function WhiteTigerPage() {
  return (
    <main>
      {/* ====================================================
          Hero — animated tiger stripes, 虎 character, gold accents
          ==================================================== */}
      <TigerHero />

      {/* ====================================================
          Content panel — reading area
          ==================================================== */}
      <div
        className="max-w-3xl mx-auto px-8 md:px-12 py-20 md:py-28 my-16 rounded-2xl"
        style={{
          background: "rgba(16, 22, 38, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow:
            "0 0 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          fontFamily: "var(--font-merriweather), Georgia, serif",
        }}
      >
        {/* ================================================
            Article Title
            ================================================ */}
        <AnimatedSection>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-4"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Guardian of Endings
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How the White Tiger became the celestial symbol of autumn,
            metal, and precision — and why a tiny cluster of stars at
            the tiger&apos;s head is one of the most watched objects
            in human history.
          </p>
          {/* Decorative rule — warm gold */}
          <div
            className="mt-8 mb-14 h-px"
            style={{
              width: "min(80px, 20vw)",
              background:
                "linear-gradient(to right, #c4a35a, transparent)",
              opacity: 0.5,
            }}
          />
        </AnimatedSection>

        {/* ================================================
            Section 1: Introduction
            ================================================ */}
        <AnimatedSection delay={0.1}>
          <p
            className="text-lg md:text-xl leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            In late October, go outside after sunset and face west. The
            summer constellations — Scorpius, Sagittarius, the blazing
            band of the Milky Way — are sinking toward the horizon. The
            air has turned sharp. Overhead, a new set of stars is taking
            possession of the sky: the autumn constellations. In Chinese
            astronomy, this entire quadrant — the western sky, the season
            of harvest and decline — belongs to a single creature: the
            White Tiger.
          </p>

          <p
            className="mt-6 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            The White Tiger (白虎, Bái Hǔ) is one of the Four Symbols of
            Chinese astronomy — the guardian of the West, the embodiment
            of autumn, the creature of metal and precision. Where the Azure
            Dragon of the East represents spring growth, new beginnings, the
            rising energy of wood, the White Tiger represents the opposite:
            the cutting blade of autumn, the judgment of endings, the
            gathering-in before winter. If the Dragon is birth, the Tiger
            is consequence.
          </p>

          <p
            className="mt-4 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            This duality is ancient. In a Neolithic tomb at Xishuipo in
            Henan Province — dated to roughly <strong>6,000 years ago</strong> —
            archaeologists found a burial with clam shells arranged in the
            shape of a dragon on the east side of the body and a tiger on
            the west. The pattern predates writing, predates the dynasties,
            predates almost everything we think of as &ldquo;Chinese
            civilization.&rdquo; Long before there was an empire to mirror,
            there was a dragon and a tiger — guarding the directions,
            holding the cosmos in balance.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 2: The Four Symbols — The Tiger's Place
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Tiger Among Guardians
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "#c4a35a" }}
          >
            One of Four, Paired With the Dragon
          </h3>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The Four Symbols (四象, Sì Xiàng) are one of the most durable
              organizing systems in human intellectual history. They appear
              in the earliest surviving Chinese texts — the <em>Book of
              Documents</em> (尚书), the <em>Rites of Zhou</em> (周礼) —
              and they have been continuously used for over three thousand
              years. They are not just constellations. They are a complete
              cosmology: direction, season, element, color, and moral
              character, all bound together.
            </p>

            <p>
              Each guardian governs seven of the 28 lunar mansions —
              sectors of the sky defined by the Moon&apos;s monthly path,
              each roughly corresponding to one night of the sidereal month.
              The White Tiger&apos;s domain is the western quadrant,
              spanning autumn, the metal element, and the color white:
            </p>

            {/* Four Symbols — mini grid */}
            <div className="grid grid-cols-2 gap-4 my-6 not-prose">
              {[
                { name: "Azure Dragon", chinese: "青龙", dir: "East", season: "Spring", element: "Wood", color: "#4a9e8f" },
                { name: "Vermilion Bird", chinese: "朱雀", dir: "South", season: "Summer", element: "Fire", color: "#c41e3a" },
                { name: "White Tiger", chinese: "白虎", dir: "West", season: "Autumn", element: "Metal", color: "#c4a35a", highlight: true },
                { name: "Black Tortoise", chinese: "玄武", dir: "North", season: "Winter", element: "Water", color: "#5b8db8" },
              ].map((s) => (
                <div
                  key={s.name}
                  className="rounded-lg p-4"
                  style={{
                    background: s.highlight
                      ? "rgba(196, 163, 90, 0.08)"
                      : "rgba(20, 27, 45, 0.5)",
                    border: s.highlight
                      ? "1px solid rgba(196, 163, 90, 0.3)"
                      : "1px solid rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <div className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: s.color }}>
                    {s.dir}
                  </div>
                  <div className="text-base font-medium mb-0.5" style={{ color: "var(--star-white)" }}>
                    {s.name}
                  </div>
                  <div className="text-sm" style={{ color: "var(--star-dim)" }}>
                    {s.chinese} · {s.season} · {s.element}
                  </div>
                </div>
              ))}
            </div>

            <p>
              The White Tiger governs the west and autumn. Its element is
              metal (金, jīn) — the substance of blades, bells, and
              precision instruments. Its color is white (白, bái), the color
              of autumn frost, of bleached bone, of the setting sun drained
              of color. In the Five Elements cycle (五行, Wǔ Xíng), metal
              <em> cuts</em> wood — the Tiger overcomes the Dragon in the
              cosmic order. This is not a story of good versus evil. It is
              a story of balance. Growth must be followed by harvest.
              Rising must be followed by setting. Every beginning contains
              within it the seed of its ending — and the White Tiger is
              the guardian of that necessary conclusion.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 3: The Seven Mansions
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Seven Mansions, One Tiger
          </h2>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The White Tiger&apos;s seven mansions span a vast sweep of the
              autumn sky — from Andromeda and Pisces in the far west, through
              Aries and Taurus, down to the great figure of Orion. Each mansion
              is a small asterism of between three and sixteen stars, and each
              carried astrological and calendrical meaning for the imperial court.
            </p>

            <p>
              Unlike the Azure Dragon — whose body follows a clear organic
              logic, horns to tail — the White Tiger&apos;s mansions are defined
              more by their <em>position</em> in the western quadrant than by
              visual resemblance to a tiger&apos;s anatomy. This is an important
              reminder: the Four Symbols were cosmological organizing systems
              first, pictures second. The tiger was mapped onto the stars, not
              discovered in them.
            </p>

            {/* IMAGE SUGGESTION: Wide star chart or illustration showing the western
                sky in autumn, with the seven mansions marked. The Pleiades (Mao)
                and Orion (Shen) should be the most prominent features. Source from
                Wikimedia Commons — historical star charts from the Dunhuang caves
                or a modern recreation of the Chinese sky. */}
          </div>

          {/* Seven Mansions — each as a styled block */}
          <div className="mt-10 space-y-6">
            {[
              {
                num: 1,
                name: "奎 (Kuí) — Legs",
                star: "η Andromedae, ζ Andromedae",
                desc: "The tiger's hind legs, formed by ~16 stars sprawling across Andromeda and Pisces. This was a mansion of military significance — it governed the state's canals, its treasury, and its capacity for war. In astrological terms, events in Kui were read as omens about border security and the flow of resources through the empire.",
                accent: "#c4a35a",
              },
              {
                num: 2,
                name: "娄 (Lóu) — Bond",
                star: "β Arietis, γ Arietis, α Arietis (Hamal)",
                desc: "Three stars in Aries. The name means 'lasso' or 'bond,' and this mansion was associated with ritual sacrifice, binding, and the proper performance of ceremony. Hamal, the brightest star in Aries, anchors this mansion.",
                accent: "#c4a35a",
              },
              {
                num: 3,
                name: "胃 (Wèi) — Stomach",
                star: "35 Arietis, 39 Arietis, 41 Arietis",
                desc: "Three dim stars straddling Aries and Taurus. The stomach stored grain — this mansion governed granaries, food reserves, and the harvest bounty. A fitting mansion for autumn, the season of gathering in.",
                accent: "#c4a35a",
              },
              {
                num: 4,
                name: "昴 (Mǎo) — Hairy Head",
                star: "The Pleiades (M45)",
                desc: "The tiger's mane — and the only star cluster among the 28 mansions. The Pleiades are a tight group of young, hot blue stars, visible as a tiny dipper-shaped smudge even from light-polluted cities. In Chinese, 昴星团 (Mǎo Xīng Tuán) means 'the Hairy Star Cluster.' The character 昴 itself — a sun (日) pierced by a line — suggests something bristling, prickly, hairlike. This mansion marked the autumn equinox and was associated with tears, mourning, and the onset of cold. More on the Pleiades below.",
                accent: "#e8e6e3", // white/silver — the Pleiades are distinct
                highlight: true,
              },
              {
                num: 5,
                name: "毕 (Bì) — Net",
                star: "Aldebaran (α Tauri), the Hyades",
                desc: "Eight stars in Taurus forming a V-shaped hunting net. Aldebaran, a red giant 65 light-years away, is the bright orange 'eye' of the net. This mansion governed hunting, military campaigns, and rainfall — a net catches things, including omens. The Hyades star cluster fills out the shape.",
                accent: "#c4a35a",
              },
              {
                num: 6,
                name: "觜 (Zī) — Turtle Beak",
                star: "λ Orionis, φ¹ Orionis, φ² Orionis",
                desc: "Three small stars near Orion's head (the Meissa region). The smallest and least prominent mansion of the seven. The name 'Turtle Beak' refers to its shape — a tiny angular asterism — and it marked the tiger's muzzle or snout.",
                accent: "#c4a35a",
              },
              {
                num: 7,
                name: "参 (Shēn) — Three Stars",
                star: "Alnitak, Alnilam, Mintaka (Orion's Belt)",
                desc: "The core of the White Tiger — the broad chest and powerful body. The Three Stars of Shen are among the most recognizable features in the entire night sky. This mansion's story — Greek hunter, Chinese minister, stellar nursery — is told in full on our Orion page. Here, it serves as the anchor of the tiger, the massive body from which the creature draws its power. Shen was the westernmost mansion, where the Tiger's domain ended and a new quadrant began.",
                accent: "#c4a35a",
                highlight: true,
              },
            ].map((m) => (
              <div
                key={m.num}
                className="flex gap-5 rounded-lg p-5"
                style={{
                  background: m.highlight
                    ? "rgba(196, 163, 90, 0.06)"
                    : "rgba(20, 27, 45, 0.4)",
                  border: m.highlight
                    ? "1px solid rgba(196, 163, 90, 0.2)"
                    : "1px solid rgba(255, 255, 255, 0.04)",
                  borderLeft: `2px solid ${m.accent}`,
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
                  style={{
                    background: `${m.accent}22`,
                    color: m.accent,
                    fontFamily: "var(--font-geist-mono), monospace",
                  }}
                >
                  {m.num}
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1" style={{ color: "var(--star-white)" }}>
                    {m.name}
                  </h4>
                  <p className="text-xs mb-1.5 tracking-wide uppercase" style={{ color: m.accent, opacity: 0.7 }}>
                    {m.star}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--star-dim)" }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tiger Mansions SVG diagram */}
          <div className="my-12 flex justify-center">
            <TigerMansionsSVG color="#c4a35a" showLabels />
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 4: The Pleiades — Deep Dive
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Hairy Head of the Tiger
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "#e8e6e3" }}
          >
            The Pleiades — A Star Cluster Like No Other
          </h3>

          {/* IMAGE SUGGESTION: A high-resolution Hubble or ground-based image of
              the Pleiades (M45). The blue reflection nebulosity around the stars
              makes for a stunning visual. Source from NASA/ESA Hubble archive or
              a good astrophotograph from Wikimedia Commons. Place at
              public/images/pleiades.webp and use with Next.js Image. */}

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              Among the 28 lunar mansions, 昴宿 (Mǎo Xiù) stands alone. Every
              other mansion is defined by a single bright star or a small
              asterism of two or three. But Mao is different — it is the
              <strong> Pleiades</strong>, a glittering cluster of over a thousand
              stars (though only six or seven are visible to the naked eye), all
              born from the same collapsing cloud of gas and dust about 100
              million years ago. They are 444 light-years away. They are young —
              they formed while dinosaurs still walked the Earth. They are
              traveling through space together, bound by gravity, a family of
              blue-white suns moving as one.
            </p>

            <p>
              The Chinese name is wonderfully direct: 昴 (mǎo) — a character
              that combines the sun radical (日) with a piercing line, suggesting
              something prickly, bristling, hairy. The full term 昴星团 means
              &ldquo;the Hairy Star Cluster.&rdquo; When you look at the
              Pleiades through binoculars, you understand immediately. It is not
              a single point of light. It is a tight spray of tiny diamonds, a
              smudge that resolves into individual stars the longer you look. To
              the ancient Chinese, it looked like the mane of a great beast —
              the fuzzy, bristling head of the White Tiger.
            </p>

            <p>
              The Japanese preserved the character and the meaning. The Pleiades
              is <strong>昴 (Subaru)</strong> in Japanese — directly inherited
              from the Chinese astronomical tradition. The Subaru car company&apos;s
              logo is a stylized representation of the six brightest Pleiades
              stars. It is one of the few instances where an ancient Chinese
              star name has entered global popular culture through a different
              language and a completely unexpected route.
            </p>

            <blockquote
              className="my-8 pl-5 py-1 italic leading-[1.85]"
              style={{
                color: "var(--human-accent)",
                borderLeft: "2px solid rgba(196, 163, 90, 0.35)",
              }}
            >
              <p className="text-lg">
                &ldquo;The Mao mansion governs the autumn equinox. When its
                stars are dim, the harvest will be poor. When they are bright
                and close together, grain will be abundant.&rdquo;
              </p>
              <footer
                className="mt-3 text-sm not-italic"
                style={{ opacity: 0.5 }}
              >
                — Records of the Grand Historian (Shiji), &ldquo;Treatise on
                the Celestial Offices&rdquo; (天官书), c. 94 BCE
              </footer>
            </blockquote>

            <p>
              The Pleiades were a calendar star of the first order. Their
              heliacal rising — the first appearance before dawn after months
              hidden behind the Sun — marked the beginning of the agricultural
              year in cultures across the Northern Hemisphere. When the Pleiades
              rose in the pre-dawn sky, it was time to plant. When they set with
              the Sun in autumn, it was time to harvest. The poet Hesiod, writing
              in Greece around 700 BCE, captured this in <em>Works and Days</em>:
              &ldquo;When the Pleiades, daughters of Atlas, are rising, begin
              your harvest; and plough when they are setting.&rdquo; The same
              observation, the same calendar function, two civilizations apart.
            </p>

            <p>
              This is not a coincidence. The Pleiades are one of the most
              universally recognized objects in the sky. Every human culture
              that looked up noticed this tiny cluster — and almost every one
              of them used it for timekeeping. We&apos;ll return to this
              remarkable cross-cultural story below.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 5: Autumn, Metal, Precision
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Metal That Cuts the Harvest
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "#c4a35a" }}
          >
            Why the Tiger Is White — Cosmology of the Five Elements
          </h3>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              Why is the Tiger white? Why is its element metal? The answers lie
              in the Five Elements (五行, Wǔ Xíng) — a system of correlative
              cosmology that shaped every aspect of Chinese thought for over two
              millennia, from medicine to music to governance to the stars.
            </p>

            <p>
              In the Wǔ Xíng, each element is associated with a direction,
              a season, a color, a taste, an organ in the body, a musical note,
              and a moral quality — all linked in a web of cosmic correspondence.
              The system is not about physical substances (metal as the material
              we mine). It is about <em>phases of transformation</em> — the
              dynamic patterns through which qi (气, vital energy) cycles.
            </p>

            {/* Metal element quick reference */}
            <div className="my-8 rounded-lg p-6" style={{ background: "rgba(196, 163, 90, 0.06)", border: "1px solid rgba(196, 163, 90, 0.15)" }}>
              <div className="text-xs tracking-[0.18em] uppercase mb-4" style={{ color: "#c4a35a" }}>
                The Metal Phase (金)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm" style={{ color: "var(--star-dim)" }}>
                {[
                  { label: "Direction", value: "West" },
                  { label: "Season", value: "Autumn" },
                  { label: "Color", value: "White (白)" },
                  { label: "Climate", value: "Dryness" },
                  { label: "Taste", value: "Pungent / Spicy" },
                  { label: "Organ", value: "Lungs" },
                  { label: "Virtue", value: "Righteousness (义, yì)" },
                  { label: "Action", value: "Reaping, cutting, judging" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-2">
                    <span style={{ color: "#c4a35a", opacity: 0.6 }}>{item.label}:</span>
                    <span style={{ color: "var(--star-white)", opacity: 0.85 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Metal is the phase of <strong>cutting and precision</strong>. Think
              of the autumn harvest: the grain is cut down with a metal blade. The
              growing season — the green expansion of wood (spring) and the
              blazing fullness of fire (summer) — is over. Metal brings the
              clarity of endings. It separates what is valuable (the grain) from
              what is not (the chaff). It judges. In this sense, the White Tiger
              is not a symbol of cruelty but of <em>necessary discrimination</em> —
              the sharp edge that distinguishes truth from error, harvest from
              waste, the living from the dead.
            </p>

            <p>
              This is why the Tiger — among the four guardians — is the one
              associated with righteousness (义, yì). Righteousness in the
              Confucian tradition is not passive virtue. It is the active moral
              judgment that cuts through self-interest, that makes difficult
              distinctions, that chooses the right path even when it costs
              something. The Tiger does not merely guard. It <em>discriminates</em>.
            </p>

            <p>
              The color white completes the picture. White is the absence of
              color — the blankness of a field after harvest, the frost that
              kills the last crops, the pale sky of late autumn. In the Chinese
              tradition, white is also the color of mourning. Death is not the
              opposite of life — it is life&apos;s completion, the metal blade
              that harvests what wood and fire have grown. The White Tiger
              presides over this completion. It is not feared. It is respected
              as the guardian of necessity.
            </p>

            <p>
              And here is the most elegant symmetry of all: in the Wǔ Xíng
              generating cycle, metal enriches water — the condensation on a
              cold blade, the autumn rain that returns nutrients to the soil
              for next spring&apos;s growth. The Tiger&apos;s cutting <em>feeds</em>
              what comes next. Endings are not final. They are the condition
              for new beginnings. The Dragon rises in spring because the Tiger
              harvested in autumn.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 6: Shen — The Tiger's Body
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Body of the Beast
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "#c4a35a" }}
          >
            Shen (参宿) and the Three Stars
          </h3>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The seventh and final mansion of the White Tiger — 参宿 (Shēn
              Xiù), the &ldquo;Three Stars&rdquo; — is the most famous of them
              all. These are the stars of Orion&apos;s belt: Alnitak, Alnilam,
              and Mintaka, a tight row of three brilliant blue-white supergiants.
              They form the core of the White Tiger&apos;s body, the broad chest
              from which the creature draws its strength. Where the Azure
              Dragon&apos;s heart was Antares — red, burning, passionate — the
              White Tiger&apos;s core is a trinity of cold blue fire.
            </p>

            <p>
              We have already told the story of Shen in detail on our{" "}
              <a
                href="/sky/orion"
                style={{
                  color: "#c4a35a",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                Orion page
              </a>
              : how the Greek hunter and the Chinese minister are two
              interpretations of the same stars, how the Shen-Shang (参商)
              legend encodes the astronomical fact that Orion and Scorpius lie
              on opposite sides of the sky, how Du Fu used this separation as a
              metaphor for friends who can never meet. The White Tiger page
              does not need to retell that story. But it needs to place Shen in
              context — as the anchor mansion of the Tiger, the endpoint of the
              seven-mansion arc, the massive body that gives the guardian its
              physical presence.
            </p>

            <p>
              The constellation that Western astronomy identifies as Orion spans
              a vast region of the winter sky. But the Chinese mansion 参 (Shen)
              is more specific — it centers on the three belt stars and the
              bright stars immediately around them: Betelgeuse (参宿四, the
              Fourth Star of Shen), Rigel (参宿七, the Seventh Star), Bellatrix,
              Saiph. The numbering system — Fourth, Seventh — reminds us that
              stars in the Chinese system were not named but <em>positioned</em>,
              each assigned a place in the celestial bureaucracy like officials
              seated in a council hall.
            </p>

            <p>
              Shen marked the western boundary of the White Tiger&apos;s domain.
              Beyond it, past the next mansion, lay a new quadrant — the northern
              sky, governed by the Black Tortoise (玄武, Xuán Wǔ). The Tiger
              guarded the west. At Shen, at Orion&apos;s belt, the Tiger&apos;s
              territory ended — and winter began.
            </p>

            {/* IMAGE SUGGESTION: A wide-field astrophotograph of the Orion
                constellation, showing the belt, Betelgeuse, Rigel, and the
                Orion Nebula. Different from the circular Orion Nebula image
                used on the Orion page — this one should be wide-field to show
                the full constellation context. Source from NASA/ESA. */}
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 7: Cross-Cultural — The Pleiades
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Six Stars, A Thousand Stories
          </h2>
          <p
            className="mb-12 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The Pleiades may be the single most universally observed and
            mythologized object in the night sky. Every culture that developed
            astronomy noticed this tiny cluster — and nearly every culture
            saw something deeply significant in it.
          </p>

          {/* Pleiades cross-cultural grid */}
          <div className="my-10 space-y-4">
            {[
              {
                culture: "Chinese",
                name: "昴宿 (Mǎo Xiù)",
                story: "The Hairy Head — the mane of the White Tiger. Associated with the autumn equinox, tears, and the onset of cold.",
              },
              {
                culture: "Japanese",
                name: "昴 (Subaru)",
                story: "The same character, the same meaning: 'gathered together.' The six brightest stars form the Subaru car logo — one of the few ancient astronomical symbols still in daily commercial use.",
              },
              {
                culture: "Greek",
                name: "Pleiades — the Seven Sisters",
                story: "Daughters of Atlas and Pleione, pursued by Orion. Zeus placed them in the sky to escape him. Only six are clearly visible — the seventh, Merope, hid her face in shame for marrying a mortal. The 'lost Pleiad' is a motif across many cultures.",
              },
              {
                culture: "Māori",
                name: "Matariki",
                story: "The eyes of the god Tāwhirimātea, thrown into the sky in anger. The heliacal rising of Matariki marks the Māori New Year — now a public holiday in New Zealand. 'Matariki' means 'little eyes' or 'eyes of god.'",
              },
              {
                culture: "Lakota (Native American)",
                name: "The Seven Little Girls",
                story: "Seven girls who were chased by a bear. They climbed a rock that grew into the sky, becoming the Pleiades. The bear's claws scratched the rock face — creating the formation now called Devil's Tower in Wyoming.",
              },
              {
                culture: "Hindu",
                name: "Krittikā (कृत्तिका)",
                story: "The six nurses of the war god Kartikeya (also called Skanda), the son of Shiva. Each nurse is a star. In Vedic astronomy, Krittikā is the third nakshatra (lunar mansion).",
              },
              {
                culture: "Norse",
                name: "Freyja's Hens",
                story: 'The goddess Freyja\'s sacred chickens — or, in some versions, her spindle. The cluster\'s position marked the turning of the seasons in northern Europe.',
              },
              {
                culture: "Australian Aboriginal",
                name: "Kungkarangkalpa (Pitjantjatjara)",
                story: "The Seven Sisters — a group of young women being chased by a man (Orion). This story is one of the oldest continuously told narratives in the world, depicted in rock art dating back thousands of years. It is also one of the most widespread: the 'seven sisters pursued by a man' motif appears independently across Australia, the Americas, and Eurasia.",
              },
            ].map((item) => (
              <div
                key={item.culture}
                className="rounded-lg p-4"
                style={{
                  background: "rgba(20, 27, 45, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                }}
              >
                <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
                  <span className="text-sm font-medium" style={{ color: "var(--star-white)" }}>
                    {item.culture}
                  </span>
                  <span className="text-xs" style={{ color: "#c4a35a", opacity: 0.7 }}>
                    {item.name}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--star-dim)" }}>
                  {item.story}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              This is remarkable. The Pleiades are a tiny object — six or seven
              points of light, barely a degree across, invisible during the weeks
              before and after conjunction with the Sun. And yet <em>every single
              culture</em> that developed astronomy independently noticed them,
              gave them a name, attached a story, and used them for timekeeping.
              The Australian Aboriginal Seven Sisters story may be the oldest
              continuously transmitted oral narrative in human history — possibly
              as old as the last time the Pleiades had a different appearance,
              when one of its stars was noticeably brighter, an estimated 100,000
              years ago.
            </p>

            <p>
              The pattern is striking: across many of these cultures, the
              Pleiades are consistently gendered female (sisters, girls, hens,
              nurses) and they are consistently pursued or threatened by a male
              figure — Orion in the Greek story, the hunter in the Australian
              one, the bear in the Lakota one. Anthropologists have debated
              whether this represents a truly ancient shared story from before
              human migration out of Africa, or whether the cluster&apos;s
              visual character — small, tight, vulnerable-looking, pursued across
              the sky by the much larger figure of Orion — independently
              generates the same narrative everywhere. Either answer is stunning.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 8: Chinese vs Western Sky Organization
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Two Ways to Divide the Sky
          </h2>
          <p
            className="mb-12 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The White Tiger&apos;s domain spans constellations that Western
            astronomy divides into Andromeda, Aries, Taurus, and Orion. Why
            did two civilizations, looking at the same patch of sky, organize
            it so differently?
          </p>

          <ComparisonPanel
            left={{
              icon: <Compass size={22} />,
              title: "The Western Lens",
              subtitle: "Constellations as Pictures",
              accent: "var(--earth-accent)",
              accentLabel: "Western Tradition",
              children: (
                <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <strong style={{ color: "var(--star-white)" }}>
                      Figure-based.
                    </strong>{" "}
                    Each constellation is a picture — a maiden (Virgo), a
                    hunter (Orion), a bull (Taurus). The sky is a gallery
                    of mythological figures.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Ecliptic zodiac.
                    </strong>{" "}
                    The 12 zodiac constellations follow the Sun&apos;s path.
                    The Pleiades, though visually striking, are merely a
                    feature <em>within</em> Taurus — not an organizing
                    principle themselves.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Arbitrary boundaries.
                    </strong>{" "}
                    The IAU&apos;s 88 official constellations have fixed
                    boundaries — but these boundaries are modern, arbitrary
                    lines on a map. Andromeda and Aries are neighbors because
                    of a 20th-century committee decision, not a deep structural
                    logic.
                  </li>
                </ul>
              ),
            }}
            right={{
              icon: <Building2 size={22} />,
              title: "The Chinese Lens",
              subtitle: "The Sky as System and Season",
              accent: "#c4a35a",
              accentLabel: "Chinese Tradition",
              children: (
                <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <strong style={{ color: "var(--star-white)" }}>
                      Quadrant-based.
                    </strong>{" "}
                    The sky is divided into four quadrants, each governed by
                    a guardian animal. The White Tiger is not a picture <em>in</em>
                    the sky — it <em>is</em> a quarter of the sky.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Lunar, not solar.
                    </strong>{" "}
                    The 28 mansions track the Moon&apos;s monthly path — a
                    sidereal system tied to the lunar month, not the solar year.
                    The Pleiades (Mao) are an entire mansion, equal in status
                    to the Three Stars (Shen).
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Spans artificial Western boundaries.
                    </strong>{" "}
                    The Tiger&apos;s domain cuts across Andromeda, Aries, Taurus,
                    and Orion — a radically different organization that reveals
                    how the &ldquo;obvious&rdquo; Western constellations are
                    themselves a cultural construct.
                  </li>
                </ul>
              ),
            }}
          />

          <div className="mt-12 space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The comparison reveals something deeper than just two different
              star maps. It reveals two fundamentally different ideas about
              what the sky <em>is for</em>. In the Western tradition, the
              constellations are a gallery of stories — a way to remember
              myths, to navigate, to mark the zodiac for astrology. In the
              Chinese tradition, the Four Symbols and 28 mansions are a
              <strong> system</strong> — a way to organize time, correlate
              celestial and terrestrial events, and maintain the cosmic order
              that sustained the empire.
            </p>

            <p>
              The White Tiger, in this view, is not just a picture of a tiger.
              It is a <strong>functional quadrant</strong> — the western seventh
              of the sky, the autumn third of the year, the metal phase of the
              cosmic cycle. The stars within it are not characters in a story
              but indicators in a calendar. The Pleiades rise: autumn begins.
              The Three Stars dominate the winter sky: the Tiger is at full
              strength. Orion sets in spring: the Tiger cedes to the Dragon.
              Every mansion, every star, every seasonal transition is woven
              into a single coherent pattern — the celestial bureaucracy
              performing its eternal rotation.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 9: Conclusion
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Gift of Endings
          </h2>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              Next autumn — October, November, when the air sharpens and the
              leaves turn — go outside after sunset and face west. Find the
              Pleiades: a tiny cluster of six or seven blue-white stars, just
              visible to the naked eye, like a scattering of diamond dust on
              black velvet. Then look below and to the left for Orion&apos;s
              belt — the Three Stars of Shen, stepping up from the horizon in
              perfect formation as winter approaches.
            </p>

            <p>
              You are looking at the White Tiger — not as the ancient Chinese
              saw it, perhaps (it takes practice to see a tiger in scattered
              points of light), but as they <em>organized</em> it. The Pleiades
              as the head. The Hyades and Aldebaran as the net. Orion as the
              broad body. The sweep from Andromeda to Orion as the tiger&apos;s
              form, stretched across the autumn sky. It is a vision of the sky
              as a system — not pretty pictures but functional divisions, a
              celestial clock that told an entire civilization when to plant,
              when to harvest, and when to rest.
            </p>

            <p>
              What the White Tiger teaches us is something we resist learning.
              Endings are not failures. Decline is not disaster. Autumn is not
              the death of spring — it is spring&apos;s <em>completion</em>,
              the fulfillment of the growth that began in the Dragon&apos;s
              season. The metal blade that cuts the grain is not cruel. It is
              precise. It discriminates. It enables the harvest without which
              there is no food, no survival, no next planting. The White Tiger
              reminds us that there is a righteousness in endings — a moral
              clarity in knowing when to stop, when to cut, when to gather
              in and prepare for winter.
            </p>

            <p>
              Every culture that looked at the Pleiades saw something different:
              sisters, hens, little eyes, a hairy head, a car logo. But every
              one of them used the Pleiades for the same purpose: to know when
              the season was changing. The cluster rises and sets with the
              precision of a cosmic clock, and humans — for at least a hundred
              thousand years — have watched it, tracked it, and built their
              lives around its rhythm. The Pleiades are not just stars. They
              are one of the oldest continuously used timekeeping tools in
              human history.
            </p>

            <p>
              To understand the White Tiger is to understand that the sky is
              not a static image. It is a film, playing on an annual loop. The
              Dragon rises in spring. The Tiger descends in autumn. The
              Pleiades mark the equinox. Orion dominates the winter. And then
              it all repeats — the same stars, the same seasons, the same
              cosmic cycle that has been turning since before there were humans
              to watch it. The White Tiger is the guardian of the half of the
              cycle we find hardest: the setting, the decline, the ending. But
              it is also the promise that the cycle continues — that after
              autumn comes winter, after rest comes renewal, and after the
              Tiger comes the Dragon, rising again in the east as it has for
              six thousand years.
            </p>
          </div>

          {/* Closing seal — gold Tiger */}
          <div className="mt-16 flex justify-center">
            <ChineseSeal
              size={100}
              character="虎"
              label="BÁI HǓ"
              color="#c4a35a"
            />
          </div>

          <p
            className="mt-8 text-center text-xs tracking-[0.18em] uppercase"
            style={{ color: "var(--star-dim)", opacity: 0.35 }}
          >
            白虎 · White Tiger · Guardian of the West · Metal of Autumn
          </p>
        </AnimatedSection>
      </div>

      {/* Watermark — faint 虎 character */}
      <div
        className="fixed pointer-events-none select-none"
        style={{
          bottom: "2rem",
          right: "2rem",
          fontSize: "18rem",
          fontFamily: "serif",
          color: "#c4a35a",
          opacity: 0.025,
          lineHeight: 1,
          zIndex: 0,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        虎
      </div>
      <SkyNextPage
        href="/sky/big-dipper"
        title="The Big Dipper"
      />

    </main>
  );
}
