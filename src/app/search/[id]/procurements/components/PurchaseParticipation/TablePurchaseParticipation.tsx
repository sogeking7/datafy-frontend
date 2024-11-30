import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FindGoszakupResponse } from "@/features/company/api/company.service.types";
import { formatKZT } from "@/lib/utils";

export const TablePurchaseParticipation = ({
  data,
}: {
  data: FindGoszakupResponse["purchase_participation"]["history"];
}) => {
  if (!data) return <></>;

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
              Сумма контракта
            </TableHead>
            <TableHead className="bg-[#EEEEEE] font-semibold">
              Тип контракта
            </TableHead>
            <TableHead className="bg-[#EEEEEE] font-semibold">Тип</TableHead>
            <TableHead className="bg-[#EEEEEE] font-semibold text-right pr-4">
              Названия
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((v, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{v.finYear + " г."}</TableCell>
              <TableCell className="font-medium">
                {formatKZT(parseFloat(v.contractSum))}
              </TableCell>
              <TableCell className="font-medium">
                {v.RefContractType.nameRu}
              </TableCell>
              <TableCell className="font-medium">
                {v.RefSubjectType.nameRu}
              </TableCell>
              <TableCell className="font-medium text-right">
                {v.trdBuyNameRu || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
