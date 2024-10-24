import { DiscounCard } from "@/features/pricing/DiscountCard";
import { SalesHeader } from "@/features/sales/Header";
import { Hero } from "@/features/sales/Hero";

export default function Home() {
  return (
    <>
      <section className="background-image">
        <SalesHeader />
        <main className="bg-background-gray min-h-[calc(100vh-100px)] pt-[12vh]">
          <Hero />
        </main>
      </section>
      <section className="bg-white py-10">
        <DiscounCard />
      </section>
    </>
  );
}
