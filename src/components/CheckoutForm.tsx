"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useCart, useHydrated } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { Button } from "./Button";
import OrderSummary from "./OrderSummary";

const field =
  "w-full border border-ink bg-white px-4 py-3 text-sm outline-none focus:bg-cream placeholder:text-mute/70";

export default function CheckoutForm() {
  const router = useRouter();
  const { items, clear } = useCart();
  const hydrated = useHydrated();
  const submitted = useRef(false);

  useEffect(() => {
    if (hydrated && items.length === 0 && !submitted.current) router.replace("/sepet");
  }, [hydrated, items.length, router]);

  if (!hydrated || items.length === 0) {
    return <div className="aspect-[3/1] border border-ink bg-sand" />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitted.current = true;
    const orderNo = `GK${Date.now().toString().slice(-8)}`;
    router.push(`/siparis-tamam?no=${orderNo}`);
    clear();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-8">
        <Fieldset step="1" title="İletişim">
          <input className={field} type="email" name="email" placeholder="E-posta" required autoComplete="email" />
          <input className={field} type="tel" name="phone" placeholder="Telefon (05xx xxx xx xx)" required autoComplete="tel" />
        </Fieldset>

        <Fieldset step="2" title="Teslimat Adresi">
          <div className="grid gap-3 sm:grid-cols-2">
            <input className={field} name="firstName" placeholder="Ad" required autoComplete="given-name" />
            <input className={field} name="lastName" placeholder="Soyad" required autoComplete="family-name" />
          </div>
          <textarea className={`${field} min-h-24`} name="address" placeholder="Adres" required autoComplete="street-address" />
          <div className="grid gap-3 sm:grid-cols-3">
            <input className={field} name="city" placeholder="İl" required />
            <input className={field} name="district" placeholder="İlçe" required />
            <input className={field} name="zip" placeholder="Posta Kodu" inputMode="numeric" />
          </div>
        </Fieldset>

        <Fieldset step="3" title="Ödeme">
          <p className="border border-ink bg-sage px-4 py-3 text-xs">
            Bu bir demo mağazadır — kart bilgileri gönderilmez ve ödeme alınmaz.
          </p>
          <input className={field} name="cardName" placeholder="Kart Üzerindeki İsim" required />
          <input className={field} name="cardNumber" placeholder="Kart Numarası" inputMode="numeric" pattern="[0-9 ]{12,19}" required />
          <div className="grid grid-cols-2 gap-3">
            <input className={field} name="exp" placeholder="AA/YY" pattern="\d{2}/\d{2}" required />
            <input className={field} name="cvc" placeholder="CVC" inputMode="numeric" pattern="\d{3,4}" required />
          </div>
        </Fieldset>
      </div>

      <div className="space-y-4">
        <OrderSummary items={items}>
          <ul className="mb-5 space-y-2 text-sm">
            {items.map((i) => (
              <li key={i.key} className="flex justify-between gap-3">
                <span className="truncate">
                  {i.quantity}× {i.name} <span className="text-mute">({i.size})</span>
                </span>
                <span>{formatPrice(i.unitPrice * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <Button type="submit" className="w-full">Siparişi Tamamla</Button>
        </OrderSummary>
      </div>
    </form>
  );
}

function Fieldset({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border border-ink bg-white">
      <legend className="sr-only">{title}</legend>
      <div className="flex items-center gap-4 border-b border-ink">
        <span className="flex h-12 w-12 items-center justify-center border-r border-ink bg-moss font-serif text-lg text-cream">
          {step}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">{title}</span>
      </div>
      <div className="space-y-3 p-5">{children}</div>
    </fieldset>
  );
}
