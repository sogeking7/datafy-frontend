import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const list = [
  "Аффилированные лица",
  "Совет директоров",
  "Исполнительный орган",
  "Взаимосвязи",
  "Акционеры",
  "Финансовая отчетность",
  "Профессиональный бухгалтер",
] as const;

export const OtherParticipantsTabs = ({ active }: { active: string }) => {
  return (
    <ScrollArea>
      <Tabs defaultValue={active}>
        <TabsList>
          {list.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Аффилированные лица"></TabsContent>
        <TabsContent value="Совет директоров"></TabsContent>
        <TabsContent value="Исполнительный орган"></TabsContent>
        <TabsContent value="Взаимосвязи"></TabsContent>
        <TabsContent value="Акционеры"></TabsContent>
        <TabsContent value="Финансовая отчетность"></TabsContent>
        <TabsContent value="Профессиональный бухгалтер"></TabsContent>
      </Tabs>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
