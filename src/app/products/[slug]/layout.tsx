import Header from "@/components/header/Header";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={`md:px-72 px-2`}>{children}</div>
    </>
  );
}
