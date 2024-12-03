import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatKZT } from "@/lib/utils";

function EnterpriseSize() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Размер предприятия</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        <div className="bg-gray-100 flex text-sm justify-between items-center rounded-lg py-2 px-3 font-medium">
          <p>Количество сотрудников</p>
          <b>{Number(8505).toLocaleString()}</b>
        </div>
        <div className="bg-gray-100 flex text-sm justify-between items-center rounded-lg py-2 px-3 font-medium">
          <p>Средняя зарплата</p>
          <b>{formatKZT(435111)}</b>
        </div>
      </CardContent>
    </Card>
  );
}

export default EnterpriseSize;
