import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

function Publications() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Публикации в СМИ</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        <Tab
          variant={"sm"}
          action={true}
          onClick={() => {}}
          keyv={"Все"}
          value={""}
        />
        <Tab
          variant={"sm"}
          action={true}
          onClick={() => {}}
          keyv={"Положительные"}
          value={""}
        />
        <Tab
          variant={"sm"}
          action={true}
          onClick={() => {}}
          keyv={"Отрицательные"}
          value={""}
        />
        <Tab
          variant={"sm"}
          action={true}
          onClick={() => {}}
          keyv={"Нейтральные"}
          value={""}
        />
      </CardContent>
    </Card>
  );
}

export default Publications;
