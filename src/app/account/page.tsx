"use client";

import { AccountForm } from "@/features/users/components/AccountForm";
import { LogoutBtn } from "@/features/auth/components/LogoutBtn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Suspense } from "react";
import { useAuth } from "@/features/auth/providers/client";
import { useRouter } from "next/navigation";

export default function Account() {
  const router = useRouter();
  const { error, user } = useAuth();

  if (!user) {
    if (error) {
      console.log(error);
      router.push("/auth/login");
    }
    return <div className="my-20 text-center font-medium">Загрузка...</div>;
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/account">Личный кабинет</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Suspense>
        <AccountForm />
      </Suspense>
      <LogoutBtn />
    </>
  );
}
