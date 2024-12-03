"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [{ negative: 80, positive: 20 }];

const chartConfig = {
  negative: {
    label: "Negative",
    color: "#FF6A55",
  },
  positive: {
    label: "Positive",
    color: "#83BF6E",
  },
} satisfies ChartConfig;

export const SemiCircleProgressBar = () => {
  const totalVisitors = "80%";

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square w-full max-h-[200px]"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="positive"
          stackId="a"
          cornerRadius={5}
          fill="#FF6A55"
          className="stroke-transparent stroke-2"
          />
        <RadialBar
          dataKey="negative"
          fill="#83BF6E"
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
};
