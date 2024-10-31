import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";

export const SalesTariffs = () => {
  return (
    <Container>
      <h1 className="font-semibold text-4xl md:text-5xl text-center">
        Тарифные планы
      </h1>
      <div className="mt-12 grid grid-cols-3 gap-8 md:gap-10 max-lg:max-w-sm m-auto">
        <div className="lg:col-span-1 col-span-full">
          <div className="relative bg-white p-4 rounded-lg">
            <div className="gap-6 flex flex-col p-4">
              <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
                Для физических лиц
              </div>
              <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary " />
              <h1 className="font-semibold text-3xl w-min">Базовый тариф</h1>
              <p className="text-secondary font-semibold text-base">
                <span className="block">Ограниченный просмотр,</span>
                до 5 запросов в день
              </p>
              <div className="bg-[#f5f5f5] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
                7 дней
              </div>
              <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
              <p className="text-primary font-semibold text-3xl">10,000 ₸</p>
            </div>
            <Button className="w-full mt-2" size={"lg"} variant={"light"}>
              Приобрести
            </Button>
          </div>
        </div>
        <div className="max-lg:row-start-3 lg:col-span-1 col-span-full">
          <div className="relative bg-primary rounded-lg p-4">
            <div className="gap-6 flex flex-col p-4">
              <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
                Для юридических лиц
              </div>
              <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary" />
              <h1 className="font-semibold text-3xl w-min text-white">
                Профессиональный тариф
              </h1>
              <p className="text-[#f6f6f6] font-semibold text-base">
                <span className="block">Полный доступ на год,</span>
                до 200 запросов в день
              </p>
              <div className="text-accent-foreground bg-[#f4f4f4] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
                365 дней
              </div>
              <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
              <p className="text-primary font-semibold text-3xl text-white">
                1 500 000 ₸
              </p>
            </div>

            <Button size={"lg"} variant={"light"} className="w-full">
              Приобрести
            </Button>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-full">
          <div className="relative  bg-white p-4 rounded-lg">
            <div className="gap-6 flex flex-col p-4">
              <div className="bg-[#f4f4f4]  text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
                Для физических лиц
              </div>
              <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary " />
              <h1 className="font-semibold text-3xl w-min">
                Стандартный тариф
              </h1>
              <p className="text-secondary font-semibold text-base">
                <span className="block">Полный доступ на месяц, </span>
                до 30 запросов в день
              </p>
              <div className="bg-[#f5f5f5] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
                30 дней
              </div>
              <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
              <p className="text-primary font-semibold text-3xl">30,000 ₸</p>
            </div>
            <Button className="w-full mt-2" size={"lg"} variant={"light"}>
              Приобрести
            </Button>
          </div>
        </div>
        <div className="lg:hidden lg:col-span-1 col-span-full">
          <div className="relative  bg-white p-4 rounded-lg">
            <div className="gap-6 flex flex-col p-4">
              <div className="bg-[#f4f4f4]  text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
                Для всех пользователей
              </div>
              <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary " />
              <h1 className="font-semibold text-3xl w-min">Суточный тариф</h1>
              <p className="text-secondary font-semibold text-base">
                <span className="block">Ограниченный просмотр, </span>
                до 5 запросов в день
              </p>
              <div className="bg-[#f5f5f5] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
                30 дней
              </div>
              <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
            </div>
            <Button className="w-full mt-2" size={"lg"} variant={"light"}>
              Бесплатно ₸
            </Button>
          </div>
        </div>
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
          <Button size={"lg"} className="px-24">
            Бесплатно ₸
          </Button>
        </div>
      </div>
    </Container>
  );
};
