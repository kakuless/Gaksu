"use client";

import { useState } from "react";
import { Button } from "./Button";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="grid border border-ink bg-sage md:grid-cols-2">
      <div className="border-b border-ink p-8 md:border-b-0 md:border-r md:p-12">
        <h2 className="font-serif text-3xl uppercase md:text-4xl">Bültene Katıl</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed">
          Yeni koleksiyonlardan ve özel indirimlerden ilk sen haberdar ol. İlk siparişine %10 indirim
          hediye.
        </p>
      </div>
      <div className="flex items-center p-8 md:p-12">
        {done ? (
          <p className="text-sm font-semibold uppercase tracking-widest">
            Teşekkürler! İndirim kodun e-postanda.
          </p>
        ) : (
          <form
            className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="E-posta adresin"
              aria-label="E-posta adresi"
              className="min-w-0 flex-1 border border-ink bg-cream px-4 py-3 text-sm outline-none focus:bg-white"
            />
            <Button type="submit" className="sm:border-l-0">
              Abone Ol
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
