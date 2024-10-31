import { Container } from "@/ui/Container";
import Image from "next/image";

const list = [
  {
    id: 0,
    n: "Основная информация",
    d: "Информация о текущих и прошлых судебных разбирательствах, указывающих на возможные риски. Участие в государственных тендерах, отражающее масштаб деятельности.",
  },
  {
    id: 1,
    n: "Финансы компаний",
    d: "Показатели оборота и рентабельности, которые помогают оценить финансовое состояние компании. Проверка активности регистрации и соблюдения налоговых обязательств.",
  },
  {
    id: 2,
    n: "Сравнение контрагентов",
    d: "Изучите в каких закупках участвует ваш контрагент, кто его основной поставщик или заказчик. Проверьте на наличие в реестрах недобросовестных поставщиков.",
  },
];

export const SalesService = () => {
  return (
    <Container>
      <button className="font-semibold rounded-lg text-base md:text-lg py-2 px-4  uppercase bg-[#F2F1FF] text-primary">
        data.fy
      </button>
      <h1 className="font-semibold text-4xl md:text-5xl mt-8 mb-12">
        Что предлагает сервис
      </h1>
      <div className="flex flex-col items-center lg:flex-row gap-10 max-lg:max-w-sm m-auto">
        {list.map((i) => (
          <SalesServiceCard key={i.n} data={i} />
        ))}
      </div>
    </Container>
  );
};

const SalesServiceCard = ({
  data,
}: {
  data: {
    id: number;
    n: string;
    d: string;
  };
}) => {
  return (
    <div className="lg:w-[33%] ">
      <div className="rounded-xl aspect-square bg-background flex items-center justify-center">
        <Image
          alt="photo"
          src={`/service-core-${data.id}.svg`}
          width={300}
          height={300}
          className="aspect-square"
          priority
        />
      </div>
      <h1 className="mt-6 text-2xl md:text-3xl font-semibold">{data.n}</h1>
      <p className="mt-3 text-secondary text-balance">{data.d}</p>
    </div>
  );
};
