import Image from "next/image";
import { CSSProperties } from "react";

export default function LogoImage({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties | undefined;
}) {
  return (
    <Image
      width={1920}
      height={1080}
      src="/svgs/logo.svg"
      alt={"Logo"}
      className={className}
      style={style}
    />
  );
}
