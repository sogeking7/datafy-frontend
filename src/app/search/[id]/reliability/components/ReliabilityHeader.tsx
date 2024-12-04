"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CompanyService } from "@/features/company/api/company.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const ReliabilityHeader = () => {
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
    return <Skeleton className="h-[112px] w-full rounded-2xl bg-white" />;
  }

  if (error) return "An error has occurred: " + error.message;

  // ! Uncomment
  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }
  const { name } = data.data.company_info;

  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Благонадежность {name}</CardTitle>
      </CardHeader>
    </Card>
  );
};
