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
      <section id="start" className="background-image">
        <SalesHeader variant="constrainedPadded" />
        <div className="bg-background-gray pb-[250px] pt-[150px]">
          <SalesHero />
        </div>
      </section>
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
    </>
  );
}
