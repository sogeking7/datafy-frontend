import { ReportCard } from "./ReportCard";
import React from "react";

const mock: {
  title: string;
  type: "individuals" | "companies";
}[] = [
  {
    title: "Ломтадзе Елизавета Михеиловна",
    type: "individuals",
  },
  {
    title: "АО “KASPI BANK”",
    type: "companies",
  },
  {
    title: "ИП “МИХАИЛ”",
    type: "individuals",
  },
  {
    title: "АО “KASPI BANK”",
    type: "companies",
  },
];

export const ReportList = () => {
  return (
    <ul className="flex flex-col gap-3">
      {mock.map((v, id) => (
        <ReportCard key={id} data={v} />
      ))}
    </ul>
  );
};
