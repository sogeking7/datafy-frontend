import { DynamicTaxRecords } from "@/features/company/api/company.service.types";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatTenge } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
    <ScrollArea>
      <ChartContainer className="h-[250px] !aspect-auto" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <YAxis tickFormatter={formatTenge} />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
          />
          <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
          <Bar dataKey="summa" fill="#77BD8B" radius={2} className="w-7" />
        </BarChart>
      </ChartContainer>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
