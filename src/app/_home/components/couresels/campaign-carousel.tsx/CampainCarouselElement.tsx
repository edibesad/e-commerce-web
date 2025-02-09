import Image from "next/image";

interface CampaignCarouselElementProps {
  src: string;
}

export default function CampaignCarouselElement({
  src,
}: CampaignCarouselElementProps) {
  return (
    <div className="w-full h-full relative" data-carousel-item>
      <Image
        src={src}
        fill
        className="rounded-xl"
        style={{ objectFit: "cover" }}
        priority
        alt=""
      />
    </div>
  );
}
