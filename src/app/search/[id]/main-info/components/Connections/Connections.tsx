import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "../Tab";
import { ConnectionsTab } from "./ConnectionsTab";

const list = [
  "По руководителю",
  "По учредителям",
  "По бывшим руководителям",
  "По бывшим учредителям",
  "По дочерним компаниям",
  "По филиалам",
  "По телефону",
  "По адресу",
  "По электронной почте",
  "По веб-сайту",
];

export const ConnectionsCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Связи</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {list.map((item) => (
          <Tab
            action={true}
            sheetTitle={"Связи"}
            key={item}
            keyv={item}
            comp={<ConnectionsTab active={item} />}
          />
        ))}
      </CardContent>
    </Card>
  );
};
