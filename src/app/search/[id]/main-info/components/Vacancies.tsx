import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

function Vacancies() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Вакансии и сотрудники</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        <Tab
          variant={"sm"}
          action={true}
          keyv={"Количество сотрудников"}
          value={""}
        />
        <Tab
          variant={"sm"}
          action={true}
          keyv={"Средняя зарплата"}
          value={""}
        />
      </CardContent>
    </Card>
  );
}

export default Vacancies;
