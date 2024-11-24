"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { SubscriptionService } from "../api/subscriptions.service";
import { MySkelet } from "@/ui/MySkelet";
import Calendar from "@/../public/iconly/Light/Calendar.svg";
import { useEffect, useState } from "react";
import { SubType } from "../api/subscriptions.service.types";
import { formatDate } from "@/lib/utils";

type SubscriptionType = {
  to: string;
  title: string;
  description: string;
  days: number | null;
  period: string;
};

const types: Record<SubType, SubscriptionType> = {
  basic: {
    to: "Для всех пользователей",
    title: "Суточный тариф",
    description: "Ограниченный просмотр, до 5 запросов в день",
    days: 0,
    period: "Нет срока окончания",
  },
  weekly: {
    to: "Для физических лиц",
    title: "Базовый тариф",
    description: "Ограниченный просмотр,до 5 запросов в день",
    days: 7,
    period: "7 дней",
  },
  monthly: {
    to: "Для физических лиц",
    title: "Стандартный тариф",
    description: "Полный доступ на месяц, до 30 запросов в день",
    days: 30,
    period: "30 дней",
  },
  annualy: {
    to: "Для юридических лиц",
    title: "Профессиональный тариф",
    description: "Полный доступ на год,до 200 запросов в день",
    days: 365,
    period: "365 дней",
  },
} as const;

export const TarifCard = () => {
  const [curTarif, curTarifSet] = useState<SubscriptionType>(types.basic);
  const [lastPayment, lastPaymentSet] = useState("");
  const { data, status, isPending, error } = useQuery({
    queryKey: ["get-sub"],
    queryFn: async () => await SubscriptionService().get(),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (status === "success") {
      const d = data.data.info;
      const subscription_type: SubType = d.subscription_type;
      lastPaymentSet(d.last_payment);
      curTarifSet(types[subscription_type]);
    }
  }, [status, data]);

  if (isPending) {
    return <MySkelet className="h-full" />;
  }

  if (error) return "An error has occurred: " + error.message;

  if (data.success) {
    console.log(data.data.info);
    return (
      <Card className="col-span-1 relative bg-white !rounded-2xl flex flex-col border-none">
        <div
          className={`bg-[#77BD8B] absolute left-0 top-0 rounded-l-xl w-1 md:w-[10px] h-full`}
        ></div>
        <CardContent className="flex-col flex gap-6 h-full">
          <h2 className="font-semibold">Тариф</h2>
          <div className=" flex justify-between flex-wrap gap-3 items-center">
            <h1 className="text-3xl font-semibold">{curTarif.title}</h1>
            <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
              {curTarif.to}
            </div>
          </div>
          <div>
            <div className="flex gap-6 items-center mb-3">
              <p className="flex gap-2 items-center">
                <Calendar className="stroke-gray-500 stroke-[1.5]" />
                <span className="leading-none text-gray-500 font-medium text-sm">
                  Дата окончания
                </span>
              </p>
              <div className="text-sm text-[#00848C] bg-[#f5f5f5] rounded-sm px-3 font-semibold py-1">
                {formatDate(lastPayment)}
              </div>
            </div>
            <p className="text-secondary font-medium text-sm">
              {curTarif.description}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-1 bg-white !rounded-2xl flex flex-col border-none">
      <CardContent className="p-4 sm:p-6">Tarpif</CardContent>
    </Card>
  );
};
