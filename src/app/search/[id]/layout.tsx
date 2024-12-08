import { SearchForm } from "@/features/search/components/SearchForm";
import { SearchSideBar } from "@/features/search/components/SearchSideBar/SearchSideBar";
import { Container } from "@/ui/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { SearchTabs } from "@/features/search/components/SearchTabs/SearchTabs";

export default async function SearchPageLayout({
  params,
  children,
}: {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}) {
  const { id } = await params;
  return (
    <Container
      variant={"largePadded"}
      className="grid grid-cols-1 md:grid-cols-[320px_1fr] grid-rows-1 gap-6 my-5"
    >
      <SearchSideBar className="self-start max-md:hidden" />
      <div className="flex flex-col gap-3 w-full">
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
                  <Link href="/search">Результаты поиска</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/search/${id}/main-info`}>{id}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SearchForm tabsActive={false} />
          <SearchTabs />
        </div>
        {children}
      </div>
    </Container>
  );
}
