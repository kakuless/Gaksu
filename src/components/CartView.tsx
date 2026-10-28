"use client";

import Link from "next/link";
import type { CategorySlug } from "@/data/categories";
import { useCart, useHydrated } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { ButtonLink } from "./Button";
import GarmentArt from "./GarmentArt";
import { CloseIcon } from "./Icons";
import Logo from "./Logo";
import OrderSummary from "./OrderSummary";
import QuantityInput from "./QuantityInput";

export default function CartView() {
  const { items, setQuantity, remove } = useCart();
  const hydrated = useHydrated();

  if (!hydrated) return <div className="aspect-[3/1] border border-ink bg-sand" />;

  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <ul className="border border-ink bg-white">
        {items.map((item, i) => (
          <li
            key={item.key}
            className={`grid grid-cols-[96px_1fr] gap-4 p-4 sm:grid-cols-[120px_1fr_auto] ${
              i < items.length - 1 ? "border-b border-ink" : ""
            }`}
          >
            <Link href={`/urun/${item.slug}`} className="relative aspect-square border border-ink bg-sand">
              <GarmentArt
                kind={item.category as CategorySlug}
                color={item.colorHex}
                className="absolute inset-0 m-auto h-4/5 w-4/5"
              />
            </Link>
            <div className="flex flex-col justify-between gap-3">
              <div>
                <Link href={`/urun/${item.slug}`} className="font-medium hover:underline">
                  {item.name}
                </Link>
                <p className="mt-1 text-xs uppercase tracking-widest text-mute">
                  {item.color} · Beden {item.size}
                </p>
                <p className="mt-1 text-sm">{formatPrice(item.unitPrice)}</p>
              </div>
              <QuantityInput compact value={item.quantity} onChange={(q) => setQuantity(item.key, q)} />
            </div>
            <div className="col-span-2 flex items-center justify-between sm:col-span-1 sm:flex-col sm:items-end">
              <button
                onClick={() => remove(item.key)}
                aria-label={`${item.name} ürününü sil`}
                className="flex h-9 w-9 items-center justify-center border border-ink hover:bg-moss hover:text-cream"
              >
                <CloseIcon width={16} height={16} />
              </button>
              <p className="font-semibold">{formatPrice(item.unitPrice * item.quantity)}</p>
            </div>
          </li>
        ))}
      </ul>

      <OrderSummary items={items}>
        <ButtonLink href="/odeme" className="w-full">Ödemeye Geç</ButtonLink>
        <Link
          href="/"
          className="mt-3 block text-center text-xs font-semibold uppercase tracking-widest hover:text-sage-deep"
        >
          Alışverişe Devam Et
        </Link>
      </OrderSummary>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="grid border border-ink md:grid-cols-2">
      <div className="flex aspect-square items-center justify-center border-b border-ink bg-sage md:border-b-0 md:border-r">
        <div className="flex h-1/3 w-1/3 items-center justify-center border border-ink bg-cream">
          <Logo className="h-2/3 w-2/3" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 bg-white p-8 md:p-12">
        <h2 className="font-serif text-3xl">Sepetiniz boş</h2>
        <p className="text-sm text-mute">Yeni sezonun favori parçalarını keşfetmeye ne dersiniz?</p>
        <ButtonLink href="/">Alışverişe Başla</ButtonLink>
      </div>
    </div>
  );
}
