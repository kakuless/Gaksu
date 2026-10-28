import type { CategorySlug } from "@/data/categories";

/**
 * Gerçek ürün fotoğrafları gelene kadar kullanılan geometrik kıyafet çizimleri.
 * Sitenin kare/dikdörtgen diline uygun olarak yalnızca düz çokgenlerden oluşur.
 */
const shapes: Record<CategorySlug, string[]> = {
  elbise: ["38,14 62,14 66,24 60,48 80,108 20,108 40,48 34,24", "40,48 60,48 60,54 40,54"],
  "bluz-gomlek": ["36,20 64,20 84,34 76,50 68,44 68,96 32,96 32,44 24,50 16,34", "46,20 54,20 50,30"],
  pantolon: ["30,14 70,14 76,108 56,108 50,46 44,108 24,108", "30,14 70,14 70,22 30,22"],
  etek: ["34,22 66,22 84,104 16,104", "34,22 66,22 66,30 34,30"],
  "ceket-mont": ["34,14 66,14 86,30 84,108 70,108 70,40 66,108 34,108 30,40 30,108 16,108 14,30", "46,14 54,14 50,58"],
  orgu: ["34,22 66,22 86,36 82,100 70,100 68,46 68,100 32,100 32,46 30,100 18,100 14,36", "44,22 56,22 56,30 44,30"],
};

export default function GarmentArt({
  kind,
  color,
  className = "",
}: {
  kind: CategorySlug;
  color: string;
  className?: string;
}) {
  const [body, detail] = shapes[kind];
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true">
      <polygon points={body} fill={color} stroke="#202020" strokeWidth="0.8" strokeLinejoin="miter" />
      <polygon points={detail} fill="#202020" fillOpacity="0.12" />
    </svg>
  );
}
