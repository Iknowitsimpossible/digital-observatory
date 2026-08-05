import type { Metadata } from "next";
import AstrophotographyHero from "@/components/earth/AstrophotographyHero";
import ImagePipelineDiagram from "@/components/earth/ImagePipelineDiagram";
import AnimatedSection from "@/components/orion/AnimatedSection";
import EarthNextPage from "@/components/earth/EarthNextPage";

export const metadata: Metadata = {
  title: "Astrophotography — Pointing at Nothing | The Digital Observatory",
  description:
    "How Robert Williams bet his career on pointing Hubble at an empty patch of sky for 100 hours — and found 3,000 galaxies where nothing was supposed to be.",
};

/**
 * Astrophotography page — Earth section, scientific methods.
 *
 * Discovery-first narrative structure:
 *   1. Hero — side-by-side raw vs processed frame comparison
 *   2. Discovery hook — Hubble Deep Field (1995)
 *   3. "How?" — imaging pipeline explained with build diagram
 *   4. Key discoveries — CCD revolution, stacking depth
 *   5. Why it matters — thesis payoff
 *   6. Further reading
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for measurement values, key terms
 *   - Sensor amber (#d09040) for exposure data and technical readouts
 */

export default function AstrophotographyPage() {
  return (
    <main>
      <AstrophotographyHero />

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
            Pointing at Nothing
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How one astronomer bet his career on a crazy idea — pointing the
            most expensive telescope ever built at an empty patch of sky for
            100 hours — and found a universe fuller than anyone had imagined.
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
            The Bet
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            In{" "}
            <span style={{ color: "var(--earth-accent)" }}>1995</span>,{" "}
            <span style={{ color: "var(--star-white)" }}>Robert Williams</span>,
            director of the Space Telescope Science Institute, made a decision
            that his colleagues considered reckless. He would use his
            discretionary time —{" "}
            <span style={{ color: "var(--earth-accent)" }}>10%</span> of
            Hubble&apos;s schedule, at his personal disposal — to point the
            telescope at a patch of sky near the Big Dipper that contained
            nothing: no known stars, no known galaxies, no known anything. For{" "}
            <span style={{ color: "var(--earth-accent)" }}>100 hours</span>,
            over ten consecutive days in December, Hubble stared at a region
            about{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              1/30th the width
            </span>{" "}
            of the full Moon. It took{" "}
            <span style={{ color: "var(--earth-accent)" }}>342 separate exposures</span>.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            John Bahcall, one of Hubble&apos;s founding scientists, visited
            Williams twice to talk him out of it. He argued the telescope would
            not reveal any new population of galaxies — it was a waste of
            precious observing time. The telescope had only recently recovered
            from the humiliation of a flawed primary mirror requiring an
            emergency spacewalk repair. Another failure could be fatal. Williams
            told Bahcall: &ldquo;I&apos;m willing to fall on my sword.&rdquo;
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            When the images were combined and processed, the{" "}
            <span style={{ color: "var(--star-white)" }}>Hubble Deep Field</span>{" "}
            showed not emptiness but abundance: over{" "}
            <span style={{ color: "var(--earth-accent)" }}>3,000 galaxies</span>
            , some dating back to within a billion years of the Big Bang. The
            estimated number of galaxies in the observable universe jumped from
            10 billion to{" "}
            <span style={{ color: "var(--earth-accent)" }}>50 billion</span>.
            Young galaxies looked strange — irregular, colliding, bursting with
            star formation — nothing like the serene spirals of the modern
            universe. Robert Kirshner, who had opposed the idea, later admitted:
            &ldquo;Bob was right, I was wrong. The use of that discretionary
            time was a courageous thing.&rdquo; Williams himself understated it
            beautifully: &ldquo;It turned out to be a neat image. Really.&rdquo;
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
            From Glass Plates to Gigapixels
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            For most of its history, astrophotography used{" "}
            <span style={{ color: "var(--star-white)" }}>photographic plates</span>{" "}
            — glass coated with light-sensitive emulsion. They had a quantum
            efficiency of about{" "}
            <span style={{ color: "var(--earth-accent)" }}>1%</span>: 99% of
            arriving photons were wasted. They responded non-linearly to light,
            making brightness measurements unreliable. Yet for over a century,
            every astronomical discovery image — from Hubble&apos;s Cepheid
            variables to the expansion of the universe — was recorded on glass.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The{" "}
            <span style={{ color: "var(--star-white)" }}>CCD revolution</span>{" "}
            of the 1980s changed everything. A charge-coupled device is a
            silicon chip divided into millions of light-sensitive pixels. Each
            photon striking the silicon liberates an electron via the
            photoelectric effect; those electrons accumulate in potential wells
            during the exposure. When read out, the charge is converted to a
            digital number. Modern CCDs achieve quantum efficiencies above{" "}
            <span style={{ color: "var(--earth-accent)" }}>95%</span>, respond
            linearly across a vast range, and output directly to a computer. A
            modern astrophotograph is not a single image but a composite:
            dozens or hundreds of calibrated, aligned, and stacked exposures
            that together reveal objects far fainter than any single frame
            could show.
          </p>
        </AnimatedSection>

        {/* ── Build-as-you-scroll diagram ─────────────── */}
        <ImagePipelineDiagram />

        <AnimatedSection delay={0.1}>
          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The calibration pipeline is meticulous.{" "}
            <span style={{ color: "var(--star-white)" }}>Bias frames</span>{" "}
            (zero-length exposures) measure each pixel&apos;s electronic offset.{" "}
            <span style={{ color: "var(--star-white)" }}>Dark frames</span>{" "}
            (identical exposures with the shutter closed) subtract thermal
            noise — which is why astronomical CCDs are cooled to{" "}
            <span style={{ color: "var(--earth-accent)" }}>−120°C</span>.{" "}
            <span style={{ color: "var(--star-white)" }}>Flat fields</span>{" "}
            (images of a uniformly illuminated surface) correct for
            pixel-to-pixel sensitivity variations, vignetting, and dust motes
            on the optics. Only after all three corrections are applied can
            frames be aligned and stacked — and only after stacking does the
            faint structure of a galaxy, invisible in any single exposure,
            emerge from the noise.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 3: Key Theme — The Art and the Science
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Deepest Images Ever Made
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            The Hubble Deep Field was only the beginning. In{" "}
            <span style={{ color: "var(--earth-accent)" }}>2004</span>, the
            Hubble Ultra Deep Field pushed deeper —{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              11.3 days of exposure
            </span>{" "}
            over 400 orbits, revealing galaxies from when the universe was only{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              400 million years old
            </span>
            . The Extreme Deep Field (2012) combined 10 years of Hubble
            observations into a single image reaching back{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              13.2 billion years
            </span>
            , to within 500 million years of the Big Bang. Each generation of
            these images has rewritten what we know about the early universe —
            when the first stars ignited, how the first galaxies assembled, how
            quickly cosmic structure emerged from primordial gas.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Astrophotography is unique among the Earth methods because it
            straddles art and science. The aesthetic decisions — color balance,
            contrast stretch, framing — are also scientific ones: which
            wavelengths to emphasize, which structures to reveal, which
            artifacts to suppress. Every astro-image is an argument about what
            matters in the data. The Hubble Deep Field was an argument that
            looking at nothing — really looking, for a long time, with our best
            instruments — is sometimes the most important thing we can do. The
            argument won.
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
            What the Photons Tell Us
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Without astrophotography, astronomy is drawing by hand — subjective,
            imprecise, limited to what the eye can see in a single moment.
            Galileo sketched the Moon through his telescope; his drawings are
            beautiful but they are interpretations, not data. The first
            daguerreotype of the Moon, taken by John William Draper in{" "}
            <span style={{ color: "var(--earth-accent)" }}>1840</span>, was the
            beginning of objective astronomical record-keeping. From that moment
            forward, the history of astrophotography is the history of seeing
            deeper, fainter, and further back in time than the human eye — or
            any single observation — could ever manage.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Astrophotography taught us that the universe is not just bigger
            than we thought — it is richer, stranger, and more dynamic. The
            Hubble Deep Field multiplied the known galaxy count fivefold in a
            single image. The Ultra Deep Field pushed the observable horizon to
            within a cosmic heartbeat of the beginning. Every improvement in
            detector technology, every refinement of the calibration pipeline,
            every additional hour of integration time reveals more of what was
            always there, waiting for someone to point a camera at it and be
            patient enough to see.
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
                The Hubble Deep Field: The Most Important Image Ever Taken
              </span>{" "}
              — Robert Williams, in the STScI Newsletter. Williams&apos; own
              account of the decision and the discovery.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                The Deepest Image of the Universe Ever Taken
              </span>{" "}
              — NASA Hubble Site. An accessible overview of the Hubble Ultra
              Deep Field and Extreme Deep Field, with downloadable images.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Making Every Photon Count
              </span>{" "}
              — Steve Richards. A comprehensive guide to modern amateur
              astrophotography, covering equipment, calibration, and
              processing techniques in detail.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                The Digital Universe: Astrophotography in the CCD Era
              </span>{" "}
              — Harvard-Smithsonian Center for Astrophysics. The technical
              evolution from photographic plates to modern digital sensors.
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
                ◉
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <EarthNextPage
        href="/earth"
        title="Earth Methods"
        label="Return to"
      />

    </main>
  );
}
