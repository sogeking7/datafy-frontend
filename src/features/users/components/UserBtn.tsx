"use client";

import { Button } from "@/components/ui/button";
import { LoginBtn, RegisterBtn } from "@/features/auth/components/Buttons";
import { useAuth } from "@/features/auth/providers/client";
import Link from "next/link";

export const UserBtn = () => {
  const { user } = useAuth();

  return (
    <div className="flex gap-4">
      {user ? (
        <>
          <Link href="/account">
            <Button variant={"light"}>{user.username}</Button>
          </Link>
        </>
      ) : (
        <>
          <LoginBtn />
          <div className="max-md:hidden">
            <RegisterBtn />
          </div>
        </>
      )}
    </div>
  );
};
