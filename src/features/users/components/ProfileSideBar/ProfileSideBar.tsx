"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { profile_sidebar_links } from "./list";

export const ProfileSideBar = ({ className }: { className?: string }) => {
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
        {profile_sidebar_links.map(({ title, link, light, bold }, idx) => (
          <Link key={link} href={"/account" + link} className="w-full">
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
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
