import HBLineImage from "../../images/HBLineImage";

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        name="search"
        type="text"
        placeholder="Ürün, kategori veya marka ara"
        style={{ width: "418px", height: "60px" }}
        className="border border-[var(--primary)] rounded-lg px-4 relative z-1 focus:outline-none"
      />
      <HBLineImage className="absolute bottom-0 px-1 z-2" />
    </div>
  );
}
