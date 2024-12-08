interface CategoryItemProps {
  isFirst?: boolean;
  name: string;
}

export default function CategoryItem({
  isFirst = false,
  name,
}: CategoryItemProps) {
  return (
    <div className="relative text-center px-4 text-[#919191] hover:bg-white  hover:text-[var(--primary)] ">
      {isFirst && (
        <div className="absolute left-0 top-1/2 h-8 border-l border-solid border-[#ddd] translate-y-[-50%]"></div>
      )}
      <span className="font-bold text-l">{name}</span>
      <div className="absolute right-0 top-1/2 h-8 border-r border-solid border-[#ddd] translate-y-[-50%]"></div>
    </div>
  );
}
