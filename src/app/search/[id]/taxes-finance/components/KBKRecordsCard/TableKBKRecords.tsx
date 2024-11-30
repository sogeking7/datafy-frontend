import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KBKRecords } from "@/features/company/api/company.service.types";
import { formatKZT, getUniqueColor } from "@/lib/utils";

export const TableKBKRecords = ({ data }: { data: KBKRecords }) => {
  let chartData = Object.entries(data).map(
    ([name, { kbk, amount, percent }], idx) => ({
      name,
      amount,
      percent,
      kbk,
      color: getUniqueColor(idx),
    })
  );

  chartData.sort((a, b) => b.amount - a.amount);

  return (
    <ScrollArea className="max-h-[360px] w-full rounded-xl border border-input">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-[#EEEEEE] font-semibold">
              Наименование КБК
            </TableHead>
            <TableHead className="bg-[#EEEEEE] font-semibold">Сумма</TableHead>
            <TableHead className="bg-[#EEEEEE] font-semibold text-right pr-4">
              %
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chartData.map((v, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium text-balance flex items-center gap-3">
                <span
                  className="min-w-4 min-h-4 w-4 h-4 rounded-full"
                  style={{ backgroundColor: v.color }}
                ></span>
                {v.kbk + " - " + v.name}
              </TableCell>
              <TableCell className="font-medium">
                {formatKZT(v.amount)}
              </TableCell>
              <TableCell className="font-medium text-right pr-4 whitespace-nowrap">
                <span>{v.percent + " %"}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};
