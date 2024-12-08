import Image from "next/image";
import line from "../../public/svgs/line.svg";

export default function HBLineImage({ className }: { className?: string }) {
  return <Image src={line} className={className} alt="line" />;
}
