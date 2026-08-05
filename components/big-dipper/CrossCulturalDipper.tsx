"use client";

import { motion } from "framer-motion";

/**
 * Shows the same seven Big Dipper star positions with different
 * constellation outlines — reflecting how each culture projected
 * its own world onto the same points of light.
 *
 * Six interpretations arranged in a responsive grid. Each card
 * has identical star dots but unique connecting lines, a culture
 * label, and a short description. Cards animate in with staggered
 * delays.
 *
 * Design: small dark cards, gold-amber star dots, dim lines.
 * The identical star positions across cards make the cultural
 * variation immediately visible at a glance.
 */

/** Shared star positions — the seven stars of the Big Dipper */
const STARS = [
  { x: 22, y: 12 },  // Dubhe (bowl, upper right)
  { x: 28, y: 22 },  // Merak (bowl, lower right)
  { x: 14, y: 8 },   // Phecda (bowl, lower left)
  { x: 16, y: 16 },  // Megrez (bowl-handle junction)
  { x: 6,  y: 16 },  // Alioth (handle)
  { x: 4,  y: 4 },   // Mizar (handle middle)
  { x: 0,  y: -6 },  // Alkaid (handle tip)
];

type Culture = {
  name: string;
  native: string;
  description: string;
  /** Pairs of star indices to connect with lines */
  connections: [number, number][];
};

const CULTURES: Culture[] = [
  {
    name: "Greek",
    native: "Ursa Major",
    description: "The nymph Callisto, transformed into a bear by jealous Hera. Zeus grabbed her by the tail and flung her into the sky — mythologising the bear's unnaturally long tail.",
    connections: [
      [0, 1], [0, 2], [2, 3], [1, 3],
      [3, 4], [4, 5], [5, 6],
      [6, 6], // the "long tail" extends far behind
    ],
  },
  {
    name: "Chinese",
    native: "北斗七星",
    description: "The Northern Dipper — imperial timekeeper and celestial bureaucrat. Its handle governed the 24 solar terms. Sima Qian wrote: 'Everything is tied to the Dipper.'",
    connections: [[0, 1], [1, 3], [3, 2], [2, 0], [3, 4], [4, 5], [5, 6]],
  },
  {
    name: "Norse",
    native: "Karlavagnen",
    description: "Charles's Wagon or Odin's Wagon — a heavenly cart rolling endlessly around the pole star. Northern European peoples saw a vehicle, not an animal.",
    connections: [[0, 2], [2, 1], [0, 1], [3, 4], [4, 5], [5, 6]],
  },
  {
    name: "Enslaved Americans",
    native: "The Drinking Gourd",
    description: "A hollowed gourd for scooping water — and a celestial compass. The bowl's two pointer stars guided freedom seekers north along the Underground Railroad.",
    connections: [[0, 1], [1, 3], [3, 2], [2, 0], [3, 4], [4, 5], [5, 6]],
  },
  {
    name: "Iroquois",
    native: "The Bear Hunt",
    description: "The bowl is a bear; the three handle stars are hunters in pursuit. The middle star (Mizar) carries a cooking pot — the faint companion Alcor.",
    connections: [[0, 1], [1, 3], [3, 2], [2, 0]],
  },
  {
    name: "Hindu",
    native: "Saptarishi",
    description: "The Seven Sages who preserved cosmic knowledge across world-ages. Mizar (Vasishtha) and Alcor (Arundhati) symbolise marital devotion at Hindu weddings.",
    connections: [[0, 1], [1, 3], [3, 2], [2, 0], [3, 4], [4, 5], [5, 6]],
  },
];

function CultureCard({ culture, index }: { culture: Culture; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" },
      }}
      viewport={{ once: true, margin: "-60px" }}
      className="rounded-xl p-5 flex flex-col gap-3"
      style={{
        background: "rgba(20, 27, 45, 0.7)",
        border: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Star diagram */}
      <svg viewBox="-4 -16 36 46" fill="none" className="w-full h-20">
        {/* Constellation lines */}
        {culture.connections.map(([a, b], i) => (
          <line
            key={i}
            x1={STARS[a].x}
            y1={STARS[a].y}
            x2={STARS[b].x}
            y2={STARS[b].y}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.3"
          />
        ))}
        {/* Stars */}
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r="0.7" fill="#f0d78c" fillOpacity="0.7" />
        ))}
      </svg>

      {/* Label */}
      <div>
        <p className="text-xs tracking-[0.12em] uppercase font-medium mb-0.5" style={{ color: "#f0d78c", opacity: 0.5 }}>
          {culture.name}
        </p>
        <p className="text-sm font-medium" style={{ color: "var(--star-white)", fontFamily: "var(--font-playfair), serif" }}>
          {culture.native}
        </p>
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed" style={{ color: "var(--star-dim)", opacity: 0.55, fontFamily: "var(--font-geist-sans), sans-serif" }}>
        {culture.description}
      </p>
    </motion.div>
  );
}

export default function CrossCulturalDipper() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
      {CULTURES.map((culture, i) => (
        <CultureCard key={culture.name} culture={culture} index={i} />
      ))}
    </div>
  );
}
