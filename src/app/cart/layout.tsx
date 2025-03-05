import Header from "@/components/header/Header";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={`md:px-64 px-2`}>{children}</div>
    </>
  );
}
