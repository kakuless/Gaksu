import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./Button";
import GarmentArt from "./GarmentArt";
import Logo from "./Logo";

/** public/ içine hero.jpg / .jpeg / .png / .webp konduğunda kampanya bloğunda o gösterilir. */
function findHeroPhoto() {
  return ["hero.jpg", "hero.jpeg", "hero.png", "hero.webp"].find((f) =>
    fs.existsSync(path.join(process.cwd(), "public", f)),
  );
}

export default function HeroGrid() {
  const photo = findHeroPhoto();

  return (
    <section className="grid grid-cols-2 border border-ink md:grid-cols-3 md:grid-rows-2">
      {/* Büyük kampanya dikdörtgeni */}
      <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden col-span-2 border-b border-ink bg-sand p-8 md:row-span-2 md:min-h-[560px] md:border-b-0 md:border-r md:p-12">
        {photo ? (
          <div className="absolute inset-y-0 right-0 hidden w-1/2 border-l border-ink sm:block">
            <Image src={`/${photo}`} alt="Yeni sezon koleksiyonu" fill priority sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
          </div>
        ) : (
          <div className="absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center sm:flex">
            <GarmentArt kind="elbise" color="#b7c3a8" className="relative z-10 h-[78%]" />
            <GarmentArt kind="ceket-mont" color="#efe4d4" className="-ml-[18%] h-[70%]" />
          </div>
        )}
        <div className="absolute left-8 top-8 hidden h-24 w-24 items-center justify-center border border-ink bg-cream sm:flex md:left-12 md:top-12">
          <Logo className="h-18 w-18" />
        </div>
        <div className="relative max-w-md">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]">Sonbahar / Kış 2026</p>
          <h1 className="font-serif text-5xl uppercase leading-[0.95] md:text-7xl">
            Yeni
            <br />
            Sezon
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Yumuşak tonlar, keskin kesimler. Gardırobunuzu sezona hazırlayan yeni koleksiyon şimdi
            mağazada.
          </p>
          <ButtonLink href="/kategori/elbise" className="mt-6">
            Koleksiyonu Keşfet
          </ButtonLink>
        </div>
      </div>

      {/* Adaçayı kare */}
      <Link
        href="/kategori/orgu"
        className="group flex min-h-48 flex-col justify-between gap-6 border-r border-ink bg-sage p-5 md:border-b md:border-r-0 md:p-8"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">Yeni Gelenler</span>
        <div>
          <p className="font-serif text-3xl uppercase leading-none md:text-4xl">Örgü<br />Sezonu</p>
          <span className="mt-4 inline-block border-b border-ink text-xs font-semibold uppercase tracking-[0.2em] group-hover:text-cream">
            Alışverişe Başla →
          </span>
        </div>
      </Link>

      {/* Kum/siyah kare */}
      <Link
        href="/kategori/etek"
        className="group flex min-h-48 flex-col justify-between gap-6 bg-moss p-5 text-cream md:p-8"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Sınırlı Süre</span>
        <div>
          <p className="font-serif text-5xl leading-none md:text-6xl">%30</p>
          <p className="mt-1 font-serif text-2xl uppercase">İndirim</p>
          <span className="mt-4 inline-block border-b border-cream text-xs font-semibold uppercase tracking-[0.2em] group-hover:text-sage">
            Seçili Ürünler →
          </span>
        </div>
      </Link>
    </section>
  );
}
