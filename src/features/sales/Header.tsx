import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Image from "next/image";
import Link from "next/link";

export function SalesHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-white/60 h-20">
      <Container
        variant="constrainedPadded"
        className="flex justify-between py-4 items-center"
      >
        <div>
          <Image
            alt="indi.codes logo"
            src="/logo.svg"
            width="110"
            height="50"
          />
        </div>
        <div className="flex gap-5">
          <Link href={"/auth/login"}>
            <Button light>Войти</Button>
          </Link>
          <Link href={"/auth/create-account"}>
            <Button light>Регистрация</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}