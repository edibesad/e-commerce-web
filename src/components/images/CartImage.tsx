import Image from "next/image";

export default function CartImage({ className }: { className?: string }) {
  return (
    <Image
      src="/svgs/cart.svg"
      width={1920}
      height={1080}
      alt="Cart"
      className={className}
    />
  );
}
