"use client";

import React from "react";
import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { HistoryCard } from "./components/HistoryCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineGraphProfitCompany } from "../taxes-finance/components/ProfitCompanyCard/LineGraphProfitCompany";

const links = ["Основная информация"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="История изменений" />
      <SearchIdTabs
        links={links}
        active="Основная информация"
        comp={
          <div className="mt-3">
            <Card className=" !rounded-2xl border-none">
              <CardHeader>
                <CardTitle>Динамика заключенных контрактов</CardTitle>
              </CardHeader>
              <CardContent className="md:pt-0 flex gap-6 w-full max-lg:flex-col lg:items-center">
                <div className="lg:w-1/2 flex flex-col gap-3">
                  <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary size-4 rounded-full"></div>
                      Наименование
                    </div>
                    1
                  </div>
                  <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#852EBA] size-4 rounded-full"></div>
                      Руководитель
                    </div>
                    3
                  </div>
                  <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#FACC15] size-4 rounded-full"></div>
                      Вид деятельности
                    </div>
                    2
                  </div>
                  <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#FF981F] size-4 rounded-full"></div>
                      Юридический адрес
                    </div>
                    4
                  </div>
                  <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#FF6E4E] size-4 rounded-full"></div>
                      Учредитель
                    </div>
                    7
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <LineGraphProfitCompany color="#403EF1" />
                </div>
              </CardContent>
            </Card>
            <Card className="mt-3 !rounded-2xl border-none">
              <CardHeader>
                <CardTitle>Все изменения</CardTitle>
              </CardHeader>
              <CardContent className="md:pt-0">
                <TabsContent
                  value="Основная информация"
                  className="flex flex-col gap-3"
                >
                  <HistoryCard title="Вид деятельности" color="#FACC15" />
                  <HistoryCard title="Наименование" color="#403EF1" />
                </TabsContent>
              </CardContent>
            </Card>
          </div>
        }
      />
    </div>
  );
}
