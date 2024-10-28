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
        <Link href="/">
          <Image alt="datafy.kz logo" src="/logo.svg" width="110" height="50" />
        </Link>
        <div className="flex gap-5">
          <Link href={"/auth/login"}>
            <Button className="px-6 font-sans" variant={"light"}>
              Войти
            </Button>
          </Link>
          <Link href={"/auth/create-account"}>
            <Button variant={"light"} className="gap-3 pl-2 pr-4">
              <div className="bg-[#f4f4f4] rounded-md p-1">
                <Image
                  src="/iconly/user.svg"
                  width={20}
                  height={20}
                  alt="user"
                />
              </div>
              Регистрация
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
