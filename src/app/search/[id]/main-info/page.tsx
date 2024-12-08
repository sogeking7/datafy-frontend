import { ConnectionsCard } from "./components/Connections/Connections";
import EnterpriseSize from "./components/EnterpriseSize";
import { FamilyTiesCard } from "./components/FamilyTies/FamilyTies";
import { FoundersCard } from "./components/FoundersCard";
import { HeaderCard } from "./components/HeaderCard";
import { MainInfoCard } from "./components/MainInfoCard";
import { OtherParticipantsCard } from "./components/OtherParticipants/OtherParticipants";
import { SupervisorCard } from "./components/SupervisorCard";
import { TaxDeductions } from "./components/TaxDeductions";
import TradeMarks from "./components/Trademarks";
import ReliabilityIndex from "./components/ReliabilityIndex";
import { Vacancies } from "./components/Vacancies/Vacancies";
import { Publications } from "./components/Publications/Publications";
import { History } from "./components/History/History";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_33%] gap-3">
        <div className="grid grid-cols-1 self-start gap-3">
          <HeaderCard />
          <MainInfoCard />
          <SupervisorCard />
          <FoundersCard />
          <FamilyTiesCard />
          <ConnectionsCard />
          <OtherParticipantsCard />
        </div>
        <div className="grid grid-cols-1 gap-3 self-start">
          <ReliabilityIndex />
          <EnterpriseSize />
          <TaxDeductions />
          <Vacancies />
          <Publications />
          <History />
          {/* <TradeMarks /> */}
        </div>
      </div>
    </>
  );
}
