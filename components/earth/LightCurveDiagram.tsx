"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Build-as-you-scroll diagram for time-domain astronomy — the mandatory
 * interactive Earth component.
 *
 * Builds itself in 4 steps as the user scrolls:
 *   1. Coordinate axes appear — "Time (days)" vs "Brightness (magnitude)"
 *   2. Pre-discovery data points appear — a flat, quiescent baseline
 *   3. The transient event curve draws — sharp rise, peak, gradual decline
 *   4. Annotations appear — "Discovery", "Peak", "Plateau", "Nebular" phases
 *
 * Uses framer-motion useScroll / useTransform for scroll-driven animation.
 * The diagram teaches through motion: watching the light curve build itself
 * makes clear how astronomers measure cosmic change over time.
 *
 * Design tokens:
 *   - earth-accent (#c4a35a) for axes, annotations, the curve
 *   - Pulse red (#e05555) for transient event markers
 *   - Geist Mono for axis labels and phase markers
 */

/* ── SVG geometry ───────────────────────────────────────── */
const VB_W = 800;
const VB_H = 420;

/* Plot region */
const PLOT_X = 80;
const PLOT_Y = 40;
const PLOT_W = 640;
const PLOT_H = 260;

/* Map from data space to pixel space */
function dataX(day: number): number {
  const tMin = -50;
  const tMax = 300;
  return PLOT_X + ((day - tMin) / (tMax - tMin)) * PLOT_W;
}

function dataY(mag: number): number {
  const magMin = 12; // brightest (lowest magnitude)
  const magMax = 20; // dimmest
  const frac = (mag - magMin) / (magMax - magMin);
  return PLOT_Y + frac * PLOT_H;
}

/* ── Light curve data — a synthetic Type II supernova ──────── */
interface DataPoint {
  day: number; // days since core collapse
  mag: number; // apparent magnitude
}

const curvePoints: DataPoint[] = [];
/* Pre-discovery: star is quiescent at ~mag 18.5 */
for (let d = -50; d <= 0; d += 10) {
  curvePoints.push({ day: d, mag: 18.5 + (Math.random() - 0.5) * 0.2 });
}
/* Shock breakout: sudden brightening (day 0-3) */
curvePoints.push({ day: 0, mag: 18.5 });
curvePoints.push({ day: 1, mag: 16.0 });
curvePoints.push({ day: 2, mag: 14.2 });
curvePoints.push({ day: 3, mag: 13.0 });
/* Peak: day 5-15 */
curvePoints.push({ day: 5, mag: 12.4 });
curvePoints.push({ day: 10, mag: 12.1 });
curvePoints.push({ day: 15, mag: 12.2 });
/* Plateau: day 20-80 */
for (let d = 20; d <= 80; d += 10) {
  const mag = 12.5 + (d - 20) * 0.015 + (Math.random() - 0.5) * 0.3;
  curvePoints.push({ day: d, mag });
}
/* Radioactive tail: day 90-300 */
for (let d = 90; d <= 300; d += 20) {
  const mag = 13.5 + Math.log(d - 80) * 2.2 + (Math.random() - 0.5) * 0.4;
  curvePoints.push({ day: d, mag: Math.min(mag, 19.5) });
}

/* ── Phase annotations ──────────────────────────────────────── */
interface Phase {
  day: number;
  label: string;
  detail: string;
}

const phases: Phase[] = [
  { day: -10, label: "Quiescent", detail: "Star at steady brightness" },
  { day: 1, label: "Shock breakout", detail: "Light from the explosion reaches the surface" },
  { day: 10, label: "Peak brightness", detail: "~10⁹× brighter than the Sun" },
  { day: 60, label: "Plateau phase", detail: "Hydrogen recombination sustains brightness" },
  { day: 180, label: "Nebular tail", detail: "Radioactive ⁵⁶Co decay powers the fading glow" },
];

export default function LightCurveDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const step1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // axes
  const step2 = useTransform(scrollYProgress, [0.2, 0.42], [0, 1]); // baseline points
  const step3 = useTransform(scrollYProgress, [0.42, 0.7], [0, 1]); // curve
  const step4 = useTransform(scrollYProgress, [0.7, 0.95], [0, 1]); // annotations

  /* Generate the curve path string */
  const curvePathD = curvePoints
    .map((p, i) => {
      const cmd = i === 0 ? "M" : "L";
      return `${cmd} ${dataX(p.day)},${dataY(p.mag)}`;
    })
    .join(" ");

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
        aria-label="Animated diagram showing how a light curve builds up over time, tracing a supernova's rise, peak, plateau, and fading tail"
      >
        <defs>
          {/* Fade mask for the curve draw-in */}
          <linearGradient id="lcFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(196,163,90,0.05)" />
            <stop offset="15%" stopColor="rgba(196,163,90,1)" />
            <stop offset="100%" stopColor="rgba(196,163,90,1)" />
          </linearGradient>
        </defs>

        {/* ════════════════════════════════════════════════════
            STEP 1: Axes + gridlines
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step1 }}>
          {/* Plot area background */}
          <rect
            x={PLOT_X}
            y={PLOT_Y}
            width={PLOT_W}
            height={PLOT_H}
            fill="rgba(16,22,38,0.4)"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={1}
            rx={2}
          />

          {/* Horizontal gridlines */}
          {[14, 15, 16, 17, 18, 19].map((mag) => (
            <line
              key={`grid-${mag}`}
              x1={PLOT_X}
              y1={dataY(mag)}
              x2={PLOT_X + PLOT_W}
              y2={dataY(mag)}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth={0.5}
              strokeDasharray="3 5"
            />
          ))}

          {/* Y axis */}
          <line x1={PLOT_X} y1={PLOT_Y} x2={PLOT_X} y2={PLOT_Y + PLOT_H} stroke="rgba(196,163,90,0.35)" strokeWidth={1} />
          {/* Y tick labels */}
          {[14, 16, 18, 20].map((mag) => (
            <text
              key={`yl-${mag}`}
              x={PLOT_X - 10}
              y={dataY(mag) + 4}
              textAnchor="end"
              fill="rgba(136,146,164,0.45)"
              fontSize={10}
              fontFamily="var(--font-geist-mono), monospace"
            >
              {mag}
            </text>
          ))}
          {/* Y axis label */}
          <text
            x={PLOT_X - 52}
            y={PLOT_Y + PLOT_H / 2}
            textAnchor="middle"
            fill="rgba(136,146,164,0.5)"
            fontSize={11}
            fontFamily="var(--font-geist-sans), sans-serif"
            transform={`rotate(-90, ${PLOT_X - 52}, ${PLOT_Y + PLOT_H / 2})`}
          >
            Apparent Magnitude
          </text>

          {/* X axis */}
          <line x1={PLOT_X} y1={PLOT_Y + PLOT_H} x2={PLOT_X + PLOT_W} y2={PLOT_Y + PLOT_H} stroke="rgba(196,163,90,0.35)" strokeWidth={1} />
          {/* X tick labels */}
          {[0, 100, 200, 300].map((day) => (
            <text
              key={`xl-${day}`}
              x={dataX(day)}
              y={PLOT_Y + PLOT_H + 20}
              textAnchor="middle"
              fill="rgba(136,146,164,0.45)"
              fontSize={10}
              fontFamily="var(--font-geist-mono), monospace"
            >
              {day}
            </text>
          ))}
          {/* X axis label */}
          <text
            x={PLOT_X + PLOT_W / 2}
            y={PLOT_Y + PLOT_H + 40}
            textAnchor="middle"
            fill="rgba(136,146,164,0.5)"
            fontSize={11}
            fontFamily="var(--font-geist-sans), sans-serif"
          >
            Days Since Core Collapse
          </text>

          {/* Origin crosshair */}
          <line x1={dataX(0)} y1={PLOT_Y} x2={dataX(0)} y2={PLOT_Y + PLOT_H} stroke="rgba(255,255,255,0.06)" strokeWidth={0.6} strokeDasharray="2 4" />
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 2: Pre-discovery baseline points
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step2 }}>
          {curvePoints
            .filter((p) => p.day <= 0)
            .map((p, i) => (
              <circle
                key={`base-${i}`}
                cx={dataX(p.day)}
                cy={dataY(p.mag)}
                r={2}
                fill="rgba(196,163,90,0.6)"
              />
            ))}
          {/* Connecting baseline */}
          <line
            x1={dataX(-50)}
            y1={dataY(18.5)}
            x2={dataX(0)}
            y2={dataY(18.5)}
            stroke="rgba(196,163,90,0.3)"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 3: The transient — curve draws itself
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step3 }}>
          {/* Glow layer */}
          <path
            d={curvePathD}
            fill="none"
            stroke="rgba(224,85,85,0.15)"
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "blur(4px)" }}
          />
          {/* Main curve */}
          <motion.path
            d={curvePathD}
            fill="none"
            stroke="var(--earth-accent)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </motion.g>

        {/* ════════════════════════════════════════════════════
            STEP 4: Phase annotations
            ════════════════════════════════════════════════════ */}
        <motion.g style={{ opacity: step4 }}>
          {phases.map((phase, i) => {
            const x = dataX(phase.day);
            const cp = curvePoints.reduce((prev, curr) =>
              Math.abs(curr.day - phase.day) < Math.abs(prev.day - phase.day) ? curr : prev
            );
            const y = dataY(cp.mag);
            const isLeft = i === 0 || i === 4;
            const textAnchor = isLeft ? "start" : i === 2 ? "middle" : "end";
            const labelX = isLeft ? x + 12 : i === 2 ? x : x - 12;
            const labelY = i === 3 ? y + 28 : y - 14;

            return (
              <g key={phase.label}>
                {/* Callout line */}
                <line x1={x} y1={y} x2={x} y2={y - (i === 3 ? -20 : 20)} stroke="rgba(224,85,85,0.35)" strokeWidth={0.6} strokeDasharray="3 3" />
                {/* Dot on curve */}
                <circle cx={x} cy={y} r={2.5} fill="rgba(224,85,85,0.7)" />
                {/* Label */}
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor={textAnchor}
                  fill="rgba(224,85,85,0.9)"
                  fontSize={10}
                  fontFamily="var(--font-geist-mono), monospace"
                  fontWeight={500}
                >
                  {phase.label}
                </text>
                {/* Detail */}
                <text
                  x={labelX}
                  y={labelY + 13}
                  textAnchor={textAnchor}
                  fill="rgba(136,146,164,0.55)"
                  fontSize={8.5}
                  fontFamily="var(--font-geist-sans), sans-serif"
                >
                  {phase.detail}
                </text>
              </g>
            );
          })}
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
          A light curve is a cosmic clock — each phase of rise and fall
          encodes the physics of the explosion that produced it.
        </motion.p>
      </div>
    </div>
  );
}
