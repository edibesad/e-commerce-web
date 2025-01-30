import Image from "next/image";

export default function ProductCarouselElement() {
  return (
    <div className="bg-white w-full h-full">
      <div className="flex h-full">
        <div className="basis-1/3 bg-red-500 relative">
          <Image
            fill
            alt="product"
            className="w-full h-full object-cover"
            src={"https://picsum.photos/200/300"}
          />
        </div>
        <div className="basis-2/3 bg-fuchsia-500 w-full h-full">asd</div>
      </div>
    </div>
  );
}
