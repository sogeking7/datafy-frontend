import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function EnterpriseSize() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Размер предприятия</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        <div className="bg-gray-100 flex justify-between items-center rounded-lg py-2 px-3 font-medium">
          <p>Количество сотрудников</p>
          <b>8 505</b>
        </div>
        <div className="bg-gray-100 flex justify-between items-center rounded-lg py-2 px-3 font-medium">
          <p>Средняя зарплата</p>
          <b>435 111 KZT</b>
        </div>
      </CardContent>
    </Card>
  );
}

export default EnterpriseSize;
