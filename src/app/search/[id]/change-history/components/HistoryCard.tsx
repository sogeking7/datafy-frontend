import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CalendarIcon from "@/../public/iconly/Light/Calendar.svg";

export const HistoryCard = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => {
  return (
    <Card className="relative bg-gray-100 rounded-lg md:rounded-xl border-none">
      <div
        style={{ backgroundColor: color }}
        className=" absolute left-0 top-0  rounded-l-xl w-1 md:w-2 h-full"
      ></div>
      <CardHeader>
        <CardTitle className="!text-lg">{title}</CardTitle>
        <div className="flex gap-3 flex-wrap items-center">
          <CalendarIcon className="stroke-gray-500 stroke-[1.5]" />
          <div className="text-sm text-[#00848C] bg-[#f5f5f5] rounded-sm px-3 font-semibold py-1">
            {"12.09.2024"}
          </div>
        </div>
      </CardHeader>
      <CardContent className="md:!pt-0 flex flex-col gap-3 text-sm font-semibold">
        <div className="rounded-md py-1 px-3 bg-[#FF6E4E]/10 text-[#FF6E4E] max-w-min">
          Исключен
        </div>
        <p className="font-medium">
          Деятельность банков, за исключением, банка, являющегося национальным
          институтом развития, и его дочерней организации-лизингодателя;
          Деятельность частных охранных служб; Прочие виды кредитования, не
          включенные в другие группировки
        </p>
        <div className="rounded-md py-1 px-3 bg-[#4AAF57]/10 text-[#4AAF57] max-w-min">
          Добавлен
        </div>
        <p className="font-medium">
          Деятельность банков, за исключением, банка, являющегося национальным
          институтом развития, и его дочерней организации-лизингодателя; Прочие
          виды кредитования, не включенные в другие группировки; Деятельность
          частных охранных служб
        </p>
      </CardContent>
    </Card>
  );
};
