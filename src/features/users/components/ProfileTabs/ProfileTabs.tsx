"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getLastPathname } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const links = [
  {
    title: "Личная информация",
    link: "/profile",
  },
  {
    title: "Смена пароля",
    link: "/change-password",
  },
  {
    title: "История платежей",
    link: "/payment-history",
  },
  {
    title: "Мои отчеты",
    link: "/reports",
  },
  {
    title: "История просмотров",
    link: "/view-history",
  },
  {
    title: "Заметки",
    link: "/notes",
  },
] as const;

export const ProfileTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(() => getLastPathname(pathname));

  useEffect(() => {
    setActiveTab(getLastPathname(pathname));
  }, [pathname]);

  function handleTabChange(value: string) {
    setActiveTab(value);
    router.push(`/account${value}`);
  }

  return (
    <ScrollArea className="md:hidden mb-4">
      <Tabs value={activeTab} onValueChange={(value) => handleTabChange(value)}>
        <TabsList>
          {links.map((item) => (
            <TabsTrigger key={item.link} value={item.link}>
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
