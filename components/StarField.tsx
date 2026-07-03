"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;        // radius
  opacity: number;  // base opacity
  phase: number;    // twinkle phase offset (0–2PI)
  speed: number;    // twinkle speed multiplier
  layer: number;    // 0=slow parallax, 1=medium, 2=fast
}

const STAR_COUNT = 300;
const LAYERS = [
  { driftX: 0.15, driftY: 0.05, count: 100 },  // distant — slow
  { driftX: 0.35, driftY: 0.12, count: 120 },  // mid
  { driftX: 0.60, driftY: 0.22, count: 80 },   // near — faster
];

function createStars(): Star[] {
  const stars: Star[] = [];
  for (const layer of LAYERS) {
    for (let i = 0; i < layer.count; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.4 + 0.3,
        layer: LAYERS.indexOf(layer),
      });
    }
  }
  return stars;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>(createStars());
  const rafRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      dimensionsRef.current = { width, height };
    };

    resize();
    window.addEventListener("resize", resize);

    const stars = starsRef.current;
    let elapsed = 0;

    const draw = (timestamp: number) => {
      const dt = Math.min(timestamp - (draw.lastTs ?? timestamp), 50) / 1000;
      draw.lastTs = timestamp;
      elapsed += dt;

      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        // Twinkle: smooth opacity oscillation
        const twinkle =
          Math.sin(elapsed * star.speed * 1.5 + star.phase) * 0.25;
        const alpha = Math.max(0.05, star.opacity + twinkle);

        // Parallax drift — wrap around screen edges
        const drift = LAYERS[star.layer];
        const dx = (elapsed * drift.driftX) % 1;
        const dy = (elapsed * drift.driftY) % 1;
        let sx = (star.x + dx) % 1;
        let sy = (star.y + dy) % 1;
        if (sx < 0) sx += 1;
        if (sy < 0) sy += 1;

        const px = sx * width;
        const py = sy * height;

        // Draw star with subtle glow
        ctx.beginPath();
        ctx.arc(px, py, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 230, 227, ${alpha.toFixed(2)})`;
        ctx.fill();

        // Larger stars get a faint glow halo
        if (star.r > 1.2) {
          ctx.beginPath();
          ctx.arc(px, py, star.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(232, 230, 227, ${(alpha * 0.12).toFixed(3)})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw.lastTs = 0;

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
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
