"use client";

import { usePathname } from "next/navigation";
import StaticStarChart from "./StaticStarChart";

/**
 * Thin wrapper that only renders the static star chart background
 * on non-homepage routes.
 *
 * The homepage has its own animated StarField canvas — rendering
 * both would be wasteful. usePathname() lets us gate this cleanly
 * without needing route groups or layout restructuring.
 */
export default function ContentBackground() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return <StaticStarChart />;
}
