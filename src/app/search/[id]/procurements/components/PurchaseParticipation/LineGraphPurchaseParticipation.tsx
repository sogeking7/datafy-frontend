import { FindGoszakupResponse } from "@/features/company/api/company.service.types";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn, formatKZT, formatTenge } from "@/lib/utils";

const chartConfig = {
  totalSum: {
    label: "Сумма",
    color: "hsl(var(--chart-1))",
  },
  count: {
    label: "Количество",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const getTotalSumByYear = (
  history: FindGoszakupResponse["purchase_participation"]["history"]
) =>
  Object.entries(
    history.reduce<Record<number, { totalSum: number; count: number }>>(
      (acc, item) => {
        const year = item.finYear;
        const sum = parseFloat(item.contractSum);
        if (!acc[year]) {
          acc[year] = { totalSum: 0, count: 0 };
        }
        acc[year].totalSum += sum;
        acc[year].count += 1;
        return acc;
      },
      {}
    )
  ).map(([year, { totalSum, count }]) => ({
    finYear: Number(year),
    totalSum,
    count,
  }));

export const LineGraphPurchaseParticipation = ({
  data,
}: {
  data: FindGoszakupResponse["purchase_participation"]["history"];
}) => {
  const totalSumByYear = getTotalSumByYear(data);

  return (
    <ChartContainer className="h-[250px] !aspect-auto" config={chartConfig}>
      <LineChart accessibilityLayer data={totalSumByYear}>
        <YAxis
          yAxisId="right"
          orientation="right"
          tickFormatter={formatTenge}
          axisLine={true}
        />
        <YAxis
          tickFormatter={(value) => value}
          yAxisId="left"
          orientation="left"
          axisLine={true}
        />
        <XAxis
          dataKey="finYear"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
        />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent labelKey="finYear" />}
        />
        <Line
          yAxisId="right"
          dataKey="totalSum"
          type="natural"
          stroke="#403EF1"
          strokeWidth={2}
          dot={true}
        />
        <Line
          strokeDasharray="5 5"
          yAxisId="left"
          dataKey="count"
          type="natural"
          stroke="#77BD8B"
          strokeWidth={2}
          dot={true}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartContainer>
  );
};
