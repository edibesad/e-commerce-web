import TopLinks from "./TopLinks";
import Link from "next/link";

import HbLineImage from "../images/HBLineImage";

import LocationButton from "./LocationButton";
import SearchBar from "./SearchBar";
import AccountButton from "./AccountButton";
import CartButton from "./CartButton";
import LogoImage from "../images/LogoImage";
import Categories from "../category_menu/Categories";
export default function Header() {
  const headerElements = [
    <SearchBar key="search-bar" />,
    <LocationButton key="location-button" />,
    <AccountButton key="account-button" />,
    <CartButton key="cart-button" />,
  ];
  return (
    <>
      <TopLinks />
      <div className="max-w-screen-xl w-full mx-auto overflow-hidden">
        <ul className="flex gap-6 px-6 py-5 items-center h-32 flex-shrink-0">
          <li className="place-content-center flex-shrink-0">
            <div className="px-4 mr-12">
              <Link href="/">
                <LogoImage />
              </Link>
            </div>
          </li>
          {/* Build other elements */}
          {headerElements.map((element) => (
            <li key={element.key} className="flex-shrink-0">
              {element}
            </li>
          ))}
        </ul>
      </div>
      <HbLineImage className="w-full" />
      <Categories />
    </>
  );
}
