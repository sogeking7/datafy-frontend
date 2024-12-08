import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const links: string[] = [
  "Все",
  "Минусы",
  "Обратить внимание",
  "Индекс благонадежности",
];

export const ReliabilityTabs = () => {
  return (
    <ScrollArea>
      <Tabs>
        <TabsList>
          {links.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
