import Profile from "@/../public/iconly/Light/Profile.svg";
import ProfileBold from "@/../public/iconly/Bold/Profile.svg";
import Lock from "@/../public/iconly/Light/Lock.svg";
import LockBold from "@/../public/iconly/Bold/Lock.svg";
import Wallet from "@/../public/iconly/Light/Wallet.svg";
import WalletBold from "@/../public/iconly/Bold/Wallet.svg";
import TimeCircle from "@/../public/iconly/Light/Time Circle.svg";
import TimeCircleBold from "@/../public/iconly/Bold/Time Circle.svg";
import EditSquare from "@/../public/iconly/Light/Edit Square.svg";
import EditSquareBold from "@/../public/iconly/Bold/Edit Square.svg";
import Chart from "@/../public/iconly/Light/Chart.svg";
import ChartBold from "@/../public/iconly/Bold/Chart.svg";

export const profile_sidebar_links = [
  {
    title: "Личная информация",
    link: "/profile",
    light: <Profile />,
    bold: <ProfileBold className="fill-current" />,
  },
  {
    title: "Смена пароля",
    link: "/change-password",
    light: <Lock />,
    bold: <LockBold className="fill-current" />,
  },
  {
    title: "История платежей",
    link: "/payment-history",
    light: <Wallet />,
    bold: <WalletBold className="fill-current" />,
  },
  {
    title: "Мои отчеты",
    link: "/reports",
    light: <Chart />,
    bold: <ChartBold className="fill-current" />,
  },
  {
    title: "История просмотров",
    link: "/view-history",
    light: <TimeCircle />,
    bold: <TimeCircleBold className="fill-current" />,
  },
  {
    title: "Заметки",
    link: "/notes",
    light: <EditSquare />,
    bold: <EditSquareBold className="fill-current" />,
  },
] as const;
