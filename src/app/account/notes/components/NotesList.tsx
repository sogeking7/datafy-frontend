import { NotesCard } from "./NotesCard";

const mock = [
  {
    title: "АО “KASPI BANK”",
    content: [
      {
        createdAt: "27.09.2024",
        body: "Проверить благонадежность компании и передать руководству",
      },
      {
        createdAt: "27.09.2024",
        body: "Проверить благонадежность компании и передать руководству",
      },
      {
        createdAt: "27.09.2024",
        body: "Проверить благонадежность компании и передать руководству",
      },
    ],
  },
  {
    title: "ИП “МИХАИЛ”",
    content: [
      {
        createdAt: "27.09.2024",
        body: "Проверить благонадежность компании и передать руководству",
      },
    ],
  },
];

export const NotesList = () => {
  return (
    <ul className="flex flex-col gap-3">
      {mock.map((v, idx) => (
        <NotesCard key={idx} data={v} />
      ))}
    </ul>
  );
};
