import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeIcon } from "lucide-react";

const data = {
  positive: {
    title: "Крупнейшие работодатели Казахстана ищут сотрудников",
    body: "Жоламан Жумабекович АО Kaspi Bank CASPKZKA KZ41722C000031813479 Подписывайтесь на наш Х     Обложка",
    source: "kz-reporter.com",
    color: "#77BD8B",
  },
  negative: {
    title: "Казахстанской спортсменке срочно требуется помощь",
    body: "Фото: Руслан Пряников Акционеры АО Kaspi Bank приняли решение о выплате дивидендов по простым и",
    source: "ktk.kz",
    color: "#FF6E4E",
  },
  neutral: {
    title: "Финрегулятор сделал заявление о Kaspi Bank",
    body: "публикацией об АО Kaspi Bank сделал заявление, сообщает Exclusive.kz. Банк является одним из системообразующих",
    source: "gurk.com",
    color: "#9E9E9E",
  },
};

export const PubCard = ({
  type,
}: {
  type: "positive" | "negative" | "neutral";
}) => {
  return (
    <Card className="col-span-1 md:items-center flex md:gap-3 md:flex-row flex-col relative bg-white rounded-lg md:rounded-xl border-none">
      <div
        style={{ backgroundColor: data[type as keyof typeof data].color }}
        className=" absolute left-0 top-0  rounded-l-xl w-1 md:w-2 h-full"
      ></div>
      <CardHeader className="w-full">
        <CardTitle className="!text-lg">
          {data[type as keyof typeof data].title}
        </CardTitle>
        <p>{data[type as keyof typeof data].body}</p>
      </CardHeader>
      <div className="flex-shrink-0 md:border-l-[1px] md:h-12 md:border-l-gray-300 p-4 md:p-6  flex items-center  ">
        <a
          target="_blank"
          href={"https://" + data[type as keyof typeof data].source}
        >
          <Button
            className="gap-3 bg-primary/10 hover:bg-primary/20 text-primary"
            size={"sm"}
          >
            <GlobeIcon className="size-5" />
            {data[type as keyof typeof data].source}
          </Button>
        </a>
      </div>
    </Card>
  );
};
