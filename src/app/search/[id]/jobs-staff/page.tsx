import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";

const links = [
  "Открытый вакансии",
  "История вакансии",
  "Действующие сотрудники",
  "Ранее работавшие сотрудники",
];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Вакансии и сотрудники" />
      <SearchIdTabs links={links} />
    </div>
  );
}
