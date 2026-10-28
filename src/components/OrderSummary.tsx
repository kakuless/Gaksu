"use client";

import { cartSubtotal, type CartItem } from "@/lib/cart";
import { FREE_SHIPPING_THRESHOLD, formatPrice, shippingFor } from "@/lib/format";

export default function OrderSummary({
  items,
  children,
}: {
  items: CartItem[];
  children?: React.ReactNode;
}) {
  const subtotal = cartSubtotal(items);
  const shipping = shippingFor(subtotal);
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <div className="border border-ink bg-white lg:sticky lg:top-24">
      <h2 className="border-b border-ink bg-sage p-5 text-xs font-semibold uppercase tracking-[0.25em]">
        Sipariş Özeti
      </h2>
      <dl className="space-y-3 border-b border-ink p-5 text-sm">
        <Row label="Ara Toplam" value={formatPrice(subtotal)} />
        <Row label="Kargo" value={shipping === 0 ? "Ücretsiz" : formatPrice(shipping)} />
        {remaining > 0 && (
          <p className="bg-sand p-3 text-xs">
            Ücretsiz kargo için <strong>{formatPrice(remaining)}</strong> daha ekleyin.
          </p>
        )}
      </dl>
      <div className="flex items-center justify-between p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">Toplam</span>
        <span className="font-serif text-2xl">{formatPrice(subtotal + shipping)}</span>
      </div>
      {children && <div className="border-t border-ink p-5">{children}</div>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-mute">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
