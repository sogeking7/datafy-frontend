"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const LogoutBtn = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        localStorage.removeItem("access-token");
        router.refresh();
        router.push('/auth/login')
      }}
      size={"sm"}
    >
      Выйти
    </Button>
  );
};
