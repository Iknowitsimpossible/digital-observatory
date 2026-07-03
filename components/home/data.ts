/**
 * Homepage card data — all content powering the NASA-style magazine layout.
 *
 * Three sections:
 *   1. featuredArticle  — the big hero card at the top
 *   2. latestArticles   — the asymmetric magazine grid
 *   3. domainTopics     — horizontal banner cards for Earth / Sky / Human
 */

import type { CardProps } from "@/components/cards/ArticleCard";

export const featuredArticle: CardProps = {
  variant: "hero",
  title: "The Instruments of Discovery",
  description:
    "How we observe the cosmos — from radio telescopes mapping the invisible universe to spectrographs decoding the chemistry of distant worlds. An introduction to the tools and methods that turn photons into knowledge.",
  categoryLabel: "Featured",
  category: "earth",
  href: "/earth",
  thumbnailType: "constellation",
  accent: "var(--earth-accent)",
  seed: "featured-earth",
  image: "/images/observatory-dome-night-sky.jpg",
};

export const latestArticles: CardProps[] = [
  {
    variant: "standard",
    featured: true,
    title: "The Dawn of Reason",
    description:
      "Mapping the five eras of science — how humanity learned to ask questions about the stars, and why that changed everything.",
    categoryLabel: "Video Script",
    category: "video-script",
    href: "/human/video-scripts/dawn-of-reason",
    thumbnailType: "starfield",
    accent: "var(--nebula)",
    seed: "dawn-of-reason",
    image: "/images/stones-solstice.jpg",
  },
  {
    variant: "standard",
    featured: true,
    title: "The Logic of Scientific Discovery",
    description:
      "Karl Popper's landmark work on what separates science from non-science — how falsifiability, not verification, drives genuine discovery.",
    categoryLabel: "Reading Note",
    category: "reading-note",
    href: "/human/reading-notes/logic-of-scientific-discovery",
    thumbnailType: "nebula",
    accent: "var(--cinnabar)",
    seed: "logic-discovery",
    image: "/images/telescopes-dawn.webp",
  },
  {
    variant: "standard",
    title: "A Brief History of Time",
    categoryLabel: "Reading Note",
    category: "reading-note",
    href: "/human/reading-notes/brief-history-of-time",
    thumbnailType: "nebula",
    accent: "var(--cinnabar)",
    seed: "brief-history",
    image: "/images/hubble-ultra-deep-field.jpg",
  },
  {
    variant: "standard",
    title: "Orion the Hunter",
    categoryLabel: "Constellation",
    category: "sky",
    href: "/sky/orion",
    thumbnailType: "constellation",
    accent: "var(--sky-accent)",
    seed: "orion",
    image: "/images/orion-nebula.webp",
  },
  {
    variant: "standard",
    title: "Astrophysics for People in a Hurry",
    categoryLabel: "Reading Note",
    category: "reading-note",
    href: "/human/reading-notes/astrophysics-for-people-in-a-hurry",
    thumbnailType: "dot-grid",
    accent: "var(--cinnabar)",
    seed: "astrophysics-hurry",
    image: "/images/spiral-galaxy.jpeg",
  },
  {
    variant: "standard",
    title: "East Meets West",
    categoryLabel: "Video Script",
    category: "video-script",
    href: "/human/video-scripts/east-meets-west",
    thumbnailType: "starfield",
    accent: "var(--nebula)",
    seed: "east-west",
    image: "/images/carina-nebula.jpeg",
  },
];

export const domainTopics: CardProps[] = [
  {
    variant: "topic",
    title: "Earth",
    description:
      "The instruments and computations we use to study the cosmos — time-domain surveys, spectroscopy, simulation, and astrobiology.",
    categoryLabel: "Methods & Observation",
    category: "earth",
    href: "/earth",
    thumbnailType: "dot-grid",
    accent: "var(--earth-accent)",
    seed: "domain-earth",
  },
  {
    variant: "topic",
    title: "Sky",
    description:
      "The night sky across cultures — constellations, celestial movements, and traditions that connect us to the stars.",
    categoryLabel: "Cosmos & Constellations",
    category: "sky",
    href: "/sky",
    thumbnailType: "dot-grid",
    accent: "var(--sky-accent)",
    seed: "domain-sky",
  },
  {
    variant: "topic",
    title: "Human",
    description:
      "Texts and reflections that shape how we understand the cosmos — the human record of looking upward.",
    categoryLabel: "Knowledge & Philosophy",
    category: "human",
    href: "/human",
    thumbnailType: "dot-grid",
    accent: "var(--human-accent)",
    seed: "domain-human",
  },
];
