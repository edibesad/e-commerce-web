import Image from "next/image";
import location from "../../public/svgs/location.svg";

export default function LocationImage({ className }: { className?: string }) {
  return <Image src="/svgs/location.svg" fill className={className} alt="location" />;
}
