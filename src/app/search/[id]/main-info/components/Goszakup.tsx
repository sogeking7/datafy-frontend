"use client";

import { useParams } from "next/navigation";
import { CompanyService } from "@/features/company/api/company.service";
import { useQuery } from "@tanstack/react-query";
import { Tab } from "./Tab";
import { CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const text = {
  phone: "Телефоны:",
  email: "Электронная почта:",
  website: "Сайты:",
} as const;

export const Goszakup = () => {
  const { id } = useParams();

  const company_bin = id as string;

  const { data, isPending, error } = useQuery({
    queryKey: ["get-company-goszakup", { company_bin }],
    queryFn: async () => await CompanyService().findGoszakup(company_bin),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  if (isPending) {
    return (
      <p className="max-md:my-5 mt-5 font-semibold text-sm">Загрузка...</p>
    );
  }

  if (error) return "An error has occurred: " + error.message;

  if (!data.success) {
    return (
      <p className="max-md:my-5 mt-5 font-semibold">
        Сервис временно недоступен
      </p>
    );
  }

  return (
    <Accordion collapsible type="single" className="!p-0">
      <AccordionItem
        value="f"
        className="px-3 md:px-4 rounded-lg md:rounded-xl bg-gray-100"
      >
        <AccordionTrigger className="py-3">
          <div className="flex gap-3 items-center">
            <CircleAlert className="text-gray-400 min-w-5 min-h-5 w-5 h-5" />
            <p className="text-left text-sm text-balance leading-none">
              Контакты
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex gap-3 py-2 flex-col">
          {Object.entries(data.data.goszakup_info).map((item, id) => {
            const keyv = item[0] as keyof typeof text;

            let value = item[1];
            if (value === "External server error!")
              value = "Сервис временно недоступен";
            return (
              <div key={id}>
                {text[keyv] && (
                  <h2 className="mb-1 text-accent-foreground font-semibold text-sm">
                    {text[keyv]}
                  </h2>
                )}
                {typeof value === "string" ? (
                  <p className="text-balance text-sm font-medium text-[#1A96F0]">
                    {value}
                  </p>
                ) : (
                  <ul className="gap-1">
                    {Object.keys(value).map((v) => (
                      <li
                        key={v}
                        className="text-balance text-sm font-medium text-[#1A96F0]"
                      >
                        {value[+v]}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
