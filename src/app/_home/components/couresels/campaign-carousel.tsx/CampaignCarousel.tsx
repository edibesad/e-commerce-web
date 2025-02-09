import { FullCarousel } from "@/components/carousels/FullCarousel";
import CampaignCarouselElement from "./CampainCarouselElement";

export default function CampaignCarousel() {
  const imgUrl = "https://picsum.photos/800/400";

  return (
    <div className="basis-2/3">
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
