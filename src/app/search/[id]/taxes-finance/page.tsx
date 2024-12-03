"use client";

import { CompanyService } from "@/features/company/api/company.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { TaxRecordsCard } from "./components/TaxRecordsCard/TaxRecordsCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { KBKRecordsCard } from "./components/KBKRecordsCard/KBKRecordsCard";
import { RatingCompanyCard } from "./components/RatingCompanyCard/RatingCompanyCard";

export default function Page() {
  const { id } = useParams();

  const company_bin = id as string;

  const { data, isPending, error } = useQuery({
    queryKey: ["get-company-by-bin", { company_bin }],
    queryFn: async () => await CompanyService().findByBin(company_bin),
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

  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <Card className="bg-white !rounded-2xl flex flex-col border-none">
        <CardHeader>
          <CardTitle>
            Налоговые отчисления {data.data.company_info.name}
          </CardTitle>
        </CardHeader>
      </Card>
      <TaxRecordsCard
        // ! Uncomment
        tax_info={data.data.tax_info}
        // data={{}}
      />
      <KBKRecordsCard tax_info={data.data.tax_info} />
      <RatingCompanyCard />
    </div>
  );
}
