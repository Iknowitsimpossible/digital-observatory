"use client";

import { useEffect, useRef } from "react";

/**
 * Static star chart background — painted once on a full-viewport canvas.
 *
 * Inspired by the Dunhuang Star Map (c. 700 CE) and classical celestial
 * atlases: scattered fixed stars in three brightness tiers, a faint
 * coordinate grid, and a subtle depth gradient.
 *
 * Unlike StarField.tsx (which animates with requestAnimationFrame),
 * this paints exactly once on mount and never touches the canvas again.
 * The result feels like a printed star chart — precise, calm, meditative.
 *
 * Why canvas instead of CSS background-image?
 * The earlier CSS approach (radial-gradient dots on body) was blocked
 * by Tailwind v4's preflight reset. Canvas rendering is more reliable
 * and gives us precise control over star distribution, grid lines,
 * and the gradient — plus it's consistent with the existing StarField
 * component pattern.
 */

interface Star {
  x: number; // 0–1 fraction of viewport width
  y: number; // 0–1 fraction of viewport height
  r: number; // radius in px
  opacity: number; // base opacity
  glow: boolean; // whether to draw a halo
}

// Three tiers: bright, medium, faint
const STAR_CONFIGS = [
  { count: 35, minR: 1.1, maxR: 1.8, minOp: 0.45, maxOp: 0.65, glow: true },
  { count: 70, minR: 0.6, maxR: 1.0, minOp: 0.25, maxOp: 0.45, glow: false },
  { count: 100, minR: 0.3, maxR: 0.6, minOp: 0.12, maxOp: 0.28, glow: false },
];

function generateStars(): Star[] {
  const stars: Star[] = [];
  for (const config of STAR_CONFIGS) {
    for (let i = 0; i < config.count; i++) {
      // Bias stars slightly toward the top-center (like Milky Way overhead)
      // Use a gentler bias so it still looks natural
      const x = Math.random();
      const yBias = 1 - Math.abs(x - 0.5) * 0.6; // center-weighted
      const y = Math.random() * (0.4 + yBias * 0.6); // bias toward top 40-100%

      stars.push({
        x,
        y,
        r: config.minR + Math.random() * (config.maxR - config.minR),
        opacity: config.minOp + Math.random() * (config.maxOp - config.minOp),
        glow: config.glow,
      });
    }
  }
  return stars;
}

export default function StaticStarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>(generateStars());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // ── 1. Gradient depth wash ──────────────────────────
    const gradient = ctx.createRadialGradient(
      width * 0.5, height * 0.25, 0,
      width * 0.5, height * 0.5, Math.max(width, height) * 0.9
    );
    gradient.addColorStop(0, "rgba(25, 32, 56, 0.5)");
    gradient.addColorStop(0.5, "rgba(10, 14, 26, 0.2)");
    gradient.addColorStop(1, "rgba(6, 8, 18, 0.6)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // ── 2. Celestial grid lines ─────────────────────────
    const gridAlpha = 0.03;
    ctx.strokeStyle = `rgba(180, 200, 230, ${gridAlpha})`;
    ctx.lineWidth = 0.5;

    // Horizontal "celestial equator" — at ~55% height
    const eqY = height * 0.55;
    ctx.beginPath();
    ctx.moveTo(0, eqY);
    ctx.lineTo(width, eqY);
    ctx.stroke();

    // Concentric arcs (like declination circles on a planisphere)
    // Center point: above the top of the screen
    const arcCenterX = width * 0.5;
    const arcCenterY = -height * 0.15;
    const arcRadii = [height * 0.55, height * 0.72, height * 0.92];

    ctx.lineWidth = 0.3;
    for (const r of arcRadii) {
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // ── 3. Static stars ─────────────────────────────────
    const stars = starsRef.current;

    for (const star of stars) {
      const px = star.x * width;
      const py = star.y * height;

      // Glow halo for bright stars
      if (star.glow) {
        ctx.beginPath();
        ctx.arc(px, py, star.r * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 210, 230, ${(star.opacity * 0.1).toFixed(3)})`;
        ctx.fill();
      }

      // Star core
      ctx.beginPath();
      ctx.arc(px, py, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232, 230, 227, ${star.opacity.toFixed(2)})`;
      ctx.fill();
    }

    // Handle resize — repaint if viewport changes
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (Math.abs(w - width) > 50 || Math.abs(h - height) > 50) {
        // Regenerate and repaint — regenerating keeps the stars at
        // the same relative positions (since we use 0-1 coords),
        // but repainting at the new size avoids stretching
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const grad = ctx.createRadialGradient(
          w * 0.5, h * 0.25, 0,
          w * 0.5, h * 0.5, Math.max(w, h) * 0.9
        );
        grad.addColorStop(0, "rgba(25, 32, 56, 0.5)");
        grad.addColorStop(0.5, "rgba(10, 14, 26, 0.2)");
        grad.addColorStop(1, "rgba(6, 8, 18, 0.6)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        const eqY2 = h * 0.55;
        ctx.strokeStyle = `rgba(180, 200, 230, 0.03)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, eqY2);
        ctx.lineTo(w, eqY2);
        ctx.stroke();

        ctx.lineWidth = 0.3;
        const arcCenterY2 = -h * 0.15;
        for (const r2 of [h * 0.55, h * 0.72, h * 0.92]) {
          ctx.beginPath();
          ctx.arc(w * 0.5, arcCenterY2, r2, 0, Math.PI * 2);
          ctx.stroke();
        }

        for (const s of stars) {
          const px2 = s.x * w;
          const py2 = s.y * h;
          if (s.glow) {
            ctx.beginPath();
            ctx.arc(px2, py2, s.r * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 210, 230, ${(s.opacity * 0.1).toFixed(3)})`;
            ctx.fill();
          }
          ctx.beginPath();
          ctx.arc(px2, py2, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(232, 230, 227, ${s.opacity.toFixed(2)})`;
          ctx.fill();
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
