"use client";

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
import Link from "next/link";
import { LogoutBtn } from "@/features/auth/components/LogoutBtn";
import { AccountForm } from "@/features/users/components/AccountForm";

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
            <BreadcrumbLink asChild>
              <Link href="/">Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/account">Личный кабинет</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Suspense>
        <AccountForm/>
      </Suspense>
      <LogoutBtn />
    </>
  );
}
