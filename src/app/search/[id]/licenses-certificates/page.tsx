import { SearchIdHeader } from "../components/SearchIdHeader";
import { SearchIdTabs } from "../components/SearchIdTabs";

const links = [
  "Лицензии",
  "Сертификаты индустриальные",
  "Товарные знаки",
  "Декларации",
  "Аккредитации",
  "Лицензии и сертификаты",
];

export default function Page() {
  return (
    <div className="grid grid-cols-1 self-start gap-3 w-full">
      <SearchIdHeader title="Лицензии и сертификаты" />
      <SearchIdTabs links={links} />
    </div>
  );
}
