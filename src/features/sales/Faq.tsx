import { Container } from "@/ui/Container";
import { ChevronRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqData: { q: string; a?: string }[] = [
  {
    q: "Зачем проверять контрагентов?",
    a: "Проверка контрагента — это комплексная и не разовая, как многим может показаться, работа. Но она необходима, ведь на кону — деньги и репутация компании. Не зря налоговые органы предупреждают, что ответственность за выбор контрагента полностью лежит на компании. Поэтому она должна быть заинтересована в оценке рисков и налоговых последствий, которые могут возникнуть в результате сотрудничества с сомнительными контрагентами. Если у налоговой появятся претензии к одному из ваших контрагентов, вполне вероятно, что вы невольно окажетесь вовлечены в неприятности.",
  },
  {
    q: "Какие документы нужны для проверки контрагента?",
  },
  {
    q: "Как проверить надежность контрагента?",
  },
  {
    q: "Что делать, если контрагент оказался ненадежным?",
  },
  {
    q: "Как часто нужно проверять контрагентов?",
  },
] as const;

export const Faq = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <h1 className="text-5xl font-semibold">Часто задаваемые вопросы</h1>
          <h2 className="font-semibold text-xl mt-5 text-secondary">
            Проверьте контрагентов уже сейчас!
          </h2>
          <Link href="#start">
            <Button className="mt-6 gap-3 relative right-4 text-accent-foreground" variant={"link"}>
              Начать проверку
              <ChevronRight className="size-5" />
            </Button>
          </Link>
        </div>
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="col-span-2 flex gap-3 flex-col"
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className={""}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};
