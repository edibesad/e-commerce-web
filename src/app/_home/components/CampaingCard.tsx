export default function CampaignCard() {
  return (
    <>
      <div className="flex h-24 w-24 flex-col items-center">
        <div className="">
          <div className="text-center text-[0.5rem] font-bold bg-red-700 text-white rounded-t-md">
            Name
          </div>
          <div className="flex-1 bg-green-700 h-16 text-center place-content-center text-white rounded-b-md">
            Campaign Img
          </div>
        </div>
        <div className="text-center text-xs font-bold mt-1">Name</div>
      </div>
    </>
  );
}
