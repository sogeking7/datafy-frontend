"use client";

import { Counterparty } from "@/types";
import { SearchCard } from "./SearchCard";

const mockData: Counterparty[] = [
  {
    title: 'ИП "Светлана Петрова"',
    type: "individual-entrepreneur",
    data: "БИН: 987654321098",
    date: "20-11-2010 (13 лет 11 месяцев)",
    author: "Иванов Алексей Сергеевич",
    current_type: "Действующее",
    country_name: "Казахстан",
    country_code: "KZ",
    map: "г. Нур-Султан, улица Ауэзова дом 12",
  },
  {
    title: 'ЗАО "ТехноПром"',
    type: "legal-entity",
    data: "БИН: 456789123456",
    date: "01-01-2020 (4 года 10 месяцев)",
    author: "Ким Анатолий Сергеевич",
    current_type: "Действующее",
    country_name: "Казахстан",
    country_code: "KZ",
    map: "г. Шымкент, улица Сайрам дом 18",
  },
  {
    title: 'ИП "Алексей Иванов"',
    type: "individual",
    data: "БИН: 321654987012",
    date: "12-06-2018 (6 лет 4 месяца)",
    author: "Султанов Ерлан Тлеубердиевич",
    current_type: "Действующее",
    country_name: "Казахстан",
    country_code: "KZ",
    map: "г. Алматы, Медеуский район, проспект Достык дом 12",
  },
] as const;

export const SearchResults = () => {
  return (
    <div className="my-5 flex gap-3 flex-col">
      {mockData.map((item, idx) => (
        <SearchCard data={item} key={idx} />
      ))}
    </div>
  );
};
