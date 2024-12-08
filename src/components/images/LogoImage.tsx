import Image from "next/image";
import logo from "../../public/svgs/logo.svg";

export default function LogoImage({ className }: { className?: string }) {
  return <Image src={logo} alt={"Logo"} className={className} />;
}
