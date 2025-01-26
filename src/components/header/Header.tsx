import TopLinks from "./components/TopLinks";
import Link from "next/link";

import HbLineImage from "../images/HBLineImage";

import LocationButton from "./components/LocationButton";
import SearchBar from "./components/SearchBar";
import AccountButton from "./components/AccountButton";
import CartButton from "./components/CartButton";
import LogoImage from "../images/LogoImage";
import Categories from "../category_menu/Categories";
export default function Header() {

  return (
    <>
      <div className="xl:container mx-auto ">
        <TopLinks />
        <div className="flex gap-6 px-6 py-5 overflow-x-hidden justify-center items-center h-22">
           <div className="basis-1/6 h-full bg-blue-600 relative">
              <Link href="/" className="h-full w-full">
                <LogoImage/>
              </Link>
           </div>
            <SearchBar />
            <LocationButton/>
            <AccountButton />
            <CartButton />
        </div>
      </div>
      <div className="h-5 w-5">
      {/* <HbLineImage className="w-full min-h-2 object-cover" /> */}
      </div>
      <Categories />
    </>
  );
}
