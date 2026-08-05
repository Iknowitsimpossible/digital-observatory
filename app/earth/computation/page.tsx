import type { Metadata } from "next";
import ComputationHero from "@/components/earth/ComputationHero";
import SimulationGridDiagram from "@/components/earth/SimulationGridDiagram";
import AnimatedSection from "@/components/orion/AnimatedSection";
import EarthNextPage from "@/components/earth/EarthNextPage";

export const metadata: Metadata = {
  title: "Computational Astrophysics — Universe in a Computer | The Digital Observatory",
  description:
    "How the laws of physics, played forward in a supercomputer, build galaxies — from the Millennium Simulation's 10 billion particles to the cosmic web that matches what we see through telescopes.",
};

/**
 * Computational Astrophysics page — Earth section, scientific methods.
 *
 * Discovery-first narrative structure:
 *   1. Hero — animated particle simulation clustering into cosmic web
 *   2. Discovery hook — the Millennium Simulation (2005)
 *   3. "How?" — N-body + SPH explained, with simulation grid build diagram
 *   4. Key discoveries — cosmic web verification, dark matter distribution
 *   5. Why it matters — thesis payoff
 *   6. Further reading
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for measurement values, key terms
 *   - Simulation cyan (#40c0a0) for grid lines, particle trails
 */

export default function ComputationPage() {
  return (
    <main>
      <ComputationHero />

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
            Universe in a Computer
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How the laws of physics, played forward inside a supercomputer,
            built a cosmos that looks exactly like the one we see through
            telescopes — and why simulation became the third pillar of
            astrophysics, alongside theory and observation.
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
            The Simulation That Built a Universe
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            In{" "}
            <span style={{ color: "var(--earth-accent)" }}>2005</span>, a
            supercomputer in Garching, Germany finished a calculation that had
            run for over a month. It had tracked{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              10 billion particles
            </span>{" "}
            of dark matter, each representing roughly a billion solar masses,
            as gravity pulled them together across{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              13.8 billion years
            </span>{" "}
            of cosmic time. The output —{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              25 terabytes of data
            </span>{" "}
            — was a virtual universe contained in a cube{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              2 billion light-years
            </span>{" "}
            on each side. When the{" "}
            <span style={{ color: "var(--star-white)" }}>
              Millennium Simulation
            </span>{" "}
            finished rendering, it showed a structure that was hauntingly
            familiar: a vast, filamentary web of dark matter halos, with voids
            stretching between them — exactly the cosmic web that astronomers
            had been mapping in the real sky.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The simulation was led by{" "}
            <span style={{ color: "var(--star-white)" }}>Volker Springel</span>{" "}
            at the Max Planck Institute for Astrophysics. It used a code called{" "}
            <span style={{ color: "var(--earth-accent)" }}>GADGET-2</span> —
            which Springel had also written — to solve the gravitational N-body
            problem for an unprecedented number of particles. But the truly
            remarkable thing was that it worked: the simulated universe, seeded
            only with the tiny density fluctuations measured in the cosmic
            microwave background, naturally grew into a structure that matched
            the real universe in extraordinary detail. It was, in a sense, the
            ultimate test of the cold dark matter paradigm — and it passed.
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
            How to Simulate a Universe
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The fundamental challenge of computational astrophysics is
            deceptively simple: we know the laws of physics — gravity,
            hydrodynamics, radiative transfer — but we can&apos;t solve them
            analytically for systems as complex as a galaxy, let alone the
            entire universe. So we simulate. An{" "}
            <span style={{ color: "var(--star-white)" }}>N-body simulation</span>{" "}
            represents the universe as a collection of massive particles and
            asks the computer to calculate the gravitational force between
            every pair. That&apos;s an{" "}
            <span style={{ color: "var(--earth-accent)" }}>O(N²)</span> problem
            — 10 billion particles means 100 quintillion calculations per
            timestep. Doing it naively would be impossible.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Instead, codes like GADGET-2 use clever algorithms:{" "}
            <span style={{ color: "var(--star-white)" }}>tree codes</span>{" "}
            group distant particles together and approximate their combined
            gravitational pull, reducing the complexity to{" "}
            <span style={{ color: "var(--earth-accent)" }}>O(N log N)</span>.
            For gas dynamics,{" "}
            <span style={{ color: "var(--star-white)" }}>
              Smoothed Particle Hydrodynamics
            </span>{" "}
            (SPH) models fluids as particles whose properties are smoothed
            over neighboring regions — a technique first introduced in{" "}
            <span style={{ color: "var(--earth-accent)" }}>1977</span> that
            naturally concentrates computational resources where matter is
            densest. The result is a simulation that can follow the formation
            of cosmic structure from near-uniform initial conditions to the
            intricate web of galaxies we observe today.
          </p>
        </AnimatedSection>

        {/* ── Build-as-you-scroll diagram ─────────────── */}
        <SimulationGridDiagram />

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
            The Third Pillar
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Before simulation, astrophysics had two pillars: theory and
            observation. Theory gave us equations — Einstein&apos;s field
            equations for gravity, the fluid equations for gas dynamics — but
            could only solve them in idealized cases. Observation gave us the
            real sky, but couldn&apos;t show us how it got that way. Simulation
            became the third pillar: a laboratory where you can run the
            universe forward from any set of initial conditions, tweak the
            parameters, and see what emerges. It is, in a precise sense, an
            experiment performed on a theory.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The Millennium Simulation confirmed the{" "}
            <span style={{ color: "var(--star-white)" }}>
              ΛCDM cosmological model
            </span>{" "}
            — cold dark matter plus dark energy — with stunning fidelity. It
            showed that the large-scale clustering of galaxies depends not only
            on halo mass but on assembly history, a phenomenon called
            &ldquo;assembly bias&rdquo; that challenged simpler models. It
            demonstrated that the acoustic oscillations imprinted in the cosmic
            microwave background — sound waves frozen into the early universe —
            survive as subtle ripples in the galaxy distribution, detectable in
            surveys like the Sloan Digital Sky Survey. And it resolved a
            nagging tension: how could billion-solar-mass black holes power
            quasars less than a billion years after the Big Bang? The
            simulation showed that a few rare halos grew massive enough, fast
            enough, to seed them.
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
            From Lightbulbs to Exascale
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The first computational astrophysics experiment was run in{" "}
            <span style={{ color: "var(--earth-accent)" }}>1941</span> by the
            Swedish astronomer Erik Holmberg. He couldn&apos;t use a digital
            computer — none existed — so he built an analog one: a grid of
            lightbulbs whose brightness represented the gravitational force
            between galaxies, with photocells measuring the inverse-square-law
            intensity. He used it to simulate the tidal interaction of two
            passing galaxies, producing spiral-arm patterns that looked
            remarkably like real galaxies. Holmberg published his results —
            without a single line of digital code — and computational
            astrophysics was born.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Today&apos;s simulations run on the world&apos;s fastest
            supercomputers. The successor projects to the Millennium Simulation
            — Illustris, EAGLE, IllustrisTNG — model not just dark matter but
            the full baryonic physics: star formation, supernova feedback,
            black hole accretion, and the chemical enrichment of the
            intergalactic medium. They produce virtual galaxies that look
            disturbingly real, with spiral arms, bulges, bars, and stellar
            halos — all emergent properties that were never programmed in, but
            arose naturally from the underlying physics. The universe,
            it turns out, really is that simple: gravity plus gas plus
            time equals galaxies.
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
            What We Couldn&apos;t Have Known Otherwise
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Without computational astrophysics, the cosmic web is just a
            pattern in the sky — beautiful but mute. With it, that web
            becomes a fossil record: the spacing of filaments encodes the
            sound waves of the early universe, the mass distribution of halos
            encodes the nature of dark matter, the abundance of galaxies
            encodes the physics of star formation and feedback. Every
            simulation that matches observation is a vote of confidence in our
            understanding of physics. Every mismatch is a clue to something
            we&apos;re missing.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Computational astrophysics taught us that the largest structures in
            the universe — the filaments and voids of the cosmic web — are the
            natural outcome of gravity acting on near-uniform initial
            conditions over billions of years. No design, no special initial
            arrangement. Just physics. And that, in its own quiet way, is
            one of the most profound discoveries in the history of science.
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
                Simulations of the Formation, Evolution and Clustering of
                Galaxies and Quasars
              </span>{" "}
              — Springel et al., Nature (2005). The original Millennium
              Simulation paper.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                The IllustrisTNG Project
              </span>{" "}
              — tng-project.org. The state of the art in cosmological
              simulations, with full baryonic physics and publicly
              available data.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Computer Simulation Using Particles
              </span>{" "}
              — R.W. Hockney & J.W. Eastwood. The classic textbook on N-body
              and particle-mesh methods, still relevant after decades.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                GADGET-4
              </span>{" "}
              — Volker Springel&apos;s latest cosmology code, open source and
              used by research groups worldwide. The descendant of the code
              that ran the Millennium Simulation.
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
                ⬡
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <EarthNextPage
        href="/earth/astrobiology"
        title="Astrobiology"
      />

    </main>
  );
}
