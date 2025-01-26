import Image from "next/image";

export default function UserImage({ className }: { className?: string }) {
  return <Image src="svgs/user.svg" fill className={className} alt="user" />;
}
