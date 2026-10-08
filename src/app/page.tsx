import { Collection, type CollectionSection } from "@/components/collection";
import { Hero } from "@/components/hero";
import { categories, getProductsByCategory } from "@/data/products";

const sections: CollectionSection[] = categories.map((category) => ({
  category,
  products: getProductsByCategory(category.id),
}));

export default function Home() {
  return (
    <>
      <Hero />
      <Collection sections={sections} />
    </>
  );
}
