"use client";

import { motion } from "framer-motion";

/**
 * Hero for the Spectroscopy page — an animated SVG showing white light
 * entering a prism from the left and dispersing into a rainbow spectrum
 * on the right, with Fraunhofer absorption lines appearing last.
 *
 * Animation sequence (staggered):
 *   1. Light beam draws in from the left
 *   2. Spectrum fans out from the prism in 7 colored bands
 *   3. Dark absorption lines (Fraunhofer lines) tick into the spectrum
 *   4. Title + subtitle fade up below
 *
 * The prism is the central metaphor: it transforms invisible information
 * (chemical composition) into visible pattern (spectral lines).
 *
 * Color palette:
 *   - Spectral colors for the dispersed bands (red through violet)
 *   - earth-accent (#c4a35a) for the title eyebrow
 *   - star-white for the title
 */

const VIEWBOX_W = 800;
const VIEWBOX_H = 360;

/* ── Prism geometry ─────────────────────────────────────── */
const PRISM_LEFT = 360;
const PRISM_TOP = 140;
const PRISM_BOTTOM = 240;
const PRISM_APEX_X = 430; // rightmost point

const prismPoints = `${PRISM_LEFT},${PRISM_TOP} ${PRISM_LEFT},${PRISM_BOTTOM} ${PRISM_APEX_X},200`;

/* ── Spectrum bands — each is a polygon from the prism's right face ── */
const SPECTRUM_END = 730;
const BAND_START_X = PRISM_APEX_X;
const BAND_START_Y = 200;

interface Band {
  color: string;
  yTop: number;
  yBottom: number;
}

const bands: Band[] = [
  { color: "#e04040", yTop: 125, yBottom: 152 }, // red
  { color: "#e08030", yTop: 152, yBottom: 178 }, // orange
  { color: "#d0b830", yTop: 178, yBottom: 202 }, // yellow
  { color: "#40b840", yTop: 202, yBottom: 228 }, // green
  { color: "#4088d0", yTop: 228, yBottom: 258 }, // blue
  { color: "#4040c0", yTop: 258, yBottom: 290 }, // indigo
  { color: "#7030a0", yTop: 290, yBottom: 320 }, // violet
];

/* ── Fraunhofer absorption lines — positioned on specific bands ── */
interface AbsLine {
  y: number;
  height: number;
  label: string;
}

const absLines: AbsLine[] = [
  { y: 138, height: 18, label: "C" }, // H-alpha (red)
  { y: 168, height: 14, label: "D₁" }, // Sodium D1 (orange-yellow)
  { y: 190, height: 16, label: "D₂" }, // Sodium D2 (yellow)
  { y: 215, height: 12, label: "E" }, // Iron (green)
  { y: 242, height: 16, label: "F" }, // H-beta (blue)
  { y: 275, height: 12, label: "G" }, // Ca H (indigo)
  { y: 304, height: 14, label: "H" }, // Ca K (violet)
];

export default function SpectroscopyHero() {
  return (
    <section className="flex flex-col items-center pt-14 md:pt-20 pb-6 md:pb-12 px-6">
      {/* ==========================================
          Animated SVG — prism + spectrum
          ========================================== */}
      <motion.svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full max-w-2xl"
        role="img"
        aria-label="White light passing through a prism and dispersing into a rainbow spectrum with dark absorption lines"
        initial="hidden"
        animate="visible"
      >
        {/* ── 1. Light beam — draws in from left ───────────── */}
        <motion.path
          d={`M 20,190 L ${PRISM_LEFT - 10},190 L ${PRISM_LEFT - 10},210 L 20,210 Z`}
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth={0.5}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />

        {/* Beam glow */}
        <motion.rect
          x={20}
          y={193}
          width={PRISM_LEFT - 30}
          height={14}
          fill="rgba(255,255,255,0.15)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.3] }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          style={{ filter: "blur(4px)" }}
        />

        {/* ── 2. Prism — scales in ────────────────────────── */}
        <motion.polygon
          points={prismPoints}
          fill="rgba(200,210,230,0.12)"
          stroke="rgba(200,210,230,0.4)"
          strokeWidth={1.2}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.25,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          style={{ transformOrigin: `${PRISM_APEX_X}px 200px` }}
        />

        {/* Prism inner refraction hint */}
        <motion.polygon
          points={prismPoints}
          fill="rgba(255,255,255,0.04)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />

        {/* ── 3. Spectrum bands — fan out from prism face ─── */}
        {bands.map((band, i) => (
          <motion.polygon
            key={band.color}
            points={`${BAND_START_X},${BAND_START_Y} ${SPECTRUM_END},${band.yTop} ${SPECTRUM_END},${band.yBottom}`}
            fill={band.color}
            initial={{ opacity: 0, scale: 0, pathLength: 0 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.6 + i * 0.08,
              ease: "easeOut",
            }}
            style={{ transformOrigin: `${BAND_START_X}px ${BAND_START_Y}px` }}
          />
        ))}

        {/* Spectrum edge blending — semi-transparent overlay to blend bands */}
        <motion.polygon
          points={`${BAND_START_X},${BAND_START_Y} ${SPECTRUM_END},${bands[0].yTop} ${SPECTRUM_END},${bands[bands.length - 1].yBottom}`}
          fill="url(#spectrumGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        />

        {/* ── 4. Fraunhofer lines — tick into the spectrum ── */}
        {absLines.map((line, i) => (
          <motion.g key={line.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 1.15 + i * 0.1 }}>
            {/* Tick line */}
            <line
              x1={SPECTRUM_END - 60}
              y1={line.y}
              x2={SPECTRUM_END - 25}
              y2={line.y}
              stroke="rgba(10,14,26,0.9)"
              strokeWidth={1.5}
            />
            {/* Label — Fraunhofer's letter designation */}
            <text
              x={SPECTRUM_END - 18}
              y={line.y + 4}
              fill="rgba(232,230,227,0.8)"
              fontSize={9}
              fontFamily="var(--font-geist-mono), monospace"
              textAnchor="start"
            >
              {line.label}
            </text>
          </motion.g>
        ))}

        {/* ── Defs ────────────────────────────────────────── */}
        <defs>
          <linearGradient id="spectrumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e04040" />
            <stop offset="16%" stopColor="#e08030" />
            <stop offset="33%" stopColor="#d0b830" />
            <stop offset="50%" stopColor="#40b840" />
            <stop offset="66%" stopColor="#4088d0" />
            <stop offset="83%" stopColor="#4040c0" />
            <stop offset="100%" stopColor="#7030a0" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* ==========================================
          Title block
          ========================================== */}
      <motion.p
        className="text-xs tracking-[0.22em] uppercase mt-8 mb-4"
        style={{ color: "var(--earth-accent)" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        Earth · Scientific Methods
      </motion.p>

      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-tight"
        style={{
          color: "var(--star-white)",
          fontFamily: "var(--font-playfair), serif",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
      >
        Reading the Light of the Stars
      </motion.h1>

      <motion.p
        className="text-sm md:text-base mt-3 text-center max-w-md"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        How a Bavarian glassmaker’s curiosity about dark lines in a rainbow
        became the tool that reads the chemical composition of the universe
      </motion.p>
    </section>
  );
}
