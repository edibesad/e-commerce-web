import CampaignList from "./components/CampaignList";
import Carousel from "./components/couresel/Carousel";

export default function Home() {
  const imgUrl = "https://picsum.photos/800/400";
  return (
    <div className="mt-5">
      <CampaignList />
      <div className="flex gap-4">
        <div className="basis-2/3">
        <Carousel
          images={[
            `${imgUrl}?random=1`,
            `${imgUrl}?random=2`,
            `${imgUrl}?random=3`,
            `${imgUrl}?random=4`,
            `${imgUrl}?random=5`,
          ]}
          />
          </div>
          <div className="basis-1/3 bg-red-700">
            asdasd
          </div>
        </div>
    </div>
  );
}
