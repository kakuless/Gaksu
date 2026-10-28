import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import ProductGrid from "@/components/ProductGrid";
import SectionTitle from "@/components/SectionTitle";
import { getCategoryBySlug } from "@/data/categories";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);
  return { title: product?.name ?? "Ürün", description: product?.description };
}

export default async function ProductPage({ params }: { params: Params }) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();
  const category = getCategoryBySlug(product.category)!;

  return (
    <div className="space-y-16">
      <div>
        <nav className="mb-4 text-xs uppercase tracking-widest text-mute" aria-label="Sayfa yolu">
          <Link href="/" className="hover:text-ink">Ana Sayfa</Link> /{" "}
          <Link href={`/kategori/${category.slug}`} className="hover:text-ink">{category.name}</Link> /{" "}
          <span className="text-ink">{product.name}</span>
        </nav>
        <ProductDetail product={product} />
      </div>

      <section>
        <SectionTitle title="Benzer Ürünler" href={`/kategori/${category.slug}`} />
        <ProductGrid products={getRelatedProducts(product)} />
      </section>
    </div>
  );
}
