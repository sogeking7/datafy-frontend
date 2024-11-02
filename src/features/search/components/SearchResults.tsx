"use client";

import { SearchCard } from "./SearchCard";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { useSearchParams } from "next/navigation";

export const SearchResults = () => {
  const params = useSearchParams();

  const { data, isPending, error } = useQuery({
    queryKey: ["find-company", { querty: params.get("q") || " " }],
    queryFn: async () => await CompanyService().find(params.get("q") || " "),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  if (isPending)
    return <div className="my-20 text-center font-medium">Загрузка...</div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="max-md:my-5 mt-5 mb-20 flex gap-3 flex-col">
      {data.success &&
        data.data.results.map((item, idx) => (
          <SearchCard data={item} key={idx} />
        ))}
    </div>
  );
};
