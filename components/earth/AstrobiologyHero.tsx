"use client";

import { motion } from "framer-motion";

/**
 * Hero for the Astrobiology page — an animated SVG showing an exoplanet
 * transiting across its star, with starlight filtering through the
 * planet's atmosphere and revealing spectral biosignatures.
 *
 * Animation sequence (staggered):
 *   1. Star glows at center — warm yellow-white
 *   2. Planet crosses in front (transit) — silhouette against the star
 *   3. Filtered starlight — thin ring of atmosphere glowing
 *   4. Spectral lines appear — H₂O, CO₂, CH₄, O₂ markers
 *   5. Title + subtitle fade up below
 *
 * The transit is the central metaphor: life rewrites a planet's
 * atmosphere, and we can read that signature across light-years.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for the eyebrow
 *   - Bio green (#60b860) for biosignature markers
 *   - star-white for title, star-dim for subtitle
 */

const VIEWBOX_W = 800;
const VIEWBOX_H = 360;

const STAR_CX = 400;
const STAR_CY = 180;
const STAR_R = 70;

export default function AstrobiologyHero() {
  return (
    <section className="flex flex-col items-center pt-14 md:pt-20 pb-6 md:pb-12 px-6">
      <motion.svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full max-w-2xl"
        role="img"
        aria-label="An exoplanet transiting across its star, with starlight filtering through the planet's atmosphere"
        initial="hidden"
        animate="visible"
      >
        {/* ── 1. Star — warm glow ──────────────────────────── */}
        <motion.circle
          cx={STAR_CX}
          cy={STAR_CY}
          r={STAR_R}
          fill="rgba(255,220,180,0.15)"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.02, 1] }}
          transition={{ duration: 3, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(12px)" }}
        />
        <motion.circle
          cx={STAR_CX}
          cy={STAR_CY}
          r={STAR_R * 0.7}
          fill="rgba(255,235,200,0.3)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 3, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(8px)" }}
        />
        <motion.circle
          cx={STAR_CX}
          cy={STAR_CY}
          r={STAR_R * 0.4}
          fill="rgba(255,245,220,0.6)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 0.75, 0.6] }}
          transition={{ duration: 2.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(3px)" }}
        />

        {/* ── 2. Planet — transits across the star ──────────── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <motion.circle
            cx={STAR_CX}
            cy={STAR_CY}
            r={22}
            fill="rgba(10,14,26,0.85)"
            stroke="rgba(96,184,96,0.2)"
            strokeWidth={0.8}
            animate={{
              cx: [STAR_CX - 100, STAR_CX + 100],
            }}
            transition={{
              duration: 5,
              delay: 0.8,
              times: [0, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          {/* Atmosphere ring — thin glow around the planet */}
          <motion.circle
            cx={STAR_CX}
            cy={STAR_CY}
            r={24}
            fill="none"
            stroke="rgba(96,184,96,0.15)"
            strokeWidth={3}
            animate={{
              cx: [STAR_CX - 100, STAR_CX + 100],
            }}
            transition={{
              duration: 5,
              delay: 0.8,
              times: [0, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.g>

        {/* ── 3. Light dip indicator — small downward arrow below star ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 7, delay: 1.5, times: [0, 0.15, 0.4, 0.55], repeat: Infinity, repeatDelay: 0 }}
        >
          <text x={STAR_CX} y={STAR_CY + STAR_R + 30} textAnchor="middle" fill="rgba(96,184,96,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">
            brightness ↓ 1.5%
          </text>
        </motion.g>

        {/* ── 4. Spectral lines — biosignature markers on the right ── */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {/* Spectrum bar */}
          <rect x={560} y={80} width={200} height={120} rx={2} fill="rgba(30,40,60,0.6)" stroke="rgba(255,255,255,0.05)" strokeWidth={0.8} />
          {/* Title */}
          <text x={660} y={98} textAnchor="middle" fill="rgba(96,184,96,0.5)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">
            Transmission Spectrum
          </text>
          {/* Spectral lines */}
          {[
            { x: 600, label: "H₂O", color: "#60b860" },
            { x: 640, label: "CO₂", color: "#60b860" },
            { x: 680, label: "CH₄", color: "#60b860" },
            { x: 710, label: "O₂?", color: "rgba(96,184,96,0.5)" },
          ].map((line, i) => (
            <motion.g key={line.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.5 + i * 0.15 }}>
              <line x1={line.x} y1={110} x2={line.x} y2={180} stroke={line.color} strokeWidth={1.5} opacity={0.6} />
              <text x={line.x} y={196} textAnchor="middle" fill={line.color} fontSize={8} fontFamily="var(--font-geist-mono), monospace">
                {line.label}
              </text>
            </motion.g>
          ))}
          {/* Connecting line from planet to spectrum */}
          <line x1={STAR_CX + 60} y1={STAR_CY} x2={560} y2={140} stroke="rgba(96,184,96,0.15)" strokeWidth={0.5} strokeDasharray="3 4" />
        </motion.g>

        {/* ── Background stars ──────────────────────────────── */}
        {[
          [80, 70],[180, 50],[280, 40],[550, 50],[650, 300],[730, 260],
          [100, 280],[220, 320],[320, 300],[480, 310],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={0.6 + Math.random() * 0.6}
            fill="rgba(232,230,227,0.3)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 + Math.random() * 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 + i * 0.04 }}
          />
        ))}
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
        Life Beyond Earth
      </motion.h1>

      <motion.p
        className="text-sm md:text-base mt-3 text-center max-w-md"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        How extremophiles in deep ocean vents rewrote the rules of
        habitability — and how we now search for the chemical signature
        of life on worlds orbiting distant suns
      </motion.p>
    </section>
  );
}
