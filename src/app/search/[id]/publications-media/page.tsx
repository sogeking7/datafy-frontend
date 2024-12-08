import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";
import { PubCard } from "./components/PubCard";

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
            <TabsContent value="Все" className="flex flex-col gap-3">
              <PubCard type="positive" />
              <PubCard type="negative" />
              <PubCard type="neutral" />
              <PubCard type="positive" />
              <PubCard type="negative" />
              <PubCard type="neutral" />
            </TabsContent>
            <TabsContent value="Положительные" className="flex flex-col gap-3">
              <PubCard type="positive" />
              <PubCard type="positive" />
            </TabsContent>
            <TabsContent value="Отрицательные" className="flex flex-col gap-3">
              <PubCard type="negative" />
              <PubCard type="negative" />
            </TabsContent>
            <TabsContent value="Нейтральные" className="flex flex-col gap-3">
              <PubCard type="neutral" />
              <PubCard type="neutral" />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
