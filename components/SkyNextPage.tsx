"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/orion/AnimatedSection";

type SkyNextPageProps = {
  href: string;
  title: string;
  label?: string;
};

/**
 * Bottom-of-page navigation for Sky section pages.
 *
 * Same pattern as EarthNextPage — renders a subtle "next page" link
 * after the article content, letting readers continue through the
 * Sky constellations in sequence.
 *
 * Design token: sky-accent (#5b8db8) — night blue.
 */
export default function SkyNextPage({
  href,
  title,
  label = "Continue reading",
}: SkyNextPageProps) {
  return (
    <AnimatedSection delay={0.35}>
      <div className="max-w-3xl mx-auto px-8 md:px-12 pb-20 md:pb-28">
        <Link href={href} className="group block">
          {/* Label */}
          <p
            className="text-sm tracking-[0.18em] uppercase mb-3"
            style={{ color: "var(--sky-accent)", opacity: 0.6 }}
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
              style={{ color: "var(--sky-accent)" }}
            />
          </div>

          {/* Decorative rule */}
          <div
            className="mt-4 h-px transition-all group-hover:w-28"
            style={{
              width: "min(60px, 15vw)",
              background:
                "linear-gradient(to right, var(--sky-accent), transparent)",
              opacity: 0.3,
            }}
          />
        </Link>
      </div>
    </AnimatedSection>
  );
}
