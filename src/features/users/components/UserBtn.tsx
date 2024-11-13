"use client";

import { Button } from "@/components/ui/button";
import { LoginBtn, RegisterBtn } from "@/features/auth/components/Buttons";
import { useAuth } from "@/features/auth/providers/client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const UserBtn = () => {
  const { user, error } = useAuth();

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
    <Link href="/account/profile">
      <Button variant={"light"} className="gap-2 !px-2">
        <div className="bg-[#f4f4f4] font-semibold leading-none rounded-md p-1 w-7 flex items-center justify-center h-7 py-0">
          {user.fullname[0].toUpperCase()}
        </div>
        {user.email}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </Link>
  );
};
