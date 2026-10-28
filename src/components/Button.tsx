import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-moss text-cream border-moss hover:bg-sage hover:text-ink",
  outline: "bg-transparent text-ink border-ink hover:bg-moss hover:text-cream",
  light: "bg-cream text-ink border-cream hover:bg-moss hover:text-cream hover:border-ink",
};

const base =
  "inline-flex items-center justify-center gap-2 border px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors disabled:cursor-not-allowed disabled:opacity-40";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
