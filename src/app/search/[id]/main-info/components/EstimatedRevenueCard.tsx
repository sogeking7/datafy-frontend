"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const description = "A bar chart";

const chartData = [
  { year: "2015", val: 20 },
  { year: "2016", val: 30 },
  { year: "2017", val: 40 },
  { year: "2018", val: 50 },
  { year: "2019", val: 60 },
  { year: "2020", val: 70 },
  { year: "2021", val: 80 },
  { year: "2022", val: 90 },
  { year: "2023", val: 100 },
  { year: "2024", val: 90 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const EstimatedRevenueCard = () => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Оценочная выручка</CardTitle>
      </CardHeader>
      <CardContent className="!pt-0">
        <ScrollArea>
          <ChartContainer
            className="h-[250px] !aspect-auto"
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
              <Bar dataKey="val" fill="#77BD8B" radius={2} />
            </BarChart>
          </ChartContainer>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
