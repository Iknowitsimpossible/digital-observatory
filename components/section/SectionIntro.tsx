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
        <div className="mb-6 text-xs tracking-widest uppercase text-neutral-400">
          {eyebrow}
        </div>
      )}

      {/* 这里的 mb-6 是控制标题下方的间距 */}
      {/* 建议改为 mb-10 (40px) 或 mb-12 (48px) */}
      <h1 className="!mb-10 text-4xl font-light tracking-tight text-neutral-900">
        {title}
      </h1>

      <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
        {description}
      </p>

      {/* 如果你想让下面的线离描述文字也远一点，可以改这里的 mt-10 */}
      <div className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
    </section>
  );
}