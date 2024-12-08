import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const SearchIdTabs = ({
  active,
  links,
  comp,
}: {
  active?: string;
  links: string[];
  comp?: React.ReactNode;
}) => {
  return (
    <Tabs defaultValue={active}>
      <ScrollArea>
        <TabsList>
          {links.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {comp}
    </Tabs>
  );
};
