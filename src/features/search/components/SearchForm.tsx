"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

type FormType = {
  q: string;
};

export const SearchForm = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(params.get("sort") || "all");

  const form = useForm<FormType>({
    defaultValues: {
      q: params.get("q") || "",
    },
  });

  function onSubmit(values: FormType) {
    router.push(`?q=${values.q}&sort=${activeTab}`);
  }

  function handleTabChange(value: string) {
    setActiveTab(value);
    router.push(`?q=${form.getValues("q")}&sort=${value}`);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="w-full bg-white p-2 md:p-2.5 rounded-xl md:rounded-2xl flex justify-between gap-2 md:gap-10">
        <div className="w-full relative">
          <Image
            alt="search"
            className="absolute top-2 md:top-3 left-2 md:left-3"
            src="/iconly/search.svg"
            width={20}
            height={20}
          />
          <input
            {...form.register("q")}
            className="pl-10 md:pl-12 text-accent-foreground h-9 md:h-11 font-medium text-sm md:text-base bg-transparent border-none ring-none outline-none w-full"
            placeholder="Введите ИИН, БИН, ФИО, название компании"
          />
        </div>
        <Button type="submit" className="max-md:hidden min-w-44">
          Найти
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => handleTabChange(value)}
        className="mt-5 md:w-[605px] max-md:overflow-x-scroll "
      >
        <TabsList className="">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="legal-entity">Юр. лицо</TabsTrigger>
          <TabsTrigger value="individual-entrepreneur">
            Индивидуальный предприниматель
          </TabsTrigger>
          <TabsTrigger value="individual">Физ. лицо</TabsTrigger>
        </TabsList>
      </Tabs>
    </form>
  );
};
