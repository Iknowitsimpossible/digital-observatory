import type { Metadata } from "next";
import { Compass, Building2 } from "lucide-react";
import AnimatedSection from "@/components/orion/AnimatedSection";
import SkyNextPage from "@/components/SkyNextPage";
import ChineseSeal from "@/components/orion/ChineseSeal";
import ComparisonPanel from "@/components/orion/ComparisonPanel";
import DragonHeadRaisingHero from "@/components/azure-dragon/DragonHeadRaisingHero";
import DragonMansionsSVG from "@/components/azure-dragon/DragonMansionsSVG";

export const metadata: Metadata = {
  title: "Azure Dragon — Guardian of the Eastern Sky | The Digital Observatory",
  description:
    "How the Azure Dragon of Chinese astronomy wove star positions, seasons, agriculture, and imperial authority into a single celestial system — and what its rising horns still tell us about spring.",
};

/**
 * Azure Dragon (青龙) constellation page.
 *
 * Structure: Dragon Head Raising hero → intro → Four Symbols context →
 * seven mansions walkthrough → Heart mansion deep-dive (Antares) →
 * Shen-Shang legend → cross-cultural comparison → agricultural calendar →
 * conclusion.
 *
 * Design direction: jade-green palette, ink-brush aesthetic,
 * Dunhuang star chart influence. Different visual identity from Orion —
 * this page is about the Dragon as a seasonal/agricultural system,
 * not a hunter/minister duality.
 */
export default function AzureDragonPage() {
  return (
    <main>
      {/* ====================================================
          Hero — Dragon Head Raising concept
          The Horn stars (Spica) rising above the eastern horizon
          at dusk, like a dragon lifting its head from below.
          ==================================================== */}
      <DragonHeadRaisingHero />

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
            The Dragon Raises Its Head
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How an ancient Chinese star pattern became an agricultural
            calendar, an imperial symbol, and a dragon that still wakes
            every spring.
          </p>
          {/* Decorative rule — jade-green */}
          <div
            className="mt-8 mb-14 h-px"
            style={{
              width: "min(80px, 20vw)",
              background:
                "linear-gradient(to right, #4a9e8f, transparent)",
              opacity: 0.5,
            }}
          />
        </AnimatedSection>

        {/* ================================================
            Section 1: Introduction — Dragon Head Raising
            ================================================ */}
        <AnimatedSection delay={0.1}>
          <p
            className="text-lg md:text-xl leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            On the second day of the second lunar month — sometime in early
            March, when the air still carries winter&apos;s bite but the soil
            is beginning to soften — go outside at dusk and face east. Just
            above the horizon, a bright blue-white star is becoming visible for
            the first time in months. The ancient Chinese called this star
            角宿一 (Jiǎo Xiù Yī), the First Star of the Horn. We call it Spica.
          </p>

          <p
            className="mt-6 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            To an astronomer today, Spica is Alpha Virginis — a binary system
            260 light-years away, the fifteenth-brightest star in the night sky.
            But to the astronomers of ancient China, Spica was not a distant
            sun. It was the tip of a horn. And when it appeared above the
            eastern horizon at dusk, after months hidden below, it meant one
            thing: <strong>the dragon was waking up.</strong>
          </p>

          <p
            className="mt-4 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            This was not metaphor. It was a direct visual observation —
            encoded into the structure of Chinese astronomy itself. The
            ancient Chinese divided the sky into 28 lunar mansions (宿, xiù),
            and seven of them, stretching across the eastern heavens, were
            understood to form the body of a great dragon: horns first, then
            neck, chest, heart, tail, and finally a winnowing basket at the
            tip. In winter, the entire dragon lay hidden below the horizon.
            But in early spring, the Horn mansion rose — and only the Horn.
            The body remained submerged, invisible. To anyone watching, it
            looked exactly like a dragon lifting its head above the surface
            of the Earth.
          </p>

          <p
            className="mt-4 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            This event — called 龙抬头 (Lóng Tái Tóu), &ldquo;the Dragon
            Raises Its Head&rdquo; — has been observed in China for at least
            three thousand years. It is still celebrated today, on the second
            day of the second lunar month, with haircuts (to &ldquo;shave the
            dragon&apos;s head&rdquo;), foods named after dragon parts
            (noodles are dragon&apos;s whiskers, dumplings are dragon&apos;s
            ears), and the beginning of spring ploughing. It is one of the
            oldest continuously observed astronomical festivals in human
            history — and almost nobody outside China knows about it.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 2: The Four Symbols
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            One Dragon, Four Guardians
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "#4a9e8f" }}
          >
            The Four Symbols of the Chinese Sky
          </h3>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The Azure Dragon is not a constellation in the Western sense. It
              is one of the Four Symbols (四象, Sì Xiàng) — four celestial
              animals that together divide the entire sky into quadrants. Each
              governs a direction, a season, an element, a color, and seven of
              the 28 lunar mansions. Together, they form a complete cosmic
              system — a way of organizing not just the stars, but time itself.
            </p>

            <p>
              The system is ancient. Images of a dragon and a tiger arranged as
              directional guardians have been found in a Neolithic tomb at
              Xishuipo in Henan Province, dated to approximately <strong>6,000
              years ago</strong> — shells carefully arranged in the shape of
              the Azure Dragon on the east side of the burial. The same pattern,
              elaborated and systematized, appears in the Dunhuang star map of
              the Tang dynasty (c. 650 CE), the oldest complete star atlas in
              existence. The continuity is staggering.
            </p>

            <p>
              The four guardians are:
            </p>

            {/* Four Symbols summary — styled as a mini grid */}
            <div className="grid grid-cols-2 gap-4 my-6 not-prose">
              {[
                { name: "Azure Dragon", chinese: "青龙", dir: "East", season: "Spring", element: "Wood", color: "#4a9e8f" },
                { name: "Vermilion Bird", chinese: "朱雀", dir: "South", season: "Summer", element: "Fire", color: "#c41e3a" },
                { name: "White Tiger", chinese: "白虎", dir: "West", season: "Autumn", element: "Metal", color: "#c4a35a" },
                { name: "Black Tortoise", chinese: "玄武", dir: "North", season: "Winter", element: "Water", color: "#5b8db8" },
              ].map((s) => (
                <div
                  key={s.name}
                  className="rounded-lg p-4"
                  style={{
                    background: "rgba(20, 27, 45, 0.5)",
                    border: `1px solid ${s.color}22`,
                  }}
                >
                  <div className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: s.color }}>
                    {s.dir}
                  </div>
                  <div className="text-base font-medium mb-0.5" style={{ color: "var(--star-white)" }}>
                    {s.name}
                  </div>
                  <div className="text-sm mb-1" style={{ color: "var(--star-dim)" }}>
                    {s.chinese} · {s.season} · {s.element}
                  </div>
                </div>
              ))}
            </div>

            <p>
              The Azure Dragon governs the east and spring. Its element is wood
              (木, mù) — growth, renewal, the rising energy of life. Its color
              is 青 (qīng), a word that sits between blue and green in English,
              the color of young leaves and deep water. This is not a dragon of
              fire and destruction. It is a dragon of <em>generation</em> — the
              force that pushes shoots through soil, that fills rivers with
              spring melt, that wakes the insects from hibernation.
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
            Seven Mansions, One Dragon
          </h2>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The Azure Dragon&apos;s seven lunar mansions trace the dragon&apos;s
              body from head to tail. Each mansion contains multiple stars —
              some are single bright stars we still know by name, others are
              small asterisms of two or three stars. Together, they span a
              vast arc of the sky that crosses what Western astronomy divides
              into four separate constellations: Virgo, Libra, Scorpius, and
              Sagittarius.
            </p>

            <p>
              Here is the dragon, mansion by mansion:
            </p>
          </div>

          {/* Seven Mansions — each as a styled block */}
          <div className="mt-10 space-y-6">
            {[
              {
                num: 1,
                name: "角 (Jiǎo) — Horn",
                star: "Spica (α Virginis)",
                desc: "The dragon's left horn. Spica, a blue-white binary star, is the anchor of this mansion. The ecliptic — the Sun's path — passes directly between the two Horn stars, making this the 'Celestial Gate' (天門) through which the Sun, Moon, and planets travel. When the Horn rises at dusk in early spring, the Dragon Head Raising festival begins.",
                accent: "#4a9e8f",
              },
              {
                num: 2,
                name: "亢 (Kàng) — Neck",
                star: "κ Virginis",
                desc: "The dragon's throat. In Chinese astrology, this mansion governed internal affairs and the health of the state. A celestial event here might be read as an omen about the imperial administration.",
                accent: "#4a9e8f",
              },
              {
                num: 3,
                name: "氐 (Dī) — Root",
                star: "α Librae (Zubenelgenubi)",
                desc: "Sometimes translated as 'Base' or 'Foundation,' this mansion forms the dragon's chest and forelegs. It was associated with the stability of the realm — the root from which order grows. α Librae is itself a beautiful double star, visible in binoculars.",
                accent: "#4a9e8f",
              },
              {
                num: 4,
                name: "房 (Fáng) — Room",
                star: "π Scorpii",
                desc: "The dragon's belly. This mansion marked the 'Bright Hall' (明堂) — the emperor's council chamber in the sky, where celestial officials gathered to deliberate. π Scorpii is a triple star system embedded in the rich star fields near the galactic center.",
                accent: "#4a9e8f",
              },
              {
                num: 5,
                name: "心 (Xīn) — Heart",
                star: "Antares (α Scorpii)",
                desc: "The dragon's heart — and the heart of the entire system. The Heart mansion is formed by three stars in a line: σ Scorpii (the Crown Prince), Antares (the Emperor), and τ Scorpii (the Commoner's Son). Antares, a red supergiant 700 times the diameter of our Sun, glows a deep orange-red. The Shang dynasty adopted it as their national star, calling it 大火 (Dàhuǒ) — the Great Fire. More on this mansion below.",
                accent: "#c41e3a", // cinnabar — the heart is red, not green
              },
              {
                num: 6,
                name: "尾 (Wěi) — Tail",
                star: "μ¹ Scorpii",
                desc: "The dragon's tail, curving through the rich star clouds of Scorpius. This mansion was associated with the harvest and the completion of cycles. Its stars lie near the dazzling region around the galactic center.",
                accent: "#4a9e8f",
              },
              {
                num: 7,
                name: "箕 (Jī) — Winnowing Basket",
                star: "γ Sagittarii",
                desc: "The tip of the dragon's tail, where the body ends. A winnowing basket separates grain from chaff — an agricultural tool given a place in the sky. This mansion marked the transition from the Dragon's domain to the next quadrant. Appropriately, the Milky Way's brightest star clouds begin here, in Sagittarius.",
                accent: "#4a9e8f",
              },
            ].map((m) => (
              <div
                key={m.num}
                className="flex gap-5 rounded-lg p-5"
                style={{
                  background: "rgba(20, 27, 45, 0.4)",
                  border: `1px solid rgba(255, 255, 255, 0.04)`,
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

          {/* Constellation diagram slot */}
          <div className="my-12 flex justify-center">
            <DragonMansionsSVG color="#4a9e8f" showLabels />
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 4: The Heart of the Dragon (心宿)
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Heart of the Dragon
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "var(--cinnabar)" }}
          >
            Antares, the Great Fire Star of the Shang Dynasty
          </h3>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              Five thousand years ago, a Shang dynasty priest-astronomer carved
              characters into a turtle shell and asked a question: would the
              harvest be good this year? He mentioned a star — 大火 (Dàhuǒ),
              the Great Fire. We call it Antares.
            </p>

            <p>
              The oracle bone inscriptions of the Shang dynasty (c. 1600–1046
              BCE) contain the earliest surviving written references to any
              star in human history — and that star is Antares, the red
              supergiant at the heart of the Azure Dragon. The Shang adopted it
              as their national star. Its appearance and disappearance from the
              night sky marked the seasons. When Antares set with the Sun in
              autumn, the phrase was 七月流火 — &ldquo;in the seventh month,
              the Great Fire descends&rdquo; — a line that still appears in
              the Book of Songs (诗经), one of the oldest works of Chinese
              literature.
            </p>

            <p>
              The Heart mansion (心宿, Xīn Xiù) is formed by three stars
              arranged in a line across the constellation Scorpius. Together,
              they form a miniature imperial court in the sky:
            </p>

            {/* Three Stars of Xin — imperial court diagram */}
            <div className="my-8 space-y-4">
              {[
                { star: "σ Scorpii", name: "心宿一", role: "太子 (Tàizǐ)", roleEn: "The Crown Prince", position: "Vanguard — leads the court into the sky, first to rise" },
                { star: "Antares · α Scorpii", name: "心宿二", role: "天王 (Tiānwáng)", roleEn: "The Emperor", position: "Center — the Celestial King, the Great Fire, the proper seat of the Son of Heaven", highlight: true },
                { star: "τ Scorpii", name: "心宿三", role: "庶子 (Shùzǐ)", roleEn: "The Commoner's Son", position: "Rearguard — protects the court from behind, last to set" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg p-4"
                  style={{
                    background: s.highlight
                      ? "rgba(196, 30, 58, 0.08)"
                      : "rgba(20, 27, 45, 0.4)",
                    border: s.highlight
                      ? "1px solid rgba(196, 30, 58, 0.25)"
                      : "1px solid rgba(255, 255, 255, 0.04)",
                  }}
                >
                  {/* Star dot */}
                  <div
                    className="flex-shrink-0 rounded-full"
                    style={{
                      width: s.highlight ? 18 : 10,
                      height: s.highlight ? 18 : 10,
                      background: s.highlight
                        ? "radial-gradient(circle, #ff6644 0%, #c41e3a 60%, transparent 100%)"
                        : "var(--star-dim)",
                      boxShadow: s.highlight
                        ? "0 0 16px rgba(196, 30, 58, 0.5), 0 0 32px rgba(255, 100, 60, 0.2)"
                        : "none",
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm font-medium" style={{ color: "var(--star-white)" }}>
                        {s.star}
                      </span>
                      <span className="text-xs" style={{ color: "var(--star-dim)", opacity: 0.5 }}>
                        {s.name}
                      </span>
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: s.highlight ? "var(--cinnabar)" : "var(--star-dim)", opacity: s.highlight ? 0.9 : 0.6 }}>
                      {s.role} — {s.roleEn}
                    </div>
                    <div className="text-xs mt-1 leading-relaxed" style={{ color: "var(--star-dim)", opacity: 0.5 }}>
                      {s.position}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p>
              This is quintessentially Chinese astronomy: the sky is not a
              theater of mythological characters but a <strong>bureaucracy</strong>.
              The three stars of the Heart are not gods or heroes — they are
              officials, ranked and ordered, mirroring the structure of the
              imperial court. The Emperor sits at the center. His heir leads.
              A commoner&apos;s son guards the rear. The sky is the state,
              projected onto infinity.
            </p>

            <p>
              Antares itself is a star of staggering physical proportions. It is
              a red supergiant approximately 700 times the diameter of our Sun —
              so vast that if it were placed at the center of our solar system,
              its surface would extend past the orbit of Mars. It is also a
              star nearing death. Within the next few hundred thousand years —
              an astronomical instant — it will collapse and explode as a
              supernova, briefly outshining its entire galaxy. The Great Fire,
              one day, will become the greatest fire of all.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 5: Shen and Shang — Eternal Separation
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Brothers Who Can Never Meet
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "#4a9e8f" }}
          >
            The Legend of Shen and Shang
          </h3>

          <blockquote
            className="mb-8 pl-5 py-1 italic leading-[1.85]"
            style={{
              color: "var(--human-accent)",
              borderLeft: "2px solid rgba(196, 30, 58, 0.35)",
            }}
          >
            <p className="text-lg">
              &ldquo;人生不相见，动如参与商。&rdquo;
            </p>
            <p className="mt-2 text-base">
              &ldquo;People rarely see each other in life — moving like Shen
              and Shang.&rdquo;
            </p>
            <footer
              className="mt-3 text-sm not-italic"
              style={{ opacity: 0.5 }}
            >
              — Du Fu (杜甫), Tang dynasty poet, writing to a childhood friend
              he would never see again (c. 759 CE)
            </footer>
          </blockquote>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              There is a story. The legendary Emperor Ku (帝喾), one of the
              Five Emperors of Chinese mythology, had two sons: Ebo (阏伯) and
              Shichen (实沈). The brothers fought constantly — a feud so
              bitter and unending that the emperor saw only one solution. He
              separated them forever. He assigned Ebo to the star Shang (商星),
              which we know as Antares, the Heart mansion. He assigned Shichen
              to the star Shen (参宿), which we know as Orion&apos;s Belt. And
              because Shen and Shang lie on opposite sides of the celestial
              sphere — roughly 180 degrees apart in right ascension — they can
              never appear in the same sky. When one rises, the other sets.
              The brothers can never meet.
            </p>

            <p>
              This is not myth projected onto random stars. It is a precise
              astronomical observation, encoded in story form. Orion&apos;s
              Belt and Antares genuinely are on opposite sides of the sky.
              When Orion is high in the winter evening, Scorpius — and Antares
              with it — lies hidden below the horizon. When Scorpius dominates
              the summer sky, Orion is gone. They are locked in an eternal
              alternation, each rising as the other falls.
            </p>

            <p>
              And here is the remarkable thing: <strong>the Greeks observed the
              exact same astronomical fact and encoded it in the exact same
              way.</strong> In Greek myth, Orion the Hunter and the Scorpion
              are mortal enemies. The Scorpion killed Orion. They were placed
              on opposite sides of the sky so that one always flees as the
              other pursues. Two civilizations, separated by thousands of
              kilometers and with no known contact, looked at the same stars
              and independently told the same kind of story: two figures,
              eternally separated, never sharing the same sky.
            </p>

            <p>
              The difference is in the <em>kind</em> of story. The Greeks told
              a myth of violence and revenge — hunter versus scorpion, predator
              versus prey. The Chinese told a story of family and duty — two
              brothers whose conflict was resolved not by death, but by
              separation, each given his own domain in the sky. Both saw the
              same pattern. Both told a true story. But the meaning they found
              in it reveals the deep structure of their cultures: Greek
              individualism and heroic conflict, Chinese familial order and
              bureaucratic resolution.
            </p>

            <p>
              For over two thousand years, Chinese poets have used 参商
              (Shēn-Shāng) as a metaphor for irreconcilable separation —
              friends separated by distance, lovers parted by circumstance,
              colleagues divided by politics. It is one of the most durable
              literary motifs in the Chinese language, and every instance of it
              is an encoded astronomical observation. The poets knew that
              Orion and Antares can never share the same sky.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 6: The Dragon and the Calendar
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Dragon as Calendar
          </h2>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              We tend to think of constellations as pictures — connect-the-dots
              drawings that illustrate stories. But the Azure Dragon was
              something more practical: it was a <strong>calendar</strong>.
              The dragon&apos;s position in the sky, tracked through the year,
              told farmers exactly what to do and when.
            </p>

            <p>
              This was not a vague association (&ldquo;spring is when the
              weather gets warmer&rdquo;). It was a precise, repeatable,
              astronomical observation system. The ancient text <em>Monthly
              Commands</em> (月令) from the <em>Book of Rites</em> (礼记)
              documents the correlation in detail:
            </p>

            {/* Seasonal calendar — the dragon through the year */}
            <div className="my-8 space-y-4">
              {[
                {
                  season: "Early Spring",
                  month: "2nd lunar month (~March)",
                  position: "The Horn rises at dusk — the Dragon lifts its head",
                  activity: "Spring ploughing begins. Fertilize fields. The Longtaitou Festival.",
                  icon: "🌱",
                },
                {
                  season: "Mid-Spring",
                  month: "3rd lunar month (~April)",
                  position: "Neck and Root mansions become visible — the Dragon's forebody emerges",
                  activity: "Sow grains. Prune mulberry trees for silkworms.",
                  icon: "🌿",
                },
                {
                  season: "Summer",
                  month: "5th–7th lunar months (~June–August)",
                  position: "The entire Dragon is visible in the southern sky — full celestial display",
                  activity: "Weeding, irrigating, tending crops. The Dragon controls the summer rains.",
                  icon: "☀️",
                },
                {
                  season: "Autumn",
                  month: "8th–9th lunar months (~September–October)",
                  position: "The Dragon descends in the west — the Heart (Antares) sets with the Sun",
                  activity: "Harvest. The 'Great Fire descends' — grain is gathered and stored.",
                  icon: "🍂",
                },
                {
                  season: "Winter",
                  month: "10th–1st lunar months (~November–February)",
                  position: "The entire Dragon is hidden below the horizon — the sky is dragonless",
                  activity: "Rest. Repair tools. Wait for the Horn to rise again.",
                  icon: "❄️",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg p-4"
                  style={{
                    background: "rgba(20, 27, 45, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <div className="text-2xl flex-shrink-0">{s.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap mb-1">
                      <span className="text-sm font-medium" style={{ color: "var(--star-white)" }}>
                        {s.season}
                      </span>
                      <span className="text-xs" style={{ color: "#4a9e8f", opacity: 0.7 }}>
                        {s.month}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--star-dim)" }}>
                      <span style={{ color: "var(--star-white)", opacity: 0.8 }}>Sky: </span>
                      {s.position}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--star-dim)", opacity: 0.7 }}>
                      <span style={{ color: "#4a9e8f", opacity: 0.8 }}>Earth: </span>
                      {s.activity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              This is what makes the Azure Dragon fundamentally different from
              a Western constellation like Orion. Orion is a character in a
              story — a hunter, frozen in mid-stride. The Dragon is a
              <strong> process</strong>. It moves. It changes. It appears,
              grows, dominates, declines, and vanishes — and then reappears,
              exactly on schedule, every single year. It is not a static
              picture. It is a cycle.
            </p>

            <p>
              The Dragon&apos;s reliability made it the foundation of the
              agricultural year for millions of people across thousands of
              years. When the Horn rose, you planted. When the Heart descended,
              you harvested. The sky was not a distant realm of abstract
              knowledge — it was the user interface for survival.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 7: Cross-Cultural Comparison
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Dragon and the Scorpion
          </h2>
          <p
            className="mb-12 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The Azure Dragon spans the same stars that Western astronomy
            divides into Virgo, Libra, Scorpius, and Sagittarius. Why did two
            civilizations, looking at the same patch of sky, see such
            radically different things?
          </p>

          <ComparisonPanel
            left={{
              icon: <Compass size={22} />,
              title: "The Greek Lens",
              subtitle: "Constellations as Characters",
              accent: "var(--earth-accent)",
              accentLabel: "Western Tradition",
              children: (
                <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <strong style={{ color: "var(--star-white)" }}>
                      Mythological narrative.
                    </strong>{" "}
                    Stars are characters in stories — Virgo the maiden, Scorpius
                    the scorpion, Sagittarius the archer. Each constellation has
                    a personality, a backstory, a place in the narrative web.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Individual constellations.
                    </strong>{" "}
                    The same patch of sky is divided into multiple independent
                    figures. There is no unifying structure connecting Virgo
                    to Scorpius — they are separate stories.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Ecliptic-based.
                    </strong>{" "}
                    The Greek zodiac follows the Sun&apos;s path (the ecliptic).
                    Constellations are defined by their relationship to this
                    solar highway.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Purpose: storytelling and geometry.
                    </strong>{" "}
                    Greek astronomy sought to model the cosmos through
                    mathematics — spheres, epicycles, geometric perfection.
                    The constellations were the characters, but the plot was
                    mathematical.
                  </li>
                </ul>
              ),
            }}
            right={{
              icon: <Building2 size={22} />,
              title: "The Chinese Lens",
              subtitle: "The Sky as Organism and Calendar",
              accent: "#4a9e8f",
              accentLabel: "Chinese Tradition",
              children: (
                <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <strong style={{ color: "var(--star-white)" }}>
                      Organic unity.
                    </strong>{" "}
                    The same stars are not separate characters — they are parts
                    of a single body. The Dragon unifies what the Greeks split
                    into four constellations. It is a creature, not a cast.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Temporal system.
                    </strong>{" "}
                    The Dragon is defined not by its shape alone but by its
                    <em> movement</em> through the year. It rises, grows,
                    descends, and vanishes. It is a calendar, not just a picture.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Equatorial-based.
                    </strong>{" "}
                    Chinese astronomy is organized around the celestial pole
                    and equator, not the ecliptic. The 28 mansions track the
                    Moon, not the Sun — a sidereal, not solar, system.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Purpose: correlation and agriculture.
                    </strong>{" "}
                    Chinese astronomy was not about geometric modeling — it was
                    about reading the sky for practical guidance. When does the
                    Dragon rise? Time to plant. When does the Heart descend?
                    Time to harvest.
                  </li>
                </ul>
              ),
            }}
          />

          {/* Deeper synthesis */}
          <div
            className="mt-14 space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              Neither system is more &ldquo;advanced&rdquo; than the other.
              They are solutions to different problems. The Greek approach —
              dividing the sky into discrete characters, modeling their motion
              geometrically — was optimized for <em>prediction</em> and
              eventually gave rise to the Copernican revolution and modern
              astrophysics. The Chinese approach — organizing the sky into an
              organic, temporal system, tracking changes over time — was
              optimized for <em>correlation</em> and produced the most
              comprehensive observational record in the pre-telescopic world,
              including the first recorded observations of sunspots, supernovae,
              and cometary orbits.
            </p>

            <p>
              The deeper insight is about <strong>what a constellation even
              is</strong>. In the West, we inherit the Greek assumption that a
              constellation is a picture — a connect-the-dots shape in the sky.
              But the Azure Dragon suggests a different definition: a
              constellation can be a <em>process</em> — a pattern not just in
              space, but in time. The Dragon is not just the stars. It is the
              stars in motion. It is the rising of the Horn in spring, the
              dominance of the Heart in summer, the descent of the Tail in
              autumn. To understand the Dragon is to understand that the sky
              is not a static image. It is a film, playing on an annual loop,
              and the Dragon is one of its main characters.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 8: Conclusion
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Dragon Wakes Every Spring
          </h2>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              Next year, in early March — the second day of the second lunar
              month — go outside at dusk and face east. Find Spica, the
              fifteenth-brightest star in the sky, a blue-white point just
              above the horizon. You are looking at the Horn of the Azure
              Dragon, rising for the first time in months.
            </p>

            <p>
              You are doing exactly what a Chinese farmer did three thousand
              years ago. The same star. The same horizon. The same season. The
              same observation — the dragon is lifting its head. Spring has
              arrived.
            </p>

            <p>
              The difference is what you <em>see</em>. That farmer saw a
              dragon — not as a fantasy, but as a practical tool, an
              agricultural calendar encoded in stars, a signal that it was
              time to sharpen the plough and wake the oxen. A modern astronomer
              sees Spica as a B1 III-IV type star, a spectroscopic binary with
              a rotation period of four days, 260 light-years distant. Both are
              correct. Both are incomplete.
            </p>

            <p>
              The Azure Dragon teaches us something fundamental about astronomy
              and about ourselves. The stars are real. The photons hitting your
              retina from Spica are objectively there. But what those photons
              <em> mean</em> — a dragon&apos;s horn, or a binary star, or
              a signal to begin ploughing — is entirely constructed by the
              culture doing the looking. None of these meanings is wrong. Each
              reveals something real. The farmer understood something the
              astrophysicist might miss: that the sky is a clock, a calendar,
              a guide to life on Earth. The astrophysicist understands
              something the farmer could not: that the Horn is a nuclear fusion
              reactor 260 light-years away, converting hydrogen to helium at
              22,400 Kelvin.
            </p>

            <p>
              The full picture is larger than any single lens. The Dragon is
              all of these things: agricultural calendar, imperial symbol,
              seasonal process, cultural memory, and — yes — a binary star
              system. To see the sky fully is to hold all of these meanings
              together at once. The Dragon raises its head every spring. It
              always has. It always will — or at least, it will until Spica
              exhausts its nuclear fuel in a few hundred million years. By then,
              perhaps, whatever beings are watching will have found their own
              meaning in its light.
            </p>
          </div>

          {/* Closing seal — jade-green Dragon */}
          <div className="mt-16 flex justify-center">
            <ChineseSeal
              size={100}
              character="龙"
              label="QĪNG LÓNG"
              color="#4a9e8f"
            />
          </div>

          <p
            className="mt-8 text-center text-xs tracking-[0.18em] uppercase"
            style={{ color: "var(--star-dim)", opacity: 0.35 }}
          >
            青龙 · Azure Dragon · Guardian of the East · Bringer of Spring
          </p>
        </AnimatedSection>
      </div>

      {/* Watermark — faint 龙 character */}
      <div
        className="fixed pointer-events-none select-none"
        style={{
          bottom: "2rem",
          right: "2rem",
          fontSize: "18rem",
          fontFamily: "serif",
          color: "#4a9e8f",
          opacity: 0.025,
          lineHeight: 1,
          zIndex: 0,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        龙
      </div>
      <SkyNextPage
        href="/sky"
        title="Sky Constellations"
        label="Return to"
      />

    </main>
  );
}
