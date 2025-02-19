import Header from "@/components/header/Header";

export default function HomeLayout({
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
