"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { year: 2019, active: 186, inactive: 80 },
  { year: 2020, active: 305, inactive: 200 },
  { year: 2021, active: 237, inactive: 120 },
  { year: 2022, active: 73, inactive: 190 },
  { year: 2023, active: 209, inactive: 130 },
  { year: 2024, active: 214, inactive: 140 },
];

const chartConfig = {
  active: {
    label: "Действующие",
    color: "#77BD8B",
  },
  inactive: {
    label: "Истекшие",
    color: "#FF6E4E",
  },
} satisfies ChartConfig;

export default function LicenGraph() {
  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none">
      <CardHeader className="">
        <CardTitle>График лицензий</CardTitle>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        <ChartContainer className="h-[250px]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar width={20} dataKey="active" fill="#77BD8B" radius={4} />
            <Bar width={20} dataKey="inactive" fill="#FF6E4E" radius={4} />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
