import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineGraphTaxRecords } from "./LineGraphTaxRecords";
import { DynamicTaxRecords } from "@/features/company/api/company.service.types";
import { TableTaxRecords } from "./TableTaxRecords";
import { calculateTotalSum, formatKZT } from "@/lib/utils";

const mockData: DynamicTaxRecords = {
  "2015": { summa: 991, percent: 0 },
  "2016": { summa: 111170, percent: 0 },
  "2017": { summa: 114297.2, percent: 1.03 },
  "2018": { summa: 133653, percent: 1.17 },
  "2019": { summa: 137831.8, percent: 1.03 },
  "2020": { summa: 205617.8, percent: 1.49 },
  "2021": { summa: 232202.8, percent: 1.13 },
  "2022": { summa: 410431, percent: 1.77 },
  "2023": { summa: 37342, percent: 0.77 },
} as const;

export const TaxRecordsCard = ({
  tax_info,
}: {
  tax_info: {
    status?: string;
    tax_authority_code: string;
    tax_authority_name: string;
    dynamic_tax_records: DynamicTaxRecords;
  };
}) => {
  const { dynamic_tax_records, status } = tax_info;

  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <CardTitle>Динамика налоговых отчислений</CardTitle>
        {!!dynamic_tax_records && (
          <div className="bg-[#f5f5f5] rounded-lg py-2 text-sm px-3 w-max">
            <span className="font-medium">{"Сумма отчислений: "}</span>
            <span className="font-semibold">
              {formatKZT(calculateTotalSum(dynamic_tax_records))}
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        {!!status && <p className="text-info font-medium text-sm">{status}</p>}
        {!!dynamic_tax_records && (
          <>
            <LineGraphTaxRecords data={dynamic_tax_records} />
            <TableTaxRecords data={dynamic_tax_records} />
          </>
        )}
      </CardContent>
    </Card>
  );
};
