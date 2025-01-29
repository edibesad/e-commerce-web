import HBLineImage from "../../images/HBLineImage";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative">
        <input
          name="search"
          type="text"
          placeholder="Ürün, kategori veya marka ara"
          style={{ width: "100%", height: "44px" }}
          className="border border-[var(--primary)] rounded-lg px-4 relative z-1 focus:outline-none placeholder:text-[#484848]"
        />
        <div className="absolute bottom-0 w-full z-2">
          <HBLineImage className="h-1 px-1" />
        </div>
      </div>
    </div>
  );
}
