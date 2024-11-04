import { SearchSideBar } from "@/features/search/components/SearchSideBar";
import { Container } from "@/ui/Container";

export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container variant={"breakpointPadded"} className="grid grid-cols-12 gap-6 my-5">
      <SearchSideBar className="col-span-3" />
      <div className="col-span-9">{children}</div>
    </Container>
  );
}
