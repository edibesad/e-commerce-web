import TopLinks from "./components/TopLinks";
import Link from "next/link";

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
          <div className="basis-1/6 h-full relative">
            <Link href="/">
              <LogoImage className="w-full h-full" />
            </Link>
          </div>
          <div className="basis-2/6 h-full">
            <SearchBar />
          </div>
          <div className="basis-1/12 h-full">
            <LocationButton />
          </div>
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
