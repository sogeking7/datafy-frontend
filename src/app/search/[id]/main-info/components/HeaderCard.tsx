"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EgovIcon from "@/../public/iconly/egov.svg";
import BookmarkIcon from "@/../public/iconly/Light/Bookmark.svg";
import DownloadIcon from "@/../public/iconly/Light/Download.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FindByBinResponse } from "@/features/company/api/company.service.types";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CompanyService } from "@/features/company/api/company.service";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Notes } from "./Notes/Notes";

export const HeaderCard = () => {
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
    return <Skeleton className="h-[350px] w-full rounded-2xl bg-white" />;
  }

  if (error) return "An error has occurred: " + error.message;

  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }

  const { company_info } = data.data;

  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader className="flex flex-col gap-3">
        <h1 className="font-semibold text-lg md:text-2xl">
          {company_info.name}
        </h1>
        <Badge variant={"current"} className="w-max">
          Нет проблем
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !py-0">
        <div className="flex flex-wrap justify-between gap-3">
          <Button size={"sm"} className="gap-3 ">
            <DownloadIcon className="full-current stroke-white stroke-[1.5]" />
            Скачать отчет
          </Button>
          <div className="flex items-center gap-3 flex-wrap">
            <a target="_blank" href={"https://egov.kz"}>
              <Button size={"sm"} variant={"secondary"} className="gap-3">
                Справка <EgovIcon />
              </Button>
            </a>
            <Notes />
            <Button variant={"secondary"} size={"icon-sm"}>
              <BookmarkIcon />
            </Button>
          </div>
        </div>
        <div className="font-medium text-sm flex flex-col gap-2">
          <h2 className="text-info">Рейтинг компании:</h2>
          <div className="w-full h-[10px] bg-gradient-to-r from-[#FF6E4E] via-[#FFEB4F] to-[#77BD8B] rounded-full"></div>
          <p className="text-info font-semibold text-base">
            <span className="text-green-600">6 место</span> на рынке из 2 827
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-info text-sm">
          Рейтинг компании лучше, чем у 99.8% компаний с аналогичным видом
          деятельности
        </p>
      </CardFooter>
    </Card>
  );
};
