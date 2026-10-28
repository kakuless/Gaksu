import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryBrowser from "@/components/CategoryBrowser";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const category = getCategoryBySlug((await params).slug);
  return { title: category?.name ?? "Kategori" };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const category = getCategoryBySlug((await params).slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <div>
      <nav className="mb-4 text-xs uppercase tracking-widest text-mute" aria-label="Sayfa yolu">
        <Link href="/" className="hover:text-ink">Ana Sayfa</Link> / <span className="text-ink">{category.name}</span>
      </nav>
      <header className={`mb-8 flex flex-col justify-end border border-ink p-8 md:h-48 ${category.tone}`}>
        <h1 className="font-serif text-4xl uppercase md:text-5xl">{category.name}</h1>
        <p className="mt-2 text-sm">{category.tagline}</p>
      </header>
      <CategoryBrowser products={products} />
    </div>
  );
}
