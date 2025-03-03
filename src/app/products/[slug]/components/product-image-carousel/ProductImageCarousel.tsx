import Image from "next/image";
import { FullCarousel } from "@/components/carousels/FullCarousel";
import { Product } from "@/types/product";

export default function ProductImageCarousel({
  product,
}: {
  product: Product;
}) {
  return (
    <>
      <FullCarousel className="w-full h-[590px] border-[1px] border-[#dadada] rounded-lg">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            objectFit="contain"
            layout="fill"
            className="w-full"
          />
        </div>
      </FullCarousel>
      <div className="flex justify-center gap-4 w-[380px] h-16 mb-0 ml-4 mr-4 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`relative h-full w-12 border-solid rounded-lg ${
              i === 0
                ? "border-2 border-[var(--primary)]"
                : "border-[1px] border-[#dadada]"
            }`}
          >
            <Image
              src={product.image}
              alt={product.title}
              objectFit="contain"
              layout="fill"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
}
