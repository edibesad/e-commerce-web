import Link from "next/link";

export default function AppNavbar(){
    return (
        
        <nav className="flex place-content-end px-5 text-[14px] pt-4 text-[#7b7b7b]">
            <ul className="hidden md:flex gap-4">
            <li><Link href="/">Siparişlerim</Link></li>
            <li><Link href="/">Süper Fiyat, Süper Teklif</Link></li> 
            <li><Link href="/">Yurt Dışından</Link></li>
            <li><Link href="/">Kampanyalar</Link></li>
            <li><Link href="/">Girişimci Kadınlar</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Müşteri Hizmetleri</Link></li>
            <li><Link href="/">Hepsiburada Premium</Link></li>
            <li><Link href="/">Hepsiburada'da Satıcı Ol</Link></li>
            </ul>
        </nav>
    );
}