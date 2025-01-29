import Image from "next/image";

export default function UserImage({ className }: { className?: string }) {
  return (
    <Image
      src="svgs/user.svg"
      height={1920}
      width={1080}
      className={className}
      alt="user"
    />
  );
}
