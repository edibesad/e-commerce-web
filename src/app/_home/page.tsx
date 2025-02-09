"use client";

import CampaignList from "./components/CampaignList";

import { ProductCarousel } from "./components/couresels/product-carousel/ProductCarousel";
import CampaignCarousel from "./components/couresels/campaign-carousel.tsx/CampaignCarousel";
import { ProductForYouCarousel } from "./components/couresels/products-for-you-carousel/ProductsForYouCarousel";

export default function Home() {
  return (
    <div className="mt-5">
      <CampaignList />
      <div className="flex gap-4 h-96 pt-5">
        <CampaignCarousel />
        <ProductCarousel />
      </div>
      <ProductForYouCarousel />
    </div>
  );
}
