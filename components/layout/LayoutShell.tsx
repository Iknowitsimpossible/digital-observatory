import Header from "./Header";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // bg-neutral-950 -> bg-neutral-50 (浅色背景)
    // text-neutral-200 -> text-neutral-900 (深色文字)
    <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-16">
        {children}
      </main>
    </div>
  );
}