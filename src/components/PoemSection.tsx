import { isIndented, poem } from "@/data/poem";
import Logo from "./Logo";

const tones = ["bg-cream", "bg-sage", "bg-white", "bg-sand", "bg-cream"];
const numerals = ["I", "II", "III", "IV", "V"];

/** Şiirin tamamı: başlık karesi + her kıta ayrı bir blok. */
export default function PoemSection() {
  return (
    <section
      id="siir"
      aria-label={`${poem.title}, ${poem.author}`}
      className="grid scroll-mt-24 gap-px border border-ink bg-ink md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="relative flex min-h-64 flex-col justify-between bg-moss p-8 text-cream md:p-10">
        <span className="flex h-16 w-16 items-center justify-center bg-cream text-ink">
          <Logo className="h-12 w-12" />
        </span>
        <div>
          <h2 className="font-serif text-5xl uppercase leading-none md:text-6xl">{poem.title}</h2>
          <p className="mt-4 border-t border-cream/40 pt-4 text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            {poem.author}
          </p>
        </div>
      </div>

      {poem.stanzas.map((stanza, i) => (
        <div key={i} className={`relative p-8 md:p-10 ${tones[i % tones.length]}`}>
          <span className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center border-b border-l border-ink bg-cream font-serif text-sm">
            {numerals[i]}
          </span>
          <div className="space-y-1 font-serif text-[15px] leading-relaxed md:text-base">
            {stanza.map((line, j) => {
              const refrain = j >= stanza.length - 2;
              return (
                <p
                  key={j}
                  className={`-indent-6 ${isIndented(line) ? "pl-16 md:pl-22" : "pl-6"} ${refrain ? "italic text-cherry" : ""}`}
                >
                  {line.trim()}
                </p>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
