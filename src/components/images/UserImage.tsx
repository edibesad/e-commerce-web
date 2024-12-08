import Image from "next/image";
import user from "../../public/svgs/user.svg";

export default function UserImage({ className }: { className?: string }) {
  return <Image src={user} className={className} alt="user" />;
}
