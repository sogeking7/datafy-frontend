"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/features/auth/providers/client";
import { AccountDataForm } from "@/features/users/components/AccountForm/AccountDataForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { error, user } = useAuth();

  if (!user) {
    
    if (error) {
      router.push("/auth/login");
    }
    return <div className="my-20 text-center font-medium">Загрузка...</div>;
  }

  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardContent className="p-4 sm:p-6">
        <AccountDataForm />
      </CardContent>
    </Card>
  );
}
