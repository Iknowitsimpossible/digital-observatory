/**
 * ArticleCard — NASA-style interactive card.
 *
 * Three variants:
 *  - hero:     full-width, text over thumbnail, gradient overlay, large title + description
 *  - standard: thumbnail (3:2) + text below, category tag + title
 *  - topic:    horizontal banner — accent left border, gradient bg, rich text, no thumbnail
 *
 * Image support:
 *  When `image` is set (e.g. "/images/orion-nebula.jpg"), it renders a real <img>
 *  instead of the generated thumbnail. Place images in public/images/.
 *
 * Interaction: thumbnail zooms 5% on hover (CSS only). No shadow changes, no lift.
 * Animations: framer-motion entrance only — hover is pure CSS.
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CardThumbnail, { type ThumbnailType } from "./CardThumbnail";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type CardCategory =
  | "earth"
  | "sky"
  | "human"
  | "reading-note"
  | "video-script";

export type CardProps = {
  variant: "hero" | "standard" | "topic";
  title: string;
  description?: string;
  categoryLabel: string;
  category: CardCategory;
  href: string;
  thumbnailType: ThumbnailType;
  accent: string;
  seed?: string;
  featured?: boolean;
  /** Public image path, e.g. "/images/orion.jpg". When set, replaces generated thumbnail. */
  image?: string;
};

/* ------------------------------------------------------------------ */
/*  Category → accent color mapping                                    */
/* ------------------------------------------------------------------ */

const categoryAccent: Record<CardCategory, string> = {
  earth: "var(--earth-accent)",
  sky: "var(--sky-accent)",
  human: "var(--human-accent)",
  "reading-note": "var(--cinnabar)",
  "video-script": "var(--nebula)",
};

/* ------------------------------------------------------------------ */
/*  Entrance animation variants                                        */
/* ------------------------------------------------------------------ */

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.1, 0.1, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Shared thumbnail slot — generated SVG or real image               */
/* ------------------------------------------------------------------ */

function ThumbnailSlot({
  image,
  thumbnailType,
  accent,
  seed,
  className,
  priority = false,
}: {
  image?: string;
  thumbnailType: ThumbnailType;
  accent: string;
  seed?: string;
  className?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        style={{ objectFit: "cover" }}
        className={className}
      />
    );
  }
  return <CardThumbnail type={thumbnailType} accent={accent} seed={seed} className={className} />;
}

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */

export default function ArticleCard(props: CardProps) {
  const {
    variant,
    title,
    description,
    categoryLabel,
    category,
    href,
    thumbnailType,
    accent,
    seed,
    image,
  } = props;

  const tagColor = categoryAccent[category];

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
  /*  HERO VARIANT                                                    */
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  if (variant === "hero") {
    return (
      <motion.article variants={cardItem}>
        <Link
          href={href}
          className="group block relative overflow-hidden rounded-2xl border"
          style={{
            borderColor: "var(--border-dim)",
            background: "var(--space-mid)",
            minHeight: 400,
          }}
        >
          {/* Thumbnail fills entire card */}
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
            <ThumbnailSlot
              image={image}
              thumbnailType={thumbnailType}
              accent={accent}
              seed={seed}
              priority
            />
          </div>

          {/* Gradient overlay — dark at bottom for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 35%, rgba(10, 14, 26, 0.92) 100%)",
            }}
          />

          {/* Text content — pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span
              className="inline-block text-xs tracking-[0.18em] uppercase font-medium mb-3"
              style={{ color: tagColor }}
            >
              {categoryLabel}
            </span>
            <h2
              className="text-2xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--star-white)",
              }}
            >
              {title}
            </h2>
            {description && (
              <p
                className="text-sm md:text-base leading-relaxed max-w-2xl"
                style={{ color: "var(--star-dim)", opacity: 0.85 }}
              >
                {description}
              </p>
            )}
          </div>
        </Link>
      </motion.article>
    );
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
  /*  STANDARD VARIANT                                                */
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  if (variant === "standard") {
    return (
      <motion.article variants={cardItem}>
        <Link
          href={href}
          className="group block overflow-hidden rounded-2xl border transition-colors duration-300"
          style={{
            borderColor: "var(--border-dim)",
            background: "var(--space-mid)",
          }}
        >
          {/* Thumbnail — 3:2 aspect ratio */}
          <div
            className="overflow-hidden"
            style={{ aspectRatio: "3 / 2", position: "relative" }}
          >
            <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
              <ThumbnailSlot
                image={image}
                thumbnailType={thumbnailType}
                accent={accent}
                seed={seed}
              />
            </div>
          </div>

          {/* Text area */}
          <div className="p-5">
            <span
              className="inline-block text-[0.65rem] tracking-[0.18em] uppercase font-medium mb-2"
              style={{ color: tagColor }}
            >
              {categoryLabel}
            </span>
            <h3
              className="text-base md:text-lg font-semibold tracking-tight leading-snug mb-1.5"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--star-white)",
              }}
            >
              {title}
            </h3>
            {description && (
              <p
                className="text-sm leading-relaxed line-clamp-2"
                style={{ color: "var(--star-dim)", opacity: 0.8 }}
              >
                {description}
              </p>
            )}
          </div>
        </Link>
      </motion.article>
    );
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
  /*  TOPIC VARIANT — horizontal domain banner, no thumbnail         */
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  if (variant === "topic") {
    return (
      <motion.article variants={cardItem}>
        <Link
          href={href}
          className="group block overflow-hidden rounded-2xl border glass transition-colors duration-300 relative"
        >
          {/* Accent left border */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5"
            style={{ background: accent }}
          />

          {/* Subtle gradient background tinted with accent */}
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-60"
            style={{
              background: `radial-gradient(ellipse at 80% 50%, ${accent}10, transparent 70%)`,
            }}
          />

          {/* Content */}
          <div className="relative p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3
                  className="text-2xl md:text-3xl font-semibold tracking-tight mb-1.5"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    color: "var(--star-white)",
                  }}
                >
                  {title}
                </h3>
                <span
                  className="inline-block text-[0.7rem] tracking-[0.15em] uppercase font-medium mb-3"
                  style={{ color: tagColor }}
                >
                  {categoryLabel}
                </span>
                {description && (
                  <p
                    className="text-sm leading-relaxed max-w-xl"
                    style={{ color: "var(--star-dim)", opacity: 0.75 }}
                  >
                    {description}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <span
                className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 group-hover:translate-x-1 mt-2"
                style={{
                  borderColor: "var(--border-dim)",
                  color: accent,
                  fontSize: "1rem",
                }}
              >
                &rarr;
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return null;
}
