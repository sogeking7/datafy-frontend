import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "../Tab";
import { VacanciesTabs } from "./VacanciesTabs";

const list = ["Количество сотрудников", "Средняя зарплата"] as const;

export const Vacancies = () => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Вакансии и сотрудники</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {list.map((item) => (
          <Tab
            action={true}
            key={item}
            keyv={item}
            sheetTitle="Вакансии и сотрудники"
            comp={<VacanciesTabs active={item} />}
          />
        ))}
      </CardContent>
    </Card>
  );
};
