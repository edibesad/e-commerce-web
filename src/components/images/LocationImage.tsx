import Image from "next/image";
import location from "../../public/svgs/location.svg";

export default function LocationImage({ className }: { className?: string }) {
  return <Image src={location} className={className} alt="location" />;
}
