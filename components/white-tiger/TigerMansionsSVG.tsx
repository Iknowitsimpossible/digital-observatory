"use client";

import { motion } from "framer-motion";

/**
 * Tiger anatomy diagram — the seven lunar mansions of the White Tiger
 * positioned along the tiger's body from hind legs (Kui) to core (Shen).
 *
 * Visual concept: The tiger's body sweeps from left to right across the
 * diagram — hindquarters lower, rising through the midsection, head
 * (Pleiades) slightly elevated, then descending to the broad chest/body
 * (Shen/Orion). This is less serpentine than the Dragon diagram and
 * more compact, muscular — matching the tiger's physical character.
 *
 * The Pleiades (4th mansion, Mao) gets a special multi-dot cluster
 * treatment — it is the only star *cluster* among the 28 mansions,
 * appearing as a tight grouping of tiny points rather than a single star.
 *
 * Design references:
 * - Han dynasty tomb carvings of the White Tiger (compact, muscular body)
 * - Chinese star maps showing mansion positions
 * - Gold/white metallic palette for the Metal element
 */

// Seven mansion positions — tiger body from hind legs (left) to body (right)
// ViewBox: 0 0 220 70
const MANSIONS = [
  { id: "kui", x: 16, y: 40, r: 2.0, label: "奎", labelEn: "Legs", star: "η And", desc: "Hindquarters" },
  { id: "lou", x: 48, y: 33, r: 1.8, label: "娄", labelEn: "Bond", star: "α Ari", desc: "Lower body" },
  { id: "wei", x: 78, y: 28, r: 1.8, label: "胃", labelEn: "Stomach", star: "35 Ari", desc: "Midsection" },
  { id: "mao", x: 110, y: 22, r: 2.6, label: "昴", labelEn: "Hairy Head", star: "Pleiades", desc: "Mane", isCluster: true },
  { id: "bi", x: 143, y: 26, r: 2.0, label: "毕", labelEn: "Net", star: "Aldebaran", desc: "Hunting net" },
  { id: "zi", x: 173, y: 34, r: 1.6, label: "觜", labelEn: "Beak", star: "λ Ori", desc: "Muzzle" },
  { id: "shen", x: 200, y: 42, r: 3.0, label: "参", labelEn: "Three Stars", star: "Orion Belt", desc: "Body core", isCore: true },
];

// Body connections
const LINES: [string, string][] = [
  ["kui", "lou"], ["lou", "wei"], ["wei", "mao"],
  ["mao", "bi"], ["bi", "zi"], ["zi", "shen"],
];

// Tiger body curve path
const BODY_PATH = "M 16 40 C 30 37, 40 34, 48 33 C 62 30, 68 27, 78 28 C 93 24, 100 21, 110 22 C 125 24, 132 25, 143 26 C 157 28, 162 32, 173 34 C 183 37, 190 40, 200 42";

const GOLD = "#c4a35a";
const SILVER = "rgba(232, 230, 227, 0.6)";

type Props = {
  className?: string;
  color?: string;
  showLabels?: boolean;
};

export default function TigerMansionsSVG({
  className = "",
  color = GOLD,
  showLabels = true,
}: Props) {
  return (
    <motion.svg
      viewBox="0 0 220 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      style={{ width: "100%", height: "auto", maxWidth: 680 }}
    >
      <defs>
        {/* Tiger body gradient — gold at core, fading toward the legs */}
        <linearGradient id="tiger-body" x1="1" y1="0" x2="0" y2="0.2">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="40%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.15" />
        </linearGradient>

        {/* Pleiades cluster glow */}
        <radialGradient id="pleiades-glow" cx="110" cy="22" r="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8e6e3" stopOpacity="0.3" />
          <stop offset="40%" stopColor={color} stopOpacity="0.12" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Shen / Orion core glow */}
        <radialGradient id="shen-glow" cx="200" cy="42" r="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="50%" stopColor={color} stopOpacity="0.08" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Star soft filter */}
        <filter id="star-soft-tiger" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      {/* ============================================
          Background — subtle grid lines (like a star chart)
          ============================================ */}
      {[15, 35, 55].map((y, i) => (
        <motion.line
          key={`grid-${i}`}
          x1="0" y1={y} x2="220" y2={y}
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="0.3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.6, delay: 0.1 + i * 0.1 },
            },
          }}
        />
      ))}

      {/* ============================================
          Mansion glows (rendered behind stars)
          ============================================ */}
      {/* Pleiades glow */}
      <motion.circle
        cx="110" cy="22" r="10"
        fill="url(#pleiades-glow)"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
        }}
      />
      {/* Shen glow */}
      <motion.circle
        cx="200" cy="42" r="10"
        fill="url(#shen-glow)"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6, delay: 0.7 } },
        }}
      />

      {/* ============================================
          Tiger body — main thick stroke
          ============================================ */}
      <motion.path
        d={BODY_PATH}
        stroke="url(#tiger-body)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter="url(#star-soft-tiger)"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.2, delay: 0.2, ease: "easeInOut" },
          },
        }}
      />

      {/* Secondary body line — spine detail */}
      <motion.path
        d={BODY_PATH}
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeDasharray="3 5"
        strokeLinecap="round"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
          },
        }}
      />

      {/* ============================================
          Constellation connecting lines
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
            strokeOpacity="0.35"
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.7 + i * 0.08,
                  ease: "easeInOut",
                },
              },
            }}
          />
        );
      })}

      {/* ============================================
          Tiger head — stylized at the right end (Shen region)
          ============================================ */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
          },
        }}
      >
        {/* Ears — sharp triangles */}
        <path
          d="M 196 36 L 192 30 L 198 34"
          stroke={color} strokeWidth="1" strokeOpacity="0.5"
          fill="none" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M 200 35 L 204 28 L 206 34"
          stroke={color} strokeWidth="1" strokeOpacity="0.5"
          fill="none" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Eye */}
        <circle cx="198" cy="38" r="0.8" fill={color} opacity="0.7" />
        {/* Whisker lines */}
        <line x1="202" y1="40" x2="212" y2="42" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" strokeLinecap="round" />
        <line x1="202" y1="41" x2="212" y2="44" stroke={color} strokeWidth="0.5" strokeOpacity="0.25" strokeLinecap="round" />
      </motion.g>

      {/* ============================================
          Tail — at the left (Kui region)
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
          d="M 16 40 C 8 44, 4 42, 2 38"
          stroke={color} strokeWidth="1" strokeOpacity="0.4"
          fill="none" strokeLinecap="round"
        />
        <path
          d="M 16 40 C 10 46, 6 44, 4 42"
          stroke={color} strokeWidth="0.7" strokeOpacity="0.3"
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
          {/* Pleiades: star cluster — multiple tiny dots */}
          {m.isCluster && (
            <>
              {[
                [108, 20], [111, 19], [112, 22], [109, 23],
                [110.5, 24], [108, 21.5], [112.5, 21],
              ].map(([cx, cy], j) => (
                <circle
                  key={`pleiad-${j}`}
                  cx={cx} cy={cy}
                  r={0.5 + Math.random() * 0.3}
                  fill="var(--star-white)"
                  opacity={0.5 + Math.random() * 0.3}
                />
              ))}
              {/* Cluster haze */}
              <circle
                cx={m.x} cy={m.y}
                r={5}
                fill="rgba(232, 230, 227, 0.06)"
              />
            </>
          )}

          {/* Core mansion (Shen): extra glow ring */}
          {m.isCore && (
            <circle
              cx={m.x} cy={m.y} r={m.r * 2.5}
              fill="none"
              stroke={color}
              strokeWidth="0.3"
              strokeOpacity="0.3"
              strokeDasharray="1.5 3"
            />
          )}

          {/* Regular star dot (non-cluster mansions) */}
          {!m.isCluster && (
            <circle
              cx={m.x} cy={m.y} r={m.r}
              fill={m.isCore ? color : "var(--star-white)"}
              opacity={m.isCore ? 0.9 : 0.75}
            />
          )}

          {/* Bright center for major mansions */}
          {(m.isCore || m.r > 2.2) && (
            <circle cx={m.x} cy={m.y} r={m.r * 0.3} fill="white" opacity="0.5" />
          )}

          {/* Labels */}
          {showLabels && (
            <>
              {/* Chinese character above */}
              <text
                x={m.x}
                y={m.y - m.r - 2.5}
                textAnchor="middle"
                fill={color}
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
              {/* Star name */}
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
        x="110"
        y="64"
        textAnchor="middle"
        fill={color}
        opacity="0.2"
        fontSize="3"
        fontFamily="serif"
        letterSpacing="2"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 0.2,
            transition: { duration: 0.6, delay: 1.5 },
          },
        }}
      >
        西方白虎 · THE WHITE TIGER OF THE WEST
      </motion.text>
    </motion.svg>
  );
}
