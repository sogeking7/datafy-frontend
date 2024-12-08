import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";
import { PurchaseParticipationCard } from "./components/PurchaseParticipation/PurchaseParticipationCard";

const links = ["Сводная информация", "Контракты"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Участие в закупках" />
      <SearchIdTabs links={links} />
      <PurchaseParticipationCard />
    </div>
  );
}
