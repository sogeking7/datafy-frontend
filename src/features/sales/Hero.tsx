"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Image from "next/image";
import { useForm } from "react-hook-form";

type FormType = {
  q: string;
};

export const Hero = () => {
  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className=" flex flex-col items-center gap-[50px]">
          <div className="h-10 px-5 py-2 text-center rounded-md bg-white font-semibold">
            Проверка контрагента
          </div>
          <div className="flex flex-col gap-8 items-center">
            <h1 className="max-w-3xl text-6xl font-semibold text-center">
              Быстрая и удобная проверка контрагентов
            </h1>
            <p className="max-w-4xl text-xl text-center">
              Помогаем быстро и эффективно оценить надежность
              контрагента: защитите бизнес от штрафов, доначислений налогов и
              недобросовестных партнеров
            </p>
          </div>
          <SearchData />
        </div>
      </div>
    </Container>
  );
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
      className="w-full max-w-4xl bg-white p-3 rounded-2xl flex justify-between gap-10"
    >
      <div className="w-full relative">
        <Image
          alt="serach"
          className="absolute top-3 left-3"
          src="/iconly/search.svg"
          width={20}
          height={20}
        />
        <input
          {...form.register("q")}
          className="pl-12 h-12 text-lg bg-transparent border-none ring-none outline-none w-full"
          placeholder="Введите ИИН, БИН, ФИО, название компании"
        />
      </div>
      <Button size={"lg"} className="min-w-44">
        Найти
      </Button>
    </form>
  );
};
