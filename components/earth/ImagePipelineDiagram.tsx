"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Build-as-you-scroll diagram for astrophotography — the mandatory
 * interactive Earth component.
 *
 * Builds itself in 4 steps as the user scrolls:
 *   1. A single raw CCD sub-exposure appears — noisy, grainy, with artifacts
 *   2. Calibration frames are applied — bias, dark, flat corrections
 *   3. Multiple calibrated frames are stacked — alignment + combination
 *   4. The final processed image emerges — clean, deep, revealing faint detail
 *
 * Uses framer-motion useScroll / useTransform for scroll-driven animation.
 * The diagram teaches the imaging pipeline: raw data is unusable until
 * systematic artifacts are removed and multiple exposures combined.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for annotation lines
 *   - Sensor amber (#d09040) for exposure data and technical readouts
 *   - Geist Mono for calibration labels and exposure times
 */

/* ── SVG geometry ───────────────────────────────────────── */
const VB_W = 800;
const VB_H = 400;

/* Frame positions — 5 panels in a pipeline */
const FRAME_W = 110;
const FRAME_H = 200;
const FRAME_Y = 100;

const frames = [
  { x: 30, label: "Raw sub", detail: "Noisy · uncorrected" },
  { x: 170, label: "Calibrated", detail: "Bias · dark · flat" },
  { x: 310, label: "Aligned", detail: "Star registration" },
  { x: 450, label: "Stacked", detail: "200× median combine" },
  { x: 590, label: "Processed", detail: "Stretch · color · crop" },
];

/* Arrow positions between frames */
const arrows = [
  { x1: 145, x2: 165 },
  { x1: 285, x2: 305 },
  { x1: 425, x2: 445 },
  { x1: 565, x2: 585 },
];

export default function ImagePipelineDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const step1 = useTransform(scrollYProgress, [0, 0.18], [0, 1]); // raw frame
  const step2 = useTransform(scrollYProgress, [0.18, 0.38], [0, 1]); // calibrated
  const step3 = useTransform(scrollYProgress, [0.38, 0.58], [0, 1]); // aligned
  const step4 = useTransform(scrollYProgress, [0.58, 0.8], [0, 1]); // stacked
  const step5 = useTransform(scrollYProgress, [0.8, 0.98], [0, 1]); // processed

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
        aria-label="Animated diagram showing the astrophotography imaging pipeline from raw CCD frame through calibration, alignment, stacking, to final processed image"
      >
        {/* ── Pipeline arrows ──────────────────────────────── */}
        {arrows.map((a, i) => (
          <motion.g key={`arr-${i}`} style={{ opacity: step1 }}>
            <line x1={a.x1} y1={FRAME_Y + FRAME_H / 2} x2={a.x2} y2={FRAME_Y + FRAME_H / 2} stroke="rgba(208,144,64,0.25)" strokeWidth={1} markerEnd="url(#arrPipe)" />
          </motion.g>
        ))}
        <defs>
          <marker id="arrPipe" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={5} markerHeight={5} orient="auto">
            <path d="M 0,1 L 10,5 L 0,9" fill="rgba(208,144,64,0.35)" />
          </marker>
        </defs>

        {/* ════════════════════════════════════════════════════
            STEP 1: Raw frame — noisy, grainy
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step1 }}>
          <rect x={frames[0].x} y={FRAME_Y} width={FRAME_W} height={FRAME_H} rx={3} fill="rgba(16,22,38,0.5)" stroke="rgba(208,144,64,0.18)" strokeWidth={1} />
          {/* Noise */}
          {Array.from({ length: 30 }).map((_, i) => (
            <circle key={`n1-${i}`} cx={frames[0].x + 15 + Math.random() * 80} cy={FRAME_Y + 15 + Math.random() * 170} r={0.4 + Math.random() * 0.8} fill="rgba(208,144,64,0.25)" />
          ))}
          {/* Hot pixel */}
          <circle cx={frames[0].x + 40} cy={FRAME_Y + 60} r={2} fill="rgba(224,85,85,0.35)" />
          <circle cx={frames[0].x + 70} cy={FRAME_Y + 130} r={1.5} fill="rgba(224,85,85,0.3)" />
          {/* Cosmic ray */}
          <line x1={frames[0].x + 20} y1={FRAME_Y + 40} x2={frames[0].x + 35} y2={FRAME_Y + 32} stroke="rgba(224,85,85,0.25)" strokeWidth={1.2} />
          {/* Label */}
          <text x={frames[0].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 18} textAnchor="middle" fill="rgba(208,144,64,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">{frames[0].label}</text>
          <text x={frames[0].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 32} textAnchor="middle" fill="rgba(136,146,164,0.35)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">{frames[0].detail}</text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 2: Calibrated — artifacts removed
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step2 }}>
          <rect x={frames[1].x} y={FRAME_Y} width={FRAME_W} height={FRAME_H} rx={3} fill="rgba(16,22,38,0.4)" stroke="rgba(208,144,64,0.22)" strokeWidth={1} />
          {/* Cleaner — fewer noise dots */}
          {Array.from({ length: 15 }).map((_, i) => (
            <circle key={`n2-${i}`} cx={frames[1].x + 15 + Math.random() * 80} cy={FRAME_Y + 15 + Math.random() * 170} r={0.3 + Math.random() * 0.5} fill="rgba(208,144,64,0.2)" />
          ))}
          {/* Checkmarks indicating corrections applied */}
          <text x={frames[1].x + 15} y={FRAME_Y + 25} fill="rgba(96,184,96,0.4)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">✓ bias</text>
          <text x={frames[1].x + 15} y={FRAME_Y + 42} fill="rgba(96,184,96,0.4)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">✓ dark</text>
          <text x={frames[1].x + 15} y={FRAME_Y + 59} fill="rgba(96,184,96,0.4)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">✓ flat</text>
          {/* Faint galaxy smudge emerging */}
          <ellipse cx={frames[1].x + 55} cy={FRAME_Y + 120} rx={10} ry={7} fill="rgba(255,255,255,0.05)" />
          <text x={frames[1].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 18} textAnchor="middle" fill="rgba(208,144,64,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">{frames[1].label}</text>
          <text x={frames[1].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 32} textAnchor="middle" fill="rgba(136,146,164,0.35)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">{frames[1].detail}</text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 3: Aligned — stars registered
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step3 }}>
          <rect x={frames[2].x} y={FRAME_Y} width={FRAME_W} height={FRAME_H} rx={3} fill="rgba(16,22,38,0.4)" stroke="rgba(208,144,64,0.22)" strokeWidth={1} />
          {/* Alignment crosshairs */}
          {[
            [frames[2].x + 30, FRAME_Y + 80],
            [frames[2].x + 70, FRAME_Y + 50],
            [frames[2].x + 50, FRAME_Y + 150],
          ].map(([cx, cy], i) => (
            <g key={`cross-${i}`}>
              <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke="rgba(85,153,221,0.3)" strokeWidth={0.5} />
              <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke="rgba(85,153,221,0.3)" strokeWidth={0.5} />
            </g>
          ))}
          {/* Cleaner stars */}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={`s3-${i}`} cx={frames[2].x + 15 + Math.random() * 80} cy={FRAME_Y + 15 + Math.random() * 170} r={0.3 + Math.random() * 0.5} fill="rgba(232,230,227,0.4)" />
          ))}
          <text x={frames[2].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 18} textAnchor="middle" fill="rgba(208,144,64,0.5)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">{frames[2].label}</text>
          <text x={frames[2].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 32} textAnchor="middle" fill="rgba(136,146,164,0.35)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">{frames[2].detail}</text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 4: Stacked — 200 frames combined
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step4 }}>
          <rect x={frames[3].x} y={FRAME_Y} width={FRAME_W} height={FRAME_H} rx={3} fill="rgba(16,22,38,0.4)" stroke="rgba(208,144,64,0.25)" strokeWidth={1} />
          {/* Stacking indicator — layered frame outlines */}
          {[0, -2, 2, -1].map((offset, i) => (
            <rect key={`stack-${i}`} x={frames[3].x + 8 + offset} y={FRAME_Y + 8 + offset} width={FRAME_W - 16} height={FRAME_H - 16} fill="none" stroke="rgba(208,144,64,0.08)" strokeWidth={0.5} rx={1} />
          ))}
          {/* Bright galaxy appearing */}
          <ellipse cx={frames[3].x + 55} cy={FRAME_Y + 120} rx={14} ry={9} fill="rgba(255,255,255,0.08)" />
          <ellipse cx={frames[3].x + 55} cy={FRAME_Y + 120} rx={5} ry={3} fill="rgba(255,255,255,0.12)" />
          {/* Clean stars */}
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={`s4-${i}`} cx={frames[3].x + 15 + Math.random() * 80} cy={FRAME_Y + 15 + Math.random() * 170} r={0.3 + Math.random() * 0.6} fill="rgba(232,230,227,0.55)" />
          ))}
          <text x={frames[3].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 18} textAnchor="middle" fill="rgba(208,144,64,0.55)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">{frames[3].label}</text>
          <text x={frames[3].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 32} textAnchor="middle" fill="rgba(136,146,164,0.4)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">{frames[3].detail}</text>
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 5: Processed — masterpiece
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step5 }}>
          <rect x={frames[4].x} y={FRAME_Y} width={FRAME_W} height={FRAME_H} rx={3} fill="rgba(16,22,38,0.3)" stroke="rgba(208,144,64,0.3)" strokeWidth={1.2} />
          {/* Rich galaxy field */}
          <ellipse cx={frames[4].x + 40} cy={FRAME_Y + 80} rx={16} ry={10} fill="rgba(255,255,255,0.09)" />
          <ellipse cx={frames[4].x + 40} cy={FRAME_Y + 80} rx={6} ry={3} fill="rgba(255,255,255,0.14)" />
          <ellipse cx={frames[4].x + 75} cy={FRAME_Y + 50} rx={10} ry={6} fill="rgba(255,255,255,0.07)" />
          <ellipse cx={frames[4].x + 55} cy={FRAME_Y + 160} rx={8} ry={5} fill="rgba(255,255,255,0.06)" />
          <ellipse cx={frames[4].x + 25} cy={FRAME_Y + 140} rx={7} ry={5} fill="rgba(255,255,255,0.05)" />
          {/* Rich star field */}
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={`s5-${i}`} cx={frames[4].x + 15 + Math.random() * 80} cy={FRAME_Y + 15 + Math.random() * 170} r={0.2 + Math.random() * 0.7} fill="rgba(232,230,227,0.65)" />
          ))}
          {/* Color hint — some stars slightly warm */}
          {Array.from({ length: 4 }).map((_, i) => (
            <circle key={`warm-${i}`} cx={frames[4].x + 20 + Math.random() * 70} cy={FRAME_Y + 20 + Math.random() * 160} r={0.5 + Math.random() * 0.4} fill="rgba(255,200,140,0.5)" />
          ))}
          <text x={frames[4].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 18} textAnchor="middle" fill="rgba(208,144,64,0.6)" fontSize={9} fontFamily="var(--font-geist-mono), monospace">{frames[4].label}</text>
          <text x={frames[4].x + FRAME_W / 2} y={FRAME_Y + FRAME_H + 32} textAnchor="middle" fill="rgba(136,146,164,0.4)" fontSize={7.5} fontFamily="var(--font-geist-mono), monospace">{frames[4].detail}</text>
        </motion.g>

        {/* ── Total exposure time annotation ────────────────── */}
        <motion.text
          x={400} y={380}
          textAnchor="middle"
          fill="rgba(208,144,64,0.35)"
          fontSize={9}
          fontFamily="var(--font-geist-mono), monospace"
          style={{ opacity: step5 }}
        >
          Total integration: 200 × 300s = 16.7 hours
        </motion.text>
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
          Every deep-sky image is a patient accumulation of photons —
          calibration, alignment, and stacking transform hours of data
          into a view of the invisible.
        </motion.p>
      </div>
    </div>
  );
}
