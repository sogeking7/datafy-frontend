import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/ui/Container";

export const Hero = () => {
  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className=" flex flex-col items-center gap-[50px]">
          <Button light>Проверка контрагента</Button>
          <div className="flex flex-col gap-8 items-center">
            <h1 className="max-w-3xl text-6xl font-semibold text-center">
              Быстрая и удобная проверка контрагентов
            </h1>
            <p className="max-w-4xl text-xl text-center">
              Помогаем быстро и эффективно оценить надежность
              контрагента: защитите бизнес от штрафов, доначислений налогов и
              недобросовестных партнеров
            </p>
          </div>
          <SearchInput />
        </div>
      </div>
    </Container>
  );
};

const SearchInput = () => {
  return (
    <div className="w-full max-w-4xl bg-white p-4 rounded-2xl flex justify-between gap-10">
      <div className="w-full ">
        <Input placeholder="Введите ИИН, БИН, ФИО, название компании" />
      </div>
      <Button className="min-w-44">Найти</Button>
    </div>
  );
};
