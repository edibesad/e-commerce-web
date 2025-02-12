import { PeekCarousel } from "@/components/carousels/PeekCarousel";
import ProductCarouselElement from "./ProductCarouselElement";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/repositories/productRepository";
import { Product } from "@/types/product";

export function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts({ limit: 5 }).then((data) => setProducts(data));
  }, []);

  return (
    <div className="relative basis-1/3 md:block hidden">
      <div className="absolute w-full h-full -z-10">
        <Image
          fill
          alt="campaing_image"
          src="/images/campaign_image.png"
          className="z-0 rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4 h-full">
        <div className="basis-1/2" />
        <div className="basis-1/2 relative rounded-xl">
          <PeekCarousel>
            {products.map((product) => (
              <ProductCarouselElement key={product.id} product={product} />
            ))}
          </PeekCarousel>
        </div>
      </div>
    </div>
  );
}
