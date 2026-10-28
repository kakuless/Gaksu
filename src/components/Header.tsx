"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/data/categories";
import { cartCount, useCart, useHydrated } from "@/lib/cart";
import Logo from "./Logo";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const count = cartCount(useCart((s) => s.items));
  const hydrated = useHydrated();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-cream">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <button
          className="justify-self-start lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <Link href="/" aria-label="AG ana sayfa">
          <Logo className="h-14 w-14" />
        </Link>

        <nav className="hidden justify-center gap-6 lg:flex" aria-label="Kategoriler">
          {categories.map((c) => {
            const active = pathname === `/kategori/${c.slug}`;
            return (
              <Link
                key={c.slug}
                href={`/kategori/${c.slug}`}
                className={`border-b-2 py-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  active ? "border-ink" : "border-transparent hover:border-sage-deep"
                }`}
              >
                {c.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-4">
          <button aria-label="Ara" className="hidden hover:text-sage-deep sm:block">
            <SearchIcon />
          </button>
          <button aria-label="Favoriler" className="hidden hover:text-sage-deep sm:block">
            <HeartIcon />
          </button>
          <Link href="/sepet" aria-label="Sepet" className="relative hover:text-sage-deep">
            <BagIcon />
            {hydrated && count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center bg-cherry px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <nav className="grid grid-cols-2 border-t border-ink lg:hidden" aria-label="Kategoriler">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/kategori/${c.slug}`}
              className={`border-ink p-5 text-sm font-semibold uppercase tracking-widest ${c.tone} ${
                i % 2 === 0 ? "border-r" : ""
              } ${i < categories.length - 2 ? "border-b" : ""}`}
            >
              {c.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
