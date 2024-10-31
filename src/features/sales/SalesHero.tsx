import { Container } from "@/ui/Container";
import { SalesSearch } from "./SalesSearch";

export const SalesHero = () => {
  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className=" flex flex-col items-center gap-8 md:gap-[50px]">
          <div className="max-md:h-9 px-4 md:px-5 py-2 max-md:text-sm text-center text-primary rounded-md bg-white font-semibold">
            Проверка контрагента
          </div>
          <div className="flex flex-col gap-3 md:gap-8 items-center">
            <h1 className="max-w-3xl text-4xl md:text-6xl font-semibold text-center">
              Быстрая и удобная <span className="text-primary">проверка</span>{" "}
              контрагентов
            </h1>
            <p className="max-w-4xl text-sm max-md:text-balance max-md:text-secondary md:text-xl text-center">
              Помогаем быстро и эффективно оценить надежность
              контрагента: защитите бизнес от штрафов, доначислений налогов и
              недобросовестных партнеров
            </p>
          </div>
          <SalesSearch size="large" />
        </div>
      </div>
    </Container>
  );
};
