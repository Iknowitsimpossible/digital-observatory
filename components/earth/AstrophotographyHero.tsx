"use client";

import { motion } from "framer-motion";

/**
 * Hero for the Astrophotography page — an animated SVG showing the
 * transformation from raw noisy CCD frame to calibrated, stacked
 * masterpiece. A side-by-side comparison that reveals the craft.
 *
 * Animation sequence (staggered):
 *   1. Left panel: raw noisy frame — scattered dots, grain, artifacts
 *   2. Calibration step indicators appear between panels
 *   3. Right panel: processed image — clean, deep, galaxy-rich
 *   4. Title + subtitle fade up below
 *
 * The before/after is the central metaphor: every astro-image is a
 * decision — what to capture, how long to wait, what to reveal.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for the eyebrow
 *   - Sensor amber (#d09040) for exposure data and technical readouts
 *   - star-white for title, star-dim for subtitle
 */

const VIEWBOX_W = 800;
const VIEWBOX_H = 360;

export default function AstrophotographyHero() {
  return (
    <section className="flex flex-col items-center pt-14 md:pt-20 pb-6 md:pb-12 px-6">
      <motion.svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full max-w-2xl"
        role="img"
        aria-label="Side-by-side comparison: raw noisy CCD frame transforms into a calibrated, deep-sky astrophotograph"
        initial="hidden"
        animate="visible"
      >
        {/* ── Left panel: Raw noisy frame ──────────────────── */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <rect x={40} y={50} width={260} height={260} rx={4} fill="rgba(16,22,38,0.6)" stroke="rgba(208,144,64,0.2)" strokeWidth={1} />
          {/* Noise dots — random scattered */}
          {Array.from({ length: 60 }).map((_, i) => (
            <circle
              key={`noise-${i}`}
              cx={60 + Math.random() * 220}
              cy={70 + Math.random() * 220}
              r={0.5 + Math.random() * 1.2}
              fill="rgba(208,144,64,0.3)"
            />
          ))}
          {/* A few faint "galaxy smudges" — barely visible */}
          <ellipse cx={140} cy={160} rx={18} ry={12} fill="rgba(255,255,255,0.04)" />
          <ellipse cx={220} cy={200} rx={10} ry={7} fill="rgba(255,255,255,0.03)" />
          <ellipse cx={100} cy={110} rx={14} ry={9} fill="rgba(255,255,255,0.04)" />
          {/* Hot pixel artifacts */}
          {[
            [80, 80], [200, 100], [150, 230], [250, 170], [120, 190],
          ].map(([x, y], i) => (
            <circle key={`hot-${i}`} cx={x} cy={y} r={1.5} fill="rgba(224,85,85,0.4)" />
          ))}
          {/* Cosmic ray streak */}
          <line x1={70} y1={130} x2={100} y2={120} stroke="rgba(224,85,85,0.3)" strokeWidth={1.5} />
          {/* Label */}
          <text x={170} y={330} textAnchor="middle" fill="rgba(208,144,64,0.5)" fontSize={10} fontFamily="var(--font-geist-mono), monospace">
            Raw CCD Frame
          </text>
          <text x={170} y={344} textAnchor="middle" fill="rgba(136,146,164,0.35)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">
            1× 300s · noisy · uncorrected
          </text>
        </motion.g>

        {/* ── Processing arrows ────────────────────────────── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            { y: 120, label: "Bias subtraction" },
            { y: 160, label: "Dark frame calibration" },
            { y: 200, label: "Flat field correction" },
            { y: 240, label: "Stack 200 exposures" },
          ].map((step, i) => (
            <g key={step.label}>
              <line x1={310} y1={step.y} x2={360} y2={step.y} stroke="rgba(208,144,64,0.3)" strokeWidth={0.7} markerEnd="url(#arrowAmber)" />
              <text x={335} y={step.y - 5} textAnchor="middle" fill="rgba(208,144,64,0.4)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">
                {step.label}
              </text>
            </g>
          ))}
          <defs>
            <marker id="arrowAmber" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={5} markerHeight={5} orient="auto">
              <path d="M 0,1 L 10,5 L 0,9" fill="rgba(208,144,64,0.4)" />
            </marker>
          </defs>
        </motion.g>

        {/* ── Right panel: Processed masterpiece ───────────── */}
        <motion.g
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <rect x={370} y={50} width={260} height={260} rx={4} fill="rgba(16,22,38,0.4)" stroke="rgba(208,144,64,0.25)" strokeWidth={1} />
          {/* Clean galaxy shapes — now prominent */}
          <motion.ellipse
            cx={460} cy={160} rx={22} ry={14}
            fill="rgba(255,255,255,0.08)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          />
          <motion.ellipse
            cx={460} cy={160} rx={8} ry={4}
            fill="rgba(255,255,255,0.12)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
          <motion.ellipse
            cx={540} cy={200} rx={12} ry={8}
            fill="rgba(255,255,255,0.07)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.ellipse
            cx={420} cy={110} rx={16} ry={10}
            fill="rgba(255,255,255,0.06)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.35 }}
          />
          <motion.ellipse
            cx={560} cy={120} rx={9} ry={6}
            fill="rgba(255,255,255,0.06)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.45 }}
          />
          <motion.ellipse
            cx={500} cy={250} rx={11} ry={7}
            fill="rgba(255,255,255,0.05)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
          {/* Background star field — clean dots */}
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.circle
              key={`star-${i}`}
              cx={390 + Math.random() * 220}
              cy={70 + Math.random() * 220}
              r={0.3 + Math.random() * 0.6}
              fill="rgba(232,230,227,0.5)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 + Math.random() * 0.4 }}
            />
          ))}
          {/* Label */}
          <text x={500} y={330} textAnchor="middle" fill="rgba(208,144,64,0.6)" fontSize={10} fontFamily="var(--font-geist-mono), monospace">
            Processed Image
          </text>
          <text x={500} y={344} textAnchor="middle" fill="rgba(136,146,164,0.4)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">
            200× 300s · calibrated · stacked
          </text>
        </motion.g>

        {/* ── Telescope annotation ─────────────────────────── */}
        <motion.text
          x={400} y={24}
          textAnchor="middle"
          fill="rgba(136,146,164,0.3)"
          fontSize={9}
          fontFamily="var(--font-geist-mono), monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Each astro-image is a decision — what to capture, how long to wait, what to reveal
        </motion.text>
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
        Pointing at Nothing
      </motion.h1>

      <motion.p
        className="text-sm md:text-base mt-3 text-center max-w-md"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        From glass plates to the Hubble Deep Field — how the art and science
        of capturing the night sky revealed a universe far richer than we
        imagined
      </motion.p>
    </section>
  );
}
