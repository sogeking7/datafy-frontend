import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Counterparty } from "@/types";
import Image from "next/image";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { Button } from "@/components/ui/button";
import { cn, createGoogleMapsLink, createYandexMapsLink } from "@/lib/utils";

const cardType = {
  individual: "ФЛ",
  "individual-entrepreneur": "ИП",
  "legal-entity": "ЮЛ",
} as const;

export const SearchCard = ({ data }: { data: Counterparty }) => {
  return (
    <Card
      className="border-[1px] relative rounded-md md:rounded-xl border-[rgb(238,238,238)] flex pl-[calc(12px+18px)] py-6 pr-6
      md:flex-row 
      flex-col
    "
    >
      <div
        className={`bg-${data.type} absolute left-0 top-0 rounded-l-xl w-1 md:w-[10px] h-full`}
      ></div>
      <div className="w-full">
        <h1 className="text-xl leading-none font-semibold">{data.name}</h1>
        <h2 className="text-base mt-2 leading-none font-semibold text-secondary">
          {data.oked_name}
        </h2>
        <ul className="flex gap-2 mt-4 flex-wrap">
          {/* <Badge variant={data.type}>{cardType[data.type]}</Badge> */}
          <Badge variant={"current"}>{data.krp_name}</Badge>
          <Badge variant={"country"}>
            <span className="mr-2 leading-none">
              {getUnicodeFlagIcon("KZ")}
            </span>
            {data.country_name || "Казахстан"}
          </Badge>
        </ul>
        <hr className="w-full my-3 border-[#F5F5F5]" />
        <ul className="grid grid-cols-1 lg:grid-cols-[max-content_max-content_max-content] gap-x-6 gap-y-3 ">
          <li>
            <div className="max-xl:col-span-full flex gap-2 items-center align-baseline">
              <Image
                alt="icon"
                src={"/iconly/data.svg"}
                width={20}
                height={20}
              />
              <span className="font-semibold text-sm">БИН: {data.bin}</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 items-center">
              <Image
                alt="icon"
                src={"/iconly/date.svg"}
                width={20}
                height={20}
              />
              <span className="font-semibold text-sm">
                {data.date_registration}
              </span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 items-center">
              <Image
                alt="icon"
                src={"/iconly/user.svg"}
                width={20}
                height={20}
              />
              <span
                className={cn(
                  "font-semibold text-sm",
                  data.fullname_director ? "" : "text-secondary"
                )}
              >
                {data.fullname_director !== " "
                  ? data.fullname_director
                  : "Неизвестно"}
              </span>
            </div>
          </li>
          <li className="col-span-full">
            <div className="flex gap-2 items-center col-span-3">
              <Image
                alt="icon"
                src={"/iconly/location.svg"}
                width={20}
                height={20}
              />
              <span className="font-semibold text-sm">
                {data.legal_address}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="md:border-l-[1px] md:ml-6 md:pl-6 max-md:mt-6 max-md:pt-6 max-md:border-t-[1px] max-md:border-t-[#F5F5F5] md:border-l-[#F5F5F5] max-md:gap-6 md:min-h-max flex flex-col justify-between">
        <ul className="flex gap-2 justify-end">
          <a
            target="_blank"
            href={createGoogleMapsLink(
              data.legal_address + " " + data.judical_address
            )}
            className="size-9 flex items-center justify-center hover:bg-gray-200 bg-gray-100 rounded-md"
          >
            <Image alt="map" src="/iconly/google.svg" width={20} height={20} />
          </a>
          <a
            target="_blank"
            href={createYandexMapsLink(
              data.legal_address + " " + data.judical_address
            )}
            className="size-9 flex items-center justify-center hover:bg-gray-200 bg-gray-100 rounded-md"
          >
            <Image alt="map" src="/iconly/yandex.svg" width={20} height={20} />
          </a>
        </ul>
        <Button size={"sm"} className="self-bottom">
          Подробнее
        </Button>
      </div>
    </Card>
  );
};
