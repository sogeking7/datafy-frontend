import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";

export const Tariffs = () => {
  return (
    <Container>
      <h1 className="font-semibold text-5xl text-center">Тарифные планы</h1>
      <div className="mt-12 flex flex-row gap-10">
        <div className="w-[33%]">
          <div className="relative  bg-background p-9 gap-6 flex flex-col rounded-lg">
            <div className="bg-white  text-sm rounded-sm text-secondary font-semibold px-6 py-1 w-max">
              Для физических лиц
            </div>
            <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary " />
            <h1 className="font-semibold text-3xl w-min">Базовый тариф</h1>
            <p className="text-secondary font-semibold text-base">
              <span className="block">Ограниченный просмотр,</span>
              до 5 запросов в день
            </p>
            <div className="text-black bg-white w-full rounded-md font-semibold text-lg py-2 flex justify-center">
              7 дней
            </div>
            <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
            <p className="text-primary font-semibold text-3xl">10,000 ₸</p>
          </div>
          <Button className="w-full mt-2" size={"lg"} variant={"secondary"}>
            Приобрести
          </Button>
        </div>
        <div className="w-[33%] bg-primary rounded-lg">
          <div className="relative  p-9 gap-6 flex flex-col ">
            <div className="bg-prime text-sm rounded-sm text-white font-semibold px-6 py-1 w-max">
              Для юридических лиц
            </div>
            <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary" />
            <h1 className="font-semibold text-3xl w-min text-white">
              Профессиональный тариф
            </h1>
            <p className="text-secondary font-semibold text-base">
              <span className="block">Полный доступ на год,</span>
              до 200 запросов в день
            </p>
            <div className="text-white bg-prime w-full rounded-md font-semibold text-lg py-2 flex justify-center">
              365 дней
            </div>
            <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
            <p className="text-primary font-semibold text-3xl text-white">
              1 500 000 ₸
            </p>
          </div>
          <div className="pb-3 px-3 pt-2">
            <Button size={"lg"} variant={"light"} className="w-full">
              Приобрести
            </Button>
          </div>
        </div>
        <div className="w-[33%]">
          <div className="relative  bg-background p-9 gap-6 flex flex-col rounded-lg">
            <div className="bg-white  text-sm rounded-sm text-secondary font-semibold px-6 py-1 w-max">
              Для физических лиц
            </div>
            <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary " />
            <h1 className="font-semibold text-3xl w-min">Стандартный тариф</h1>
            <p className="text-secondary font-semibold text-base">
              <span className="block">Полный доступ на месяц, </span>
              до 30 запросов в день
            </p>
            <div className="text-black bg-white w-full rounded-md font-semibold text-lg py-2 flex justify-center">
              30 дней
            </div>
            <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
            <p className="text-primary font-semibold text-3xl">30,000 ₸</p>
          </div>
          <Button className="w-full mt-2" size={"lg"} variant={"secondary"}>
            Приобрести
          </Button>
        </div>
      </div>
      <div className="bg-background mt-10 p-9 rounded-lg">
        <div className="bg-white  text-sm rounded-sm text-secondary font-semibold px-6 py-1 w-max">
          Для всех пользователей
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <h1 className="font-semibold text-3xl">Суточный тариф</h1>
            <p className="text-secondary mt-3 font-semibold text-lg">
              Ограниченный просмотр, до 5 запросов в день
            </p>
          </div>
          <Button size={"lg"} variant={"light"} className="px-24">
            Бесплатно ₸
          </Button>
        </div>
      </div>
    </Container>
  );
};
