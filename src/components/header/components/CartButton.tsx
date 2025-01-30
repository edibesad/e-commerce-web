import CartImage from "../../images/CartImage";

export default function CartButton() {
  return (
    <button className="bg-[#919191] border-2 border-solid border-[#919191]text-gray-700 rounded-lg p-2 w-36 h-12">
      <div className="flex justify-evenly items-center px-2">
        <CartImage className="h-5 w-5" />
        <div>
          <h1 className="font-bold text-left text-nowrap text-white">Sepet</h1>
        </div>
      </div>
    </button>
  );
}
