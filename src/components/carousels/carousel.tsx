"use client";
import { ReactNode, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Base Carousel Component
const BaseCarousel = ({
  children,
  className,
  slideWidth = "100%",
  showPeek = false,
}: {
  children: ReactNode;
  className?: string;
  slideWidth?: string;
  showPeek?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const childrenArray = React.Children.toArray(children);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate translateX based on slide width
  const translateAmount = parseInt(slideWidth) * currentIndex;

  return (
    <div className={`w-full h-full ${className}`}>
      <div className="relative w-full h-full" data-carousel="slide">
        <div
          className={`relative w-full h-full ${
            showPeek ? "overflow-visible" : "overflow-hidden"
          } rounded-lg`}
        >
          <div
            className="flex w-full h-full transition-transform duration-500"
            style={{ transform: `translateX(-${translateAmount}%)` }}
          >
            {React.Children.map(children, (child) => (
              <div
                className="flex-shrink-0 h-full"
                style={{ width: slideWidth }}
              >
                <div className="px-2 h-full">{child}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white cursor-pointer transition duration-200 ease-in-out hover:scale-110 focus:outline-none shadow-lg"
          data-carousel-prev
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-4 h-4 text-gray-800"
          />
        </button>

        <button
          onClick={handleNext}
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white cursor-pointer transition duration-200 ease-in-out hover:scale-110 focus:outline-none shadow-lg"
          data-carousel-next
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-4 h-4 text-gray-800"
          />
        </button>
      </div>
    </div>
  );
};

export default BaseCarousel;
