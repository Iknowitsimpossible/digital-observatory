type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <section className="mb-20">
      {eyebrow && (
        <div className="mb-6 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--star-dim)" }}>
          {eyebrow}
        </div>
      )}

      <h1 className="mb-10 text-4xl font-light tracking-tight" style={{ color: "var(--star-white)" }}>
        {title}
      </h1>

      <p className="max-w-2xl text-base leading-relaxed" style={{ color: "var(--star-dim)" }}>
        {description}
      </p>

      <div
        className="mt-12 h-px"
        style={{
          width: "min(120px, 30vw)",
          background: "linear-gradient(to right, var(--star-dim), transparent)",
          opacity: 0.3,
        }}
      />
    </section>
  );
}
