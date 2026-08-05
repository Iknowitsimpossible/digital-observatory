import type { Metadata } from "next";
import { Compass, Building2 } from "lucide-react";
import ParallaxHero from "@/components/orion/ParallaxHero";
import AnimatedSection from "@/components/orion/AnimatedSection";
import SkyNextPage from "@/components/SkyNextPage";
import OrionConstellationSVG from "@/components/orion/OrionConstellationSVG";
import ChineseSeal from "@/components/orion/ChineseSeal";
import ComparisonPanel from "@/components/orion/ComparisonPanel";

export const metadata: Metadata = {
  title: "Orion — The Hunter and the Minister | The Digital Observatory",
  description:
    "How Greek myth and Chinese imperial astronomy produced radically different interpretations of the same constellation — and what that reveals about how culture shapes the way we see the sky.",
};

/**
 * Orion constellation page — the first fully-built content page
 * in the Digital Observatory.
 *
 * Structure: parallax hero → intro → Greek Orion → Chinese 参宿 →
 * cross-cultural comparison → conclusion.
 *
 * The page itself is a Server Component. Animated and interactive
 * pieces (hero, SVGs, comparison panel, section reveals) are
 * client components that handle their own hydration. This keeps
 * the article content server-renderable for SEO and fast LCP
 * while still feeling alive on scroll.
 */
export default function OrionPage() {
  return (
    <main>
      {/* ====================================================
          Hero — parallax nebula image with title overlay
          ==================================================== */}
      <ParallaxHero />

      {/* ====================================================
          Content area — reading panel quiets the starfield,
          Merriweather serif for comfortable long-form reading
          ==================================================== */}
      <div
        className="max-w-3xl mx-auto px-8 md:px-12 py-20 md:py-28 my-16 rounded-2xl"
        style={{
          background: "rgba(16, 22, 38, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: "0 0 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.02)",
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
            The Hunter and the Minister
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How Greek myth and Chinese imperial astronomy turned
            the same constellation into two completely different
            visions of the sky — and what that reveals about the
            way culture shapes what we see.
          </p>
          {/* Decorative rule */}
          <div
            className="mt-8 mb-14 h-px"
            style={{
              width: "min(80px, 20vw)",
              background:
                "linear-gradient(to right, var(--sky-accent), transparent)",
              opacity: 0.4,
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
            On a clear winter night, look south. Three bright stars in a
            tight, almost perfect row. Above them, a reddish gleam. Below,
            a piercing blue-white point. You are looking at Orion — the
            most recognizable constellation in the night sky, visible from
            every inhabited continent on Earth.
          </p>

          <p
            className="mt-6 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            Every culture that looked up saw these same stars. But they did
            not see the same thing. To the ancient Greeks, this was a
            hunter — a giantslayer armed with a club, locked in eternal
            combat with a scorpion. To the astronomers of imperial China,
            these same stars formed 参宿 (Shēn Xiù), an asterism of
            governance and judgment, part of the White Tiger of the West —
            a celestial bureaucracy that mirrored the empire below.
          </p>

          <p
            className="mt-4 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)", opacity: 0.8 }}
          >
            The difference is not random. It is not simply that different
            cultures told different stories. The difference reveals
            something deeper: how religious belief, political structure,
            and the very purpose of astronomy itself shaped what people
            saw when they looked at the sky. This is the story of how the
            same stars became a hunter and a minister.
          </p>

        </AnimatedSection>

        {/* ================================================
            Section 2: The Greek Hunter
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Greek Hunter
          </h2>

          <h3
            className="text-sm font-medium mb-6 tracking-[0.15em] uppercase"
            style={{ color: "var(--earth-accent)" }}
          >
            Myth, Morality, and the Anthropomorphic Sky
          </h3>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The story, as the Greeks told it, goes something like this:
              Orion was the son of Poseidon, god of the sea — a giant of a
              man who could walk on water and hunt any beast on Earth. He
              was handsome, arrogant, and ultimately tragic. Depending on
              which version you read, he was killed by a giant scorpion
              sent by Gaia (the Earth herself) after boasting he could
              slaughter every animal on the planet; or he was struck down
              by Artemis, the virgin goddess of the hunt, either by
              accident or as punishment for unwanted advances; or he was
              stung by the scorpion after chasing the Pleiades, the seven
              daughters of Atlas.
            </p>

            <p>
              In every version, the outcome is the same: Orion and the
              Scorpion (Scorpius) were placed on opposite sides of the
              celestial sphere, so that one sets as the other rises. They
              can never meet. The hunter is forever chasing, forever
              hunted.
            </p>

            <p>
              This is quintessentially Greek. The stars are not abstract
              markers or divine decrees — they are <em>characters</em>.
              Orion is a person. He has a personality (hubristic, strong),
              a backstory (son of a god), a conflict (the scorpion), and a
              resolution (eternal separation). He is embedded in a web of
              relationships with other constellations — his dogs Canis
              Major and Canis Minor, the hare Lepus at his feet, the
              Pleiades he pursued, the scorpion that killed him.
            </p>

            <p>
              This reflects the deep structure of Greek religion: the gods
              were <strong>anthropomorphic</strong> — human-shaped,
              human-emotioned, human-flawed. Zeus got jealous. Hera held
              grudges. Apollo fell in love. The divine was not an abstract
              moral order; it was a family drama on a cosmic scale.
              Projecting human stories onto the stars was not just natural —
              it was the entire point. The sky was a theater, and the
              constellations were the cast.
            </p>

            <p>
              Historically, this tradition was formalized in the 2nd
              century CE by Claudius Ptolemy in his <em>Almagest</em>,
              which catalogued 48 constellations — many inherited from
              earlier Babylonian sources but reframed through Greek
              mythological narrative. When the Roman Empire adopted Greek
              astronomy, and when Renaissance Europe rediscovered Ptolemy
              through Arabic translations, these 48 constellations became
              the foundation of what the International Astronomical Union
              now recognizes as the 88 official constellations. The Greek
              stories, in other words, <strong>won</strong>. When a modern
              American looks at Orion and sees a hunter, they are
              receiving a cultural inheritance that has been continuously
              transmitted for over two thousand years.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 3: The Chinese Minister (参宿)
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Minister of the White Tiger
          </h2>

          <blockquote
            className="mb-8 pl-5 py-1 italic leading-[1.85]"
            style={{
              color: "var(--human-accent)",
              borderLeft: "2px solid rgba(196, 30, 58, 0.35)",
            }}
          >
            <p className="text-lg">
              &ldquo;In the west lies the White Tiger. Its body spans seven
              mansions. Among them, Shen — the constellation of the Three
              Stars — governs judgment, harvest, and the western border.&rdquo;
            </p>
            <footer
              className="mt-3 text-sm not-italic"
              style={{ opacity: 0.5 }}
            >
              — Adapted from the Records of the Grand Historian (Shiji, c. 94 BCE)
            </footer>
          </blockquote>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              To the astronomers of imperial China, the stars we call
              Orion&apos;s belt were not a belt at all. They were 参宿三星 —
              the &ldquo;Three Stars of Shen&rdquo; — the defining feature
              of the 21st lunar mansion, one of 28 sectors that divided the
              sky. Each mansion corresponded to a day of the sidereal month,
              and each was associated with specific stars, omens, and
              bureaucratic responsibilities. Shen fell within the western
              quadrant of the sky, governed by the White Tiger (白虎, Bái
              Hǔ), one of the four great celestial animals.
            </p>

            <p>
              The star we call Betelgeuse — that reddish gleam marking
              Orion&apos;s left shoulder — was 参宿四, the &ldquo;Fourth
              Star of Shen.&rdquo; Rigel was 参宿七, the &ldquo;Seventh
              Star.&rdquo; These are not names. They are <em>positions</em>.
              In the Chinese system, stars were organized not into
              mythological characters but into an imperial bureaucracy.
              The sky was a mirror of the state — ordered, ranked,
              functional — and just as the emperor governed Earth through
              a hierarchy of ministers and officials, the celestial
              bureaucracy governed the heavens.
            </p>

            <p>
              The 28 Mansions system was not primarily about storytelling.
              It was about <strong>correlation</strong>. The ancient Chinese
              believed that events in the sky and events on Earth were
              connected — not causally, but through a kind of cosmic
              resonance (感应, gǎnyìng). A comet appearing in Shen might
              portend trouble at the western border. An unusual color in one
              of the Three Stars might signal an impending harvest failure.
              The imperial court employed a Bureau of Astronomy (太史局)
              whose sole job was to watch the sky, record everything, and
              report anomalies to the emperor. Missing a celestial omen was
              not just a scientific failure — it was a political liability
              that could destabilize the dynasty.
            </p>

            <p>
              This is why Chinese astronomy developed so differently from
              Greek astronomy. In a centralized bureaucratic state where the
              emperor&apos;s legitimacy — the Mandate of Heaven (天命, Tiān
              Mìng) — depended on correctly reading cosmic signs,
              astronomical observation was <strong>state business</strong>.
              Chinese astronomers kept the most detailed and continuous
              records of celestial events in the pre-telescopic world:
              comets, supernovae, sunspots, planetary conjunctions — all
              meticulously documented for over two thousand years. The
              Dunhuang star map (c. 700 CE), discovered in a cave along the
              Silk Road, is the oldest known pictorial star chart in
              existence. It is Chinese, not Greek.
            </p>

            <p>
              There is also one of the most poignant stories in Chinese
              star lore, directly involving Shen. In the sky, Shen (参宿,
              Orion) and Shang (商宿, corresponding roughly to the area of
              Scorpius and Antares) are on opposite sides of the celestial
              sphere. When one rises, the other sets. They can never appear
              together. This astronomical fact gave rise to the idiom 参商
              (Shēn-Shāng), meaning &ldquo;irreconcilable
              separation&rdquo; — used for centuries in Chinese poetry to
              describe friends or lovers who are forever apart. The Tang
              dynasty poet Du Fu wrote of a childhood friend he would never
              see again: &ldquo;We are like Shen and Shang — forever
              separated by the vault of heaven.&rdquo;
            </p>

            <p>
              Notice what happened here: the <em>same</em> astronomical
              fact — Orion and Scorpius on opposite sides of the sky — was
              interpreted by the Greeks as an eternal chase (hunter flees
              scorpion) and by the Chinese as an eternal separation (two
              officials who can never meet). Same data. Radically different
              cultural framing.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 4: Same Stars, Different Skies
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Same Stars, Different Skies
          </h2>
          <p
            className="mb-12 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Why did two civilizations, looking at the same pattern of light
            in the night sky, produce such radically different
            interpretations? The answer lies not in the stars — but in the
            societies doing the looking.
          </p>

          <ComparisonPanel
            left={{
              icon: <Compass size={22} />,
              title: "The Greek Lens",
              subtitle: "The Sky as Story",
              accent: "var(--earth-accent)",
              accentLabel: "Greek Tradition",
              children: (
                <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <strong style={{ color: "var(--star-white)" }}>
                      Polytheistic religion.
                    </strong>{" "}
                    Gods were human-shaped, with human emotions and conflicts.
                    Projecting personalities onto stars was natural — the sky
                    was a divine drama.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Decentralized city-states.
                    </strong>{" "}
                    No single authority controlled astronomical knowledge.
                    Multiple versions of myths coexisted. Astronomy was
                    philosophy, not policy.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Narrative culture.
                    </strong>{" "}
                    Homer, Hesiod, the playwrights — Greek education was
                    built on stories. Constellations became characters in
                    an epic that played out every night.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Purpose: understanding.
                    </strong>{" "}
                    Why do things move? What are they made of? Greek
                    astronomy asked causal questions and sought geometric
                    models — it was the beginning of theoretical science.
                  </li>
                </ul>
              ),
            }}
            right={{
              icon: <Building2 size={22} />,
              title: "The Chinese Lens",
              subtitle: "The Sky as Mirror",
              accent: "var(--cinnabar)",
              accentLabel: "Chinese Tradition",
              children: (
                <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <strong style={{ color: "var(--star-white)" }}>
                      Imperial bureaucracy.
                    </strong>{" "}
                    The sky was organized like the court — ranked, functional,
                    each star with a role. Not characters, but officials.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Centralized state.
                    </strong>{" "}
                    The emperor&apos;s legitimacy depended on correctly
                    interpreting celestial omens. Astronomy was a
                    state monopoly — the Bureau of Astronomy was a government
                    agency.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Correlative cosmology.
                    </strong>{" "}
                    Heaven, Earth, and humanity formed a resonant system.
                    Events in the sky correlated with events on the ground —
                    not through physics, but through a kind of cosmic sympathy.
                  </li>
                  <li className="mt-3">
                    <strong style={{ color: "var(--star-white)" }}>
                      Purpose: correlation.
                    </strong>{" "}
                    Chinese astronomy was not about explaining motion through
                    geometry — it was about reading the sky for signs. The
                    goal was accurate prediction for the state, not
                    theoretical understanding.
                  </li>
                </ul>
              ),
            }}
          />

          {/* Deeper analysis */}
          <div
            className="mt-14 space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            <p>
              The contrast is striking, but it would be a mistake to frame it
              as a competition. The Greeks were not &ldquo;more
              scientific&rdquo; and the Chinese were not &ldquo;more
              superstitious.&rdquo; Both traditions were remarkably
              sophisticated — just oriented toward different goals. Greek
              astronomy asked <em>how</em> (geometry, motion, mechanism) and
              eventually gave rise to the Copernican revolution. Chinese
              astronomy asked <em>when</em> and <em>what does it mean</em>
              (timing, correlation, portent) and produced the most
              comprehensive observational record in human history — data
              that modern astrophysicists still use today to study supernova
              remnants, cometary orbits, and long-term stellar variability.
            </p>

            <p>
              The deeper insight here is about the relationship between{" "}
              <strong>observation and interpretation</strong>. The stars are
              the same for everyone. The photons hitting your retina from
              Betelgeuse are identical whether you are standing in Athens in
              300 BCE or in Chang&apos;an in 700 CE. But what those photons{" "}
              <em>mean</em> — what pattern they belong to, what story they
              tell, what significance they carry — is entirely constructed by
              culture. This is not a weakness of astronomy. It is a
              fundamental truth about human knowledge: <strong>we do not
              perceive raw data. We perceive patterns, and the patterns we
              see are shaped by the conceptual frameworks we inherit.</strong>
            </p>

            <p>
              When a modern astronomer looks at Orion, they see neither a
              hunter nor a minister. They see a stellar nursery — the Orion
              Molecular Cloud Complex, where new stars are being born right
              now, 1,300 light-years away. They see Betelgeuse as a red
              supergiant nearing the end of its life, destined to explode as
              a supernova within the next hundred thousand years. They see
              the Orion Nebula (M42) as a protoplanetary disk factory —
              young stars surrounded by the raw material for planets.
            </p>

            <p>
              But even this modern view is not &ldquo;objective.&rdquo; It
              is shaped by <em>our</em> cultural framework — the scientific
              method, with its commitment to empirical observation,
              mathematical modeling, and falsifiable hypotheses. Every era
              sees the sky through its own lens. The Greeks saw myth. The
              Chinese saw governance. We see physics. None of these views is
              wrong. Each reveals something real — and each is incomplete on
              its own.
            </p>
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 5: The Belt
            ================================================ */}
        <AnimatedSection className="mt-20" delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Belt That Connects
          </h2>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              Here is a curious thing: of all the stars in Orion, the three
              belt stars — Alnitak, Alnilam, and Mintaka — are the most
              universally recognized feature. Nearly every culture that
              developed its own astronomy identified this tight row of three
              equally bright stars as a single unit.
            </p>

            <p>
              The Arabs called them Al Nijād (&ldquo;the Belt&rdquo;) and Al
              Mīzān (&ldquo;the Scale&rdquo;). In parts of Africa, they were
              seen as a line of animals or hunters. The Māori of New Zealand
              called them Tautoru (&ldquo;the Three&rdquo;) and used them to
              mark the beginning of the new year with the heliacal rising of
              Matariki (the Pleiades). In Latin America, they are known as
              Las Tres Marías (&ldquo;the Three Marys&rdquo;). In parts of
              India, they are associated with the sage Agastya. In Finnish
              folklore, they are Väinämöisen Vyö — the belt of the hero
              Väinämöinen.
            </p>

            <p>
              The universality of the Three Stars suggests something
              important: some patterns in the sky are so visually compelling
              that they impose themselves on human perception regardless of
              culture. The belt is a <em>given</em> — an objective feature of
              the night sky. But everything around it — the shoulders, the
              feet, the story, the meaning — is constructed. It is as if the
              universe provides a few anchor points and leaves the rest for
              us to fill in.
            </p>
          </div>

          {/* Wide constellation drawing, larger */}
          <div className="my-12 flex justify-center">
            <OrionConstellationSVG
              color="var(--star-white)"
              showLabels
            />
          </div>
        </AnimatedSection>

        {/* ================================================
            Section 6: Conclusion
            ================================================ */}
        <AnimatedSection className="mt-16" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Looking Up Together
          </h2>

          <div className="space-y-5 text-base leading-[1.85]" style={{ color: "var(--star-dim)" }}>
            <p>
              The next time Orion is visible — winter evenings in the
              Northern Hemisphere, summer evenings in the Southern — go
              outside and find those three stars. Look at the red gleam of
              Betelgeuse, one of the largest stars known, a supergiant so
              vast that if it were placed at the center of our solar system,
              its surface would extend past the orbit of Jupiter. Look at the
              blue-white fire of Rigel, 85,000 times more luminous than our
              Sun. Look at the faint fuzz of the Orion Nebula just below the
              belt — a stellar nursery where, right now, new stars are
              forming from collapsing clouds of gas and dust.
            </p>

            <p>
              And then remember: you are looking at the same photons that
              Greek shepherds, Chinese imperial astronomers, Arab navigators,
              and Māori wayfinders all saw before you. The same three belt
              stars. The same red gleam. The same blue-white fire. But what
              you <em>see</em> — whether it is a hunter, a minister, a
              stellar nursery, or simply a beautiful pattern of light — that
              depends on the stories you carry, the questions you ask, and
              the culture that shaped you.
            </p>

            <p>
              The sky does not tell one story. It never has. Orion is both
              hunter and minister. To understand the stars fully is to
              understand that we see them through human eyes — and human eyes
              are never neutral. Every culture that looked up saw something
              true. The task of science communication, and of astronomy
              itself, is not to replace those old stories with data, but to
              hold them alongside each other — the myth and the physics, the
              hunter and the minister, the poetry and the protoplanetary
              disk — and to recognize that the full picture is larger than
              any single lens can capture.
            </p>
          </div>

          {/* Closing visual element — small seal */}
          <div className="mt-16 flex justify-center">
            <ChineseSeal size={100} />
          </div>

          <p
            className="mt-8 text-center text-xs tracking-[0.18em] uppercase"
            style={{ color: "var(--star-dim)", opacity: 0.35 }}
          >
            参宿 · Orion · The Hunter · The Minister
          </p>
        </AnimatedSection>
      </div>

      {/* Watermark — faint 参 character, like a publisher's mark */}
      <div
        className="fixed pointer-events-none select-none"
        style={{
          bottom: "2rem",
          right: "2rem",
          fontSize: "18rem",
          fontFamily: "serif",
          color: "var(--cinnabar)",
          opacity: 0.025,
          lineHeight: 1,
          zIndex: 0,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        参
      </div>
      <SkyNextPage
        href="/sky/white-tiger"
        title="The White Tiger"
      />

    </main>
  );
}
