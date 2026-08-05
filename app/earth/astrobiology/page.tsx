import type { Metadata } from "next";
import AstrobiologyHero from "@/components/earth/AstrobiologyHero";
import ExoplanetTransitDiagram from "@/components/earth/ExoplanetTransitDiagram";
import AnimatedSection from "@/components/orion/AnimatedSection";
import EarthNextPage from "@/components/earth/EarthNextPage";

export const metadata: Metadata = {
  title: "Astrobiology — Life Beyond Earth | The Digital Observatory",
  description:
    "How deep-sea extremophiles rewrote the rules of habitability, and how we now search for the chemical signature of life in the atmospheres of worlds orbiting distant suns.",
};

/**
 * Astrobiology page — Earth section, scientific methods.
 *
 * Discovery-first narrative structure:
 *   1. Hero — animated exoplanet transit with atmospheric spectrum
 *   2. Discovery hook — hydrothermal vents (1977) + extremophiles
 *   3. "How?" — transit spectroscopy explained with build diagram
 *   4. Key discoveries — exoplanet revolution, JWST biosignature search
 *   5. Why it matters — thesis payoff
 *   6. Further reading
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for measurement values, key terms
 *   - Bio green (#60b860) for biosignature markers, organic molecule labels
 */

export default function AstrobiologyPage() {
  return (
    <main>
      <AstrobiologyHero />

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
        <AnimatedSection>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-4"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Life Beyond Earth
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How life in the crushing darkness of the deep ocean rewrote the
            rules of where life can exist — and how we now search for its
            chemical signature in the atmospheres of alien worlds.
          </p>
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
            ================================================ */}
        <AnimatedSection delay={0.1}>
          <h2
            className="text-xl md:text-2xl font-light mb-6"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Garden at the Bottom of the Sea
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            In{" "}
            <span style={{ color: "var(--earth-accent)" }}>1977</span>, the
            research submersible <em>Alvin</em> descended to the Galápagos Rift,
            a volcanic fissure{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              2,500 meters
            </span>{" "}
            below the Pacific surface. What the scientists aboard expected to
            find was barren seafloor. What they found instead were towering
            hydrothermal vents — &ldquo;black smokers&rdquo; — spewing
            superheated water at{" "}
            <span style={{ color: "var(--earth-accent)" }}>350°C</span>,
            surrounded by an ecosystem that should not have existed: giant tube
            worms with bright red plumes, blind shrimp in teeming swarms, and
            mats of bacteria feeding on hydrogen sulfide. No sunlight reaches
            these depths. Every organism in this garden relied instead on{" "}
            <span style={{ color: "var(--star-white)" }}>chemosynthesis</span>{" "}
            — the conversion of chemicals from the vent fluids directly into
            energy. Life, it turned out, did not need the Sun.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The discovery shattered a foundational assumption: that all
            ecosystems ultimately depend on photosynthesis. If life could
            thrive in total darkness, powered by volcanic chemistry, then the
            habitable universe had just become vastly larger. The subsurface
            oceans of Jupiter&apos;s moon Europa and Saturn&apos;s Enceladus —
            dark, salty, warmed by tidal friction — suddenly looked less like
            frozen wastelands and more like the hydrothermal vent communities
            on Earth. The search for life beyond Earth had found its
            organizing principle: follow the water, the chemistry, and the
            energy gradient.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 2: How It Works
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Reading Alien Air
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            We cannot visit an exoplanet — the nearest one is over four
            light-years away. But we can read its atmosphere. When a planet
            passes in front of its star — a{" "}
            <span style={{ color: "var(--star-white)" }}>transit</span> — a
            tiny fraction of starlight skims through the planet&apos;s
            atmosphere before continuing toward Earth. Gases in that
            atmosphere absorb specific wavelengths, carving a chemical
            fingerprint into the starlight. The technique is called{" "}
            <span style={{ color: "var(--star-white)" }}>
              transmission spectroscopy
            </span>
            , and it is identical in principle to Fraunhofer pointing a prism
            at sunlight in 1814 — except now the light has traveled across
            interstellar space and passed through an alien sky.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The{" "}
            <span style={{ color: "var(--star-white)" }}>
              James Webb Space Telescope
            </span>{" "}
            was designed in part for this task. Its infrared sensitivity lets
            it detect molecular signatures that Hubble could not: water vapor,
            carbon dioxide, methane, and — most tantalizingly — potential
            biosignature gases like oxygen, ozone, and dimethyl sulfide. On
            Earth, oxygen is almost entirely produced by photosynthesis.
            Methane is produced by microbes and larger organisms. Finding both
            in the same atmosphere, far from chemical equilibrium, would be a
            powerful hint — though not proof — of biological activity.
          </p>
        </AnimatedSection>

        {/* ── Build-as-you-scroll diagram ─────────────── */}
        <ExoplanetTransitDiagram />

        {/* ================================================
            Section 3: Key Discoveries
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-8"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Exoplanet Revolution
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Before{" "}
            <span style={{ color: "var(--earth-accent)" }}>1992</span>, every
            planet we knew orbited a single star: the Sun. Then radio
            astronomers Aleksander Wolszczan and Dale Frail detected two
            planets orbiting a pulsar — a dead star emitting radio pulses.
            Three years later, in{" "}
            <span style={{ color: "var(--earth-accent)" }}>1995</span>, Michel
            Mayor and Didier Queloz discovered{" "}
            <span style={{ color: "var(--star-white)" }}>51 Pegasi b</span>,
            the first exoplanet around a Sun-like star. It was a &ldquo;hot
            Jupiter&rdquo; — a gas giant orbiting so close to its star that a
            year lasted just{" "}
            <span style={{ color: "var(--earth-accent)" }}>4.2 days</span>.
            Nothing in our solar system prepared us for it. Mayor and Queloz
            won the{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              2019 Nobel Prize
            </span>
            . As of today, astronomers have confirmed over{" "}
            <span style={{ color: "var(--earth-accent)" }}>5,500</span>{" "}
            exoplanets, with thousands more candidates awaiting confirmation.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The diversity is staggering: lava worlds, water worlds, planets
            with the density of cotton candy, planets orbiting two stars,
            planets ejected from their systems to wander the galaxy alone. Most
            stars, it now appears, have planets. A significant fraction are
            rocky and lie in the &ldquo;habitable zone&rdquo; — the orbital
            distance where surface temperatures could allow liquid water.{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              Billions of potentially Earth-like worlds
            </span>{" "}
            exist in the Milky Way alone. The question is no longer whether
            there are other Earths — it is whether any of them are alive.
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
            A Hint in the Spectrum
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            In <span style={{ color: "var(--earth-accent)" }}>2023</span>, JWST
            turned toward{" "}
            <span style={{ color: "var(--star-white)" }}>K2-18 b</span>, a
            sub-Neptune world{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              124 light-years
            </span>{" "}
            away in the habitable zone of a red dwarf star. The telescope
            detected methane and carbon dioxide with high confidence — a
            carbon-bearing atmosphere consistent with a &ldquo;hycean&rdquo;
            world, one with a liquid water ocean beneath a hydrogen-rich sky.
            But there was also a tentative hint of{" "}
            <span style={{ color: "var(--star-white)" }}>
              dimethyl sulfide
            </span>{" "}
            (DMS), a compound that, on Earth, is produced almost exclusively by
            marine phytoplankton. The signal was weak — below the statistical
            threshold for a confirmed detection — and subsequent analysis
            suggested it may be an instrumental artifact or an abiotic
            contaminant. The DMS hint remains unconfirmed. But the mere fact
            that we can have this debate — that we can detect, or nearly
            detect, a potential biosignature on a planet over a hundred
            light-years away — is extraordinary.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The search continues. Future instruments — JWST&apos;s continued
            observations, the Extremely Large Telescope, and eventually a
            dedicated exoplanet imaging mission like the Habitable Worlds
            Observatory — will push the sensitivity further. Each new spectrum
            is a chemical assay of an alien sky. We may not find a definitive
            biosignature in our lifetimes. But the method is sound, the
            instruments are improving, and the sample size — billions of
            potentially habitable worlds — is staggeringly large.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 4: Why It Matters
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            What We Might Learn
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Without astrobiology, we have a sample size of one: Earth. We know
            life emerged here, but we don&apos;t know how easily, or how often,
            or under what conditions. Is life a cosmic inevitability — a
            chemical phase transition that occurs whenever liquid water, energy,
            and time are present? Or is it a vanishingly rare accident, a
            one-in-a-trillion lottery that happened to pay out here? We simply
            do not know.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Astrobiology is the science that seeks to answer this question —
            not through speculation, but through evidence. Extremophiles teach
            us the boundary conditions. Exoplanet surveys tell us how many
            candidate worlds exist. Transmission spectroscopy lets us read
            their air. A single confirmed biosignature — oxygen and methane in
            persistent disequilibrium, or a seasonal cycle of an organic gas
            — would transform our understanding of our place in the universe.
            It would mean that life is not a terrestrial peculiarity but a
            cosmic phenomenon. And that, arguably, is the most important
            scientific discovery we could ever make.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 5: Further Reading
            ================================================ */}
        <AnimatedSection delay={0.2}>
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
                The Zoologist&apos;s Guide to the Galaxy
              </span>{" "}
              — Arik Kershenbaum. A zoologist&apos;s rigorous, entertaining
              framework for what alien life might actually be like, grounded
              in evolutionary biology.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                The Possibility of Life
              </span>{" "}
              — Jaime Green. A beautifully written survey of astrobiology,
              from extremophiles on Earth to the search for biosignatures
              on exoplanets.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Carbon Dioxide and Methane in the Atmosphere of K2-18 b
              </span>{" "}
              — Madhusudhan et al., The Astrophysical Journal Letters (2023).
              The JWST observations that sparked the DMS biosignature debate.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                NASA Astrobiology
              </span>{" "}
              — astrobiology.nasa.gov. The field&apos;s central hub: mission
              updates, research highlights, and educational resources.
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
                🜁
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <EarthNextPage
        href="/earth/astrophotography"
        title="Astrophotography"
      />

    </main>
  );
}
