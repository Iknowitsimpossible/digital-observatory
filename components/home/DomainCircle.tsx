"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

export interface DomainTopic {
  title: string;
  description?: string;
  categoryLabel: string;
  accent: string;
  href: string;
  seed?: string;
  chineseChar: string;
}

interface DomainCircleProps extends DomainTopic {
  index: number;
}

/* ------------------------------------------------------------------ */
/*  Animation variant                                                   */
/* ------------------------------------------------------------------ */

const circleVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.18,
      ease: [0.22, 0.1, 0.1, 1] as const,
    },
  }),
};

/* ================================================================== */
/*  DOMAIN CIRCLE                                                       */
/* ================================================================== */

export default function DomainCircle({
  title,
  description,
  categoryLabel,
  accent,
  href,
  chineseChar,
  index,
}: DomainCircleProps) {
  return (
    <motion.div
      variants={circleVariant}
      custom={index}
      initial="hidden"
      animate="visible"
    >
      <Link
        href={href}
        className="group relative flex flex-col items-center justify-center text-center
                   w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px]
                   rounded-full glass
                   transition-all duration-500 ease-out
                   hover:scale-[1.03]"
        style={{
          borderColor: `${accent}40`,
        }}
      >
        {/* Hover: accent border brightens */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                       transition-opacity duration-500 pointer-events-none"
          style={{
            border: `1.5px solid ${accent}`,
          }}
        />

        {/* Hover: inner glow */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                       transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 40px ${accent}15`,
          }}
        />

        {/* Chinese character watermark */}
        <span
          className="absolute inset-0 flex items-center justify-center
                     text-[7rem] md:text-[8rem] font-serif select-none pointer-events-none
                     opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500"
          style={{
            color: accent,
            fontFamily:
              '"Songti SC", "STSong", "SimSun", "Noto Serif CJK SC", serif',
          }}
        >
          {chineseChar}
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 px-6 py-4 max-w-[82%]">
          {/* Category label */}
          <span
            className="text-[0.6rem] tracking-[0.18em] uppercase font-medium"
            style={{ color: accent, opacity: 0.9 }}
          >
            {categoryLabel}
          </span>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl md:text-[1.65rem] font-semibold
                       tracking-tight leading-tight"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "var(--star-white)",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p
              className="text-[0.7rem] md:text-xs leading-relaxed line-clamp-2"
              style={{ color: "var(--star-dim)", opacity: 0.65 }}
            >
              {description}
            </p>
          )}

          {/* Arrow */}
          <span
            className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8
                       rounded-full border mt-0.5 transition-all duration-300
                       group-hover:translate-y-0.5"
            style={{
              borderColor: "var(--border-dim)",
              color: accent,
              fontSize: "0.8rem",
            }}
          >
            &rarr;
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
