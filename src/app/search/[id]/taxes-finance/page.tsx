import { TaxRecordsCard } from "./components/TaxRecordsCard/TaxRecordsCard";
import { KBKRecordsCard } from "./components/KBKRecordsCard/KBKRecordsCard";
import { RatingCompanyCard } from "./components/RatingCompanyCard/RatingCompanyCard";
import { ProfitCompanyCard } from "./components/ProfitCompanyCard/ProfitCompanyCard";
import { TaxImportsCard } from "./components/TaxImportsCard/TaxImportsCard";
import { FinesPenaltyCard } from "./components/FinesPenaltyCard/FinesPenaltyCard";
import { WageFundCard } from "./components/WageFundCard/WageFundCard";

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <TaxRecordsCard />
      <KBKRecordsCard />
      <RatingCompanyCard />
      <ProfitCompanyCard />
      <TaxImportsCard />
      <FinesPenaltyCard />
      <WageFundCard />
    </div>
  );
}
