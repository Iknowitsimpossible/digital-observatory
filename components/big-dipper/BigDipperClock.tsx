"use client";

import { motion } from "framer-motion";

/**
 * Animated diagram showing how the Big Dipper's handle direction
 * at dusk indicates the season — the ancient Chinese "斗建" (dǒujiàn)
 * timekeeping system.
 *
 * Four copies of the Dipper are drawn around Polaris, one at each
 * seasonal position. Each fades in on scroll with a staggered delay.
 *
 * Design: gold-amber stars against a deep indigo background, evoking
 * the look of a Song-dynasty astronomical woodblock print. The faint
 * circular track and seasonal labels in Chinese characters give it
 * the feel of an armillary sphere adapted for the northern sky.
 */

/** Star positions for the Big Dipper pattern — bowl + handle */
const DIPPER_SHAPE = [
  { x: 7, y: -2 },   // Dubhe (bowl, upper right)
  { x: 10, y: 8 },   // Merak (bowl, lower right)
  { x: -2, y: -4 },  // Phecda (bowl, lower left)
  { x: 0, y: 2 },    // Megrez (bowl-handle junction)
  { x: -8, y: -4 },  // Alioth (handle, first)
  { x: -9, y: -18 }, // Mizar (handle, middle)
  { x: -16, y: -30 },// Alkaid (handle, tip)
];

/** Rotation angle, handle direction label, and Chinese label for each season */
const SEASONS = [
  { angle: 0,    label: "Spring · 春", handle: "East", chinese: "斗柄东指" },
  { angle: 90,   label: "Summer · 夏", handle: "South", chinese: "斗柄南指" },
  { angle: 180,  label: "Autumn · 秋", handle: "West", chinese: "斗柄西指" },
  { angle: 270,  label: "Winter · 冬", handle: "North", chinese: "斗柄北指" },
];

function rotate(x: number, y: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: x * Math.cos(rad) - y * Math.sin(rad),
    y: x * Math.sin(rad) + y * Math.cos(rad),
  };
}

type SeasonPositionProps = {
  angle: number;
  label: string;
  handle: string;
  chinese: string;
  delay: number;
};

function SeasonPosition({ angle, label, handle, chinese, delay }: SeasonPositionProps) {
  const stars = DIPPER_SHAPE.map((p) => rotate(p.x, p.y, angle));
  const bowlStars = stars.slice(0, 4);
  const handleStars = stars.slice(3); // including Megrez as the junction

  return (
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.6, delay },
      }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Bowl connecting lines */}
      <polygon
        points={bowlStars.map((s) => `${s.x},${s.y}`).join(" ")}
        fill="none"
        stroke="var(--star-dim)"
        strokeWidth="0.4"
        strokeOpacity="0.4"
        strokeDasharray="2 1.5"
      />

      {/* Handle connecting line */}
      <polyline
        points={handleStars.map((s) => `${s.x},${s.y}`).join(" ")}
        fill="none"
        stroke="var(--star-dim)"
        strokeWidth="0.4"
        strokeOpacity="0.5"
      />

      {/* Stars */}
      {stars.map((s, i) => (
        <g key={i}>
          {/* Glow */}
          <circle
            cx={s.x}
            cy={s.y}
            r={i === 6 ? 1.4 : 1.0}
            fill="#f0d78c"
            fillOpacity="0.25"
          />
          {/* Core */}
          <circle
            cx={s.x}
            cy={s.y}
            r={i === 6 ? 0.7 : 0.5}
            fill="#f5e6b8"
          />
        </g>
      ))}

      {/* Handle-direction label */}
      <text
        x={handleStars[handleStars.length - 1].x + (angle === 0 ? 5 : angle === 180 ? -5 : 0)}
        y={handleStars[handleStars.length - 1].y + (angle === 90 ? 8 : angle === 270 ? -5 : 0)}
        textAnchor={angle === 0 ? "start" : angle === 180 ? "end" : "middle"}
        fill="#f0d78c"
        fillOpacity="0.6"
        fontSize="3.5"
        fontFamily="var(--font-geist-mono), monospace"
      >
        {handle}
      </text>

      {/* Chinese label near the bowl */}
      <text
        x={bowlStars[0].x + 7}
        y={bowlStars[0].y + 1}
        textAnchor="start"
        fill="var(--star-dim)"
        fillOpacity="0.45"
        fontSize="3"
        fontFamily="serif"
      >
        {chinese}
      </text>

      {/* Season label */}
      <text
        x={bowlStars[0].x + 7}
        y={bowlStars[0].y + (angle === 0 ? 4.5 : 5)}
        textAnchor="start"
        fill="var(--star-dim)"
        fillOpacity="0.35"
        fontSize="2.5"
        fontFamily="var(--font-geist-sans), sans-serif"
      >
        {label}
      </text>
    </motion.g>
  );
}

export default function BigDipperClock() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto my-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <svg
        viewBox="-55 -55 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ maxHeight: "480px" }}
      >
        <defs>
          <radialGradient id="polarisGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0d78c" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#f0d78c" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f0d78c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a2540" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#0f1628" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Background circle */}
        <circle cx={0} cy={0} r={48} fill="url(#bgGlow)" />
        <circle cx={0} cy={0} r={48} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />

        {/* Circular rotation track */}
        <circle
          cx={0}
          cy={0}
          r={22}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.3"
          strokeDasharray="2 4"
        />

        {/* Polaris */}
        <circle cx={0} cy={0} r={2.5} fill="url(#polarisGlow)" />
        <circle cx={0} cy={0} r={0.8} fill="#f5e6b8" />
        <text
          x={0}
          y={-4.5}
          textAnchor="middle"
          fill="var(--star-dim)"
          fillOpacity="0.6"
          fontSize="3"
          fontFamily="serif"
        >
          北辰
        </text>
        <text
          x={0}
          y={7}
          textAnchor="middle"
          fill="var(--star-dim)"
          fillOpacity="0.35"
          fontSize="2.2"
          fontFamily="var(--font-geist-mono), monospace"
        >
          Polaris
        </text>

        {/* Four seasonal positions */}
        {SEASONS.map((season, i) => (
          <SeasonPosition
            key={season.label}
            angle={season.angle}
            label={season.label}
            handle={season.handle}
            chinese={season.chinese}
            delay={i * 0.15}
          />
        ))}

        {/* Cardinal direction labels at the edges */}
        {[
          { label: "E · 东", x: 48, y: 0, anchor: "start" as const },
          { label: "S · 南", x: 0, y: 48, anchor: "middle" as const },
          { label: "W · 西", x: -48, y: 0, anchor: "end" as const },
          { label: "N · 北", x: 0, y: -48, anchor: "middle" as const },
        ].map((d) => (
          <text
            key={d.label}
            x={d.x}
            y={d.y}
            dy={d.anchor === "middle" ? (d.y > 0 ? "1.2em" : "-0.4em") : "0.35em"}
            textAnchor={d.anchor}
            fill="var(--star-dim)"
            fillOpacity="0.25"
            fontSize="2.5"
            fontFamily="var(--font-geist-sans), sans-serif"
          >
            {d.label}
          </text>
        ))}
      </svg>

      {/* Caption */}
      <p
        className="text-center text-xs mt-5"
        style={{ color: "var(--star-dim)", opacity: 0.4, fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        The Big Dipper&apos;s handle direction at dusk indicates the season.
        Ancient Chinese astronomers called this system 斗建 (dǒujiàn).
      </p>
    </motion.div>
  );
}
