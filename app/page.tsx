"use client";

import { motion } from "framer-motion";
import ArticleCard from "@/components/cards/ArticleCard";
import SectionHeader from "@/components/sections/SectionHeader";
import StarField from "@/components/StarField";
import {
  featuredArticle,
  latestArticles,
  domainTopics,
} from "@/components/home/data";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const pageContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.1, 0.1, 1] as const },
  },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/* ================================================================== */
/*  HOMEPAGE                                                           */
/* ================================================================== */

export default function HomePage() {
  return (
    <motion.div
      variants={pageContainer}
      initial="hidden"
      animate="visible"
    >
      <StarField />

      {/* ============================================================ */}
      {/*  SECTION 1 — Compact Hero                                     */}
      {/* ============================================================ */}

      <motion.section
        variants={sectionFade}
        className="pt-12 pb-10 md:pt-16 md:pb-14 flex flex-col items-center text-center"
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15]"
          style={{
            fontFamily: "var(--font-playfair), serif",
            color: "var(--star-white)",
          }}
        >
          The Digital Observatory
        </h1>

        <p
          className="mt-5 text-sm md:text-base"
          style={{ color: "var(--star-dim)", opacity: 0.75 }}
        >
          A personal observatory of Earth, Sky, and Human knowledge
        </p>

        {/* Gradient divider */}
        <div
          className="mt-8 h-px"
          style={{
            width: "min(140px, 30vw)",
            background:
              "linear-gradient(to right, transparent, var(--earth-accent), var(--sky-accent), var(--human-accent), transparent)",
            opacity: 0.45,
          }}
        />
      </motion.section>

      {/* ============================================================ */}
      {/*  SECTION 2 — Featured Story                                   */}
      {/* ============================================================ */}

      <motion.section variants={sectionFade} className="pb-16">
        <ArticleCard {...featuredArticle} />
      </motion.section>

      {/* ============================================================ */}
      {/*  SECTION 3 — Latest Articles (asymmetric magazine grid)       */}
      {/* ============================================================ */}

      <motion.section variants={sectionFade} className="pb-20">
        <SectionHeader title="Latest Articles" />

        <motion.div
          variants={gridContainer}
          className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5"
        >
          {latestArticles.map((article, i) => {
            // Build responsive grid-span classes based on position
            const isFeatured = article.featured;
            const gridClass = isFeatured
              ? "md:col-span-8 lg:col-span-6 lg:row-span-2"
              : "md:col-span-4 lg:col-span-3";

            return (
              <div key={article.seed ?? i} className={gridClass}>
                <div className="h-full">
                  <ArticleCard {...article} />
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* ============================================================ */}
      {/*  SECTION 4 — Explore Domains (portrait topic cards)           */}
      {/* ============================================================ */}

      <motion.section variants={sectionFade} className="pb-28">
        <SectionHeader
          title="Explore Domains"
          viewAllHref="/earth"
          viewAllLabel="Start Exploring"
        />

        <motion.div
          variants={gridContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {domainTopics.map((topic, i) => (
            <ArticleCard key={topic.seed ?? i} {...topic} />
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
