"use client";

import { Button } from "@/components/ui/button";
import { SubType } from "../subscriptions/api/subscriptions.service.types";
import { useMutation } from "@tanstack/react-query";
import { SubscriptionService } from "../subscriptions/api/subscriptions.service";

export const Tariffs = () => {
  const mutation = useMutation({
    mutationFn: (data: { type: SubType }) =>
      SubscriptionService().set({ subscription_type: data.type }),
  });

  const handleClick = (type: SubType) => {
    mutation.mutate({ type });
  };

  return (
    <div className="grid grid-cols-3 gap-8 md:gap-10 max-lg:max-w-sm m-auto">
      <div className="lg:col-span-1 col-span-full">
        <div className="relative bg-white p-4 rounded-lg border border-gray-200">
          <div className="gap-6 flex flex-col p-4">
            <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
              Для физических лиц
            </div>
            {/* <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary " /> */}
            <h1 className="font-semibold text-3xl">Тариф “7 дней”</h1>
            <p className="text-secondary font-medium text-base text-balance">
              Тарифный план предназначен для краткосрочного доступа к системе.
              Подходит для тех пользователей, которым требуется временный доступ
              к расширенному функционалу.
            </p>
            <div className="bg-[#f5f5f5] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
              7 дней
            </div>
            <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
            <p className="text-primary font-semibold text-3xl">10,000 ₸</p>
          </div>
          <Button
            onClick={() => handleClick("weekly")}
            className="w-full mt-2"
            size={"lg"}
            variant={"light"}
          >
            Приобрести
          </Button>
        </div>
      </div>
      <div className="max-lg:row-start-3 lg:col-span-1 col-span-full">
        <div className="relative bg-primary rounded-lg p-4 ">
          <div className="gap-6 flex flex-col p-4">
            <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
              Для юридических лиц
            </div>
            {/* <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary" /> */}
            <h1 className="font-semibold text-3xl text-white">Тариф “1 год”</h1>
            <p className="text-[#f6f6f6] font-medium text-base">
              Тарифный план, разработанный специально для юридических лиц,
              которым требуется долгосрочный доступ к системе.
            </p>
            <div className="text-accent-foreground bg-[#f4f4f4] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
              365 дней
            </div>
            <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
            <p className="text-primary font-semibold text-3xl text-white">
              1 500 000 ₸
            </p>
          </div>
          <Button
            onClick={() => handleClick("annualy")}
            size={"lg"}
            variant={"light"}
            className="w-full"
          >
            Приобрести
          </Button>
        </div>
      </div>
      <div className="lg:col-span-1 col-span-full">
        <div className="relative  bg-white p-4 rounded-lg border border-gray-200">
          <div className="gap-6 flex flex-col p-4">
            <div className="bg-[#f4f4f4]  text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
              Для физических лиц
            </div>
            {/* <hr className="h-[1px] border-none w-[62%] top-[32%] right-0 absolute bg-gradient-to-r from-secondary " /> */}
            <h1 className="font-semibold text-3xl">Тариф “30 дней”</h1>
            <p className="text-secondary font-medium text-base text-balance">
              Оптимальный тарифный план для компаний, которым необходим
              регулярный доступ к системе на протяжении месяца.
            </p>
            <div className="bg-[#f5f5f5] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
              30 дней
            </div>
            <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
            <p className="text-primary font-semibold text-3xl">30,000 ₸</p>
          </div>
          <Button
            onClick={() => handleClick("monthly")}
            className="w-full mt-2"
            size={"lg"}
            variant={"light"}
          >
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
            <p className="text-secondary font-medium text-base text-balance">
              <span className="block">Ограниченный просмотр, </span>
              до 5 запросов в день
            </p>
            <div className="bg-[#f5f5f5] w-full rounded-md font-semibold text-lg py-2 flex justify-center">
              30 дней
            </div>
            <hr className="h-[1px] border-none w-full bg-gradient-to-r from-secondary " />
          </div>
          <Button
            onClick={() => handleClick("basic")}
            className="w-full mt-2"
            size={"lg"}
            variant={"light"}
          >
            Бесплатно ₸
          </Button>
        </div>
      </div>
    </div>
  );
};
