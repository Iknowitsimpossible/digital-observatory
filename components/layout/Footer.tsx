export default function Footer() {
  return (
    <footer className="px-8 py-12 text-xs text-neutral-400 border-t border-neutral-100 mt-20">
      <div className="max-w-5xl mx-auto flex justify-between">
        <span className="font-medium">The Digital Observatory</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}