"use client";

import { useId } from "react";
import { motion } from "framer-motion";

/**
 * Decorative SVG that looks like a Chinese seal (印章).
 *
 * Design: a square border with a character inside, mimicking
 * the look of a carved stone seal stamped on paper. The slight
 * rotation and textured edges give it an ink-stamp feel.
 *
 * Why SVG instead of just rendering the character in CSS?
 * A seal is a visual design element, not just text — the square
 * border, the rotation, and the ink-like color all work together
 * to evoke Chinese visual culture authentically. Plain text in
 * red wouldn't carry the same cultural reference.
 *
 * Now reusable across pages — pass a different `character`,
 * `label`, and `color` for each constellation or domain.
 */

type Props = {
  className?: string;
  /** Size in pixels. Defaults to 120. */
  size?: number;
  /** The Chinese character to display. Defaults to 参 (Shēn). */
  character?: string;
  /** Small label text below the character. Defaults to "SHĒN XIÙ". */
  label?: string;
  /** Accent color for the seal border and character. Defaults to cinnabar red. */
  color?: string;
};

export default function ChineseSeal({
  className = "",
  size = 120,
  character = "参",
  label = "SHĒN XIÙ",
  color = "var(--cinnabar)",
}: Props) {
  const filterId = useId();

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
      whileInView={{
        opacity: 1,
        rotate: 2,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      viewport={{ once: true, margin: "-60px" }}
      style={{ filter: `url(#${filterId})` }}
    >
      {/* Roughness filter for ink-stamp texture */}
      <defs>
        <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      {/* Outer square border */}
      <motion.rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx="2"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      />

      {/* Inner border (double-line seal style) */}
      <motion.rect
        x="16"
        y="16"
        width="68"
        height="68"
        rx="1"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: { duration: 0.4, delay: 0.35, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      />

      {/* The character */}
      <motion.text
        x="50"
        y="66"
        textAnchor="middle"
        fill={color}
        fontSize="52"
        fontFamily="serif"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{ once: true }}
      >
        {character}
      </motion.text>

      {/* Small label below the character */}
      <motion.text
        x="50"
        y="82"
        textAnchor="middle"
        fill={color}
        opacity="0.6"
        fontSize="6"
        fontFamily="sans-serif"
        letterSpacing="0.5"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 0.6,
          transition: { duration: 0.5, delay: 0.7 },
        }}
        viewport={{ once: true }}
      >
        {label}
      </motion.text>
    </motion.svg>
  );
}
