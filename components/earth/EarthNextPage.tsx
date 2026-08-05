"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/orion/AnimatedSection";

type EarthNextPageProps = {
  href: string;
  title: string;
  label?: string;
};

/**
 * Bottom-of-page navigation for Earth section pages.
 *
 * Renders a subtle "next page" link after the reading panel,
 * letting readers continue through the Earth methods in sequence.
 * The last page (Astrophotography) passes label="Return to"
 * and links back to `/earth`.
 *
 * Why outside the reading panel div?
 *   Visual separation — the card ends, then navigation appears
 *   as a standalone footer element rather than part of the article.
 */
export default function EarthNextPage({
  href,
  title,
  label = "Continue reading",
}: EarthNextPageProps) {
  return (
    <AnimatedSection delay={0.35}>
      <div className="max-w-3xl mx-auto px-8 md:px-12 pb-20 md:pb-28">
        <Link href={href} className="group block">
          {/* Label */}
          <p
            className="text-sm tracking-[0.18em] uppercase mb-3"
            style={{ color: "var(--earth-accent)", opacity: 0.6 }}
          >
            {label}
          </p>

          {/* Title + arrow */}
          <div className="flex items-center gap-3">
            <h3
              className="text-2xl md:text-3xl font-light transition-colors group-hover:text-[var(--star-white)]"
              style={{
                color: "var(--star-dim)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              {title}
            </h3>
            <ArrowRight
              className="w-5 h-5 transition-transform group-hover:translate-x-1.5"
              style={{ color: "var(--earth-accent)" }}
            />
          </div>

          {/* Decorative rule */}
          <div
            className="mt-4 h-px transition-all group-hover:w-28"
            style={{
              width: "min(60px, 15vw)",
              background:
                "linear-gradient(to right, var(--earth-accent), transparent)",
              opacity: 0.3,
            }}
          />
        </Link>
      </div>
    </AnimatedSection>
  );
}
