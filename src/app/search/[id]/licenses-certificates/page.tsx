import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LicenCard } from "./components/LicenCard";
import LicenGraph from "./components/LicenGraph";

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
            <TabsContent value="Лицензии" className="flex flex-col gap-3">
              <Card className="!rounded-2xl border-none w-full">
                <CardHeader>
                  <CardTitle>Документация</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <LicenCard title="Предоставление исходных материалов при разработке проектов строительства и реконструкции (перепланировки и переоборудования)" />
                  <LicenCard title="Выдача заключения на ввоз на территорию Республики Казахстан радиоэлектронных средств и высокочастотных устройств гражданского назначения, в том числе встроенных либо входящих в состав других товаров, в случаях, отличных от импорта и (или) выдача лицензии на их импорт" />
                </CardContent>
              </Card>
              <LicenGraph />
            </TabsContent>
            <TabsContent value="Сертификаты индустриальные">
              <Empty />
            </TabsContent>
            <TabsContent value="Товарные знаки">
              <Card className="!rounded-2xl border-none w-full">
                <CardHeader>
                  <CardTitle>Документация</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <LicenCard title="KASPI ЖҰМА" a={true} />
                  <LicenCard title="KASPI RED" a={true} />
                  <LicenCard title="KASPI GOLD" a={true} />
                  <LicenCard title="kaspi bank" a={true} />
                  <LicenCard title="Kaspi.kz" a={true} />
                </CardContent>
              </Card>
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
