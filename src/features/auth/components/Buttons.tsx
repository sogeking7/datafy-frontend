"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const LoginBtn = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/auth/login")}
      className="px-6 font-sans max-md:gap-3 max-md:pl-2 max-md:pr-4"
      variant={"light"}
    >
      <div className="bg-[#f4f4f4] md:hidden rounded-md p-1">
        <Image src="/iconly/user.svg" width={18} height={18} alt="user" />
      </div>
      <span>Войти</span>
    </Button>
  );
};

export const RegisterBtn = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/auth/create-account")}
      variant={"light"}
      className={cn("gap-3 pl-2 pr-4", className)}
    >
      <div className="bg-[#f4f4f4] rounded-md p-1">
        <Image src="/iconly/user.svg" width={20} height={20} alt="user" />
      </div>
      Регистрация
    </Button>
  );
};
