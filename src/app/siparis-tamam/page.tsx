import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = { title: "Sipariş Alındı" };

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ no?: string }>;
}) {
  const { no } = await searchParams;

  return (
    <div className="grid border border-ink md:grid-cols-2">
      <div className="grid aspect-square grid-cols-2 grid-rows-2 border-b border-ink md:border-b-0 md:border-r">
        <div className="border-b border-r border-ink bg-sage" />
        <div className="border-b border-ink bg-sand" />
        <div className="border-r border-ink bg-moss" />
        <div className="flex items-center justify-center bg-cream font-serif text-6xl">✓</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 bg-white p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-deep">Teşekkürler</p>
        <h1 className="font-serif text-4xl">Siparişiniz alındı</h1>
        {no && (
          <p className="border border-ink px-4 py-2 text-sm">
            Sipariş No: <strong>{no}</strong>
          </p>
        )}
        <p className="text-sm text-mute">
          Sipariş detayları e-posta adresinize gönderilecek. Kargonuz 1-3 iş günü içinde yola çıkar.
        </p>
        <ButtonLink href="/">Alışverişe Devam Et</ButtonLink>
      </div>
    </div>
  );
}
