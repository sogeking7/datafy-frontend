"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { CompanyService } from "@/features/company/api/company.service";
import { useQuery } from "@tanstack/react-query";
import { calculateTotalSum, formatKZT } from "@/lib/utils";

const chartConfig = {
  summa: {
    label: "Сумма",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const TaxDeductions = () => {
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
    return <Skeleton className="h-[300px] w-full rounded-2xl bg-white" />;
  }

  if (error) return <>{"An error has occurred: " + error.message}</>;

  // ! Uncomment
  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }
  const { dynamic_tax_records, status } = data.data.tax_info;

  const chartData = Object.entries(dynamic_tax_records || {}).map(
    ([year, { summa }]) => ({
      year,
      summa,
    })
  );

  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Налоговые отчисления</CardTitle>
        <div className="flex flex-col gap-1 mt-4">
          <p className="text-info text-sm">Всего налоговых отчислений:</p>
          <b>{formatKZT(calculateTotalSum(dynamic_tax_records))}</b>
        </div>
      </CardHeader>
      <CardContent className="!pt-0">
        {!!status && <p className="text-info font-medium text-sm">{status}</p>}
        {!!dynamic_tax_records && (
          <ChartContainer
            className=" h-[250px] !aspect-auto"
            config={chartConfig}
          >
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <YAxis tickFormatter={(value) => value} />
              <XAxis
                dataKey="year"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="summa" fill="#77BD8B" radius={2} className="w-7" />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
};
