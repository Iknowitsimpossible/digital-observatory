import type { Metadata } from "next";
import MultiMessengerHero from "@/components/earth/MultiMessengerHero";
import ConvergingSignalsDiagram from "@/components/earth/ConvergingSignalsDiagram";
import AnimatedSection from "@/components/orion/AnimatedSection";
import EarthNextPage from "@/components/earth/EarthNextPage";

export const metadata: Metadata = {
  title: "Multi-Messenger Astronomy — Listening with New Ears | The Digital Observatory",
  description:
    "How gravitational waves, neutrinos, and light together revealed a universe invisible to telescopes alone — from GW170817's colliding neutron stars to the first cosmic neutrino source ever identified.",
};

/**
 * Multi-Messenger Astronomy page — Earth section, scientific methods.
 *
 * Discovery-first narrative structure:
 *   1. Hero — merging neutron stars + concentric signal ripples
 *   2. Discovery hook — GW170817: the first event seen in both GW and light
 *   3. "How?" — the method explained, with converging signals timeline diagram
 *   4. Key discoveries — GW170817 kilonova + IceCube blazar neutrino
 *   5. Why it matters — thesis payoff
 *   6. Further reading
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for measurement values, key terms
 *   - Signal blue (#5599dd) for gravitational wave elements
 *   - Warm gold for EM references
 *   - Pale blue for neutrino elements
 */

export default function MultiMessengerPage() {
  return (
    <main>
      <MultiMessengerHero />

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
            Listening with New Ears
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            For all of human history, astronomy meant one thing: light. Then,
            in the span of a few years, we gained three new senses — and the
            universe spoke in languages we had never heard before.
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
            Section 1: Discovery Hook — GW170817
            ================================================ */}
        <AnimatedSection delay={0.1}>
          <h2
            className="text-xl md:text-2xl font-light mb-6"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Chirp Heard Around the World
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            On{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              August 17, 2017
            </span>
            , at{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              12:41:04 UTC
            </span>
            , a ripple in the fabric of spacetime washed across Earth. The
            LIGO detectors in Hanford, Washington and Livingston, Louisiana —
            along with Virgo in Italy — recorded a{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              100-second chirp
            </span>
            : two ultra-dense neutron stars, each with more mass than the Sun
            packed into a city-sized sphere, spiraling into each other at
            nearly the speed of light. The signal, designated{" "}
            <span style={{ color: "var(--star-white)" }}>GW170817</span>, was
            the loudest gravitational-wave event ever detected. Then came the
            alert.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Within{" "}
            <span style={{ color: "var(--earth-accent)" }}>1.7 seconds</span>,
            NASA&apos;s Fermi Gamma-ray Space Telescope saw a short gamma-ray
            burst from the same direction — GRB 170817A. Within hours,
            telescopes around the world slewed to the same patch of sky in the
            constellation Hydra. The{" "}
            <span style={{ color: "var(--star-white)" }}>Swope Telescope</span>{" "}
            in Chile found it first: a bright blue transient in the galaxy{" "}
            <span style={{ color: "var(--earth-accent)" }}>NGC 4993</span>,
            shining where nothing had been the night before. For the first time
            in history, humanity had observed the same cosmic event through two
            fundamentally different messengers — spacetime ripples and light.
            Multi-messenger astronomy was born.
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
            Four Messengers, One Universe
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            For centuries, astronomy was single-messenger: we only had{" "}
            <span style={{ color: "var(--star-white)" }}>electromagnetic radiation</span>{" "}
            — visible light, then later radio waves, X-rays, infrared,
            ultraviolet, and gamma rays. Each slice of the spectrum revealed
            different physics, but they were all still light. The universe,
            however, communicates through at least four independent channels:
          </p>

          <ul className="space-y-2 mt-4 text-base leading-[1.75]" style={{ color: "var(--star-dim)" }}>
            <li>
              <span style={{ color: "rgba(85,153,221,0.9)" }}>Gravitational waves</span>
              {" "}— ripples in spacetime itself, produced by the acceleration of massive objects. LIGO and Virgo detect them by measuring changes in arm length smaller than a proton&apos;s width.
            </li>
            <li>
              <span style={{ color: "rgba(196,163,90,0.9)" }}>Electromagnetic radiation</span>
              {" "}— the traditional messenger: radio through gamma rays, spanning 30 orders of magnitude in wavelength.
            </li>
            <li>
              <span style={{ color: "rgba(160,200,240,0.85)" }}>Neutrinos</span>
              {" "}— ghostly particles that barely interact with matter. IceCube, buried in Antarctic ice, uses a cubic kilometer of ice as its detector.
            </li>
            <li>
              <span style={{ color: "rgba(196,163,90,0.6)" }}>Cosmic rays</span>
              {" "}— high-energy charged particles whose paths are bent by magnetic fields, making their origins hard to trace — but their very existence points to powerful accelerators.
            </li>
          </ul>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Each messenger tells a different part of the story. Gravitational
            waves reveal the masses and spins of the colliding objects.
            Electromagnetic radiation reveals the chemical composition and
            temperature of the ejected material. Neutrinos reveal the
            high-energy particle physics at the core of the event. No single
            messenger tells the whole truth — but together, they converge on
            a complete picture.
          </p>
        </AnimatedSection>

        {/* ── Build-as-you-scroll diagram ─────────────── */}
        <ConvergingSignalsDiagram />

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
            Gold from the Sky
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            GW170817 didn&apos;t just confirm that neutron star mergers produce
            gravitational waves. The electromagnetic follow-up — involving over{" "}
            <span style={{ color: "var(--earth-accent)" }}>70 observatories</span>{" "}
            on every continent and in space — revealed something astonishing.
            The optical and infrared glow, dubbed AT 2017gfo, evolved from blue
            to deep red over days. This spectral fingerprint matched a{" "}
            <span style={{ color: "var(--star-white)" }}>kilonova</span>: a
            cloud of neutron-rich material, expanding at{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              30% the speed of light
            </span>
            , in which rapid neutron capture — the{" "}
            <span style={{ color: "var(--star-white)" }}>r-process</span> —
            was forging heavy elements.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The spectra showed the unmistakable signature of lanthanides — the
            rare-earth elements that absorb blue light and glow red. The merger
            had produced an estimated{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              10 Earth masses of gold
            </span>{" "}
            and even more platinum. For decades, astrophysicists had suspected
            that neutron star mergers were the universe&apos;s heavy-element
            factories. GW170817 confirmed it in a single, spectacular
            multi-messenger observation. The gold in your jewelry, the platinum
            in your electronics — they were likely forged in a collision like
            this one, somewhere in the universe, billions of years ago.
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
            A Ghost Particle&apos;s Return Address
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Just five weeks after GW170817, on{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              September 22, 2017
            </span>
            , another multi-messenger milestone arrived — this time pairing
            light with neutrinos. The{" "}
            <span style={{ color: "var(--star-white)" }}>IceCube Neutrino Observatory</span>
            , a detector composed of over 5,000 optical sensors frozen deep in
            the Antarctic ice, captured a single neutrino with an energy of{" "}
            <span style={{ color: "var(--earth-accent)" }}>290 TeV</span> —
            roughly{" "}
            <span style={{ color: "var(--earth-accent)" }}>40 times</span> the
            collision energy of the Large Hadron Collider. IceCube&apos;s
            real-time alert system broadcast the coordinates within seconds.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Fermi&apos;s Large Area Telescope scanned the region and found a
            known blazar —{" "}
            <span style={{ color: "var(--star-white)" }}>TXS 0506+056</span> —
            flaring brightly in gamma rays. A blazar is a supermassive black
            hole with a relativistic jet aimed directly at Earth. MAGIC
            telescopes in the Canary Islands confirmed the signal at
            even higher energies. For the first time, astronomers had traced a
            high-energy neutrino back to its astrophysical source. The
            implications were profound: blazar jets are powerful enough to
            accelerate protons to ultra-high energies, making them a likely
            source of the mysterious cosmic rays that have puzzled physicists
            for over a century.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Even more remarkably, IceCube then searched its archival data and
            found a{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              3.5-sigma excess
            </span>{" "}
            of neutrinos from the same blazar during a five-month period in
            2014-2015 — an independent confirmation that the source was real.
            Multi-messenger astronomy had graduated from a single event to a
            repeatable method.
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
            Before 2017, no one had ever detected gravitational waves and light
            from the same event. No one had ever traced a cosmic neutrino to
            its source. No one had ever confirmed that neutron star mergers
            forge the universe&apos;s heavy elements. Multi-messenger astronomy
            answered all three questions in a single year — and each answer
            opened a dozen new questions.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The future is even more ambitious. The next generation of
            gravitational-wave detectors — Cosmic Explorer and the Einstein
            Telescope — will see mergers across the entire observable universe.
            IceCube-Gen2 will expand the Antarctic detector tenfold. The Rubin
            Observatory will scan the sky every few nights, catching optical
            counterparts to gravitational-wave and neutrino alerts in near-real
            time. For the first time, we are building an observatory that spans
            the entire planet and reaches from the deep ice to deep space —
            listening to every messenger the universe sends.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Multi-messenger astronomy teaches us that the universe is not
            silent — it speaks in gravity, in light, in ghost particles
            streaming through our planet by the trillions every second. We just
            needed to learn how to listen.
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
                GW170817: Observation of Gravitational Waves from a Binary
                Neutron Star Inspiral
              </span>{" "}
              — Abbott et al., Physical Review Letters (2017). The
              landmark paper by the LIGO-Virgo collaboration, with over
              3,500 co-authors.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Multimessenger Observations of a Flaring Blazar Coincident
                with High-Energy Neutrino IceCube-170922A
              </span>{" "}
              — IceCube Collaboration et al., Science (2018). The first
              identification of a cosmic neutrino source.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Gravity&apos;s Kiss
              </span>{" "}
              — Harry Collins. A sociologist of science chronicles the
              decades-long effort to detect gravitational waves, the false
              alarms, the controversies, and the eventual triumph.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                IceCube Neutrino Observatory
              </span>{" "}
              — icecube.wisc.edu. Real-time alerts, detector status, and
              educational resources from the South Pole&apos;s strangest
              telescope.
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
                ⟐
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <EarthNextPage
        href="/earth/computation"
        title="Computational Astrophysics"
      />

    </main>
  );
}
