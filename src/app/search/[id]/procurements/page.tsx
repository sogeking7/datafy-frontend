import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { PurchaseParticipationCard } from "./components/PurchaseParticipation/PurchaseParticipationCard";
import { Empty } from "../components/Empty";

const links = ["Сводная информация", "Контракты"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Участие в закупках" />
      <SearchIdTabs
        links={links}
        active="Сводная информация"
        comp={
          <div className="mt-3">
            <TabsContent value="Сводная информация">
              <Empty />
            </TabsContent>
            <TabsContent value="Контракты">
              <Empty />
            </TabsContent>
          </div>
        }
      />
      <PurchaseParticipationCard />
    </div>
  );
}
