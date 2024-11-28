import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineGraphTaxRecords } from "./LineGraphTaxRecords";
import { DynamicTaxRecords } from "@/features/company/api/company.service.types";
import { TableTaxRecords } from "./TableTaxRecords";
import { calculateTotalSum, formatKZT } from "@/lib/utils";

const mockData: DynamicTaxRecords = {
  "2015": { summa: 991, percent: 0 },
  "2016": { summa: 11189170, percent: 0 },
  "2017": { summa: 11483297.2, percent: 1.03 },
  "2018": { summa: 13379653, percent: 1.17 },
  "2019": { summa: 13783175.8, percent: 1.03 },
  "2020": { summa: 20561749.8, percent: 1.49 },
  "2021": { summa: 23220247.8, percent: 1.13 },
  "2022": { summa: 41043175, percent: 1.77 },
  "2023": { summa: 31447342, percent: 0.77 },
} as const;

export const TaxRecordsCard = ({ data }: { data: DynamicTaxRecords }) => {
  data = mockData;
  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <CardTitle>Динамика налоговых отчислений</CardTitle>
        <div className="bg-[#f5f5f5] rounded-lg py-2 text-sm px-3 w-max">
          <span className="font-medium">{"Сумма отчислений: "}</span>
          <span className="font-semibold">
            {formatKZT(calculateTotalSum(data))}
          </span>
        </div>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        <LineGraphTaxRecords data={data} />
        <TableTaxRecords data={data} />
      </CardContent>
    </Card>
  );
};
