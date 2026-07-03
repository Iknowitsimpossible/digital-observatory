"use client";

import { motion } from "framer-motion";

/**
 * Animated SVG of the Orion constellation — now framed like a celestial atlas chart.
 *
 * The frame draws inspiration from both Chinese star maps (Dunhuang, Song dynasty)
 * and Western planispheres (Bayer's Uranometria). Concentric rings, crosshair
 * coordinate lines, and degree tick marks give the constellation the weight of
 * a scientific instrument while keeping the dark, meditative mood.
 *
 * 8 stars connected by lines forming the Hunter's shape:
 * head (Meissa), shoulders (Betelgeuse, Bellatrix),
 * belt (Alnitak, Alnilam, Mintaka), feet (Saiph, Rigel).
 *
 * Animation order, staggered for a build-up reveal:
 *   1. Outer frame rings fade in
 *   2. Crosshair draws
 *   3. Tick marks appear around the rim
 *   4. Constellation lines draw themselves
 *   5. Stars glow in
 */

// Star positions in SVG coordinate space (viewBox 0 0 100 100, center 50,50)
const STARS = [
  { id: "meissa", x: 50, y: 6, r: 1.6, label: "Meissa" },
  { id: "betelgeuse", x: 22, y: 24, r: 2.5, label: "Betelgeuse" },
  { id: "bellatrix", x: 78, y: 22, r: 2.2, label: "Bellatrix" },
  { id: "alnitak", x: 40, y: 48, r: 1.8, label: "Alnitak" },
  { id: "alnilam", x: 50, y: 50, r: 1.8, label: "Alnilam" },
  { id: "mintaka", x: 60, y: 47, r: 1.8, label: "Mintaka" },
  { id: "saiph", x: 26, y: 82, r: 1.6, label: "Saiph" },
  { id: "rigel", x: 74, y: 80, r: 2.8, label: "Rigel" },
];

const LINES: [string, string][] = [
  ["meissa", "betelgeuse"],
  ["meissa", "bellatrix"],
  ["betelgeuse", "bellatrix"],
  ["betelgeuse", "alnitak"],
  ["bellatrix", "mintaka"],
  ["alnitak", "alnilam"],
  ["alnilam", "mintaka"],
  ["alnitak", "saiph"],
  ["mintaka", "rigel"],
  ["saiph", "rigel"],
];

const CENTER = { x: 50, y: 50 };
const OUTER_RADIUS = 47;   // outer frame ring
const INNER_RADIUS = 43;   // inner ring for tick marks
const MID_RADIUS = 22;     // decorative mid ring

function starPos(id: string) {
  const s = STARS.find((s) => s.id === id)!;
  return { x: s.x, y: s.y };
}

// Generate tick mark positions around the circle (every 10 degrees)
function tickMarks() {
  const marks: { x1: number; y1: number; x2: number; y2: number; major: boolean }[] = [];
  for (let deg = 0; deg < 360; deg += 10) {
    const rad = (deg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const major = deg % 30 === 0;
    marks.push({
      x1: CENTER.x + cos * INNER_RADIUS,
      y1: CENTER.y + sin * INNER_RADIUS,
      x2: CENTER.x + cos * (major ? OUTER_RADIUS : OUTER_RADIUS - 2),
      y2: CENTER.y + sin * (major ? OUTER_RADIUS : OUTER_RADIUS - 2),
      major,
    });
  }
  return marks;
}

const TICKS = tickMarks();

type Props = {
  className?: string;
  /** Accent color for lines and stars. Defaults to sky-accent CSS variable. */
  color?: string;
  /** Whether to show star name labels */
  showLabels?: boolean;
  /** Whether to render the celestial atlas frame (rings, crosshair, ticks) */
  framed?: boolean;
};

export default function OrionConstellationSVG({
  className = "",
  color = "var(--sky-accent)",
  showLabels = false,
  framed = true,
}: Props) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      style={{ width: "100%", height: "auto", maxWidth: 420 }}
    >
      {/* ============================================
          Background — subtle nebula glow
          ============================================ */}
      <defs>
        <radialGradient id="nebula-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.06" />
          <stop offset="50%" stopColor={color} stopOpacity="0.02" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula-core" cx="48%" cy="52%" r="30%">
          <stop offset="0%" stopColor={color} stopOpacity="0.1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Nebula fills */}
      {framed && (
        <>
          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r={OUTER_RADIUS}
            fill="url(#nebula-glow)"
            initial={{ opacity: 0 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
          />
          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r={MID_RADIUS + 5}
            fill="url(#nebula-core)"
            initial={{ opacity: 0 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.15 } },
            }}
          />
        </>
      )}

      {/* ============================================
          Frame — concentric rings (celestial atlas)
          ============================================ */}
      {framed && (
        <>
          {/* Outer ring — thick */}
          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r={OUTER_RADIUS}
            stroke={color} strokeWidth="0.6" strokeOpacity="0.35"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1, opacity: 1,
                transition: { duration: 0.9, ease: "easeInOut" },
              },
            }}
          />
          {/* Inner ring — thin */}
          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r={INNER_RADIUS}
            stroke={color} strokeWidth="0.3" strokeOpacity="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1, opacity: 1,
                transition: { duration: 0.7, delay: 0.15, ease: "easeInOut" },
              },
            }}
          />
          {/* Mid decorative ring */}
          <motion.circle
            cx={CENTER.x} cy={CENTER.y} r={MID_RADIUS}
            stroke={color} strokeWidth="0.2" strokeOpacity="0.12"
            strokeDasharray="1.5 3"
            fill="none"
            initial={{ opacity: 0 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.25 } },
            }}
          />

          {/* Crosshair — vertical + horizontal */}
          {[
            { x1: CENTER.x, y1: CENTER.y - OUTER_RADIUS, x2: CENTER.x, y2: CENTER.y + OUTER_RADIUS },
            { x1: CENTER.x - OUTER_RADIUS, y1: CENTER.y, x2: CENTER.x + OUTER_RADIUS, y2: CENTER.y },
          ].map((line, i) => (
            <motion.line
              key={i}
              {...line}
              stroke={color} strokeWidth="0.25" strokeOpacity="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1, opacity: 1,
                  transition: { duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeInOut" },
                },
              }}
            />
          ))}

          {/* Tick marks */}
          {TICKS.map((t, i) => (
            <motion.line
              key={`tick-${i}`}
              x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={color}
              strokeWidth={t.major ? 0.5 : 0.25}
              strokeOpacity={t.major ? 0.35 : 0.18}
              initial={{ opacity: 0 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.4 + i * 0.003 },
                },
              }}
            />
          ))}

          {/* Cardinal markers — tiny diamonds at N/S/E/W */}
          {[
            { x: CENTER.x, y: CENTER.y - OUTER_RADIUS, label: "" },
            { x: CENTER.x, y: CENTER.y + OUTER_RADIUS, label: "" },
            { x: CENTER.x + OUTER_RADIUS, y: CENTER.y, label: "" },
            { x: CENTER.x - OUTER_RADIUS, y: CENTER.y, label: "" },
          ].map((m, i) => (
            <motion.g
              key={`cardinal-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1, scale: 1,
                  transition: { duration: 0.3, delay: 0.55 + i * 0.06 },
                },
              }}
            >
              <rect
                x={m.x - 1.2} y={m.y - 1.2}
                width={2.4} height={2.4}
                fill={color} opacity="0.6"
                transform={`rotate(45 ${m.x} ${m.y})`}
              />
            </motion.g>
          ))}
        </>
      )}

      {/* ============================================
          Constellation lines — draw themselves
          ============================================ */}
      {LINES.map(([a, b], i) => {
        const from = starPos(a);
        const to = starPos(b);

        return (
          <motion.line
            key={`${a}-${b}`}
            x1={from.x} y1={from.y} x2={to.x} y2={to.y}
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1, opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: (framed ? 0.7 : 0.15) + i * 0.08,
                  ease: "easeInOut",
                },
              },
            }}
          />
        );
      })}

      {/* ============================================
          Stars — glow in after lines
          ============================================ */}
      {STARS.map((star, i) => (
        <motion.g
          key={star.id}
          variants={{
            hidden: { opacity: 0, scale: 0.3 },
            visible: {
              opacity: 1, scale: 1,
              transition: {
                duration: 0.4,
                delay: (framed ? 1.3 : 0.8) + i * 0.06,
                ease: "easeOut",
              },
            },
          }}
        >
          {/* Glow halo for bright stars */}
          {star.r > 2 && (
            <circle
              cx={star.x} cy={star.y}
              r={star.r * 3}
              fill={color} opacity="0.07"
            />
          )}
          {/* Star core */}
          <circle cx={star.x} cy={star.y} r={star.r} fill={color} opacity="0.85" />
          {/* Bright stars get a white-hot center */}
          {star.r > 2 && (
            <circle cx={star.x} cy={star.y} r={star.r * 0.4} fill="white" opacity="0.55" />
          )}
          {/* Label */}
          {showLabels && (
            <text
              x={star.x} y={star.y + star.r + 3.5}
              textAnchor="middle"
              fill={color} opacity="0.35"
              fontSize="2.5"
              fontFamily="var(--font-geist-mono), monospace"
            >
              {star.label}
            </text>
          )}
        </motion.g>
      ))}
    </motion.svg>
  );
}
