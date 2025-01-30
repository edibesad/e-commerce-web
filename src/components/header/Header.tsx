import TopLinks from "./components/TopLinks";

import LocationButton from "./components/LocationButton";
import SearchBar from "./components/SearchBar";
import AccountButton from "./components/AccountButton";
import CartButton from "./components/CartButton";
import LogoImage from "../images/LogoImage";
import Categories from "../category_menu/Categories";
export default function Header() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col gap-3 px-64 mx-auto">
        <TopLinks />
        <div className="flex items-center justify-center relative pb-4">
          <LogoImage className="basis-1/12 mr-14" />
          <SearchBar className="basis-2/6" />
          <div className="flex items-center justify-between gap-5 basis-1/12">
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
