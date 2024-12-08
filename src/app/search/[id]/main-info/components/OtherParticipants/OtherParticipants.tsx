import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "../Tab";
import { OtherParticipantsTabs } from "./OtherParticipantsTabs";

const list = [
  "Аффилированные лица",
  "Совет директоров",
  "Исполнительный орган",
  "Взаимосвязи",
  "Акционеры",
  "Финансовая отчетность",
  "Профессиональный бухгалтер",
] as const;

export const OtherParticipantsCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Прочие участники</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {list.map((item) => (
          <Tab
            action={true}
            key={item}
            keyv={item}
            sheetTitle="Прочие участники"
            comp={<OtherParticipantsTabs active={item} />}
          />
        ))}
      </CardContent>
    </Card>
  );
};
