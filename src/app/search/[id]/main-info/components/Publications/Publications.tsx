import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "../Tab";
import { PublicationsTabs } from "./PublicationsTabs";

const list = ["Все", "Положительные", "Отрицательные", "Нейтральные"] as const;

export const Publications = () => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle className="!text-xl">Публикации в СМИ</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {list.map((item) => (
          <Tab
            action={true}
            key={item}
            keyv={item}
            sheetTitle="Публикации в СМИ"
            comp={<PublicationsTabs active={item} />}
          />
        ))}
      </CardContent>
    </Card>
  );
};
