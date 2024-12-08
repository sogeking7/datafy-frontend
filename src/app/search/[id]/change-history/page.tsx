import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";

const links = ["Основная информация", "Благонадежность"];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="История изменений" />
      <SearchIdTabs links={links} />
    </div>
  );
}
