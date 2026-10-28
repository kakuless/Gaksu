import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import GarmentArt from "./GarmentArt";

const tones = ["bg-sage", "bg-sand", "bg-white"];

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const discount = product.salePrice
    ? Math.round((1 - product.salePrice / product.price) * 100)
    : 0;

  return (
    <Link href={`/urun/${product.slug}`} className="group block border border-ink bg-white">
      <div className={`relative aspect-square ${tones[index % tones.length]} overflow-hidden`}>
        <GarmentArt
          kind={product.category}
          color={product.colors[0].hex}
          className="absolute inset-0 m-auto h-4/5 w-4/5 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-0 top-0 flex">
          {product.isNew && (
            <span className="bg-moss px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">
              Yeni
            </span>
          )}
          {discount > 0 && (
            <span className="bg-cherry px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
              %{discount}
            </span>
          )}
        </div>
      </div>
      <div className="border-t border-ink p-3">
        <h3 className="truncate text-sm font-medium group-hover:underline">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-sm">
            {product.salePrice ? (
              <>
                <span className="font-semibold text-cherry">{formatPrice(product.salePrice)}</span>{" "}
                <span className="text-xs text-mute line-through">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="font-semibold">{formatPrice(product.price)}</span>
            )}
          </p>
          <div className="flex gap-1">
            {product.colors.map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="h-3 w-3 border border-ink/40"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
