/**
 * SectionHeader — NASA-style section title bar.
 *
 * Renders a section title on the left and an optional "View All" link on the right.
 * Used above card grids to label content sections.
 */

import Link from "next/link";

type Props = {
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
};

export default function SectionHeader({ title, viewAllHref, viewAllLabel }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: "1.5rem",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-playfair), serif",
          color: "var(--star-white)",
          fontSize: "1.5rem",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {viewAllHref && (
        <Link
          href={viewAllHref}
          style={{
            fontSize: "0.8rem",
            color: "var(--star-dim)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--star-white)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--star-dim)")}
        >
          {viewAllLabel ?? "View All"} &rarr;
        </Link>
      )}
    </div>
  );
}
