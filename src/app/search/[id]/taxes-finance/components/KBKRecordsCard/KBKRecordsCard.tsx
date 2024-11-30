import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FindByBinResponse } from "@/features/company/api/company.service.types";
import { TableKBKRecords } from "./TableKBKRecords";
import { ChartKBKRecords } from "./ChartKBKRecords";

export const KBKRecordsCard = ({
  tax_info,
}: {
  tax_info: FindByBinResponse["tax_info"];
}) => {
  const { status, kbk_records } = tax_info;

  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <div>
          <CardTitle>Налоговые отчисления по КБК</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        {!!status && <p className="text-info font-medium text-sm">{status}</p>}
        {!!kbk_records && (
          <>
            <ChartKBKRecords data={kbk_records} />
            <TableKBKRecords data={kbk_records} />
          </>
        )}
      </CardContent>
    </Card>
  );
};
