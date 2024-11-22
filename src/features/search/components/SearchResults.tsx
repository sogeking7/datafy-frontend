"use client";

import { SearchCard } from "./SearchCard";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { MySkelet } from "@/ui/MySkelet";

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
        <MySkelet className="h-[200px]" />
        <MySkelet className="h-[200px]" />
        <MySkelet className="h-[200px]" />
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
