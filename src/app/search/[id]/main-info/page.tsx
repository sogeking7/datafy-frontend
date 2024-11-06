import EnterpriseSize from "./components/EnterpriseSize";
import { EstimatedRevenueCard } from "./components/EstimatedRevenueCard";
import { FamilyTiesCard } from "./components/FamilyTies";
import { FoundersCard } from "./components/FoundersCard";
import { HeaderCard } from "./components/HeaderCard";
import History from "./components/History";
import { MainInfoCard } from "./components/MainInfoCard";
import Publications from "./components/Publications";
import ReliabilityIndex from "./components/ReliabilityIndex";
import { SupervisorCard } from "./components/SupervisorCard";
import { TaxDeductions } from "./components/TaxDeductions";
import TradeMarks from "./components/Trademarks";
import Vacancies from "./components/Vacancies";

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
          <TaxDeductions />
          <Vacancies />
          <Publications />
          <History />
          <TradeMarks />
        </div>
      </div>
    </>
  );
}
