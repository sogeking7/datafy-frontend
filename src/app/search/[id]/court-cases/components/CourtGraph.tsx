"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const chartData = [
  { year: 2019, desktop: 186, mobile: 80, ipad: 100, mac: 40 },
  { year: 2020, desktop: 305, mobile: 200, ipad: 20, mac: 40 },
  { year: 2021, desktop: 237, mobile: 120, ipad: 40, mac: 40 },
  { year: 2022, desktop: 73, mobile: 190, ipad: 100, mac: 40 },
  { year: 2023, desktop: 209, mobile: 130, ipad: 150, mac: 90 },
  { year: 2024, desktop: 214, mobile: 140, ipad: 130, mac: 40 },
];

const chartConfig = {
  desktop: {
    label: "Административное судопроизводство (АППК)",
    color: "#1A96F0",
  },
  mobile: {
    label: "Гражданские дела",
    color: "#FACC15",
  },
  ipad: {
    label: "Административные дела",
    color: "#FF981F",
  },
  mac: {
    label: "Уголовные дела",
    color: "#FF6E4E",
  },
} satisfies ChartConfig;

export default function CourtGraph() {
  return (
    <ScrollArea>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="desktop" fill="#1A96F0" radius={2} />
          <Bar dataKey="mobile" fill="#FACC15" radius={2} />
          <Bar dataKey="ipad" fill="#FF981F" radius={2} />
          <Bar dataKey="mac" fill="#FF6E4E" radius={2} />
        </BarChart>
      </ChartContainer>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
