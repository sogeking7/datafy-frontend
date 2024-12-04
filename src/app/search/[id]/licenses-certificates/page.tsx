import { LicensesHeader } from "./components/LicensesHeader";
import { LicensesList } from "./components/LicensesList";
import { LicensesTabs } from "./components/LicensesTabs";

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <LicensesHeader />
      <LicensesTabs />
      <LicensesList />
    </div>
  );
}
