import { ReactNode } from "react";
import BaseCarousel from "./carousel";

export const PeekCarousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <BaseCarousel slideWidth="75%" showPeek={true} className={className}>
    {children}
  </BaseCarousel>
);
