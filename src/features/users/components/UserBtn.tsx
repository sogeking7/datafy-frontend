"use client";

import { Button } from "@/components/ui/button";
import { LoginBtn, RegisterBtn } from "@/features/auth/components/Buttons";
import { useAuth } from "@/features/auth/providers/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { UserSubBtn } from "./UserSubBtn";
import { usePathname } from "next/navigation";

export const UserBtn = () => {
  const pathname = usePathname();

  const { user, error } = useAuth();

  if (pathname === "/auth/login") return null;

  if (!user) {
    return (
      <div className="flex gap-4">
        <LoginBtn />
        <div className="max-md:hidden">
          <RegisterBtn />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6 items-center">
      <UserSubBtn />
      <Link href="/account/profile">
        <Button variant={"light"} className="gap-2 !px-2">
          <div className="bg-[#f4f4f4] font-semibold leading-none rounded-md p-1 w-7 flex items-center justify-center h-7 py-0">
            {user.email[0].toUpperCase()}
          </div>
          {user.email}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
};
