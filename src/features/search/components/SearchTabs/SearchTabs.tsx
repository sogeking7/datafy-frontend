"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { search_tab_links } from "./list";
import { cn, getLastPathname } from "@/lib/utils";

export const SearchTabs = ({ className }: { className?: string }) => {
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
    <Tabs
      value={activeTab}
      onValueChange={(value) => handleTabChange(value)}
      className={cn("mt-5 md:w-[605px] max-md:overflow-x-scroll", className)}
    >
      <TabsList>
        {search_tab_links.map((item) => (
          <TabsTrigger key={item.link} value={item.link}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
