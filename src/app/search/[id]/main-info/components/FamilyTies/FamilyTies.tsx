import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "../Tab";
import { FamilyTiesTabs } from "./FamilyTiesTabs";

const list = ["По руководителю", "По учредителю"] as const;

export const FamilyTiesCard = () => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Родственные связи</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {list.map((item) => (
          <Tab
            action={true}
            key={item}
            keyv={item}
            sheetTitle="Родственные связи"
            comp={<FamilyTiesTabs active={item} />}
          />
        ))}
      </CardContent>
    </Card>
  );
};
