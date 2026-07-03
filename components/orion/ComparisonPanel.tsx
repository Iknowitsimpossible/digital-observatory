"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Side-by-side comparison panel for Greek vs Chinese Orion.
 *
 * Two columns that animate in from opposite sides, meeting in the center.
 * Each column has an accent color, icon slot, title, and content.
 *
 * Why this layout?
 * The core insight of this article is that the same stars produced
 * radically different interpretations. Side-by-side is the most direct
 * way to show that contrast visually before the reader even reads the text.
 */

type Column = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  accent: string;      // CSS color value
  accentLabel: string;  // e.g. "Greek" or "Chinese"
  children: ReactNode;
};

type Props = {
  left: Column;
  right: Column;
  className?: string;
};

function ColumnCard({
  col,
  side,
}: {
  col: Column;
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      viewport={{ once: true, margin: "-80px" }}
      className="flex-1 min-w-0"
    >
      {/* Accent line at top */}
      <div className="h-0.5 w-16 mb-6" style={{ background: col.accent }} />

      {/* Icon + Label */}
      <div className="flex items-center gap-3 mb-4">
        <div style={{ color: col.accent }}>{col.icon}</div>
        <span
          className="text-xs tracking-[0.18em] uppercase font-medium"
          style={{ color: col.accent }}
        >
          {col.accentLabel}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-2xl font-light mb-2"
        style={{
          color: "var(--star-white)",
          fontFamily: "var(--font-playfair), serif",
        }}
      >
        {col.title}
      </h3>

      {/* Subtitle */}
      <p
        className="text-sm mb-6"
        style={{ color: "var(--star-dim)", opacity: 0.7 }}
      >
        {col.subtitle}
      </p>

      {/* Content */}
      <div className="text-sm leading-relaxed" style={{ color: "var(--star-dim)" }}>
        {col.children}
      </div>
    </motion.div>
  );
}

export default function ComparisonPanel({ left, right, className = "" }: Props) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${className}`}>
      <ColumnCard col={left} side="left" />
      {/* Divider — visible on desktop, hidden on mobile */}
      <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
      <ColumnCard col={right} side="right" />
    </div>
  );
}
