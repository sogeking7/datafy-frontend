import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Image from "next/image";
import Link from "next/link";

export function SalesHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[100px]">
      <Container
        variant="constrainedPadded"
        className="flex justify-between py-4"
      >
        <div>
          <Image alt="indi.codes logo" src="/logo.svg" width="140" height="60" />
        </div>
        <div>
          <Link href={"/auth/login"}>
            <Button neo>Войти</Button>
          </Link>
					<Link href={"/auth/create-account"}>
            <Button neo>Регистрация</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}