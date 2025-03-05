export function AccountMenuElement({
  children,
}: {
  children?: React.ReactNode | undefined;
}) {
  return (
    <div className="flex items-center justify-start pl-2 gap-1 hover:text-[#919191] text-[#484848] text-sm font-bold">
      {children}
    </div>
  );
}
