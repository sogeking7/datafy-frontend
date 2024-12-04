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
    title: "По предприятию",
    link: "По предприятию",
  },
  { title: "По руководителю", link: "По руководителю" },
];

export const CourtTabs = ({ className }: { className?: string }) => {
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
    router.push(`/search/${id}/court-cases?tab=${value}`);
  }

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => handleTabChange(value)}
      className={cn("", className)}
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
