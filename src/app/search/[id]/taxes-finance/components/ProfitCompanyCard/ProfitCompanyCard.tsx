import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineGraphProfitCompany } from "./LineGraphProfitCompany";

const data: { [year: string]: { summa: number } } = {
  "2015": { summa: 10000 },
  "2016": { summa: 41110000 },
  "2017": { summa: 31002300 },
  "2018": { summa: 51000099 },
  "2019": { summa: 11003400 },
  "2020": { summa: 41000990 },
  "2021": { summa: 31007000 },
  "2022": { summa: 71004099 },
  "2023": { summa: 11009900 },
  "2024": { summa: 21000000 },
};

export const ProfitCompanyCard = () => {
  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <CardTitle>Прибыль компании</CardTitle>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        {!!status && <p className="text-info font-medium text-sm">{status}</p>}
        <LineGraphProfitCompany data={data} />
      </CardContent>
    </Card>
  );
};
