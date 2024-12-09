import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatTenge, isObjectEmpty } from "@/lib/utils";

const chartConfig = {
  rating: {
    label: "Место",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const LineGraphRatingCompany = ({
  data,
}: {
  data: { [year: string]: { rating: number } };
}) => {
  if (isObjectEmpty(data)) {
    return null;
  }

  const chartData = Object.entries(data).map(([year, { rating }]) => ({
    year,
    rating,
  }));

  return (
    <ChartContainer
      className="h-[250px] !aspect-auto relative"
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
          dataKey="rating"
          type="natural"
          stroke="#403EF1"
          strokeWidth={2}
          dot={true}
        />
      </LineChart>
    </ChartContainer>
  );
};
