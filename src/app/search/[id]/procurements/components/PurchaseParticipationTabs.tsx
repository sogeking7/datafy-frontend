"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const links = ["Сводная информация", "Контракты"];

export const PurchaseParticipationTabs = ({
  className,
}: {
  className?: string;
}) => {
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
    router.push(`/search/${id}/procurements?tab=${value}`);
  }

  return (
    <ScrollArea>
      <Tabs value={activeTab} onValueChange={(value) => handleTabChange(value)}>
        <TabsList>
          {links.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
