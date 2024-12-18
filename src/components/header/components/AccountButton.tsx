import UserImage from "../../images/UserImage";

export default function AccountButton() {
  return (
    <button className="bg-white border-2 border-solid border[#919191] text-gray-700 rounded-lg p-2 h-18 w-44">
      <div className="flex gap-2 items-center px-2">
        <UserImage className="w-10" />
        <div>
          <h1 className="font-bold text-left text-nowrap">Giriş Yap</h1>
          <span className="font-thin text-nowrap">veya Üye Ol</span>
        </div>
      </div>
    </button>
  );
}
