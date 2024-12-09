import HBLineImage from "../../images/HBLineImage";

export default function SearchBar() {
  return (
    <div className="place-items-end relative">
      <input
        name="search"
        type="text"
        placeholder="Ürün, kategori veya marka ara"
        style={{ width: "418px", height: "60px" }}
        className="border border-[var(--primary)] rounded-lg px-4 relative z-1 focus:outline-none"
      />
      <HBLineImage className="absolute left-[5px] top-[58px] w-[409px] z-2" />
    </div>
  );
}
