export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-20">{children}</div>;
}
