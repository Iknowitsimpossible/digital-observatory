"use client";

import Link from "next/link";

type BackLinkProps = {
  href: string;
  label?: string;
};

export default function BackLink({ href, label = "Back" }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition"
    >
      ← {label}
    </Link>
  );
}
