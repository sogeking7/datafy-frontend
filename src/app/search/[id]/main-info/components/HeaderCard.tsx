import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Counterparty } from "@/types";
import EgovIcon from "@/../public/iconly/egov.svg";
import BookmarkIcon from "@/../public/iconly/Light/Bookmark.svg";
import EditSquareIcon from "@/../public/iconly/Light/Edit Square.svg";
import DownloadIcon from "@/../public/iconly/Light/Download.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const mockData: Partial<Counterparty> = {
  name: "АО “KASPI BANK”",
} as const;
export const HeaderCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">{mockData.name}</h1>
        <Badge variant={"current"} className="w-max">
          Нет проблем
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !py-0">
        <div className="flex flex-wrap justify-between">
          <Button size={"sm"} className="gap-3 ">
            <DownloadIcon className="full-current stroke-white stroke-[1.5]" />
            Скачать отчет
          </Button>
          <div className="flex items-center gap-3">
            <Button size={"sm"} variant={"secondary"} className="gap-3">
              Справка <EgovIcon />
            </Button>
            <Button size={"sm"} variant={"secondary"} className="gap-3">
              <EditSquareIcon />
              Заметки
            </Button>
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
