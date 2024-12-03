'use client';

import { LineGraphProfitCompany } from "./LineGraphProfitCompany";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data: { [year: string]: { summa: number } } = {
  "2015": { summa: 10000 },
  "2016": { summa: 41110000 },
  "2017": { summa: 31002300 },
  "2018": { summa: 51000099 },
  "2019": { summa: 11003400 },
  "2020": { summa: 41000990 },
  "2021": { summa: 31007000 },
  "2022": { summa: 71004099 },
  "2023": { summa: 11009900 },
  "2024": { summa: 21000000 },
};

export const ProfitCompanyCard = () => {
  return (
    <Accordion collapsible type="single" className="!p-0">
      <AccordionItem
        value="f"
        className="px-4 md:px-6 rounded-lg md:rounded-xl bg-white"
      >
        <AccordionTrigger className="py-4 md:py-6">
          Прибыль компании
        </AccordionTrigger>
        <AccordionContent>
          {!!status && (
            <p className="text-info font-medium text-sm">{status}</p>
          )}
          <LineGraphProfitCompany data={data} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
