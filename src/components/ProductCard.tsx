import { Product } from "@/types/product";
import Image from "next/image";
import { RatingStars } from "./rating/rating-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="h-full border-[1px] border-solid border-[#e5e5e5] rounded-lg overflow-hidden hover:cursor-pointer hover:shadow-md group relative">
      <button className="absolute right-1 top-1 z-10 w-10 h-10 rounded-full bg-[#E5E5E5] p-1 hover:bg-[#d6d6d6]">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <div className="flex flex-col h-full w-full ">
        <div className="basis-1/2 w-full">
          <div className="h-full w-full relative">
            <Image src={product.image} alt={product.title} fill />
          </div>
        </div>
        <div className="basis-1/2 w-full relative p-2">
          <div className="text-ellipsis line-clamp-2 text-[#7B7B7B] text-[12px] font-semibold">
            {product.title}
          </div>
          <div className="flex items-center pt-2">
            <div className="pr-2">
              <RatingStars
                percentage={(product.rating.rate / 5) * 100}
                size={12}
              />
            </div>
            <div className="text-[11px] font-normal text-[#919191]">
              {(Math.random() * 1000).toFixed(0)}
            </div>
          </div>
          <div className="hidden md:flex absolute bg-[var(--primary)] bottom-2 right-2 left-2 h-8 rounded-lg text-white text-center items-center justify-center group-hover:opacity-100 opacity-0">
            Sepete Ekle
          </div>
          <button className="md:hidden absolute bottom-2 right-2 left-2 h-8 text-[#484848] border-[#cccc] border-2 rounded-lg text-xs font-semibold">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
