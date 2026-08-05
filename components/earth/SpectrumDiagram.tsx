"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Build-as-you-scroll diagram for spectroscopy — the mandatory
 * interactive Earth component.
 *
 * Builds itself in 4 steps as the user scrolls:
 *   1. Light beam enters from left, prism appears
 *   2. Continuous spectrum fans out from the prism (rainbow bands)
 *   3. Dark absorption lines cut into the spectrum at precise positions
 *   4. Element labels + wavelength annotations appear with callout lines
 *
 * Uses framer-motion useScroll / useTransform for scroll-driven
 * animation — each step maps to a portion of the scroll progress
 * through this section. The diagram teaches through motion, not
 * decoration: watching the lines appear at labeled wavelengths
 * makes the "atomic fingerprint" concept viscerally clear.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for annotation lines and labels
 *   - Spectral line colors (H-alpha red #e04040, OIII teal #40c0c0)
 *     for element-specific highlights
 *   - Geist Mono for wavelength numbers and labels
 */

/* ── SVG geometry ───────────────────────────────────────── */
const VB_W = 800;
const VB_H = 400;

/* Prism */
const P_LEFT = 120;
const P_TOP = 130;
const P_BOT = 230;
const P_APEX = 180;
const prismPts = `${P_LEFT},${P_TOP} ${P_LEFT},${P_BOT} ${P_APEX},180`;

/* Beam */
const BEAM_Y1 = 170;
const BEAM_Y2 = 190;

/* Spectrum panel — a horizontal rainbow bar below the prism */
const SPEC_X = 220;
const SPEC_W = 540;
const SPEC_Y = 310;
const SPEC_H = 48;

/* Wavelength range: 400–700 nm mapped to SPEC_X..SPEC_X+SPEC_W */
const WL_MIN = 390;
const WL_MAX = 710;

function nmToX(nm: number): number {
  return SPEC_X + ((nm - WL_MIN) / (WL_MAX - WL_MIN)) * SPEC_W;
}

/* ── Absorption line data ───────────────────────────────── */
interface SpecLine {
  nm: number; // wavelength in nanometers
  label: string; // Fraunhofer letter
  element: string; // element name
  heightPx: number; // visual height of the tick
  color: string; // accent color for the label
}

const specLines: SpecLine[] = [
  { nm: 393.4, label: "K", element: "Calcium", heightPx: 48, color: "#c4a35a" },
  { nm: 396.8, label: "H", element: "Calcium", heightPx: 42, color: "#c4a35a" },
  { nm: 434.0, label: "G", element: "Hydrogen γ", heightPx: 22, color: "#e04040" },
  { nm: 486.1, label: "F", element: "Hydrogen β", heightPx: 32, color: "#e04040" },
  { nm: 517.3, label: "b", element: "Magnesium", heightPx: 18, color: "#40c0a0" },
  { nm: 589.0, label: "D₂", element: "Sodium", heightPx: 45, color: "#d0b830" },
  { nm: 656.3, label: "C", element: "Hydrogen α", heightPx: 38, color: "#e04040" },
];

/* ── Spectrum gradient stops ────────────────────────────── */
const specColors = [
  { offset: "0%", color: "#4a1080" },
  { offset: "20%", color: "#3030b8" },
  { offset: "35%", color: "#4088d0" },
  { offset: "48%", color: "#40b840" },
  { offset: "60%", color: "#d0b830" },
  { offset: "75%", color: "#e08030" },
  { offset: "100%", color: "#c82828" },
];

export default function SpectrumDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  /* Map scroll progress to 4 discrete build steps */
  const step1 = useTransform(scrollYProgress, [0, 0.22], [0, 1]); // beam + prism
  const step2 = useTransform(scrollYProgress, [0.22, 0.48], [0, 1]); // spectrum
  const step3 = useTransform(scrollYProgress, [0.48, 0.72], [0, 1]); // lines
  const step4 = useTransform(scrollYProgress, [0.72, 0.95], [0, 1]); // labels

  return (
    <div ref={sectionRef} className="relative py-16 md:py-24">
      {/* ── Section label ───────────────────────────────── */}
      <motion.p
        className="text-xs tracking-[0.18em] uppercase mb-6 text-center"
        style={{ color: "var(--earth-accent)", opacity: 0.6 }}
      >
        How It Works
      </motion.p>

      <motion.svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full max-w-2xl mx-auto block"
        role="img"
        aria-label="Animated diagram showing how a spectrograph splits light and reveals absorption lines from specific elements"
      >
        <defs>
          {/* Spectrum bar gradient */}
          <linearGradient id="specBar" x1="0%" y1="0%" x2="100%" y2="0%">
            {specColors.map((s) => (
              <stop key={s.offset} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
        </defs>

        {/* ════════════════════════════════════════════════════
            STEP 1: Light beam + prism
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step1 }}>
          {/* Light beam */}
          <rect
            x={10}
            y={BEAM_Y1}
            width={P_LEFT - 10}
            height={BEAM_Y2 - BEAM_Y1}
            fill="rgba(255,255,255,0.85)"
            rx={1}
          />
          {/* Beam glow */}
          <rect
            x={10}
            y={BEAM_Y1 - 2}
            width={P_LEFT - 10}
            height={BEAM_Y2 - BEAM_Y1 + 4}
            fill="rgba(255,255,255,0.12)"
            rx={2}
            style={{ filter: "blur(3px)" }}
          />
          {/* Prism */}
          <polygon
            points={prismPts}
            fill="rgba(190,200,220,0.14)"
            stroke="rgba(200,210,230,0.45)"
            strokeWidth={1.3}
          />
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 2: Dispersed rays + spectrum bar
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step2 }}>
          {/* Dispersed rays from prism to spectrum bar */}
          <polygon
            points={`${P_APEX},180 ${SPEC_X + 30},${SPEC_Y} ${SPEC_X + 30},${SPEC_Y + SPEC_H} ${P_APEX},180`}
            fill="url(#specBar)"
            opacity={0.3}
          />
          {/* Individual colored rays */}
          {[
            { x: SPEC_X + 460, c: "#c82828" }, // red
            { x: SPEC_X + 360, c: "#e08030" }, // orange
            { x: SPEC_X + 260, c: "#d0b830" }, // yellow
            { x: SPEC_X + 160, c: "#40b840" }, // green
            { x: SPEC_X + 80, c: "#4088d0" }, // blue
          ].map((ray, i) => (
            <line
              key={ray.c}
              x1={P_APEX}
              y1={180}
              x2={ray.x}
              y2={SPEC_Y + SPEC_H / 2}
              stroke={ray.c}
              strokeWidth={1}
              opacity={0.5}
            />
          ))}
          {/* Spectrum bar */}
          <rect
            x={SPEC_X}
            y={SPEC_Y}
            width={SPEC_W}
            height={SPEC_H}
            fill="url(#specBar)"
            rx={3}
            opacity={0.9}
          />
          {/* Bar border */}
          <rect
            x={SPEC_X}
            y={SPEC_Y}
            width={SPEC_W}
            height={SPEC_H}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={0.8}
            rx={3}
          />
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 3: Absorption lines
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step3 }}>
          {specLines.map((line) => {
            const x = nmToX(line.nm);
            return (
              <g key={line.label}>
                {/* Dark tick line */}
                <line
                  x1={x}
                  y1={SPEC_Y}
                  x2={x}
                  y2={SPEC_Y + line.heightPx}
                  stroke="rgba(10,14,26,0.92)"
                  strokeWidth={line.label === "D₂" ? 2 : 1.2}
                />
                {/* Small glow beneath the tick for visibility on dark colors */}
                <line
                  x1={x}
                  y1={SPEC_Y}
                  x2={x}
                  y2={SPEC_Y + 2}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={0.6}
                />
              </g>
            );
          })}
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 4: Labels + wavelength annotations
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step4 }}>
          {specLines.map((line) => {
            const x = nmToX(line.nm);
            const labelY = SPEC_Y - 8;
            const nmY = SPEC_Y + SPEC_H + 16;
            return (
              <g key={`label-${line.label}`}>
                {/* Callout line upward */}
                <line
                  x1={x}
                  y1={SPEC_Y}
                  x2={x}
                  y2={labelY - 4}
                  stroke="var(--earth-accent)"
                  strokeWidth={0.5}
                  opacity={0.5}
                />
                {/* Element label — above the bar */}
                <text
                  x={x}
                  y={labelY}
                  textAnchor="middle"
                  fill={line.color}
                  fontSize={10}
                  fontFamily="var(--font-geist-mono), monospace"
                  fontWeight={500}
                >
                  {line.element}
                </text>
                {/* Wavelength — below the bar */}
                <text
                  x={x}
                  y={nmY}
                  textAnchor="middle"
                  fill="var(--earth-accent)"
                  fontSize={9}
                  fontFamily="var(--font-geist-mono), monospace"
                  opacity={0.75}
                >
                  {line.nm.toFixed(1)}
                </text>
                {/* Tick mark connecting label to wavelength */}
                <line
                  x1={x}
                  y1={nmY + 2}
                  x2={x}
                  y2={nmY + 8}
                  stroke="var(--earth-accent)"
                  strokeWidth={0.4}
                  opacity={0.4}
                />
              </g>
            );
          })}
          {/* Wavelength axis label */}
          <text
            x={SPEC_X + SPEC_W / 2}
            y={SPEC_Y + SPEC_H + 38}
            textAnchor="middle"
            fill="var(--star-dim)"
            fontSize={9}
            fontFamily="var(--font-geist-sans), sans-serif"
            opacity={0.5}
          >
            wavelength (nm) →
          </text>
        </motion.g>
      </motion.svg>

      {/* ── Narrative captions that appear alongside the diagram ── */}
      <div className="max-w-lg mx-auto mt-6 text-center space-y-2">
        <motion.p
          className="text-sm"
          style={{ color: "var(--star-dim)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Each dark line is an element&apos;s fingerprint — absorbed at a
          wavelength that uniquely identifies it.
        </motion.p>
      </div>
    </div>
  );
}
