import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineGraphRatingCompany } from "./LineGraphRatingCompany";

const data: { [year: string]: { rating: number } } = {
  "2020": { rating: 4 },
  "2021": { rating: 3 },
  "2022": { rating: 5 },
  "2023": { rating: 1 },
  "2024": { rating: 2 },
};

export const RatingCompanyCard = () => {
  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <CardTitle>Рейтинг компании</CardTitle>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">
        {!!status && <p className="text-info font-medium text-sm">{status}</p>}
        <LineGraphRatingCompany data={data} />
      </CardContent>
    </Card>
  );
};
