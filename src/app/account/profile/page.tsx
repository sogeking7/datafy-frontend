"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogoutBtn } from "@/features/auth/components/LogoutBtn";
import { LogoutMobile } from "@/features/auth/components/LogoutMobile";
import { useAuth } from "@/features/auth/providers/client";
import { Tariffs } from "@/features/sales/Tariffs";
import { TarifCard } from "@/features/subscriptions/components/TarifCard";
import { AccountDataForm } from "@/features/users/components/AccountForm/AccountDataForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { error, user } = useAuth();

  if (!user) {
    if (error) {
      router.push("/auth/login");
    }
    return (
      <div className="my-20 text-center font-medium col-span-2">
        Загрузка...
      </div>
    );
  }

  return (
    <>
      <TarifCard />
      <Card className="col-span-1 bg-white !rounded-2xl flex flex-col border-none">
        <CardHeader>
          <CardTitle>Личная информация</CardTitle>
        </CardHeader>
        <CardContent className="!pt-0">
          <AccountDataForm />
        </CardContent>
      </Card>
      <div className="flex justify-center my-3 md:hidden w-full">
        <LogoutMobile />
      </div>
      <Card className="lg:col-span-2 bg-white !rounded-2xl flex flex-col border-none">
        <CardHeader>
          <CardTitle>Обновите/Продлите свой тариф</CardTitle>
        </CardHeader>
        <CardContent className=" !pt-0">
          <Tariffs />
        </CardContent>
      </Card>
    </>
  );
}
