import { ReliabilityHeader } from "./components/ReliabilityHeader";
import { ReliabilityTabs } from "./components/ReliabilityTabs";

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <ReliabilityHeader />
      <ReliabilityTabs />
    </div>
  );
}
