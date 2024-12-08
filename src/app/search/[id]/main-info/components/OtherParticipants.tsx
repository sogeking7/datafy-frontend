import React from "react";
import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

const mockData = {
  affiliatedPersons: null,
  boardOfDirectors: null,
  executiveBody: null,
  relationships: null,
  shareholders: null,
  financialStatements: null,
  professionalAccountant: null,
} as const;

const keyLabels = {
  affiliatedPersons: "Аффилированные лица",
  boardOfDirectors: "Совет директоров",
  executiveBody: "Исполнительный орган",
  relationships: "Взаимосвязи",
  shareholders: "Акционеры",
  financialStatements: "Финансовая отчетность",
  professionalAccountant: "Профессиональный бухгалтер",
} as const;

export const OtherParticipantsCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Прочие участники</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {Object.entries(mockData).map((item, id) => (
          <Tab
            action={true}
            key={id}
            keyv={keyLabels[item[0] as keyof Object]}
            value={""}
          />
        ))}
      </CardContent>
    </Card>
  );
};
