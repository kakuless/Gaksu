"use client";

import { useMemo, useState } from "react";
import { ALL_SIZES, effectivePrice, type Product, type Size } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Button } from "./Button";
import { CloseIcon } from "./Icons";
import ProductGrid from "./ProductGrid";

type Sort = "onerilen" | "yeni" | "artan" | "azalan";

const sortLabels: Record<Sort, string> = {
  onerilen: "Önerilen",
  yeni: "En Yeniler",
  artan: "Fiyat: Artan",
  azalan: "Fiyat: Azalan",
};

export default function CategoryBrowser({ products }: { products: Product[] }) {
  const priceCeiling = Math.max(...products.map(effectivePrice));
  const colorOptions = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => p.colors.forEach((c) => map.set(c.name, c.hex)));
    return [...map].map(([name, hex]) => ({ name, hex }));
  }, [products]);

  const [sizes, setSizes] = useState<Size[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(priceCeiling);
  const [onlySale, setOnlySale] = useState(false);
  const [sort, setSort] = useState<Sort>("onerilen");
  const [drawer, setDrawer] = useState(false);

  const visible = useMemo(() => {
    const list = products.filter(
      (p) =>
        (sizes.length === 0 || p.sizes.some((s) => sizes.includes(s))) &&
        (colors.length === 0 || p.colors.some((c) => colors.includes(c.name))) &&
        effectivePrice(p) <= maxPrice &&
        (!onlySale || p.salePrice !== undefined),
    );
    if (sort === "yeni") return [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    if (sort === "artan") return [...list].sort((a, b) => effectivePrice(a) - effectivePrice(b));
    if (sort === "azalan") return [...list].sort((a, b) => effectivePrice(b) - effectivePrice(a));
    return list;
  }, [products, sizes, colors, maxPrice, onlySale, sort]);

  const toggle = <T,>(list: T[], value: T) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const reset = () => {
    setSizes([]);
    setColors([]);
    setMaxPrice(priceCeiling);
    setOnlySale(false);
  };

  const filters = (
    <div className="space-y-8">
      <FilterGroup title="Beden">
        <div className="grid grid-cols-5 gap-1">
          {ALL_SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSizes(toggle(sizes, s))}
              aria-pressed={sizes.includes(s)}
              className={`aspect-square border border-ink text-xs font-semibold ${
                sizes.includes(s) ? "bg-moss text-cream" : "bg-white hover:bg-sage"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Renk">
        <div className="grid grid-cols-6 gap-1">
          {colorOptions.map((c) => (
            <button
              key={c.name}
              title={c.name}
              aria-label={c.name}
              aria-pressed={colors.includes(c.name)}
              onClick={() => setColors(toggle(colors, c.name))}
              className={`aspect-square border ${
                colors.includes(c.name) ? "border-ink outline-2 outline-offset-1 outline-ink" : "border-ink/30"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Fiyat">
        <input
          type="range"
          min={0}
          max={priceCeiling}
          step={50}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-ink"
          aria-label="En yüksek fiyat"
        />
        <p className="mt-1 text-xs">En fazla {formatPrice(maxPrice)}</p>
      </FilterGroup>

      <label className="flex cursor-pointer items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={onlySale}
          onChange={(e) => setOnlySale(e.target.checked)}
          className="h-4 w-4 accent-ink"
        />
        Sadece indirimdekiler
      </label>

      <Button variant="outline" onClick={reset} className="w-full">
        Filtreleri Temizle
      </Button>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside className="hidden border border-ink bg-white p-5 lg:block lg:self-start">{filters}</aside>

      {drawer && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex-1 bg-ink/40" onClick={() => setDrawer(false)} />
          <div className="w-80 max-w-[85%] overflow-y-auto border-l border-ink bg-cream p-5">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-widest">Filtrele</p>
              <button onClick={() => setDrawer(false)} aria-label="Kapat">
                <CloseIcon />
              </button>
            </div>
            {filters}
          </div>
        </div>
      )}

      <div>
        <div className="mb-4 flex items-center justify-between gap-3 border border-ink bg-white px-4 py-2">
          <button
            onClick={() => setDrawer(true)}
            className="text-xs font-semibold uppercase tracking-widest lg:hidden"
          >
            Filtrele
          </button>
          <p className="hidden text-xs uppercase tracking-widest text-mute lg:block">
            {visible.length} ürün
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="border-0 bg-transparent text-xs font-semibold uppercase tracking-widest outline-none"
            aria-label="Sırala"
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {visible.length > 0 ? (
          <ProductGrid products={visible} columns="grid-cols-2 md:grid-cols-3" />
        ) : (
          <div className="flex aspect-[2/1] flex-col items-center justify-center gap-4 border border-ink bg-sand p-8 text-center">
            <p className="font-serif text-2xl">Bu filtrelere uygun ürün yok.</p>
            <Button variant="outline" onClick={reset}>Filtreleri Temizle</Button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 border-b border-ink pb-2 text-xs font-semibold uppercase tracking-[0.2em]">
        {title}
      </p>
      {children}
    </div>
  );
}
