import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

export const NotesCard = ({
  data,
}: {
  data: { title: string; content: { body: string; createdAt: string }[] };
}) => {
  return (
    <Accordion collapsible type="single" className="!p-0">
      <AccordionItem
        value="f"
        className="px-4 md:px-6 rounded-lg md:rounded-xl bg-white"
      >
        <AccordionTrigger className="py-4 md:py-6">
          {data.title}
        </AccordionTrigger>
        <AccordionContent className="flex gap-3 flex-col">
          {data.content.map((v, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-gray-100 border border-input p-4 gap-3 flex-col md:flex-row flex"
            >
              <div className="w-full">
                <h1 className="text-accent-foreground font-medium">{v.body}</h1>
              </div>
              <div className="md:pl-3 flex-shrink-0 md:border-l md:border-l-gray-300 flex items-end gap-3 flex-col">
                <div className="text-secondary text-sm">
                  Опубликовано: {v.createdAt}
                </div>
                <Button
                  size={"sm"}
                  variant={"destructive"}
                  className="gap-3 max-w-min px-4"
                >
                  <TrashIcon className="size-5" />
                  Удалить
                </Button>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
