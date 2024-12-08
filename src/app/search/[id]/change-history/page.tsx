import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";

const links = ["Основная информация"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="История изменений" />
      <SearchIdTabs
        links={links}
        active="Основная информация"
        comp={
          <div className="mt-3">
            <TabsContent value="Основная информация">
              <Empty />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
