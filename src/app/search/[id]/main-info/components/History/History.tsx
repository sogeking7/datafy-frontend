import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "../Tab";
import { HistoryTabs } from "./HistoryTabs";

const list = [
  "История изменений",
  "Наименование",
  "Учредитель",
  "Руководитель",
  "Юридический адрес",
  "Вид деятельности",
] as const;

export const History = () => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">История изменений</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {list.map((item) => (
          <Tab
            action={true}
            key={item}
            keyv={item}
            sheetTitle="История изменений"
            comp={<HistoryTabs active={item} />}
          />
        ))}
      </CardContent>
    </Card>
  );
};
