"use client";

import { motion } from "framer-motion";

/**
 * Hero section — the White Tiger of the West (白虎).
 *
 * Visual concept: Sharp, angular tiger stripes sweep diagonally across
 * a dark field, evoking the White Tiger's fierceness and the metallic
 * precision of autumn. The character 虎 (hǔ — tiger) sits large in
 * the background like an imperial ink seal.
 *
 * Unlike Orion's circular telescope eyepiece and the Dragon's organic
 * rising-curve, the Tiger's visual language is angular and metallic —
 * slashing diagonals, silver-white shards, gold accents. The stripes
 * animate in sequence from right to left, suggesting a predator
 * emerging from the darkness of the western sky.
 *
 * Design references:
 * - Chinese ink-brush tiger paintings (水墨虎)
 * - The metal element (金) of the Five Elements
 * - Sharp, crystalline autumn aesthetics
 */

// Stripe definitions — each is a diagonal band, positioned and rotated
const STRIPES = [
  { top: "8%", left: "5%", width: "380px", height: "60px", rotate: -22, delay: 0.1, opacity: 0.12 },
  { top: "18%", left: "12%", width: "420px", height: "48px", rotate: -24, delay: 0.2, opacity: 0.08 },
  { top: "28%", left: "2%", width: "500px", height: "70px", rotate: -20, delay: 0.15, opacity: 0.15 },
  { top: "38%", left: "8%", width: "360px", height: "40px", rotate: -26, delay: 0.25, opacity: 0.09 },
  { top: "50%", left: "0%", width: "480px", height: "56px", rotate: -18, delay: 0.18, opacity: 0.11 },
  { top: "62%", left: "6%", width: "400px", height: "50px", rotate: -23, delay: 0.22, opacity: 0.07 },
  { top: "72%", left: "10%", width: "440px", height: "64px", rotate: -21, delay: 0.13, opacity: 0.1 },
  { top: "82%", left: "4%", width: "520px", height: "44px", rotate: -25, delay: 0.28, opacity: 0.08 },
];

// Accent color — warm gold (metal element) with a white/silver cast
const GOLD = "#c4a35a";
const GOLD_DIM = "rgba(196, 163, 90, 0.35)";

export default function TigerHero() {
  return (
    <section className="relative flex flex-col items-center pt-12 md:pt-20 pb-8 md:pb-12 px-6 overflow-hidden">
      {/* ==========================================
          Background: animated tiger stripes
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {STRIPES.map((s, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: s.top,
              left: s.left,
              width: s.width,
              height: s.height,
              background: `linear-gradient(${90 + s.rotate}deg, transparent 0%, rgba(232, 230, 227, ${s.opacity * 3}) 30%, rgba(196, 163, 90, ${s.opacity * 2}) 60%, transparent 100%)`,
              transform: `rotate(${s.rotate}deg)`,
              filter: "blur(1px)",
            }}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.0,
              delay: s.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}

        {/* Subtle radial glow at center — metallic sheen */}
        <motion.div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "600px",
            height: "600px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse, rgba(196, 163, 90, 0.06) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* ==========================================
          虎 character — large background seal
          ========================================== */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <div
          className="select-none"
          style={{
            fontSize: "clamp(10rem, 22vw, 18rem)",
            fontFamily: "serif",
            color: GOLD,
            opacity: 0.15,
            lineHeight: 1,
            textShadow: `0 0 80px rgba(196, 163, 90, 0.15), 0 0 200px rgba(232, 230, 227, 0.06)`,
            padding: "0.5rem 0",
          }}
          aria-hidden="true"
        >
          虎
        </div>
      </motion.div>

      {/* ==========================================
          Title + subtitle
          ========================================== */}
      <motion.p
        className="text-xs tracking-[0.22em] uppercase mt-6 mb-4"
        style={{ color: GOLD }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
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
        transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
      >
        White Tiger
      </motion.h1>

      <motion.p
        className="text-base md:text-lg mt-3 text-center"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
      >
        白虎 · Guardian of the Western Sky
      </motion.p>

      {/* Decorative horizontal rule */}
      <motion.div
        className="mt-8 h-px"
        style={{
          width: "min(120px, 30vw)",
          background: `linear-gradient(to right, transparent, ${GOLD_DIM}, transparent)`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
      />
    </section>
  );
}
