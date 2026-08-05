"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Build-as-you-scroll diagram for multi-messenger astronomy — the mandatory
 * interactive Earth component.
 *
 * Builds itself in 4 steps as the user scrolls:
 *   1. Merger event appears at center — two neutron stars colliding
 *   2. Gravitational wave signal path draws to LIGO (fastest, direct)
 *   3. Electromagnetic signal path draws to Fermi/Swift (gamma-ray burst)
 *   4. Neutrino signal path draws to IceCube (ghostly, through everything)
 *   5. Timeline annotations appear — detection times, distances, energies
 *
 * Uses framer-motion useScroll / useTransform for scroll-driven animation.
 * The diagram teaches through spatial metaphor: different messengers travel
 * at different speeds and reach different detectors, but all originate
 * from the same cosmic event.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for annotation lines
 *   - Signal blue (#5599dd) for gravitational wave path and labels
 *   - Warm gold for EM/gamma-ray path
 *   - Pale blue (#80b8e8) for neutrino path
 *   - Geist Mono for detector labels and timing data
 */

/* ── SVG geometry ───────────────────────────────────────── */
const VB_W = 800;
const VB_H = 450;

/* Event position */
const EVENT_X = 180;
const EVENT_Y = 220;

/* Detector positions */
const DET_X = 640;
const GW_Y = 100;
const EM_Y = 220;
const NEUTRINO_Y = 350;

export default function ConvergingSignalsDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const step1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // merger event
  const step2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]); // GW path
  const step3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]); // EM path
  const step4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]); // neutrino path
  const step5 = useTransform(scrollYProgress, [0.8, 0.98], [0, 1]); // annotations

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
        aria-label="Animated diagram showing how gravitational waves, gamma rays, and neutrinos from a neutron star merger arrive at different detectors at different times"
      >
        {/* ════════════════════════════════════════════════════
            STEP 1: Merger event
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step1 }}>
          {/* Event glow */}
          <circle cx={EVENT_X} cy={EVENT_Y} r={28} fill="rgba(85,153,221,0.06)" />
          <circle cx={EVENT_X} cy={EVENT_Y} r={18} fill="rgba(85,153,221,0.1)" />
          <circle cx={EVENT_X} cy={EVENT_Y} r={8} fill="rgba(85,153,221,0.15)" />
          {/* Two merging dots */}
          <circle cx={EVENT_X - 4} cy={EVENT_Y - 2} r={3.5} fill="rgba(85,153,221,0.8)" />
          <circle cx={EVENT_X + 4} cy={EVENT_Y + 2} r={3.5} fill="rgba(85,153,221,0.8)" />
          {/* Label */}
          <text x={EVENT_X} y={EVENT_Y + 44} textAnchor="middle" fill="rgba(232,230,227,0.9)" fontSize={12} fontFamily="var(--font-geist-sans), sans-serif" fontWeight={500}>
            Binary Neutron Star Merger
          </text>
          <text x={EVENT_X} y={EVENT_Y + 60} textAnchor="middle" fill="rgba(136,146,164,0.5)" fontSize={10} fontFamily="var(--font-geist-mono), monospace">
            ~130 Mly away
          </text>
          {/* NGC 4993 label */}
          <text x={EVENT_X} y={EVENT_Y + 76} textAnchor="middle" fill="rgba(136,146,164,0.35)" fontSize={9} fontFamily="var(--font-geist-sans), sans-serif">
            NGC 4993
          </text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 2: Gravitational wave path
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step2 }}>
          {/* Path — solid, direct line */}
          <motion.line
            x1={EVENT_X + 14}
            y1={EVENT_Y - 6}
            x2={DET_X}
            y2={GW_Y}
            stroke="rgba(85,153,221,0.4)"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          {/* GW wave effect — sine wave on top of the line */}
          <motion.path
            d={`M ${EVENT_X + 20},${EVENT_Y - 10} Q ${EVENT_X + 120},${EVENT_Y - 70} ${EVENT_X + 220},${GW_Y - 10} T ${DET_X - 10},${GW_Y - 5}`}
            fill="none"
            stroke="rgba(85,153,221,0.2)"
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          {/* Detector icon */}
          <rect x={DET_X - 18} y={GW_Y - 12} width={36} height={24} rx={4} fill="rgba(85,153,221,0.1)" stroke="rgba(85,153,221,0.35)" strokeWidth={1} />
          <text x={DET_X} y={GW_Y + 3} textAnchor="middle" fill="rgba(85,153,221,0.7)" fontSize={9} fontFamily="var(--font-geist-mono), monospace" fontWeight={500}>LIGO</text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 3: Electromagnetic path
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step3 }}>
          {/* Path — dashed */}
          <motion.line
            x1={EVENT_X + 10}
            y1={EVENT_Y + 8}
            x2={DET_X}
            y2={EM_Y}
            stroke="rgba(196,163,90,0.4)"
            strokeWidth={1.8}
            strokeDasharray="6 3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          {/* Flash icon along the path */}
          <motion.polygon
            points={`${EVENT_X + 160},${EM_Y - 40} ${EVENT_X + 175},${EM_Y - 28} ${EVENT_X + 165},${EM_Y - 28} ${EVENT_X + 170},${EM_Y - 16} ${EVENT_X + 158},${EM_Y - 26} ${EVENT_X + 168},${EM_Y - 26}`}
            fill="rgba(196,163,90,0.4)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0.5] }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          />
          {/* Detector icon */}
          <rect x={DET_X - 18} y={EM_Y - 12} width={36} height={24} rx={4} fill="rgba(196,163,90,0.08)" stroke="rgba(196,163,90,0.35)" strokeWidth={1} />
          <text x={DET_X} y={EM_Y + 3} textAnchor="middle" fill="rgba(196,163,90,0.7)" fontSize={9} fontFamily="var(--font-geist-mono), monospace" fontWeight={500}>Fermi</text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 4: Neutrino path
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step4 }}>
          {/* Path — dotted, ghostly */}
          <motion.line
            x1={EVENT_X + 14}
            y1={EVENT_Y + 12}
            x2={DET_X}
            y2={NEUTRINO_Y}
            stroke="rgba(160,200,240,0.3)"
            strokeWidth={2}
            strokeDasharray="2 5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          {/* Ghostly dots along the path */}
          {[0.2, 0.4, 0.6, 0.8].map((t) => (
            <motion.circle
              key={t}
              cx={EVENT_X + 14 + (DET_X - EVENT_X - 14) * t}
              cy={EVENT_Y + 12 + (NEUTRINO_Y - EVENT_Y - 12) * t}
              r={1.5}
              fill="rgba(160,200,240,0.4)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.5, delay: 0.3 * t + 0.5, repeat: Infinity, repeatDelay: 1 }}
              viewport={{ once: true }}
            />
          ))}
          {/* Detector icon — IceCube is in ice */}
          <rect x={DET_X - 18} y={NEUTRINO_Y - 12} width={36} height={24} rx={4} fill="rgba(160,200,240,0.06)" stroke="rgba(160,200,240,0.3)" strokeWidth={1} strokeDasharray="2 2" />
          <text x={DET_X} y={NEUTRINO_Y + 3} textAnchor="middle" fill="rgba(160,200,240,0.6)" fontSize={9} fontFamily="var(--font-geist-mono), monospace" fontWeight={500}>IceCube</text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 5: Time & energy annotations
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step5 }}>
          {/* GW timing */}
          <text x={DET_X + 30} y={GW_Y - 4} fill="rgba(85,153,221,0.7)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">t = 0</text>
          <text x={DET_X + 30} y={GW_Y + 10} fill="rgba(85,153,221,0.45)" fontSize={8} fontFamily="var(--font-geist-sans), sans-serif">~100 s chirp</text>

          {/* EM timing */}
          <text x={DET_X + 30} y={EM_Y - 4} fill="rgba(196,163,90,0.7)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">t + 1.7 s</text>
          <text x={DET_X + 30} y={EM_Y + 10} fill="rgba(196,163,90,0.45)" fontSize={8} fontFamily="var(--font-geist-sans), sans-serif">GRB 170817A</text>

          {/* Neutrino timing (none detected, but searched) */}
          <text x={DET_X + 30} y={NEUTRINO_Y - 4} fill="rgba(160,200,240,0.55)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">±500 s search</text>
          <text x={DET_X + 30} y={NEUTRINO_Y + 10} fill="rgba(160,200,240,0.35)" fontSize={8} fontFamily="var(--font-geist-sans), sans-serif">no ν detected</text>

          {/* Optical follow-up — annotation arrow */}
          <line x1={DET_X + 22} y1={EM_Y + 30} x2={DET_X + 22} y2={EM_Y + 55} stroke="rgba(196,163,90,0.25)" strokeWidth={0.5} />
          <text x={DET_X + 30} y={EM_Y + 58} fill="rgba(196,163,90,0.55)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">t + 10.9 h</text>
          <text x={DET_X + 30} y={EM_Y + 70} fill="rgba(196,163,90,0.35)" fontSize={8} fontFamily="var(--font-geist-sans), sans-serif">Optical discovery</text>

          {/* The unifying event line */}
          <line x1={EVENT_X} y1={EVENT_Y + 84} x2={DET_X + 22} y2={EVENT_Y + 84} stroke="rgba(255,255,255,0.06)" strokeWidth={0.5} />
          <text x={(EVENT_X + DET_X + 22) / 2} y={EVENT_Y + 100} textAnchor="middle" fill="rgba(136,146,164,0.35)" fontSize={9} fontFamily="var(--font-geist-sans), sans-serif">
            All messengers originate from the same event — arriving at different times, carrying different information
          </text>
        </motion.g>
      </motion.svg>

      {/* ── Narrative caption ────────────────────────────────── */}
      <div className="max-w-lg mx-auto mt-6 text-center space-y-2">
        <motion.p
          className="text-sm"
          style={{ color: "var(--star-dim)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Each messenger reveals a different layer of the same event —
          together, they give us a complete picture that no single
          messenger could provide alone.
        </motion.p>
      </div>
    </div>
  );
}
