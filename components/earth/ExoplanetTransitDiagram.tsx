"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Build-as-you-scroll diagram for astrobiology — the mandatory
 * interactive Earth component.
 *
 * Builds itself in 4 steps as the user scrolls:
 *   1. A star and orbiting planet appear — the exoplanet system
 *   2. The planet transits — crossing in front of the star, light dips
 *   3. The transmission spectrum appears — starlight filtered through atmosphere
 *   4. Biosignature lines highlighted — H₂O, CO₂, CH₄, O₂ with labels
 *
 * Uses framer-motion useScroll / useTransform for scroll-driven animation.
 * The diagram teaches the core method: we can't see exoplanets directly,
 * but we can read their atmospheres through the spectral fingerprint
 * left in starlight during transit.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for annotation lines
 *   - Bio green (#60b860) for biosignature markers
 *   - Geist Mono for spectral labels and data
 */

/* ── SVG geometry ───────────────────────────────────────── */
const VB_W = 800;
const VB_H = 430;

const STAR_X = 200;
const STAR_Y = 180;
const STAR_R = 50;

export default function ExoplanetTransitDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const step1 = useTransform(scrollYProgress, [0, 0.18], [0, 1]); // star + planet
  const step2 = useTransform(scrollYProgress, [0.18, 0.4], [0, 1]); // transit + light curve
  const step3 = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]); // spectrum
  const step4 = useTransform(scrollYProgress, [0.65, 0.95], [0, 1]); // biosignature labels

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
        aria-label="Animated diagram showing how an exoplanet transit reveals atmospheric composition through transmission spectroscopy"
      >
        {/* ════════════════════════════════════════════════════
            STEP 1: Star + orbiting planet
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step1 }}>
          {/* Star */}
          <circle cx={STAR_X} cy={STAR_Y} r={STAR_R} fill="rgba(255,220,160,0.15)" />
          <circle cx={STAR_X} cy={STAR_Y} r={STAR_R * 0.6} fill="rgba(255,235,190,0.3)" />
          <circle cx={STAR_X} cy={STAR_Y} r={STAR_R * 0.3} fill="rgba(255,245,220,0.6)" />
          <text x={STAR_X} y={STAR_Y + STAR_R + 28} textAnchor="middle" fill="rgba(255,220,180,0.7)" fontSize={11} fontFamily="var(--font-geist-sans), sans-serif">
            Host Star
          </text>

          {/* Planet in orbit position (pre-transit) */}
          <circle cx={STAR_X - 90} cy={STAR_Y} r={14} fill="rgba(96,184,96,0.25)" stroke="rgba(96,184,96,0.4)" strokeWidth={1} />
          <text x={STAR_X - 90} y={STAR_Y + 30} textAnchor="middle" fill="rgba(96,184,96,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">
            exoplanet
          </text>

          {/* Orbital path (dashed ellipse) */}
          <ellipse cx={STAR_X} cy={STAR_Y} rx={90} ry={18} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={0.8} strokeDasharray="4 6" />
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 2: Transit + light curve dip
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step2 }}>
          {/* Planet in transit position */}
          <circle cx={STAR_X} cy={STAR_Y} r={16} fill="rgba(10,14,26,0.9)" stroke="rgba(96,184,96,0.3)" strokeWidth={1.2} />
          {/* Atmosphere ring */}
          <circle cx={STAR_X} cy={STAR_Y} r={19} fill="none" stroke="rgba(96,184,96,0.12)" strokeWidth={4} />

          {/* Light curve inset — on the right */}
          {/* Axes */}
          <line x1={330} y1={100} x2={480} y2={100} stroke="rgba(96,184,96,0.3)" strokeWidth={0.8} />
          <line x1={330} y1={100} x2={330} y2={260} stroke="rgba(96,184,96,0.3)" strokeWidth={0.8} />
          <text x={405} y={88} textAnchor="middle" fill="rgba(136,146,164,0.4)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">Time →</text>

          {/* Flat baseline before transit */}
          <line x1={330} y1={120} x2={370} y2={120} stroke="rgba(96,184,96,0.5)" strokeWidth={1.5} />
          {/* Dip */}
          <motion.path
            d={`M 370,120 Q 390,120 395,240 Q 400,250 405,240 Q 410,120 430,120`}
            fill="none"
            stroke="rgba(96,184,96,0.7)"
            strokeWidth={1.8}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          {/* Flat baseline after transit */}
          <line x1={430} y1={120} x2={480} y2={120} stroke="rgba(96,184,96,0.5)" strokeWidth={1.5} />
          {/* Annotation */}
          <text x={405} y={220} textAnchor="middle" fill="rgba(96,184,96,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">
            ~1% dip
          </text>
          <text x={405} y={272} textAnchor="middle" fill="rgba(136,146,164,0.4)" fontSize={9} fontFamily="var(--font-geist-sans), sans-serif">
            Light Curve
          </text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 3: Transmission spectrum
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step3 }}>
          {/* Spectrum panel at bottom */}
          <rect x={100} y={310} width={600} height={90} rx={3} fill="rgba(16,22,38,0.5)" stroke="rgba(255,255,255,0.04)" strokeWidth={0.8} />
          {/* Spectrum gradient bar */}
          <defs>
            <linearGradient id="transSpec" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a1080" />
              <stop offset="25%" stopColor="#3030b8" />
              <stop offset="50%" stopColor="#40b840" />
              <stop offset="75%" stopColor="#d0b830" />
              <stop offset="100%" stopColor="#c82828" />
            </linearGradient>
          </defs>
          <rect x={140} y={340} width={520} height={30} fill="url(#transSpec)" opacity={0.6} rx={2} />
          {/* Wavelength axis */}
          <text x={400} y={422} textAnchor="middle" fill="rgba(136,146,164,0.4)" fontSize={10} fontFamily="var(--font-geist-mono), monospace">
            Wavelength (μm) →
          </text>
          {["0.6", "1.0", "2.0", "5.0"].map((wl, i) => (
            <text key={wl} x={160 + i * 160} y={436} textAnchor="middle" fill="rgba(136,146,164,0.3)" fontSize={8} fontFamily="var(--font-geist-mono), monospace">
              {wl}
            </text>
          ))}
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 4: Biosignature molecular lines
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step4 }}>
          {[
            { x: 280, label: "H₂O", detail: "Water vapor", y: 325 },
            { x: 350, label: "CH₄", detail: "Methane", y: 318 },
            { x: 440, label: "CO₂", detail: "Carbon dioxide", y: 325 },
            { x: 510, label: "O₃", detail: "Ozone — possible biosignature", y: 318 },
          ].map((mol, i) => (
            <g key={mol.label}>
              {/* Tick line */}
              <line x1={mol.x} y1={340} x2={mol.x} y2={mol.y} stroke="rgba(96,184,96,0.5)" strokeWidth={0.8} />
              {/* Label */}
              <text x={mol.x} y={mol.y - 6} textAnchor="middle" fill="rgba(96,184,96,0.8)" fontSize={9} fontFamily="var(--font-geist-mono), monospace" fontWeight={500}>
                {mol.label}
              </text>
              {/* Detail */}
              <text x={mol.x} y={mol.y + 10} textAnchor="middle" fill="rgba(96,184,96,0.4)" fontSize={7.5} fontFamily="var(--font-geist-sans), sans-serif">
                {mol.detail}
              </text>
            </g>
          ))}
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
          Life rewrites a planet&apos;s atmosphere. By reading the chemical
          fingerprint of starlight filtered through alien air, we search for
          the signature that says: something is alive down there.
        </motion.p>
      </div>
    </div>
  );
}
