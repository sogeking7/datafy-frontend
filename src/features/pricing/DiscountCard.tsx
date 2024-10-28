import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";

export const DiscounCard = () => {
  return (
    <Container>
      <div className="bg-[#222] p-8 rounded-3xl relative flex flex-col gap-5 justify-between">
        <h1 className="text-white text-2xl font-semibold">
          Получите 1 000 ₸ на баланс при регистрации
        </h1>
        <p className="text-secondary font-semibold">
          Зарегистрируйтесь сейчас и получите бонус 1 000 ₸ на свой счет! Эти
          средства можно использовать для покупки одного из наших тарифов,
          снижая стоимость вашего выбора.
        </p>
        <Button className="max-w-60" size={"lg"} variant={"light"}>
          Зарегистрироваться
        </Button>
      </div>
    </Container>
  );
};
