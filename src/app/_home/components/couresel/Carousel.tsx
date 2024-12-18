"use client";
import { useState } from "react";
import CarouselImage from "./Carouselmage";
import arrowLine from "../../../../public/svgs/arrow_line.svg";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div
        id="default-carousel"
        className="relative min-w-[750px] min-h-96"
        data-carousel="slide"
      >
        <div className="relative h-96 overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 h-96 bg-black"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <CarouselImage src={image} key={index} />
            ))}
          </div>
        </div>
        <div
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 "
          data-carousel-prev
        >
          <button
            onClick={handlePrev}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer transform transition duration-200 ease-in-out
          hover:scale-110 focus:outline-none"
            data-carousel-prev
          >
            <Image src={arrowLine} alt=""></Image>
          </button>
        </div>
        <div
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 "
          data-carousel-prev
        >
          <button
            onClick={handleNext}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer transform transition duration-200 ease-in-out
          hover:scale-110 focus:outline-none rotate-180"
            data-carousel-next
          >
            <Image src={arrowLine} alt=""></Image>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
