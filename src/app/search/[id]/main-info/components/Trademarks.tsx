import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

function TradeMarks() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Товарные знаки</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        <Tab variant={"sm"} action={true} keyv={"Действующие"} value={""} />
        <Tab variant={"sm"} action={true} keyv={"Недействующие"} value={""} />
      </CardContent>
    </Card>
  );
}

export default TradeMarks;
