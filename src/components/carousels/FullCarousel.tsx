import { ReactNode } from "react";
import BaseCarousel from "./BaseCarousel";

export const FullCarousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <BaseCarousel slideWidth={100} className={className} showArrowOnLimit={true}>
    {children}
  </BaseCarousel>
);
