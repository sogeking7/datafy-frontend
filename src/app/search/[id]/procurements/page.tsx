import { PurchaseParticipationCard } from "./components/PurchaseParticipation/PurchaseParticipationCard";
import { PurchaseParticipationHeader } from "./components/PurchaseParticipationHeader";
import { PurchaseParticipationTabs } from "./components/PurchaseParticipationTabs";

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <PurchaseParticipationHeader />
      <PurchaseParticipationTabs />
      <PurchaseParticipationCard />
    </div>
  );
}
