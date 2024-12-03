import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SemiCircleProgressBar } from "./SemiCircleProgressBar";

function ReliabilityIndex() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Индекс благонадежности</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0 items-center">
        <SemiCircleProgressBar />
        <div className="mt-3 flex-col w-full flex gap-2">
          <div className="bg-[#E4FFF9] items-center rounded-lg py-2 px-3 flex justify-between w-full">
            <p className="font-medium">8 Положительные факторы</p>
            <Badge variant={"current"}>80%</Badge>
          </div>
          <div className="bg-[#E4FFF9] items-center rounded-lg py-2 px-3 flex justify-between w-full">
            <p className="font-medium">2 Отрицательные факторы</p>
            <Badge variant={"destructive"}>-20%</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ReliabilityIndex;
