import { DiscounCard } from "@/features/pricing/DiscountCard";
import { Tariffs } from "@/features/pricing/Tariffs";
import { Features } from "@/features/sales/Features";
import { SalesHeader } from "@/features/sales/Header";
import { Hero } from "@/features/sales/Hero";
import { ServiceCore } from "@/features/sales/ServiceCore";

export default function Home() {
  return (
    <>
      <section className="background-image">
        <SalesHeader />
        <main className="bg-background-gray min-h-[calc(100vh-100px)] pt-[12vh]">
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
    </>
  );
}
