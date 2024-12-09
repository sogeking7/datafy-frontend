import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";
import { ReliabilityCard } from "./components/ReliabilityCard";
import { RelCard } from "./components/RelCard";

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
            <TabsContent value="Все" className="flex flex-col gap-3">
              <RelCard
                title="Предприятие"
                list={[
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                ]}
              />
              <RelCard
                title="Финансы"
                list={[
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                ]}
              />
            </TabsContent>
            <TabsContent value="Минусы">
              <Empty />
            </TabsContent>
            <TabsContent
              value="Обратить внимание"
              className="flex flex-col gap-3"
            >
              <RelCard
                title="Предприятие"
                list={[
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                ]}
              />
              <RelCard
                title="Финансы"
                list={[
                  "Какие документы нужны для проверки контрагента?",
                  "Какие документы нужны для проверки контрагента?",
                ]}
              />
            </TabsContent>
            <TabsContent value="Индекс благонадежности">
              <ReliabilityCard />
              <div className="flex gap-3 max-lg:flex-col mt-3">
                <div className="lg:w-1/2">
                  <RelCard
                    title="Положительные факторы"
                    list={[
                      "Какие документы нужны для проверки контрагента?",
                      "Какие документы нужны для проверки контрагента?",
                      "Какие документы нужны для проверки контрагента?",
                      "Какие документы нужны для проверки контрагента?",
                    ]}
                  />
                </div>
                <div className="lg:w-1/2">
                  <RelCard
                    title="Отрицательные факторы"
                    list={[
                      "Какие документы нужны для проверки контрагента?",
                      "Какие документы нужны для проверки контрагента?",
                    ]}
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
