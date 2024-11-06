"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Home from "@/../public/iconly/Light/Home.svg";
import HomeBold from "@/../public/iconly/Bold/Home.svg";
import Graph from "@/../public/iconly/Light/Graph.svg";
import GraphBold from "@/../public/iconly/Bold/Graph.svg";
import Star from "@/../public/iconly/Light/Star.svg";
import StarBold from "@/../public/iconly/Bold/Star.svg";
import Work from "@/../public/iconly/Light/Work.svg";
import WorkBold from "@/../public/iconly/Bold/Work.svg";
import ShieldDone from "@/../public/iconly/Light/Shield Done.svg";
import ShieldDoneBold from "@/../public/iconly/Bold/Shield Done.svg";
import Buy from "@/../public/iconly/Light/Buy.svg";
import BuyBold from "@/../public/iconly/Bold/Buy.svg";
import Users from "@/../public/iconly/Light/3 User.svg";
import UsersBold from "@/../public/iconly/Bold/3 User.svg";
import TimeCircle from "@/../public/iconly/Light/Time Circle.svg";
import TimeCircleBold from "@/../public/iconly/Bold/Time Circle.svg";
import Document from "@/../public/iconly/Light/Document.svg";
import DocumentBold from "@/../public/iconly/Bold/Document.svg";
import Chart from "@/../public/iconly/Light/Chart.svg";
import ChartBold from "@/../public/iconly/Bold/Chart.svg";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    title: "Основная информация",
    link: "/main-info",
    light: <Home />,
    bold: <HomeBold className="fill-current" />,
  },
  {
    title: "Налоги и финансы",
    link: "/taxes-finance",
    light: <Graph />,
    bold: <GraphBold className="fill-current" />,
  },
  {
    title: "Лицензии и сертификаты",
    link: "/licenses-certificates",
    light: <Star />,
    bold: <StarBold className="fill-current" />,
  },
  {
    title: "Судебные дела",
    link: "/court-cases",
    light: <Work />,
    bold: <WorkBold className="fill-current" />,
  },
  {
    title: "Благонадежность",
    link: "/reliability",
    light: <ShieldDone />,
    bold: <ShieldDoneBold className="fill-current" />,
  },
  {
    title: "Участие в закупках",
    link: "/procurements",
    light: <Buy />,
    bold: <BuyBold className="fill-current" />,
  },
  {
    title: "Вакансии и сотрудники",
    link: "/jobs-staff",
    light: <Users />,
    bold: <UsersBold className="fill-current" />,
  },
  {
    title: "История изменения",
    link: "/change-history",
    light: <TimeCircle />,
    bold: <TimeCircleBold className="fill-current" />,
  },
  {
    title: "Публикации и СМИ",
    link: "/publications-media",
    light: <Document />,
    bold: <DocumentBold className="fill-current" />,
  },
  {
    title: "Анализ связей",
    link: "/relationship-analysis",
    light: <Chart />,
    bold: <ChartBold className="fill-current" />,
  },
] as const;

export const SearchSideBar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { id } = useParams();

  return (
    <div className={cn("bg-white rounded-2xl p-6", className)}>
      <nav className="flex flex-col gap-3">
        {links.map(({ title, link, light, bold }, idx) => (
          <Link key={link} href={`/search/${id}` + link} className="w-full">
            <Button
              className={cn(
                pathname.includes(link)
                  ? "bg-primary fill-current font-semibold text-white stroke-none"
                  : "hover:bg-accent",
                "w-full"
              )}
              variant={"search-side-bar"}
            >
              {pathname.includes(link) ? bold : light}
              {title}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};
