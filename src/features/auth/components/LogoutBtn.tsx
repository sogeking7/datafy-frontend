"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "../providers/client";

export const LogoutBtn = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Button
      onClick={() => {
        localStorage.removeItem("access-token");
        logout();
        router.push("/");
      }}
      size={"sm"}
    >
      Выйти
    </Button>
  );
};
