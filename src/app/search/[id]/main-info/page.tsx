import EnterpriseSize from "./components/EnterpriseSize";
import { EstimatedRevenueCard } from "./components/EstimatedRevenueCard";
import { FamilyTiesCard } from "./components/FamilyTies";
import { FoundersCard } from "./components/FoundersCard";
import { HeaderCard } from "./components/HeaderCard";
import { MainInfoCard } from "./components/MainInfoCard";
import ReliabilityIndex from "./components/ReliabilityIndex";
import { SupervisorCard } from "./components/SupervisorCard";

export default function Page() {
  const progress = 45;
  const boundedProgress = Math.min(100, Math.max(0, progress));

  return (
    <>
      <div className="grid grid-cols-[1fr_33%] gap-3">
        <div className="grid grid-cols-1 gap-3">
          <HeaderCard />
          <EstimatedRevenueCard />
          <MainInfoCard />
          <SupervisorCard />
          <FoundersCard />
          <FamilyTiesCard />
        </div>
        <div className="grid grid-cols-1 gap-3 self-start">
          <ReliabilityIndex />
          <EnterpriseSize />
        </div>
      </div>
    </>
  );
}
