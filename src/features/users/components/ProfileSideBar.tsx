"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const links = [
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
    light: <Chart strokeWidth={1.5} />,
    bold: <ChartBold className="" strokeWidth={1.5} />,
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

export const ProfileSideBar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { id } = useParams();

  return (
    <Card
      className={cn(
        "bg-white !rounded-2xl flex flex-col border-none",
        className
      )}
    >
      <CardContent className="flex flex-col gap-3">
        {links.map(({ title, link, light, bold }, idx) => (
          <Link key={link} href={"/account" + link} className="w-full">
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
      </CardContent>
    </Card>
  );
};
