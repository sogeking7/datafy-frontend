import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { LoginBtn, RegisterBtn } from "../auth/components/Buttons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserBtn } from "../users/components/UserBtn";

export function SalesHeader({
  variant,
  className,
}: {
  className?: string;
  variant?:
    | "largePadded"
    | "fullMobileConstrainedPadded"
    | "constrainedPadded"
    | "fullMobileBreakpointPadded"
    | "breakpointPadded"
    | "narrowConstrainedPadded";
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 shadow-sm w-full border-border/40 bg-white/60 h-16 md:h-[74px]",
        className
      )}
    >
      <Container
        variant={variant}
        className="flex justify-between py-3 items-center"
      >
        <Link href="/" className="relative -left-[5px] md:-left-[7px]">
          <Image
            alt="datafy.kz logo"
            src="/logo.svg"
            width={110}
            height={50}
            className="w-[84px] md:w-[110px] h-[36px] md:h-[50px]"
            priority
          />
        </Link>
        <div className="flex gap-5">
          <UserBtn />
          <Sheet>
            <SheetTrigger className="md:hidden" asChild>
              <Button size={"icon"} variant={"light"}>
                <AlignLeftIcon className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="mt-7 flex-col flex gap-3 md:gap-9 list-none">
                <li>
                  {/* <UserBtn /> */}
                  <RegisterBtn className="w-full" />
                </li>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
