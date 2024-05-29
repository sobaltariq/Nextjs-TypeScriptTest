export default function Layout({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="flex justify-between gap-4">
      {children}
      {left}
      {right}
    </div>
  );
}
