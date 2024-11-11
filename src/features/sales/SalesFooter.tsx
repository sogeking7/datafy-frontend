import { Container } from "@/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { SalesSearch } from "./SalesSearch";

export const SalesFooter = () => {
  return (
    <footer className="absolute bottom-0 max-sm:bottom-[64px] w-full bg-[#151515] py-12">
      <Container>
        <div className=" flex gap-10 items-center">
          <Link href="/">
            <Image src={"/logo-light.svg"} alt="logo" width="110" height="50" />
          </Link>
          <hr className="w-full bg-[#333333] h-[2px] " />
        </div>
        <nav className="grid gap-10 grid-cols-8 mt-12">
          <p className="text-secondary font-semibold max-md:w-[320px] max-md:text-sm col-span-full md:col-span-2 text-balance">
            ТОО «СБ24»,БИН: 231040033967  Алматы, г. Бостандыкский Район,
            Проспект Нұрсұлтан Назарбаев, Дом 223, Н.П. 404 © 2024. Все права
            защищены
          </p>
          <ul className="gap-3 text-[#838383] col-span-full md:col-span-2 flex flex-col justify-center">
            <h1 className="text-white font-semibold text-2xl md:text-lg">
              Главная
            </h1>
            <li>
              <Link className="hover:underline" href="/">
                Главный экран
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#bonuses">
                Бонусы
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#services">
                Что предлагает сервис
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#counterparties">
                Проверка контрагентов
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#tariffs">
                Тарифные планы
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#faq">
                Часто задаваемые вопросы
              </Link>
            </li>
          </ul>
          <div className="col-span-full max-md:hidden md:col-span-4">
            <SalesSearch size="small" />
          </div>
        </nav>
      </Container>
    </footer>
  );
};
