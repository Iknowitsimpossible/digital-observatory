import Link from "next/link";

const navLinks = [
  { label: "Earth", href: "/earth" },
  { label: "Sky", href: "/sky" },
  { label: "Human", href: "/human" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-20 border-b"
      style={{
        background: "rgba(10, 14, 26, 0.65)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "var(--border-dim)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.1em] uppercase opacity-80 hover:opacity-100 transition-opacity"
          style={{
            fontFamily: "var(--font-playfair), serif",
            color: "var(--star-white)",
          }}
        >
          The Digital Observatory
        </Link>

        <nav
          className="flex gap-8 text-xs tracking-[0.18em] uppercase"
          style={{ color: "var(--star-dim)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:opacity-80"
              style={{ color: "inherit" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
