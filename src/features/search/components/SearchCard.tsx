import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Counterparty } from "@/types";
import Image from "next/image";

const cardType = {
  individual: "ФЛ",
  "individual-entrepreneur": "ИП",
  "legal-entity": "ЮЛ",
} as const;


export const SearchCard = ({ data }: { data: Counterparty }) => {
  return (
    <Card className="border-[1px] relative rounded-xl border-[rgb(238,238,238)] flex pl-[calc(12px+18px)] py-6 pr-6">
      <div className={`bg-${data.type} absolute left-0 top-0 rounded-l-xl w-[10px] h-full`}></div>
      <div className="w-full">
        <h1 className="text-xl leading-none font-semibold">{data.title}</h1>
        <ul className="flex gap-2 mt-4">
          <Badge variant={data.type}>{cardType[data.type]}</Badge>
        </ul>
        <hr className="w-full my-3 border-[#F5F5F5]" />
        <ul className="grid grid-cols-[max-content_max-content] gap-x-6 gap-y-3 w-max">
          <li className="flex gap-2 items-center align-baseline">
            <Image alt="icon" src={"/iconly/data.svg"} width={20} height={20} />
            <span className="font-semibold text-sm">{data.data}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image alt="icon" src={"/iconly/date.svg"} width={20} height={20} />
            <span className="font-semibold text-sm">{data.date}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image alt="icon" src={"/iconly/user.svg"} width={20} height={20} />
            <span className="font-semibold text-sm">{data.author}</span>
          </li>
          <li className="flex gap-2 items-center col-span-3">
            <Image
              alt="icon"
              src={"/iconly/location.svg"}
              width={20}
              height={20}
            />
            <span className="font-semibold text-sm">{data.map}</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};
