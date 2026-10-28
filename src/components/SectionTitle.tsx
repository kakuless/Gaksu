import Link from "next/link";

export default function SectionTitle({
  title,
  href,
  linkLabel = "Tümünü Gör",
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between border-b border-ink pb-3">
      <h2 className="font-serif text-2xl uppercase tracking-wider md:text-3xl">
        {title}
      </h2>
      {href && (
        <Link href={href} className="text-xs font-semibold uppercase tracking-[0.2em] hover:text-sage-deep">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
