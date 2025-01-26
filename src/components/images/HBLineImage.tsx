import Image from "next/image";
import line from "../../public/svgs/line.svg";

export default function HBLineImage({ className }: { className?: string }) {
  return <Image src="/svgs/line.svg" fill className={className} alt="line" />;
}
