import cart from "../../public/svgs/cart.svg";
import Image from "next/image";

export default function CartImage({ className }: { className?: string }) {
  return <Image src={cart} alt="Cart" className={className} />;
}
