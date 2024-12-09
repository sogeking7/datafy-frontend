import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeIcon } from "lucide-react";

const data = {
  grazhdan: {
    title: "Гражданское дело 7599-24-00-2А/8554",
    color: "#FF981F",
  },
  adminsud: {
    title: "Административное судопроизводство 7599-24-00-2А/8554",
    color: "#1A96F0",
  },
  ugolov: {
    title: "Уголовное дело 7599-24-00-2А/8554",
    color: "#FF6E4E",
  },
  admin: {
    title: "Административные дела 7599-24-00-2А/8554",
    color: "#FACC15",
  },
};

export const CourtCard = ({
  type,
}: {
  type: "grazhdan" | "adminsud" | "ugolov" | "admin";
}) => {
  return (
    <Card className="col-span-1 md:items-center flex md:gap-3 md:flex-row flex-col relative bg-gray-100 rounded-lg md:rounded-xl border-none">
      <div
        style={{ backgroundColor: data[type as keyof typeof data].color }}
        className=" absolute left-0 top-0  rounded-l-xl w-1 md:w-2 h-full"
      ></div>
      <CardHeader className="w-full font-medium text-sm">
        <CardTitle className="!text-lg">
          {data[type as keyof typeof data].title}
        </CardTitle>
        <p className="text-secondary">Категория дела:</p>
        <p className="text-accent-foreground">Финансовые споры</p>
        <p className="text-secondary">Статья:</p>
        <p className="text-accent-foreground">
          СПОРЫ, СВЯЗАННЫЕ С ЗАКЛЮЧЕНИЕМ, ИЗМЕНЕНИЕМ, РАСТОРЖЕНИЕМ ДОГОВОРА
          (СДЕЛКИ)
        </p>
        <p className="text-secondary">Ответчик:</p>
        <p className="text-accent-foreground">НУРТАЗИНА ЛЯЗАТ АЛПЫСБАЕВНА</p>
      </CardHeader>
      <div className="flex-shrink-0 md:border-l-[1px] md:h-12 md:border-l-gray-300 p-4 md:p-6 flex items-center"></div>
    </Card>
  );
};
