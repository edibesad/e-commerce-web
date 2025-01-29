import TopLinks from "./components/TopLinks";

import LocationButton from "./components/LocationButton";
import SearchBar from "./components/SearchBar";
import AccountButton from "./components/AccountButton";
import CartButton from "./components/CartButton";
import LogoImage from "../images/LogoImage";
import Categories from "../category_menu/Categories";
export default function Header() {
  return (
    <div className="relative">
      <div className="xl:container mx-auto ">
        <TopLinks />
      </div>
      <div className="container mx-auto relative">
        <div className="flex items-center justify-evenly h-16 relative p-12">
          <LogoImage className="basis-1/12" />
          <SearchBar className="basis-1/3" />
          <LocationButton />
          <AccountButton />
          <CartButton />
        </div>
      </div>
      <Categories />
    </div>
  );
}
