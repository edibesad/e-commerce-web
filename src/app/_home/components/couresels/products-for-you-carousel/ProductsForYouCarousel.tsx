import { fetchProducts } from "@/repositories/productRepository";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { ProductForYouList } from "./ProductForYouList";
import { FullCarousel } from "@/components/carousels/FullCarousel";

export function ProductForYouCarousel() {
  const [products, setProducts] = useState<Product[][]>([]);

  useEffect(() => {
    fetchProducts({ limit: 18 }).then((data) => {
      const result: Product[][] = [];
      for (let i = 0; i < data.length; i += 6) {
        result.push(data.slice(i, i + 6));
      }
      setProducts(result);
    });
  }, []);

  return (
    <div className="h-[360px] py-5">
      <div className="px-5">
        <h3 className="text-xl font-semibold text-[#484848]">
          Popüler Ürünlerden Seçtik
        </h3>
      </div>
      <FullCarousel>
        {products.map((products, index) => (
          <ProductForYouList key={index} products={products} />
        ))}
      </FullCarousel>
    </div>
  );
}
