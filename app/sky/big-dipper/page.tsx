import type { Metadata } from "next";
import AnimatedSection from "@/components/orion/AnimatedSection";
import SkyNextPage from "@/components/SkyNextPage";
import ChineseSeal from "@/components/orion/ChineseSeal";
import BigDipperClock from "@/components/big-dipper/BigDipperClock";
import CrossCulturalDipper from "@/components/big-dipper/CrossCulturalDipper";

export const metadata: Metadata = {
  title: "The Big Dipper — 北斗七星 | The Digital Observatory",
  description:
    "Six thousand years of the same seven stars: how the Big Dipper became a Chinese cosmic clock, a Greek bear, an American freedom compass, and humanity's most universal constellation.",
};

/**
 * Big Dipper (北斗七星) page — the most universally recognized star
 * pattern in the Northern Hemisphere.
 *
 * Structure: hero → what it is → the cosmic clock (斗建) →
 * the freedom compass (Drinking Gourd) → cross-cultural kaleidoscope →
 * the hidden sextuple star (Mizar & Alcor) → conclusion.
 *
 * Visual identity: gold-amber accent (guiding light in darkness),
 * scholarly diagrams (clock, cross-cultural gallery), and an
 * inline SVG hero of the Dipper itself. Unlike Orion's parallax
 * telescope aesthetic, this page feels like an ancient star chart
 * brought into a modern planetarium — precise, beautiful, and about
 * the shared act of looking up.
 */
export default function BigDipperPage() {
  return (
    <main>
      {/* ====================================================
          Hero — the seven stars drawn against deep space,
          no photograph, just the Dipper itself
          ==================================================== */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 overflow-hidden"
        style={{ background: "var(--space-deep)" }}
      >
        {/* Deep space gradient behind the Dipper */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 45%, rgba(61, 43, 90, 0.25) 0%, transparent 70%)," +
              "radial-gradient(ellipse 40% 35% at 50% 50%, rgba(25, 32, 56, 0.9) 0%, transparent 70%)",
          }}
        />

        {/* The seven stars as an SVG constellation diagram */}
        <svg
          viewBox="0 0 400 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full max-w-lg h-auto mb-10"
          aria-label="The Big Dipper — seven stars connected in a ladle shape"
        >
          {/* Faint constellation lines */}
          <line x1="148" y1="64" x2="188" y2="104" stroke="rgba(240, 215, 140, 0.15)" strokeWidth="0.5" />
          <line x1="188" y1="104" x2="108" y2="88" stroke="rgba(240, 215, 140, 0.15)" strokeWidth="0.5" />
          <line x1="108" y1="88" x2="128" y2="56" stroke="rgba(240, 215, 140, 0.15)" strokeWidth="0.5" />
          <line x1="128" y1="56" x2="148" y2="64" stroke="rgba(240, 215, 140, 0.15)" strokeWidth="0.5" />
          <line x1="128" y1="56" x2="76" y2="48" stroke="rgba(240, 215, 140, 0.15)" strokeWidth="0.5" />
          <line x1="76" y1="48" x2="64" y2="20" stroke="rgba(240, 215, 140, 0.15)" strokeWidth="0.5" />
          <line x1="64" y1="20" x2="40" y2="0" stroke="rgba(240, 215, 140, 0.15)" strokeWidth="0.5" />

          {/* Stars — rendered largest to smallest for depth */}
          {[
            { cx: 148, cy: 64, r: 2.4, label: "天枢", name: "Dubhe", lx: 160, ly: 58 },
            { cx: 188, cy: 104, r: 2.2, label: "天璇", name: "Merak", lx: 200, ly: 102 },
            { cx: 108, cy: 88, r: 2.0, label: "天玑", name: "Phecda", lx: 96, ly: 84 },
            { cx: 128, cy: 56, r: 1.8, label: "天权", name: "Megrez", lx: 138, ly: 50 },
            { cx: 76, cy: 48, r: 2.2, label: "玉衡", name: "Alioth", lx: 66, ly: 42 },
            { cx: 64, cy: 20, r: 2.0, label: "开阳", name: "Mizar", lx: 76, ly: 14 },
            { cx: 40, cy: 0, r: 2.0, label: "摇光", name: "Alkaid", lx: 28, ly: -6 },
          ].map((star, i) => (
            <g key={star.label}>
              {/* Glow */}
              <circle cx={star.cx} cy={star.cy} r={star.r * 2.5} fill="#f0d78c" fillOpacity="0.08" />
              <circle cx={star.cx} cy={star.cy} r={star.r * 1.3} fill="#f0d78c" fillOpacity="0.18" />
              {/* Core */}
              <circle cx={star.cx} cy={star.cy} r={star.r} fill="#f5e6b8" />
              {/* Hot center */}
              <circle cx={star.cx} cy={star.cy} r={star.r * 0.35} fill="#fffef5" fillOpacity="0.6" />
              {/* Label */}
              <text
                x={star.lx}
                y={star.ly}
                textAnchor="start"
                fill="var(--star-dim)"
                fillOpacity={i === 0 ? 0.55 : 0.35}
                fontSize="7"
                fontFamily="serif"
              >
                {star.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Title */}
        <h1
          className="relative text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-3"
          style={{
            color: "var(--star-white)",
            fontFamily: "var(--font-playfair), serif",
          }}
        >
          The Northern Dipper
        </h1>
        <p
          className="relative text-2xl md:text-3xl font-light mb-6"
          style={{
            color: "#f0d78c",
            fontFamily: "serif",
            opacity: 0.6,
          }}
        >
          北斗七星
        </p>
        <p
          className="relative text-base md:text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--star-dim)", opacity: 0.55 }}
        >
          Seven stars. Six millennia. One pattern — seen by every Northern
          Hemisphere culture, each finding something different in the same
          points of light.
        </p>
      </section>

      {/* ====================================================
          Content area — dark translucent reading panel
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
            Section 1 — Opening Hook
            ================================================ */}
        <AnimatedSection>
          <p
            className="text-lg md:text-xl leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Six thousand five hundred years ago, in what is now Henan
            Province, someone carefully arranged clam shells on the floor
            of a tomb at Xīshuǐpō. The pattern was unmistakable: four
            shells forming a bowl, three more tracing a curved handle. It
            is the oldest known representation of any star pattern in the
            world — and those same seven stars hang in our sky tonight.
          </p>

          <p
            className="mt-6 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            The Big Dipper is the closest thing humanity has to a universal
            constellation. Every Northern Hemisphere culture — Chinese,
            Greek, Norse, Iroquois, Arabian, Māori — independently noticed
            these seven stars and wove them into stories. Unlike Orion,
            which only became globally shared through modern astronomy's
            adoption of Greek constellations, the Dipper has always been
            seen. It is simply too bright to ignore, too distinctive to
            forget, too useful to leave unnamed.
          </p>

          <p
            className="mt-4 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            What changes is not the stars. What changes is what we make of
            them. A Chinese court astronomer used the Dipper to set the
            imperial calendar. An Iroquois storyteller explained it as a
            cosmic bear hunt. An enslaved man in Alabama used it to find
            north — and freedom. The Dipper is a mirror: every culture that
            looked up saw itself reflected back.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 2 — What It Is
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            What It Is
          </h2>

          <div
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              The Big Dipper is not a constellation — it is an asterism, a
              recognisable star pattern that forms part of the larger
              constellation Ursa Major (the Great Bear). In Chinese
              astronomy, it belongs to the Purple Forbidden Enclosure (紫微垣,
              Zǐwēi Yuán), the circumpolar region centred on the North
              Celestial Pole.
            </p>

            <p>
              Seven stars make up the Dipper. In Chinese, each has a name
              that is not a name at all, but a position in a cosmic
              bureaucracy: 天枢 (Tiānshū, &ldquo;Celestial Pivot&rdquo;),
              天璇 (Tiānxuán, &ldquo;Celestial Jade Armillary&rdquo;), 天玑
              (Tiānjī, &ldquo;Celestial Pearl&rdquo;), 天权 (Tiānquán,
              &ldquo;Celestial Balance&rdquo;), 玉衡 (Yùhéng, &ldquo;Jade
              Sighting Tube&rdquo;), 开阳 (Kāiyáng, &ldquo;Opening of
              Yang&rdquo;), and 摇光 (Yáoguāng, &ldquo;Wavering
              Light&rdquo;). The first four form the bowl (斗魁, dǒukuí);
              the last three form the handle (斗柄, dǒubǐng).
            </p>

            <p>
              Draw a line through Tiānshū and Tiānxuán — the two stars at the
              far edge of the bowl — and extend it about five times. You
              arrive at the North Star, Polaris. These two, known as the
              &ldquo;Pointer Stars&rdquo; in Western astronomy, made the
              Dipper the most important navigational tool in the Northern
              Hemisphere for millennia before the magnetic compass. You did
              not need a map. You only needed to look up.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 3 — The Cosmic Clock
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-3 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Cosmic Clock
          </h2>

          <h3
            className="text-sm font-medium mb-8 tracking-[0.15em] uppercase"
            style={{ color: "#f0d78c", opacity: 0.7 }}
          >
            斗建 — Dipper Timekeeping
          </h3>

          <div
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              For the ancient Chinese, the Big Dipper was not merely a
              constellation — it was a calendar. The method was called 斗建
              (dǒujiàn), &ldquo;Dipper Timekeeping.&rdquo; At dusk, you
              observe which direction the handle points. That direction tells
              you the season.
            </p>
          </div>
        </AnimatedSection>

        {/* The Dipper Clock — key visual */}
        <BigDipperClock />

        <AnimatedSection delay={0.05}>
          <div
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              The Warring States text <em>Hégūanzi</em> (《鹖冠子》, c. 3rd
              century BCE) records it with elegant concision:
            </p>

            <blockquote
              className="border-l-2 pl-6 py-2 my-6 text-base leading-relaxed"
              style={{
                borderColor: "rgba(240, 215, 140, 0.3)",
                color: "var(--star-dim)",
                fontStyle: "italic",
              }}
            >
              斗柄东指，天下皆春。
              <br />
              斗柄南指，天下皆夏。
              <br />
              斗柄西指，天下皆秋。
              <br />
              斗柄北指，天下皆冬。
              <br />
              <span
                className="text-sm mt-2 inline-block"
                style={{ fontStyle: "normal", opacity: 0.5 }}
              >
                &ldquo;When the handle points east, all under heaven is
                spring. When it points south, all under heaven is summer.
                When it points west, all under heaven is autumn. When it
                points north, all under heaven is winter.&rdquo;
              </span>
            </blockquote>

            <p>
              This was not folklore — it was systematised with astonishing
              precision. The <em>Huáinánzǐ</em> (《淮南子》, 139 BCE) mapped
              the handle&rsquo;s position to all twenty-four solar terms,
              each one a 15-degree shift in the handle&rsquo;s orientation.
              The Dipper rotated through the year like the hand of a cosmic
              clock — one full circuit, one full year. Spring planting,
              autumn harvest, religious festivals, political ceremonies: all
              were keyed to these seven stars.
            </p>

            <p>
              Sima Qian, the great historian of the Han dynasty, summarised
              it in a single, definitive sentence in the{" "}
              <em>Records of the Grand Historian</em> (《史记·天官书》):
            </p>

            <blockquote
              className="border-l-2 pl-6 py-2 my-6 text-base leading-relaxed"
              style={{
                borderColor: "rgba(240, 215, 140, 0.3)",
                color: "var(--star-dim)",
                fontStyle: "italic",
              }}
            >
              分阴阳，建四时，均五行，移节度，定诸纪，皆系于斗。
              <br />
              <span
                className="text-sm mt-2 inline-block"
                style={{ fontStyle: "normal", opacity: 0.5 }}
              >
                &ldquo;Dividing yin and yang, establishing the four seasons,
                balancing the five phases, moving the twenty-four solar
                terms, fixing all calendrical markers — everything is tied
                to the Dipper.&rdquo;
              </span>
            </blockquote>

            <p>
              No other constellation was given this responsibility. The
              Dipper was not merely observed. It governed.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 4 — The Freedom Compass
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-3 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Freedom Compass
          </h2>

          <h3
            className="text-sm font-medium mb-8 tracking-[0.15em] uppercase"
            style={{ color: "#f0d78c", opacity: 0.7 }}
          >
            Follow the Drinking Gourd
          </h3>

          <div
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              Three thousand years after the Dipper became China&rsquo;s
              calendar and half a world away, the same seven stars guided a
              different kind of journey.
            </p>

            <p>
              Enslaved African Americans knew the Big Dipper as the Drinking
              Gourd — its shape resembling the hollowed-out gourd used as a
              water dipper. The two stars at the far edge of the bowl —
              Dubhe and Merak, the same pointer stars that Chinese
              astronomers named Tiānshū and Tiānxuán — point to Polaris, the
              North Star. And the North Star, fixed and unmoving in the sky,
              marked the direction of the free states and Canada.
            </p>

            <p>
              The folk song &ldquo;Follow the Drinking Gourd,&rdquo; first
              documented in the early twentieth century, encodes celestial
              navigation into its lyrics. Whether the song was a literal
              coded map used by Underground Railroad conductors or a
              post-war memorial honouring the courage of freedom seekers,
              what is historically certain is this: Harriet Tubman and other
              freedom seekers used the North Star — found by the
              Dipper&rsquo;s pointer stars — to navigate. In a world where
              enslaved people were denied maps, literacy, and freedom of
              movement, the night sky was the one map that could not be
              taken away.
            </p>

            <p>
              The same stars that told Chinese farmers when to plant rice
              told American slaves which direction was north.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 5 — A Kaleidoscope of Meanings
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-3 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            A Kaleidoscope of Meanings
          </h2>

          <h3
            className="text-sm font-medium mb-8 tracking-[0.15em] uppercase"
            style={{ color: "#f0d78c", opacity: 0.7 }}
          >
            Same Stars, Different Stories
          </h3>

          <div
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              What makes the Big Dipper unique among celestial patterns is
              not that one culture imbued it with meaning — it is that
              nearly all of them did, each projecting a different world onto
              the same seven points of light.
            </p>
          </div>
        </AnimatedSection>

        {/* Cross-cultural card grid */}
        <CrossCulturalDipper />

        <AnimatedSection delay={0.05}>
          <p
            className="text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            The same stars. Seven different meanings — and these are only a
            fraction of the interpretations recorded across human cultures.
            Each society projected its own world onto the sky: its fears
            (a bear hunt), its tools (a wagon, a drinking gourd), its
            social structures (seven sages, an imperial bureaucracy), and
            its deepest questions (who lives, who dies, what guides us
            home). The sky reflected them all back — impartial, silent,
            and always the same.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 6 — Six Stars Hidden in One
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Six Stars Hidden in One
          </h2>

          <div
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              The middle star of the handle, 开阳 (Kāiyáng, known in the
              West as Mizar), looks like a single bright point — magnitude
              2.2, unremarkable among its neighbours. Hovering just beside
              it, so close that distinguishing them has been used as a test
              of eyesight across Arabic, Persian, Roman, and Japanese
              cultures, is the fainter Alcor (magnitude 4.0). In Japan, it
              was called <em>Jumyōboshi</em> (寿命星), the
              &ldquo;Lifespan Star&rdquo;; failing to see it was rumoured to
              foretell death. In India, Mizar and Alcor are Vasishtha and
              Arundhati — the ideal married couple, pointed out to newlyweds
              at Hindu wedding ceremonies.
            </p>

            <p>
              But what looks like two stars, a binary barely separable by
              the unaided eye, is actually six.
            </p>

            <p>
              Mizar itself is a quadruple system — two pairs of hot A-type
              stars locked in tight orbits, one pair circling every twenty
              days, the other every fifty-seven years. Alcor adds two more:
              a white A-type star and a tiny red dwarf companion, discovered
              only in 2009. The entire sextuple system lies about 83
              light-years from Earth. All six stars are gravitationally
              bound — a family of six suns orbiting each other.
            </p>

            <p>
              Mizar holds a remarkable number of astronomical firsts. It was
              the first double star ever resolved by telescope — Benedetto
              Castelli, a student of Galileo, in 1617. It was the first
              binary star ever photographed (1857). And it was the first
              star revealed to be a spectroscopic binary — its duplicity
              betrayed not by visual separation but by the periodic doubling
              of spectral lines, discovered by Edward Pickering at Harvard
              in 1890. Each time astronomers developed a new way of seeing,
              Mizar revealed another layer.
            </p>

            <p>
              The Big Dipper itself is like this. The longer humanity looked
              at it, the more it revealed. A clock. A compass. A bear. A
              coffin. A drinking gourd. Seven sages. Six stars. The pattern
              never changed. The seeing did.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 7 — Conclusion
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            What the Dipper Teaches Us
          </h2>

          <div
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              The Big Dipper is bright enough that you can find it from the
              middle of most cities. Tonight, if you step outside and look
              north, you will see the same seven stars that someone at
              Xīshuǐpō arranged in clam shells sixty-five centuries ago.
            </p>

            <p>
              A Chinese court astronomer in the Tang dynasty used the
              Dipper&rsquo;s handle to set the imperial calendar. An
              Iroquois storyteller explained it as a bear pursued by three
              hunters. An astronomer at Harvard used Mizar&rsquo;s wobbling
              spectral lines to discover that binary stars exist. An
              enslaved man in Alabama used the pointer stars to find north —
              and freedom.
            </p>

            <p>
              That shared act of looking up — across millennia, across
              continents, across cultures that had no contact with each
              other — is what makes the Big Dipper not merely an asterism,
              but a thread running through human history. Seven stars,
              arranged in a shape a child can draw. And yet every
              civilisation that saw them found something worth naming,
              something worth remembering, something worth passing on.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Decorative elements — seal and image suggestions
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          {/* Decorative rule */}
          <div
            className="mb-10 h-px"
            style={{
              width: "min(80px, 20vw)",
              background:
                "linear-gradient(to right, #f0d78c, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <p
                className="text-sm mb-6 leading-relaxed"
                style={{ color: "var(--star-dim)", opacity: 0.5 }}
              >
                The Dunhuang star map (敦煌星图, 649–684 CE) — the
                world&rsquo;s oldest complete star atlas — prominently
                features the Big Dipper in its circumpolar chart. Li
                Chunfeng (李淳风), the Tang dynasty astronomer believed to
                have authored the original, drew these seven stars at a
                time when the Dipper had already been governing the
                Chinese calendar for over a millennium.
              </p>

              {/* Image suggestions for user to source */}
              <div
                className="rounded-lg p-4 mt-4"
                style={{
                  background: "rgba(61, 43, 90, 0.2)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <p
                  className="text-xs tracking-[0.1em] uppercase font-medium mb-3"
                  style={{ color: "var(--star-dim)", opacity: 0.4 }}
                >
                  Images to Source
                </p>
                <ul
                  className="text-xs space-y-1.5 list-disc list-inside"
                  style={{ color: "var(--star-dim)", opacity: 0.35, fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  <li>
                    Wide-field astrophotograph of the Big Dipper (NASA
                    APOD or Wikimedia Commons) — for a section intro
                  </li>
                  <li>
                    Dunhuang star map, circumpolar section (British
                    Library, public domain) — shows the Dipper as drawn
                    in the 7th century
                  </li>
                  <li>
                    M51 Whirlpool Galaxy (NASA/ESA Hubble) — deep sky
                    object near Alkaid, the Dipper&rsquo;s handle tip
                  </li>
                  <li>
                    Historical celestial atlas plate of Ursa Major
                    (Wikimedia Commons) — 17th–18th century engraving
                  </li>
                </ul>
              </div>
            </div>

            {/* Chinese seal: 斗 (dǒu) */}
            <ChineseSeal
              character="斗"
              label="BĚI DǑU"
              color="#f0d78c"
              size={100}
              className="shrink-0"
            />
          </div>
        </AnimatedSection>
      </div>
      <SkyNextPage
        href="/sky/azure-dragon"
        title="The Azure Dragon"
      />

    </main>
  );
}
