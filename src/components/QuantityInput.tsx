export default function QuantityInput({
  value,
  onChange,
  min = 1,
  max = 10,
  compact = false,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  compact?: boolean;
}) {
  const cell = compact ? "h-9 w-9" : "h-12 w-12";
  return (
    <div className="flex border border-ink bg-white">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Azalt"
        className={`${cell} hover:bg-sage disabled:opacity-30`}
      >
        −
      </button>
      <span className={`${cell} flex items-center justify-center border-x border-ink text-sm font-semibold`}>
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Artır"
        className={`${cell} hover:bg-sage disabled:opacity-30`}
      >
        +
      </button>
    </div>
  );
}
