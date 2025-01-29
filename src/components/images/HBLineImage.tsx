import Image from "next/image";

export default function HBLineImage({ className }: { className?: string }) {
  return (
    <Image
      src="/svgs/line.svg"
      width={1920}
      height={1080}
      className={className}
      alt="line"
    />
  );
}
