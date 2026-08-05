"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Build-as-you-scroll diagram for computational astrophysics — the mandatory
 * interactive Earth component.
 *
 * Builds itself in 4 steps as the user scrolls:
 *   1. An empty simulation volume appears — the computational domain
 *   2. Initial density fluctuations are seeded — tiny random perturbations
 *   3. Particles begin clustering — gravity pulls them into filaments
 *   4. The cosmic web emerges — filaments, halos, and voids with annotations
 *
 * Uses framer-motion useScroll / useTransform for scroll-driven animation.
 * The diagram teaches through visual emergence: watching structure condense
 * from near-uniformity makes the CDM paradigm viscerally clear.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for annotation lines
 *   - Simulation cyan (#40c0a0) for particle elements and grid
 *   - Geist Mono for scale labels and annotations
 */

/* ── SVG geometry ───────────────────────────────────────── */
const VB_W = 800;
const VB_H = 420;

/* Simulation volume */
const VOL_X = 120;
const VOL_Y = 40;
const VOL_W = 560;
const VOL_H = 320;

/* ── Particle data — from uniform to clustered ─────────────── */
const N_PARTICLES = 200;

interface ParticleData {
  uniformX: number;
  uniformY: number;
  clusterX: number;
  clusterY: number;
  r: number;
}

/* Cluster node centers */
const nodes = [
  { x: 180, y: 130 }, { x: 420, y: 100 }, { x: 600, y: 140 },
  { x: 220, y: 260 }, { x: 380, y: 280 }, { x: 560, y: 300 },
  { x: 350, y: 190 }, { x: 500, y: 220 },
];

const particles: ParticleData[] = Array.from({ length: N_PARTICLES }, () => {
  const node = nodes[Math.floor(Math.random() * nodes.length)];
  return {
    uniformX: VOL_X + Math.random() * VOL_W,
    uniformY: VOL_Y + Math.random() * VOL_H,
    clusterX: node.x + (Math.random() - 0.5) * 40,
    clusterY: node.y + (Math.random() - 0.5) * 35,
    r: 0.8 + Math.random() * 1.4,
  };
});

export default function SimulationGridDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const step1 = useTransform(scrollYProgress, [0, 0.18], [0, 1]); // volume + grid
  const step2 = useTransform(scrollYProgress, [0.18, 0.38], [0, 1]); // uniform particles
  const step3 = useTransform(scrollYProgress, [0.38, 0.65], [0, 1]); // clustering
  const step4 = useTransform(scrollYProgress, [0.65, 0.95], [0, 1]); // filaments + labels

  return (
    <div ref={sectionRef} className="relative py-16 md:py-24">
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
        aria-label="Animated diagram showing how N-body simulations evolve from near-uniform initial conditions to the filamentary cosmic web"
      >
        {/* ════════════════════════════════════════════════════
            STEP 1: Simulation volume + grid
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step1 }}>
          {/* Volume border */}
          <rect x={VOL_X} y={VOL_Y} width={VOL_W} height={VOL_H} fill="rgba(16,22,38,0.4)" stroke="rgba(64,192,160,0.2)" strokeWidth={1} rx={2} />
          {/* Grid lines */}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`gv-${i}`}
              x1={VOL_X + i * (VOL_W / 6)}
              y1={VOL_Y}
              x2={VOL_X + i * (VOL_W / 6)}
              y2={VOL_Y + VOL_H}
              stroke="rgba(64,192,160,0.06)"
              strokeWidth={0.5}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`gh-${i}`}
              x1={VOL_X}
              y1={VOL_Y + i * (VOL_H / 4)}
              x2={VOL_X + VOL_W}
              y2={VOL_Y + i * (VOL_H / 4)}
              stroke="rgba(64,192,160,0.06)"
              strokeWidth={0.5}
            />
          ))}
          {/* Scale labels */}
          <text x={VOL_X + VOL_W / 2} y={VOL_Y + VOL_H + 20} textAnchor="middle" fill="rgba(64,192,160,0.35)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">
            500 Mpc/h
          </text>
          <text x={VOL_X - 16} y={VOL_Y + VOL_H / 2} textAnchor="middle" fill="rgba(64,192,160,0.35)" fontSize={9} fontFamily="var(--font-geist-mono), monospace" transform={`rotate(-90, ${VOL_X - 16}, ${VOL_Y + VOL_H / 2})`}>
            500 Mpc/h
          </text>
          {/* CMB icon in top left */}
          <text x={VOL_X + 10} y={VOL_Y + 22} fill="rgba(64,192,160,0.35)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">
            z = 127
          </text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 2: Near-uniform initial conditions
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step2 }}>
          {particles.map((p, i) => (
            <circle
              key={`u-${i}`}
              cx={p.uniformX}
              cy={p.uniformY}
              r={p.r * 0.6}
              fill="rgba(64,192,160,0.3)"
            />
          ))}
          {/* Annotation: "near-uniform" */}
          <text x={VOL_X + VOL_W / 2} y={VOL_Y - 10} textAnchor="middle" fill="rgba(64,192,160,0.4)" fontSize={10} fontFamily="var(--font-geist-sans), sans-serif">
            near-uniform initial conditions — tiny density fluctuations
          </text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 3: Gravity clustering — particles migrate
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step3 }}>
          {/* Transition particles — interpolated toward cluster centers */}
          {particles.map((p, i) => {
            const tx = p.uniformX + (p.clusterX - p.uniformX) * 0.7;
            const ty = p.uniformY + (p.clusterY - p.uniformY) * 0.7;
            return (
              <circle
                key={`t-${i}`}
                cx={tx}
                cy={ty}
                r={p.r * 0.85}
                fill="rgba(64,192,160,0.5)"
              />
            );
          })}
          {/* Motion arrows hinting at direction */}
          {nodes.slice(0, 4).map((node, i) => (
            <motion.g key={`arr-${i}`}>
              <line x1={node.x - 50} y1={node.y - 30} x2={node.x - 15} y2={node.y - 10} stroke="rgba(64,192,160,0.2)" strokeWidth={0.8} markerEnd="url(#arrowCyan)" />
            </motion.g>
          ))}
          <defs>
            <marker id="arrowCyan" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} orient="auto">
              <path d="M 0,1 L 10,5 L 0,9" fill="rgba(64,192,160,0.3)" />
            </marker>
          </defs>
          <text x={VOL_X + VOL_W / 2} y={VOL_Y - 10} textAnchor="middle" fill="rgba(64,192,160,0.5)" fontSize={10} fontFamily="var(--font-geist-sans), sans-serif">
            gravity pulls matter into overdense regions
          </text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 4: Cosmic web — filaments + halos + voids
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step4 }}>
          {/* Clustered particles */}
          {particles.map((p, i) => (
            <circle
              key={`c-${i}`}
              cx={p.clusterX}
              cy={p.clusterY}
              r={p.r}
              fill="rgba(64,192,160,0.7)"
            />
          ))}
          {/* Filament lines */}
          {[
            [0, 6], [6, 1], [1, 2], [6, 3], [6, 4], [4, 5], [1, 7], [1, 4],
            [3, 4], [2, 7], [2, 5],
          ].map(([a, b], i) => (
            <line
              key={`fil-${i}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="rgba(64,192,160,0.25)"
              strokeWidth={1.2 + Math.random() * 0.5}
              opacity={0.6}
              strokeLinecap="round"
            />
          ))}
          {/* Halo glow at each node */}
          {nodes.map((node, i) => (
            <g key={`halo-${i}`}>
              <circle cx={node.x} cy={node.y} r={14} fill="rgba(64,192,160,0.06)" />
              <circle cx={node.x} cy={node.y} r={8} fill="rgba(64,192,160,0.1)" />
              <circle cx={node.x} cy={node.y} r={4} fill="rgba(64,192,160,0.4)" />
            </g>
          ))}
          {/* Labels */}
          <text x={nodes[1].x} y={nodes[1].y - 16} textAnchor="middle" fill="rgba(64,192,160,0.55)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">
            halo
          </text>
          <text x={340} y={200} textAnchor="middle" fill="rgba(136,146,164,0.3)" fontSize={10} fontFamily="var(--font-geist-mono), monospace">
            void
          </text>
          <text x={nodes[6].x + 30} y={nodes[6].y - 6} textAnchor="start" fill="rgba(64,192,160,0.45)" fontSize={8.5} fontFamily="var(--font-geist-mono), monospace">
            filament
          </text>
          {/* Final annotation */}
          <text x={VOL_X + VOL_W / 2} y={VOL_Y - 10} textAnchor="middle" fill="rgba(64,192,160,0.6)" fontSize={10} fontFamily="var(--font-geist-sans), sans-serif">
            the cosmic web — ~20 million galaxies in the Millennium Simulation
          </text>
          {/* Time annotation */}
          <text x={VOL_X + VOL_W - 10} y={VOL_Y + VOL_H + 20} textAnchor="end" fill="rgba(64,192,160,0.35)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">
            z = 0 (today)
          </text>
        </motion.g>
      </motion.svg>

      <div className="max-w-lg mx-auto mt-6 text-center space-y-2">
        <motion.p
          className="text-sm"
          style={{ color: "var(--star-dim)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          10 billion particles, 13.8 billion years of cosmic history,
          computed inside a machine — and the result matches what we see
          through our telescopes.
        </motion.p>
      </div>
    </div>
  );
}
