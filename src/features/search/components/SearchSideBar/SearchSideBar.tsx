"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { search_sidebar_links } from "./list";
import Lock from "@/../public/iconly/Light/Lock.svg";
import LockBold from "@/../public/iconly/Bold/Lock.svg";
import { EyeIcon } from "lucide-react";

export const SearchSideBar = ({ className }: { className?: string }) => {
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
        {search_sidebar_links.map(
          ({ title, link, light, bold, locked }, idx) => (
            <Link key={link} href={`/search/${id}` + link} className="w-full">
              <Button
                className={cn(
                  pathname.includes(link)
                    ? "bg-primary fill-current font-semibold text-white stroke-none"
                    : "hover:bg-accent",
                  "w-full"
                )}
                variant={"search-side-bar"}
              >
                <span className="flex gap-3 items-center">
                  {pathname.includes(link) ? bold : light}
                  {title}
                </span>
                {locked &&
                  (pathname.includes(link) ? (
                    <LockBold className="fill-info" />
                  ) : (
                    <Lock className="stroke-info  stroke-[1.5]" />
                  ))}
              </Button>
            </Link>
          )
        )}
        <div className="mt-20">
          <hr className="border-gray-200 mb-6" />
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <EyeIcon className="size-5" />3 876 просмотров
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
