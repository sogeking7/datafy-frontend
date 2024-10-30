import { Footer } from "@/features/sales/Footer";
import { SalesHeader } from "@/features/sales/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SalesHeader variant="largePadded" className="bg-white"/>
      <div className="bg-background md:min-h-[calc(100vh-74px)] min-h-[calc(100vh-64px)]">
        {children}
      </div>
      <Footer />
    </>
  );
}
