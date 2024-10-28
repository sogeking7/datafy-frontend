import { Container } from "@/ui/Container";
import Image from "next/image";

export const Features = () => {
  return (
    <Container>
      <h1 className="font-semibold text-4xl md:text-5xl md:text-center">
        Проверка контрагентов
      </h1>
      <p className="text-secondary text-sm md:text-xl mt-6 md:text-center max-md:text-balance md:px-[4rem]">
        Изучите в каких закупках участвует ваш контрагент, кто его основной
        поставщик или заказчик. Проверьте на наличие в реестрах недобросовестных
        поставщиков.
      </p>
      <div className="grid grid-cols-2 mt-12 gap-8 text-balance">
        <div className="col-span-2 bg-white rounded-2xl flex flex-col md:flex-row pt-8 max-md:pb-8 md:pt-12 px-6 md:px-12 gap-8 md:gap-12">
          <div className="h-full flex justify-center flex-col md:pb-12">
            <h1 className="font-semibold text-3xl">Скорость и эффективность</h1>
            <p className="mt-4 text-secondary">
              Автоматизация проверки контрагентов позволяет быстро получать
              актуальные данные, значительно ускоряя процесс принятия решений.
            </p>
          </div>
          <Image alt="f" src="/features-0.svg" width={600} height={300} />
        </div>
        <div className="max-md:col-span-2 bg-white rounded-2xl gap-8 md:gap-10 flex flex-col pt-8 max-md:pb-8 md:pt-12 px-6">
          <div>
            <h1 className="font-semibold text-3xl">
              Минимизация ручного труда
            </h1>
            <p className="mt-4 text-secondary">
              Уменьшение объема ручной работы снижает риск ошибок и освобождает
              время для более важных задач.
            </p>
          </div>
          <Image alt="f" src="/features-1.svg" width={450} height={200} />
        </div>
        <div className="max-md:col-span-2 bg-white rounded-2xl gap-8 md:gap-10 flex flex-col pt-8 max-md:pb-8 md:pt-12 px-6">
          <div>
            <h1 className="font-semibold text-3xl">Гибкость запросов</h1>
            <p className="mt-4 text-secondary">
              DATA.FY позволяет запрашивать только нужные данные, адаптируя
              запросы под конкретные потребности бизнеса.
            </p>
          </div>
          <Image alt="f" src="/features-2.svg" width={500} height={200} />
        </div>
      </div>
    </Container>
  );
};
