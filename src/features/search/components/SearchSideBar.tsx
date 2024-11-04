import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { title: "Основная информация", link: "" },
  { title: "Налоги и финансы", link: "/taxes-finance" },
  { title: "Лицензии и сертификаты", link: "/licenses-certificates" },
  { title: "Судебные дела", link: "/court-cases" },
  { title: "Благонадежность", link: "/reliability" },
  { title: "Участие в закупках", link: "/procurements" },
  { title: "Вакансии и сотрудники", link: "/jobs-staff" },
  { title: "История изменения", link: "/change-history" },
  { title: "Публикации и СМИ", link: "/publications-media" },
  { title: "Анализ связей", link: "/relationship-analysis" },
] as const;

export const SearchSideBar = ({ className }: { className: string }) => {
  return (
    <div className={cn("bg-white h-full rounded-xl p-6", className)}>
      <nav className="flex flex-col gap-2">
        {links.map((link, idx) => (
          <Button variant={"search-side-bar"} key={idx}>
            {link.title}
          </Button>
        ))}
      </nav>
    </div>
  );
};
