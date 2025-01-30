import HBLineImage from "../../images/HBLineImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div className={className} style={{ width: "418px" }}>
      <div className="relative">
        <div className="border border-[var(--primary)] rounded-lg flex items-center pl-4">
          <FontAwesomeIcon className="w-5 h-5 font-thin" icon={faSearch} />
          <input
            name="search"
            type="text"
            placeholder="Ürün, kategori veya marka ara"
            style={{ height: "52px", minWidth: "250px" }}
            className="px-4 relative z-1 focus:outline-none placeholder:text-[#484848] w-full"
          />
        </div>
        <div className="absolute bottom-0 w-full z-2">
          <HBLineImage className="h-1 px-1" />
        </div>
      </div>
    </div>
  );
}
