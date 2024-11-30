import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DynamicTaxRecords } from "@/features/company/api/company.service.types";
import { formatKZT } from "@/lib/utils";

export const TableTaxRecords = ({ data }: { data: DynamicTaxRecords }) => {
  if (!data) return <></>;

  const chartData = Object.entries(data).map(([year, { summa, percent }]) => ({
    year,
    val: summa,
    percent: percent,
  }));

  return (
    <ScrollArea
      type="always"
      className="max-h-[360px] w-full rounded-xl border border-input"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-[#EEEEEE] font-semibold">Период</TableHead>
            <TableHead className="bg-[#EEEEEE] font-semibold">
              Сумма платежа
            </TableHead>
            <TableHead className="bg-[#EEEEEE] font-semibold text-right pr-4">
              %
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chartData.map((v, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{v.year + " г."}</TableCell>
              <TableCell className="font-medium">{formatKZT(v.val)}</TableCell>
              <TableCell className="font-medium text-right pr-4 whitespace-nowrap">
                {v.percent < 0 && (
                  <span className="text-destructive">{v.percent + " %"}</span>
                )}
                {v.percent === 0 && <span>{v.percent + " %"}</span>}
                {v.percent > 0 && (
                  <span className="text-green-500">{v.percent + " %"}</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
