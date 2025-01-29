import CartImage from "../../images/CartImage";

export default function CartButton() {
  return (
    <div className="bg-[#919191] text-[var(--background)] font-bold text-xl rounded-lg px-8 w-44 h-full">
      <div className="flex gap-2 items-center px-2 relative">
        <div className="basis-1/3 relative w-full h-full">
          <CartImage />
        </div>
        <span>Sepet</span>
      </div>
    </div>
  );
}
