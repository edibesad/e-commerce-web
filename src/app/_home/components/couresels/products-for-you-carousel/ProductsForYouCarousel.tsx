import { fetchProducts } from "@/repositories/productRepository";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { ProductForYouList } from "./ProductForYouList";
import { FullCarousel } from "@/components/carousels/FullCarousel";

export function ProductForYouCarousel() {
  const [products, setProducts] = useState<Product[][]>([]);

  useEffect(() => {
    fetchProducts({ limit: 18 }).then((data) => {
      if (!data) {
        return;
      }
      const result: Product[][] = [];
      const itemsPerPage = window.innerWidth <= 768 ? 3 : 6;
      for (let i = 0; i < data.length; i += itemsPerPage) {
        result.push(data.slice(i, i + itemsPerPage));
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
