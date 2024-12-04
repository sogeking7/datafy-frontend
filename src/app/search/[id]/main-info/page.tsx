import { ConnectionsCard } from "./components/Connections";
import EnterpriseSize from "./components/EnterpriseSize";
import { FamilyTiesCard } from "./components/FamilyTies";
import { FoundersCard } from "./components/FoundersCard";
import { HeaderCard } from "./components/HeaderCard";
import History from "./components/History";
import { MainInfoCard } from "./components/MainInfoCard";
import { OtherParticipantsCard } from "./components/OtherParticipants";
import Publications from "./components/Publications";
import { SupervisorCard } from "./components/SupervisorCard";
import { TaxDeductions } from "./components/TaxDeductions";
import TradeMarks from "./components/Trademarks";
import Vacancies from "./components/Vacancies";
import ReliabilityIndex from "./components/ReliabilityIndex";

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
