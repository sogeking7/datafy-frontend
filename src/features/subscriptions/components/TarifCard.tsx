"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { SubscriptionService } from "../api/subscriptions.service";
import { MySkelet } from "@/ui/MySkelet";
import CalendarIcon from "@/../public/iconly/Light/Calendar.svg";
import { useEffect, useState } from "react";
import { SubType } from "../api/subscriptions.service.types";
import { formatDate } from "@/lib/utils";

// Define subscription types with strong typing
export type SubscriptionType = {
  to: string;
  title: string;
  description: string;
  days: number | null;
  period: string;
};

export const SUBSCRIPTION_TYPES: Record<SubType, SubscriptionType> = {
  basic: {
    to: "Для всех пользователей",
    title: "Суточный тариф",
    description: "Ограниченный просмотр, до 5 запросов в день",
    days: 0,
    period: "Нет срока окончания",
  },
  weekly: {
    to: "Для физических лиц",
    title: "Тариф “7 дней”",
    description: "Ограниченный просмотр,до 5 запросов в день",
    days: 7,
    period: "7 дней",
  },
  monthly: {
    to: "Для физических лиц",
    title: "Тариф “30 дней”",
    description: "Полный доступ на месяц, до 30 запросов в день",
    days: 30,
    period: "30 дней",
  },
  annualy: {
    to: "Для юридических лиц",
    title: "Тариф “1 год” ",
    description: "Без ограничений",
    days: 365,
    period: "365 дней",
  },
} as const;

/**
 * Calculate the end date based on the last payment and subscription days.
 * @param lastPayment - The starting date (ISO string)
 * @param days - Number of days to add
 */
export const calculateEndDate = (
  lastPayment: string,
  days: number | null
): string | null => {
  if (!lastPayment || days === null || days === 0) return null;

  const paymentDate = new Date(lastPayment);
  paymentDate.setDate(paymentDate.getDate() + days);

  return formatDate(String(paymentDate));
};

export const TarifCard = () => {
  const [subscription, setSubscription] = useState<SubscriptionType>(
    SUBSCRIPTION_TYPES.basic
  );
  const [endDate, setEndDate] = useState<string | null>(null);

  const { data, status, error, isPending } = useQuery({
    queryKey: ["get-sub"],
    queryFn: SubscriptionService().get,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  useEffect(() => {
    if (status === "success" && data?.data?.info) {
      const info = data.data.info;
      const subscriptionType =
        SUBSCRIPTION_TYPES[info.subscription_type as SubType] ??
        SUBSCRIPTION_TYPES.basic;

      setSubscription(subscriptionType);
      setEndDate(calculateEndDate(info.last_payment, subscriptionType.days));
    }
  }, [status, data]);

  if (isPending) {
    return <MySkelet className="h-full" />;
  }

  if (error) {
    return (
      <Card className="col-span-1 bg-white !rounded-2xl flex flex-col border-none">
        <CardContent className="p-4 sm:p-6">
          <p className="text-red-500">Ошибка: {error.message}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-1 relative bg-white rounded-lg md:rounded-xl flex flex-col border-none">
      <div className="bg-[#77BD8B] absolute left-0 top-0 rounded-l-xl w-1 md:w-2 h-full"></div>
      <CardHeader>
        <CardTitle>Тариф</CardTitle>
      </CardHeader>
      <CardContent className="flex-col flex gap-6 h-full">
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <h1 className="text-3xl font-semibold">{subscription.title}</h1>
          <div className="bg-[#f4f4f4] text-sm rounded-sm text-[#333] font-semibold px-6 py-1 w-max">
            {subscription.to}
          </div>
        </div>
        <div>
          <div className="flex gap-6 items-center mb-3">
            <p className="flex gap-2 items-center">
              <CalendarIcon className="stroke-gray-500 stroke-[1.5]" />
              <span className="leading-none text-gray-500 font-medium text-sm">
                Дата окончания
              </span>
            </p>
            <div className="text-sm text-[#00848C] bg-[#f5f5f5] rounded-sm px-3 font-semibold py-1">
              {endDate || "Нет срока окончания"}
            </div>
          </div>
          <p className="text-secondary font-medium text-sm">
            {subscription.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
