import Image from "next/image";

export default function LocationImage({ className }: { className?: string }) {
  return (
    <Image
      src="/svgs/location.svg"
      width={1920}
      height={1080}
      className={className}
      alt="location"
    />
  );
}
