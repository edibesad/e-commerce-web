import Link from "next/link";

export default function TopLinks() {
  return (
    <nav className="flex-nowrap text-[11px] pt-3 px-5 pr-60 text-[#7b7b7b] whitespace-nowrap font-bold">
      <ul className="flex gap-[14px] place-content-end">
        <li>
          <Link href="/">Siparişlerim</Link>
        </li>
        <li>
          <Link href="/">Süper Fiyat, Süper Teklif</Link>
        </li>
        <li>
          <Link href="/">Yurt Dışından</Link>
        </li>
        <li>
          <Link href="/">Kampanyalar</Link>
        </li>
        <li>
          <Link href="/">Girişimci Kadınlar</Link>
        </li>
        <li>
          <Link href="/">Müşteri Hizmetleri</Link>
        </li>
        <li>
          <Link href="/">Hepsiburada Premium</Link>
        </li>
        <li>
          <Link href="/">Hepsiburada&apos;da Satıcı Ol</Link>
        </li>
      </ul>
    </nav>
  );
}
