"use client";

import CopyToClipboard from "@/components/ui/copy-to-clickboard";
import { cn } from "@/lib/utils";
import { ChevronRight, CircleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useParams,
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { ScrollArea } from "@radix-ui/react-scroll-area";

type TabProps = {
  variant?: "default" | "sm";
  copyToClickboard?: boolean;
  keyv: string | any;
  value: string;
  action: boolean;
} & (
  | {
      action: true;
      sheetTitle?: string | undefined;
      sheetTabs?: { title: string; link: string }[] | undefined;
    }
  | {
      action: false;
      sheetTitle?: undefined;
      sheetTabs?: undefined;
    }
);

export const Tab = ({
  variant = "default",
  copyToClickboard = false,
  keyv,
  value,
  action,
  sheetTitle,
  sheetTabs,
}: TabProps) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();
  const q = useSearchParams().get("sheet_tab") || "";

  const [activeTab, setActiveTab] = useState(() => q);

  useEffect(() => {
    setActiveTab(q);
  }, [pathname]);

  function handleTabChange(value: string) {
    setActiveTab(value);
    // router.push(`/search/${id}/main-info?sheet_tab=${value}`);
  }

  return (
    <>
      {!!action && (
        <Sheet
          defaultOpen={false}
          open={open}
          onOpenChange={() => setOpen(!open)}
        >
          <SheetContent className="flex flex-col gap-6 w-full">
            <SheetHeader className="">
              <SheetTitle>{sheetTitle || ""}</SheetTitle>
            </SheetHeader>
            <Tabs
              value={activeTab}
              onValueChange={(value) => handleTabChange(value)}
              className="overflow-x-auto w-full"
            >
              <TabsList className="w-full">
                {sheetTabs?.map((item) => (
                  <TabsTrigger className="" key={item.link} value={item.link}>
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </SheetContent>
        </Sheet>
      )}
      <button
        onClick={action ? () => setOpen(!open) : undefined}
        className={cn(
          "bg-gray-100 flex justify-between  text-sm gap-2",
          variant === "default" &&
            "rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-3 font-semibold ",
          variant === "sm" && "rounded-lg py-2 px-3 font-medium",
          action && "hover:bg-gray-200"
        )}
      >
        <div className="flex gap-3 items-center">
          {variant === "default" && (
            <CircleAlert className="text-gray-400  min-w-5 min-h-5 w-5 h-5" />
          )}
          <p className="text-left text-balance">{keyv}</p>
        </div>
        {action ? (
          <ChevronRight className="text-primary h-5 w-5 shrink-0" />
        ) : (
          <>
            {copyToClickboard && value ? (
              <CopyToClipboard text={value} />
            ) : (
              <p className="text-balance font-medium text-right">{value}</p>
            )}
          </>
        )}
      </button>
    </>
  );
};
