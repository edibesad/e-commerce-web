import { ReactNode } from "react";
import BaseCarousel from "./base-carousel";

export const PeekCarousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <BaseCarousel
    slideWidth={60}
    peekOffset={25}
    className={className}
    showArrowOnLimit={false}
  >
    {children}
  </BaseCarousel>
);
