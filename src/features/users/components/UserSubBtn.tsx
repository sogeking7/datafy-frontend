import { SubscriptionService } from "@/features/subscriptions/api/subscriptions.service";
import { useQuery } from "@tanstack/react-query";
import CalendarIcon from "@/../public/iconly/Light/Calendar.svg";
import { MySkelet } from "@/ui/MySkelet";
import { useEffect, useState } from "react";
import {
  calculateEndDate,
  SUBSCRIPTION_TYPES,
  SubscriptionType,
} from "@/features/subscriptions/components/TarifCard";
import { SubType } from "@/features/subscriptions/api/subscriptions.service.types";
import { Skeleton } from "@/components/ui/skeleton";

export const UserSubBtn = () => {
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
    return (
      <div className="flex flex-col gap-1 items-end">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Ошибка: {error.message}</p>;
  }

  return (
    <div className="max-md:hidden">
      <p className="text-sm text-sidebar font-semibold text-right">
        {subscription.to}
      </p>
      <div className="flex gap-3 items-center">
        <p className="flex gap-2 items-center">
          <CalendarIcon className="stroke-gray-400 stroke-[1.5]" />
          <span className="max-md:hidden leading-none text-gray-400 font-medium text-sm">
            Дата окончания:
          </span>
        </p>
        <div className="text-sm text-sidebar bg-[#f5f5f5] rounded-sm px-3 font-semibold py-1">
          {endDate || "Нет срока окончания"}
        </div>
      </div>
    </div>
  );
};
