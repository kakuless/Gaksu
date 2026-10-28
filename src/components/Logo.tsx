const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };
const gTransform = "translate(27 70) scale(.86 1) translate(-27 -70)";

/**
 * Markanın AG monogramı (public/logo.jpg'deki 3B logonun vektör hali).
 * Orijinaldeki gibi gümüş: G parlak, A ve kıvrım daha koyu metal tonda.
 * id'ler sabit; sayfada birden çok logo olsa da aynı tanımı paylaşırlar.
 */
export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="-3 -7 106 106" className={`shrink-0 ${className}`} role="img" aria-label="AG">
      <defs>
        <linearGradient id="ag-silver-bright" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e4e5e3" />
          <stop offset=".4" stopColor="#a4a7a9" />
          <stop offset=".65" stopColor="#d2d4d3" />
          <stop offset="1" stopColor="#6c6f71" />
        </linearGradient>
        <linearGradient id="ag-silver-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a9abad" />
          <stop offset=".5" stopColor="#6e7173" />
          <stop offset="1" stopColor="#45484a" />
        </linearGradient>
        {/* Krem zeminde de seçilsin diye hafif kabartma gölgesi */}
        <filter id="ag-emboss" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx=".6" dy="1.1" stdDeviation=".8" floodColor="#000" floodOpacity=".55" />
        </filter>
        {/* G'nin çevresinde ince boşluk: A ve kıvrım G'nin arkasından geçer */}
        <mask id="ag-g-knockout">
          <rect x="-10" y="-10" width="130" height="130" fill="#fff" />
          <text x="27" y="70" fontSize="78" style={serif} transform={gTransform} stroke="#000" strokeWidth="2.6">
            G
          </text>
        </mask>
      </defs>
      <g filter="url(#ag-emboss)">
        <g mask="url(#ag-g-knockout)" fill="url(#ag-silver-dark)">
          <text x="9" y="56" fontSize="77" style={serif}>
            A
          </text>
          <path d="M36 24C22 22 5 34 4.5 52 4 70 16 81 32 81c16 0 28-7 44-7.5 13-.5 22 7.5 23.5 18.5-4.5-8-11.5-12.5-21.5-12.5-16 0-28 9-46 8.5C10 87.5-1 72-.5 52 0 32 18 20.5 36 24Z" />
        </g>
        <text x="27" y="70" fontSize="78" style={serif} transform={gTransform} fill="url(#ag-silver-bright)">
          G
        </text>
      </g>
    </svg>
  );
}
