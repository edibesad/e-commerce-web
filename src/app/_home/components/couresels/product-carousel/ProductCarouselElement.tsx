import Image from "next/image";
import { RatingStars } from "@/components/rating/rating-stars";
import { Product } from "@/types/product";

export default function ProductCarouselElement({
  product,
}: {
  product: Product;
}) {
  const percentage = (product.rating.rate / 5) * 100;
  return (
    <div className="h-full py-5">
      <div className="flex bg-white h-full rounded-xl overflow-hidden">
        <div className="basis-7/12">
          <div className="h-full w-full relative">
            <Image
              fill
              objectFit="contain"
              alt="product"
              className="p-4 object-cover rounded-l-lg"
              src={product.image}
            />
          </div>
        </div>

        <div className="flex flex-col basis-5/12 rounded-r-lg pl-2 pt-3 pr-2">
          <span className="block max-w-[150px] truncate text-[#7B7B7B] text-[12px]">
            {product.title}
          </span>
          <div className="flex items-center gap-1 mt-1 w-full">
            <RatingStars percentage={percentage} size={14} />
            <span className="text-[8px] text-[#919191]">
              ({product.rating.count})
            </span>
            <span className="bg-[#f5f5f5] text-[9px] px-1 rounded">
              Stok: {(Math.random() * 1000).toFixed(0)}
            </span>
          </div>
          <span className="text-[#484848] font-semibold text-sm mt-1">
            ${product.price}
          </span>

          <div>
            <button className="text-[#484848] border-[#cccc] border-2 rounded-lg hover:text-[#cc4d00] text-sm font-semibold w-full py-1 mt-2">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
