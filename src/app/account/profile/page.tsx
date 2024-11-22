"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogoutBtn } from "@/features/auth/components/LogoutBtn";
import { useAuth } from "@/features/auth/providers/client";
import { SalesTariffs } from "@/features/sales/SalesTariffs";
import { Tariffs } from "@/features/sales/Tariffs";
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
    <>
      <Card className="bg-white !rounded-2xl flex flex-col border-none">
        <CardContent className="p-4 sm:p-6">Tarif</CardContent>
      </Card>
      <Card className="bg-white !rounded-2xl flex flex-col border-none">
        <CardContent className="p-4 sm:p-6">
          <AccountDataForm />
          <div className="mt-3">
            <LogoutBtn />
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-2 bg-white !rounded-2xl flex flex-col border-none">
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
