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

export const search_sidebar_links = [
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
