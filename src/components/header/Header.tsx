import TopLinks from "./components/TopLinks";

import LocationButton from "./components/LocationButton";
import SearchBar from "./components/SearchBar";
import AccountButton from "./components/account_button/AccountButton";
import CartButton from "./components/CartButton";
import LogoImage from "../images/LogoImage";
import Categories from "../category_menu/Categories";
export default function Header() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-3 md:px-64 px-2 mx-auto">
        <TopLinks />
        <div className="flex md:flex-row md:items-center md:justify-center flex-col items-start relative pb-4">
          <LogoImage className="md:basis-1/12 md:mr-14 md:w-full md:h-full w-32 h-11" />
          <SearchBar className="md:basis-2/6" />
          <div className="items-center justify-between gap-5 basis-1/12 md:flex hidden">
            <LocationButton />
            <AccountButton />
            <CartButton />
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
}
