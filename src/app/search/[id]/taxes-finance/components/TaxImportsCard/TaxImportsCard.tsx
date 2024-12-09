"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LineGraphRatingCompany } from "../RatingCompanyCard/LineGraphRatingCompany";

const data: { [year: string]: { rating: number } } = {
  "2015": { rating: 1 },
  "2016": { rating: 2 },
  "2017": { rating: 4 },
  "2018": { rating: 4 },
  "2019": { rating: 4 },
  "2020": { rating: 4 },
  "2021": { rating: 3 },
  "2022": { rating: 5 },
  "2023": { rating: 1 },
  "2024": { rating: 2 },
};

export const TaxImportsCard = () => {
  return (
    <Accordion collapsible defaultValue="f" type="single" className="!p-0">
      <AccordionItem
        value="f"
        className="px-4 md:px-6 rounded-lg md:rounded-xl bg-white"
      >
        <AccordionTrigger className="py-4 md:py-6">
          Динамика налоговых отчислений по Импорту
        </AccordionTrigger>
        <AccordionContent>
          {!!status && (
            <p className="text-info font-medium text-sm">{status}</p>
          )}
          <LineGraphRatingCompany data={data} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
