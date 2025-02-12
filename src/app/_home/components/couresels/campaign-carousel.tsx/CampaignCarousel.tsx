import { FullCarousel } from "@/components/carousels/FullCarousel";
import CampaignCarouselElement from "./CampainCarouselElement";

export default function CampaignCarousel() {
  const imgUrl = "https://picsum.photos/800/400";

  return (
    <div className="md:basis-2/3 w-full">
      <FullCarousel>
        <CampaignCarouselElement src={`${imgUrl}?random=1`} />
        <CampaignCarouselElement src={`${imgUrl}?random=1`} />
        <CampaignCarouselElement src={`${imgUrl}?random=1`} />
        <CampaignCarouselElement src={`${imgUrl}?random=1`} />
        <CampaignCarouselElement src={`${imgUrl}?random=1`} />
      </FullCarousel>
    </div>
  );
}
