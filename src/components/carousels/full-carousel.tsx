import { ReactNode } from "react";
import BaseCarousel from "./carousel";

export const FullCarousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <BaseCarousel slideWidth="100%" showPeek={false} className={className}>
    {children}
  </BaseCarousel>
);
