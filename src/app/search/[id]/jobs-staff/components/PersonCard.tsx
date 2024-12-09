import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const PersonCard = ({ a = false }: { a?: boolean }) => {
  return (
    <Card className="md:items-center flex md:gap-3 md:flex-row flex-col relative bg-gray-100 rounded-lg md:rounded-xl border-none">
      <CardHeader className="w-full">
        <CardTitle className="!text-xl text-primary">Специалист</CardTitle>
        <div className="text-sm font-medium text-secondary">
          <p className="text-accent-foreground mb-2">1 000 000 KZT</p>
          <p>
            Город: <span className="text-accent-foreground">Алматы</span>{" "}
          </p>
          <p>
            Опыт работы:{" "}
            <span className="text-accent-foreground">6 лет 3 месяцев</span>
          </p>
          <p>
            Пол: <span className="text-accent-foreground">Мужской</span>
          </p>
          <p>
            Возраст: <span className="text-accent-foreground">28 лет</span>
          </p>
        </div>
      </CardHeader>
      <div className="flex-shrink-0 md:border-l-[1px] md:border-l-gray-300 p-4 md:p-6 flex-col flex gap-3 items-end">
        <p className="text-sm text-secondary">Актуально: 27.09.2024</p>
        {a ? (
          <div className="font-semibold text-sm rounded-md py-1 px-3 bg-[#616161]/10 text-[#616161] max-w-min whitespace-nowrap">
            В архиве
          </div>
        ) : (
          <div className="font-semibold text-sm rounded-md py-1 px-3 bg-[#4AAF57]/10 text-[#4AAF57] max-w-min whitespace-nowrap">
            Работает
          </div>
        )}
      </div>
    </Card>
  );
};
