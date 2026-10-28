import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="grid border border-ink md:grid-cols-3">
      <div className="flex aspect-square items-center justify-center border-b border-ink bg-sage font-serif text-7xl md:border-b-0 md:border-r">
        4
      </div>
      <div className="flex aspect-square items-center justify-center border-b border-ink bg-moss font-serif text-7xl text-cream md:border-b-0 md:border-r">
        0
      </div>
      <div className="flex aspect-square flex-col items-center justify-center gap-4 bg-sand p-6 text-center">
        <span className="font-serif text-7xl">4</span>
        <p className="text-sm">Aradığınız sayfa bulunamadı.</p>
        <ButtonLink href="/">Ana Sayfaya Dön</ButtonLink>
      </div>
    </div>
  );
}
