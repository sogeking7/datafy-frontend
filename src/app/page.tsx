import { DiscounCard } from "@/features/pricing/DiscountCard";
import { Tariffs } from "@/features/pricing/Tariffs";
import { Faq } from "@/features/sales/Faq";
import { Features } from "@/features/sales/Features";
import { Footer } from "@/features/sales/Footer";
import { SalesHeader } from "@/features/sales/Header";
import { Hero } from "@/features/sales/Hero";
import { ServiceCore } from "@/features/sales/ServiceCore";

export default function Home() {
  return (
    <>
      <section id="start" className="background-image">
        <SalesHeader variant="constrainedPadded"/>
        <main className="bg-background-gray pb-[250px] pt-[150px]">
          <Hero />
        </main>
      </section>
      <section id="bonuses" className="bg-white pt-16">
        <DiscounCard />
      </section>
      <section id="services" className="bg-white py-16">
        <ServiceCore />
      </section>
      <section id="counterparties" className="bg-background py-20">
        <Features />
      </section>
      <section id="tariffs" className="bg-background py-20">
        <Tariffs />
      </section>
      <section id="faq" className="py-20 bg-white">
        <Faq />
      </section>
      <Footer />
    </>
  );
}
