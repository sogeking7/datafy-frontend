"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineGraphTaxRecords } from "./LineGraphTaxRecords";
import { TableTaxRecords } from "./TableTaxRecords";
import { calculateTotalSum, formatKZT } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { Skeleton } from "@/components/ui/skeleton";

export const TaxRecordsCard = () => {
  const { id } = useParams();

  const company_bin = id as string;

  const { data, isPending, error } = useQuery({
    queryKey: ["get-company-by-bin", { company_bin }],
    queryFn: async () => await CompanyService().findByBin(company_bin),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  if (isPending) {
    return <Skeleton className="h-[112px] w-full rounded-2xl bg-white" />;
  }

  if (error) return <>{"An error has occurred: " + error.message}</>;

  // ! Uncomment
  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }

  const { dynamic_tax_records, status, tax_authority_name } =
    data.data.tax_info;

  const { name } = data.data.company_info;

  return (
    <>
      <Card className="bg-white !rounded-2xl flex flex-col border-none">
        <CardHeader>
          <CardTitle>Налоговые отчисления {name}</CardTitle>
        </CardHeader>
      </Card>
      <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
        <CardHeader className="flex-row items-center flex justify-between">
          <div>
            <CardTitle>Динамика налоговых отчислений</CardTitle>
            {!!tax_authority_name && (
              <p className="font-medium text-sm text-info">
                Налоговый орган: {tax_authority_name}
              </p>
            )}
          </div>
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
          {!!status && (
            <p className="text-info font-medium text-sm">{status}</p>
          )}
          {!!dynamic_tax_records && (
            <>
              <LineGraphTaxRecords data={dynamic_tax_records} />
              <TableTaxRecords data={dynamic_tax_records} />
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
};
