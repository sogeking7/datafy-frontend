"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineGraphPurchaseParticipation } from "./LineGraphPurchaseParticipation";
import { formatKZT } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { TablePurchaseParticipation } from "./TablePurchaseParticipation";

export const PurchaseParticipationCard = () => {
  const { id } = useParams();

  const company_bin = id as string;

  const { data, isPending, error } = useQuery({
    queryKey: ["get-company-goszakup", { company_bin }],
    queryFn: async () => await CompanyService().findGoszakup(company_bin),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  if (isPending) {
    return <p className="max-md:my-5 mt-5 font-semibold">Загрузка...</p>;
  }

  if (error) return "An error has occurred: " + error.message;

  // ! Uncomment
  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }

  const { history, status, contract_sum, purchase_amount } =
    data.data.purchase_participation;

  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <div>
          <CardTitle>Динамика заключенных контрактов</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        {!!status && (
          <p className="text-info font-medium text-sm">
            {"Сервис временно недоступен"}
          </p>
        )}
        {!!history && (
          <>
            <div className="w-full grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
                <div className="bg-gray-100 rounded-xl p-3 flex items-center gap-3 text-sm font-medium">
                  <span
                    className="min-w-4 min-h-4 h-4 w-4 rounded-full"
                    style={{ backgroundColor: "#403EF1" }}
                  ></span>
                  Сумма контрактов: {formatKZT(contract_sum)}
                </div>
                <div className="bg-gray-100 rounded-xl p-3 flex items-center gap-3 text-sm font-medium">
                  <span
                    className="min-w-4 min-h-4 h-4 w-4 rounded-full"
                    style={{ backgroundColor: "#77BD8B" }}
                  ></span>
                  Количество закупок: {purchase_amount}
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <LineGraphPurchaseParticipation data={history} />
              </div>
            </div>
            <TablePurchaseParticipation data={history} />
          </>
        )}
      </CardContent>
    </Card>
  );
};