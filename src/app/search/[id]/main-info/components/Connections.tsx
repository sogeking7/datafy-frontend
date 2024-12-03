import React from "react";
import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

const mockData = {
  director: null,
  founders: "Нет",
  formerDirectors: null,
  formerFounders: "Нет",
  subsidiaries: "Нет",
  branches: "Нет",
  phone: null,
  address: null,
  email: null,
  website: "Нет",
} as const;

const keyLabels = {
  director: "По руководителю",
  founders: "По учредителям",
  formerDirectors: "По бывшим руководителям",
  formerFounders: "По бывшим учредителям",
  subsidiaries: "По дочерним компаниям",
  branches: "По филиалам",
  phone: "По телефону",
  address: "По адресу",
  email: "По электронной почте",
  website: "По веб-сайту",
} as const;

export const ConnectionsCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Связи</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {Object.entries(mockData).map((item, id) => (
          <Tab
            action={true}
            onClick={() => {}}
            key={id}
            keyv={keyLabels[item[0] as keyof Object]}
            value={item[1] || ""}
          />
        ))}
      </CardContent>
    </Card>
  );
};
