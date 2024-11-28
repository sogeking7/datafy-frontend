import { DynamicTaxRecords } from "@/features/company/api/company.service.types";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatTenge } from "@/lib/utils";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const LineGraphTaxRecords = ({ data }: { data: DynamicTaxRecords }) => {
  const chartData = Object.entries(data).map(([year, { summa }]) => ({
    year,
    val: summa,
  }));

  if (chartData.length === 0) {
    return <p className="text-info">Документы не найдены</p>;
  }

  return (
    <ChartContainer className="h-[250px] !aspect-auto" config={chartConfig}>
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
        {/* <Bar dataKey="val" fill="#77BD8B" radius={[2, 2, 0, 0]} /> */}
        <Line
          dataKey="val"
          type="natural"
          stroke="#403EF1"
          strokeWidth={2}
          dot={true}
        />
      </LineChart>
    </ChartContainer>
  );
};
