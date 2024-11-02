import MobileBottomBar from "@/features/sales/MobileBottomBar";
import { SalesFooter } from "@/features/sales/SalesFooter";
import { SalesHeader } from "@/features/sales/SalesHeader";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen pb-[690px] md:pb-[calc(470px)] lg:pb-[calc(430px)] flex-col bg-background">
      <SalesHeader variant="largePadded" className="bg-white" />
      <div className="bg-background md:min-h-[calc(100vh-74px)] min-h-[calc(100vh-64px)]">
        {children}
      </div>
      <SalesFooter />
      <MobileBottomBar />
    </div>
  );
}
