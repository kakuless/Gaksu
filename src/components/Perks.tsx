import { BoltIcon, LockIcon, ReturnIcon, TruckIcon } from "./Icons";

const perks = [
  { icon: TruckIcon, title: "Ücretsiz Kargo", text: "500 TL ve üzeri siparişlerde" },
  { icon: ReturnIcon, title: "14 Gün İade", text: "Koşulsuz ve ücretsiz iade" },
  { icon: LockIcon, title: "Güvenli Ödeme", text: "256-bit SSL korumalı" },
  { icon: BoltIcon, title: "Hızlı Teslimat", text: "1-3 iş gününde kapında" },
];

export default function Perks() {
  return (
    <section className="grid grid-cols-2 border-l border-t border-ink lg:grid-cols-4">
      {perks.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex aspect-square flex-col items-center justify-center gap-3 border-b border-r border-ink bg-cream p-4 text-center sm:aspect-[4/3]">
          <span className="flex h-12 w-12 items-center justify-center border border-ink bg-white">
            <Icon />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">{title}</p>
          <p className="text-xs text-mute">{text}</p>
        </div>
      ))}
    </section>
  );
}
