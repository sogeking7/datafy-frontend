"use client";

import { CompanyService } from "@/features/company/api/company.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { TaxRecordsCard } from "./components/TaxRecordsCard/TaxRecordsCard";

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
  // if (!data.success) {
  //   return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  // }

  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <TaxRecordsCard
        // ! Uncomment
        // data={data.data.tax_info.dynamic_tax_records}
        data={{}}
      />
    </div>
  );
}
