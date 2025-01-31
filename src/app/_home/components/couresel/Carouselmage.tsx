import Image from "next/image";

interface CarouselImageProps {
  src: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src }) => {
  return (
    <div className="w-full h-full relative" data-carousel-item>
      <Image
        src={src}
        fill
        className="rounded-xl"
        style={{ objectFit: "cover" }}
        priority
        alt=""
      />
    </div>
  );
};

export default CarouselImage;
