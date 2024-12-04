import { CourtHeader } from "./components/CourtHeader";
import { CourtList } from "./components/CourtList";
import { CourtTabs } from "./components/CourtTabs";

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <CourtHeader />
      <CourtTabs />
      <CourtList />
    </div>
  );
}
