import type { CategorySlug } from "./categories";

export type Size = "XS" | "S" | "M" | "L" | "XL";
export const ALL_SIZES: Size[] = ["XS", "S", "M", "L", "XL"];

export type Color = { name: string; hex: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  salePrice?: number;
  colors: Color[];
  sizes: Size[];
  isNew: boolean;
  description: string;
  fabric: string;
  care: string;
};

const C = {
  siyah: { name: "Siyah", hex: "#1a1a1a" },
  krem: { name: "Krem", hex: "#efe4d4" },
  pudra: { name: "Pudra", hex: "#e3b5b5" },
  gul: { name: "Gül Kurusu", hex: "#b77b7b" },
  bej: { name: "Bej", hex: "#d4bfa3" },
  beyaz: { name: "Beyaz", hex: "#fbfaf7" },
  bordo: { name: "Bordo", hex: "#6e2633" },
  lacivert: { name: "Lacivert", hex: "#25304a" },
  haki: { name: "Haki", hex: "#7b7a5a" },
  camel: { name: "Camel", hex: "#b08457" },
  gri: { name: "Gri", hex: "#9c9a97" },
} satisfies Record<string, Color>;

type Seed = Omit<Product, "id" | "slug" | "fabric" | "care"> &
  Partial<Pick<Product, "fabric" | "care">>;

const seeds: Seed[] = [
  // Elbise
  { name: "Kruvaze Midi Elbise", category: "elbise", price: 1299, colors: [C.pudra, C.siyah, C.krem], sizes: ["XS", "S", "M", "L"], isNew: true, description: "Kruvaze yaka detaylı, belden bağlamalı akışkan midi elbise." },
  { name: "Saten Askılı Elbise", category: "elbise", price: 1499, salePrice: 1049, colors: [C.gul, C.siyah], sizes: ["XS", "S", "M"], isNew: false, description: "Parlak saten dokulu, ayarlanabilir askılı maksi elbise." },
  { name: "Gömlek Elbise", category: "elbise", price: 1199, colors: [C.beyaz, C.bej], sizes: ["S", "M", "L", "XL"], isNew: true, description: "Düğmeli, kemerli, günlük kullanıma uygun gömlek elbise." },
  { name: "Örme Kalem Elbise", category: "elbise", price: 999, colors: [C.siyah, C.bordo], sizes: ["XS", "S", "M", "L"], isNew: false, description: "Vücuda oturan, esnek örme kumaştan kalem elbise." },
  // Bluz & Gömlek
  { name: "Oversize Poplin Gömlek", category: "bluz-gomlek", price: 749, colors: [C.beyaz, C.pudra, C.lacivert], sizes: ["XS", "S", "M", "L", "XL"], isNew: true, description: "Düşük omuzlu, ferah kesim pamuklu poplin gömlek." },
  { name: "Fırfırlı Yaka Bluz", category: "bluz-gomlek", price: 649, salePrice: 449, colors: [C.krem, C.siyah], sizes: ["S", "M", "L"], isNew: false, description: "Yakası fırfır detaylı, romantik şifon bluz." },
  { name: "Saten Gömlek", category: "bluz-gomlek", price: 849, colors: [C.gul, C.krem, C.siyah], sizes: ["XS", "S", "M", "L"], isNew: true, description: "Akışkan saten kumaş, gizli patlı şık gömlek." },
  { name: "Balon Kol Bluz", category: "bluz-gomlek", price: 599, colors: [C.beyaz, C.pudra], sizes: ["S", "M", "L", "XL"], isNew: false, description: "Hacimli balon kollu, kare yakalı bluz." },
  // Pantolon
  { name: "Yüksek Bel Palazzo", category: "pantolon", price: 899, colors: [C.bej, C.siyah, C.krem], sizes: ["XS", "S", "M", "L", "XL"], isNew: true, description: "Geniş paçalı, yüksek bel, pileli palazzo pantolon." },
  { name: "Kumaş Havuç Pantolon", category: "pantolon", price: 799, salePrice: 559, colors: [C.lacivert, C.gri], sizes: ["S", "M", "L"], isNew: false, description: "Pens detaylı, bilekte daralan ofis pantolonu." },
  { name: "Wide Leg Jean", category: "pantolon", price: 999, colors: [C.lacivert, C.beyaz], sizes: ["XS", "S", "M", "L", "XL"], isNew: true, description: "Yüksek bel, bol paça, %100 pamuk denim." },
  { name: "Keten Bağcıklı Pantolon", category: "pantolon", price: 699, colors: [C.krem, C.haki], sizes: ["S", "M", "L", "XL"], isNew: false, description: "Beli lastikli ve bağcıklı, nefes alan keten pantolon." },
  // Etek
  { name: "Pliseli Midi Etek", category: "etek", price: 749, colors: [C.pudra, C.siyah, C.camel], sizes: ["XS", "S", "M", "L"], isNew: true, description: "Hareketli plise dokulu, beli lastikli midi etek." },
  { name: "Saten Maksi Etek", category: "etek", price: 849, salePrice: 599, colors: [C.krem, C.gul], sizes: ["S", "M", "L"], isNew: false, description: "Verev kesim, ışıltılı saten maksi etek." },
  { name: "Deri Görünümlü Mini Etek", category: "etek", price: 699, colors: [C.siyah, C.bordo], sizes: ["XS", "S", "M"], isNew: true, description: "A kesim, deri görünümlü, arkadan fermuarlı mini etek." },
  { name: "Denim Midi Etek", category: "etek", price: 799, colors: [C.lacivert], sizes: ["S", "M", "L", "XL"], isNew: false, description: "Önden yırtmaçlı, beş cepli denim midi etek." },
  // Ceket & Mont
  { name: "Oversize Blazer Ceket", category: "ceket-mont", price: 1799, colors: [C.siyah, C.bej, C.pudra], sizes: ["XS", "S", "M", "L", "XL"], isNew: true, description: "Vatkalı, tek düğmeli, oversize kesim blazer." },
  { name: "Kuşaklı Trençkot", category: "ceket-mont", price: 2499, salePrice: 1749, colors: [C.camel, C.bej], sizes: ["S", "M", "L"], isNew: false, description: "Klasik kruvaze trençkot, kuşak ve apolet detaylı." },
  { name: "Yün Karışımlı Kaban", category: "ceket-mont", price: 2999, colors: [C.krem, C.gri, C.siyah], sizes: ["XS", "S", "M", "L"], isNew: true, description: "Uzun kesim, yün karışımlı, düşük omuzlu kaban." },
  { name: "Crop Tüvit Ceket", category: "ceket-mont", price: 1599, colors: [C.pudra, C.krem], sizes: ["XS", "S", "M"], isNew: false, description: "Saçaklı kenarlı, kısa kesim tüvit ceket." },
  // Örgü
  { name: "Balıkçı Yaka Kazak", category: "orgu", price: 899, colors: [C.krem, C.camel, C.siyah], sizes: ["XS", "S", "M", "L", "XL"], isNew: true, description: "Yumuşak dokulu, rahat kesim balıkçı yaka triko kazak." },
  { name: "Düğmeli Hırka", category: "orgu", price: 799, salePrice: 559, colors: [C.pudra, C.gri], sizes: ["S", "M", "L"], isNew: false, description: "V yaka, inci düğmeli ince örgü hırka." },
  { name: "Saç Örgü Süveter", category: "orgu", price: 949, colors: [C.beyaz, C.bej], sizes: ["S", "M", "L", "XL"], isNew: true, description: "Klasik saç örgü desenli, kalın süveter." },
  { name: "Triko Crop Bluz", category: "orgu", price: 549, colors: [C.siyah, C.gul, C.krem], sizes: ["XS", "S", "M"], isNew: false, description: "Kısa kesim, fitilli triko bluz." },
];

const fabricByCategory: Record<CategorySlug, string> = {
  elbise: "%70 viskon, %30 polyester",
  "bluz-gomlek": "%100 pamuk",
  pantolon: "%65 polyester, %33 viskon, %2 elastan",
  etek: "%100 polyester",
  "ceket-mont": "%50 yün, %50 polyester",
  orgu: "%60 pamuk, %40 akrilik",
};

const TR_MAP: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" };

function slugify(text: string) {
  return text
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşü]/g, (ch) => TR_MAP[ch])
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const products: Product[] = seeds.map((s, i) => ({
  ...s,
  id: String(i + 1),
  slug: slugify(s.name),
  fabric: s.fabric ?? fabricByCategory[s.category],
  care: s.care ?? "30°C'de hassas yıkama. Ağartıcı kullanmayın. Düşük ısıda ütüleyin.",
}));

export function getProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function getNewArrivals(limit = 8) {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function effectivePrice(p: Product) {
  return p.salePrice ?? p.price;
}
