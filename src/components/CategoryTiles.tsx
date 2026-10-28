import Link from "next/link";
import { categories } from "@/data/categories";
import GarmentArt from "./GarmentArt";

const artColors = ["#efe4d4", "#b7c3a8", "#202020", "#7f9270", "#d4bfa3", "#fbfaf7"];

export default function CategoryTiles() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {categories.map((c, i) => (
        <Link key={c.slug} href={`/kategori/${c.slug}`} className="group block border border-ink">
          <div className={`relative aspect-square overflow-hidden ${c.tone}`}>
            <GarmentArt
              kind={c.slug}
              color={artColors[i]}
              className="absolute inset-0 m-auto h-3/4 w-3/4 transition-transform duration-500 group-hover:-translate-y-2"
            />
          </div>
          <div className="flex items-center justify-between border-t border-ink bg-cream px-4 py-3 transition-colors group-hover:bg-moss group-hover:text-cream">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest">{c.name}</p>
              <p className="hidden text-xs opacity-70 sm:block">{c.tagline}</p>
            </div>
            <span aria-hidden>→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
