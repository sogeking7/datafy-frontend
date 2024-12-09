import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";
import { JobCard } from "./components/JobCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonCard } from "./components/PersonCard";

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
              <Card className="border-none !rounded-2xl">
                <CardHeader>
                  <CardTitle>KASPI GID</CardTitle>
                </CardHeader>
                <CardContent className="md:pt-0 flex gap-3 flex-col">
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="История вакансии">
              <Card className="border-none !rounded-2xl">
                <CardHeader>
                  <CardTitle>KASPI GID</CardTitle>
                </CardHeader>
                <CardContent className="md:pt-0 flex gap-3 flex-col">
                  <JobCard a={true} />
                  <JobCard a={true} />
                  <JobCard a={true} />
                  <JobCard a={true} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="Действующие сотрудники">
              <Card className="border-none !rounded-2xl">
                <CardHeader>
                  <CardTitle>KASPI GID</CardTitle>
                </CardHeader>
                <CardContent className="md:pt-0 flex gap-3 flex-col">
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="Ранее работавшие сотрудники">
              <Card className="border-none !rounded-2xl">
                <CardHeader>
                  <CardTitle>KASPI GID</CardTitle>
                </CardHeader>
                <CardContent className="md:pt-0 flex gap-3 flex-col">
                  <PersonCard a={true} />
                  <PersonCard a={true} />
                  <PersonCard a={true} />
                  <PersonCard a={true} />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
