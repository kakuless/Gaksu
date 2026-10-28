import { FREE_SHIPPING_THRESHOLD, formatPrice } from "@/lib/format";

export default function AnnouncementBar() {
  return (
    <div className="bg-moss px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-cream">
      <span>{formatPrice(FREE_SHIPPING_THRESHOLD)} üzeri ücretsiz kargo · 14 gün koşulsuz iade</span>
    </div>
  );
}
