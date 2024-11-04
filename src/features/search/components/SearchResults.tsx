"use client";

import { SearchCard } from "./SearchCard";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { Skeleton } from "@/components/ui/skeleton";

export const SearchResults = () => {
  const params = useSearchParams();

  const q = params.get("q") || "";
  const page = params.get("page") || "1";
  const limit = params.get("limit") || "10";

  const { data, isPending, error } = useQuery({
    queryKey: ["find-company", { q, page, limit }],
    queryFn: async () => await CompanyService().find(q, page, limit),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  const totalCount = 100;

  if (isPending) {
    return (
      <div className="max-md:my-5 mt-5 mb-20 flex gap-6 flex-col">
        <div className="w-full h-[200px] p-6 bg-white rounded-md md:rounded-xl">
          <Skeleton className="w-1/2 h-5 md:h-7" />
          <Skeleton className="w-full h-3 md:h-5 mt-3" />
          <Skeleton className="w-4/5 h-3 md:h-5 mt-3" />
        </div>
        <div className="w-full h-[200px] p-6 bg-white rounded-md md:rounded-xl">
          <Skeleton className="w-1/2 h-5 md:h-7" />
          <Skeleton className="w-full h-3 md:h-5 mt-3" />
          <Skeleton className="w-4/5 h-3 md:h-5 mt-3" />
        </div>
        <div className="w-full h-[200px] p-6 bg-white rounded-md md:rounded-xl">
          <Skeleton className="w-1/2 h-5 md:h-7" />
          <Skeleton className="w-full h-3 md:h-5 mt-3" />
          <Skeleton className="w-4/5 h-3 md:h-5 mt-3" />
        </div>
      </div>
    );
  }

  if (error) return "An error has occurred: " + error.message;

  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }

  return (
    <div className="max-md:my-5 mt-5 mb-20 flex gap-6 flex-col">
      <div className="flex flex-col gap-3">
        {data.success && data.data.results.length ? (
          data.data.results.map((item, idx) => (
            <SearchCard data={item} key={idx} />
          ))
        ) : (
          <p className=" font-semibold">{`По вашему запросу \"${q}\"ничего не найдено`}</p>
        )}
      </div>
      <PaginationWithLinks
        page={+page}
        pageSize={+limit}
        totalCount={totalCount}
      />
    </div>
  );
};
