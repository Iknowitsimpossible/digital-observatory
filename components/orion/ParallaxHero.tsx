"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Hero section — a giant circular frame containing the Orion Nebula,
 * like looking through a telescope eyepiece at the night sky.
 *
 * The circle is surrounded by concentric decorative rings inspired by
 * both Chinese star charts and classical celestial atlases. The image
 * sits inside, cropped to a perfect circle with a subtle inner glow.
 *
 * Animation: the circle scales in from nothing (like a telescope
 * coming into focus), then the title and subtitle fade up below it.
 */

const CIRCLE_SIZE = 520; // px — base size, scales with screen

export default function ParallaxHero() {
  return (
    <section className="flex flex-col items-center pt-16 md:pt-24 pb-10 md:pb-16 px-6">
      {/* ==========================================
          Circular frame group
          ========================================== */}
      <motion.div
        className="relative"
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          maxWidth: "min(520px, 85vw)",
          maxHeight: "min(520px, 85vw)",
        }}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.0,
          ease: [0.34, 1.56, 0.64, 1], // spring-like cubic — gentle overshoot
        }}
      >
        {/* Outer decorative ring — thin gold line */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -14,
            border: "1px solid rgba(196, 163, 90, 0.3)",
            boxShadow: "0 0 40px rgba(196, 163, 90, 0.08), 0 0 80px rgba(91, 141, 184, 0.06)",
          }}
        />

        {/* Middle ring — dashed, like a measuring instrument */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -7,
            border: "1px dashed rgba(255, 255, 255, 0.08)",
          }}
        />

        {/* Inner glow ring — sits just outside the image edge */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -3,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* The image — clipped to a circle */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{ inset: 0 }}
        >
          <Image
            src="/images/orion-nebula.webp"
            alt="The Orion Nebula — a stellar nursery 1,300 light-years away"
            fill
            className="object-cover"
            priority
            sizes={`min(520px, 85vw)`}
          />

          {/* Subtle vignette inside the circle — darkens edges */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, transparent 55%, rgba(10, 14, 26, 0.5) 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* ==========================================
          Title + subtitle below the circle
          ========================================== */}
      <motion.p
        className="text-xs tracking-[0.22em] uppercase mt-10 mb-4"
        style={{ color: "var(--sky-accent)" }}
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
        Orion
      </motion.h1>

      <motion.p
        className="text-base md:text-lg mt-3 text-center"
        style={{ color: "var(--star-dim)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        The Hunter and the Minister
      </motion.p>
    </section>
  );
}
