import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn, formatTenge, isObjectEmpty } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const chartConfig = {
  summa: {
    label: "Сумма",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const data: { [year: string]: { summa: number } } = {
  "2015": { summa: 10000 },
  "2016": { summa: 41110000 },
  "2017": { summa: 31002300 },
  "2018": { summa: 51000099 },
  "2019": { summa: 11003400 },
  "2020": { summa: 41000990 },
  "2021": { summa: 31007000 },
  "2022": { summa: 71004099 },
  "2023": { summa: 11009900 },
  "2024": { summa: 21000000 },
};

export const LineGraphProfitCompany = ({
  className,
  color = "#77BD8B",
}: {
  className?: string;
  color?: string;
}) => {
  const chartData = Object.entries(data).map(([year, { summa }]) => ({
    year,
    summa,
  }));

  return (
    <ScrollArea>
      <ChartContainer className={cn(className)} config={chartConfig}>
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
            stroke={color}
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ChartContainer>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
