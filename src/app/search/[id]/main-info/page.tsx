"use client";

import { useQuery } from "@tanstack/react-query";
import { ConnectionsCard } from "./components/Connections";
import EnterpriseSize from "./components/EnterpriseSize";
import { EstimatedRevenueCard } from "./components/EstimatedRevenueCard";
import { FamilyTiesCard } from "./components/FamilyTies";
import { FoundersCard } from "./components/FoundersCard";
import { HeaderCard } from "./components/HeaderCard";
import History from "./components/History";
import { MainInfoCard } from "./components/MainInfoCard";
import { OtherParticipantsCard } from "./components/OtherParticipants";
import Publications from "./components/Publications";
import ReliabilityIndex from "./components/ReliabilityIndex";
import { SupervisorCard } from "./components/SupervisorCard";
import { TaxDeductions } from "./components/TaxDeductions";
import TradeMarks from "./components/Trademarks";
import Vacancies from "./components/Vacancies";
import { CompanyService } from "@/features/company/api/company.service";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  const company_bin = id as string;

  const { data, isPending, error } = useQuery({
    queryKey: ["get-company-by-bin", { company_bin }],
    queryFn: async () => await CompanyService().findByBin(company_bin),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  if (isPending) {
    return <p className="max-md:my-5 mt-5 font-semibold">Загрузка...</p>;
  }

  if (error) return "An error has occurred: " + error.message;

  if (!data.success) {
    return <p className="max-md:my-5 mt-5 font-semibold">{data.data}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-[1fr_33%] gap-3">
        <div className="grid grid-cols-1 gap-3">
          <HeaderCard data={data.data} />
          <EstimatedRevenueCard />
          <MainInfoCard data={data.data} />
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
          <TradeMarks />
        </div>
      </div>
    </>
  );
}
