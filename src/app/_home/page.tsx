import CampaignList from "./components/CampaignList";
import Carousel from "../../components/Carousel";
import Image from "next/image";
import CarouselImage from "./components/couresel/Carouselmage";

export default function Home() {
  const imgUrl = "https://picsum.photos/800/400";
  return (
    <div className="mt-5">
      <CampaignList />
      <div className="flex gap-4">
        <div className="basis-2/3">
          <Carousel>
            <CarouselImage src={`${imgUrl}?random=1`} />
            <CarouselImage src={`${imgUrl}?random=2`} />
            <CarouselImage src={`${imgUrl}?random=3`} />
            <CarouselImage src={`${imgUrl}?random=4`} />
            <CarouselImage src={`${imgUrl}?random=5`} />
          </Carousel>
        </div>
        <div className="relative basis-1/3">
          <div className="absolute w-full h-full -z-10">
            <Image
              fill
              alt="campaing_image"
              src="/images/campaign_image.png"
              className="z-0"
            />
          </div>
          <div className="flex flex-col gap-4 w-full h-full">
            <div className="basis-1/2" />
            <div className="basis-1/2 bg-red-400 relative">
              <div className="absolute top-5 bottom-5 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
