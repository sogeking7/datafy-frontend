import { Card, CardTitle } from "@/components/ui/card";
import CalendarIcon from "@/../public/iconly/Light/Calendar.svg";
import { SubType } from "@/features/subscriptions/api/subscriptions.service.types";

const SUBSCRIPTION_TYPES = {
  basic: {
    title: "Суточный тариф",
    cost: "",
  },
  weekly: {
    title: "Тариф “7 дней”",
    cost: "10,000 ₸",
  },
  monthly: {
    title: "Тариф “30 дней”",
    cost: "30,000 ₸",
  },
  annualy: {
    title: "Тариф “1 год” ",
    cost: "1 500 000 ₸",
  },
} as const;

export const PaymentCard = ({ tarif }: { tarif: SubType }) => {
  return (
    <Card className="bg-white !rounded-2xl flex border-none p-4 md:p-6">
      <div className="w-full pr-4 md:pr-6">
        <CardTitle className="text-lg md:text-xl">
          {SUBSCRIPTION_TYPES[tarif].title}
        </CardTitle>
        <div className="flex gap-3 flex-wrap items-center mt-3">
          <p className="flex gap-2 items-center">
            <CalendarIcon className="stroke-gray-500 stroke-[1.5]" />
            <span className="leading-none text-gray-500 font-medium text-sm">
              Дата окончания
            </span>
          </p>
          <div className="text-sm text-[#00848C] bg-[#f5f5f5] rounded-sm px-3 font-semibold py-1">
            {"12.09.2024"}
          </div>
        </div>
      </div>
      <div className="border-l-[1px] border-l-gray-300 pl-4 md:pl-6 flex-shrink-0 items-center flex">
        <span className="font-semibold text-base md:text-lg">
          - {SUBSCRIPTION_TYPES[tarif].cost}
        </span>
      </div>
    </Card>
  );
};
