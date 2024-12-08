import { Card, CardTitle } from "@/components/ui/card";
import CalendarIcon from "@/../public/iconly/Light/Calendar.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DownloadIcon from "@/../public/iconly/Light/Download.svg";

const cardType = {
  individuals: "ИП",
  companies: "ЮЛ",
} as const;

export const ReportCard = ({
  data,
}: {
  data: {
    title: string;
    type: "individuals" | "companies";
  };
}) => {
  return (
    <Card className="bg-white !rounded-2xl flex md:flex-row max-md:gap-3 flex-col border-none p-4 md:p-6">
      <div className="w-full md:pr-6">
        <CardTitle className="text-lg md:text-xl">{data.title}</CardTitle>
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
        <Badge className="mt-3" variant={data.type}>
          {cardType[data.type]}
        </Badge>
      </div>
      <div className="md:border-l-[1px] border-l-gray-300 md:pl-6 flex-shrink-0 md:justify-center items-end flex flex-col gap-3">
        <Button size={"sm"} variant={"secondary"} className="md:w-full">
          Подробнее
        </Button>
        <Button size={"sm"} className="gap-3 md:w-full ">
          <DownloadIcon className="full-current stroke-white stroke-[1.5]" />
          Скачать
        </Button>
      </div>
    </Card>
  );
};
