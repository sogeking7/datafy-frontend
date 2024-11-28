import { ScrollArea } from "@/components/ui/scroll-area";
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
  const chartData = Object.entries(data).map(([year, { summa, percent }]) => ({
    year,
    val: summa,
    percent: percent,
  }));

  return (
    <ScrollArea className="h-[360px] w-full rounded-xl">
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
              <TableCell className="font-medium text-right pr-4">
                {v.percent}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};
