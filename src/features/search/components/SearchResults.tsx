"use client";

import { SearchCard } from "./SearchCard";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { MySkelet } from "@/ui/MySkelet";
import { CompanyFilter } from "@/features/company/api/company.service.types";

export const SearchResults = () => {
  const params = useSearchParams();

  const q = params.get("q") || "A";
  const page = params.get("page") || "1";
  const size = params.get("size") || "10";
  const data_filter = (params.get("data_filter") as CompanyFilter) || "all";

  const { data, isPending, error } = useQuery({
    queryKey: ["find-company", { q, data_filter, page, size }],
    queryFn: async () =>
      await CompanyService().find(q, page, size, data_filter),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

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
      {!!(data.success && data.data.results.length) && (
        <PaginationWithLinks
          page={+page}
          pageSize={+size}
          totalCount={data.data.total_docs}
        />
      )}
    </div>
  );
};
