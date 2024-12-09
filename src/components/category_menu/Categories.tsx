import CategoryItem from "./components/CategoryItem";

export default function Categories() {
  const items = [
    <CategoryItem key={1} isFirst={true} name="Elektronik" />,
    <CategoryItem key={2} name="Moda" />,
    <CategoryItem key={3} name="Ev, Yaşam, Kırtasiye, Ofis" />,
    <CategoryItem key={4} name="Oto, Bahçe, Yapı, Market" />,
    <CategoryItem key={5} name="Anne, Bebek, Oyuncak" />,
    <CategoryItem key={6} name="Spor, Outdoor" />,
    <CategoryItem key={7} name="Kozmetik, Kişisel Bakım" />,
    <CategoryItem key={8} name="Süpermarket, Pet Shop" />,
    <CategoryItem key={9} name="Kitap, Müzik, Film, Hobi" />,
  ];

  return (
    <ul className="flex w-full px-64 bg-[#f5f5f5]">
      {items.map((item) => (
        <li
          className="place-content-center p-0 text-[#919191] hover:bg-white  hover:text-[var(--primary)] cursor-pointer"
          key={item.key}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
