import Link from "next/link";

const items = [
  "Sipraişlerim",
  "Süper Fiyat, Süper Teklif",
  "Yurt Dışından",
  "Kampanyalar",
  "Girişimci Kadınlar",
  "Müşteri Hizmetleri",
  "Hepsiburada Premium",
  "Hepsiburada'da Satıcı Ol",
];

export default function TopLinks() {
  return (
    <div className="text-[11px] pt-3 pr-24 md:block hidden">
      <div className="flex justify-end gap-[14px]">
        {items.map((item, index) => (
          <div key={index}>
            <Link className="text-nowrap text-[#7B7B7B] font-bold" href="/">
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
