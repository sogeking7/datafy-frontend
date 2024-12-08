import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";

const links = [
  "Лицензии",
  "Сертификаты индустриальные",
  "Товарные знаки",
  "Декларации",
  "Аккредитации",
  "Лицензии и сертификаты",
];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Лицензии и сертификаты" />
      <SearchIdTabs
        links={links}
        active="Лицензии"
        comp={
          <div className="mt-3">
            <TabsContent value="Лицензии">
              <Empty />
            </TabsContent>
            <TabsContent value="Сертификаты индустриальные">
              <Empty />
            </TabsContent>
            <TabsContent value="Товарные знаки">
              <Empty />
            </TabsContent>
            <TabsContent value="Декларации">
              <Empty />
            </TabsContent>
            <TabsContent value="Аккредитации">
              <Empty />
            </TabsContent>
            <TabsContent value="Лицензии и сертификаты">
              <Empty />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
