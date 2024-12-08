import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MobileBottomBar from "@/features/sales/MobileBottomBar";
import { SalesFooter } from "@/features/sales/SalesFooter";
import { SalesHeader } from "@/features/sales/SalesHeader";
import { ProfileSideBar } from "@/features/users/components/ProfileSideBar/ProfileSideBar";
import { ProfileTabs } from "@/features/users/components/ProfileTabs/ProfileTabs";
import { Container } from "@/ui/Container";
import Link from "next/link";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen pb-[690px] md:pb-[calc(470px)] lg:pb-[calc(430px)] flex-col bg-background">
      <SalesHeader variant="largePadded" className="bg-white" />
      <div className="bg-background md:min-h-[calc(100vh-74px)] min-h-[calc(100vh-64px)]">
        <Container
          variant={"largePadded"}
          className="grid grid-cols-1 md:grid-cols-[320px_1fr] grid-rows-1 gap-6 my-5"
        >
          <ProfileSideBar className="self-start max-md:hidden" />
          <div>
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
                    <Link href="/account/profile">Личный кабинет</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ProfileTabs />
            <div className="flex gap-4 flex-col">{children}</div>
          </div>
        </Container>
      </div>
      <SalesFooter />
      <MobileBottomBar />
    </div>
  );
}
