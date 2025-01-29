import LocationImage from "../../images/LocationImage";

export default function LocationButton() {
  return (
    <div className="flex w-44">
      <div className="basis-2/12" />
      <div className="h-20 basis-4/12 relative">
        <LocationImage className="h-full w-full" />
      </div>
      <div className="basis-4/12 text-[#919191]">
        <p className="flex items-center justify-start h-full">Konum</p>
      </div>
      <div className="basis-2/12" />
      <div />
    </div>
  );
}
