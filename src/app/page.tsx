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
      <section className="background-image">
        <SalesHeader />
        <main className="bg-background-gray pb-[250px] pt-[150px]">
          <Hero />
        </main>
      </section>
      <section className="bg-white pt-16">
        <DiscounCard />
      </section>
      <section className="bg-white py-16">
        <ServiceCore />
      </section>
      <section className="py-20">
        <Features />
      </section>
      <section className="bg-white py-20">
        <Tariffs />
      </section>
      <section className="py-20">
        <Faq />
      </section>
      <Footer />
    </>
  );
}
