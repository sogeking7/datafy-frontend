"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { profile_tab_links } from "./list";
import { cn, getLastPathname } from "@/lib/utils";

export const ProfileTabs = ({ className }: { className?: string }) => {
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
    <Tabs
      value={activeTab}
      onValueChange={(value) => handleTabChange(value)}
      className={cn("md:w-[605px] max-md:overflow-x-scroll", className)}
    >
      <TabsList>
        {profile_tab_links.map((item) => (
          <TabsTrigger key={item.link} value={item.link}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
