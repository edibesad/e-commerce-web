import { ProductCard } from "@/components/ProductElement";
import { Product } from "@/types/product";

export function ProductForYouList({ products }: { products: Product[] }) {
  return (
    <div className="flex h-full justify-content-center">
      {products.map((element) => (
        <div key={element.id} className="basis-1/6 px-3 py-2">
          <ProductCard product={element} />
        </div>
      ))}
    </div>
  );
}
