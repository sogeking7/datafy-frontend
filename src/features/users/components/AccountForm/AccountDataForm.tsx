"use client";

import { useAuth } from "@/features/auth/providers/client";
import { Tab } from "@/app/search/[id]/main-info/components/Tab";

export const AccountDataForm = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-3">
      <Tab
        variant={"sm"}
        action={false}
        keyv={"Email"}
        value={user?.email || ""}
      />
      <Tab
        variant={"sm"}
        action={false}
        keyv={"Тариф"}
        value={"Суточный тариф"}
      />
    </div>
  );
};
