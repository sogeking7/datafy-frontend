import React from "react";
import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

const mockData = {
  supervisor: "МИРОНОВ ПАВЕЛ ВЛАДИМИРОВИЧ",
  directorAppointmentDate: "19-11-2018 (5 лет 11 месяцев)",
  hasIPForSupervisor: "Нет",
  supervisorInOtherCompanies: null,
} as const;

const keyLabels = {
  supervisor: "Руководитель",
  directorAppointmentDate: "Дата назначения руководителя",
  hasIPForSupervisor: "Наличие ИП у руководителя",
  supervisorInOtherCompanies: "Участие руководителя в других компаниях",
} as const;

export const SupervisorCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Руководитель</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {Object.entries(mockData).map((item, id) => {
          if (item[1] === null) {
            return (
              <Tab
                action={true}
                onClick={() => {}}
                key={id}
                keyv={keyLabels[item[0] as keyof Object]}
                value={""}
              />
            );
          }
          return (
            <Tab
              action={false}
              key={id}
              keyv={keyLabels[item[0] as keyof Object]}
              value={item[1].toString()}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};
