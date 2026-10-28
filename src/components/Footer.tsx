import Link from "next/link";
import { categories } from "@/data/categories";
import Logo from "./Logo";

const help = ["Sipariş Takibi", "İade & Değişim", "Beden Rehberi", "Sıkça Sorulan Sorular"];
const corporate = ["Hakkımızda", "Mağazalarımız", "Kariyer", "KVKK & Gizlilik"];

export default function Footer() {
  return (
    <footer className="mt-20 bg-moss text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-cream/20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-b border-cream/20 p-8 sm:border-r">
          <Logo className="h-24 w-24" />
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Zamansız parçalar, net çizgiler. Her gün giymek isteyeceğiniz kadın koleksiyonları.
          </p>
        </div>
        <FooterColumn title="Kategoriler">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/kategori/${c.slug}`} className="hover:text-sage">
                {c.name}
              </Link>
            </li>
          ))}
        </FooterColumn>
        <FooterColumn title="Yardım">
          {help.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </FooterColumn>
        <FooterColumn title="Kurumsal" last>
          {corporate.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </FooterColumn>
      </div>
      <div className="border-t border-cream/20 px-4 py-4 text-center text-xs tracking-widest text-cream/60">
        © {new Date().getFullYear()} AG · Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`border-b border-cream/20 p-8 ${last ? "" : "lg:border-r"}`}>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sage">{title}</h3>
      <ul className="space-y-2 text-sm text-cream/80">{children}</ul>
    </div>
  );
}
