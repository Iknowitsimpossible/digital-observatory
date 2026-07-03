import Link from "next/link";

type SectionBlockProps = {
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
};

export default function SectionBlock({
  title,
  subtitle,
  description,
  href,
}: SectionBlockProps) {
  const content = (
    <>
      <h2 className="mb-2 text-xl font-normal tracking-wide" style={{ color: "var(--star-white)" }}>
        {title}
      </h2>

      {subtitle && (
        <div className="mb-4 text-sm font-medium uppercase tracking-[0.15em]" style={{ color: "var(--star-dim)" }}>
          {subtitle}
        </div>
      )}

      {description && (
        <p className="max-w-3xl text-sm leading-relaxed" style={{ color: "var(--star-dim)" }}>
          {description}
        </p>
      )}

      {href && (
        <div
          className="mt-4 h-px transition-all group-hover:w-28"
          style={{
            width: "min(60px, 15vw)",
            background: "linear-gradient(to right, var(--star-dim), transparent)",
            opacity: 0.4,
          }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block mb-16 cursor-pointer">
        {content}
      </Link>
    );
  }

  return <section className="mb-16">{content}</section>;
}
