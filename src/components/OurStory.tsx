import { isIndented, poem } from "@/data/poem";
import { ButtonLink } from "./Button";
import Logo from "./Logo";

export default function OurStory() {
  return (
    <section className="grid border border-ink md:grid-cols-5">
      <figure className="relative flex flex-col justify-center gap-6 border-b border-ink bg-sage p-8 md:col-span-2 md:min-h-[520px] md:border-b-0 md:border-r md:p-12">
        <span className="font-serif text-7xl leading-none text-cherry" aria-hidden>
          “
        </span>
        <blockquote className="font-serif text-4xl italic leading-tight md:text-5xl">
          {poem.excerpt.map((line, i) => (
            <p key={i} className={isIndented(line) ? "pl-10 text-cherry md:pl-16" : ""}>
              {line.trim()}
            </p>
          ))}
        </blockquote>
        <figcaption className="flex items-center justify-between gap-4 border-t border-ink pt-4 text-xs font-semibold uppercase tracking-[0.3em]">
          <span>{poem.title} · {poem.author}</span>
          <a href="#siir" className="shrink-0 border-b border-ink hover:text-cherry">
            Şiirin tamamı ↓
          </a>
        </figcaption>
      </figure>

      <div className="grid grid-rows-[1fr_auto] md:col-span-3">
        <div className="flex flex-col justify-center bg-cream p-8 md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cherry">
            Hikayemiz
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Sevgiyle başlayan
            <br />
            bir hikaye
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-mute">
            AG, birlikte paylaşılan güzel anlardan doğdu. Her parçayı, en mutlu günlerinizde
            üzerinizde görmek isteyeceğimiz özenle seçiyoruz: zamansız kesimler, yumuşak tonlar ve
            içtenlikle hazırlanan bir koleksiyon.
          </p>
          <ButtonLink href="/kategori/elbise" variant="outline" className="mt-8 self-start">
            Koleksiyonu Keşfet
          </ButtonLink>
        </div>

        <div className="grid grid-cols-3 border-t border-ink">
          <div className="flex aspect-square items-center justify-center border-r border-ink bg-sage sm:aspect-auto sm:h-28">
            <Logo className="h-16 w-16" />
          </div>
          <div className="flex flex-col items-center justify-center border-r border-ink bg-sand p-2 text-center sm:h-28">
            <span className="font-serif text-2xl md:text-3xl">%100</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest">Özen</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-moss p-2 text-center text-cream sm:h-28">
            <span className="font-serif text-2xl md:text-3xl">♥</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest">Aile Markası</span>
          </div>
        </div>
      </div>
    </section>
  );
}
