"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getLastPathname } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const list = [
  {
    title: "Основная информация",
    link: "/main-info",
  },
  {
    title: "Налоги и финансы",
    link: "/taxes-finance",
  },
  {
    title: "Лицензии и сертификаты",
    link: "/licenses-certificates",
  },
  {
    title: "Судебные дела",
    link: "/court-cases",
  },
  {
    title: "Благонадежность",
    link: "/reliability",
  },
  {
    title: "Участие в закупках",
    link: "/procurements",
  },
  {
    title: "Вакансии и сотрудники",
    link: "/jobs-staff",
  },
  {
    title: "История изменения",
    link: "/change-history",
  },
  {
    title: "Публикации и СМИ",
    link: "/publications-media",
  },
  {
    title: "Анализ связей",
    link: "/relationship-analysis",
  },
] as const;

export const SearchTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState(() => getLastPathname(pathname));

  useEffect(() => {
    setActiveTab(getLastPathname(pathname));
  }, [pathname]);

  function handleTabChange(value: string) {
    setActiveTab(value);
    router.push(`/search/${id}${value}`);
  }

  return (
    <ScrollArea className="md:hidden mt-5">
      <Tabs value={activeTab} onValueChange={(value) => handleTabChange(value)}>
        <TabsList>
          {list.map((item) => (
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
