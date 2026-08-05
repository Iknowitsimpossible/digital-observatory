import type { Metadata } from "next";
import SpectroscopyHero from "@/components/earth/SpectroscopyHero";
import SpectrumDiagram from "@/components/earth/SpectrumDiagram";
import AnimatedSection from "@/components/orion/AnimatedSection";
import EarthNextPage from "@/components/earth/EarthNextPage";

export const metadata: Metadata = {
  title: "Spectroscopy — Reading the Light of the Stars | The Digital Observatory",
  description:
    "How a Bavarian glassmaker's discovery of dark lines in sunlight became the tool that reads the chemical composition of stars, discovered helium on the Sun before Earth, and now analyzes exoplanet atmospheres with JWST.",
};

/**
 * Spectroscopy page — Earth section, scientific methods.
 *
 * Discovery-first narrative structure:
 *   1. Hero — animated prism + spectrum with Fraunhofer lines
 *   2. Discovery hook — Fraunhofer's dark lines (1814)
 *   3. "How?" — the method explained, with build-as-you-scroll diagram
 *   4. Key discoveries — helium (1868), stellar classification, JWST exoplanets
 *   5. Why it matters — thesis payoff
 *   6. Further reading
 *
 * The page is a Server Component. The hero and diagram are client
 * components that handle their own animation via framer-motion.
 * Content sections use AnimatedSection for staggered scroll reveals.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for measurement values, key terms
 *   - H-alpha red (#e04040) for hydrogen line labels
 *   - OIII teal (#40c0c0) for emission references
 *   - Reading panel: dark translucent card, Merriweather, max-w-3xl
 */

export default function SpectroscopyPage() {
  return (
    <main>
      {/* ====================================================
          Hero — animated prism + spectrum
          ==================================================== */}
      <SpectroscopyHero />

      {/* ====================================================
          Reading panel
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
            Reading the Light of the Stars
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How a Bavarian optician found dark lines in a rainbow he
            couldn&apos;t explain — and in doing so, handed astronomy the
            key to reading the chemical composition of the entire universe.
          </p>
          {/* Decorative rule — earth-accent gradient */}
          <div
            className="mt-8 mb-14 h-px"
            style={{
              width: "min(80px, 20vw)",
              background:
                "linear-gradient(to right, var(--earth-accent), transparent)",
              opacity: 0.4,
            }}
          />
        </AnimatedSection>

        {/* ================================================
            Section 1: Discovery Hook
            Fraunhofer's dark lines (1814)
            ================================================ */}
        <AnimatedSection delay={0.1}>
          <h2
            className="text-xl md:text-2xl font-light mb-6"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Lines That Shouldn&apos;t Have Been There
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            In <span style={{ color: "var(--earth-accent)" }}>1814</span>,
            a Bavarian glassmaker named{" "}
            <span style={{ color: "var(--star-white)" }}>Joseph von Fraunhofer</span>{" "}
            was trying to solve a practical problem. He manufactured
            achromatic lenses for telescopes — lenses that focused all colors
            to the same point — and he needed a precise way to measure how
            different types of glass bent light. He wasn&apos;t an academic.
            He was a craftsman, orphaned at age 11, apprenticed to a mirror
            maker, rescued from a collapsed workshop that killed his master.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            To measure refractive indices, Fraunhofer built an ingenious
            apparatus: a narrow slit, a flint glass prism, and a modified
            surveying theodolite capable of measuring angles to the
            arc-second. He pointed it at sunlight. What he expected was a
            smooth, continuous rainbow. What he found was something
            impossible — a rainbow crossed by{" "}
            <span style={{ color: "var(--earth-accent)" }}>574 dark lines</span>.
            &ldquo;An infinite number of vertical lines of different
            thicknesses,&rdquo; he wrote. &ldquo;These lines are darker than
            the rest of the spectrum, and some of them appear entirely
            black.&rdquo;
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Fraunhofer carefully mapped the most prominent lines, labeling
            them{" "}
            <span style={{ color: "var(--earth-accent)" }}>A through K</span>.
            He noticed that the D-line exactly matched the wavelength of the
            yellow light produced by sodium in a flame — the first hint of a
            connection. But he died at{" "}
            <span style={{ color: "var(--earth-accent)" }}>39</span>, never
            understanding what those dark lines were. He had, without
            realizing it, handed astronomy the key to reading the chemical
            composition of the Sun, the stars, and everything beyond.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 2: How It Works
            With build-as-you-scroll spectrum diagram
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            How Light Carries a Chemical Signature
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The explanation — discovered by{" "}
            <span style={{ color: "var(--star-white)" }}>Gustav Kirchhoff</span>{" "}
            and{" "}
            <span style={{ color: "var(--star-white)" }}>Robert Bunsen</span>{" "}
            in <span style={{ color: "var(--earth-accent)" }}>1859</span>,
            forty-five years after Fraunhofer&apos;s death — is elegantly
            simple. Every chemical element has a unique arrangement of
            electrons, and those electrons can only occupy specific energy
            levels. When an electron jumps between levels, it absorbs or
            emits a photon whose energy equals the gap — which means a
            photon of exactly one wavelength. Sodium always produces two
            close yellow lines at{" "}
            <span style={{ color: "var(--earth-accent)" }}>589.0</span> and{" "}
            <span style={{ color: "var(--earth-accent)" }}>589.6 nm</span>.
            Hydrogen always produces a red line at{" "}
            <span style={{ color: "var(--earth-accent)" }}>656.3 nm</span>.
            These are atomic fingerprints — unique, unchangeable, the same
            in a Bunsen burner in Heidelberg as in a galaxy ten billion
            light-years away.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            When light from a hot, dense source — like the interior of a
            star — passes through a cooler outer layer of gas, atoms in
            that gas absorb photons at their characteristic wavelengths,
            carving dark lines into the continuous spectrum. Fraunhofer had
            been looking at the chemical signature of the Sun&apos;s outer
            atmosphere, written across a rainbow in black.
          </p>
        </AnimatedSection>

        {/* ── Build-as-you-scroll diagram ─────────────── */}
        <SpectrumDiagram />

        <AnimatedSection delay={0.1}>
          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            A modern astronomical spectrograph works on the same principle,
            with one crucial upgrade: a{" "}
            <span style={{ color: "var(--star-white)" }}>diffraction grating</span>{" "}
            — a surface etched with thousands of microscopic parallel
            grooves — spreads light into its component wavelengths with
            precision Fraunhofer could only dream of. The spectrum is
            recorded by a CCD sensor, producing a graph of brightness versus
            wavelength. Every dip in that graph is an absorption line. Every
            line names an element. Every spectrum is a chemical assay of a
            place we will never visit.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 3: Key Discoveries
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            An Element from the Sun
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            On{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              August 18, 1868
            </span>
            , a total solar eclipse swept across India. French astronomer{" "}
            <span style={{ color: "var(--star-white)" }}>
              Jules Janssen
            </span>{" "}
            had traveled there with a spectroscope, hoping to study the
            solar prominences — fiery arches of gas visible only when the
            Moon blocks the Sun&apos;s disk. When he trained his instrument
            on them during totality, he saw a brilliant yellow line at{" "}
            <span style={{ color: "var(--earth-accent)" }}>587.5 nm</span>{" "}
            — right next to the familiar sodium D-lines, but not quite
            matching any element known on Earth.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Two months later, English astronomer{" "}
            <span style={{ color: "var(--star-white)" }}>Norman Lockyer</span>{" "}
            independently observed the same line. He named the mysterious
            element{" "}
            <span style={{ color: "var(--earth-accent)" }}>helium</span>,
            after <em>helios</em> — the Greek Sun. It was the first element
            ever discovered beyond Earth. For{" "}
            <span style={{ color: "var(--earth-accent)" }}>27 years</span>,
            helium remained a curiosity of the solar atmosphere — until{" "}
            <span style={{ color: "var(--earth-accent)" }}>1895</span>,
            when Scottish chemist William Ramsay isolated it from a uranium
            mineral on Earth. Lockyer examined the sample and wept: the
            &ldquo;glorious yellow effulgence&rdquo; he had seen on the Sun
            now glowed in a London laboratory.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Women Who Classified the Stars
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            At the Harvard College Observatory in the late 19th century,
            astronomer Edward Pickering hired a team of women — called the
            &ldquo;Harvard Computers&rdquo; — to process the
            observatory&apos;s growing archive of stellar spectra. Among
            them,{" "}
            <span style={{ color: "var(--star-white)" }}>
              Annie Jump Cannon
            </span>{" "}
            stood out. She could classify three stars per minute, and over
            her career she catalogued more than{" "}
            <span style={{ color: "var(--earth-accent)" }}>225,000</span>{" "}
            stellar spectra.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Cannon created the classification system astronomers still use
            today:{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              O, B, A, F, G, K, M
            </span>
            . The system is arranged by temperature — O stars burn blue-hot
            above{" "}
            <span style={{ color: "var(--earth-accent)" }}>30,000 K</span>,
            while M stars glow cool red below{" "}
            <span style={{ color: "var(--earth-accent)" }}>3,500 K</span>.
            Our Sun is a G-type star, at about{" "}
            <span style={{ color: "var(--earth-accent)" }}>5,800 K</span>.
            Generations of astronomy students remember the sequence with
            &ldquo;Oh Be A Fine Girl, Kiss Me.&rdquo; The
            Hertzsprung-Russell diagram, built from this spectral
            classification, revealed that most stars fall on a &ldquo;main
            sequence&rdquo; — a tight relationship between temperature and
            brightness — with red giants and white dwarfs caught in the act
            of stellar evolution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Reading Alien Skies
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Today, spectroscopy has reached other worlds. The{" "}
            <span style={{ color: "var(--star-white)" }}>
              James Webb Space Telescope
            </span>{" "}
            captures starlight filtering through exoplanet atmospheres
            during transits: the planet passes in front of its star, and a
            tiny fraction of starlight skims through the planet&apos;s
            atmosphere before reaching us. That light carries absorption
            lines from whatever gases are present — a chemical assay of an
            alien sky, performed from a million kilometers away.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            In <span style={{ color: "var(--earth-accent)" }}>2024</span>,
            JWST detected water vapor, carbon dioxide, and methane in the
            atmosphere of{" "}
            <span style={{ color: "var(--star-white)" }}>WASP-39b</span>,
            a hot Saturn-mass planet{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              700 light-years
            </span>{" "}
            away. It found hints of sulfur compounds in the rocky
            super-Earth{" "}
            <span style={{ color: "var(--star-white)" }}>L98-59d</span>.
            On{" "}
            <span style={{ color: "var(--star-white)" }}>55 Cancri e</span>{" "}
            — a lava world twice Earth&apos;s size, so hot its surface is
            molten rock — it saw evidence of a carbon-rich atmosphere
            sustained by volcanic outgassing. We are reading the chemical
            composition of atmospheres light-years away, using the same
            principle Fraunhofer stumbled onto with a prism and a
            theodolite in 1814.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 4: Why It Matters — thesis payoff
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            What the Light Tells Us
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            In{" "}
            <span style={{ color: "var(--earth-accent)" }}>1835</span>, the
            French philosopher Auguste Comte declared that we could never
            know what stars are made of. The distance was simply too vast,
            the objects too remote. He was wrong — and spectroscopy is why.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Every beam of starlight is a letter. Every spectrum is a
            paragraph. Without spectroscopy, the Sun is a bright disk we
            can measure but not understand. With it, the Sun becomes a
            ball of hydrogen and helium, with traces of iron, calcium,
            magnesium, and sodium — elements we know because their
            fingerprints appear in the dark lines of its spectrum. Without
            spectroscopy, a distant planet is an invisible point. With it,
            that point becomes a world with water vapor, methane, and
            carbon dioxide in its air — a chemistry we can read across
            light-years.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Spectroscopy taught us that the universe is made of the same
            elements as our own planet — iron, carbon, oxygen, nitrogen —
            forged in stars and scattered by supernovae. It gave us helium
            from the Sun, the life cycles of stars from Harvard&apos;s
            spectra, and now the atmospheres of planets orbiting distant
            suns. It is not merely a technique — it is a language. And
            Fraunhofer, squinting through his theodolite at dark lines he
            couldn&apos;t explain, was the first to realize there was
            something there to read.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 5: Further Reading
            ================================================ */}
        <AnimatedSection delay={0.2}>
          {/* Divider */}
          <div
            className="mt-16 mb-10 h-px"
            style={{
              background:
                "linear-gradient(to right, var(--earth-accent), transparent)",
              opacity: 0.25,
            }}
          />

          <h3
            className="text-sm tracking-[0.18em] uppercase mb-6"
            style={{ color: "var(--earth-accent)", opacity: 0.7 }}
          >
            Further Reading
          </h3>

          <ul className="space-y-3" style={{ color: "var(--star-dim)" }}>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                The Analysis of Starlight
              </span>{" "}
              — John B. Hearnshaw. The definitive history of astronomical
              spectroscopy, from Fraunhofer to the Hubble Space Telescope.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                The Glass Universe
              </span>{" "}
              — Dava Sobel. The story of the Harvard Computers and how
              their spectral classification of stars built modern
              astrophysics.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                JWST Exoplanet Atmosphere Observations
              </span>{" "}
              — NASA&apos;s public archive of transmission spectroscopy
              results, updated with each new observation cycle.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Cosmos, Episode 4: &ldquo;Heaven and Hell&rdquo;
              </span>{" "}
              — Carl Sagan. A classic explanation of Fraunhofer&apos;s
              discovery and what it means, in Sagan&apos;s inimitable
              voice.
            </li>
          </ul>
        </AnimatedSection>

        {/* ── Closing seal ─────────────────────────────── */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 flex justify-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                border: "1px solid rgba(196, 163, 90, 0.3)",
                background: "rgba(196, 163, 90, 0.06)",
              }}
            >
              <span
                className="text-xs"
                style={{
                  color: "var(--earth-accent)",
                  fontFamily: "var(--font-geist-mono), monospace",
                }}
              >
                λ
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <EarthNextPage
        href="/earth/multi-messenger"
        title="Multi-Messenger Astronomy"
      />

    </main>
  );
}
