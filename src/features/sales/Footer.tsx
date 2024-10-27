"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Image from "next/image";
import { useForm } from "react-hook-form";

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-[#151515] py-12">
      <Container>
        <div className=" flex gap-10 items-center">
          <Image src={"/logo-light.svg"} alt="logo" width="110" height="50" />
          <hr className="w-full bg-[#333333] h-[2px] " />
        </div>
        <nav className="grid  gap-10 grid-cols-8 mt-12">
          <p className="text-secondary font-semibold col-span-2 text-balance">
            ТОО «СБ24»,БИН: 231040033967  Алматы, г. Бостандыкский Район,
            Проспект Нұрсұлтан Назарбаев, Дом 223, Н.П. 404 © 2024. Все права
            защищены
          </p>
          <ul className="gap-3 text-[#838383] col-span-2 flex flex-col justify-center">
            <h1 className="text-white font-semibold text-lg">Главная</h1>
            <li>Главный экран</li>
            <li>Бонусы</li>
            <li>Что предлагает сервис</li>
            <li>Проверка контрагентов</li>
            <li>Тарифные планы</li>
            <li>Часто задаваемые вопросы</li>
          </ul>
          <div className="col-span-4">
            <SearchData />
          </div>
        </nav>
      </Container>
    </footer>
  );
};

type FormType = {
  q: string;
};

export const SearchData = () => {
  const form = useForm<FormType>({
    defaultValues: {
      q: "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-4xl bg-white p-2 rounded-2xl flex justify-between gap-10"
    >
      <div className="w-full relative">
        <Image
          alt="serach"
          className="absolute top-3 left-3"
          src="/iconly/search.svg"
          width={18}
          height={18}
        />
        <input
          {...form.register("q")}
          className="pl-12 h-10 text-base bg-transparent border-none ring-none outline-none w-full"
          placeholder="Введите ИИН, БИН, ФИО, название компании"
        />
      </div>
      <Button className="px-10">Найти</Button>
    </form>
  );
};
