import { Container } from "@/ui/Container";
import Image from "next/image";
import Link from "next/link";
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
        </div>
      </Container>
    </header>
  );
}
