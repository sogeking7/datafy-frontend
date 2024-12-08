import { TabsContent } from "@radix-ui/react-tabs";
import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { Empty } from "../components/Empty";

const links = ["По предприятию", "По руководителю"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Участие в судебных делах" />
      <SearchIdTabs
        links={links}
        active="По предприятию"
        comp={
          <div className="mt-3">
            <TabsContent value="По предприятию">
              <Empty />
            </TabsContent>
            <TabsContent value="По руководителю">
              <Empty />
            </TabsContent>
          </div>
        }
      />
    </div>
  );
}
