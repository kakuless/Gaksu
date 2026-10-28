import type { Metadata } from "next";
import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = { title: "Ödeme" };

export default function CheckoutPage() {
  return (
    <div>
      <h1 className="mb-8 border-b border-ink pb-3 font-serif text-3xl uppercase tracking-wider md:text-4xl">
        Ödeme
      </h1>
      <CheckoutForm />
    </div>
  );
}
