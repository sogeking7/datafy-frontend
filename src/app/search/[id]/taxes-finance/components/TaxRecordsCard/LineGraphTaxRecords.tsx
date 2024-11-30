import { DynamicTaxRecords } from "@/features/company/api/company.service.types";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn, formatKZT, formatTenge } from "@/lib/utils";

const chartConfig = {
  summa: {
    label: "Сумма",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const LineGraphTaxRecords = ({ data }: { data: DynamicTaxRecords }) => {
  const chartData = Object.entries(data).map(([year, { summa }]) => ({
    year,
    summa,
  }));

  return (
    <ChartContainer
      className="h-[250px] !aspect-auto z-50 relative"
      config={chartConfig}
    >
      <LineChart accessibilityLayer data={chartData}>
        <YAxis tickFormatter={formatTenge} />
        <XAxis
          dataKey="year"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
        />
        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
        <Line
          dataKey="summa"
          type="natural"
          stroke="#403EF1"
          strokeWidth={2}
          dot={true}
        />
      </LineChart>
    </ChartContainer>
  );
};
