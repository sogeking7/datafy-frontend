import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";

const links = [
  "Открытый вакансии",
  "История вакансии",
  "Действующие сотрудники",
  "Ранее работавшие сотрудники",
];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Вакансии и сотрудники" />
      <SearchIdTabs
        links={links}
        active="Открытый вакансии"
        comp={
          <div className="mt-3">
            <TabsContent value="Открытый вакансии">
              <Empty />
            </TabsContent>
            <TabsContent value="История вакансии">
              <Empty />
            </TabsContent>
            <TabsContent value="Действующие сотрудники">
              <Empty />
            </TabsContent>
            <TabsContent value="Ранее работавшие сотрудники">
              <Empty />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
