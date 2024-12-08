import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const list = [
  "По руководителю",
  "По учредителям",
  "По бывшим руководителям",
  "По бывшим учредителям",
  "По дочерним компаниям",
  "По филиалам",
  "По телефону",
  "По адресу",
  "По электронной почте",
  "По веб-сайту",
];

export const ConnectionsTab = ({ active }: { active: string }) => {
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
        <TabsContent value="По учредителям"></TabsContent>
        <TabsContent value="По бывшим руководителям"></TabsContent>
        <TabsContent value="По бывшим учредителям"></TabsContent>
        <TabsContent value="По дочерним компаниям"></TabsContent>
        <TabsContent value="По филиалам"></TabsContent>
        <TabsContent value="По телефону"></TabsContent>
        <TabsContent value="По адресу"></TabsContent>
        <TabsContent value="По электронной почте"></TabsContent>
        <TabsContent value="По веб-сайту"></TabsContent>
      </Tabs>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
