import CartImage from "../../images/CartImage";

export default function CartButton() {
  return (
    <button className="bg-[#919191] border-2 border-solid border-[#919191]text-gray-700 rounded-lg p-2 w-44">
      <div className="flex gap-2 items-center px-2">
        <div className="basis-1/3 relative w-full h-full">
          <CartImage />
        </div>
        <div>
          <h1 className="basis-2/3 font-bold text-left text-nowrap">Sepet</h1>
        </div>
      </div>
    </button>
  );
}
