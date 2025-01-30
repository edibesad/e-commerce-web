import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LocationButton() {
  return (
    <div className="flex w-40 gap-2 items-center justify-center">
      <FontAwesomeIcon
        width={15}
        height={15}
        icon={faLocationDot}
        color="#919191"
      />
      <span className="text-[#919191]">Konum</span>
    </div>
  );
}
