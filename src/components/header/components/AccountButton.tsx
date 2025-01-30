import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function AccountButton() {
  return (
    <button className="bg-white border-2 border-solid border-[#919191] text-[#484848] rounded-md w-40 h-12">
      <div className="flex gap-1 items-center justify-center">
        <FontAwesomeIcon icon={faUser} width={15} height={15} color="#919191" />
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col gap-0 leading-none pl-2 text-[11px]">
            <span className="font-bold text-left text-[15px]">Giriş Yap</span>
            <span className="text-left ">veya üye ol</span>
          </div>
          <FontAwesomeIcon
            icon={faArrowDown}
            width={20}
            height={20}
            color="#919191"
          />
        </div>
      </div>
    </button>
  );
}
