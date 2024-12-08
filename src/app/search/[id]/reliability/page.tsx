import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";

const links = ["Все", "Минусы", "Обратить внимание", "Индекс благонадежности"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Благонадежность" />
      <SearchIdTabs
        links={links}
        active="Все"
        comp={
          <div className="mt-3">
            <TabsContent value="Все">
              <Empty />
            </TabsContent>
            <TabsContent value="Минусы">
              <Empty />
            </TabsContent>
            <TabsContent value="Обратить внимание">
              <Empty />
            </TabsContent>
            <TabsContent value="Индекс благонадежности">
              <Empty />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
