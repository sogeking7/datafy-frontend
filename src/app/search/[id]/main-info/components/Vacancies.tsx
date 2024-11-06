import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

function Vacancies() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Вакансии и сотрудники</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        <div className="bg-gray-100 flex text-sm justify-between items-center rounded-lg py-2 px-3 font-medium">
          <p>Количество сотрудников</p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="bg-gray-100 flex text-sm justify-between items-center rounded-lg py-2 px-3 font-medium">
          <p>Средняя зарплата</p>
          <button>
            <ChevronRight />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Vacancies;
