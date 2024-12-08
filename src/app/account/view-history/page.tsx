import { CardTitle } from "@/components/ui/card";
import { ViewHistoryList } from "./components/ViewHistoryList";

export default function Page() {
  return (
    <>
      <CardTitle>История просмотров</CardTitle>
      <ViewHistoryList />
    </>
  );
}
