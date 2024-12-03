"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableKBKRecords } from "./TableKBKRecords";
import { ChartKBKRecords } from "./ChartKBKRecords";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { Skeleton } from "@/components/ui/skeleton";

export const KBKRecordsCard = () => {
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
    return <Skeleton className="h-10 w-full rounded-2xl bg-white" />;
  }

  if (error) return "An error has occurred: " + error.message;

  // ! Uncomment
  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }
  const { status, kbk_records } = data.data.tax_info;

  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <div>
          <CardTitle>Налоговые отчисления по КБК</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        {!!status && <p className="text-info font-medium text-sm">{status}</p>}
        {!!kbk_records && (
          <>
            <ChartKBKRecords data={kbk_records} />
            <TableKBKRecords data={kbk_records} />
          </>
        )}
      </CardContent>
    </Card>
  );
};
