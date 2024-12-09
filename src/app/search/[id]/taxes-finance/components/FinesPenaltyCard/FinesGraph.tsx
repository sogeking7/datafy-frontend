import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatTenge, isObjectEmpty } from "@/lib/utils";

const data: { [year: string]: { summa: number; puma: number } } = {
  "2015": { summa: 10000, puma: 200000 },
  "2016": { summa: 41110000, puma: 41333300 },
  "2017": { summa: 31002300, puma: 31230000 },
  "2018": { summa: 51000099, puma: 51099 },
  "2019": { summa: 11003400, puma: 34000001 },
  "2020": { summa: 41000990, puma: 4100990 },
  "2021": { summa: 31007000, puma: 317000 },
  "2022": { summa: 71004099, puma: 714099 },
  "2023": { summa: 11009900, puma: 11000 },
  "2024": { summa: 21000000, puma: 55133000 },
};

const chartConfig = {
  summa: {
    label: "1",
    color: "#77BD8B",
  },
  puma: {
    label: "2",
    color: "#403EF1",
  },
} satisfies ChartConfig;

export const FineGraph = () => {
  const chartData = Object.entries(data).map(([year, { summa, puma }]) => ({
    year,
    summa,
    puma,
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
          stroke="#77BD8B"
          strokeWidth={2}
          dot={true}
        />
        <Line
          dataKey="puma"
          type="natural"
          stroke="#403EF1"
          strokeWidth={2}
          dot={true}
        />
      </LineChart>
    </ChartContainer>
  );
};
