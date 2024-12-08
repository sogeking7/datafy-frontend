import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

function History() {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">История изменений</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        <Tab
          variant={"sm"}
          action={true}
          keyv={"История изменений"}
          value={""}
        />
        <Tab variant={"sm"} action={true} keyv={"Наименование"} value={""} />
        <Tab variant={"sm"} action={true} keyv={"Учредитель"} value={""} />
        <Tab variant={"sm"} action={true} keyv={"Руководитель"} value={""} />
        <Tab
          variant={"sm"}
          action={true}
          keyv={"Юридический адрес"}
          value={""}
        />
        <Tab
          variant={"sm"}
          action={true}
          keyv={"Вид деятельности"}
          value={""}
        />
      </CardContent>
    </Card>
  );
}

export default History;
