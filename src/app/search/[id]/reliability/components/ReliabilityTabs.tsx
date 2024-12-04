"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const links = [
  {
    title: "Все",
    link: "Все",
  },
  { title: "Минусы", link: "Минусы" },
  { title: "Обратить внимание", link: "Обратить внимание" },
  { title: "Индекс благонадежности", link: "Индекс благонадежности" },
];

export const ReliabilityTabs = ({ className }: { className?: string }) => {
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
    router.push(`/search/${id}/reliability?tab=${value}`);
  }

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => handleTabChange(value)}
      className={cn("max-sm:overflow-x-auto", className)}
    >
      <TabsList className="">
        {links.map((item) => (
          <TabsTrigger key={item.link} value={item.link}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
