export default function Footer() {
  return (
    <footer
      className="relative px-8 py-10 text-xs mt-20"
      style={{
        borderTop: "1px solid var(--border-dim)",
        color: "var(--star-dim)",
        zIndex: 1,
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-2">
        <span className="font-medium" style={{ color: "var(--star-white)" }}>
          The Digital Observatory
        </span>
        <span className="opacity-60">
          Observing since {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
