"use client";

import DomainCircle from "./DomainCircle";
import type { DomainTopic } from "./DomainCircle";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface DomainTriangleProps {
  domains: DomainTopic[];
}

/* ================================================================== */
/*  DOMAIN TRIANGLE                                                     */
/* ================================================================== */

export default function DomainTriangle({ domains }: DomainTriangleProps) {
  // Safety: need exactly 3 domains for the triangle layout
  if (domains.length !== 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {domains.map((d, i) => (
          <DomainCircle key={d.seed ?? i} {...d} index={i} />
        ))}
      </div>
    );
  }

  const [earth, sky, human] = domains;

  return (
    <div className="relative h-[520px] sm:h-[500px] md:h-[560px]">
      {/* Desktop: absolute-positioned triangle */}
      <div className="hidden sm:block">
        {/* Sky — top center */}
        <div
          className="absolute z-10"
          style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }}
        >
          <DomainCircle {...sky} index={1} />
        </div>

        {/* Earth — bottom left */}
        <div
          className="absolute z-10"
          style={{ bottom: "4%", left: "6%" }}
        >
          <DomainCircle {...earth} index={0} />
        </div>

        {/* Human — bottom right */}
        <div
          className="absolute z-10"
          style={{ bottom: "4%", right: "6%" }}
        >
          <DomainCircle {...human} index={2} />
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col items-center gap-6 sm:hidden">
        <DomainCircle {...sky} index={0} />
        <DomainCircle {...earth} index={1} />
        <DomainCircle {...human} index={2} />
      </div>
    </div>
  );
}
