# AG — Kadın Giyim E-Ticaret

Kare ve dikdörtgen bloklardan oluşan, adaçayı yeşili / krem / siyah paletli kadın hazır giyim mağazası.
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Zustand.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Sayfalar

| Rota | Açıklama |
| --- | --- |
| `/` | Ana sayfa: bento hero, kategori kareleri, yeni gelenler, bülten, avantajlar |
| `/kategori/[slug]` | Ürün listesi; beden / renk / fiyat / indirim filtresi ve sıralama |
| `/urun/[slug]` | Ürün detay; renk, beden, adet seçimi, sepete ekleme |
| `/sepet` | Sepet (tarayıcıda `localStorage` ile saklanır) |
| `/odeme` | Teslimat + ödeme formu (demo — ödeme alınmaz) |
| `/siparis-tamam` | Sipariş onayı |

## Yapı

- `src/data/` — örnek ürün ve kategori verisi (`getProducts`, `getProductBySlug` vb.). Veritabanına geçişte yalnızca bu fonksiyonlar değişir.
- `src/lib/cart.ts` — Zustand sepet store'u
- `src/lib/format.ts` — TL fiyat biçimi, kargo kuralı (500 TL üzeri ücretsiz)
- `src/components/` — arayüz bileşenleri. `GarmentArt`, gerçek ürün fotoğrafları eklenene kadar geometrik kıyafet çizimleri gösterir.
- Renkler `src/app/globals.css` içindeki `@theme` bloğunda: `cream`, `sage`, `sage-deep`, `moss` (koyu zeminler), `sand`, `ink`.

## Sonraki adımlar

Ürün fotoğrafları, üyelik/giriş, veritabanı (Prisma + PostgreSQL), admin paneli, gerçek ödeme (iyzico/PayTR), favoriler, arama.
