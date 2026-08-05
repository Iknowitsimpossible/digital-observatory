"use client";

import { motion } from "framer-motion";

/**
 * Hero section — the Dragon Head Raising (龙抬头).
 *
 * Visual concept: a dark sky with a horizon line. The Azure Dragon's
 * seven mansion stars are arranged in a dragon-like curve. Initially,
 * only the Horn star (Spica) is visible above the horizon — the rest
 * of the dragon's body is submerged below. On animation, the stars
 * glow in sequence from Horn to Tail, and constellation lines draw
 * themselves, creating the feeling of a dragon slowly lifting its
 * head and body out of the eastern horizon at dusk.
 *
 * Design references:
 * - Dunhuang star charts (ink on paper, precise but organic)
 * - The actual visual experience of watching stars rise at dusk
 * - Jade-green/azure palette matching the Dragon's element (wood/growth)
 */

// Seven mansion star positions in SVG coordinate space (viewBox 0 0 100 100)
// The dragon curves upward from left (tail) to right (head), with
// the Horn at the top-right — as if rising from below-left
const MANSIONS = [
  { id: "ji", x: 72, y: 18, r: 2.2, label: "角 Horn", chinese: "角", isHead: true },
  { id: "kang", x: 58, y: 28, r: 1.6, label: "亢 Neck", chinese: "亢" },
  { id: "di", x: 44, y: 35, r: 1.6, label: "氐 Root", chinese: "氐" },
  { id: "fang", x: 34, y: 48, r: 1.8, label: "房 Room", chinese: "房" },
  { id: "xin", x: 28, y: 62, r: 2.5, label: "心 Heart", chinese: "心", isHeart: true },
  { id: "wei", x: 38, y: 76, r: 1.6, label: "尾 Tail", chinese: "尾" },
  { id: "jiBasket", x: 50, y: 85, r: 1.5, label: "箕 Basket", chinese: "箕" },
];

const LINES: [string, string][] = [
  ["ji", "kang"],
  ["kang", "di"],
  ["di", "fang"],
  ["fang", "xin"],
  ["xin", "wei"],
  ["wei", "jiBasket"],
];

// Horizon line — dragon rises from below this
const HORIZON_Y = 55;

// Accent color — jade-green
const JADE = "#4a9e8f";
const JADE_DIM = "rgba(74, 158, 143, 0.4)";

export default function DragonHeadRaisingHero() {
  return (
    <section className="flex flex-col items-center pt-12 md:pt-20 pb-8 md:pb-14 px-6 overflow-hidden">
      {/* ==========================================
          Sky chart — the dragon rising
          ========================================== */}
      <motion.div
        className="relative"
        style={{
          width: 460,
          height: 340,
          maxWidth: "min(460px, 90vw)",
          maxHeight: "min(340px, 70vw)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          {/* ==========================================
              Background — night sky gradient
              ========================================== */}
          <defs>
            <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a0e1a" />
              <stop offset="60%" stopColor="#0d1224" />
              <stop offset="100%" stopColor="#111b33" />
            </linearGradient>
            <radialGradient id="spica-glow" cx="72%" cy="18%" r="15%">
              <stop offset="0%" stopColor={JADE} stopOpacity="0.3" />
              <stop offset="50%" stopColor={JADE} stopOpacity="0.08" />
              <stop offset="100%" stopColor={JADE} stopOpacity="0" />
            </radialGradient>
            <radialGradient id="antares-glow" cx="28%" cy="62%" r="12%">
              <stop offset="0%" stopColor="#ff4422" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#c41e3a" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            {/* Scattered background stars filter */}
            <filter id="star-soft">
              <feGaussianBlur stdDeviation="0.3" />
            </filter>
          </defs>

          {/* Sky background */}
          <rect x="0" y="0" width="100" height="100" fill="url(#sky-grad)" rx="0" />

          {/* Subtle scattered background stars */}
          {[
            [15, 8], [35, 12], [82, 6], [90, 22], [8, 30],
            [65, 8], [42, 18], [78, 32], [12, 42], [55, 14],
            [70, 38], [25, 22], [88, 38], [18, 50], [62, 20],
          ].map(([x, y], i) => (
            <motion.circle
              key={`bg-${i}`}
              cx={x} cy={y}
              r={0.3 + Math.random() * 0.4}
              fill="rgba(255,255,255,0.5)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 + Math.random() * 0.4 }}
              transition={{ duration: 0.8, delay: 0.3 + Math.random() * 0.5 }}
            />
          ))}

          {/* Nebula glows */}
          <circle cx="72" cy="18" r="15" fill="url(#spica-glow)" />
          <circle cx="28" cy="62" r="12" fill="url(#antares-glow)" />

          {/* ==========================================
              Horizon line
              ========================================== */}
          <motion.line
            x1="0" y1={HORIZON_Y} x2="100" y2={HORIZON_Y}
            stroke={JADE} strokeWidth="0.3" strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          />

          {/* Horizon glow — subtle gradient below horizon */}
          <motion.rect
            x="0" y={HORIZON_Y} width="100" height={100 - HORIZON_Y}
            fill="url(#sky-grad)"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />
          <motion.line
            x1="0" y1={HORIZON_Y + 0.5} x2="100" y2={HORIZON_Y + 0.5}
            stroke={JADE} strokeWidth="1.5" strokeOpacity="0.15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.4 }}
          />

          {/* ==========================================
              Dragon constellation lines — draw themselves
              ========================================== */}
          {LINES.map(([a, b], i) => {
            const from = MANSIONS.find((m) => m.id === a)!;
            const to = MANSIONS.find((m) => m.id === b)!;
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                stroke={JADE}
                strokeWidth="0.6"
                strokeOpacity="0.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8 + i * 0.12,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* ==========================================
              Dragon mansion stars — glow in
              ========================================== */}
          {MANSIONS.map((m, i) => (
            <motion.g
              key={m.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + i * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Glow halo for Heart (Antares) */}
              {m.isHeart && (
                <>
                  <circle cx={m.x} cy={m.y} r={m.r * 4} fill="#ff4422" opacity="0.08" />
                  <circle cx={m.x} cy={m.y} r={m.r * 2} fill="#ff4422" opacity="0.15" />
                </>
              )}
              {/* Glow halo for Horn (Spica) */}
              {m.isHead && (
                <circle cx={m.x} cy={m.y} r={m.r * 3.5} fill={JADE} opacity="0.1" />
              )}
              {/* Star core */}
              <circle
                cx={m.x} cy={m.y} r={m.r}
                fill={m.isHeart ? "#ff6644" : "var(--star-white)"}
                opacity={m.isHeart ? 0.9 : 0.8}
              />
              {/* Bright star inner core */}
              {(m.isHead || m.isHeart) && (
                <circle
                  cx={m.x} cy={m.y} r={m.r * 0.4}
                  fill="white"
                  opacity={0.7}
                />
              )}
              {/* Chinese label */}
              <text
                x={m.x}
                y={m.y + m.r + 4}
                textAnchor="middle"
                fill={m.isHeart ? "#ff8866" : JADE}
                opacity="0.6"
                fontSize="3.5"
                fontFamily="serif"
              >
                {m.chinese}
              </text>
            </motion.g>
          ))}
        </motion.svg>

        {/* Decorative outer border — like a star chart frame */}
        <div
          className="absolute rounded-lg pointer-events-none"
          style={{
            inset: -8,
            border: `1px solid ${JADE_DIM}`,
            boxShadow: `0 0 30px rgba(74, 158, 143, 0.06)`,
          }}
        />
      </motion.div>

      {/* ==========================================
          Title + subtitle
          ========================================== */}
      <motion.p
        className="text-xs tracking-[0.22em] uppercase mt-10 mb-4"
        style={{ color: JADE }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        Sky · Constellations
      </motion.p>

      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-light text-center tracking-tight"
        style={{
          color: "var(--star-white)",
          fontFamily: "var(--font-playfair), serif",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
      >
        Azure Dragon
      </motion.h1>

      <motion.p
        className="text-base md:text-lg mt-3 text-center"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        青龙 · Guardian of the Eastern Sky
      </motion.p>
    </section>
  );
}
