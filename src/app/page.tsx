import MobileBottomBar from "@/features/sales/MobileBottomBar";
import { SalesDiscounCard } from "@/features/sales/SalesDiscountCard";
import { SalesFaq } from "@/features/sales/SalesFaq";
import { SalesFeatures } from "@/features/sales/SalesFeatures";
import { SalesFooter } from "@/features/sales/SalesFooter";
import { SalesHeader } from "@/features/sales/SalesHeader";
import { SalesHero } from "@/features/sales/SalesHero";
import { SalesService } from "@/features/sales/SalesService";
import { SalesTariffs } from "@/features/sales/SalesTariffs";

export default function Home() {
  return (
    <>
      <div className=" relative flex min-h-[100svh] pb-[600px] md:pb-[calc(470px)] lg:pb-[calc(430px)] flex-col bg-white">
        <section id="start" className="background-image">
          <SalesHeader variant="constrainedPadded" />
          <div className="bg-background-gray pb-[250px] pt-[100px] md:pt-[150px]">
            <SalesHero />
          </div>
        </section>
        <MobileBottomBar />
        <section id="bonuses" className="bg-white pt-16">
          <SalesDiscounCard />
        </section>
        <section id="services" className="bg-white py-16">
          <SalesService />
        </section>
        <section id="counterparties" className="bg-background py-20">
          <SalesFeatures />
        </section>
        <section id="tariffs" className="bg-background py-20">
          <SalesTariffs />
        </section>
        <section id="faq" className="py-20 bg-white">
          <SalesFaq />
        </section>
        <SalesFooter />
      </div>
    </>
  );
}
