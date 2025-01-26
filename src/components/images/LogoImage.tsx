import Image from "next/image";

export default function LogoImage({ className }: { className?: string }) {
  return <Image src="/svgs/logo.svg" fill alt={"Logo"} className={className} />;
}
