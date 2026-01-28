import Link from "next/link";

export default function Header() {
  return (
    // border-neutral-800 -> border-neutral-200
    <header className="border-b border-neutral-200 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-medium tracking-wide text-neutral-900 hover:text-black transition-colors"
        >
          The Digital Observatory
        </Link>

        <nav className="flex gap-8 text-sm font-medium text-neutral-500">
          <Link href="/earth" className="hover:text-neutral-900 transition-colors">
            Earth
          </Link>
          <Link href="/sky" className="hover:text-neutral-900 transition-colors">
            Sky
          </Link>
          <Link href="/human" className="hover:text-neutral-900 transition-colors">
            Human
          </Link>
        </nav>
      </div>
    </header>
  );
}