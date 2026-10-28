import CategoryTiles from "@/components/CategoryTiles";
import HeroGrid from "@/components/HeroGrid";
import Newsletter from "@/components/Newsletter";
import OurStory from "@/components/OurStory";
import Perks from "@/components/Perks";
import PoemSection from "@/components/PoemSection";
import ProductGrid from "@/components/ProductGrid";
import SectionTitle from "@/components/SectionTitle";
import { getNewArrivals } from "@/data/products";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroGrid />

      <section>
        <SectionTitle title="Kategoriler" />
        <CategoryTiles />
      </section>

      <section>
        <SectionTitle title="Yeni Gelenler" href="/kategori/elbise" />
        <ProductGrid products={getNewArrivals(8)} />
      </section>

      <OurStory />
      <PoemSection />
      <Newsletter />
      <Perks />
    </div>
  );
}
