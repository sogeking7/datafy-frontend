import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";

const links = ["По предприятию", "По руководителю"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Участие в судебных делах" />
      <SearchIdTabs links={links} />
    </div>
  );
}
