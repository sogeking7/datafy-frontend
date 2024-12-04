"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import { cn, getLastPathname } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const links = [
  {
    title: "Лицензии и сертификаты",
    link: "Лицензии и сертификаты",
  },
  { title: "Лицензии", link: "Лицензии" },
  { title: "Сертификаты CT-KZ", link: "Сертификаты CT-KZ" },
  { title: "Сертификаты индустриальные", link: "Сертификаты индустриальные" },
  { title: "Товарные знаки", link: "Товарные знаки" },
  { title: "Декларации", link: "Декларации" },
  { title: "Аккредитации", link: "Аккредитации" },
];
export const LicensesTabs = ({ className }: { className?: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();
  const q = useSearchParams().get("tab") || "";

  const [activeTab, setActiveTab] = useState(() => q);

  useEffect(() => {
    setActiveTab(q);
  }, [pathname]);

  function handleTabChange(value: string) {
    setActiveTab(value);
    router.push(`/search/${id}/licenses-certificates?tab=${value}`);
  }

  return (
    <ScrollArea type="always" className="w-full rounded-xl shadow-sm">
      <Tabs
        value={activeTab}
        onValueChange={(value) => handleTabChange(value)}
        className={cn("", className)}
      >
        <TabsList className="w-full">
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
