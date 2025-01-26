import LocationImage from "../../images/LocationImage";

export default function LocationButton() {
  return (
      <div className="flex relative bg-red-500 w-44 h-full">
        <div className="basis-1/3 bg-blue-700 relative">
          <LocationImage className="h-full" />
        </div>
        <span className="text-[#919191]">Konum</span>
      </div>
  );
}
