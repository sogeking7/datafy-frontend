"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FinesTable } from "./FinesTable";
import { FineGraph } from "./FinesGraph";

export const FinesPenaltyCard = () => {
  return (
    <Accordion collapsible defaultValue="f" type="single" className="!p-0">
      <AccordionItem
        value="f"
        className="px-4 md:px-6 rounded-lg md:rounded-xl bg-white"
      >
        <AccordionTrigger className="py-4 md:py-6">
          Штрафы и пени
        </AccordionTrigger>
        <AccordionContent>
          {!!status && (
            <p className="text-info font-medium text-sm">{status}</p>
          )}
          <FineGraph />
          <FinesTable />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
