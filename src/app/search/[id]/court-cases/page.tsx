"use client";

import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";
import { LineGraphProfitCompany } from "../taxes-finance/components/ProfitCompanyCard/LineGraphProfitCompany";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CourtGraph from "./components/CourtGraph";
import { CourtCard } from "./components/CourtCard";

const links = ["По предприятию", "По руководителю"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Участие в судебных делах" />
      <SearchIdTabs
        links={links}
        active="По предприятию"
        comp={
          <div className="mt-3">
            <TabsContent value="По предприятию">
              <Card className=" !rounded-2xl border-none mb-3">
                <CardHeader>
                  <CardTitle>Динамика заключенных контрактов</CardTitle>
                </CardHeader>
                <CardContent className="md:pt-0 flex gap-6 w-full max-lg:flex-col lg:items-center">
                  <div className="lg:w-1/2 flex flex-col gap-3">
                    <div className="py-3 px-4 w-full bg-primary text-white rounded-lg flex justify-between text-sm font-medium">
                      <div className="flex items-center gap-3">Все дела</div>
                      115
                    </div>
                    <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#1A96F0] size-4 rounded-full"></div>
                        Административное судопроизводство (АППК)
                      </div>
                      15
                    </div>
                    <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#FACC15] size-4 rounded-full"></div>
                        Гражданские дела
                      </div>
                      15
                    </div>
                    <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#FF981F] size-4 rounded-full"></div>
                        Административные дела
                      </div>
                      15
                    </div>
                    <div className="py-3 px-4 w-full bg-gray-100 rounded-lg flex justify-between text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#FF6E4E] size-4 rounded-full"></div>
                        Уголовные дела
                      </div>
                      15
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <CourtGraph />
                  </div>
                </CardContent>
              </Card>
              <Card className="!rounded-2xl border-none w-full">
                <CardHeader>
                  <CardTitle>Документация</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <CourtCard type="admin" />
                  <CourtCard type="adminsud" />
                  <CourtCard type="grazhdan" />
                  <CourtCard type="ugolov" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="По руководителю">
              <Empty />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
