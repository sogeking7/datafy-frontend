"use client";

import { AuthService } from "@/features/auth/api/auth.service";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "../providers/client";

export const LogoutBtn = () => {
  const router = useRouter();
  const auth = useAuth();

  return (
    <Button
      onClick={async () => {
        const { success } = await AuthService().logout();
        auth.logout();
        if (success) router.push("/");
      }}
      variant="secondary"
    >
      Log out
    </Button>
  );
};
