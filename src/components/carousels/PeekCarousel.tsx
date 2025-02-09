import { ReactNode } from "react";
import BaseCarousel from "./BaseCarousel";

export const PeekCarousel = ({
  children,
  className,
  slideWidth = 70,
  peekOffset = 10,
  showArrowOnLimit = false,
}: {
  children: ReactNode;
  className?: string;
  slideWidth?: number;
  peekOffset?: number;
  showArrowOnLimit?: boolean;
}) => (
  <BaseCarousel
    slideWidth={slideWidth}
    peekOffset={peekOffset}
    className={className}
    showArrowOnLimit={showArrowOnLimit}
  >
    {children}
  </BaseCarousel>
);
