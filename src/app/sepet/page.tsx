import type { Metadata } from "next";
import CartView from "@/components/CartView";

export const metadata: Metadata = { title: "Sepetim" };

export default function CartPage() {
  return (
    <div>
      <h1 className="mb-8 border-b border-ink pb-3 font-serif text-3xl uppercase tracking-wider md:text-4xl">
        Sepetim
      </h1>
      <CartView />
    </div>
  );
}
