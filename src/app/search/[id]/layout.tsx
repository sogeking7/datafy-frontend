import { SearchForm } from "@/features/search/components/SearchForm";
import { SearchSideBar } from "@/features/search/components/SearchSideBar";
import { Container } from "@/ui/Container";

export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      variant={"largePadded"}
      className="grid grid-cols-[340px_1fr] grid-rows-1 gap-6 my-5"
    >
      <SearchSideBar className="self-start" />
      <div className="flex flex-col gap-6">
        <SearchForm tabsActive={false} />
        {children}
      </div>
    </Container>
  );
}
