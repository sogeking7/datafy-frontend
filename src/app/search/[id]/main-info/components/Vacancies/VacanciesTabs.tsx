import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const list = ["Количество сотрудников", "Средняя зарплата"] as const;

export const VacanciesTabs = ({ active }: { active: string }) => {
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
        <TabsContent value="По руководителю"></TabsContent>
        <TabsContent value="По учредителю"></TabsContent>
      </Tabs>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
