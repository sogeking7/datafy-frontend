import { AccountForm } from "@/features/users/components/AccountForm";
import { Container } from "@/ui/Container";
import { LogoutBtn } from "@/features/auth/components/LogoutBtn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Suspense } from "react";

export default function Account() {
  return (
    <main>
      <Container>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/account">Аккаунт</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Suspense>
          <AccountForm />
        </Suspense>
        <LogoutBtn />
      </Container>
    </main>
  );
}
