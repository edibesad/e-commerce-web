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
  const headerElements = [
    <SearchBar key="search-bar" />,
    <LocationButton key="location-button" />,
    <AccountButton key="account-button" />,
    <CartButton key="cart-button" />,
  ];
  return (
    <>
      <div className="xl:container mx-auto">
      <TopLinks />
        <ul className="flex gap-6 px-6 py-5 overflow-x-hidden justify-center items-center h-32">
          <li className="">
            <div className="image">
              <Link href="/">
                <LogoImage className="min-w-44"/>
              </Link>
            </div>
          </li>
          {headerElements.map((element) => (
            <li key={element.key} >
              {element}
            </li>
          ))}
        </ul>
      </div>
      <HbLineImage className="w-full min-h-2 object-cover" />
      <Categories />
    </>
  );
}
