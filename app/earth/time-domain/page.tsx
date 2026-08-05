import type { Metadata } from "next";
import TimeDomainHero from "@/components/earth/TimeDomainHero";
import LightCurveDiagram from "@/components/earth/LightCurveDiagram";
import AnimatedSection from "@/components/orion/AnimatedSection";
import EarthNextPage from "@/components/earth/EarthNextPage";

export const metadata: Metadata = {
  title: "Time-Domain Astronomy — The Universe in Motion | The Digital Observatory",
  description:
    "How astronomers learned to watch the sky change in real time — from ancient Chinese supernova records to SN 1987A's neutrino detection to the Vera Rubin Observatory's 10 million nightly alerts.",
};

/**
 * Time-Domain Astronomy page — Earth section, scientific methods.
 *
 * Discovery-first narrative structure:
 *   1. Hero — animated star field with pulsing transient + light curve
 *   2. Discovery hook — SN 1987A: the night a star appeared
 *   3. "How?" — the method explained, with build-as-you-scroll light curve diagram
 *   4. Key discoveries — Zwicky, SN 1987A neutrinos, modern surveys (ZTF, LSST)
 *   5. Why it matters — thesis payoff
 *   6. Further reading
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for measurement values, key terms, diagram elements
 *   - Pulse red (#e05555) for transient event markers, alert highlights
 *   - Reading panel: dark translucent card, Merriweather, max-w-3xl
 */

export default function TimeDomainPage() {
  return (
    <main>
      {/* ====================================================
          Hero — animated star field + pulsing transient + light curve
          ==================================================== */}
      <TimeDomainHero />

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
            The Universe in Motion
          </h1>
          <p
            className="text-base md:text-lg leading-[1.85] mb-2"
            style={{ color: "var(--star-dim)", opacity: 0.7 }}
          >
            How astronomers learned to stop seeing the sky as fixed and eternal
            — and discovered a universe that flickers, erupts, and transforms
            before our eyes.
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
            Section 1: Discovery Hook — SN 1987A
            ================================================ */}
        <AnimatedSection delay={0.1}>
          <h2
            className="text-xl md:text-2xl font-light mb-6"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Night a Star Appeared
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            On{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              February 23, 1987
            </span>
            , a{" "}
            <span style={{ color: "var(--star-white)" }}>Chilean night assistant</span>{" "}
            named Oscar Duhalde stepped outside Las Campanas Observatory for
            coffee. He glanced up at the Large Magellanic Cloud — a satellite
            galaxy{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              168,000 light-years
            </span>{" "}
            away — and noticed something wrong. There was a star where no star
            should be, shining at{" "}
            <span style={{ color: "var(--earth-accent)" }}>5th magnitude</span>,
            just visible to the naked eye. Duhalde was the first person in
            nearly four centuries to see an exploding star without a telescope.
            Then he got absorbed in his work and forgot to report it.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            A few hours later, on the same mountain, a former amateur
            astronomer named{" "}
            <span style={{ color: "var(--star-white)" }}>Ian Shelton</span>{" "}
            developed a photographic plate he had just taken of the Tarantula
            Nebula region. A bright spot leapt out. He ran outside, looked up,
            confirmed it with his own eyes, and became the official discoverer
            of{" "}
            <span style={{ color: "var(--earth-accent)" }}>SN 1987A</span> —
            the closest supernova in nearly 400 years. Meanwhile, in Japan, a
            PhD student named{" "}
            <span style={{ color: "var(--star-white)" }}>Masayuki Nakahata</span>{" "}
            was about to find something even more extraordinary buried in the
            data from the Kamiokande-II neutrino detector:{" "}
            <span style={{ color: "var(--earth-accent)" }}>11 neutrinos</span>{" "}
            that had arrived from deep space, hours before the light. For the
            first time in history, we had detected a stellar explosion through
            a messenger other than light — and confirmed that the sky is not
            static, but alive.
          </p>
        </AnimatedSection>

        {/* ================================================
            Section 2: How It Works
            With build-as-you-scroll light curve diagram
            ================================================ */}
        <AnimatedSection delay={0.15}>
          <h2
            className="text-xl md:text-2xl font-light mb-6 mt-16"
            style={{
              color: "var(--star-white)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            How to Read a Cosmic Clock
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Time-domain astronomy is fundamentally simple: it watches the same
            patch of sky repeatedly, looking for anything that changes. The raw
            tool is the{" "}
            <span style={{ color: "var(--star-white)" }}>light curve</span> —
            a plot of an object&apos;s brightness against time. But that
            seemingly simple graph encodes staggering physics.{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              A supernova&apos;s light curve
            </span>{" "}
            is the signature of a dying star: the initial shock breakout when
            the explosion reaches the stellar surface, the weeks-long rise as
            the expanding fireball grows, the plateau sustained by hydrogen
            recombination, and the months-long radioactive tail powered by the
            decay of{" "}
            <span style={{ color: "var(--earth-accent)" }}>nickel-56</span>{" "}
            into cobalt-56 into iron-56. Each phase is a chapter of a stellar
            death, read in photons.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Not all transients are supernovae.{" "}
            <span style={{ color: "var(--star-white)" }}>Variable stars</span>{" "}
            pulse regularly — Cepheids brighten and dim with clockwork
            precision, and their period reveals their intrinsic luminosity,
            making them cosmic distance markers.{" "}
            <span style={{ color: "var(--star-white)" }}>
              Tidal disruption events
            </span>{" "}
            flash when a star wanders too close to a supermassive black hole
            and is torn apart.{" "}
            <span style={{ color: "var(--star-white)" }}>Kilonovae</span> glow
            for days when two neutron stars collide and forge heavy elements.
            Each transient type writes its own shape into the light curve —
            and astronomers have learned to read them all.
          </p>
        </AnimatedSection>

        {/* ── Build-as-you-scroll diagram ─────────────── */}
        <LightCurveDiagram />

        <AnimatedSection delay={0.1}>
          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Modern surveys automate this watching. The{" "}
            <span style={{ color: "var(--star-white)" }}>
              Zwicky Transient Facility
            </span>{" "}
            at Palomar Observatory scans the entire northern sky every two
            nights, generating hundreds of thousands of alerts. Each alert is a
            pixel that changed brightness — and somewhere in that flood of
            data, a few might be the next SN 1987A, the next gravitational-wave
            counterpart, the next discovery that rewrites a textbook.
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
            The Man Who Invented the Supernova
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Time-domain astronomy has an unlikely founding father.{" "}
            <span style={{ color: "var(--star-white)" }}>Fritz Zwicky</span>,
            a Swiss physicist at Caltech, was brilliant, abrasive, and — in the
            words of colleagues — &ldquo;the kind of man who would call you a
            spherical bastard: a bastard no matter which way you look at
            him.&rdquo; But in{" "}
            <span style={{ color: "var(--earth-accent)" }}>1934</span>, he and
            Walter Baade proposed a radical idea: when a massive star collapses,
            its core transforms into a sphere of neutrons — a{" "}
            <span style={{ color: "var(--earth-accent)" }}>neutron star</span>{" "}
            — and the gravitational energy released blows the outer layers apart
            in an explosion they named a &ldquo;super-nova.&rdquo; The Crab
            Nebula, they argued, was a thousand-year-old supernova remnant. The
            universe, they insisted, was not static — it was a theater of
            catastrophe.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Zwicky didn&apos;t stop at theory. He built the first systematic
            supernova search: an 18-inch Schmidt telescope on Palomar Mountain,
            operated by hand, night after night. By the start of World War II,
            he had discovered roughly{" "}
            <span style={{ color: "var(--earth-accent)" }}>50 supernovae</span>{" "}
            — more than anyone in history — and established the Type I / Type II
            classification that astronomers still use. He anticipated everything
            modern time-domain astronomy would become: wide-field telescopes,
            automated detection, real-time alerts, rapid spectroscopic
            follow-up. He was decades ahead of his time and insufferable about
            it. But he was right.
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
            Ghost Particles from a Dying Star
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            When SN 1987A&apos;s neutrinos arrived at Kamiokande-II — a tank
            of{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              3,000 tons of water
            </span>{" "}
            buried in a Japanese mine — they did something unprecedented: they
            confirmed that the core-collapse theory of supernovae was correct.
            Theory predicted that when an iron core can no longer sustain
            fusion, it collapses in less than a second, releasing{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              3 × 10⁵³ ergs
            </span>{" "}
            of gravitational energy — about{" "}
            <span style={{ color: "var(--earth-accent)" }}>100 times</span> the
            energy the Sun will emit in its entire 10-billion-year lifetime. And{" "}
            <span style={{ color: "var(--earth-accent)" }}>99%</span> of that
            energy escapes as neutrinos. The visible supernova — as bright as
            an entire galaxy — is just the afterglow.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Kamiokande detected 11 of those neutrinos. The IMB detector in Ohio
            caught 8 more. The Baksan detector in Russia found 5. A total of 24
            subatomic particles, out of the estimated{" "}
            <span style={{ color: "var(--earth-accent)" }}>10⁵⁸</span> the
            supernova emitted. It was enough. The neutrinos arrived roughly{" "}
            <span style={{ color: "var(--earth-accent)" }}>three hours</span>{" "}
            before the light — exactly as theory said they should, because light
            takes hours to propagate through the exploding star&apos;s
            atmosphere while neutrinos stream straight through. Masatoshi
            Koshiba won the{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              2002 Nobel Prize
            </span>{" "}
            for this detection. Time-domain astronomy had just proven it could
            read the invisible.
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
            Ten Million Alerts Per Night
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            Time-domain astronomy is about to enter its most ambitious era. The{" "}
            <span style={{ color: "var(--star-white)" }}>
              Vera C. Rubin Observatory
            </span>
            , perched on Cerro Pachón in Chile, will begin its ten-year Legacy
            Survey of Space and Time in the near future. Its{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              3.2-gigapixel camera
            </span>{" "}
            — the largest ever built — will photograph the entire visible
            southern sky every few nights, generating up to{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              10 million alerts per night
            </span>
            : stars that brightened, stars that dimmed, stars that weren&apos;t
            there yesterday, stars that vanished. It will discover an estimated{" "}
            <span style={{ color: "var(--earth-accent)" }}>
              3.3 million supernovae
            </span>{" "}
            over its lifetime, along with kilonovae, tidal disruption events,
            variable stars, and objects no one has yet imagined.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            The challenge is no longer finding transients — it&apos;s sorting
            them. Machine learning classifiers trained on known light curves
            will triage the flood in real time. The most interesting alerts
            will trigger rapid follow-up: telescopes around the world slewing to
            the target within minutes, spectrographs capturing the chemical
            composition before the transient fades, gravitational-wave
            detectors checking their data for coincident signals. Fritz
            Zwicky&apos;s vision — a network of instruments watching the sky
            change, night after night, and alerting the world to what they find
            — is finally, fully, coming true.
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
            What the Changing Sky Tells Us
          </h2>

          <p
            className="text-lg leading-[1.85]"
            style={{ color: "var(--star-dim)" }}
          >
            For most of human history, the night sky was the symbol of
            permanence. Aristotle argued that the heavens were unchanging and
            perfect — unlike the corruptible Earth. Tycho Brahe&apos;s
            observation of a new star in{" "}
            <span style={{ color: "var(--earth-accent)" }}>1572</span> shattered
            that dogma. SN 1987A&apos;s neutrinos proved we could detect the
            invisible machinery of stellar death. ZTF and Rubin are showing us
            that the sky is not merely occasionally changeable — it is
            constantly, furiously dynamic.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Without time-domain astronomy, supernovae are just bright spots in
            other galaxies — interesting but untimed, their physics
            inaccessible. With it, every supernova is a clock: the rise time
            tells us the star&apos;s radius, the plateau length tells us its
            hydrogen envelope mass, the radioactive tail tells us how much
            nickel was forged in the explosion. Light curves become cosmic
            autopsy reports. We know how stars die because we watched it happen,
            in real time, across the electromagnetic spectrum — and, since 1987,
            beyond it.
          </p>

          <p
            className="text-lg leading-[1.85] mt-5"
            style={{ color: "var(--star-dim)" }}
          >
            Time-domain astronomy teaches a simple, profound truth: the universe
            is not a painting. It is a film, still playing. And we have only
            just learned to press play.
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
                The Supernova Story
              </span>{" "}
              — Laurence A. Marschall. A vivid account of SN 1987A&apos;s
              discovery and what it taught us about stellar death, written with
              the pacing of a detective novel.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Zwicky: The Outcast Genius Who Unmasked the Universe
              </span>{" "}
              — John Johnson Jr. The biography of the man who gave us
              supernovae, dark matter, and the first systematic transient
              surveys — and alienated nearly everyone along the way.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Vera C. Rubin Observatory — Legacy Survey of Space and Time
              </span>{" "}
              — rubinobservatory.org. The project that will transform time-domain
              astronomy, with real-time alert streams and a decade-long movie
              of the southern sky.
            </li>
            <li className="text-base leading-relaxed">
              <span style={{ color: "var(--star-white)" }}>
                Observation of a Neutrino Burst from the Supernova SN 1987A
              </span>{" "}
              — Hirata et al., Physical Review Letters (1987). The original
              Kamiokande-II detection paper — 11 neutrinos that changed
              astronomy.
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
                ↯
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <EarthNextPage
        href="/earth/spectroscopy"
        title="Spectroscopy"
      />

    </main>
  );
}
