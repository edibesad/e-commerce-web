import Image from "next/image";

export default function CartImage({ className }: { className?: string }) {
  return <Image src="/svgs/cart.svg" fill alt="Cart" className={className} />;
}
