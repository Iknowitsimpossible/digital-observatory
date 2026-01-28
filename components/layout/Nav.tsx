import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-8 py-6 flex gap-10 text-xs tracking-widest uppercase">
        <Link href="/" className="text-neutral-400 hover:text-neutral-100">
          Observatory
        </Link>

        <Link href="/earth" className="text-neutral-400 hover:text-neutral-100">
          Earth
        </Link>

        <Link href="/sky" className="text-neutral-400 hover:text-neutral-100">
          Sky
        </Link>

        <Link href="/human" className="text-neutral-400 hover:text-neutral-100">
          Human
        </Link>
      </div>
    </nav>
  );
}
