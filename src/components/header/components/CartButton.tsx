import CartImage from "../../images/CartImage";

export default function CartButton() {
  return (
    <button className="bg-[#919191] text-[var(--background)] font-bold text-xl rounded-lg p-2 px-8 w-44">
      <div className="flex gap-2 items-center px-2">
        <CartImage className="w-12" />
        <span>Sepet</span>
      </div>
    </button>
  );
}
