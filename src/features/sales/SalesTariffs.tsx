import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Link from "next/link";
import { Tariffs } from "./Tariffs";

export const SalesTariffs = () => {
  return (
    <Container>
      <h1 className="font-semibold text-4xl md:text-5xl text-center">
        Тарифные планы
      </h1>
      <div className="mt-12">
        <Tariffs />
      </div>

      <div className="max-lg:hidden bg-white mt-10 p-9 rounded-lg">
        <div className="bg-[#f4f4f4] text-sm rounded-sm text-secondary font-semibold px-6 py-1 w-max">
          Для всех пользователей
        </div>
        <div className="flex max-md:flex-col max-md:gap-8 justify-between mt-10">
          <div>
            <h1 className="font-semibold text-3xl">Суточный тариф</h1>
            <p className="text-secondary mt-3 font-semibold text-lg">
              Ограниченный просмотр, до 5 запросов в день
            </p>
          </div>
          <Link href={"/auth/create-account"}>
            <Button size={"lg"} className="px-24">
              Бесплатно ₸
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
