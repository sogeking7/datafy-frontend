import { CardTitle } from "@/components/ui/card";
import { NotesList } from "./components/NotesList";

export default function Page() {
  return (
    <>
      <CardTitle>Мои заметки</CardTitle>
      <NotesList />
    </>
  );
}
