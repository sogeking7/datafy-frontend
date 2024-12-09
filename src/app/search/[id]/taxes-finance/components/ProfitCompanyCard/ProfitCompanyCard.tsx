'use client';

import { LineGraphProfitCompany } from "./LineGraphProfitCompany";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export const ProfitCompanyCard = () => {
  return (
    <Accordion collapsible defaultValue="f" type="single" className="!p-0">
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
          <LineGraphProfitCompany className="h-[250px] aspect-auto" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
