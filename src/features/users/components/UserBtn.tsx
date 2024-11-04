"use client";

import { Button } from "@/components/ui/button";
import { LoginBtn, RegisterBtn } from "@/features/auth/components/Buttons";
import { useAuth } from "@/features/auth/providers/client";
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
    <Link href="/account">
      <Button variant={"light"} className="gap-3 pl-2 pr-4">
        <div className="bg-[#f4f4f4] rounded-md p-1">
          <Image src="/iconly/user.svg" width={20} height={20} alt="user" />
        </div>
        Личный кабинет
      </Button>
    </Link>
  );
};
