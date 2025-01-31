import { RatingStars } from "@/components/rating/rating-stars";
import Image from "next/image";

export default function ProductCarouselElement() {
  return (
    <div className="h-full py-5 ">
      <div className="flex bg-white h-full rounded-xl">
        <div className="basis-1/3 relative p">
          <Image
            fill
            alt="product"
            className="w-full h-full p-4 object-cover rounded-l-lg"
            src={"https://picsum.photos/200/300"}
          />
        </div>
        <div className="flex flex-col basis-2/3 w-fit h-fit rounded-r-lg pl-2 pt-3">
          <span className="">Ürün adı</span>
          <div className="flex items-center gap-1">
            <RatingStars percentage={0} />
            <span className="text-[9px] text-[#919191]">(607)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
