import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";

export const DiscounCard = () => {
  return (
    <Container>
      <div className="bg-black p-8 rounded-3xl relative flex justify-between">
        <img
          src="/discount.webp"
          width={700}
          className=" rounded-tr-3xl absolute top-0 right-0 z-0"
        />
        <div className="relative z-10">
          <button className=" py-4 leading-none px-5 font-semibold  text-xl rounded-lg bg-white text-black">
            Получите 1 000 ₸
          </button>
          <h1 className="mt-4 text-white text-2xl font-semibold">
            На баланс при регистрации
          </h1>
          <p className=" mt-6 text-secondary max-w-xl font-semibold">
            Зарегистрируйтесь сейчас и получите бонус 1 000 ₸ на свой счет! Эти
            средства можно использовать для покупки одного из наших тарифов,
            снижая стоимость вашего выбора.
          </p>
        </div>
        <Button
          className="self-end max-w-60 relative z-10 w-full"
          size={"lg"}
          variant={"primary2"}
        >
          Зарегистрироваться
        </Button>
      </div>
    </Container>
  );
};
