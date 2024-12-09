"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "../providers/client";
import { cn } from "@/lib/utils";
import LogOutIcon from "@/../public/iconly/Light/Logout.svg";

export const LogoutMobile = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Button
      variant={"search-side-bar"}
      onClick={() => {
        localStorage.removeItem("access-token");
        logout();
        router.push("/");
      }}
      className={cn("hover:bg-accent stroke-destructive text-destructive")}
    >
      <span className="flex items-center gap-3">
        <LogOutIcon className />
        Выйти
      </span>
    </Button>
  );
};
