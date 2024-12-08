import React from "react";
import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

const mockData = {
  directorInfo: null,
  founderInfo: null,
} as const;

const keyLabels = {
  directorInfo: "По руководителю",
  founderInfo: "По учредителю",
} as const;

export const FamilyTiesCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Родственные связи</CardTitle>
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
