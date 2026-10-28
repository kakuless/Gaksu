"use client";

import Link from "next/link";
import { useState } from "react";
import { ALL_SIZES, effectivePrice, type Product, type Size } from "@/data/products";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { Button } from "./Button";
import GarmentArt from "./GarmentArt";
import QuantityInput from "./QuantityInput";

const views = ["bg-sage", "bg-sand", "bg-white", "bg-cream"];

export default function ProductDetail({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState(0);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      category: product.category,
      unitPrice: effectivePrice(product),
      size,
      color: color.name,
      colorHex: color.hex,
      quantity,
    });
    setAdded(true);
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      {/* Galeri: büyük kare + küçük kare thumbnail'lar */}
      <div className="grid min-w-0 grid-cols-[64px_minmax(0,1fr)] items-start gap-3 sm:grid-cols-[80px_minmax(0,1fr)]">
        <div className="flex flex-col gap-3">
          {views.map((tone, i) => (
            <button
              key={tone}
              onClick={() => setView(i)}
              aria-label={`Görsel ${i + 1}`}
              className={`relative aspect-square border ${tone} ${
                view === i ? "border-ink border-2" : "border-ink/30"
              }`}
            >
              <GarmentArt kind={product.category} color={color.hex} className="absolute inset-0 m-auto h-3/4 w-3/4" />
            </button>
          ))}
        </div>
        <div className={`relative aspect-square border border-ink ${views[view]}`}>
          <GarmentArt
            kind={product.category}
            color={color.hex}
            className={`absolute inset-0 m-auto h-4/5 w-4/5 transition-transform ${view % 2 ? "scale-x-[-1]" : ""}`}
          />
        </div>
      </div>

      {/* Bilgi paneli */}
      <div className="border border-ink bg-white">
        <div className="border-b border-ink p-6">
          {product.isNew && (
            <span className="mb-3 inline-block bg-moss px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">
              Yeni Sezon
            </span>
          )}
          <h1 className="font-serif text-3xl md:text-4xl">{product.name}</h1>
          <p className="mt-3 text-xl">
            {product.salePrice ? (
              <>
                <span className="font-semibold text-cherry">{formatPrice(product.salePrice)}</span>{" "}
                <span className="text-base text-mute line-through">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="font-semibold">{formatPrice(product.price)}</span>
            )}
          </p>
        </div>

        <div className="space-y-6 border-b border-ink p-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Renk: <span className="font-normal">{color.name}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  title={c.name}
                  aria-label={c.name}
                  aria-pressed={c.name === color.name}
                  onClick={() => setColor(c)}
                  className={`h-10 w-10 border ${
                    c.name === color.name ? "border-ink outline-2 outline-offset-2 outline-ink" : "border-ink/30"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Beden</p>
              <span className="text-xs underline">Beden Rehberi</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {ALL_SIZES.map((s) => {
                const available = product.sizes.includes(s);
                return (
                  <button
                    key={s}
                    disabled={!available}
                    onClick={() => {
                      setSize(s);
                      setError(false);
                    }}
                    aria-pressed={size === s}
                    className={`aspect-square border text-sm font-semibold transition-colors ${
                      size === s
                        ? "border-moss bg-moss text-cream"
                        : available
                          ? "border-ink bg-white hover:bg-sage"
                          : "border-ink/20 text-ink/30 line-through"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            {error && <p className="mt-2 text-xs font-semibold text-sage-deep">Lütfen bir beden seçin.</p>}
          </div>

          <div className="flex flex-wrap items-stretch gap-3">
            <QuantityInput value={quantity} onChange={setQuantity} />
            <Button onClick={handleAdd} className="flex-1">
              Sepete Ekle
            </Button>
          </div>

          {added && (
            <div className="flex items-center justify-between border border-ink bg-sage px-4 py-3 text-sm">
              <span>Ürün sepetinize eklendi.</span>
              <Link href="/sepet" className="font-semibold uppercase tracking-widest underline">
                Sepete Git
              </Link>
            </div>
          )}
        </div>

        <Accordion title="Ürün Açıklaması" defaultOpen>
          {product.description}
        </Accordion>
        <Accordion title="Kumaş">{product.fabric}</Accordion>
        <Accordion title="Bakım" last>
          {product.care}
        </Accordion>
      </div>
    </div>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  last?: boolean;
}) {
  return (
    <details open={defaultOpen} className={`group ${last ? "" : "border-b border-ink"}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-xs font-semibold uppercase tracking-[0.2em]">
        {title}
        <span className="text-lg leading-none transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="px-6 pb-6 text-sm leading-relaxed text-mute">{children}</p>
    </details>
  );
}
