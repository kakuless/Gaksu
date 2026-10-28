export type CategorySlug =
  | "elbise"
  | "bluz-gomlek"
  | "pantolon"
  | "etek"
  | "ceket-mont"
  | "orgu";

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  tone: string;
};

export const categories: Category[] = [
  { slug: "elbise", name: "Elbise", tagline: "Her ana uygun zarafet", tone: "bg-sage" },
  { slug: "bluz-gomlek", name: "Bluz & Gömlek", tagline: "Ofisten akşam yemeğine", tone: "bg-sand" },
  { slug: "pantolon", name: "Pantolon", tagline: "Rahat kesim, net çizgiler", tone: "bg-white" },
  { slug: "etek", name: "Etek", tagline: "Mini, midi, maksi", tone: "bg-sand" },
  { slug: "ceket-mont", name: "Ceket & Mont", tagline: "Katmanlı sezon stili", tone: "bg-white" },
  { slug: "orgu", name: "Örgü", tagline: "Yumuşak dokular", tone: "bg-sage" },
];

export function getCategories() {
  return categories;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
