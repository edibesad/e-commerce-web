export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`antialiased`}>{children}</div>
    </div>
  );
}
