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
      {/* text-neutral-100 -> text-neutral-900 */}
      <h2 className="mb-2 text-xl font-normal tracking-wide text-neutral-900">
        {title}
      </h2>

      {subtitle && (
        <div className="mb-4 text-sm font-medium text-neutral-400 uppercase tracking-wider">
          {subtitle}
        </div>
      )}

      {description && (
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
      )}

      {href && (
        // bg-neutral-800 -> bg-neutral-200
        <div className="mt-4 h-px w-20 bg-neutral-200 transition-all group-hover:w-32 group-hover:bg-neutral-400" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block mb-16 cursor-pointer"
      >
        {content}
      </Link>
    );
  }

  return <section className="mb-16">{content}</section>;
}