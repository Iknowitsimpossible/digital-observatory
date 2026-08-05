"use client";

import { motion } from "framer-motion";

/**
 * Hero for the Multi-Messenger Astronomy page — an animated SVG showing
 * concentric signal ripples (gravitational waves, electromagnetic, neutrinos)
 * radiating outward from a central merger event and arriving at Earth.
 *
 * Animation sequence (staggered):
 *   1. Central merger event flashes — two neutron stars spiraling in
 *   2. Gravitational wave ripple expands outward (spacetime distortion)
 *   3. Electromagnetic flash ripple follows (gamma-ray burst)
 *   4. Neutrino burst ripple trails (ghost particles streaming through)
 *   5. Earth detector icons appear on the right — LIGO, Fermi, IceCube
 *   6. Title + subtitle fade up below
 *
 * The layered ripples are the central metaphor: we used to be blind to
 * most of the universe. Now we have multiple senses — each ripple is a
 * different messenger carrying different information about the same event.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for the eyebrow
 *   - Signal blue (#5599dd) for gravitational wave elements
 *   - Warm gold for EM gamma-ray elements
 *   - Pale ghost blue for neutrino elements
 */

const VIEWBOX_W = 800;
const VIEWBOX_H = 360;

/* Central merger coordinates */
const MERGE_CX = 220;
const MERGE_CY = 175;

/* Earth detector position (right side) */
const EARTH_X = 660;
const EARTH_Y = 175;

export default function MultiMessengerHero() {
  return (
    <section className="flex flex-col items-center pt-14 md:pt-20 pb-6 md:pb-12 px-6">
      <motion.svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full max-w-2xl"
        role="img"
        aria-label="Concentric ripples of gravitational waves, light, and neutrinos radiating from a neutron star merger toward Earth"
        initial="hidden"
        animate="visible"
      >
        {/* ── Background stars ─────────────────────────────── */}
        {[
          [80, 60],[150, 40],[340, 50],[500, 80],[600, 40],[720, 70],
          [60, 280],[130, 310],[300, 290],[460, 300],[580, 280],[700, 310],
          [400, 110],[520, 130],[680, 150],[100, 140],[250, 80],[380, 320],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={0.8 + Math.random() * 0.8}
            fill="rgba(232,230,227,0.5)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 + Math.random() * 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.03 }}
          />
        ))}

        {/* ── 1. Central merger — two orbiting dots converge ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Inspiral path — dashed spiral */}
          <motion.path
            d={`M ${MERGE_CX + 35},${MERGE_CY} A 35,35 0 0,1 ${MERGE_CX - 35},${MERGE_CY} A 30,30 0 0,0 ${MERGE_CX + 30},${MERGE_CY} A 25,25 0 0,1 ${MERGE_CX - 25},${MERGE_CY} A 20,20 0 0,0 ${MERGE_CX + 20},${MERGE_CY} A 15,15 0 0,1 ${MERGE_CX - 12},${MERGE_CY} A 8,8 0 0,0 ${MERGE_CX + 6},${MERGE_CY}`}
            fill="none"
            stroke="rgba(85,153,221,0.2)"
            strokeWidth={0.6}
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          {/* Two orbiting neutron stars */}
          <motion.circle
            cx={MERGE_CX + 30}
            cy={MERGE_CY}
            r={5}
            fill="rgba(85,153,221,0.7)"
            animate={{
              cx: [MERGE_CX + 30, MERGE_CX, MERGE_CX],
              cy: [MERGE_CY, MERGE_CY, MERGE_CY],
              r: [5, 3, 0],
              opacity: [0.7, 0.9, 0],
            }}
            transition={{ duration: 2, delay: 0.5, ease: "easeIn" }}
          />
          <motion.circle
            cx={MERGE_CX - 30}
            cy={MERGE_CY}
            r={5}
            fill="rgba(85,153,221,0.7)"
            animate={{
              cx: [MERGE_CX - 30, MERGE_CX, MERGE_CX],
              cy: [MERGE_CY, MERGE_CY, MERGE_CY],
              r: [5, 3, 0],
              opacity: [0.7, 0.9, 0],
            }}
            transition={{ duration: 2, delay: 0.5, ease: "easeIn" }}
          />
        </motion.g>

        {/* ── 2. Gravitational wave ripple — expands outward ── */}
        <motion.circle
          cx={MERGE_CX}
          cy={MERGE_CY}
          r={30}
          fill="none"
          stroke="rgba(85,153,221,0.4)"
          strokeWidth={2}
          initial={{ r: 5, opacity: 0.8 }}
          animate={{ r: EARTH_X - MERGE_CX + 20, opacity: 0 }}
          transition={{ duration: 2.5, delay: 1.0, ease: "easeOut", repeat: Infinity, repeatDelay: 2.5 }}
        />
        <motion.circle
          cx={MERGE_CX}
          cy={MERGE_CY}
          r={30}
          fill="none"
          stroke="rgba(85,153,221,0.25)"
          strokeWidth={1.5}
          initial={{ r: 5, opacity: 0.6 }}
          animate={{ r: EARTH_X - MERGE_CX + 20, opacity: 0 }}
          transition={{ duration: 2.5, delay: 1.3, ease: "easeOut", repeat: Infinity, repeatDelay: 2.5 }}
        />

        {/* ── 3. EM flash ripple ────────────────────────────── */}
        <motion.circle
          cx={MERGE_CX}
          cy={MERGE_CY}
          r={30}
          fill="none"
          stroke="rgba(196,163,90,0.35)"
          strokeWidth={2}
          strokeDasharray="8 4"
          initial={{ r: 5, opacity: 0.7 }}
          animate={{ r: EARTH_X - MERGE_CX + 10, opacity: 0 }}
          transition={{ duration: 2.2, delay: 1.8, ease: "easeOut", repeat: Infinity, repeatDelay: 2.8 }}
        />

        {/* ── 4. Neutrino burst ripple (ghostly) ────────────── */}
        <motion.circle
          cx={MERGE_CX}
          cy={MERGE_CY}
          r={30}
          fill="none"
          stroke="rgba(160,200,240,0.2)"
          strokeWidth={3}
          strokeDasharray="2 6"
          initial={{ r: 5, opacity: 0.5 }}
          animate={{ r: EARTH_X - MERGE_CX + 15, opacity: 0 }}
          transition={{ duration: 2.0, delay: 1.5, ease: "easeOut", repeat: Infinity, repeatDelay: 3.0 }}
        />

        {/* ── 5. Connecting line — merger to Earth ──────────── */}
        <motion.line
          x1={MERGE_CX + 30}
          y1={MERGE_CY}
          x2={EARTH_X - 25}
          y2={EARTH_Y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={0.8}
          strokeDasharray="4 8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />

        {/* ── 6. Earth detector icons ───────────────────────── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: `${EARTH_X}px ${EARTH_Y}px` }}
        >
          {/* Earth dot */}
          <circle cx={EARTH_X} cy={EARTH_Y} r={10} fill="rgba(85,153,221,0.15)" stroke="rgba(85,153,221,0.4)" strokeWidth={1.2} />
          <text x={EARTH_X} y={EARTH_Y + 4} textAnchor="middle" fill="rgba(85,153,221,0.8)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">
            🌍
          </text>
        </motion.g>

        {/* Detector labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          {/* LIGO label */}
          <text x={EARTH_X} y={EARTH_Y - 22} textAnchor="middle" fill="rgba(85,153,221,0.65)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">
            LIGO-Virgo
          </text>
          {/* Fermi label */}
          <text x={EARTH_X + 42} y={EARTH_Y - 8} textAnchor="start" fill="rgba(196,163,90,0.5)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">
            Fermi
          </text>
          {/* IceCube label */}
          <text x={EARTH_X + 42} y={EARTH_Y + 16} textAnchor="start" fill="rgba(160,200,240,0.45)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">
            IceCube
          </text>
        </motion.g>

        {/* ── Signal type legend on the left ────────────────── */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <line x1={40} y1={90} x2={70} y2={90} stroke="rgba(85,153,221,0.5)" strokeWidth={1.5} />
          <text x={78} y={93} fill="rgba(85,153,221,0.55)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">Gravitational Waves</text>

          <line x1={40} y1={108} x2={70} y2={108} stroke="rgba(196,163,90,0.5)" strokeWidth={1.5} strokeDasharray="4 2" />
          <text x={78} y={111} fill="rgba(196,163,90,0.55)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">Gamma Rays</text>

          <line x1={40} y1={126} x2={70} y2={126} stroke="rgba(160,200,240,0.45)" strokeWidth={1.5} strokeDasharray="1 3" />
          <text x={78} y={129} fill="rgba(160,200,240,0.5)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">Neutrinos</text>
        </motion.g>

        {/* ── Time delay annotation ─────────────────────────── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <text x={MERGE_CX + 160} y={MERGE_CY - 35} textAnchor="middle" fill="rgba(136,146,164,0.4)" fontSize={8} fontFamily="var(--font-geist-sans), sans-serif">
            +1.7 seconds
          </text>
          <text x={EARTH_X - 40} y={EARTH_Y + 40} textAnchor="middle" fill="rgba(136,146,164,0.35)" fontSize={8} fontFamily="var(--font-geist-sans), sans-serif">
            130 million light-years
          </text>
        </motion.g>
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
        Listening with New Ears
      </motion.h1>

      <motion.p
        className="text-sm md:text-base mt-3 text-center max-w-md"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        How gravitational waves, neutrinos, and light together revealed a
        universe that was invisible to telescopes alone
      </motion.p>
    </section>
  );
}
