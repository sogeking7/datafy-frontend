import React from "react";
import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

const mockData = {
  founders: "Источник не предоставил сведения по учредителю",
  hasIPForFounder: "Нет",
  founderInOtherCompanies: "Нет",
} as const;

const keyLabels = {
  founders: "Учредители",
  hasIPForFounder: "Наличие ИП у учредителя",
  founderInOtherCompanies: "Участие учредителя в других компаниях",
} as const;

export const FoundersCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Учредители</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {Object.entries(mockData).map((item, id) => (
          <Tab
            action={false}
            key={id}
            keyv={keyLabels[item[0] as keyof Object]}
            value={item[1].toString()}
          />
        ))}
      </CardContent>
    </Card>
  );
};
