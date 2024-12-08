import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";

const links = ["Все", "Положительные", "Отрицательные", "Нейтральные"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Публикации" />
      <SearchIdTabs
        links={links}
        active="Все"
        comp={
          <div className="mt-3">
            <TabsContent value="Все">
              <Empty />
            </TabsContent>
            <TabsContent value="Положительные">
              <Empty />
            </TabsContent>
            <TabsContent value="Отрицательные">
              <Empty />
            </TabsContent>
            <TabsContent value="Нейтральные">
              <Empty />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
