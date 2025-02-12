import CampaignCard from "./CampaignCard";

export default function CampaignList() {
  return (
    <>
      <section className="relative grid md:grid-rows-1 md:grid-cols-12 grid-cols-4 grid-rows-2 place-content-center gap-4">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard className="md:block hidden" />
        <CampaignCard className="md:block hidden" />
        <CampaignCard className="md:block hidden" />
        <CampaignCard className="md:block hidden" />
      </section>
    </>
  );
}
