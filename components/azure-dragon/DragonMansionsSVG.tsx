"use client";

import { motion } from "framer-motion";

/**
 * Dragon anatomy diagram — the seven mansions positioned along the
 * body of the Azure Dragon.
 *
 * Visual concept: a stylized dragon silhouette in jade-green, with
 * the seven mansion markers placed along its body from Horn (head)
 * to Winnowing Basket (tail tip). Lines connect the mansions to show
 * the constellation pattern. This is more "anatomical illustration"
 * than "star chart" — it shows what the ancient Chinese saw when
 * they looked at this patch of sky: a great dragon.
 *
 * Design references:
 * - Traditional Chinese dragon paintings (elongated, serpentine body)
 * - Anatomical/scientific illustration style
 * - Han dynasty tomb carvings of the Azure Dragon
 */

// Mansion positions along the dragon's body
// ViewBox: 0 0 200 80 — wide to accommodate the serpentine dragon
const MANSIONS = [
  { id: "ji", x: 170, y: 22, r: 3.0, label: "角", labelEn: "Horn", star: "Spica" },
  { id: "kang", x: 142, y: 32, r: 2.2, label: "亢", labelEn: "Neck", star: "κ Vir" },
  { id: "di", x: 114, y: 38, r: 2.2, label: "氐", labelEn: "Root", star: "α Lib" },
  { id: "fang", x: 86, y: 42, r: 2.4, label: "房", labelEn: "Room", star: "π Sco" },
  { id: "xin", x: 58, y: 44, r: 3.5, label: "心", labelEn: "Heart", star: "Antares", isHeart: true },
  { id: "wei", x: 34, y: 50, r: 2.2, label: "尾", labelEn: "Tail", star: "μ¹ Sco" },
  { id: "jiBasket", x: 14, y: 58, r: 2.0, label: "箕", labelEn: "Basket", star: "γ Sgr" },
];

const LINES: [string, string][] = [
  ["ji", "kang"], ["kang", "di"], ["di", "fang"],
  ["fang", "xin"], ["xin", "wei"], ["wei", "jiBasket"],
];

const JADE = "#4a9e8f";

type Props = {
  className?: string;
  color?: string;
  showLabels?: boolean;
};

export default function DragonMansionsSVG({
  className = "",
  color = JADE,
  showLabels = true,
}: Props) {
  return (
    <motion.svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      style={{ width: "100%", height: "auto", maxWidth: 640 }}
    >
      <defs>
        {/* Jade glow for the dragon */}
        <filter id="dragon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        {/* Heart glow — red, distinct from the jade body */}
        <radialGradient id="heart-glow" cx="58" cy="44" r="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff4422" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ff4422" stopOpacity="0" />
        </radialGradient>
        {/* Body gradient — jade fading to pale at the tail */}
        <linearGradient id="dragon-body" x1="1" y1="0" x2="0" y2="0.3">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="60%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* ============================================
          Dragon body outline — stylized serpentine curve
          ============================================ */}
      {/* Body curve — a smooth path from head to tail */}
      <motion.path
        d="M 172 22 C 155 24, 145 30, 130 34 C 105 40, 80 42, 60 44 C 42 46, 32 50, 16 58"
        stroke="url(#dragon-body)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter="url(#dragon-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.2, delay: 0.2, ease: "easeInOut" },
          },
        }}
      />

      {/* Second thinner body line — dragon's spine detail */}
      <motion.path
        d="M 172 22 C 155 24, 145 30, 130 34 C 105 40, 80 42, 60 44 C 42 46, 32 50, 16 58"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.35"
        strokeDasharray="2 4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
          },
        }}
      />

      {/* Heart glow background */}
      <motion.circle
        cx="58" cy="44" r="8"
        fill="url(#heart-glow)"
        initial={{ opacity: 0 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
        }}
      />

      {/* ============================================
          Constellation lines — connect the mansions
          ============================================ */}
      {LINES.map(([a, b], i) => {
        const from = MANSIONS.find((m) => m.id === a)!;
        const to = MANSIONS.find((m) => m.id === b)!;
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={from.x} y1={from.y} x2={to.x} y2={to.y}
            stroke={color}
            strokeWidth="0.6"
            strokeOpacity="0.4"
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.8 + i * 0.08,
                  ease: "easeInOut",
                },
              },
            }}
          />
        );
      })}

      {/* ============================================
          Dragon head — stylized at the right end
          ============================================ */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.6, ease: "easeOut" },
          },
        }}
      >
        {/* Head shape — simplified dragon head */}
        <path
          d="M 172 20 C 180 18, 186 22, 184 26 C 182 30, 178 32, 172 28"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Eye */}
        <circle cx="180" cy="23" r="0.8" fill={color} opacity="0.8" />
        {/* Horn — Spica */}
        <line
          x1="176" y1="20" x2="180" y2="14"
          stroke={color} strokeWidth="1.2" strokeOpacity="0.7"
          strokeLinecap="round"
        />
        {/* Second horn */}
        <line
          x1="178" y1="21" x2="184" y2="16"
          stroke={color} strokeWidth="0.8" strokeOpacity="0.5"
          strokeLinecap="round"
        />
        {/* Whisker */}
        <path
          d="M 184 26 C 190 30, 192 34, 188 36"
          stroke={color} strokeWidth="0.6" strokeOpacity="0.35"
          fill="none" strokeLinecap="round"
        />
      </motion.g>

      {/* ============================================
          Tail flourish at the left end
          ============================================ */}
      <motion.g
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 1.2 },
          },
        }}
      >
        <path
          d="M 16 58 C 10 62, 6 58, 4 54"
          stroke={color} strokeWidth="0.8" strokeOpacity="0.4"
          fill="none" strokeLinecap="round"
        />
        <path
          d="M 16 58 C 12 64, 8 62, 6 60"
          stroke={color} strokeWidth="0.6" strokeOpacity="0.3"
          fill="none" strokeLinecap="round"
        />
      </motion.g>

      {/* ============================================
          Mansion stars
          ============================================ */}
      {MANSIONS.map((m, i) => (
        <motion.g
          key={m.id}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                delay: 1.0 + i * 0.1,
                ease: "easeOut",
              },
            },
          }}
        >
          {/* Star dot */}
          <circle
            cx={m.x} cy={m.y} r={m.r}
            fill={m.isHeart ? "#ff6644" : "var(--star-white)"}
            opacity={m.isHeart ? 0.9 : 0.8}
          />
          {/* Heart gets extra glow */}
          {m.isHeart && (
            <circle
              cx={m.x} cy={m.y} r={m.r * 2.5}
              fill="none"
              stroke="#ff4422"
              strokeWidth="0.3"
              strokeOpacity="0.3"
              strokeDasharray="1 2"
            />
          )}
          {/* Bright center for major stars */}
          {(m.r > 2.5) && (
            <circle cx={m.x} cy={m.y} r={m.r * 0.35} fill="white" opacity="0.6" />
          )}

          {/* Labels */}
          {showLabels && (
            <>
              {/* Chinese character above */}
              <text
                x={m.x}
                y={m.y - m.r - 2.5}
                textAnchor="middle"
                fill={m.isHeart ? "#ff8866" : color}
                opacity="0.7"
                fontSize="4"
                fontFamily="serif"
                fontWeight="bold"
              >
                {m.label}
              </text>
              {/* English name below */}
              <text
                x={m.x}
                y={m.y + m.r + 4.5}
                textAnchor="middle"
                fill={color}
                opacity="0.4"
                fontSize="2.5"
                fontFamily="var(--font-geist-sans), sans-serif"
                letterSpacing="0.5"
              >
                {m.labelEn}
              </text>
              {/* Star name — even smaller, below English */}
              <text
                x={m.x}
                y={m.y + m.r + 7.5}
                textAnchor="middle"
                fill="var(--star-dim)"
                opacity="0.3"
                fontSize="2"
                fontFamily="var(--font-geist-mono), monospace"
              >
                {m.star}
              </text>
            </>
          )}
        </motion.g>
      ))}

      {/* ============================================
          Title — inside the diagram
          ============================================ */}
      <motion.text
        x="100"
        y="74"
        textAnchor="middle"
        fill={color}
        opacity="0.25"
        fontSize="3.5"
        fontFamily="serif"
        letterSpacing="3"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 0.25,
            transition: { duration: 0.6, delay: 1.5 },
          },
        }}
      >
        東方青龍 · THE AZURE DRAGON OF THE EAST
      </motion.text>
    </motion.svg>
  );
}
