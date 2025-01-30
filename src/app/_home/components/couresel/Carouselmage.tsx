import Image from "next/image";

interface CarouselImageProps {
  src: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src }) => {
  return (
    <div
      className="w-full flex-shrink-0 duration-700 ease-in-out rounded-xl"
      data-carousel-item
    >
      <Image
        src={src}
        width={400}
        height={400}
        className="w-full h-full object-cover"
        alt=""
      />

      {/* <Image
        layout="responsive"
        src={src}
        className=" absolute block w-full h-full object-fill"
        alt="Image"
      /> */}
    </div>
  );
};

export default CarouselImage;
