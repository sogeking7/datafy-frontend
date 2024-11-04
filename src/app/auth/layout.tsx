import { SalesHeader } from "@/features/sales/SalesHeader";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SalesHeader variant="constrainedPadded" />
      <main className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)] w-full flex justify-center items-center">
        {children}
      </main>
    </>
  );
}
