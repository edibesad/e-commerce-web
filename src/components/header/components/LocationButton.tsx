import LocationImage from "../../images/LocationImage";

export default function LocationButton() {
  return (
    <>
      <button className="flex items-center">
        <LocationImage className="w-12" />
        <span className="text-[#919191] self-center">Konum</span>
      </button>
    </>
  );
}
