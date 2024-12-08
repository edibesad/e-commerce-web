import Image from "next/image";
import TopLinks from "./TopLinks";
import Link from "next/link";

import logo from "../public/svgs/logo.svg";
import line from "../public/svgs/line.svg";
import location from "../public/svgs/location.svg";

export default function Header() {
  return (
    <>
      <TopLinks />
      <div className="px-64 py-5">
        <ul className="flex gap-6">
          <li className="place-content-center">
            <div className="px-4 mr-12">
              <Link href="/">
                <Image src={logo} alt={"logo"} />
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="place-items-end">
              <input
                name="search"
                type="text"
                placeholder="Ürün, kategori veya marka ara"
                style={{ width: "418px", height: "50px" }}
                className="border border-[var(--primary)] rounded-lg px-4 relative z-1 focus:outline-none"
              />
              <Image
                src={line}
                alt="line"
                className="absolute left-[5px] top-[48px] w-[409px] z-2"
              />
            </div>
          </li>
          <li className="place-content-center">
            <button className="place-content-center">
              <div className="flex">
                <Image src={location} className="w-12" alt="location" />
                <span className="text-[#7b7b7b] self-center">Konum</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
