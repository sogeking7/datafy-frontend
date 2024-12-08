import EditSquareIcon from "@/../public/iconly/Light/Edit Square.svg";
import { NotesList } from "@/app/account/notes/components/NotesList";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

export const Notes = () => {
  return (
    <Sheet defaultOpen={false}>
      <SheetTrigger>
        <Button size={"sm"} variant={"secondary"} className="gap-3">
          <EditSquareIcon className="stroke-accent-foreground stroke-[1.5]" />
          Заметки
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 w-full">
        <SheetHeader className="">
          <SheetTitle>Заметки</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <Textarea placeholder="Написать заметку..." />
          <Button className="max-w-min">Сохранить</Button>
        </div>
        <NotesList />
      </SheetContent>
    </Sheet>
  );
};
