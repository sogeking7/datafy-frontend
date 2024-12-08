"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CompanyService } from "@/features/company/api/company.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import CalendarIcon from "@/../public/iconly/Light/Calendar.svg";

export const SearchIdHeader = ({ title }: { title: string }) => {
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
        <CardTitle>{title + " " + name}</CardTitle>
        <div className="flex gap-3 flex-wrap items-center mt-3">
          <p className="flex gap-2 items-center">
            <CalendarIcon className="stroke-gray-500 stroke-[1.5]" />
            <span className="leading-none text-gray-500 font-medium text-sm">
              Дата актуальности:
            </span>
          </p>
          <div className="text-sm text-[#00848C] bg-[#f5f5f5] rounded-sm px-3 font-semibold py-1">
            {"12.09.2024"}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
