"use client";

import { motion } from "framer-motion";

/**
 * Hero for the Time-Domain Astronomy page — an animated SVG showing
 * a star field with one star that dramatically brightens (a transient
 * event), with a light curve graph appearing below it.
 *
 * Animation sequence (staggered):
 *   1. Star field fades in — scattered dots across the canvas
 *   2. The target star pulses — brightens from dim to brilliant to fading
 *   3. A light curve line draws itself beneath, tracing the brightness change
 *   4. Title + subtitle fade up below
 *
 * The pulsing star is the central metaphor: time-domain astronomy is
 * about catching the sky in the act of changing. The light curve is
 * the astronomer's primary tool for reading that change.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for the eyebrow and light curve
 *   - Pulse red (#e05555) for the transient glow
 *   - star-white for title, star-dim for subtitle
 */

const VIEWBOX_W = 800;
const VIEWBOX_H = 380;

/* ── Star positions (pseudo-random but fixed) ──────────────── */
interface StarDot {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  delay: number;
}

const starField: StarDot[] = [
  { cx: 80, cy: 60, r: 1.5, opacity: 0.7, delay: 0 },
  { cx: 150, cy: 120, r: 1.0, opacity: 0.5, delay: 0.05 },
  { cx: 30, cy: 180, r: 1.8, opacity: 0.8, delay: 0.1 },
  { cx: 200, cy: 40, r: 0.8, opacity: 0.4, delay: 0.15 },
  { cx: 270, cy: 90, r: 1.2, opacity: 0.6, delay: 0.02 },
  { cx: 90, cy: 250, r: 1.4, opacity: 0.7, delay: 0.12 },
  { cx: 320, cy: 170, r: 1.0, opacity: 0.5, delay: 0.08 },
  { cx: 50, cy: 310, r: 1.6, opacity: 0.65, delay: 0.18 },
  { cx: 350, cy: 60, r: 0.7, opacity: 0.3, delay: 0.04 },
  { cx: 420, cy: 280, r: 1.3, opacity: 0.55, delay: 0.14 },
  { cx: 480, cy: 50, r: 0.9, opacity: 0.45, delay: 0.06 },
  { cx: 550, cy: 300, r: 1.5, opacity: 0.7, delay: 0.16 },
  { cx: 600, cy: 120, r: 1.1, opacity: 0.5, delay: 0.03 },
  { cx: 680, cy: 70, r: 1.7, opacity: 0.75, delay: 0.09 },
  { cx: 720, cy: 200, r: 1.0, opacity: 0.5, delay: 0.11 },
  { cx: 760, cy: 320, r: 1.4, opacity: 0.6, delay: 0.17 },
  { cx: 670, cy: 250, r: 0.8, opacity: 0.35, delay: 0.07 },
  { cx: 520, cy: 180, r: 1.2, opacity: 0.55, delay: 0.13 },
  { cx: 160, cy: 340, r: 1.0, opacity: 0.4, delay: 0.01 },
  { cx: 740, cy: 140, r: 0.9, opacity: 0.45, delay: 0.19 },
];

/* ── Light curve path data ─────────────────────────────────── */
/* The target star is at center (380, 180) */
const TARGET_CX = 380;
const TARGET_CY = 180;

/* Light curve below: axes at y=240 to y=310 */
const LC_X1 = 280;
const LC_X2 = 580;
const LC_Y_BASE = 300;
const LC_Y_TOP = 240;

/* Generate a smooth light curve: sudden rise, peak, then gradual decay */
function lightCurvePath(): string {
  const points: [number, number][] = [];
  const w = LC_X2 - LC_X1;
  /* Quiescent phase: flat */
  points.push([LC_X1, LC_Y_BASE]);
  /* Rise (fast — supernova rises in days) */
  for (let i = 1; i <= 10; i++) {
    const t = i / 11;
    const x = LC_X1 + t * w * 0.25;
    /* Exponential-ish rise */
    const y = LC_Y_BASE - (LC_Y_BASE - LC_Y_TOP) * Math.pow(t, 3);
    points.push([x, y]);
  }
  /* Peak */
  points.push([LC_X1 + w * 0.28, LC_Y_TOP]);
  /* Decline — slower, with a plateau */
  for (let i = 1; i <= 20; i++) {
    const t = i / 20;
    const x = LC_X1 + w * 0.28 + t * w * 0.72;
    /* Radioactive decay tail — levels off */
    const decay = Math.exp(-t * 3.5) * 0.85 + Math.exp(-t * 0.5) * 0.15;
    const y = LC_Y_BASE - (LC_Y_BASE - LC_Y_TOP) * decay;
    points.push([x, y]);
  }
  points.push([LC_X2, LC_Y_BASE]);

  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x},${y}`).join(" ");
}

const lightCurveD = lightCurvePath();

export default function TimeDomainHero() {
  return (
    <section className="flex flex-col items-center pt-14 md:pt-20 pb-6 md:pb-12 px-6">
      {/* ==========================================
          Animated SVG — star field + transient + light curve
          ========================================== */}
      <motion.svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full max-w-2xl"
        role="img"
        aria-label="A star field with one star brightening like a supernova, and a light curve graph tracing its brightness over time"
        initial="hidden"
        animate="visible"
      >
        {/* ── 1. Star field — scattered dots fade in ────────── */}
        {starField.map((star, i) => (
          <motion.circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="rgba(232,230,227,1)"
            initial={{ opacity: 0 }}
            animate={{ opacity: star.opacity }}
            transition={{ duration: 0.6, delay: 0.2 + star.delay, ease: "easeOut" }}
          />
        ))}

        {/* ── 2. Target star — pulses dramatically ──────────── */}
        {/* Outer glow */}
        <motion.circle
          cx={TARGET_CX}
          cy={TARGET_CY}
          r={24}
          fill="rgba(224,85,85,0.15)"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 0.8, 0.5, 0.1],
            scale: [0.4, 1.8, 2.4, 3.0],
          }}
          transition={{
            duration: 3.5,
            delay: 0.6,
            times: [0, 0.2, 0.5, 1],
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
          style={{ filter: "blur(8px)" }}
        />
        {/* Mid glow */}
        <motion.circle
          cx={TARGET_CX}
          cy={TARGET_CY}
          r={8}
          fill="rgba(255,200,150,0.3)"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: [0, 0.9, 0.4, 0.05],
            scale: [0.3, 1.5, 2.0, 2.5],
          }}
          transition={{
            duration: 3.5,
            delay: 0.6,
            times: [0, 0.2, 0.5, 1],
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
          style={{ filter: "blur(3px)" }}
        />
        {/* Core star */}
        <motion.circle
          cx={TARGET_CX}
          cy={TARGET_CY}
          r={3.5}
          fill="rgba(255,255,255,1)"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 1, 0.9, 0.15],
            r: [3.5, 6, 5, 2.5],
          }}
          transition={{
            duration: 3.5,
            delay: 0.6,
            times: [0, 0.2, 0.5, 1],
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />

        {/* Crosshair — marks the target star position */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <line x1={TARGET_CX - 16} y1={TARGET_CY} x2={TARGET_CX - 6} y2={TARGET_CY} stroke="rgba(196,163,90,0.6)" strokeWidth={0.6} />
          <line x1={TARGET_CX + 6} y1={TARGET_CY} x2={TARGET_CX + 16} y2={TARGET_CY} stroke="rgba(196,163,90,0.6)" strokeWidth={0.6} />
          <line x1={TARGET_CX} y1={TARGET_CY - 16} x2={TARGET_CX} y2={TARGET_CY - 6} stroke="rgba(196,163,90,0.6)" strokeWidth={0.6} />
          <line x1={TARGET_CX} y1={TARGET_CY + 6} x2={TARGET_CX} y2={TARGET_CY + 16} stroke="rgba(196,163,90,0.6)" strokeWidth={0.6} />
        </motion.g>

        {/* ── 3. Dashed connector line — star to light curve ── */}
        <motion.line
          x1={TARGET_CX}
          y1={TARGET_CY + 20}
          x2={TARGET_CX}
          y2={LC_Y_BASE}
          stroke="rgba(196,163,90,0.25)"
          strokeWidth={0.6}
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />

        {/* ── 4. Light curve axes ───────────────────────────── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          {/* X axis */}
          <line x1={LC_X1 - 10} y1={LC_Y_BASE} x2={LC_X2 + 20} y2={LC_Y_BASE} stroke="rgba(196,163,90,0.35)" strokeWidth={0.8} />
          {/* Y axis */}
          <line x1={LC_X1} y1={LC_Y_TOP - 10} x2={LC_X1} y2={LC_Y_BASE} stroke="rgba(196,163,90,0.35)" strokeWidth={0.8} />
          {/* X label */}
          <text x={LC_X2 + 16} y={LC_Y_BASE + 4} fill="rgba(136,146,164,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace" textAnchor="start">
            t
          </text>
          {/* Y label */}
          <text x={LC_X1 - 6} y={LC_Y_TOP - 14} fill="rgba(136,146,164,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace" textAnchor="end">
            mag
          </text>
        </motion.g>

        {/* ── 5. Light curve — draws itself ─────────────────── */}
        <motion.path
          d={lightCurveD}
          fill="none"
          stroke="var(--earth-accent)"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.0, ease: "easeInOut" }}
        />

        {/* Curve glow */}
        <motion.path
          d={lightCurveD}
          fill="none"
          stroke="rgba(196,163,90,0.2)"
          strokeWidth={5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.0, ease: "easeInOut" }}
          style={{ filter: "blur(3px)" }}
        />

        {/* Peak marker dot */}
        <motion.circle
          cx={LC_X1 + (LC_X2 - LC_X1) * 0.28}
          cy={LC_Y_TOP}
          r={3}
          fill="var(--earth-accent)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 2.0, ease: [0.34, 1.56, 0.64, 1] }}
        />
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
        The Universe in Motion
      </motion.h1>

      <motion.p
        className="text-sm md:text-base mt-3 text-center max-w-md"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        How astronomers learned to watch the sky change in real time — and
        discovered a universe that flickers, erupts, and transforms tonight
      </motion.p>
    </section>
  );
}
