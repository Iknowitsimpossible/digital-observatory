"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered fade-up animation wrapper.
 * Reusable across all content pages — wraps any section
 * and fades + lifts it into view when scrolled to.
 *
 * Why framer-motion's whileInView?
 * - It's the cleanest way to trigger animations on scroll
 * - No need for IntersectionObserver boilerplate
 * - viewport.once means the animation only plays on first scroll-to,
 *   which prevents jarring re-animations when scrolling back up
 */

function buildVariants(delay: number) {
  return {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const, // ease-out cubic — natural deceleration
      },
    },
  };
}

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before animation starts. Use for staggered reveals. */
  delay?: number;
  /** Which DOM element to render. Defaults to "section". */
  as?: "section" | "div";
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "section",
}: Props) {
  const MotionElement = motion[as] as typeof motion.section;

  return (
    <MotionElement
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={buildVariants(delay)}
      className={className}
    >
      {children}
    </MotionElement>
  );
}
