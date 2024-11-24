"use client";

import { Button } from "@/components/ui/button";
import { SubType } from "../subscriptions/api/subscriptions.service.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubscriptionService } from "../subscriptions/api/subscriptions.service";
import { useAuth } from "../auth/providers/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Tariffs = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { type: SubType }) =>
      SubscriptionService().set(data.type),
    onSuccess: () => {
      setLoading(null);
      router.refresh();
      queryClient.refetchQueries({ queryKey: ["get-sub"], type: "active" });
    },
    onError: () => {
      setLoading(null);
    },
  });

  const handleClick = (type: SubType) => {
    if (!user) {
      router.push("/auth/login");
      return;
    }
    setLoading(type);
    mutation.mutate({ type });
  };

  const renderButton = (type: SubType, label: string) => (
    <Button
      onClick={() => handleClick(type)}
      className="w-full mt-2"
      size={"lg"}
      variant={"light"}
      disabled={loading === type}
    >
      {loading === type ? "Загрузка..." : label}
    </Button>
  );

  return (
    <div className="grid grid-cols-3 gap-8 md:gap-10 max-lg:max-w-sm m-auto">
      <div className="lg:col-span-1 col-span-full">
        <div className="relative bg-white p-4 rounded-lg border border-gray-200">
          <div className="gap-6 flex flex-col p-4">
            <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
              Для физических лиц
            </div>
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
          {renderButton("weekly", "Приобрести")}
        </div>
      </div>
      <div className="max-lg:row-start-3 lg:col-span-1 col-span-full">
        <div className="relative bg-primary rounded-lg p-4">
          <div className="gap-6 flex flex-col p-4">
            <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
              Для юридических лиц
            </div>
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
          {renderButton("annualy", "Приобрести")}
        </div>
      </div>
      <div className="lg:col-span-1 col-span-full">
        <div className="relative bg-white p-4 rounded-lg border border-gray-200">
          <div className="gap-6 flex flex-col p-4">
            <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
              Для физических лиц
            </div>
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
          {renderButton("monthly", "Приобрести")}
        </div>
      </div>
    </div>
  );
};
