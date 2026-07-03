/**
 * CardThumbnail — generated SVG/CSS thumbnails for article cards.
 *
 * No external images needed. Four visual types replace photography:
 *  - starfield:     pseudo-random star dots + glow on dark background
 *  - constellation: geometric line network (star-chart aesthetic)
 *  - nebula:        layered radial gradients in purples/blues
 *  - dot-grid:      subtle dot-matrix pattern with accent tint
 *
 * Deterministic: same seed → same thumbnail every render (no layout shift).
 */

export type ThumbnailType = "starfield" | "constellation" | "nebula" | "dot-grid";

type Props = {
  type: ThumbnailType;
  accent: string; // CSS color, e.g. "var(--sky-accent)"
  seed?: string; // deterministic seed so each card looks different
  className?: string;
};

/* ------------------------------------------------------------------ */
/*  Tiny string → number hash (djb2) for deterministic star positions  */
/* ------------------------------------------------------------------ */

function hash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return h >>> 0;
}

function seededXY(seed: string, index: number): [number, number] {
  const h = hash(`${seed}-${index}`);
  return [(h % 1000) / 1000, ((h >> 10) % 1000) / 1000];
}

/* ------------------------------------------------------------------ */
/*  Thumbnail generators                                               */
/* ------------------------------------------------------------------ */

function StarfieldThumb({ accent, seed = "default" }: { accent: string; seed?: string }) {
  const stars = Array.from({ length: 55 }, (_, i) => {
    const [x, y] = seededXY(seed, i);
    const r = i < 8 ? 1.2 + (i % 3) * 0.4 : 0.4 + (i % 5) * 0.15;
    const o = i < 8 ? 0.7 + (i % 3) * 0.1 : 0.2 + (i % 5) * 0.12;
    return { x: x * 100, y: y * 100, r, o, key: i };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`glow-${seed}`}>
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="100" height="100" fill="var(--space-deep)" />
      {/* Ambient glow */}
      <rect width="100" height="100" fill={`url(#glow-${seed})`} />
      {/* Stars */}
      {stars.map((s) => (
        <circle
          key={s.key}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="var(--star-white)"
          opacity={s.o}
        />
      ))}
      {/* 2-3 brighter accent-colored stars */}
      {[0, 3, 6].map((i) => {
        const [x, y] = seededXY(seed, 100 + i);
        return (
          <circle
            key={`accent-${i}`}
            cx={x * 100}
            cy={y * 100}
            r={1.5}
            fill={accent}
            opacity={0.8}
          />
        );
      })}
    </svg>
  );
}

function ConstellationThumb({ accent, seed = "default" }: { accent: string; seed?: string }) {
  // 3 hardcoded constellation patterns, picked by hash parity
  const patternIdx = hash(seed) % 3;

  const patterns: Array<Array<[number, number]>> = [
    // Pattern 0: wide triangle + cross
    [
      [20, 30], [50, 15], [80, 30], [50, 55], [35, 75], [65, 75], [20, 80], [80, 80],
    ],
    // Pattern 1: central hub + ring
    [
      [50, 20], [75, 35], [80, 60], [60, 80], [30, 75], [15, 55], [20, 30], [40, 40],
    ],
    // Pattern 2: ascending zigzag
    [
      [15, 80], [30, 60], [45, 70], [60, 45], [70, 55], [85, 30], [55, 25], [40, 20],
    ],
  ];

  const nodes = patterns[patternIdx];

  // Build connecting lines (connect each node to its 2 nearest neighbors)
  const lines: Array<[number, number, number, number]> = [];
  for (let i = 0; i < nodes.length; i++) {
    const [x1, y1] = nodes[i];
    const dists = nodes
      .map(([x2, y2], j) => ({ j, d: Math.hypot(x2 - x1, y2 - y1) }))
      .filter(({ j }) => j !== i)
      .sort((a, b) => a.d - b.d);
    for (let k = 0; k < 2; k++) {
      const { j } = dists[k];
      if (j === undefined) continue;
      const [x2, y2] = nodes[j];
      // Avoid duplicate lines (only add if i < j)
      if (i < j) lines.push([x1, y1, x2, y2]);
    }
  }

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="var(--space-deep)" />
      {/* Connecting lines */}
      {lines.map(([x1, y1, x2, y2], i) => (
        <line
          key={`line-${i}`}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={accent}
          strokeWidth="0.35"
          strokeOpacity="0.35"
        />
      ))}
      {/* Nodes */}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 0 ? 2.2 : 1.2} fill={accent} opacity={0.7} />
      ))}
    </svg>
  );
}

function NebulaThumb({ accent, seed = "default" }: { accent: string; seed?: string }) {
  const h = hash(seed);
  // 3-4 radial gradients at pseudo-random positions
  const blobs = [
    { x: 30 + (h % 20), y: 35 + ((h >> 4) % 20), r: 50 + ((h >> 8) % 20) },
    { x: 65 + ((h >> 12) % 15), y: 25 + ((h >> 16) % 25), r: 40 + ((h >> 20) % 15) },
    { x: 45 + ((h >> 24) % 25), y: 70, r: 55 + ((h >> 28) % 15) },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: [
          `var(--space-deep)`,
          ...blobs.map(
            (b) =>
              `radial-gradient(circle at ${b.x}% ${b.y}%, ${accent}22, transparent ${b.r}%)`,
          ),
        ].join(", "),
      }}
    />
  );
}

function DotGridThumb({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "var(--space-deep)",
        position: "relative",
      }}
    >
      {/* Dot pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
          opacity: 0.25,
        }}
      />
      {/* Subtle gradient fade at edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, var(--space-deep) 90%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function CardThumbnail({ type, accent, seed, className }: Props) {
  const s = seed ?? type;

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {type === "starfield" && <StarfieldThumb accent={accent} seed={s} />}
      {type === "constellation" && <ConstellationThumb accent={accent} seed={s} />}
      {type === "nebula" && <NebulaThumb accent={accent} seed={s} />}
      {type === "dot-grid" && <DotGridThumb accent={accent} />}
    </div>
  );
}
