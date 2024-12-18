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
    <nav className="text-[11px]">
      <ul className="flex justify-end gap-[14px]">
        {items.map((item) => (
          <li key={item}>
            <Link className="text-nowrap" href="/">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
