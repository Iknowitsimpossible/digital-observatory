"use client";

import { motion } from "framer-motion";

/**
 * Hero for the Computational Astrophysics page — an animated SVG showing
 * particles clustering under gravity into the filamentary cosmic web,
 * with grid lines suggesting the computational mesh beneath.
 *
 * Animation sequence (staggered):
 *   1. Grid lines fade in — the computational mesh
 *   2. Particles scatter randomly — initial conditions of the universe
 *   3. Particles drift and cluster — gravity at work
 *   4. Filamentary structure emerges — the cosmic web
 *   5. Title + subtitle fade up below
 *
 * The particle-to-web transformation is the central metaphor: the laws
 * of physics, played forward in a computer, build galaxies from noise.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for the eyebrow
 *   - Simulation cyan (#40c0a0) for particle trails and grid lines
 *   - star-white for title, star-dim for subtitle
 */

const VIEWBOX_W = 800;
const VIEWBOX_H = 360;

/* ── Initial particle positions (random) ──────────────────── */
interface Particle {
  cx: number;
  cy: number;
  r: number;
  delay: number;
}

const initialParticles: Particle[] = Array.from({ length: 80 }, () => ({
  cx: 100 + Math.random() * 600,
  cy: 30 + Math.random() * 300,
  r: 1 + Math.random() * 1.8,
  delay: Math.random() * 0.5,
}));

/* ── Clustered positions — particles drawn toward filament nodes ── */
const clusterNodes = [
  { x: 180, y: 100 },
  { x: 400, y: 160 },
  { x: 620, y: 90 },
  { x: 250, y: 260 },
  { x: 500, y: 280 },
  { x: 680, y: 240 },
];

function clusterPosition(): { cx: number; cy: number } {
  const node = clusterNodes[Math.floor(Math.random() * clusterNodes.length)];
  return {
    cx: node.x + (Math.random() - 0.5) * 60,
    cy: node.y + (Math.random() - 0.5) * 50,
  };
}

export default function ComputationHero() {
  return (
    <section className="flex flex-col items-center pt-14 md:pt-20 pb-6 md:pb-12 px-6">
      <motion.svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full max-w-2xl"
        role="img"
        aria-label="Particles clustering under simulated gravity into the filamentary cosmic web"
        initial="hidden"
        animate="visible"
      >
        {/* ── 1. Background grid — computational mesh ──────── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={80 + i * 64}
              y1={20}
              x2={80 + i * 64}
              y2={340}
              stroke="rgba(64,192,160,0.08)"
              strokeWidth={0.4}
            />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={80}
              y1={20 + i * 40}
              x2={720}
              y2={20 + i * 40}
              stroke="rgba(64,192,160,0.08)"
              strokeWidth={0.4}
            />
          ))}
        </motion.g>

        {/* ── 2. Particles — scatter then cluster ──────────── */}
        {initialParticles.map((p, i) => {
          const cluster = clusterPosition();
          return (
            <motion.circle
              key={i}
              r={p.r}
              fill="rgba(64,192,160,0.7)"
              initial={{ cx: p.cx, cy: p.cy, opacity: 0 }}
              animate={{
                cx: [p.cx, p.cx + (cluster.cx - p.cx) * 0.6, cluster.cx],
                cy: [p.cy, p.cy + (cluster.cy - p.cy) * 0.6, cluster.cy],
                opacity: [0, 0.6, 0.85],
              }}
              transition={{
                duration: 3.5 + p.delay * 2,
                delay: 0.3 + p.delay,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          );
        })}

        {/* ── 3. Filament lines — connecting cluster nodes ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.3] }}
          transition={{ duration: 4, delay: 1.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 3.5 }}
        >
          {[
            [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5],
          ].map(([a, b], i) => (
            <line
              key={`fil-${i}`}
              x1={clusterNodes[a].x}
              y1={clusterNodes[a].y}
              x2={clusterNodes[b].x}
              y2={clusterNodes[b].y}
              stroke="rgba(64,192,160,0.2)"
              strokeWidth={1}
              strokeLinecap="round"
            />
          ))}
        </motion.g>

        {/* ── 4. Void labels — the empty spaces ────────────── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.4] }}
          transition={{ duration: 4, delay: 2.0, times: [0, 0.6, 1], repeat: Infinity, repeatDelay: 3.5 }}
        >
          <text x={340} y={200} textAnchor="middle" fill="rgba(64,192,160,0.3)" fontSize={11} fontFamily="var(--font-geist-mono), monospace">
            void
          </text>
          <text x={560} y={180} textAnchor="middle" fill="rgba(64,192,160,0.25)" fontSize={10} fontFamily="var(--font-geist-mono), monospace">
            void
          </text>
        </motion.g>

        {/* ── 5. Accent dots at cluster nodes ──────────────── */}
        {clusterNodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={3.5}
            fill="rgba(64,192,160,0.5)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0, 0.6, 0.6], scale: [0, 0, 1, 1] }}
            transition={{ duration: 4, delay: 1.2 + i * 0.15, times: [0, 0.3, 0.6, 1], repeat: Infinity, repeatDelay: 3.5 }}
          />
        ))}

        {/* ── Axis labels ──────────────────────────────────── */}
        <motion.text
          x={400} y={355}
          textAnchor="middle"
          fill="rgba(64,192,160,0.3)"
          fontSize={9}
          fontFamily="var(--font-geist-mono), monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          2 billion light-years
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
        Universe in a Computer
      </motion.h1>

      <motion.p
        className="text-sm md:text-base mt-3 text-center max-w-md"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        How the laws of physics, played forward in a supercomputer, build
        galaxies — and how simulation became the third pillar of astrophysics
      </motion.p>
    </section>
  );
}
